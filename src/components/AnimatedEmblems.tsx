"use client";

import { motion } from "framer-motion";

export const LuxuryStar = ({ className = "", size = 40 }: { className?: string, size?: number }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    animate={{ rotate: 360 }}
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
  >
    <motion.path
      d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path
      d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z"
      fill="currentColor"
      className="opacity-10"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
    <motion.circle
      cx="50"
      cy="50"
      r="4"
      fill="currentColor"
      initial={{ scale: 0 }}
      whileInView={{ scale: [0, 1.5, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 1 }}
    />
  </motion.svg>
);

export const ScrollIndicator = ({ className = "" }: { className?: string }) => (
  <motion.div 
    className={`flex flex-col items-center gap-4 text-champagne ${className}`}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 1 }}
  >
    <span className="text-[9px] uppercase tracking-[0.4em] font-medium hidden sm:block">Scroll</span>
    <motion.svg width="14" height="40" viewBox="0 0 14 40" fill="none">
      <rect x="0.5" y="0.5" width="13" height="39" rx="6.5" stroke="currentColor" strokeWidth="1" className="opacity-30" />
      <motion.circle
        cx="7"
        cy="7"
        r="3"
        fill="currentColor"
        animate={{ cy: [7, 33, 7] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  </motion.div>
);

export const CompassRose = ({ className = "", size = 80 }: { className?: string, size?: number }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    animate={{ rotate: 360 }}
    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
  >
    <motion.circle 
      cx="50" cy="50" r="48" 
      fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    />
    <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-20" />
    <motion.path
      d="M50 10 L58 42 L90 50 L58 58 L50 90 L42 58 L10 50 L42 42 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
    />
    <motion.path
      d="M50 10 L50 90 M10 50 L90 50"
      stroke="currentColor"
      strokeWidth="0.5"
      className="opacity-40"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.8 }}
    />
    <motion.circle 
      cx="50" cy="50" r="2" fill="currentColor" 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.5 }}
    />
  </motion.svg>
);

export const OrnateKeyFrame = ({ className = "", size = 120 }: { className?: string, size?: number }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
  >
    <motion.path
      d="M10 10 h 80 v 80 h -80 v -80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="opacity-30"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path
      d="M5 5 h 20 v 20 h -20 v -20 M75 5 h 20 v 20 h -20 v -20 M75 75 h 20 v 20 h -20 v -20 M5 75 h 20 v 20 h -20 v -20"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 1 }}
    />
  </motion.svg>
);
