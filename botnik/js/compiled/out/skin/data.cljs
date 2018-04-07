(ns skin.data
  (:require-macros 
    [reagent.ratom :refer [reaction]])
  (:require 
    [reagent.core :as r][skin.core]
    [thi.ng.color.core :as color]))


(defonce window (r/atom {:w 0 :h 0 :x 0 :y 0}))

(defonce gutters (r/atom 20))

(defonce app (r/atom (skin.core/virtual-css
  {:font-size "1em"})))

(defonce suggestions (r/atom [3 6]))

(defonce indent (r/atom 45))
(def lgray (r/atom "#c4c4c4"))
(def mgray (r/atom "#5d5d5d"))
(def dgray (r/atom "#1e1e1e"))
(def hlight (r/atom "#ce812e"))

(defonce bottom-bar (r/atom 50))
(defonce story-perc (r/atom 0.5))
(defonce story-height (reaction (* (:h @window) @story-perc)))
(defonce turbo-height (r/atom 45))


(defonce row-header (r/atom 40))
(defonce saved-height (r/atom 45))

(defn variants [s c]
  (zipmap (map (comp keyword str) (range -10 11))
    (mapv #(deref 
      (-> (color/css s)
          (color/analog 0 0 %)
          (color/as-css)))
      (map #(* % 0.1 c) (range -10 11)))))

(defonce color-scheme (r/atom "#a92525"))

(defonce colors 
  (reaction (variants @color-scheme 0.8)))


'(reset! color-scheme "#2e8496")
