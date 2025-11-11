import React from 'react'
import FooterNavStore from '../components/FooterNavStore'
import LoadingSkeleton from '../components/orders/LoadingSkeleton'
const StoreHome = () => {
  return (
    <div className='w-full md:pl-65 sm-pb-14'>
      <h1>Welcome to the Store</h1>
       <div className="flex-1 p-6 md:pl-10">
        <p className="text-gray-600 mb-6">
          Manage your orders, check analytics, and customize your restaurant settings here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="font-semibold">Today's Orders</h3>
            <p className="text-2xl font-bold text-amber-500 mt-2">42</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="font-semibold">Revenue</h3>
            <p className="text-2xl font-bold text-emerald-500 mt-2">₹12,450</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-xl">
            <h3 className="font-semibold">Pending Deliveries</h3>
            <p className="text-2xl font-bold text-rose-500 mt-2">8</p>
          </div>
        </div>
        </div>
        <LoadingSkeleton />
      <FooterNavStore />
    </div>
  )
}

export default StoreHome



// import React from "react";
// import FooterNavStore from "../components/FooterNavStore";

// const StoreHome = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-50 text-gray-800">
//       {/* Sidebar for md and larger screens */}
//       <div className="hidden md:flex md:flex-col md:w-60 bg-gray-900 text-white p-4">
//         <h2 className="text-xl font-semibold mb-6">Store Panel</h2>
//         <nav className="flex flex-col gap-3">
//           <a href="#" className="hover:text-amber-400">Dashboard</a>
//           <a href="#" className="hover:text-amber-400">Orders</a>
//           <a href="#" className="hover:text-amber-400">Menu</a>
//           <a href="#" className="hover:text-amber-400">Analytics</a>
//         </nav>
//       </div>

//       {/* Main Content Area */}
      // <div className="flex-1 p-6 md:pl-10">
      //   <h1 className="text-2xl font-bold mb-4">Welcome to the Store</h1>
      //   <p className="text-gray-600 mb-6">
      //     Manage your orders, check analytics, and customize your restaurant settings here.
      //   </p>

      //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      //     <div className="bg-white shadow-md p-4 rounded-xl">
      //       <h3 className="font-semibold">Today's Orders</h3>
      //       <p className="text-2xl font-bold text-amber-500 mt-2">42</p>
      //     </div>
      //     <div className="bg-white shadow-md p-4 rounded-xl">
      //       <h3 className="font-semibold">Revenue</h3>
      //       <p className="text-2xl font-bold text-emerald-500 mt-2">₹12,450</p>
      //     </div>
      //     <div className="bg-white shadow-md p-4 rounded-xl">
      //       <h3 className="font-semibold">Pending Deliveries</h3>
      //       <p className="text-2xl font-bold text-rose-500 mt-2">8</p>
      //     </div>
      //   </div>
//       </div>

      
//         <FooterNavStore />
//     </div>
//   );
// };

// export default StoreHome;
