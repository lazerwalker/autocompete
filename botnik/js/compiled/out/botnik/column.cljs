(ns botnik.column
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
      [log style! draggable mobile? pretty by-id keymap in? vec-remove mutate-in! mutate-val! px
       capitalize-words]]))



(<style> :column (css 

  "#input" {
    :position :absolute
    :left :0px
    :right :0px
    :top (px (- (* (:h @d/window) 0.45) @d/saved-height))
    :bottom :0px}
  ".desktop.shifted #input" {
    :left :400px
  }

  ".row-header"{
    :white-space :pre
    :overflow :hidden
    :color @d/dgray
    :font-size :1em
    :font-weight :300
    :height (px @d/row-header)
    :border-bottom [:1px :solid @d/lgray]
    :padding [:0em (px @d/indent)]}

  ".row-header img" {
    :width (px 26)
    :height (px 26)
    :position :absolute
    :margin-top (px 6)
    :margin-left :2px
  }

  ".row-header > *" {
    :float :left}
  ".row-header .name" {
    :line-height (px @d/row-header)
    :overflow :hidden
    :max-width :40%
    :cursor :pointer
  }
  ".row-header .button" {
    :text-align :right
    :position :relative
    :float :right
    :line-height (px @d/row-header)
    :height :100%
    :padding-right :28px
    :cursor :pointer
  }
  ".row-header .button:hover, .row-header .name:hover"{
    :text-decoration :underline
  }

  ".column, #loader" {
    :font-size :1.2em
    ;:border-top [:0.3em :solid :#3f4f5a]
    :box-sizing :border-box
    :height (px (int (- (* (:h @d/window) 0.55) @d/row-header)) )
    :overflow :hidden}
  "#loader" {
    :position :absolute
    :width :100%
    :z-index 99999999
    :pointer-events :none
    :transition [:opacity :0.6s]
  }
  ".column.loading" {
    :pointer-events :none
  }
  ".column" {
    :z-index 999999998
  }
  ".mobile .row-header .name" {
    :font-size :11px
    }))




(defui Column
  static om/IQuery
  (query [this] 
    '[:words 
      :id
      :loading
      [:highlight _]
      [:arrow-input _]
      {:corpus [:hash :name :color]}])
  Object
  (render [this]
    (let [props (om/props this)]
      (html 
        (<div.row-header
          (<span.name "Source:" 
            (capitalize-words
              (clojure.string/replace 
                (or @botnik.data/SOURCENAME "") #"[\_\-]" " "))
            (onClick [e] (mutate-val! [:menu?] true)))
          (<div.button
            "Shuffle"
            (<img (src "svg/shuffle.svg"))
            (onClick [e] 
              ((:random-words! @botnik.data/FN)))))
        
          (<div
            (<div#loader 
              (style {:opacity (if (:loading props) 1 0)})
              (<div.loader))
            (<div.column
              (class (str (if (:loading props) "loading") (if (:arrow-input props) "arrow-input")))
              (map-indexed 
                (fn [i o] ((comp/onent :word-block) {:highlight (:highlight props) :id i :word o})) 
                (:words props))))))))
(comp/register :column Column {:keyfn :id})


