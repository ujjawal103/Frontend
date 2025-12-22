import React, { useContext, useRef, useEffect } from "react";
import FooterNavStore from "../components/FooterNavStore";
import LoadingSkeleton from "../components/orders/LoadingSkeleton";
import { StoreDataContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import QuickActionCard from "../components/storeHome/QuickActionCard";
import MonthlyTopItems from "../components/storeHome/MonthlyTopItems";

const StoreHome = () => {
  const { store } = useContext(StoreDataContext);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  let index = 0;
  const cardWidth = 220; // card width + gap

  const interval = setInterval(() => {
    index++;

    if (index * cardWidth >= container.scrollWidth - container.clientWidth) {
      index = 0;
    }

    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  }, 2500);

  return () => clearInterval(interval);
}, []);


  if (!store) return <LoadingSkeleton />;

  const bannerImage =
    store.storeDetails?.photo || "/defaultBanner.png";

  return (
    <div className="w-full md:pl-60 pb-25 md:pb-0 bg-gray-50 min-h-screen pt-14 md:pt-0">

      {/* ===== MOBILE TOP HEADER ===== */}
      <div className="fixed top-0 left-0 w-full h-14 bg-white border-b shadow-sm flex items-center justify-between px-4 z-50 md:hidden">
        <img src="/tapResto.png" alt="Tap Resto" className="h-8" />
        <div className="text-right">
          <p className="text-xs text-gray-500">Today</p>
          <p className="text-sm font-semibold text-gray-800">₹12,450</p>
        </div>
      </div>

      {/* ===== HERO / BANNER ===== */}
      <div className="relative h-52 md:h-64 w-full">
        <img
          src={bannerImage}
          alt="Store Banner"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-5">
          <h1 className="text-2xl md:text-[6vw] font-bold text-white font-serif">
            {store?.storeName}
          </h1>
          <div className="flex items-center gap-3 mt-1">
            <span
              className={`px-3 py-1 text-xs rounded-full font-semibold ${
                store.status === "open"
                  ? "bg-emerald-500 text-white"
                  : "bg-rose-500 text-white"
              }`}
            >
              {store?.status?.toUpperCase()}
            </span>
            <p className="text-xs text-gray-200 line-clamp-1">
              {store?.storeDetails?.address}
            </p>
          </div>
        </div>
      </div>

      {/* ===== QUICK ACTIONS ===== */}
      <div className="p-1 mt-2 pr-0 md:pl-5 md:pt-6 space-y-4">
        {/* <h2 className="text-lg font-semibold mb-4">Quick Actions</h2> */}

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar overflow-y-hidden snap-x snap-mandatory pr-[200px] md:pr-[100px"
        >
          <div className="min-w-[250px] snap-start">
            <QuickActionCard
              icon="ri-table-fill"
              label="Tables"
              value={store?.tables?.length}
              onClick={() => navigate("/tables")}
            />
          </div>

          <div className="min-w-[250px] snap-start">
            <QuickActionCard
              icon="ri-restaurant-fill"
              label="Menu"
              value={store?.items?.length}
              delay={0.05}
              onClick={() => navigate("/menu")}
            />
          </div>

          <div className="min-w-[250px] snap-start">
            <QuickActionCard
              icon="ri-chat-history-fill"
              label="orders"
              value={
                store?.gstSettings?.restaurantChargeApplicable
                  ? `₹${store?.gstSettings?.restaurantCharge}`
                  : "No"
              }
              delay={0.15}
              onClick={() => navigate("/orders")}
            />
          </div>

          <div className="min-w-[250px] snap-start">
            <QuickActionCard
              icon="ri-percent-line"
              label="GST"
              value={store?.gstSettings?.gstApplicable ? "On" : "Off"}
              delay={0.1}
              onClick={() => navigate("/settings/gst")}
            />
          </div>

          <div className="min-w-[250px] snap-start">
            <QuickActionCard
              icon="ri-money-rupee-circle-fill"
              label="Charges"
              value={
                store?.gstSettings?.restaurantChargeApplicable
                  ? `₹${store?.gstSettings?.restaurantCharge}`
                  : "No"
              }
              delay={0.15}
              onClick={() => navigate("/settings/charges")}
            />
          </div>

          
        </div>
      </div>





      {/* ===== TAP RESTO PROMO BANNER ===== */}
      <div className="px-2 md:px-5 mt-4">
        <div className="border-2 border-pink-600 md:border-0 rounded-xl bg-white overflow-hidden">

          {/* ===== MOBILE VIEW ===== */}
          <div className="md:hidden p-3">
            <img
              src="/homeBanner.png"
              alt="Tap Resto Promo"
              className="w-full h-20 object-cover rounded-lg"
            />
          </div>

          {/* ===== DESKTOP VIEW ===== */}
          <div className="hidden md:flex items-center justify-between px-10 py-8 bg-gradient-to-r from-pink-50 to-white">

            {/* LEFT: TEXT */}
            <div className="space-y-3 max-w-xl">
              <h2 className="text-4xl font-extrabold text-pink-600 tracking-wide">
                TAP RESTO
              </h2>
              <p className="text-xl text-gray-700">
                Unlock Your Potential <span className="text-pink-600 font-semibold">Digitally</span>
              </p>
              <p className="text-sm text-gray-500 hidden lg:flex">
                Smart tools to manage orders, menus & growth — all in one place.
              </p>
            </div>

            {/* RIGHT: ILLUSTRATION */}
            <div className="flex flex-shrink-0">
              <img
                src="/chef-illustration.png"
                alt="Tap Resto Chef"
                className="h-40 w-auto object-contain block"
              />
              <img
                src="/chef.png"
                alt="Tap Resto Chef"
                className="h-40 w-auto object-cover block"
              />
            </div>

          </div>
        </div>
      </div>


      {/* ===== MONTHLY TOP ITEMS ===== */}
       <div className=""> 
        <MonthlyTopItems />
       </div>


      <FooterNavStore />
    </div>
  );
};

export default StoreHome;
