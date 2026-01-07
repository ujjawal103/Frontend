import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Yearly Access",
    price: "2,499",
    duration: "/year",
    highlight: true,
    description: "Best value. Save more yearly.",
    cta: "Pay ₹2,499 / year",
    link: "https://wa.me/919628316081?text=I%20want%20to%20subscribe%20to%20Tap%20Resto",
    features: [
      "Unlimited QR menus",
      "Unlimited Items & Categories",
      "GST Billing & Invoicing",
      "Table & Order Management",
      "Revenue Analytics Dashboard",
      "24/7 WhatsApp Support",
      "Multi-device Cloud Sync",
    ],
  },
  {
    title: "Monthly Plan",
    price: "249",
    duration: "/month",
    description: "Pay monthly. Cancel anytime.",
    cta: "Pay ₹249 / month",
    link: "https://wa.me/919628316081?text=I%20want%20monthly%20plan%20of%20Tap%20Resto",
    features: [
      "Unlimited QR menus",
      "Unlimited Items",
      "GST Billing",
      "Order Management",
      "Analytics Dashboard",
      "WhatsApp Support",
      "Multi-device Cloud Sync"
    ],
  },
  {
    title: "Free Demo",
    price: "0",
    duration: "",
    description: "Try before you pay.",
    cta: "Start Free Demo",
    link: "https://wa.me/919628316081?text=Hi%20Tap%20Resto%2C%20I%27d%20like%20a%20free%20demo",
    features: [
      "QR Menu Access",
      "Limited Items",
      "Order Flow Demo",
      "Dashboard Preview",
      "WhatsApp Support",
    ],
  },
];

const PricingCard = () => {
  return (
    <section id="pricing" className="py-20 bg-brand-light px-4">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-brand-dark mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600">Choose what fits your business</p>
      </div>

      {/* Horizontal scroll container */}
      <div
        className="
          flex gap-6 
          overflow-x-auto 
          snap-x snap-mandatory
          scrollbar-hide
          lg:grid lg:grid-cols-3 lg:overflow-visible
          max-w-6xl mx-auto
        "
      >
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`
              snap-center
              min-w-[100%] sm:min-w-[380px] lg:min-w-0
              h-[620px]
              bg-white rounded-3xl border-2
              ${plan.highlight ? "border-brand-yellow" : "border-gray-200"}
              flex flex-col
            `}
          >
            {/* Header */}
            <div className={`${plan.highlight ? "bg-brand-yellow" : "bg-gray-100"} p-8 text-center rounded-t-3xl `}>
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <div className="flex justify-center items-end gap-1">
                <span className="text-3xl font-bold">₹</span>
                <span className="text-6xl font-black">{plan.price}</span>
                <span className="text-lg font-semibold text-gray-600">
                  {plan.duration}
                </span>
              </div>
              <p className="mt-3 font-medium text-gray-700">
                {plan.description}
              </p>
            </div>

            {/* Body */}
            <div className="p-8 flex flex-col flex-1">
              <ul className="space-y-3 text-gray-700 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <span className="text-green-500">✔</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA pinned at bottom */}
              <div className="mt-auto">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={plan.link}
                  className={`
                    block w-full py-4 rounded-xl text-center font-black text-lg
                    ${plan.highlight
                      ? "bg-brand-pink text-white"
                      : "bg-brand-dark text-white"}
                  `}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingCard;
