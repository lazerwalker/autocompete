(ns botnik.mutate
  (:require
    [om.next :as om]
    [pdfn.core :refer [and* or* not* is*] 
        :refer-macros [defpdfn pdfn inspect compile!]]
    [cljs.pprint :as pprint]))

(defpdfn ^:inline mutate)

(pdfn mutate [env k props] {:action #()})

(pdfn mutate [env k props]
  {k (is* 'std/update-in)}
  {:action (fn []  (swap! (:state env) update-in (:path props) (:fn props)))})

(pdfn mutate [env k props]
  {k (is* 'std/assoc)}
  {:action (fn [] (swap! (:state env) assoc (:k props) (:v props)))})