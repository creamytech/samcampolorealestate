"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  IconMapPin, 
  IconTrendingUp, 
  IconHome, 
  IconArrowRight,
  IconUsersGroup,
  IconClipboardList,
  IconTarget,
  IconHomePlus,
  IconTrophy,
  IconStarFilled,
  IconChartLine,
  IconCertificate,
  type Icon
} from "@tabler/icons-react";

// ============================================
// ANIMATED COUNTER
// ============================================
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

// ============================================
// NEIGHBORHOODS SECTION
// ============================================
export function NeighborhoodsSection() {
  const neighborhoods = [
    {
      name: "Chappaqua",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
      stats: { avgPrice: "$1.2M", homes: "45+" },
      description: "Historic charm meets modern luxury"
    },
    {
      name: "Bedford",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      stats: { avgPrice: "$2.1M", homes: "30+" },
      description: "Estate living at its finest"
    },
    {
      name: "Armonk",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      stats: { avgPrice: "$1.5M", homes: "38+" },
      description: "Sophisticated suburban elegance"
    },
    {
      name: "Rye",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      stats: { avgPrice: "$1.8M", homes: "52+" },
      description: "Waterfront luxury living"
    },
    {
      name: "Scarsdale",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
      stats: { avgPrice: "$1.6M", homes: "60+" },
      description: "Premier Westchester address"
    },
    {
      name: "Greenwich, CT",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
      stats: { avgPrice: "$3.2M", homes: "25+" },
      description: "Connecticut's gold coast"
    },
  ];

  return (
    <section id="neighborhoods" className="py-28 bg-neutral-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-champagne/50" />
            <span className="text-champagne/80 text-xs uppercase tracking-[0.3em]">Local Expertise</span>
            <div className="h-px w-12 bg-champagne/50" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Neighborhoods I Serve
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-light">
            Deep local knowledge across Westchester and Fairfield County&apos;s most prestigious communities
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((hood, index) => (
            <motion.div
              key={hood.name}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <motion.img
                src={hood.image}
                alt={hood.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-serif text-white mb-1">{hood.name}</h3>
                <p className="text-neutral-400 text-sm mb-3">{hood.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-champagne">{hood.stats.avgPrice} avg</span>
                  <span className="text-neutral-500">|</span>
                  <span className="text-neutral-400">{hood.stats.homes} listings</span>
                </div>
                
                {/* Hover arrow */}
                <motion.div
                  className="absolute top-6 right-6 w-10 h-10 bg-champagne flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <IconArrowRight size={18} className="text-neutral-900" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// THE PROCESS SECTION - PREMIUM REDESIGN
// ============================================
export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We meet to discuss your goals, timeline, and preferences. I listen carefully to understand your unique needs.",
      Icon: IconUsersGroup,
      color: "from-amber-500 to-orange-600"
    },
    {
      number: "02",
      title: "Strategic Planning",
      description: "For sellers, we create a custom marketing plan. For buyers, we define your search criteria and priorities.",
      Icon: IconClipboardList,
      color: "from-emerald-500 to-teal-600"
    },
    {
      number: "03",
      title: "Execute & Navigate",
      description: "I handle every detail—showings, negotiations, inspections—keeping you informed at every step.",
      Icon: IconTarget,
      color: "from-blue-500 to-indigo-600"
    },
    {
      number: "04",
      title: "Close & Celebrate",
      description: "From contract to closing, I ensure a smooth transaction. Then we celebrate your success!",
      Icon: IconHomePlus,
      color: "from-champagne to-amber-600"
    },
  ];

  return (
    <section className="py-28 bg-neutral-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-champagne/50" />
            <span className="text-champagne/80 text-xs uppercase tracking-[0.3em]">How It Works</span>
            <div className="h-px w-12 bg-champagne/50" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            The Experience
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-light">
            A seamless journey from first conversation to handing you the keys
          </p>
        </motion.div>

        {/* Steps - Premium Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Card */}
              <div className="relative bg-neutral-900 border border-neutral-800 p-8 h-full overflow-hidden group-hover:border-champagne/30 transition-all duration-500">
                {/* Gradient glow on hover */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />
                
                {/* Step number - large watermark */}
                <div className="absolute -top-4 -right-2 text-8xl font-serif text-neutral-800/50 group-hover:text-champagne/10 transition-colors duration-500 select-none">
                  {step.number}
                </div>
                
                {/* Icon with gradient background */}
                <div className={`relative w-14 h-14 bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <step.Icon size={26} className="text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-champagne transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-neutral-400 font-light leading-relaxed text-sm">
                  {step.description}
                </p>

                {/* Bottom accent line */}
                <motion.div 
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${step.color}`}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "30%" }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform translate-x-full items-center">
                  <motion.div 
                    className="w-6 h-px bg-gradient-to-r from-neutral-700 to-neutral-800"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// RECENTLY SOLD SECTION
// ============================================
export function RecentlySoldSection() {
  const soldProperties = [
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      address: "123 Oak Lane",
      location: "Chappaqua, NY",
      salePrice: "$1,250,000",
      daysOnMarket: 14,
      overAsking: "+$50,000"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      address: "456 Maple Drive",
      location: "Bedford, NY",
      salePrice: "$2,100,000",
      daysOnMarket: 21,
      overAsking: "+$100,000"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      address: "789 Birch Court",
      location: "Armonk, NY",
      salePrice: "$1,875,000",
      daysOnMarket: 7,
      overAsking: "+$75,000"
    },
    {
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
      address: "321 Pine Street",
      location: "Rye, NY",
      salePrice: "$3,200,000",
      daysOnMarket: 30,
      overAsking: "At Asking"
    },
  ];

  return (
    <section className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-champagne" />
              <span className="text-champagne text-xs uppercase tracking-[0.3em]">Proven Results</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">Recently Sold</h2>
          </div>
          <p className="text-neutral-500 max-w-md font-light">
            A track record of success, delivering exceptional results for my clients
          </p>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible scrollbar-hide">
          {soldProperties.map((property, index) => (
            <motion.div
              key={property.address}
              className="flex-shrink-0 w-72 lg:w-auto bg-white group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.address}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* SOLD badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-champagne text-neutral-900 text-xs font-medium uppercase tracking-wider">
                  Sold
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <p className="text-2xl font-serif text-neutral-900 mb-1">{property.salePrice}</p>
                <p className="text-neutral-600 text-sm mb-3">{property.address}, {property.location}</p>
                <div className="flex items-center gap-4 text-xs text-neutral-500">
                  <span>{property.daysOnMarket} days</span>
                  <span className="text-champagne font-medium">{property.overAsking}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// AWARDS SECTION
// ============================================
export function AwardsSection() {
  const awards = [
    {
      year: "2025",
      title: "RealTrends Verified",
      subtitle: "Top 1.5% of Agents Nationwide",
      Icon: IconTrophy
    },
    {
      year: "2023",
      title: "Rising Star Award",
      subtitle: "Exceptional Performance",
      Icon: IconStarFilled
    },
    {
      year: "2022",
      title: "Homesnap",
      subtitle: "Fastest Growing Agent",
      Icon: IconChartLine
    },
    {
      year: "Certified",
      title: "Dale Carnegie",
      subtitle: "Professional Excellence",
      Icon: IconCertificate
    },
  ];

  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-champagne/5 via-transparent to-champagne/5" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 mx-auto bg-champagne/10 flex items-center justify-center mb-4">
                <award.Icon size={26} className="text-champagne" />
              </div>
              <p className="text-champagne text-xs uppercase tracking-wider mb-1">{award.year}</p>
              <p className="text-white font-medium">{award.title}</p>
              <p className="text-neutral-500 text-sm">{award.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// NEWSLETTER SECTION
// ============================================
export function NewsletterSection() {
  return (
    <section className="py-20 bg-champagne relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
            Stay Updated on the Market
          </h2>
          <p className="text-neutral-700 mb-8 font-light">
            Get exclusive insights, new listings, and market updates delivered to your inbox
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white border-0 text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900"
            />
            <motion.button
              type="submit"
              className="px-8 py-4 bg-neutral-900 text-white font-medium uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </form>
          
          <p className="text-neutral-600 text-xs mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
