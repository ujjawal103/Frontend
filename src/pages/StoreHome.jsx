import React, { useContext } from "react";
import FooterNavStore from "../components/FooterNavStore";
import LoadingSkeleton from "../components/orders/LoadingSkeleton";
import { StoreDataContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import QuickActionCard from "../components/storeHome/QuickActionCard";

const StoreHome = () => {
  const { store } = useContext(StoreDataContext);
  const navigate = useNavigate();

  if (!store) return <LoadingSkeleton />;

  const bannerImage =
    store.storeDetails?.photo || "/defaultBanner.png";

  return (
    <div className="w-full md:pl-60 pb-20 md:pb-0 bg-gray-50 min-h-screen pt-14 md:pt-0">

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
            {store.storeName}
          </h1>
          <div className="flex items-center gap-3 mt-1">
            <span
              className={`px-3 py-1 text-xs rounded-full font-semibold ${
                store.status === "open"
                  ? "bg-emerald-500 text-white"
                  : "bg-rose-500 text-white"
              }`}
            >
              {store.status.toUpperCase()}
            </span>
            <p className="text-xs text-gray-200 line-clamp-1">
              {store.storeDetails?.address}
            </p>
          </div>
        </div>
      </div>

      {/* ===== QUICK ACTIONS ===== */}
    <div className="p-5">
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

        <QuickActionCard
          icon="ri-table-fill"
          label="Tables"
          value={store.tables.length}
          onClick={() => navigate("/tables")}
        />

        <QuickActionCard
          icon="ri-restaurant-fill"
          label="Menu"
          value={store.items.length}
          delay={0.05}
          onClick={() => navigate("/menu")}
        />

        <QuickActionCard
          icon="ri-percent-line"
          label="GST"
          value={store.gstSettings?.gstApplicable ? "On" : "Off"}
          delay={0.1}
          onClick={() => navigate("/settings/gst")}
        />

        <QuickActionCard
          icon="ri-money-rupee-circle-fill"
          label="Charges"
          value={
            store.gstSettings?.restaurantChargeApplicable
              ? `₹${store.gstSettings.restaurantCharge}`
              : "No"
          }
          delay={0.15}
          onClick={() => navigate("/settings/charges")}
        />

      </div>
    </div>

      <FooterNavStore />
    </div>
  );
};

export default StoreHome;
