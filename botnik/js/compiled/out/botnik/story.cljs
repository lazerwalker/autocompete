(ns botnik.story
  (:require     
    [clojure.string :as string]
    [cljs.pprint :as pprint]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [hyper.tools][hyper.terse :refer [private private!] :refer-macros [html]]
    [dollar.bill :as $ :refer [$]]
    [comp.core :as comp]
    [skin.core :refer-macros [<style>]]
    [skin.style][skin.data :as d]
    [botnik.data]
    [botnik.util :refer 
      [log style! draggable mobile? pretty by-id keymap in? vec-remove mutate-in! mutate-val! px]]))


(<style> :mobile (css
  "div.edit-mode.mobile #input, div.edit-mode.mobile #saved"{
    :display :none} 
  "div.edit-mode.mobile #story, div.edit-mode.mobile #story.editor" {
    :height (px (- (* (:h @d/window) 1) @d/turbo-height))}
  "div.edit-mode #story" {
    :opacity 0}
  "div.edit-mode #story.editor" {
    :opacity 1}))

(<style> :story-comp (css
  ".story-holder" {
    :position :absolute
    :left :0px
    :right :0px
  }
  ".desktop.shifted .story-holder" {
    :left :400px
  }
  "#story" {
    :white-space :pre-wrap
    :transition [:bottom :0.2s]
    :font-size :1em
    :font-weight :100
    :font-family "'Roboto Mono', monospace"
    :padding (px @d/indent)
    :position :absolute
    :box-sizing :border-box
    :background :#1e1e1e
    :opacity 0
    :top (px @d/turbo-height)
    :width :100%
    :height (px (- (* (:h @d/window) 0.45) @d/turbo-height @d/saved-height))}

  "#story.editor" {
    :color :white
    :caret-color "rgb(242,184,121)"
    ;:margin [:1px :0px :0px :1px]
    :border [:0px :solid :transparent]
    :border-radius :0px
    :-webkit-appearance :none
    :opacity 1
    ;:left :-2px
    :margin-top (if (mobile?) :-1px :0px)
    :resize :none
    :height (px (- (* (:h @d/window) 0.45) @d/turbo-height @d/saved-height))
  }
  ".drag #story" {
        :pointer-events :none
    :user-select :none
    :-webkit-user-select :none
    :opacity 1
    :color :white
  }
  ".drag #story.editor" {

    :display :none
  }
  "#story.saved" {
    :bottom (px (+ @d/story-height @d/saved-height))}))


(defn sync-scroll []
  (let [editor (first ($ "#story.editor"))
        story (first ($ "#story.display"))]
  (set! (.-scrollTop editor) (.-scrollTop story))))

(defn scroll-down! [id]
  (let [el (by-id id)
        cursor (first ($ ".cursor"))]
    (try (.scrollIntoViewIfNeeded cursor)
        (catch js/Error e
          (.scrollIntoView cursor)))))

(defn selection-change [target]
  (let [start (.-selectionStart target)
        end   (.-selectionEnd target)]
    (when-not @botnik.data/word-cooldown 
      (mutate-val! [:story] target.value #_[:comp :story] )
      (mutate-val! [:selection] [start end] #_[:comp :story] )
      ((:refresh-words! @botnik.data/FN)))))

(defn sync-native-select []
  (let [[start end] (-> @botnik.data/app-state :selection)
        target (first ($ "#story.editor"))]
    (set! (.-selectionStart target) start)
    (set! (.-selectionEnd target) end)))

(defui Story
  ;static om/Ident
  ;(ident [this props] [:comp :story])
  static om/IQuery
  (query [this] 
    '[[:story _] 
      [:selection _]
      [:menu? _]])
  Object
  (componentDidUpdate [this props state]
    (let [target (dom/node this "editor")
          story (dom/node this "story")]
      (scroll-down! "story")
      (set! (.-scrollTop target) (.-scrollTop story))))
  (componentDidMount [this p n]
    (.focus (first ($ "#story.editor"))))
  (render [this]
    (let [props (om/props this)
          words (or (:story props) "")
          [sel-start sel-end] (or (:selection props) [0 0])]
      (html 
        (<div.story-holder
          (<div#story.display
            (ref "story")
            (apply str (take sel-start words))
            (<span.cursor 
              (apply str (subvec (vec words) sel-start sel-end)))
            (apply str (drop sel-end words)))

          (<textarea#story.editor
            (ref "editor")
            (onSelect [e] 
              (selection-change (dom/node this "editor")))
            (onKeyUp [e] 
              #_(if (= e.nativeEvent.code "Delete")
                  (selection-change (dom/node this "editor")))
              )
            (onChange [e])
            (onClick [e] 
              (mutate-val! [:editing?] true)
              (mutate-in! [:root-refresh :value] inc))
            (onBlur [e] 
              (if-not (or (mobile?) (:menu? props))
                (let [target e.nativeEvent.target]
                  (js/setTimeout 
                    (fn []
                      (.focus target)
                      (sync-native-select)) 100))
                (mutate-val! [:editing?] false)))
            (onScroll [e] 
              (let [target e.nativeEvent.target
                    story (dom/node this "story")] 
                (set! (.-scrollTop story) (.-scrollTop target)) ))
            (value words)))))))
(comp/register :story Story)