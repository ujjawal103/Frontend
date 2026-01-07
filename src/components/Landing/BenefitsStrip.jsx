
import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  { value: "30%", label: "Save on waitstaff costs" },
  { value: "₹2,499", label: "Per year pricing" },
  { value: "1 Month", label: "Free demo period" }
];

const BenefitsStrip = () => {
  return (
    <div className="bg-brand-dark py-12 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 items-center text-center">
        {benefits.map((benefit, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-4xl lg:text-5xl font-black text-brand-yellow mb-2">{benefit.value}</div>
            <div className="text-gray-400 font-medium uppercase tracking-widest text-sm">{benefit.label}</div>
            {i < 2 && <div className="hidden md:block absolute top-1/2 -right-4 w-px h-12 bg-gray-700 -translate-y-1/2"></div>}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsStrip;
