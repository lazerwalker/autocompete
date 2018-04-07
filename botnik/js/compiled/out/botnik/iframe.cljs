(ns botnik.iframe
  (:require
    [dollar.bill :as $ :refer [$]]))

(.addEventListener js/window "message"
  (fn [msg] (def parent msg.source)))

(defn sendLatest []
  (js/parent.postMessage
    (.-value (first ($ "#story.editor")))
    "*"))