"use client";

import { motion } from "framer-motion";
import { IconStarFilled } from "@tabler/icons-react";

interface GoogleRatingBadgeProps {
  rating?: number;
  reviewCount?: number;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

export function GoogleRatingBadge({
  rating = 5.0,
  reviewCount = 63,
  variant = "light",
  size = "md",
  href = "https://share.google/KESfkMNyjb26IIHkT",
  className = "",
}: GoogleRatingBadgeProps) {
  const isDark = variant === "dark";
  
  const sizes = {
    sm: {
      container: "px-4 py-2.5",
      stars: 14,
      rating: "text-lg",
      text: "text-xs",
      google: "h-4",
    },
    md: {
      container: "px-5 py-3.5",
      stars: 18,
      rating: "text-2xl",
      text: "text-sm",
      google: "h-5",
    },
    lg: {
      container: "px-6 py-4",
      stars: 22,
      rating: "text-3xl",
      text: "text-base",
      google: "h-6",
    },
  };

  const s = sizes[size];

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-4 ${s.container} ${
        isDark 
          ? "bg-neutral-900 border border-neutral-800 hover:border-neutral-600" 
          : "bg-white border border-neutral-200 shadow-lg shadow-neutral-200/50 hover:border-champagne hover:shadow-champagne/20"
      } transition-all duration-300 cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.4 }}
    >
      {/* Google Logo */}
      <div className="flex items-center gap-2">
        <svg className={s.google} viewBox="0 0 24 24" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span className={`font-medium ${isDark ? "text-white" : "text-neutral-900"}`}>
          Google
        </span>
      </div>

      {/* Divider */}
      <div className={`w-px h-8 ${isDark ? "bg-neutral-700" : "bg-neutral-200"}`} />

      {/* Rating */}
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className={`${s.rating} font-serif font-medium ${isDark ? "text-white" : "text-neutral-900"}`}>
            {rating.toFixed(1)}
          </span>
          <span className={`${s.text} ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
            {reviewCount} reviews
          </span>
        </div>
        
        {/* Stars */}
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <IconStarFilled
                size={s.stars}
                className={i < Math.floor(rating) ? "text-yellow-400" : "text-neutral-300"}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

// Compact inline version for footer or smaller spaces
export function GoogleRatingInline({
  rating = 5.0,
  href = "https://share.google/KESfkMNyjb26IIHkT",
  className = "",
}: {
  rating?: number;
  href?: string;
  className?: string;
}) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 hover:opacity-80 transition-opacity ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <svg className="h-4" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <IconStarFilled
            key={i}
            size={12}
            className={i < Math.floor(rating) ? "text-yellow-400" : "text-neutral-300"}
          />
        ))}
      </div>
      <span className="text-sm font-medium text-neutral-600">{rating.toFixed(1)}</span>
    </motion.a>
  );
}
