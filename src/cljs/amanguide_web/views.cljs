(ns amanguide-web.views
  (:require
   [re-frame.core :as re-frame]
   [amanguide-web.subs :as subs]
   ))

(defn main-header []
  [:div {:class "ui fixed borderless huge menu"}
   [:div {:class "header item"} "AMANGUIDE"]])

(defn main-content []
  [:div {:class "ui main container"}
   [:div {:class "ui four columns middle aligned grid"}
    [:div {:class "four wide column"}
     [:div {:class "ui five mini buttons field"}
      [:a {:class "ui button"} "1"]
      [:a {:class "ui button"} "10"]
      [:a {:class "ui button"} "25"]
      [:a {:class "ui button"} "100"]
      [:a {:class "ui button"} "BP"]]]
    [:div {:class "four wide column"}
     [:h1 {:class "ui centered header"} "Arena Manager"]]
    [:div {:class "two wide column"}]
    [:div {:class "four wide wide column"}
     [:div {:class "ui mini form"}
      [:div {:class "field"}
       [:input {:type "text" :placeholder "Runes"}]]]]]])

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div
     [main-header]
     [main-content]]))
