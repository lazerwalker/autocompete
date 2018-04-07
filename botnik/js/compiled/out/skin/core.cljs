(ns skin.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require
    [goog.string :as gstring]
    [reagent.core :as r]
    [dollar.bill :as $ :refer [$]]))

(defonce sheet-map (r/atom {}))

(defn vectorize [v] (if (sequential? v) (vec v) [v]))

(defn vec-wrap [v] 
  (let [v (vectorize v)]
    (if (vector? (first v)) v [v])))

(defn register 
  ([c] (do (swap! sheet-map assoc c (vec-wrap c))) true)
  ([k c] (do (swap! sheet-map assoc k (vec-wrap c)) true)))

(defn unregister 
  ([c] (do (swap! sheet-map dissoc c (vec-wrap c)) true))
  ([k c] (do (swap! sheet-map dissoc k (vec-wrap c)) true)))

(defn preparse [v]
  (cond (integer? v) (str v "px")
        (keyword? v) (clj->js v)
        (number? v)  (str v)
        (vector? v) (mapv preparse v)
        :else v))

(defn parse [v]
  (let [res 
    (cond (string? v) v ;(fast.style/parse-css-value v)
          (vector? v) (mapv parse v)
          :else [v])]
    (if (or (sequential? res)(array? res))
        (case (count res) 0 nil 1 (first res) (vec res))
        res)))

(defn virtual-css [data] 
  (zipmap (keys data) (map (comp parse preparse) (vals data))))

(defn render-value [v]
    (cond (integer? v) (str v "px")
        (keyword? v) (clj->js v)
        (number? v)  (str v "px")
       (vector? v) (apply str v) 
       :else (str v)))

(defn render-block [rule m]
  (str "\n" rule" {" 
    (apply str (mapcat (fn [[k v]] 
      (interleave ["" (clj->js k) (render-value v)] ["\n  " ":" ";"])) m)) "}"))

(def css virtual-css)
(def block render-block)


(defn inspect [k] 
  (when-let [f (k @sheet-map)]
    (println (str "\"" (get-in (((f 0) 0)) 
      [1 :dangerouslySetInnerHTML :__html]) "\"")) '*))

(defonce -virtual-el ($/append (first ($ "head")) ($ "<div id='skin'></div>")))

(defn main [] (vec (cons :div (apply concat (vals @sheet-map)))))

(defn mount []
  (r/render-component [main] (first ($ "#skin"))))


