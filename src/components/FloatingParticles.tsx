"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  className?: string;
}

export function FloatingParticles({
  count = 15,
  color = "bg-champagne/40",
  className = "",
}: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; top: string; duration: number; delay: number }>>([]);

  useEffect(() => {
    // eslint-disable-next-line
    setParticles(
      [...Array(count)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 3,
        delay: Math.random() * 2,
      }))
    );
  }, [count]);

  if (particles.length === 0) return null;

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute w-1 h-1 ${color} rounded-full`}
          style={{
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

interface FloatingOrbsProps {
  count?: number;
  className?: string;
}

export function FloatingOrbs({
  count = 5,
  className = "",
}: FloatingOrbsProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, rgba(201, 169, 98, ${0.03 + i * 0.01}) 0%, transparent 70%)`,
            left: `${20 + i * 15}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
