(ns botnik.slider
  (:require     
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

(<style> :slider (css
  "#sidebar label.slider" {
    :cursor :default}
  "#sidebar label.slider:hover" {
    :text-decoration :none}
      
  ".slider input" {
    :cursor :pointer
    :width :100%}

  ".slider span" {
    :font-size :0.8em
    :margin-top :-0.3em}
  
  ".slider .left" {
    :float :left
    :clear :both}
  ".slider .right" {
    :float :right}))

(defui Slider
  Object
  (render [this]
    (let [props (om/props this)]
      (html 
        (<label.slider.clearfix (:name props) 
          (<input
            (type "range")
            (value (str (* (:value props) 100)))
            (onChange [e] 
              (let [v (* 0.01 (js/parseInt e.nativeEvent.target.value))]
                ((or (:fn props) (fn [_])) v)))
            (onMouseUp [e] ((or (:done props) (fn [])))) )
          (<span.left "0")
          (<span.right "1"))))))
(comp/register :slider Slider)