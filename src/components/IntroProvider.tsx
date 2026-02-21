"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroContextType {
  hasSeenIntro: boolean;
  setHasSeenIntro: (value: boolean) => void;
}

const IntroContext = createContext<IntroContextType | null>(null);

export function useIntro() {
  const context = useContext(IntroContext);
  if (!context) {
    throw new Error("useIntro must be used within IntroProvider");
  }
  return context;
}

// ============================================
// LUXURY SPLASH INTRO (CINEMATIC REDESIGN)
// ============================================
function SplashIntro({ onComplete }: { onComplete: () => void }) {

  useEffect(() => {
    // Complete after animation finishes
    const timer = setTimeout(onComplete, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#030303', // Extremely deep charcoal black
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.05 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background radial gradient for focus */}
      <motion.div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(201,169,98,0.06) 0%, transparent 60%)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: 'easeOut' }}
      />

      {/* Main content */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
        
        {/* Top dropping line */}
        <motion.div
          style={{
            width: 1,
            height: 120,
            background: 'linear-gradient(to bottom, transparent, rgba(201,169,98,0.8))',
            margin: '0 auto 40px auto',
          }}
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Logo Reveal */}
        <motion.div
          initial={{ opacity: 0.5, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}
        >
          <img
            src="/LogoNav.png"
            alt="Sam Campolo"
            style={{
              width: 380,
              maxWidth: '85vw',
              height: 'auto',
              filter: 'brightness(0) invert(1) drop-shadow(0 10px 30px rgba(0,0,0,0.8))',
            }}
          />
        </motion.div>

        {/* Loading Progress Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div style={{ width: 180, height: 1, backgroundColor: 'rgba(255,255,255,0.05)', margin: '0 auto', overflow: 'hidden' }}>
            <motion.div
              style={{ height: '100%', backgroundColor: '#c9a962' }}
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ delay: 0.5, duration: 2.5, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          style={{
            color: 'rgba(255, 255, 255, 0.3)',
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.4em',
            marginTop: 24,
          }}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1.2 }}
        >
          Luxury Real Estate
        </motion.p>
      </div>
    </motion.div>
  );
}



// ============================================
// INTRO PROVIDER
// ============================================
export function IntroProvider({ children, initialHasSeen = false }: { children: ReactNode, initialHasSeen?: boolean }) {
  const [hasSeenIntro, setHasSeenIntro] = useState(initialHasSeen);
  const [showIntro, setShowIntro] = useState(!initialHasSeen);

  useEffect(() => {
    // Graceful fallback for browsers where cookies might be blocked but sessionStorage works
    if (!initialHasSeen) {
      const seen = sessionStorage.getItem("hasSeenIntro");
      if (seen) {
        setHasSeenIntro(true);
        setShowIntro(false);
      }
    }
  }, [initialHasSeen]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setHasSeenIntro(true);
    // Set cookie for 1 day
    document.cookie = "hasSeenIntro=true; path=/; max-age=86400";
    sessionStorage.setItem("hasSeenIntro", "true");
  };

  return (
    <IntroContext.Provider value={{ hasSeenIntro, setHasSeenIntro }}>
      <AnimatePresence mode="wait">
        {showIntro && <SplashIntro onComplete={handleIntroComplete} />}
      </AnimatePresence>
      <motion.div
        initial={!hasSeenIntro ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: showIntro ? 0.3 : 0 }}
      >
        {children}
      </motion.div>
    </IntroContext.Provider>
  );
}
