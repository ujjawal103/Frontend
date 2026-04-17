import React from 'react';
import { motion } from 'framer-motion';

const DesktopDownloadSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-200 px-6 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Desktop Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Desktop UI Mockup */}
            <div className="relative mx-auto w-full max-w-[600px] h-full overflow-hidden">
              
              {/* Top Bar */}
              {/* <div className="h-10 bg-gray-100 flex items-center px-4 gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div> */}

              {/* Fake Dashboard */}
              <div className="p-4 h-full overflow-y-auto">
                <img src="/desktopApp.png" alt="desktop" />
            </div>
            </div>

            {/* Glow */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-white rounded-full opacity-20 -z-10 animate-pulse"></div>
          </motion.div>

          {/* Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left order-1 lg:order-2"
          >
            <span className="inline-block bg-white/20 text-black font-bold px-4 py-1.5 rounded-full text-sm mb-6">
              💻 DESKTOP APP
            </span>

            <h2 className="text-4xl lg:text-6xl font-black text-black mb-6 leading-tight">
              Run your entire store from your <span className="text-pink-600">desktop.</span>
            </h2>

            <p className="text-lg text-black/80 mb-10 max-w-xl font-medium leading-relaxed">
              Manage orders, billing, inventory and analytics seamlessly with our powerful desktop application built for speed and stability.
            </p>

            <div className="flex justify-center lg:justify-start">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Tap-Restoooo.exe" 
                className="flex items-center gap-3 bg-pink-600 text-white px-8 py-5 rounded-3xl font-black text-lg shadow-2xl"
              >
                <svg
                className="w-8 h-8 rotate-180 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14v-4H8l4-4 4 4h-3v4h-2z" />
              </svg>
                Download for Windows
              </motion.a>
            </div>

            <div className="mt-10 text-black/70 text-sm font-semibold italic">
              “Smoothest billing experience on desktop” — Store Owners
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DesktopDownloadSection;