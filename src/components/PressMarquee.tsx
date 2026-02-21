"use client";

import { motion } from "framer-motion";

export function PressMarquee() {
  const pressLogos = [
    { name: "The Wall Street Journal", font: "font-serif" },
    { name: "The New York Times", font: "font-serif" },
    { name: "Forbes", font: "font-sans font-bold tracking-tight text-xl" },
    { name: "Architectural Digest", font: "font-serif" },
    { name: "RealTrends", font: "font-sans font-medium tracking-widest text-lg" },
    { name: "Bloomberg", font: "font-sans font-bold tracking-tight text-xl" },
  ];

  return (
    <div className="py-8 bg-neutral-950 border-t border-b border-neutral-900 overflow-hidden flex items-center relative z-20">
      <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-neutral-950 to-transparent z-10" />
      <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-neutral-950 to-transparent z-10" />
      
      <div className="flex whitespace-nowrap opacity-60">
        <motion.div
          className="flex items-center gap-16 md:gap-32 px-16"
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Double the array for seamless loop */}
          {[...pressLogos, ...pressLogos].map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`} 
              className={`${logo.font} text-neutral-400 uppercase tracking-widest text-sm md:text-base flex-shrink-0`}
            >
              {logo.name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
