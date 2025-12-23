import { motion } from "framer-motion";

const HomeEndNote = () => {
  return (
    <div className="flex flex-col items-start justify-center text-left py-16 px-4 pl-10 bg-gray-200">

      {/* MAIN TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="leading-tight"
      >
        <p className="text-5xl md:text-7xl font-bold text-gray-400">
          Just
        </p>
        <p className="text-6xl md:text-8xl font-extrabold text-gray-500">
          Tap it<span className="text-pink-600">!</span>
        </p>
      </motion.div>

      {/* SUB TEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-6 text-sm md:text-base text-gray-500"
      >
        crafted with{" "}
        <span className="text-pink-500">❤️</span>{" "}
        in <span className="font-semibold">Lucknow</span>
      </motion.p>
    </div>
  );
};

export default HomeEndNote;
