"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IconLock, IconKey, IconArrowRight, IconSparkles } from "@tabler/icons-react";

export function PrivateCollectionSection() {
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password === "COMPASS") {
      setUnlocked(true);
    } else if (password !== "COMPASS" && password.length > 0) {
      alert("Invalid access code.");
    } else if (!password) {
      // For general VIP access (lead capture)
      setUnlocked(true);
    }
  };

  return (
    <section id="private" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background with luxury parallax effect */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1920&q=80"
          alt="Luxury property"
          className="w-full h-full object-cover filter brightness-50 grayscale"
        />
        <div className="absolute inset-0 bg-neutral-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-12 bg-champagne" />
            <IconLock className="text-champagne h-5 w-5" />
            <div className="h-px w-12 bg-champagne" />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Private Collection
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-400 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Exclusive off-market properties and whisper listings available only to VIP clients.
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.div
              key="locked"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-champagne/10 blur-3xl -mr-10 -mt-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-champagne/10 blur-3xl -ml-10 -mb-10" />
              
              <div className="relative z-10 text-center mb-8">
                <div className="w-16 h-16 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center mx-auto mb-6 text-champagne shadow-[0_0_30px_rgba(201,169,98,0.2)]">
                  <IconKey size={28} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">Request Access</h3>
                <p className="text-neutral-400 font-light text-sm">
                  Register below to view our portfolio of off-market luxury estates in Westchester.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 bg-neutral-900/50 border border-neutral-700 text-white placeholder-neutral-500 focus:border-champagne focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Access Code (Optional)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-6 py-4 bg-neutral-900/50 border border-neutral-700 text-white placeholder-neutral-500 focus:border-champagne focus:outline-none transition-colors"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-4 bg-champagne text-neutral-900 font-medium uppercase tracking-widest text-sm flex justify-center items-center gap-2 hover:bg-[#d6b468] transition-colors mt-2 group/btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enter Vault
                  <IconArrowRight size={18} className="translate-x-0 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  className="bg-neutral-900 border border-neutral-800 group overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-16005${60000 + item * 50}-ffad4c1539a9?w=800&q=80`} 
                      alt="Private Estate" 
                      className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-champagne text-neutral-900 px-3 py-1 text-xs uppercase tracking-widest font-bold flex items-center gap-1">
                      <IconSparkles size={12} /> Excusive
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-serif text-white mb-2">Private Estate</h4>
                    <p className="text-champagne mb-4">Price upon request</p>
                    <div className="h-px w-full bg-neutral-800 mb-4" />
                    <p className="text-neutral-400 font-light text-sm mb-6">
                      This exceptional property is currently not listed on the open market. Located in one of Westchester&apos;s most desirable enclaves.
                    </p>
                    <button className="text-white hover:text-champagne text-sm uppercase tracking-widest font-medium flex items-center gap-2 transition-colors">
                      Inquire <IconArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
