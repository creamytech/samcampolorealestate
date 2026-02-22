"use client";

import { useState, useEffect } from "react";
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

  // Wait 7 seconds for the video to play before revealing content
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 7000);
    return () => clearTimeout(timer);
  }, []);

  // Stagger offset after the 7s mark
  const BASE = 0; // all delays are relative to when showContent becomes true

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-neutral-950 flex items-center justify-center">
      {/* Video Background */}
      <motion.div className="absolute inset-0 z-0 origin-center" style={{ y, scale }}>
        <video autoPlay muted loop playsInline className="w-full h-[120%] object-cover opacity-80">
          <source src="https://res.cloudinary.com/dzmc26src/video/upload/v1770440999/0206_1_1_1_zll0x7.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40" />
        <div className="absolute inset-0 bg-neutral-950/20 mix-blend-multiply" />
      </motion.div>

      {/* Hero Content — fades in after 7s */}
      <motion.div 
        className="relative z-10 text-center w-full px-4 md:px-8 mt-20"
        style={{ opacity }}
      >
        {/* Decorative gold lines sweep in first */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: BASE }}
        >
          <motion.div 
            className="h-px w-16 md:w-28"
            style={{ background: 'linear-gradient(to right, transparent, #c9a962)' }}
            initial={{ scaleX: 0, originX: 1 }}
            animate={showContent ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: BASE }}
          />
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={showContent ? { scale: 1, rotate: 45 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: BASE + 0.3 }}
          >
            <div className="w-2 h-2 bg-champagne rotate-45" />
          </motion.div>
          <motion.div 
            className="h-px w-16 md:w-28"
            style={{ background: 'linear-gradient(to left, transparent, #c9a962)' }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={showContent ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: BASE }}
          />
        </motion.div>

        {/* Subtitle — elegant tracking reveal */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "1em", y: 10 }}
          animate={showContent ? { opacity: 1, letterSpacing: "0.5em", y: 0 } : {}}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: BASE + 0.4 }}
        >
          <p className="text-champagne text-xs md:text-sm uppercase font-light mb-6">
            The standard of excellence
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* SAM — dramatic upward reveal with blur */}
          <div className="overflow-hidden">
            <motion.div 
              initial={{ y: "120%", opacity: 0, filter: "blur(12px)" }}
              animate={showContent ? { y: "0%", opacity: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: BASE + 0.7 }}
            >
              <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.85] font-serif text-white tracking-tight">
                SAM
              </h1>
            </motion.div>
          </div>

          {/* Campolo — slightly later, italic sweep */}
          <div className="overflow-hidden -mt-2">
            <motion.div 
              initial={{ y: "120%", opacity: 0, filter: "blur(12px)" }}
              animate={showContent ? { y: "0%", opacity: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: BASE + 1.0 }}
            >
              <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.85] font-serif italic font-light text-gradient-gold">
                Campolo
              </h1>
            </motion.div>
          </div>
          
          {/* Description — soft fade with upward float */}
          <motion.p 
            className="mt-8 text-lg md:text-xl text-white/70 max-w-xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, ease: "easeOut", delay: BASE + 1.6 }}
          >
            Curating the finest luxury estates in Westchester and Fairfield County for an elite clientele.
          </motion.p>
          
          {/* CTA Buttons — staggered entrance with scale */}
          <motion.div
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={showContent ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: BASE + 2.0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={showContent ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: BASE + 2.0 }}
            >
              <Link href="/listings" className="group relative overflow-hidden bg-champagne text-neutral-950 px-10 py-4 uppercase text-xs tracking-widest font-medium transition-all duration-500 hover:scale-105 inline-block">
                <span className="relative z-10 flex items-center gap-2 text-neutral-950">View Portfolio <IconArrowRight size={16} /></span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={showContent ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: BASE + 2.3 }}
            >
              <Link href="/contact" className="group relative overflow-hidden border border-white/20 text-white px-10 py-4 uppercase text-xs tracking-widest font-medium transition-all duration-500 hover:border-champagne hover:text-champagne inline-block">
                <span className="relative z-10 text-inherit">Private Consultation</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Border accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent z-10" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent z-10" />
      <div className="absolute left-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-champagne/20 to-transparent z-10 hidden md:block" />
      <div className="absolute right-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-champagne/20 to-transparent z-10 hidden md:block" />
      
      {/* Scroll Indicator — appears last */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        initial={{ opacity: 0, y: 10 }}
        animate={showContent ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: BASE + 2.8 }}
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
