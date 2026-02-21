"use client";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function StatsLamp() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-b from-champagne to-white py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl font-serif"
      >
        Top 1.5% Nationwide <br /> <span className="text-3xl font-sans mt-4 block text-neutral-400 font-light tracking-widest uppercase">RealTrends 2025</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-neutral-300 max-w-2xl text-center mt-6 text-lg font-light leading-relaxed"
      >
        Representing the pinnacle of luxury real estate in Westchester and Fairfield County, with over <span className="text-champagne font-semibold">$12M+</span> in annual volume.
      </motion.p>
    </LampContainer>
  );
}
