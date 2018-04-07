(ns skin.style
  (:require-macros 
    [reagent.ratom :refer [reaction]])
  (:require 
    [reagent.core :as r]
    [skin.core :refer [inspect] :refer-macros [<style>]]
    [skin.data :as d]
    [botnik.util :refer [mobile? px]]))



(<style> :app
  (css 
    "body" {
      :user-select :none
      :background :white
      :margin :0em 
      :font-family "'Roboto Mono', monospace"
      :overflow :hidden}
    "div#main" {
      :position :absolute
      :left :0em
      :right :0em
      :bottom :0em
      :top :0em }
    ".clearfix:after" {
      :content "\"\""
      :display :table
      :clear :both}))


(<style> :test (css
  "#story" {
    :user-select :text
    :whitespace :pre
    ;:overflow :hidden
    :overflow-y :auto}
  "#story *" {
    :white-space :pre-wrap
    ;:outline [:1px :dashed :silver]
  }

  "#story .user" {
    :font-size :1.2em
    :padding-left :0.6em}
  "#story.editing" {
    :background :#ffeddc}
  "div#main span.cursor" {
    :border [:1px :solid :gray]
    ;:display :inline-block
    :background :silver
    :height :1em}
  "div#main span.cursor:hover" {
    :outline [:2px :solid :orange]}
  "div#main span.cursor .catcher" {
    :border [:1px :solid :teal]
    :position :absolute
    :width :26px
    :height :2.6em
    :margin-top :-10px
    :margin-left :-16px
    :opacity 0}
  "#menu" {
    :box-sizing :border-box
    :padding [:5px]
    :position :absolute
    :top :0em
    :width :100%
    :height (px (- @d/turbo-height 0))
    :left :0em 
    :right :0em }
  "#menu .button" {
    :float :left
    :font-family "monospace, courier"
    :width (px 36)
    :line-height (px (* @d/bottom-bar 0.7))
    :font-size (px (* @d/bottom-bar 0.5))
    :margin-left (px (- @d/indent 25))
    :padding [0 (px 15)]
    :cursor :pointer}
  "#menu .button.pic" {}
  "#menu .button:active" {}
  "#menu .button.active" {
    :color :yellow }
  "#menu .button img" {
    :margin-top :2px
    :width (px 30)}
  "#menu .title" {
    :float :right
    :font-weight :600
    :font-size :0.94em
    :line-height :37px
    :margin-right (px (- @d/indent 5))
  } ))

(<style> :sharing (css 
  "#sidebar" {
    :color :#1e1e1e
    :z-index 999999999
    :position :absolute
    :top :0em
    :bottom :0em 
    :width :0em
    :font-size :1em
    :background :white
    :overflow :hidden
    :overflow-y :auto
    :border-right [:1px :solid @d/lgray]}

  ".mobile #sidebar.open" {
    :width :100% }

  "#sidebar.open" {
    :width :400px}    

  "#sidebar .content" {
    :padding-left (px @d/indent)
    :padding-right (px @d/indent)
    :padding-top :30px
    :font-size :0.9em
  }
  "#sidebar h3" {
    :font-size :1.4em
    :clear :both
    :padding-top :1em
  }
  "#sidebar input" {
    :background :white
    :font-size :1em
    :float :left
    :clear :both
    :margin [:0.5em :0em]
  }

  "#sidebar input[type=checkbox]" {
    :zoom 1.2
    :margin [:0.15em :0.2em :0em :0em]
  }
  "#sidebar select"{
    :float :left
    :margin [:0em :0.5em :0em :0em]
  }
  "#sidebar label" {
    :cursor :pointer
    :display :block
    :margin-top :0.6em
    :clear :left
  }
  "#sidebar label:hover" {
    :text-decoration :underline
  }
  "#sidebar h1" {
    :margin-top :2em
    :font-size :1.5em
    :color :silver
    :text-align :center}
  "#sidebar .cancel" {
    :position :absolute
    :left (px (- @d/indent 5))
    :top (px 5)
    :font-size :1.2em
    :cursor :pointer
    :padding [:0.1em]}
  "#sidebar .cancel img" {
    :width "32px"
  }))





(<style> :save (css 
  "#saved .word" {
    :display :flex
    :flex-direction :column
    :align-items :center
    :justify-content :center
    :margin [:5px :2px]}
  "#saved" { 
    :position :absolute
    :bottom :0px
    :z-index 9999999
    :font-size :1em
    :background :white
    :left :0px
    :right :0px
    :height (px @d/saved-height)
    :overflow :hidden
    :border-top [:1px :solid @d/dgray]}
  ".desktop.shifted #saved" {
    :left :400px
  }


  "#saved.saved" {
    :height :60px 
    :border-top :none
    :background :none}
  "#saved h1" {
    :font-size :0.9em
    :white-space :pre
    :text-align :center
    :color @d/mgray
    :line-height (px (* (- @d/saved-height 10) 0.6))}
  "#saved .block" {
    :cursor :pointer
    :background :white
    :width :auto
    :color @d/mgray
    :border [:1px :solid @d/mgray]
    :height (px (- @d/saved-height 10))
    :font-size :0.9em
    :margin :5px
    :padding [:0em :10px]}))


(<style> :sources (css 
  "div.source-catagory" {
    :cursor :pointer
    :margin-bottom :0.3em
    }
  ".source-catagory .source" {
    :padding-left :1.5em
    }
  ".source-catagory .source:hover" {
    :text-decoration :underline
    }))