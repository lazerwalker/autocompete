(ns comp.core
	(:require
    [cljs.pprint :as pprint]
    [clojure.string]
        [hyper.terse :refer [private private!] :refer-macros [html]]
    [om.next :as om :refer-macros [defui]]))

(set! pprint/*print-right-margin* 60)

(defonce published (atom {}))
(defonce Camels (atom {}))
(defn register 
  ([k c] (register k c {}))
  ([k c m]
    (assert (keyword k))
    (swap! published assoc k (om/factory c m))
    (swap! Camels assoc k c)))

(defn onent [k]
	(get @published k (fn [_] "")))

(defn camels [k]
  (get @Camels k))