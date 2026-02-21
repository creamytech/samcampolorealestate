"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconMapPin, IconArrowRight } from "@tabler/icons-react";
import { FloatingParticles } from "@/components/FloatingParticles";
import { LuxuryStar, ScrollIndicator } from "@/components/AnimatedEmblems";

const neighborhoods = [
  {
    name: "Scarsdale",
    tagline: "The Premier Westchester Village",
    description: "Known globally for its exceptional schools, grand Tudor estates, and vibrant village center. Scarsdale offers a quintessential suburban luxury experience with a quick 35-minute commute to Grand Central.",
    stats: { avgPrice: "$1.8M", schools: "A+", commute: "35 Min" },
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
  },
  {
    name: "Bronxville",
    tagline: "Historic Charm & Walkability",
    description: "A walkable, one-square-mile village featuring stunning medieval and Tudor architecture. Bronxville provides an intimate, incredibly tight-knit community atmosphere steps away from boutique dining.",
    stats: { avgPrice: "$2.1M", schools: "A+", commute: "28 Min" },
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
  },
  {
    name: "Rye",
    tagline: "Prestigious Sound Shore Living",
    description: "Combining historic appeal with a coastal lifestyle, Rye offers private beaches, elite country clubs, and stunning waterfront manors along the Long Island Sound.",
    stats: { avgPrice: "$1.9M", schools: "A", commute: "40 Min" },
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80"
  },
  {
    name: "Larchmont",
    tagline: "Vibrant Waterfront Community",
    description: "Life in Larchmont revolves around the water, yacht clubs, and a bustling, charming downtown strip filled with French bakeries and incredible local dining.",
    stats: { avgPrice: "$1.5M", schools: "A", commute: "33 Min" },
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80"
  },
  {
    name: "Bedford",
    tagline: "Equestrian Estates & Privacy",
    description: "For those seeking acreage, privacy, and equestrian facilities. Bedford features dirt roads, massive historic estates, and massive celebrity draw.",
    stats: { avgPrice: "$2.5M", schools: "B+", commute: "55 Min" },
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&q=80"
  }
];

export default function NeighborhoodsPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <main className="bg-neutral-50 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-32 lg:py-48 bg-neutral-950 overflow-hidden">
        <FloatingParticles />
        
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y: backgroundY }}
        >
          <img 
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1920&q=80" 
            alt="Westchester Aerial" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Gradients to fade smoothly */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/80 to-neutral-950" />
        
        <div className="relative max-w-7xl mx-auto px-6 z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-l from-champagne to-transparent" />
              <IconMapPin className="text-champagne" size={18} />
              <span className="text-champagne/80 text-xs uppercase tracking-[0.4em] font-medium">Areas of Focus</span>
              <div className="h-px w-16 bg-gradient-to-r from-champagne to-transparent" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight relative inline-block">
              <div className="absolute -top-12 -left-12 text-neutral-800 pointer-events-none hidden md:block">
                <LuxuryStar size={90} />
              </div>
              The <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-champagne to-white">Neighborhoods</span>
            </h1>
            
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto mt-6">
              An immersive guide to the most prestigious, storied, and sought-after enclaves of Westchester County.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:block">
          <ScrollIndicator />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none" />
      </section>

      {/* Main Neighborhood Map/Interactive Embed */}
      <section className="py-24 max-w-[90rem] mx-auto px-6">
        <div className="bg-neutral-100 p-2 md:p-4 rounded-xl shadow-inner border border-neutral-200">
           <div className="relative aspect-video lg:aspect-[21/9] w-full bg-neutral-200 overflow-hidden rounded-lg">
             {/* Actual Google Map Background focused over lower NY */}
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192237.52550186595!2d-73.914238!3d41.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2b74b68eef9eb%3A0xeebd1217e65ad57c!2sWestchester%20County%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
               className="absolute inset-0 w-full h-full border-0 grayscale opacity-50 isolate hover:grayscale-[20%] transition-all duration-700 pointer-events-none"
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
             />
             <div className="absolute inset-0 bg-blue-50/10 pointer-events-none mix-blend-overlay" />
             
             {/* Decorative UI Overlay */}
             <div className="absolute bottom-6 left-6 flex items-center gap-4 text-xs font-serif uppercase tracking-widest text-neutral-800 bg-white/70 backdrop-blur-md px-6 py-3 border border-white/40 shadow-xl pointer-events-none">
                 Westchester County Geography
             </div>
           </div>
        </div>
      </section>

      {/* Detailed Neighborhood Spotlights */}
      <section className="py-12 lg:py-24">
        <div className="max-w-[85rem] mx-auto px-6">
          {neighborhoods.map((hood, index) => (
            <motion.div 
              key={hood.name}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-32 lg:mb-48 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image Column */}
              <div className="w-full lg:w-[55%] relative group">
                <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-2xl relative">
                  <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <motion.img 
                    src={hood.image}
                    alt={hood.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  />
                </div>
                {/* Accent Offset Frame */}
                <div 
                  className={`absolute -z-10 bg-champagne/10 border border-champagne/20 w-full h-full top-8 ${index % 2 === 0 ? '-right-8' : '-left-8'} transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2`} 
                />
              </div>

              {/* Text Column */}
              <div className="w-full lg:w-[45%] flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-px bg-champagne block" />
                  <span className="text-champagne uppercase text-xs tracking-[0.3em] font-medium">{hood.tagline}</span>
                </div>
                
                <h2 className="text-5xl lg:text-7xl font-serif text-neutral-900 mb-6">{hood.name}</h2>
                <p className="text-neutral-500 font-light text-lg leading-relaxed mb-10 max-w-xl">
                  {hood.description}
                </p>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-3 gap-6 mb-12 border-y border-neutral-200 py-8">
                   <div className="flex flex-col">
                      <span className="text-neutral-400 text-xs uppercase tracking-widest mb-2 font-medium">Avg Value</span>
                      <span className="text-neutral-900 text-2xl font-serif">{hood.stats.avgPrice}</span>
                   </div>
                   <div className="flex flex-col border-l border-neutral-200 pl-6">
                      <span className="text-neutral-400 text-xs uppercase tracking-widest mb-2 font-medium">Schools</span>
                      <span className="text-neutral-900 text-2xl font-serif">{hood.stats.schools}</span>
                   </div>
                   <div className="flex flex-col border-l border-neutral-200 pl-6">
                      <span className="text-neutral-400 text-xs uppercase tracking-widest mb-2 font-medium">NYC By Train</span>
                      <span className="text-neutral-900 text-2xl font-serif">{hood.stats.commute}</span>
                   </div>
                </div>

                <a 
                  href="/contact" 
                  className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-900 w-max"
                >
                  <span className="relative">
                    Discuss {hood.name} Real Estate
                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-champagne group-hover:w-full transition-all duration-300" />
                  </span>
                  <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-champagne group-hover:bg-champagne group-hover:text-white transition-all duration-300">
                    <IconArrowRight size={14} />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-24 border-t border-neutral-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-serif text-neutral-900 mb-6">Unsure where to begin?</h2>
            <p className="text-neutral-500 font-light text-lg mb-10">
              Schedule a private consultation and allow Sam to curate a customized tour of Westchester&apos;s most exclusive neighborhoods tailored specifically to your lifestyle requirements.
            </p>
            <a 
              href="/contact"
              className="inline-block px-10 py-5 bg-neutral-950 text-white font-medium uppercase text-xs tracking-widest hover:bg-champagne transition-colors duration-300"
            >
              Request Neighborhood Consultation
            </a>
        </div>
      </section>
    </main>
  );
}
