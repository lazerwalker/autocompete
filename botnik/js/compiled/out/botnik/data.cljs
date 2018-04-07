(ns botnik.data)

(def FN (atom {}))

(def API-SERVER js/API_SERVER)

(def session-id (rand-int 1000000000))

(defonce TURBOSPEED (atom 0))

(defonce SOURCENAME (atom nil))

(defonce RECONCILER (atom nil))

(defonce word-cooldown (atom false))

(defonce STALE (atom true))

(def last-word (atom nil))

(defonce app-state (atom {
  :source-listing {}
  :error nil
  :story ""
  :cursor 0
  :selection [0 0]
  :highlight 0
  :suggestions [3 4]
  :suggestion-options {
    :columns [1 2 3 4]
    :rows [3 4 5 6 7]
  }
  :sources [] 
  :sources/by-id {}
  :columns [
    [:columns/by-id :a]]
  :columns/by-id {
    :a {:loading true :words [] :left? false :right? true :id :a}}
  :sidebar? false
  :sharing? false
  :menu? false
  :editing? true
  :root-refresh {:value 0}
  :edit-text ""
  :voice nil
  :dragging false
  :saved-words []
  :turbo {
    :on false
    :max 7}
  :upload {
    :file nil
    :uploading? false
    :result nil}
  :save-bar false
  :arrow-input false}))