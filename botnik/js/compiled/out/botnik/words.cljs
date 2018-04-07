(ns botnik.words
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

(<style> :dynamic (css
  ".block" {
    :width (str (/ 100 (get @d/suggestions 0)) "%")
    :padding :5px
    :box-sizing :border-box
    :font-weight 300
    :color "rgb(180,180,180)"
    :height (px (/ (- (* (:h @d/window) 0.55)  @d/row-header) (get @d/suggestions 1)) )
    :float :left
    :text-align :center}

  "#saved .block .key, #dragged .block .key" {
    :display :none}
  "span.key" {
    :font-size :11px
    :line-height :11px
    :pointer-events :none
    :float :right
    :padding [:4px :8px]
    :margin-bottom :-10px
    :color "rgb(200,200,200)"}
  ".block span:nth-child(2)"{
    :clear :both
    :width :100%
    :display :inline-block
    :line-height (px (/ (- (* (:h @d/window) 0.55)  @d/row-header) 12) )
  }

  ".column .word, #dragged .word"{
    :overflow :hidden
    :transition [:color :0.1s]
    :cursor :pointer
    :background :white
    :border-right [:1px :solid "rgb(200,200,200)"]
    :border-bottom [:1px :solid "rgb(200,200,200)"] }
  ".column.loading .word" {
    :color :silver}
  ".dragging .column .word:active" {
    :background :white}
  "#dragged .block" {
    :pointer-events :none
    :position :absolute
    :z-index 9999999999
    :top :-400px
    :font-size :1em
    :height :3em
    :border [:0.2em :solid :black]
    :box-shadow [:0.2em :0.2em :0.5em "rgba(0,0,0,0.7)"]
    :min-width :6em
    :width :auto}
  ".arrow-input .word.selected"{
    :background "#ffffa1"
  }
  ".word:hover" {
    :color "rgb(242,184,121)"
    }))

(def last-word botnik.data/last-word)

(defui WordBlock
  Object
  (componentDidMount [this]
    (let [ham (draggable (dom/node this "word") {
      :panstart 
      (fn [e] 
        (when (and (= 2 e.eventType) (-> @botnik.data/app-state :save-bar))
          (let [props (om/props this)
                el (dom/node this "word")
                clone (first ($ (aget el "outerHTML")))
                holder (first ($ "#dragged"))] 
            (mutate-val! [:dragging] (merge props {:el clone :saved true}))
            (aset holder "innerHTML"  "")
            (.appendChild holder clone)
            (log e))))
      :pan
      (fn [e] 
        (when (-> @botnik.data/app-state :dragging)
          (let [props (om/props this)
                el (-> @botnik.data/app-state :dragging :el)
                center (aget e "center")
                rect (.getBoundingClientRect el)
                x (aget center "x")
                y (aget center "y")] 
            (when (not= [x y] [0 0])
              (style! el :left (str (- x (* (aget rect "width") 0.5)) "px"))
              (style! el :top (str (- y (* (aget rect "height") 0.5)) "px"))) )))
      :panend 
      (fn [e] 
        (when (-> @botnik.data/app-state :dragging) 
          (let [props (om/props this)
                holder (first ($ "#dragged"))
                y (aget (aget e "center") "y")
                drop-bottom (:h @skin.data/window)]
            (log e) 
            (when (< (- drop-bottom 60) y drop-bottom)
              (log "drop!")
              (mutate-in! [:saved-words] #(conj % (-> @botnik.data/app-state :dragging))))
            (aset holder "innerHTML" "")
            (mutate-val! [:dragging] false)
            (js/setTimeout (fn [] (.focus (first ($ "#story.editor")))) 150)
            )))}
      #js {
        :touchAction "compute"
        :recognizers #js [
          #js [js/Hammer.Pan #js{
            :direction js/Hammer.DIRECTION_VERTICAL
            :threshold 20}]]} )] ))
  (render [this]
    (let [props (om/props this)
          word (:word props)
          len (count word)
          bw (/ (:w @skin.data/window) 3)
          size (cond 
            (< len 6 ) 24
            (< len 10 ) 20
            (< len 12) 18
            :else 12)
          line (* size 1.2)]
      (html 
        (<div.word.block
          (class (if (= (:highlight props) (:id props)) "selected" ""))
          (when-not (mobile?)
            (<span.key   
              (cond (< (inc (:id props)) 10)  
                  (inc (:id props)) 
                  (< (inc (:id props)) 20)
                  (str "ALT-" (-  (inc (:id props)) 10)))))
          (<span word)
          (style {:fontSize (str size "px") :lineHeight (str line "px")})
          (ref "word")
          (onClick [e] 
            (let [word (if (:saved props) 
                           word
                           (get (vec (get-in @botnik.data/app-state [:columns/by-id :a :words])) 
                                (:id props)))]
              (when-not 
                (or (= word @last-word)
                    @botnik.data/word-cooldown
                    (get-in @botnik.data/app-state [:columns/by-id :a :loading]))
                
                  ((:insert-word @botnik.data/FN) word)
                  (reset! botnik.data/word-cooldown true)
                  (js/setTimeout (fn [] 
                    (reset! botnik.data/word-cooldown false)) 50)
                  (when (:saved props)
                    (mutate-in! [:saved-words] #(vec-remove % (:id props)))))
              (reset! last-word word))
              ))))))
(comp/register :word-block WordBlock {:keyfn :id})