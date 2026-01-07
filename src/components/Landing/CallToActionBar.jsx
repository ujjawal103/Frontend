
import React from 'react';

const CallToActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <a 
        href="https://wa.me/919628316081?text=Hi%20Tap%20Resto%2C%20I%27d%20like%20a%20demo"
        className="flex-1 bg-brand-pink text-white text-center py-4 rounded-2xl font-black shadow-lg shadow-pink-100"
      >
        Start Demo
      </a>
      <a 
        href="https://wa.me/919628316081"
        className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-100"
        aria-label="Chat on WhatsApp"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-8 h-8 brightness-0 invert" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default CallToActionBar;
