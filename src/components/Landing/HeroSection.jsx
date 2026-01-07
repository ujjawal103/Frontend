
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative pt-25 pb-20 lg:pt-32 lg:pb-32 px-10 bg-brand-light">

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-brand-yellow/20 text-brand-pink font-bold px-4 py-1.5 rounded-full text-sm mb-6"
          >
            ✨ The Smart Way to Manage Your Restaurant
          </motion.span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-dark leading-tight mb-6">
            We’re exactly what you’ve been
            <span className="text-brand-pink"> looking for.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            QR ordering, billing & revenue management — made simple for every cafe, stall, bar or hotel. Fast, beautiful, and incredibly affordable.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "Set up QR menus in minutes — no app for customers.",
              "Affordable ₹2,499 / year — free 1-month demo.",
              "Manage revenue, orders & staff with a single dashboard.",
              "Works on any device — mobile, tablet, POS."
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-gray-700 font-medium"
              >
                <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </span>
                {item}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919628316081?text=Hi%20Tap%20Resto%2C%20I%27d%20like%20a%20demo"
              className="px-8 py-4 bg-brand-pink text-white rounded-2xl font-bold text-lg shadow-xl shadow-pink-200 flex items-center justify-center gap-2"
            >
              Start Free Demo
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919628316081"
              className="px-8 py-4 bg-white border-2 border-brand-pink text-brand-pink rounded-2xl font-bold text-lg flex items-center justify-center gap-2"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6" alt="WhatsApp" />
              Chat on WhatsApp
            </motion.a>
          </div>
        </motion.div>

        {/* Right Visual - Phone with Scan Interaction */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Phone Frame */}
          <div className="relative mx-auto w-[300px] h-[610px] border-[10px] border-brand-dark rounded-[45px] shadow-2xl overflow-hidden bg-white">
            {/* Notch Area */}
            <div className="absolute top-0 w-full h-8 bg-brand-dark z-30 flex justify-center items-center">
                <div className="w-16 h-4 bg-gray-800 rounded-full"></div>
            </div>
            
            {/* Screen Content */}
            <div className="relative h-full w-full bg-gray-50 pt-10 overflow-hidden">
                {/* 1. Camera View Layer */}
                <div className="absolute inset-0 z-0 bg-gray-900">
                    <img 
                      src="/heroSectionPhoneBg.png" 
                      className="w-full h-full object-cover opacity-60" 
                      alt="Restaurant Interior" 
                    />
                    
                    {/* Animated Scanning Line */}
                    <motion.div 
                        animate={{ top: ['15%', '85%', '15%'] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                        className="absolute left-0 w-full h-1 bg-brand-pink shadow-[0_0_20px_#db2777] z-10"
                    />
                    
                    {/* Focus Area with Corner Borders */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-52 h-52 relative">
                            {/* Corner Borders */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-xl"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-xl"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-xl"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-xl"></div>
                            
                            {/* Inner QR Mockup with Pulsing Glow */}
                            <motion.div 
                              animate={{ opacity: [0.3, 0.6, 0.3] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                              className="absolute inset-4 bg-white/20 flex items-center justify-center rounded-lg backdrop-blur-[2px]"
                            >
                                <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zm-3 0h2v2h-2v-2zm3 3h3v2h-3v-2zm-3 3h2v2h-2v-2zm3 0h3v2h-3v-2zM13 13h2v2h-2v-2zm0 3h2v2h-2v-2z"/>
                                </svg>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* 2. Detected Item Interaction Card */}
                <motion.div 
                    initial={{ y: 250, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 1.2, 
                      duration: 0.6, 
                      repeat: Infinity, 
                      repeatType: "reverse", 
                      repeatDelay: 5 
                    }}
                    className="absolute bottom-10 left-4 right-4 z-20"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="bg-white rounded-[2rem] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-pink-50"
                  >
                    <div className="flex items-center gap-4">
                        <div className="relative group">
                          <img 
                            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=150&h=150" 
                            className="w-20 h-20 rounded-2xl object-cover shadow-md" 
                            alt="Wood Fired Pizza" 
                          />
                          <div className="absolute -top-2 -left-2 bg-brand-yellow text-brand-dark text-[10px] font-extrabold px-2 py-1 rounded-full shadow-sm">
                            HOT 🔥
                          </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                              <span className="text-[10px] font-bold text-brand-pink uppercase tracking-widest">Menu Detected</span>
                            </div>
                            <h4 className="text-sm font-extrabold text-brand-dark leading-tight">Gourmet Margherita</h4>
                            <p className="text-[9px] text-gray-400 mb-2">Wood-fired, fresh basil, mozzarella</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-black text-brand-dark">₹349</span>
                                <motion.button 
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="bg-brand-pink text-white text-[10px] px-4 py-2 rounded-xl font-bold shadow-lg shadow-pink-100"
                                >
                                  Order Now
                                </motion.button>
                            </div>
                        </div>
                    </div>
                  </motion.div>
                </motion.div>
            </div>
          </div>
          
          {/* Physical QR Sticker Trigger Visual */}
          <motion.div 
            animate={{ 
              y: [0, -12, 0],
              rotate: [0, -2, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut" 
            }}
            className="absolute -bottom-36 lg:bottom-24 -right-8 lg:-right-0 bg-white p-6 rounded-[2.5rem] shadow-2xl flex flex-col items-center gap-3 border-4 border-brand-pink/5 z-40"
          >
            <div className="w-24 h-24 bg-brand-dark rounded-2xl flex items-center justify-center text-white p-4 group">
              <svg className="w-full h-full transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zm-3 0h2v2h-2v-2zm3 3h3v2h-3v-2zm-3 3h2v2h-2v-2zm3 0h3v2h-3v-2zM13 13h2v2h-2v-2zm0 3h2v2h-2v-2z"/>
              </svg>
            </div>
            <div className="text-center">
              <span className="text-[10px] font-black text-brand-pink tracking-widest block leading-none mb-1">SCAN TABLE</span>
              <span className="text-[14px] font-black text-brand-dark block">ORDER FAST</span>
            </div>
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-3 -right-3 w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-xs font-black shadow-lg border-2 border-white"
            >
              1
            </motion.div>
          </motion.div>


          {/* Physical New Orders Trigger Visual */}
          <motion.div 
            animate={{ 
              y: [0, -12, 0],
              rotate: [0, -2, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut" 
            }}
            className="absolute -top-7 lg:top-14 -left-8 lg:-left-0 bg-white p-6 rounded-[2.5rem] shadow-2xl flex flex-col items-center gap-3 border-4 bg-yellow-50 border-brand-pink/5 z-40"
          >
            <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-white p-4 group">
             <svg
                className="w-full h-full text-brand-pink transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22zm6-6V11a6 6 0 1 0-12 0v5l-2 2v1h16v-1l-2-2z" />
              </svg>

            </div>
            <div className="text-center">
              <span className="text-[10px] font-black text-brand-pink tracking-widest block leading-none mb-1">NEW ORDERS</span>
              <span className="text-[14px] font-black text-brand-dark block">NOTIFICATION</span>
            </div>
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-3 -right-3 w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-xs font-black shadow-lg border-2 border-white"
            >
              20+
            </motion.div>
          </motion.div>

          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-brand-pink/20 to-brand-yellow/10 rounded-full blur-[120px] -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
