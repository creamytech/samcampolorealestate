"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { useEffect } from "react";

interface CinematicTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  propertyName?: string;
}

export function CinematicTourModal({ isOpen, onClose, videoUrl, propertyName }: CinematicTourModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-neutral-950/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="absolute top-0 w-full p-6 flex justify-between items-center z-20 bg-gradient-to-b from-neutral-950/80 to-transparent"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-white">
              <span className="text-champagne text-xs uppercase tracking-[0.2em] block mb-1">Cinematic Tour</span>
              <h3 className="font-serif text-xl">{propertyName || "Luxury Property"}</h3>
            </div>
            
            <button
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-champagne hover:text-neutral-900 transition-colors"
            >
              <IconX size={24} />
            </button>
          </motion.div>

          <motion.div
            className="w-full max-w-6xl aspect-video mx-4 relative overflow-hidden shadow-2xl bg-neutral-900"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.1 }}
          >
            {videoUrl ? (
              <iframe 
                src={videoUrl} 
                className="w-full h-full border-0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 bg-neutral-900">
                <div className="w-20 h-20 border-4 border-champagne/20 border-t-champagne rounded-full animate-spin mb-6" />
                <p className="text-xl font-serif text-white mb-2">Loading Cinematic Experience</p>
                <p className="text-neutral-400 font-light">Preparing the high-resolution property tour...</p>
              </div>
            )}
            
            {/* Cinematic overlay borders */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
