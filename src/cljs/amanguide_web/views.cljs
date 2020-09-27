(ns amanguide-web.views
  (:require
   [re-frame.core :as re-frame]
   [cljsjs.semantic-ui-react :as ui]
   [goog.object]
   [amanguide-web.subs :as subs]
   [amanguide-web.events :as events]))

(def semantic-ui js/semanticUIReact)

(defn component [k & ks]
  (if (seq ks)
    (apply goog.object/getValueByKeys semantic-ui k ks)
    (goog.object/get semantic-ui k)))

(def sui-button (component "Button"))
(def sui-button-group (component "Button" "Group"))
(def sui-form (component "Form"))
(def sui-form-field (component "Form" "Field"))
(def sui-form-group (component "Form" "Group"))
(def sui-form-input (component "Form" "Input"))
(def sui-form-select (component "Form" "Select"))
(def sui-grid (component "Grid"))
(def sui-grid-row (component "Grid" "Row"))
(def sui-grid-column (component "Grid" "Column"))
(def sui-header (component "Header"))

(defn page-header []
  [:div {:class "ui fixed borderless huge menu"}
   [:div {:class "header item"} "AMANGUIDE"]])

(defn page-content-top-menu []
  [:> sui-grid
   {:centered true
    :columns 4}
   [:> sui-grid-column {:width "four"}
    [:> sui-button-group {:size "mini" :widths "five"}
     [:> sui-button "1"]
     [:> sui-button "10"]
     [:> sui-button "25"]
     [:> sui-button "100"]
     [:> sui-button "BP"]]]
   [:> sui-grid-column {:width "four"}
    [:> sui-header {:as "h1" :text-align "center"} "Arena Manager"]]
   [:> sui-grid-column {:width "two"}]
   [:> sui-grid-column {:width "four"}
    [:> sui-form {:size "mini"}
      [:div
       [:> sui-form-input {:type "text" :placeholder "Runes"}]]]]])

(defn item-row-component [type]
  (let [masterdata (re-frame/subscribe [::subs/masterdata])
        inventory (re-frame/subscribe [::subs/inventory])
        next-price (re-frame/subscribe [::subs/entity-next-price-formatted type])]
    (fn [type]
      (let [type-data (get @masterdata type)
            type-amount (get @inventory type)]
        [:<>
         [:> sui-grid-column {:width "three"}
          [:> sui-header {:as "h2"} (:name type-data)]]
         [:> sui-grid-column {:width "four"}
          [:> sui-form-group {:widths "three"}
           [:>
            sui-form-input
            {:type "text"
             :className "npr"
             :value type-amount
             :on-change #(re-frame/dispatch [::events/update-item-level (js/parseInt (-> % .-target .-value)) type])}]
           [:> sui-form-select
            {:compact true
             :options
             [{:key "none" :text "None" :value 0}
              {:key "speed" :text "Speed" :value 1}
              {:key "g" :text "Gold" :value 2}
              {:key "b" :text "Both" :value 3}
              {:key "p" :text "Platinum" :value 4}]}]
           [:> sui-form-input]]]
         [:> sui-grid-column {:width "three"}
          [:> sui-form-group {:width "two"}
           [:> sui-form-input {:type "text" :width "nine" :value @next-price}]
           [:> sui-form-input {:type "text" :width "seven"}]]]
         [:> sui-grid-column {:width "six"}]]))))

(defn page-content-main-form []
  (let [masterdata (re-frame/subscribe [::subs/masterdata])]
    [:> sui-form {:size "small"}
     [:> sui-grid {:padded false :verticalAlign "middle"}
      [:> sui-grid-column {:width "three"}]
      [:> sui-grid-column {:width "four"}
       [:> sui-form-group {:widths "three"}
        [:> sui-form-field
         [:> sui-header {:as "h4" :textAlign "center"} "Level"]]
        [:> sui-form-field
         [:> sui-header {:as "h4" :textAlign "center"} "Upgrades"]]
        [:> sui-form-field
         [:> sui-header {:as "h4" :textAlign "center"} ""]]]]
      [:> sui-grid-column {:width "three"}
       [:> sui-form-group {:widths "two"}
        [:> sui-form-field {:width "eight"}
         [:> sui-header {:as "h4" :textAlign "center"} "Next Price"]]]]
      [:> sui-grid-column {:width "six"}]
      (for [item (keys (sort-by #(get-in (val %) [:order]) @masterdata))]
        [item-row-component item])]]))

(defn page-content []
  [:div {:class "ui main container"}
   [page-content-top-menu]
   [page-content-main-form]])

(defn main-panel []
  [:div
   [page-header]
   [page-content]])
