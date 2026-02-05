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
// LUXURY SPLASH INTRO
// ============================================
function SplashIntro({ onComplete }: { onComplete: () => void }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Complete after animation finishes
    const timer = setTimeout(onComplete, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Floating particles
  const particles = [...Array(25)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <motion.div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0a',
      }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Animated background rays */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(${i * 45}deg, transparent 0%, transparent 45%, rgba(201, 169, 98, 0.03) 50%, transparent 55%, transparent 100%)`,
            }}
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 2, delay: 0.3 + i * 0.1 }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            style={{
              position: 'absolute',
              left: `${p.x}%`,
              bottom: '10%',
              width: 4,
              height: 4,
              borderRadius: '50%',
              backgroundColor: 'rgba(201, 169, 98, 0.6)',
            }}
            animate={{
              y: [0, -500],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Horizontal decorative lines */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.15 }}>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              top: `${10 + i * 6}%`,
              left: 0,
              right: 0,
              height: 1,
              background: 'linear-gradient(to right, transparent, #c9a962, transparent)',
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.6 }}
            transition={{ duration: 1.2, delay: i * 0.05 }}
          />
        ))}
      </div>

      {/* Main content - properly centered */}
      <div style={{ 
        textAlign: 'center', 
        position: 'relative', 
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Logo Image */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', justifyContent: 'center' }}
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
              width: 320,
              maxWidth: '80vw',
              height: 'auto',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
            }}
          />
        </motion.div>

        {/* Fallback text if image doesn't load */}
        {!imageLoaded && (
          <motion.h1
            style={{
              fontSize: 48,
              fontFamily: 'Playfair Display, serif',
              color: '#ffffff',
              fontWeight: 400,
              letterSpacing: '0.05em',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Sam Campolo
          </motion.h1>
        )}

        {/* Tagline */}
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
            marginTop: 48,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <motion.div
            style={{
              height: 1,
              width: 80,
              background: 'linear-gradient(to right, transparent, #c9a962)',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          />
          <p
            style={{
              color: 'rgba(201, 169, 98, 0.9)',
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.5em',
              fontWeight: 300,
            }}
          >
            Luxury Real Estate
          </p>
          <motion.div
            style={{
              height: 1,
              width: 80,
              background: 'linear-gradient(to left, transparent, #c9a962)',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Loading bar */}
        <motion.div
          style={{ marginTop: 64 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div
            style={{
              width: 200,
              height: 1,
              backgroundColor: 'rgba(255,255,255,0.1)',
              margin: '0 auto',
              overflow: 'hidden',
              borderRadius: 2,
            }}
          >
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(to right, rgba(201,169,98,0.3), #c9a962, rgba(201,169,98,0.3))',
              }}
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 2, delay: 2.2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
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

  if (!isClient) {
    return (
      <div style={{ position: 'fixed', inset: 0, backgroundColor: '#0a0a0a', zIndex: 99999 }} />
    );
  }

  return (
    <IntroContext.Provider value={{ hasSeenIntro, setHasSeenIntro }}>
      <AnimatePresence mode="wait">
        {showIntro && <SplashIntro onComplete={handleIntroComplete} />}
      </AnimatePresence>
      <motion.div
        initial={!hasSeenIntro ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </IntroContext.Provider>
  );
}
