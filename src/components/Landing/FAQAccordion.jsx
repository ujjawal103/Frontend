
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "Do I need a computer to use Tap Resto?",
    a: "No. Customers just scan QR with any smartphone; owners can use any browser or tablet to manage orders and billing."
  },
  {
    q: "How does WhatsApp registration work?",
    a: "Tap the WhatsApp button to open chat. Share your basic details and we’ll onboard you quickly within minutes."
  },
  {
    q: "Is there a limit on items or menus?",
    a: "No! Our yearly plan includes unlimited menus, unlimited items, and unlimited table configurations."
  },
  {
    q: "Can I use it offline?",
    a: "Yes — Tap Resto Android application works seamlessly even you can create orders offline. Orders sync automatically when back online."
  },
  {
    q: "What kind of support do you provide?",
    a: "We provide 24/7 dedicated support via WhatsApp and Email for all our subscribers."
  }
];

const FAQItem = ({ faq, i }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
      >
        <span className="text-xl font-bold text-brand-dark group-hover:text-brand-pink transition-colors">{faq.q}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed font-medium">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQAccordion = () => {
  return (
    <section id="faq" className="py-24 bg-white px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center text-brand-dark mb-16">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} i={i} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
