(ns hyper.terse
  (:require-macros [hyper.terse :refer [html]])
  (:require))

(def PRIVATE (js/Object.))

(defn owner-key [owner] (hash owner))

(defn private! [owner korks f]
  (let [func (if (= (type #()) (type f)) f (fn [v] f))
        k (owner-key owner)
        kcol (if (sequential? korks) korks [korks])
        store (update-in (or (aget PRIVATE k) {}) kcol func)]
    (aset PRIVATE k store)))

(defn private
  ([owner] (private owner []))
  ([owner korks]
    (let [kcol (if (sequential? korks) korks [korks])]
      (get-in (aget PRIVATE (owner-key owner)) kcol))))