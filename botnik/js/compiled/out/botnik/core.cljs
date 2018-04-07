(ns botnik.core
  (:require
    [clojure.string :as string]
    [cljs.pprint :as pprint]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [hyper.tools][hyper.terse :refer [private private!] :refer-macros [html]]
    [botnik.data :as data]
    [botnik.iframe]
    [botnik.query]
    [botnik.read]
    [botnik.mutate]
    [botnik.turbobar][botnik.column][botnik.words][botnik.story][botnik.slider]
    [dollar.bill :as $ :refer [$]]
    [comp.core :as comp]
    [skin.core :refer-macros [<style>]]
    [skin.style][skin.data :as d]
    [botnik.util :refer 
      [log style! draggable mobile? pretty by-id keymap in? vec-remove mutate-in! mutate-val! px
      capitalize-words url-params action]]))

(declare insert-edited random-words! auto-complete!)

(enable-console-print!)

(def app-state botnik.data/app-state)




(defn query-text [col] (string/lower-case col))

(def LAST-QUERY (atom "???"))


;TODO handle auto-complete! from multiple sources
;TODO use multi source weight for random-words!

(defn weight-mult [col n]
  (map 
    (fn [v] (update v 1 #(* % n))) col))

(defn query [sources f]
  (let [[start end] (:selection @app-state)
        story  (subs (:story @app-state) 0 start)
        preceding-space? (#{" " "\n" "-"} (last story))
        story (query-text story)]
    (if (and (not= (:selection @app-state) [0 0])
             (or (= @LAST-QUERY [@botnik.query/MARKOV? story]) 
                 (not preceding-space?)))
      (do (mutate-val! [:columns/by-id :a :loading] false)
          (when (not preceding-space?)
                (reset! LAST-QUERY [@botnik.query/MARKOV? story])
                (auto-complete! story)))
      (do 
        (reset! LAST-QUERY [@botnik.query/MARKOV? story])
        (mutate-val! [:columns/by-id :a :scored-words] [])
        (mapv
          (fn [id] (botnik.query/suggest id story f))
          sources)))))

(defn query-col [k]
  (let [col (get-in @app-state [:columns/by-id k])
        sources (map last (get @app-state :sources))]
    (mutate-val! [:columns/by-id k :loading] true)
    (mutate-val! [:columns/by-id k :cnt] 0)
    (query sources
      (fn [o] 
        (let [singles (map first o)
              id (:id (meta o))
              weight (get-in @app-state [:sources/by-id id :weight])
              word-list (weight-mult (take 28 o) weight)]
          (mutate-in! [:columns/by-id k :scored-words] #(into % word-list))
          (mutate-in! [:columns/by-id k :cnt] inc)
          (when (= (count sources) (get-in @app-state [:columns/by-id k :cnt]))
            (mutate-val! [:columns/by-id k :words]
              (distinct (map first (reverse (sort-by last (get-in @app-state [:columns/by-id k :scored-words]))))))
            (mutate-val! [:columns/by-id k :loading] false)
            (reset! botnik.data/STALE false)) )))))


(defn refresh-words! [] (dorun (map query-col [:a])))
(swap! botnik.data/FN assoc :refresh-words! refresh-words!)

(defn random-words! []
  (let [words 
    (apply concat 
      (mapv 
        (fn [id] (botnik.query/rand-words (first (vals @botnik.query/TREES)) 28))
        (map last (get @app-state :sources))))]
    (mutate-val! [:columns/by-id :a :words] (shuffle (distinct words)))
    (action {:type :key :value :random-words})
    (reset! botnik.data/STALE false)))
(swap! botnik.data/FN assoc :random-words! random-words!)


(defn auto-complete! [s]
  (let [ids (map last (:sources @app-state))
        word (last (string/split s #"\s+"))
        all-words (mapcat (fn [id] (-> (get @botnik.query/TREES id) meta :markov keys)) ids)
        f #(re-find (re-pattern (str "^" word)) %)]
    (mutate-val! [:columns/by-id :a :words] 
      (take 18 (distinct (filter f all-words))))))


(defn split-at-last-word [s]
  (let [res (first (re-seq #"(.*[ ])?([^\s]+[\s]*$)" s))]
    (or res [s s ""])))

(defn whitespace? [s]
  (re-find #"[\s]" (or s " ")))

(defn punctuation? [s]
  (re-find #"^[\s]*[\,\.\!\?\:]" (or s "")))

(defn sentance-end? [s]
  (let [s (or s "")]
    (or (re-find #"^\s*$" s)
        (re-find #"[\.\!\?][\s]*$" s))))

(defn contraction? [s]
  (re-find #"^([ ]?|n)['’]\w" (or s "")))

(defn selection! [start end]
  (let [target (first ($ "#story.editor"))]
    (when-not (mobile?) 
      (aset target "selectionStart" start)
      (aset target "selectionEnd" end))
    (mutate-val! [:selection] [start end])))

(defn insert-word [s]
  (.blur (first ($ "#story.editor")))
  (let [story (:story @app-state)
        [sel-start sel-end] (:selection @app-state)
        before (apply str (take sel-start story))
        preceding-space? (#{" " "\n" "-"} (last before))
        after (apply str (drop sel-end story))
        punct? (or (punctuation? s) (contraction? s))
        s (if (sentance-end? before) (string/capitalize s) s)
        word (str (if (whitespace? (last before)) "" (if punct? "" " ")) s
                  (if (whitespace? (first after)) (if (nil? (first after)) " " " ") 
                      (if (punctuation? (first after)) "" " ")))
        after (if (whitespace? (first after)) (apply str (rest after)) after)
        before (if (and punct? (whitespace? (last before))) (apply str (butlast before)) before)
        before (if (or preceding-space? (punctuation? word) (re-find #"\-" word)) 
                   before 
                   (string/join " " (butlast (string/split before " "))))
        text (str before word after)
        end (+ (count before) (count word))]
    ;(prn [word before])
    (action {:type :insert :word s :before before 
      :words (-> @app-state :columns/by-id :a :words)})
    (mutate-val! [:story] text #_[:comp :story] )
    
    (js/localStorage.setItem "story" (-> @app-state :story))
    (selection! end end)
    (when-not (mobile?) 
      (botnik.story/sync-native-select))
    (refresh-words!)))
(swap! botnik.data/FN assoc :insert-word insert-word)

(defn delete-word []
  (let [story (:story @app-state)
        [sel-start sel-end] (:selection @app-state)
        before (apply str (take sel-start story))
        after (apply str (drop sel-end story))
        [original kept deleted] (split-at-last-word before)
        kept (apply str (drop-last (count deleted) before))
        text (str kept after)
        end (count kept)
        target (first ($ "#story.editor"))]
  (set! (.-value target) text)
  (mutate-val! [:story] text)
  (selection! end end)
  (botnik.story/sync-native-select)
  (refresh-words!)
  (reset! botnik.data/last-word (gensym))))

(defn navigate-horizontal-word [n]
  (let [[columns rows] @d/suggestions
        selected (-> @app-state :highlight)
        m (mod selected columns)
        v (if (neg? n) 
              (if (= 0 m) (dec columns) -1)
              (if (= (dec columns) m) (- (dec columns)) 1))]
    (mutate-val! [:highlight] (+ selected v))))

(defn navigate-vertical-word [n]
  (let [[columns rows] @d/suggestions
        selected (-> @app-state :highlight)
        m (mod selected (* rows columns))
        v (if (neg? n) 
              (if (< selected columns) (- (* rows columns) columns) (- columns))
              (if (> selected (dec (- (* rows columns) columns))) (- (- (* rows columns) columns))  columns))]
    (mutate-val! [:highlight] (+ selected v))))

(defn load-source [source]
  (set! (.-href js/location) 
    (str "http://" 
        (.-host js/location)
        (.-pathname js/location)
        "?source=" source)))

(defui Main
  static om/IQuery
  (query [this] 
    `[:editing?
      :menu?
      {:story ~(om/get-query (comp/camels :story))}
      {:columns ~(om/get-query (comp/camels :column))}
      :voice
      {:sources [:name :weight :id]}
      :dragging
      :saved-words
      :root-refresh
      :upload
      :error
      :save-bar
      :arrow-input
      :suggestions
      :suggestion-options
      :source-listing])
  Object
  (render [this]
    (let [props (om/props this)
          menu?    (:menu? props)
          error?   (:error props)
          no-words? (empty? (:saved-words props))
          saved? (or (:dragging props) (not no-words?))]
      (html  
        (<div (class (str 
          (if (:editing? props) "edit-mode ") 
          (if (mobile?) "mobile " "desktop ")
          (if menu? "shifted ")
          (if (:dragging props) "drag")))
          (<div#menu
            (<div.button.hamburger 
              (<img (src "svg/hamburger.svg"))
              (onClick [e] (mutate-val! [:menu?] true)))
            (<div.title "Predictive Writer"))
          ((comp/onent :story) (:story props))
          (if (:save-bar props)
            (<div#saved
              ;(class (if saved? "saved"))
              (if no-words? 
                (<h1 "Drop words here to save them")
                (map-indexed 
                  (fn [i o] ((comp/onent :word-block) (assoc o :id i))) 
                  (:saved-words props)))))
          (<div#input
            (class (if (:dragging props) "dragging"))
            (map (comp/onent :column) (:columns props)))
          (<div#sidebar
            (class (if (or menu? error?) "open" "closed"))
            (when error?
              (<div.content
                (<h3 "Error:")
                (<div.cancel
                  (<img (src "svg/menuBack.svg"))
                  (onClick [e] 
                    (mutate-val! [:error] nil)))
                (<p (:error props))))
            (when menu?
              (<div.content 
                (if (-> props :upload :uploading?)
                  (<h3 "uploading...")
                  (<div
                    (<div.cancel
                      (<img (src "svg/menuBack.svg"))
                      (onClick [e] 
                        (mutate-val! [:menu?] false)
                        (mutate-val! [:upload] {:file nil :uploading? false :result nil})))
                    (<h3 "custom voice")
                    (<input (type "file") (ref "file-upload")
                      (onChange [e]
                        (mutate-val! [:upload :file] (aget e.nativeEvent.target.files 0)) ))
                    (when (-> props :upload :file)
                      (<button "upload"
                        (onClick [e]
                          (mutate-val! [:upload :uploading?] true) 
                          (js/post_file (str data/API-SERVER "/register") (-> props :upload :file) 
                            (fn [res]
                              (let [o (js/JSON.parse res)
                                    id (aget o "id")]
                                (if id 
                                  (load-source id)
                                  (do 
                                    (mutate-val! [:upload :uploading?] false)
                                    (mutate-val! [:upload :file] nil)
                                    (mutate-val! [:menu?] false)
                                    (if-let [error (aget o "error")]
                                      (mutate-val! [:error] error) )))))))))


                    (<h3 "options")
                    (<label "show saved word bar" 
                      (<input (type "checkbox") 
                        (checked (:save-bar props))
                        (onChange [e] 
                          (mutate-in! [:save-bar] not)
                          (let [save? (-> @app-state :save-bar)] 
                            (reset! skin.data/saved-height (if (-> @app-state :save-bar) 45 0))
                            (js/localStorage.setItem "save-bar" save?) ))))
                    (<label "arrow key & tab input" 
                      (<input (type "checkbox") 
                        (checked (:arrow-input props))
                        (onChange [e] 
                          (mutate-in! [:arrow-input] not)
                          (js/localStorage.setItem "arrow-input" (-> @app-state :arrow-input)) )))
                    (<p (<b "suggestions"))
                    (<label "columns" 
                      (<select
                        (value (str (get-in props [:suggestions 0])))
                        (onChange [e]
                          (mutate-val! [:suggestions 0] (js/parseInt e.nativeEvent.target.value))
                          (reset! d/suggestions (-> @app-state :suggestions))
                          (js/localStorage.setItem "suggestions" (-> @app-state :suggestions)))
                        (map 
                          #(<option %)
                          (-> props :suggestion-options :columns))))
                    (<label "rows" 
                      (<select
                        (value (str (get-in props [:suggestions 1])))
                        (onChange [e]
                          (mutate-val! [:suggestions 1] (js/parseInt e.nativeEvent.target.value))
                          (reset! d/suggestions (-> @app-state :suggestions))
                          (js/localStorage.setItem "suggestions" (-> @app-state :suggestions)))
                        (map 
                          #(<option %)
                          (-> props :suggestion-options :rows))))


                    (when (> (count (:sources props)) 1)
                      (<div
                        (<h3 "voice volume")
                        (map 
                          (fn [source] 
                            ((comp/onent :slider) {
                              :name (:name source) 
                              :value (:weight source) 
                              :fn (fn [v] (mutate-val! [:sources/by-id (:id source) :weight] v))
                              :done (fn [] 
                                (reset! LAST-QUERY (rand))
                                (refresh-words!))}))
                          (:sources props))))


                    (<h3 "voices")
                    (map-indexed
                      (fn [idx catagory] 
                        (<div.source-catagory 
                          (onClick [e] (mutate-in! [:source-listing idx :expanded] not))
                          (if (:expanded catagory) "▼ " "▶ ")
                          (<b (get catagory "name"))
                          (if (:expanded catagory) 
                            (map
                              (fn [source]
                                (<div.source
                                  (get source "name")
                                  (onClick [e] (load-source (get source "id")))))
                              (get catagory "sources")))))
                      (:source-listing props))
                    
                    ))))))))))

(defonce reconciler (om/reconciler {
  :state app-state
  :logger nil
  :pathopt true
  :parser (om/parser {         
    :read botnik.read/read 
    :mutate botnik.mutate/mutate})}))

(reset! botnik.data/RECONCILER reconciler)

(defn resize [e] 
  (let [ww js/window.innerWidth
        wh js/window.innerHeight]
    (if-let [el js/document.activeElement]
      (if (> wh (:h @skin.data/window))
          (.blur el)))
    (swap! skin.data/window conj {:w ww :h wh})))

(defn keypress [e]
  (if-let [pad (last (re-find #"(Numpad|Digit)(\d)" (or (.-code e) "")))]
    (let [pad (int pad)
          pad (if (.-altKey e) (+ pad 10) pad)
          el (get (vec ($ ".column .word.block")) (dec pad))]
          (aset e "caught" true)
      (when-not (.-shiftKey e)
        (if el (.click el))
        (.preventDefault e))))
  (cond (and (= e.code "Enter")
             (.-altKey e))
        (do (random-words!)
            (.preventDefault e))
        (or (= e.code "Delete")
            (#{8 46} e.keyCode))
        (do (log "Delete")
            (aset e "caught" true)
            (delete-word)
            (action {:type :key :value :delete})
            (.preventDefault e))
        (#{"," "." "?" ":" ";" "-" "!"} e.key)
        (do (aset e "caught" true)
            (insert-word e.key)
            (.preventDefault e)) )
  (when (-> @app-state :arrow-input)
    (cond (#{"ArrowRight"} e.key)
          (do (aset e "caught" true) 
            (navigate-horizontal-word 1)
            (.preventDefault e))
          (#{"ArrowLeft"} e.key)
          (do (aset e "caught" true) 
            (navigate-horizontal-word -1)
            (.preventDefault e))
          (#{"ArrowUp"} e.key)
          (do (aset e "caught" true) 
            (navigate-vertical-word -1)
            (.preventDefault e))
          (#{"ArrowDown"} e.key)
          (do (aset e "caught" true) 
            (navigate-vertical-word 1)
            (.preventDefault e))
          (#{"Tab"} e.key)
          (do (aset e "caught" true) 
            (let [cursor (-> @app-state :highlight)
                  words (vec ($ "#input .word.block"))
                  el (get words cursor)]
              (if el (.click el)))
            (.preventDefault e)))))

(defn on-js-reload [] )

(defonce setup? (atom nil))
(def -setup 
  (when-not @setup?
    (swap! setup? not)
    (.addEventListener js/window "resize" resize)
    (.addEventListener js/document "keydown" (fn [e] (keypress e)))
    (let [source (get (url-params) "source" "589b43f09f1100d6a871cb9c3dda71a6")]
      (let [sources (string/split source ",")]
        (mutate-val! [:columns/by-id :a :corpus] [:sources/by-id source])
        (dorun
          (map 
            (fn [s]
              (mutate-val! [:sources/by-id s] {:id s :weight 1.0})
              (mutate-in! [:sources] #(conj % [:sources/by-id s])))
            sources))))
    (skin.core/mount)
    (js/setTimeout 
      (fn [] 
        (when (< (count (vals @botnik.query/TREES)) 1) 
          (js/console.log "kicking tires..")
          (mutate-in! [:root-refresh] inc)
          (refresh-words!))) 3000)
    (let [save? (= "true" (js/localStorage.getItem "save-bar"))
          arrow? (= "true" (js/localStorage.getItem "arrow-input"))
          suggestions (cljs.reader/read-string (str (js/localStorage.getItem "suggestions")))
          suggestions (or suggestions (if (mobile?) [2 3] [3 6]))]
      (mutate-val! [:save-bar] (if save? true false))
      (mutate-val! [:arrow-input] (if arrow? true false))
      (mutate-val! [:suggestions] suggestions)
      (reset! skin.data/suggestions suggestions)
      (reset! skin.data/saved-height (if (-> @app-state :save-bar) 45 0)))
    (js/get_json "sources.json"
      (fn [o] (mutate-val! [:source-listing] (js->clj o))))
    (action {:type :load})))

(dotimes [i 10] (js/history.pushState #js {} ""))

(om/add-root! reconciler Main (by-id "main"))
(resize nil)