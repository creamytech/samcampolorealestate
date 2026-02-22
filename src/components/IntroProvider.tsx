"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

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

/* ============================================
   INTRO PROVIDER
   
   The actual visible splash is rendered as raw HTML
   in layout.tsx (SSR_LOADING_HTML). This component
   just manages the timing and hides it.
   ============================================ */

export function IntroProvider({
  children,
  initialHasSeen = false,
}: {
  children: ReactNode;
  initialHasSeen?: boolean;
}) {
  const [hasSeenIntro, setHasSeenIntro] = useState(() => {
    if (initialHasSeen) return true;
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("hasSeenIntro") === "true";
    }
    return false;
  });
  const [showSplash, setShowSplash] = useState(!hasSeenIntro);

  // When this component mounts, the SSR splash is already visible.
  // We keep it visible for the intro duration, then fade it out.
  useEffect(() => {
    const ssrSplash = document.getElementById("ssr-splash");

    if (!showSplash) {
      // Already seen — immediately remove SSR splash
      if (ssrSplash) ssrSplash.remove();
      return;
    }

    // After 3.5s, start exit animation
    const exitTimer = setTimeout(() => {
      if (ssrSplash) {
        ssrSplash.style.transition = "opacity 1s ease, transform 0.8s ease";
        ssrSplash.style.opacity = "0";
        ssrSplash.style.transform = "scale(1.02)";
      }
    }, 3500);

    // After 4.5s, remove and reveal content
    const doneTimer = setTimeout(() => {
      if (ssrSplash) ssrSplash.remove();
      setShowSplash(false);
      setHasSeenIntro(true);
      document.cookie = "hasSeenIntro=true; path=/; max-age=86400";
      sessionStorage.setItem("hasSeenIntro", "true");
    }, 4500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [showSplash]);

  return (
    <IntroContext.Provider value={{ hasSeenIntro, setHasSeenIntro }}>
      <div
        style={{
          opacity: showSplash ? 0 : 1,
          transition: "opacity 0.6s ease",
        }}
      >
        {children}
      </div>
    </IntroContext.Provider>
  );
}
