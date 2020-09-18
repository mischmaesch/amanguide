(ns amanguide-logic.core
  (:require ["lodash" :as lodash :refer [ceil]]))

(defn calc-price [base-price current-amount]
  (nth (iterate (comp ceil #(* % 1.03)) base-price) current-amount 0))