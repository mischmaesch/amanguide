(ns amanguide-web.subs
  (:require
   [re-frame.core :as re-frame]
   [amanguide-logic.core :as logic]))

(re-frame/reg-sub
 ::masterdata
 (fn [db]
   (:masterdata db)))

(re-frame/reg-sub
 ::inventory
 (fn [db]
   (:inventory db)))

(re-frame/reg-sub
 ::entity-masterdata
 (fn [db [_ entity]]
   (get-in db [:masterdata entity])))

(re-frame/reg-sub
 ::entity-current-amount
 (fn [db [_ entity]]
   (get-in db [:inventory entity])))

(re-frame/reg-sub
 ::entity-next-price
 (fn [[_ entity]]
   [(re-frame/subscribe [::entity-masterdata entity])
    (re-frame/subscribe [::entity-current-amount entity])])
 (fn [[entity-data amount] _]
   (logic/calc-price (:base-price entity-data) amount)))
   
(re-frame/reg-sub
 ::entity-next-price-formatted
 (fn [[_ entity]]
   [(re-frame/subscribe [::entity-next-price entity])])
 (fn [[next-price] _]
   (.toExponential next-price)))