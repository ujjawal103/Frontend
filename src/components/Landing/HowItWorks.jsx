
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Create Your Menu",
    desc: "Upload your items and generate your unique QR codes in minutes.",
    icon: "🎨"
  },
  {
    title: "Customers Order",
    desc: "Diners scan, browse the digital menu, and place orders directly.",
    icon: "📱"
  },
  {
    title: "Manage & Grow",
    desc: "Receive orders, track billing, and manage your revenue dashboard.",
    icon: "📈"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-brand-light px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-dark mb-4">How it works</h2>
          <p className="text-gray-600">Get started in three simple steps</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-pink/10 -translate-y-1/2 hidden lg:block -z-0"></div>

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex-1 w-full bg-white p-8 rounded-[40px] shadow-lg relative z-10 border border-gray-100"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center font-bold text-xl text-brand-dark shadow-md">
                {i + 1}
              </div>
              <div className="text-5xl mb-6 text-center">{step.icon}</div>
              <h3 className="text-2xl font-bold text-center mb-4">{step.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
