(ns amanguide-web.events
  (:require
   [re-frame.core :as re-frame]
   [amanguide-web.db :as db]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::update-item-level
 (fn [db [_ new-value type]]
   (assoc-in db [:inventory type] new-value)))

(re-frame/reg-event-db
 ::update-runes
 (fn [db [_ new-value]]
   (assoc-in db [:runes] new-value)))
