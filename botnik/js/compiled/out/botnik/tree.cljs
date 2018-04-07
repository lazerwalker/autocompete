(ns botnik.tree
  (:require
    [clojure.string :as string]
    [clojure.walk :as walk]))

(defn tally [x] (if (nil? x) 1 (inc x)))

(defn word-frequence [m n]
  (let [col (seq m)
        total (reduce + (map last col))]
    (map (fn [v] (update v 1 #(* (/ % total) n))) col)))

(defn score-pos-words [col]
  (update col :words #(word-frequence % (:f col))))

(defn frequence [col]
  (let [total (apply + (mapv #(:c (meta %)) (vals col)))]
    (with-meta 
      (reduce
        (fn [m [k v]]
          (if-not (map? v) m
            (assoc m k
              (let [fv (frequence v)]
                (with-meta fv 
                  (-> (meta fv)
                      (assoc :f (/ (:c (meta v)) total))
                      (score-pos-words)))))))
        {} col) 
      (meta col))))

(defn insert [col words]
  (let [cnt (-> words meta :cnt)
        tally (if cnt #(+ (or % 0) cnt) tally)]
    (reduce 
      (fn [acc v]
        (update-in acc (vec v) #(with-meta (or % {}) (update (meta %) :c tally))))
      col
      (for [i (reverse (range 1 (inc (count words))))]
        (take i words)))))

(defn collate [tokens n]
  (frequence (reduce insert {} (partition n 1 tokens))))

(defn pos-insert [col [words parts]]
  (let [cnt (-> words meta :cnt)
        tally (if cnt #(+ (or % 0) cnt) tally)]
    (reduce 
      (fn [acc [ps ws]]
        (-> acc 
          (update-in (vec ps) 
            #(with-meta (or % {}) 
              (-> (meta %) 
                  (update :c tally)
                  (update-in [:words (last ws)] tally))))))
      col
      (for [i (reverse (range 1 (inc (count words))))]
        [(take i parts)
         (take i words)]))))

(defn score-keys [col]
  (->> (map #(update % 1 (comp :f meta)) col) (sort-by last) (reverse)))

(defn pos-collate [s p n]
  (frequence
    (with-meta 
      (reduce pos-insert {} 
        (map vector 
          (partition n 1 s)
          (partition n 1 p)))
      (let [markov (collate s n)]
        {:markov markov
         :baseline (mapv #(vector (first %) 0) (score-keys markov))
         :N n}))))

(defn uncontract [col]
  (reduce
    (fn [xs w]
      (if-let [prev (last xs)]
        (if (re-find #"\w*[\'\’]\w+" w)
            (update xs (dec (count xs)) #(str % w))
            (conj xs w))
        (if (re-find #"\w*[\'\’]\w+" w) [] [w])))
    []
    col))

(defn N-prep [s]
  (let [res (mapv #(string/split % #"[ \t]+") (string/split s "\n"))
        N (count (first res))]
    (mapv (fn [col] (with-meta (vec (butlast col)) {:cnt (js/parseInt (last col))})) res)))

(defn N-prep2 [s]
  (let [res (mapv #(string/split % #"[ \t]+") (string/split s "\n"))
        N (count (first res))]
    (mapv (fn [col] (with-meta (uncontract (butlast col)) {:cnt (js/parseInt (last col))})) res)))

(defn n-collate [tree tokens n]
  (reduce insert tree tokens))

(defn posn-collate [tree p -s]
  (let [p (N-prep p)
        s (N-prep -s)
        s2 (N-prep2 -s)
        n (count (first s))] 
    (with-meta 
      (reduce pos-insert tree 
        (map vector s p))
      (let [markov (n-collate (or (-> tree meta :markov) {}) s2 n)]
        {:markov markov
         :baseline (mapv #(vector (first %) 0) (score-keys markov))
         :N n}))))

(defn score [tree]
  (with-meta (frequence tree)
    (let [markov (-> tree meta :markov frequence)]
      {:markov markov
       :baseline (mapv #(vector (first %) (* (last %) 0.00001)) (score-keys markov))})))



(defn pos-words [col]
  (mapcat (comp :words meta last) col))

(defn sort-pos-words [col]
  (->> col
    (sort-by last)
    (reverse)
    (take 15)))

(defn sort-words [col]
  (->> (score-keys col)
       (take 15)))

(defn pos-query [tree N input]
  (let [input (if (string? input) 
                  (string/split (string/trim input) #" ")
                  input)
        input (take-last (dec N) input)]
    (if (< (count input) (dec N))
     '()
      (->> (vec input)
           (get-in tree)
           pos-words
           sort-pos-words
           (remove #(re-find #"\w*[\'\’]\w+" (first %)))
           ))))

(defn query [tree N input]
  (let [input (if (string? input) 
                  (string/split (string/trim input) #" ")
                  input)
        input (take-last (dec N) input)]
    (if (< (count input) (dec N))
     '()
      (->> (vec input)
           (get-in tree)
           sort-words))))





'(def test-tree
  (pos-collate 
  ["the" "quick" "red" "fox" "jumped" "the" "lazy" "red" "dog"] 
  ["DT" "JJ" "JJ" "NN" "VBD" "DT" "JJ" "JJ" "NN"]
  4))

'(pos-query test-tree 2 ["DT" ])

'(sort-pos-words (pos-words (get-in test-tree ["DT" "JJ"])))

