(ns botnik.turbobar
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

(<style> :turbo (css
  ".turbo-bar" {
    :height (px @d/turbo-height)
    :background (:-1 @d/colors)}
  ".turbo-bar .label" {
    :position :absolute
    :box-sizing :border-box
    :width :80px
    :height (px @d/turbo-height)
    :padding [:9px :0.3em]
    :font-size :1.1em
    :text-align :center
    :background (:3 @d/colors)
    :color :white
    :cursor :pointer}
  ".turbo-bar .slider" {
    :position :absolute
    :box-sizing :border-box
    :left :80px
    :right :0em
    :height (px @d/turbo-height)
    :padding :10px}
  ".turbo-bar.off .slider" {
    :pointer-events :none
    :opacity :0.4} 
  ".turbo-bar .numbers" {
    :font-family "courier, monospace"
    :font-size :0.9em
    :border-top [:1px :solid (:3 @d/colors)]
    :color :white ;(:-5 @d/colors)
    :display :flex
    :flex-direction :row
    :justify-content :space-between
    :margin-top :13px
    :padding-top :12px}
  ".turbo-bar .knob" {
    :position :absolute
    :width :5px
    :height :25px
    :background :white
    :border [:1px :solid (:-3 @d/colors)]}))

(defonce AUTO (atom true))

(defn auto-word! []
  (if (-> @botnik.data/app-state :turbo :on)
    (let [words (vec ($ ".column .word.block"))]
      (if-not (empty? words) 
        (let [word (rand-nth words)]
          (.click word)))))
  (let [speed (inc @botnik.data/TURBOSPEED)
        timer (/ 2500 (* speed speed))]
    (js/setTimeout auto-word! timer)))

(defonce -auto (auto-word!))

(defui TurboBar
  Object
  (componentDidMount [this]
    (let [set-slider
          (fn [e] 
            (let [increments (:max (om/props this))
                  ham (dom/node this "slider")
                  knob (dom/node this "knob")
                  slider-rect (.getBoundingClientRect ham) 
                  center (.-center e)
                  [x y] [(.-x center)(.-y center)]
                  working-width (.-width slider-rect)
                  knob-x (max 10 (min (- x (.-left slider-rect))
                                      (- (.-width slider-rect) 15)))
                  ratio (/ knob-x working-width)
                  step (int (+ (* ratio increments) 0.5))
                  step-x (+ 10 (* step (/ working-width (+ increments 0.35))))]
              (reset! botnik.data/TURBOSPEED step)
              (style! knob :left (str knob-x "px"))))
          ham (draggable (dom/node this "slider") {
      :panstart 
      (fn [e] 
        (log e))
      :tap set-slider
      :pan set-slider
      :panend 
      (fn [e] )}
      #js {
        :touchAction "compute"
        :recognizers #js [
          #js [js/Hammer.Pan #js{}]
          #js [js/Hammer.Tap #js{}]]} )] ))
  (render [this]
    (let [props (om/props this)]
      (html 
        (<div.turbo-bar
          (class (if (:on props) "on" "off"))
          (<div.label "TURBO TEXT"
            (onClick [e] (mutate-in! [:turbo :on] not)))
          (<div.slider (ref "slider")
            (<div.knob (ref "knob"))
            (<div.numbers
              (map 
                (fn [n] 
                  (<span.setting (key n) (inc n)))
                (range (inc (:max props)))))))))))
(comp/register :turbo-bar TurboBar)