(ns botnik.util
  (:require
    [cljs.pprint :as pprint]
    [clojure.string :as string]
    [botnik.data]))

(enable-console-print!)

(def log (fn [& args] (js/console.log (into-array args))))

(defn mobile? []
  (not= js/window.orientation nil))

(defn mutate-in! [path f & shards] 
  (om.next/transact! @botnik.data/RECONCILER 
    `[(std/update-in ~{:path path :fn f}) ~@shards]))

(defn mutate-val! [path f & shards] 
  (om.next/transact! @botnik.data/RECONCILER 
    `[(std/update-in ~{:path path :fn #(identity f)}) ~@shards]))

(defn pretty [o] (with-out-str (pprint/pprint o)))

(defn px [s] (str s "px"))

(defn by-id [s] (.getElementById js/document s))

(defn keymap [m] (into {} (map (fn [[k v]] [(keyword k) v]) m)))

(defn in? [col v] (some true? (map #(= % v) col)))

(defn vec-remove [coll pos]
  (vec (concat (subvec coll 0 pos) (subvec coll (inc pos)))))

(defn style! [el k v]
  (aset (aget el "style") (name k) v))

(defn draggable 
  ([el fs] (draggable el fs #js {}))
  ([el fs opts] 
    (let [ham (js/Hammer. el opts)]
      (dorun 
        (map 
          (fn [[k v]] 
            (.on ham (name k) v)) fs)) ham)))

(defn capitalize-words [s]
  (->> (clojure.string/split (str s) #"\b") 
       (map clojure.string/capitalize)
       clojure.string/join))

(defn single-word? [s]
  (= 1 (.-length (.split s " "))))

(defn word-split [s]
  (remove #{""} (string/split s #"[ ]+" )))

(defn vec-insert [col idx v]
  (vec (concat (take idx col) [v] (drop idx col))))

(defn url-params []
  (js->clj (js/parse_query_string (.substr js/location.search 1))))

(defn action [o]
  (js/post_json (str js/API-SERVER "/action")
    (clj->js { 
      :session botnik.data/session-id
      :agent js/navigator.userAgent
      :sources (string/split (get (url-params) "source") ",")
      :data o})
    (fn [e])
    (fn [e])))