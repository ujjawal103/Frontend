
import React from 'react';
import { motion } from 'framer-motion';

const AppDownloadSection = () => {
  return (
    <section className="py-24 bg-brand-pink px-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto w-[280px] h-[580px] border-[8px] border-brand-dark rounded-[40px] shadow-2xl overflow-hidden bg-white">
              <div className="absolute top-0 w-full h-6 bg-brand-dark z-20"></div>
              
              {/* Fake Menu UI Content */}
              <div className="pt-8 px-4 h-full bg-gray-50 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-8 h-8 bg-brand-pink/10 rounded-lg"></div>
                  <div className="w-24 h-4 bg-gray-200 rounded"></div>
                  <div className="w-8 h-8 bg-brand-pink/10 rounded-lg"></div>
                </div>
                
                <h4 className="text-[10px] font-bold text-gray-400 mb-4 uppercase tracking-widest">Digital Menu</h4>
                
                {/* Menu Items */}
                <div className="space-y-4">
                  {[
                    { name: 'Paneer Butter Masala', price: '₹240', img: 'https://picsum.photos/seed/paneer/100/100' },
                    { name: 'Cheese Garlic Naan', price: '₹80', img: 'https://picsum.photos/seed/naan/100/100' },
                    { name: 'Mango Lassi', price: '₹120', img: 'https://picsum.photos/seed/lassi/100/100' },
                    { name: 'Chicken Biryani', price: '₹320', img: 'https://picsum.photos/seed/biryani/100/100' }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-3 rounded-2xl shadow-sm flex items-center gap-3 border border-gray-100">
                      <img src={item.img} className="w-12 h-12 rounded-xl object-cover" alt={item.name} />
                      <div className="flex-1">
                        <div className="text-[10px] font-bold text-brand-dark leading-tight">{item.name}</div>
                        <div className="text-[10px] font-bold text-brand-pink mt-1">{item.price}</div>
                      </div>
                      <div className="w-5 h-5 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Cart Bar */}
                <div className="mt-6 bg-brand-pink p-3 rounded-xl text-white flex justify-between items-center shadow-lg">
                  <div className="text-[10px] font-bold">2 Items</div>
                  <div className="text-[10px] font-bold">View Cart →</div>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-yellow rounded-full opacity-20 -z-10 animate-pulse"></div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left order-1 lg:order-2"
          >
            <span className="inline-block bg-white/20 text-white font-bold px-4 py-1.5 rounded-full text-sm mb-6">
              🚀 EXCLUSIVE ANDROID APP
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Control your business from your <span className="text-brand-yellow">pocket.</span>
            </h2>
            <p className="text-xl text-pink-50 mb-10 max-w-xl font-medium leading-relaxed">
              Experience the fastest way to manage orders, update your digital menu, and track live billing. Our native Android app is optimized for tablets and mobile devices.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-6">
              {/* <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#" 
                className="group flex items-center gap-4 bg-brand-dark text-white px-8 py-4 rounded-3xl border-2 border-white/20 hover:bg-black transition-all shadow-2xl"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Play_Store_badge_EN.svg" className="h-10" alt="Get it on Google Play" />
              </motion.a> */}
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/tap-resto.apk" 
                className="flex items-center gap-3 bg-white text-brand-pink px-8 py-5 rounded-3xl font-black text-lg shadow-2xl"
              >
              <svg
                className="w-8 h-8 rotate-180 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14v-4H8l4-4 4 4h-3v4h-2z" />
              </svg>
                Download APK
              </motion.a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-pink-100">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-brand-pink bg-brand-yellow flex items-center justify-center text-[10px] text-brand-dark font-bold">4.9</div>
                <div className="w-8 h-8 rounded-full border-2 border-brand-pink bg-white flex items-center justify-center text-[10px] text-brand-pink font-bold">★</div>
              </div>
              <p className="text-sm font-semibold italic">"The fastest POS app I've ever used" — Cafe Owners</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
