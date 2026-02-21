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
  const [imageLoaded, setImageLoaded] = useState(false);

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
          initial={{ opacity: 0, y: 20, filter: 'blur(15px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}
        >
          <img
            src="/SamCampoloLogo_White.png"
            alt="Sam Campolo"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('Sam%20Campolo')) {
                target.src = '/Sam%20Campolo_rgb_SignCenter_Sq_White.png';
              }
            }}
            style={{
              width: 340,
              maxWidth: '85vw',
              height: 'auto',
              filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.8))',
            }}
          />
        </motion.div>

        {/* Fallback Text */}
        {!imageLoaded && (
          <motion.h1
            style={{
              fontSize: 32,
              fontFamily: 'Playfair Display, serif',
              color: '#ffffff',
              fontWeight: 400,
              letterSpacing: '0.1em',
              marginBottom: 32,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            SAM CAMPOLO
          </motion.h1>
        )}

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
              transition={{ delay: 1.4, duration: 2, ease: 'easeInOut' }}
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
          transition={{ delay: 1.8, duration: 1.2 }}
        >
          Luxury Real Estate
        </motion.p>
      </div>
    </motion.div>
  );
}

// ============================================
// SSR LOADING SCREEN
// ============================================
function LoadingScreen() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0a',
      }}
    >
      {/* Subtle pulsing logo placeholder */}
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
        }}
      >
        {/* Shimmer diamond */}
        <div
          style={{
            width: 12,
            height: 12,
            border: '1px solid rgba(201, 169, 98, 0.5)',
            transform: 'rotate(45deg)',
            animation: 'pulse-subtle 2s ease-in-out infinite',
          }}
        />
        {/* Loading line */}
        <div
          style={{
            width: 120,
            height: 1,
            background: 'linear-gradient(to right, transparent, rgba(201, 169, 98, 0.3), transparent)',
            animation: 'shimmer 2s ease-in-out infinite',
          }}
        />
      </div>
    </div>
  );
}

// ============================================
// INTRO PROVIDER
// ============================================
export function IntroProvider({ children }: { children: ReactNode }) {
  const [hasSeenIntro, setHasSeenIntro] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setIsClient(true);
    const seen = sessionStorage.getItem("hasSeenIntro");
    if (!seen) {
      setHasSeenIntro(false);
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setHasSeenIntro(true);
    sessionStorage.setItem("hasSeenIntro", "true");
  };

  // SSR / initial hydration - show branded loading screen
  if (!isClient) {
    return <LoadingScreen />;
  }

  return (
    <IntroContext.Provider value={{ hasSeenIntro, setHasSeenIntro }}>
      <AnimatePresence mode="wait">
        {showIntro && <SplashIntro onComplete={handleIntroComplete} />}
      </AnimatePresence>
      <motion.div
        initial={!hasSeenIntro ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: showIntro ? 0.3 : 0 }}
      >
        {children}
      </motion.div>
    </IntroContext.Provider>
  );
}
