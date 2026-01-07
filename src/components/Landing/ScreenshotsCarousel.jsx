
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const screenshots = [
  { url: "/analytics.png", caption: "Comprehensive Analytics Dashboard" },
  { url: "/dashboard_tapResto.png", caption: "Real-time Dashboard" },
  { url: "/POS_tapResto.png", caption: "Professional POS Billing Interface" },
  { url: "/createOrder.png", caption: "Live Order Tracking System" }
];

const ScreenshotsCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-dark mb-4">See it in action</h2>
          <p className="text-gray-600">Explore the powerful Tap Resto interface</p>
        </div>

        <div className="relative max-w-5xl mx-auto group">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <AnimatePresence mode="wait">
              <motion.img 
                key={index}
                src={screenshots[index].url}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-contain"
                alt={screenshots[index].caption}
              />
            </AnimatePresence>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white font-bold text-xl">{screenshots[index].caption}</p>
            </div>
          </div>

          {/* Controls */}
          <button 
            onClick={() => setIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-brand-dark shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={() => setIndex((prev) => (prev + 1) % screenshots.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-brand-dark shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, i) => (
              <button 
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 transition-all rounded-full ${index === i ? 'w-10 bg-brand-pink' : 'w-2 bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsCarousel;
