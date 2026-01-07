import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Start = () => {
  return (
    <div>
      <Helmet>
        <title>Tap Resto – Best Restaurant Management App in India</title>
        <meta
          name="description"
          content="Tap Resto is a modern restaurant management app for cafes and restaurants. Manage orders, QR menu, billing, analytics and staff easily."
        />
        <meta property="og:title" content="Tap Resto – Best Restaurant Management App" />
        <meta property="og:description" content="Manage restaurant orders, QR menu, billing and analytics with Tap Resto." />
        <meta property="og:url" content="https://tapresto.online" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://tapresto.online/logo.png" />
      </Helmet>

      <div className='h-screen flex justify-between w-full flex-col pt-5 bg-[url("/background.png")] bg-cover bg-center'>
        <img  className='w-30 ml-5' src="/FLYER.png" alt="" />
        <div className='bg-pink-200 py-5 px-5 '>
           <h2 className='text-3xl font-bold text-pink-500'>Get your restaurant digitally ! unlock your potential</h2>
          <div className='w-full flex gap-4'>
           <Link to={"/store-home"} className='flex items-center justify-center bg-pink-600 w-full text-white py-4 px-4 rounded mt-4'>Continue</Link>                         
          </div>
          </div>
      </div>
    </div>
  )
}

export default Start
