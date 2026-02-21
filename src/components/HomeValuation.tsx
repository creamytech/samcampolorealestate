"use client";

import { motion } from "framer-motion";
import { IconHomeStats, IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function HomeValuation() {
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) return;
    // Just a basic route for now to pass the address to the contact form
    // A more advanced integration might use an API to fetch the AVM directly.
    router.push(`/contact?address=${encodeURIComponent(address)}&topic=valuation`);
  };

  return (
    <section id="valuation" className="relative py-32 bg-neutral-950 overflow-hidden text-center flex items-center justify-center min-h-[60vh]">
      {/* Background with luxury parallax effect */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="https://images.unsplash.com/photo-1613490908592-fd5e16f0f5b4?w=1920&q=80"
          alt="Luxury property"
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/90" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-champagne/10 text-champagne rounded-full mb-8">
            <IconHomeStats size={32} />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
            What is your home worth?
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 font-light mb-12 max-w-2xl mx-auto">
            Discover the true market value of your property with an exclusive, data-driven analysis by Sam Campolo.
          </p>

          <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row shadow-2xl overflow-hidden rounded-sm relative group">
              <input
                type="text"
                placeholder="Enter your property address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-8 py-6 text-lg bg-white/10 backdrop-blur-md text-white placeholder-neutral-400 border border-neutral-700/50 focus:border-champagne focus:outline-none focus:bg-white/20 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="relative px-10 py-6 bg-champagne text-neutral-900 font-medium tracking-widest uppercase text-sm flex items-center justify-center gap-3 overflow-hidden transition-colors border-l border-neutral-700/30 w-full md:w-auto shrink-0 group-hover:bg-[#cba85a] hover:!bg-[#e6c167]"
              >
                <span className="relative z-10 font-bold">Get Value</span>
                <IconArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </form>
          
          <p className="text-neutral-500 text-sm mt-6 font-light uppercase tracking-widest">
            A free, no-obligation valuation
          </p>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 right-10 w-px h-full bg-gradient-to-b from-transparent via-champagne/20 to-transparent" />
      <div className="absolute left-10 bottom-0 w-px h-full bg-gradient-to-t from-transparent via-champagne/20 to-transparent" />
    </section>
  );
}
