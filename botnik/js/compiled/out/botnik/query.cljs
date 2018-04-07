(ns botnik.query
  (:require
    [clojure.string :as string]
    [cljs.pprint :as pprint]
    [botnik.data :as data]
    [botnik.iframe :as iframe]
    [botnik.tree :as tree]
    [botnik.util :refer
      [log mutate-in! mutate-val!]]))

(enable-console-print!)

(aset js/window "DEBUG" false)

(defonce SOURCES (atom {}))
(defonce TREES (atom {}))
(defonce MARKOV? (atom false))

(defn get-pos [col f]
  (if (#{"" nil [] '() [""]} col)
    (f #js {"POS" #js []})
    (js/get_json
      (str js/API_SERVER "/nlp/pos?s="
        (js/escape (if (string? col) col (string/join " " col))))
      (fn [o] (f o)))))

(defn get-source [id f]
  (js/get_text (str data/API-SERVER "/sources/get?id=" id ".POSOURCE") f))


(defn multi-get [col f]
  (let [rs (atom {})
        needed (set (keys col))]
    (dorun
      (for [[k url] col]
        (js/get_text url
          (fn [o]
            (swap! rs assoc k o)
            (if (= (set (keys @rs)) needed)
              (f @rs))))))))


(defn multi-pass [tree-atom id f]
  (multi-get
  {:meta  (str data/API-SERVER "/sources/list?id=" id)
   :posn4 (str data/API-SERVER "/sources/get?id=" id ".POSN4")
   :n4    (str data/API-SERVER "/sources/get?id=" id ".N4")}
  (fn [m]
    (let [cnt (-> @tree-atom meta :source-count)
          info (js/JSON.parse (:meta m))
          source-name (aget info "name")]
      (mutate-val! [:sources/by-id id :name] source-name)
      (swap! data/SOURCENAME #(str % " " source-name))
      (set! (.-title js/document) (str "Botnik - " @data/SOURCENAME))
      (let [tree (tree/posn-collate @tree-atom (:posn4 m) (:n4 m))
            tree (with-meta tree (assoc (meta tree) :source-count (inc cnt)))]
        (f tree))))))


(defn rand-words
  ([tree n]
    (take n (shuffle (keys (-> tree meta :markov)))))
  ([tree n token]
    (take n (shuffle (map first (:words (meta (get tree token))))))))

(defn add-teir [col n]
  (map
    (fn [v] (update v 1 #(+ % n))) col))

(defn weight-mult [col n]
  (map
    (fn [v] (update v 1 #(* % n))) col))

(defn query [f s id limit]
  (get-pos (take-last 7 (string/split s " "))
    (fn [o]
      (let [tree (get @TREES id)
            POS (aget o "POS")
            WORDS (aget o "words")
            results
            (for [N (range 3 5)]
              (tree/pos-query tree N POS))
            markov-results
            (for [N (range 2 5)]
              (tree/query (-> tree meta :markov) N WORDS))
            arranged (lazy-cat
              [(weight-mult (take 35 (-> tree meta :baseline)) 1)]
              (map add-teir results (range 1 3))
              (map add-teir markov-results (range 4 7)))

            weighted arranged
            combined (reverse (remove #(#{"," "." "!" ";" "?" "-" ""} (first %))
              (sort-by last ((partial into {}) weighted))))]

        (js/console.log o)
        (iframe/sendLatest)
        (js/console.log (clj->js weighted))
        (if js/DEBUG (mapv (comp prn #(map first %)) weighted))
        (f (with-meta (vec (take limit combined)) {:id id}))))))

(defn suggest [id s f]
  (if-let [tree (get @TREES id)]
    (query f s id 30)
    (let [new-tree (atom (with-meta {} {:source-count 0}))]
      (prn 'loading id)
      (multi-pass new-tree id
        (fn [tree]
          (reset! new-tree tree)
          (swap! TREES assoc id (tree/score tree))
          (query f s id 30))))))