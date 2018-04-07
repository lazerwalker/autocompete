(ns botnik.read
  (:require
    [om.next :as om]
    [pdfn.core :refer [and* or* not* is*] 
        :refer-macros [defpdfn pdfn inspect compile!]]
    [cljs.pprint :as pprint]))

(defpdfn read)

(pdfn read [env k params]
  (let [{:keys [query ast state]} env]
  {:value (om/db->tree query @state @state)}))

(pdfn read [env k params]
  {env (and* (comp (is* :om.next/root) :query-root)
             (comp (is* :join) :type :ast))}

  (let [{:keys [query ast state query-root]} env
    res (om/db->tree query (get @state (:key ast)) @state)]   
    {:value res}))

(pdfn read [env k params] 
  {env (and* (comp (is* :join) :type :ast)
             (comp vector? :query-root))}

  (let [{:keys [state query-root query]} env]
    {:value (om/db->tree query (get-in @state query-root) @state)}))

(pdfn read [env k params] 
  {env (comp (is* :prop) :type :ast)}
  {:value (get @(:state env) k)})

(pdfn read [env k params] 
  {env (and* (comp (is* :prop) :type :ast)
             (comp vector? :query-root))}
  {:value (get-in @(:state env) (:query-root env) {})})