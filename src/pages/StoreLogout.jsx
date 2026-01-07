import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Lottie from "lottie-react";
import LogoutAnim from "../assets/logout.json";
import { Helmet } from 'react-helmet-async'

const StoreLogout = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    axios.get(`${import.meta.env.VITE_BASE_URL}stores/logout`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      localStorage.removeItem('token');
      navigate("/store-login"); // Redirect to store-login page after logout
      toast.success("Logout successful!");
    })
    .catch(error => {
      console.error("Error logging out:", error);
      // toast.error("Logout failed!");
    });



  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white px-4">

      <Helmet>
        <title>Logout – Tap Resto</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>


      {/* ⭐ Lottie Animation */}
      <Lottie
        animationData={LogoutAnim}
        loop={true}
        className="w-56 mb-4"
      />

      {/* ⭐ Text */}
      <p className="text-xl text-pink-600 font-semibold tracking-wide animate-pulse">
        Logging Out...
      </p>
    </div>
  );
}

export default StoreLogout
