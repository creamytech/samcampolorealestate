"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconAward } from "@tabler/icons-react";
import { CompassRose } from "./AnimatedEmblems";

export default function EditorialAbout() {
  return (
    <section className="py-32 bg-white text-neutral-950 overflow-hidden" id="about">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-100/50 pointer-events-none z-0 mix-blend-multiply origin-center">
               <CompassRose size={600} />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] overflow-hidden group"
            >
              <motion.img
                src="/sampic.jpg"
                alt="Sam Campolo"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-10 -right-5 md:-right-10 bg-neutral-950 text-white p-6 md:p-12 w-[85%] shadow-2xl z-10"
              initial={{ opacity: 0, y: 50, x: -50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <IconAward className="text-champagne mb-4 w-10 h-10 md:w-12 md:h-12" />
              <p className="font-serif text-2xl md:text-4xl mb-2 text-white">Top 1.5%</p>
              <p className="text-champagne text-[10px] md:text-xs uppercase tracking-[0.3em]">RealTrends America</p>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 pt-10 lg:pt-0">
             <motion.div className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
             >
                <div className="h-px w-16 bg-champagne" />
                <span className="text-champagne uppercase text-xs tracking-widest font-medium">The Agent</span>
             </motion.div>

             <motion.h2 
               className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1] text-neutral-900"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.1 }}
             >
               Redefining <br/> <span className="italic text-champagne">Luxury Service</span>
             </motion.h2>

             <motion.div
               className="space-y-6 text-neutral-600 font-light text-lg md:text-xl leading-relaxed max-w-2xl"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
             >
               <p>
                 As a lifelong resident of Westchester County and a designated North Salem Specialist, Sam Campolo brings a refreshing blend of profound local insight, rapid industry ascension, and white-glove service to luxury real estate.
               </p>
               <p>
                 Recognized as the 2023 Rising Star and a top producer at Keller Williams White Plains before elevating his practice at Compass, his approach is built entirely upon three unwavering pillars: <span className="font-medium text-neutral-900 border-b border-champagne/40">mutual trust, integrity, and loyalty.</span>
               </p>
               <p className="text-base text-neutral-500 italic mt-4">
                 &ldquo;Arrive as a customer, work as a client, and leave a friend.&rdquo;
               </p>
               <p className="text-sm uppercase tracking-widest text-champagne pt-4 mt-8 border-t border-neutral-200">
                 Exclusive Off-Market Capabilities
               </p>
             </motion.div>

             <motion.div 
               className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.3 }}
             >
                <Link href="/about" className="bg-neutral-950 text-white px-8 py-4 uppercase text-xs tracking-widest hover:bg-champagne hover:text-neutral-950 transition-colors duration-300">
                  Read Full Bio
                </Link>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
