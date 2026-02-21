"use client";

import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { ScrollIndicator } from "./AnimatedEmblems";

export default function HeroV2() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-neutral-950 flex items-center justify-center">
      <motion.div className="absolute inset-0 z-0 origin-center" style={{ y, scale }}>
        <video autoPlay muted loop playsInline className="w-full h-[120%] object-cover opacity-80">
          <source src="https://res.cloudinary.com/dzmc26src/video/upload/v1770440999/0206_1_1_1_zll0x7.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40" />
        <div className="absolute inset-0 bg-neutral-950/20 mix-blend-multiply" />
      </motion.div>

      <motion.div 
        className="relative z-10 text-center w-full px-4 md:px-8 mt-20"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <p className="text-champagne text-xs md:text-sm uppercase tracking-[0.5em] font-light mb-6">
            The standard of excellence
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.h1 
            className="text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.85] font-serif text-white tracking-tight"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            SAM
            <span className="block italic font-light text-gradient-gold -mt-2">Campolo</span>
          </motion.h1>
          
          <motion.p 
            className="mt-8 text-lg md:text-xl text-white/70 max-w-xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            Curating the finest luxury estates in Westchester and Fairfield County for an elite clientele.
          </motion.p>
          
          <motion.div
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Link href="/listings" className="group relative overflow-hidden bg-champagne text-neutral-950 px-10 py-4 uppercase text-xs tracking-widest font-medium transition-all duration-500 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2 text-neutral-950">View Portfolio <IconArrowRight size={16} /></span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
            <Link href="/contact" className="group relative overflow-hidden border border-white/20 text-white px-10 py-4 uppercase text-xs tracking-widest font-medium transition-all duration-500 hover:border-champagne hover:text-champagne">
              <span className="relative z-10 text-inherit">Private Consultation</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent z-10" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent z-10" />
      <div className="absolute left-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-champagne/20 to-transparent z-10 hidden md:block" />
      <div className="absolute right-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-champagne/20 to-transparent z-10 hidden md:block" />
      
      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <ScrollIndicator />
      </div>
    </section>
  );
}
