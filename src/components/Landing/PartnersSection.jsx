import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "Chai Junction", logo: "/parteners/partener1.png" },
  { name: "Biryani Baithak", logo: "/parteners/partener2.png" },
  { name: "Metro Dine", logo: "/parteners/partener3.png" },
  { name: "Spice Yard", logo: "/parteners/partener4.png" },
  { name: "Urban Sip", logo: "/parteners/partener5.png" },
  { name: "Blue Bay Bar", logo: "/parteners/partener6.png" },
  { name: "Tandoor Trails", logo: "/parteners/partener7.png" },
  { name: "Cafe Ember", logo: "/parteners/partener8.png" },
  { name: "Masala Street", logo: "/parteners/partener9.png" },
  { name: "Brew & Buns", logo: "/parteners/partener10.png" },
  { name: "Hotel Royale Inn", logo: "/parteners/partener11.png" },
  { name: "Coastal Curry Co.", logo: "/parteners/partener12.png" },
];


const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-dark mb-4">
            Our Partners
          </h2>
          <p className="text-gray-600">
            From local chai tapris to boutique hotels — Tap Resto fits every
            business size.
          </p>
        </div>

        {/* Scrollable container */}
        <div
          className="
            flex gap-10
            overflow-x-auto
            scrollbar-hide
            snap-x snap-mandatory
            md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible
          "
        >
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="
                snap-center
                min-w-[160px] md:min-w-0
                flex flex-col items-center justify-center
                cursor-pointer
                hover:grayscale grayscale-0
                transition-all duration-300
              "
            >
              {/* Logo */}
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-3 shadow-sm">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-[100%] max-h-[100%] object-cover rounded-full"
                />
              </div>

              {/* Name */}
              <span className="font-bold text-gray-800 text-sm text-center">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
