(ns amanguide-web.db)

(def default-db
  {:masterdata
   {:seat {:name "Seat"
           :base-price 6
           :base-income 1
           :base-timer 72
           :order 0}
    :popcorn {:name "Popcorn Stand"
              :base-price 100
              :base-income 10
              :base-timer 360
              :order 1}
    :parking {:name "Parking lot"
              :base-price 2500
              :base-income 40
              :base-timer 720
              :order 2}
    :trap {:name "Trap"
           :base-price 50000
           :base-income 120
           :base-timer 1080
           :order 3}
    :drinks {:name "Drinks"
             :base-price 1000000
             :base-income 320
             :base-timer 1440
             :order 4}
    :deadly {:name "Deadly Trap"
             :base-price 25000000
             :base-income 960
             :base-timer 2160
             :order 5}
    :vip {:name "VIP Seat"
          :base-price 500000000
          :base-income 2560
          :base-timer 2880
          :order 6}
    :snacks {:name "Snacks"
             :base-price 10000000000
             :base-income 7680
             :base-timer 4320
             :order 7}
    :monster {:name "Straying Monster"
              :base-price 250000000000
              :base-income 30720
              :base-timer 8640
              :order 8}
    :toilet {:name "Toilet"
             :base-price 5000000000000
             :base-income 153600
             :base-timer 21600
             :order 9}}
  :inventory {:seat 1
              :popcorn 0
              :parking 0
              :trap 0
              :drinks 0
              :deadly 0
              :vip 0
              :snacks 0
              :monster 0
              :toilet 0}})
