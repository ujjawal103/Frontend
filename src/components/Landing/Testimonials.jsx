import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Supra Jaiswal",
    role: "Owner, Cafe Ember",
    quote:
      "Tap Resto transformed our billing. The QR system reduced our waiter workload by half. Best investment of ₹2,500!",
    img: "https://i.pravatar.cc/150?u=arjun",
  },
  {
    name: "Ruhan Shah",
    role: "Manager, Hotel Royale Inn",
    quote:
      "Setup was incredibly fast. We were live with our digital menu in under 20 minutes. My customers love the speed.",
    img: "https://i.pravatar.cc/150?u=priya",
  },
  {
    name: "Supriya Patel",
    role: "Proprietor, Chai Junction",
    quote:
      "I use it for my small snack stall. Easy to track revenue every day. The WhatsApp support is excellent.",
    img: "https://i.pravatar.cc/150?u=vikram",
  },
  {
    name: "Arjun Sharma",
    role: "Manager, Spice Yard",
    quote:
      "Easy to use and very reliable. I've been using it for over a year now.",
    img: "https://i.pravatar.cc/150?u=arjun2",
  },
  {
    name: "Raman Iyer",
    role: "Proprietor, Masala Street",
    quote:
      "Tap Resto's analytics dashboard helped us understand our best-sellers. Our sales increased by 30% in just two months!",
    img: "https://i.pravatar.cc/150?u=priya2",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-light px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-brand-dark mb-16">
          What our users say
        </h2>

        {/* Scrollable container */}
        <div
          className="
            flex gap-8
            overflow-x-auto
            snap-x snap-mandatory
            scrollbar-hide
            md:grid md:grid-cols-3 md:overflow-visible
          "
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="
                snap-center
                min-w-[100%] sm:min-w-[380px] md:min-w-0
                bg-white p-8 rounded-[40px]
                border border-pink-600
              "
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={t.img}
                  className="w-14 h-14 rounded-full border-2 border-brand-pink shadow-md"
                  alt={t.name}
                />
                <div>
                  <h4 className="font-bold text-brand-dark">{t.name}</h4>
                  <p className="text-xs text-brand-pink font-semibold">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-600 italic leading-relaxed">
                “{t.quote}”
              </p>

              {/* Rating */}
              <div className="mt-6 flex text-brand-yellow">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
