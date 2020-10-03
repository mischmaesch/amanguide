(ns amanguide-logic.core
  (:require ["lodash" :as lodash :refer [ceil floor]]))

(def breakpoints [25 50 100 250 500 1000 2500 5000])

(defn calc-level [current-amount]
  (count (take-while #(>= current-amount %) breakpoints)))

(defn calc-price [base-price current-amount]
  (nth (iterate (comp ceil #(* % 1.03)) base-price) current-amount 0))

(defn calc-income [base-income current-amount runes]
  (let [current-level (calc-level current-amount)
        rune-multiplier (+ 1 (* runes (/ 1 20)))]
    (floor (* current-amount base-income (Math/pow 2 current-level) rune-multiplier))))