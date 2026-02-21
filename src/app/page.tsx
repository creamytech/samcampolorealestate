"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import HeroV2 from "@/components/HeroV2";
import StatsLamp from "@/components/StatsLamp";
import FeaturedPropertiesV2 from "@/components/FeaturedPropertiesV2";
import EditorialAbout from "@/components/EditorialAbout";
import { 
  NeighborhoodsSection, 
  ProcessSection, 
  RecentlySoldSection, 
  AwardsSection,
  NewsletterSection 
} from "@/components/sections";
import { GoogleRatingBadge } from "@/components/GoogleRatingBadge";
import { ServiceAreasMap } from "@/components/ServiceAreasMap";
import { PressMarquee } from "@/components/PressMarquee";
import { HomeValuation } from "@/components/HomeValuation";
import { 
  IconPhone,
  IconMail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconMapPin,
  IconAward,
  IconArrowRight,
  IconBed,
  IconBath,
  IconRuler,
  IconStar,
  IconDiamond
} from "@tabler/icons-react";

// ============================================
// ANIMATED TEXT REVEAL
// ============================================
export function TextReveal({ children, className = "", delay = 0 }: { children: string; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// ============================================
// GOLDEN SHIMMER EFFECT
// ============================================
function GoldenShimmer({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-champagne/20 to-transparent -skew-x-12"
        animate={{ x: ["-200%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
      />
    </div>
  );
}

// (Dead code removed - SplashIntro handled by IntroProvider, Nav handled by LuxuryNav component)

// ============================================
// HERO WITH VIDEO - ULTRA LUXURY CINEMATIC
// ============================================
export function HeroVideo() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  // Generate floating particles
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);
  
  useEffect(() => {
    // eslint-disable-next-line
    setParticles([...Array(40)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    })));
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Parallax & Scale */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[120%] object-cover"
        >
          <source src="https://res.cloudinary.com/dzmc26src/video/upload/v1770440999/0206_1_1_1_zll0x7.mp4" type="video/mp4" />
        </video>
        
        {/* Multi-layer luxury gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/20 to-neutral-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-transparent to-neutral-950/60" />
        
        {/* Vignette effect */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(10,10,10,0.6) 100%)'
        }} />
      </motion.div>

      {/* Floating Golden Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: 'radial-gradient(circle, rgba(201,169,98,0.8) 0%, rgba(201,169,98,0) 70%)',
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.sin(p.id) * 30, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Light Rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-1/2 w-[2px] h-[200%] origin-top"
            style={{
              background: 'linear-gradient(to bottom, rgba(201,169,98,0.5) 0%, transparent 50%)',
              transform: `rotate(${-30 + i * 12}deg)`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        style={{ opacity }}
      >
        {/* Decorative Corner Frames */}
        <div className="absolute -top-20 -left-10 md:-left-20 w-32 h-32 opacity-30">
          <motion.div 
            className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-champagne to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
          <motion.div 
            className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-champagne to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </div>
        <div className="absolute -top-20 -right-10 md:-right-20 w-32 h-32 opacity-30">
          <motion.div 
            className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-champagne to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
          <motion.div 
            className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-champagne to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </div>

        {/* Decorative top element with glow */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div 
            className="h-px w-20 md:w-32"
            style={{ background: 'linear-gradient(to right, transparent, #c9a962)' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.div
            className="relative"
            animate={{ 
              boxShadow: ['0 0 20px rgba(201,169,98,0.3)', '0 0 40px rgba(201,169,98,0.6)', '0 0 20px rgba(201,169,98,0.3)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <IconDiamond size={20} className="text-champagne" style={{ transform: 'rotate(45deg)' }} />
          </motion.div>
          <motion.div 
            className="h-px w-20 md:w-32"
            style={{ background: 'linear-gradient(to left, transparent, #c9a962)' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Subtitle with shimmer */}
        <motion.div
          className="relative inline-block mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-champagne text-xs md:text-sm uppercase tracking-[0.5em] font-light">
            Westchester & Fairfield County
          </p>
        </motion.div>
        
        {/* Main headline with staggered reveal */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-white font-normal leading-[0.95]"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Experience
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-white font-normal leading-[0.95]"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.75, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="italic font-light text-gradient-gold">Luxury</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-white font-normal leading-[0.95] italic font-light"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Real Estate
          </motion.h1>
        </div>
        
        {/* Description with elegant styling */}
        <motion.p
          className="text-base md:text-lg lg:text-xl text-white/60 mb-14 max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          Award-winning agent with unparalleled local expertise and 
          a commitment to <span className="text-champagne">exceptional service</span>
        </motion.p>
        
        {/* CTAs with premium styling */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <motion.a
            href="/listings"
            className="group relative px-12 py-5 bg-champagne text-neutral-900 text-sm font-medium uppercase tracking-widest overflow-hidden"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated shimmer */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: 'inset 0 0 30px rgba(255,255,255,0.3)' }}
            />
            <span className="relative z-10 flex items-center justify-center gap-3">
              View Properties
              <IconArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </motion.a>
          
          <motion.a
            href="/contact"
            className="group relative px-12 py-5 text-white text-sm font-medium uppercase tracking-widest overflow-hidden"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated border */}
            <span className="absolute inset-0 border border-white/30 group-hover:border-champagne transition-colors duration-500" />
            {/* Fill on hover */}
            <motion.span 
              className="absolute inset-0 bg-white origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 group-hover:text-neutral-900 transition-colors duration-300">
              Schedule Consultation
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom decorative frame */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        />
      </div>

      {/* Scroll Indicator - Elegant */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-light">Discover</span>
          <motion.div 
            className="w-px h-16"
            style={{ background: 'linear-gradient(to bottom, #c9a962, transparent)' }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="w-2 h-2 rotate-45 border-b border-r border-champagne/50"
            animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================
// MARQUEE BAR - LUXURY PRESENCE STYLE
// ============================================
function MarqueeBar() {
  const topItems = [
    "Top 1.5% Nationwide",
    "Westchester County",
    "Fairfield County",
    "$12M+ Annual Volume",
    "Compass Real Estate",
    "Award-Winning Agent",
    "Luxury Specialist",
    "Personalized Service",
  ];

  const bottomItems = [
    "Scarsdale",
    "Bronxville",
    "Rye",
    "Larchmont",
    "Chappaqua",
    "Bedford",
    "Greenwich",
    "Darien",
    "New Canaan",
    "Armonk",
    "Irvington",
    "Pelham",
  ];

  return (
    <div
      style={{
        backgroundColor: '#0a0a0a',
        overflow: 'hidden',
        position: 'relative',
        borderTop: '1px solid rgba(201, 169, 98, 0.15)',
        borderBottom: '1px solid rgba(201, 169, 98, 0.15)',
      }}
    >
      {/* Top row - credentials & taglines, scrolling left */}
      <div
        style={{
          padding: '18px 0',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        }}
      >
        <div
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            animation: 'marquee-scroll 35s linear infinite',
            width: 'max-content',
          }}
        >
          {/* Duplicate items for seamless loop */}
          {[...topItems, ...topItems, ...topItems].map((item, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  color: '#c9a962',
                  fontSize: 12,
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.35em',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {item}
              </span>
              <span
                style={{
                  margin: '0 28px',
                  color: 'rgba(201, 169, 98, 0.4)',
                  fontSize: 8,
                }}
              >
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom row - neighborhoods, scrolling right */}
      <div
        style={{
          padding: '18px 0',
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        }}
      >
        <div
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            animation: 'marquee-scroll-reverse 40s linear infinite',
            width: 'max-content',
          }}
        >
          {[...bottomItems, ...bottomItems, ...bottomItems].map((item, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontSize: 11,
                  fontWeight: 300,
                  textTransform: 'uppercase',
                  letterSpacing: '0.4em',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {item}
              </span>
              <span
                style={{
                  margin: '0 24px',
                  color: 'rgba(201, 169, 98, 0.3)',
                  fontSize: 6,
                }}
              >
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// STATS BAR - ELEGANT
// ============================================
export function StatsBar() {
  const stats = [
    { value: "$12.38M", label: "Closed Volume", icon: IconDiamond },
    { value: "18", label: "Transactions", icon: IconStar },
    { value: "Top 1.5%", label: "Nationwide", icon: IconAward },
    { value: "2025", label: "RealTrends", icon: IconAward },
  ];

  return (
    <section className="relative bg-neutral-950 py-20 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Golden line accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs text-champagne uppercase tracking-[0.2em] font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// FEATURED PROPERTIES - LUXURY GRID
// ============================================
export function FeaturedProperties() {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      price: "$925,000",
      address: "40 Plaster House Road",
      location: "Southbury, CT",
      beds: 4,
      baths: 3,
      sqft: "3,200",
      featured: true,
      link: "https://www.compass.com/homedetails/40-Plaster-House-Rd-Southbury-CT-06488/17YU2Z_pid/"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      price: "$1,850,000",
      address: "Modern Estate",
      location: "Chappaqua, NY",
      beds: 5,
      baths: 4,
      sqft: "4,500",
      featured: false,
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      price: "$2,400,000",
      address: "Tudor Revival",
      location: "Bedford, NY",
      beds: 6,
      baths: 5,
      sqft: "5,800",
      featured: true,
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      price: "$1,250,000",
      address: "Contemporary Home",
      location: "Armonk, NY",
      beds: 4,
      baths: 3,
      sqft: "3,600",
      featured: false,
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      price: "$3,200,000",
      address: "Waterfront Estate",
      location: "Rye, NY",
      beds: 7,
      baths: 6,
      sqft: "7,200",
      featured: true,
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      price: "$195,000",
      address: "68 East Hartsdale Ave",
      location: "Hartsdale, NY",
      beds: 1,
      baths: 1,
      sqft: "850",
      featured: false,
      link: "https://www.compass.com/homedetails/68-E-Hartsdale-Ave-Unit-2G-Hartsdale-NY-10530/15RZKH_pid/"
    },
  ];

  return (
    <section id="properties" className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-12 bg-champagne" />
            <span className="text-champagne text-xs uppercase tracking-[0.3em]">Portfolio</span>
            <div className="h-px w-12 bg-champagne" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-6">
            Featured Properties
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg font-light">
            Discover exceptional homes in Westchester and Fairfield County&apos;s most prestigious neighborhoods
          </p>
        </motion.div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.a
              key={property.address}
              href={property.link}
              className="group relative bg-white overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={property.image}
                  alt={property.address}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Price badge */}
                <div className="absolute top-4 left-4">
                  <div className="px-4 py-2 bg-neutral-900/90 backdrop-blur-sm text-white font-medium text-sm">
                    {property.price}
                  </div>
                </div>
                
                {/* Featured badge */}
                {property.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-champagne text-neutral-900 text-xs uppercase tracking-wider font-medium">
                      Featured
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 border-b-2 border-transparent group-hover:border-champagne transition-colors duration-300">
                <h3 className="text-xl font-serif text-neutral-900 mb-1 group-hover:text-champagne transition-colors">
                  {property.address}
                </h3>
                <p className="text-neutral-500 flex items-center gap-1 mb-4 text-sm">
                  <IconMapPin size={14} />
                  {property.location}
                </p>
                <div className="flex items-center gap-6 text-sm text-neutral-400 pt-4 border-t border-neutral-100">
                  <span className="flex items-center gap-1.5">
                    <IconBed size={16} /> {property.beds}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <IconBath size={16} /> {property.baths}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <IconRuler size={16} /> {property.sqft}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 text-neutral-900 font-medium uppercase tracking-wider group"
            whileHover={{ x: 5 }}
          >
            <span>View All Properties</span>
            <IconArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// ABOUT SECTION - EDITORIAL STYLE
// ============================================
export function AboutSection() {
  return (
    <section id="about" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="aspect-[3/4] overflow-hidden">
                <motion.img
                  src="/sampic.jpg"
                  alt="Sam Campolo"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              
              {/* Decorative frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-champagne -z-10" />
              
              {/* Awards badge */}
              <motion.div 
                className="absolute -bottom-8 -left-8 bg-neutral-900 text-white p-6 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <IconAward className="text-champagne mb-3" size={28} />
                <p className="text-3xl font-serif">2025</p>
                <p className="text-xs uppercase tracking-widest text-champagne mt-1">RealTrends</p>
                <p className="text-xs text-neutral-400 mt-0.5">Top 1.5% Nationwide</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-champagne" />
              <span className="text-champagne text-xs uppercase tracking-[0.3em]">About</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8 leading-tight">
              A Lifelong
              <br />
              <span className="italic font-light">Westchester</span> Resident
            </h2>
            
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed font-light">
              As a lifelong resident of Westchester County, I&apos;ve achieved unprecedented success 
              in real estate in just four years. Starting at Keller Williams as the top agent 
              in White Plains, I&apos;ve now joined Compass to better serve clients across 
              Westchester and Fairfield County.
            </p>
            
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed font-light">
              My professional ethos rests on three pillars: <span className="text-champagne font-medium">mutual trust</span>, 
              <span className="text-champagne font-medium"> integrity</span>, and <span className="text-champagne font-medium">loyalty</span>.
            </p>
            
            <blockquote className="relative pl-8 mb-10">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-champagne to-champagne/30" />
              <p className="text-2xl font-serif italic text-neutral-700 leading-relaxed">
                &ldquo;Arrive as a customer, work as a client, and leave a friend.&rdquo;
              </p>
            </blockquote>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="px-4 py-2 border border-neutral-200 text-sm text-neutral-600 font-light">
                Dale Carnegie Certified
              </span>
              <span className="px-4 py-2 border border-neutral-200 text-sm text-neutral-600 font-light">
                Chris Voss Negotiation
              </span>
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white font-medium uppercase tracking-wider group relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <GoldenShimmer />
              <span className="relative z-10">Get in Touch</span>
              <IconArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// TESTIMONIALS - ELEGANT CAROUSEL
// ============================================
function Testimonials() {
  const [active, setActive] = useState(0);
  
  const testimonials = [
    {
      quote: "Sam made selling our home an absolute breeze. His knowledge of the Westchester market and attention to detail exceeded all our expectations. We got above asking price in just two weeks!",
      name: "Michael & Jennifer Thompson",
      location: "Sold in Chappaqua",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
    },
    {
      quote: "As first-time homebuyers, we were nervous about the process. Sam's patience and expertise guided us every step of the way. He found us our dream home in Armonk.",
      name: "David Chen",
      location: "Purchased in Armonk",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
    },
    {
      quote: "Sam's understanding of luxury properties is unmatched. He marketed our estate beautifully and connected us with serious buyers immediately. Truly a five-star experience.",
      name: "Elizabeth Hartwell",
      location: "Sold in Bedford",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-28 bg-neutral-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-champagne/50" />
            <span className="text-champagne/80 text-xs uppercase tracking-[0.3em]">Testimonials</span>
            <div className="h-px w-12 bg-champagne/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">What Clients Say</h2>
          <GoogleRatingBadge rating={5.0} reviewCount={47} variant="dark" size="md" />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="min-h-[300px] flex flex-col items-center justify-center"
          >
            {/* Quote mark */}
            <div className="text-7xl text-champagne/20 font-serif leading-none mb-6">&ldquo;</div>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed mb-10 max-w-3xl">
              {testimonials[active].quote}
            </p>
            
            <div className="flex items-center gap-4">
              <img
                src={testimonials[active].image}
                alt={testimonials[active].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-champagne/30"
              />
              <div className="text-left">
                <p className="text-white font-medium text-lg">{testimonials[active].name}</p>
                <p className="text-champagne/80 text-sm">{testimonials[active].location}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`transition-all duration-300 ${
                index === active 
                  ? "w-10 h-1 bg-champagne" 
                  : "w-3 h-1 bg-neutral-700 hover:bg-neutral-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// CONTACT SECTION
// ============================================
function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-champagne" />
              <span className="text-champagne text-xs uppercase tracking-[0.3em]">Contact</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6 leading-tight">
              Let&apos;s Find Your
              <br />
              <span className="italic font-light">Dream Home</span>
            </h2>
            
            <p className="text-lg text-neutral-600 mb-10 font-light leading-relaxed">
              Whether you&apos;re looking to buy, sell, or simply explore your options, 
              I&apos;m here to help you navigate the journey with expertise and care.
            </p>

            <div className="space-y-6 mb-10">
              <motion.a 
                href="tel:+19145849799" 
                className="flex items-center gap-5 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-14 h-14 bg-neutral-900 flex items-center justify-center text-white group-hover:bg-champagne group-hover:text-neutral-900 transition-colors">
                  <IconPhone size={22} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider">Phone</p>
                  <p className="text-lg text-neutral-900 font-medium">(914) 584-9799</p>
                </div>
              </motion.a>
              
              <motion.a 
                href="mailto:sam.campolo@compass.com" 
                className="flex items-center gap-5 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-14 h-14 bg-neutral-900 flex items-center justify-center text-white group-hover:bg-champagne group-hover:text-neutral-900 transition-colors">
                  <IconMail size={22} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider">Email</p>
                  <p className="text-lg text-neutral-900 font-medium">sam.campolo@compass.com</p>
                </div>
              </motion.a>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-neutral-900 flex items-center justify-center text-white">
                  <IconMapPin size={22} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider">Office</p>
                  <p className="text-lg text-neutral-900 font-medium">Compass | Chappaqua, NY</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: IconBrandFacebook, href: "https://www.facebook.com/SamCampoloRealEstate" },
                { icon: IconBrandInstagram, href: "https://www.instagram.com/sam_campolo/" },
                { icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/sam-c-1008b5160/" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-champagne hover:text-champagne hover:bg-champagne/5 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="bg-white p-8 lg:p-10 shadow-xl shadow-neutral-200/50">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-5 py-4 bg-neutral-50 border-0 focus:bg-white focus:ring-2 focus:ring-champagne/50 transition-all text-neutral-900 placeholder:text-neutral-400"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-5 py-4 bg-neutral-50 border-0 focus:bg-white focus:ring-2 focus:ring-champagne/50 transition-all text-neutral-900 placeholder:text-neutral-400"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 bg-neutral-50 border-0 focus:bg-white focus:ring-2 focus:ring-champagne/50 transition-all mb-4 text-neutral-900 placeholder:text-neutral-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-4 bg-neutral-50 border-0 focus:bg-white focus:ring-2 focus:ring-champagne/50 transition-all mb-4 text-neutral-900 placeholder:text-neutral-400"
              />
              <select className="w-full px-5 py-4 bg-neutral-50 border-0 focus:bg-white focus:ring-2 focus:ring-champagne/50 transition-all mb-4 text-neutral-400">
                <option value="">I&apos;m interested in...</option>
                <option value="buy">Buying a home</option>
                <option value="sell">Selling my home</option>
                <option value="both">Buying and selling</option>
                <option value="invest">Investment properties</option>
              </select>
              <textarea
                placeholder="Tell me about your real estate goals..."
                rows={5}
                className="w-full px-5 py-4 bg-neutral-50 border-0 focus:bg-white focus:ring-2 focus:ring-champagne/50 transition-all mb-6 resize-none text-neutral-900 placeholder:text-neutral-400"
              />
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-neutral-900 text-white font-medium uppercase tracking-widest hover:bg-neutral-800 transition-colors relative overflow-hidden group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <GoldenShimmer />
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



// ============================================
// MAIN PAGE
// ============================================
export default function Home() {
  return (
    <main className="bg-white">
      <HeroV2 />
      <PressMarquee />
      <MarqueeBar />
      <StatsLamp />
      <FeaturedPropertiesV2 />
      <NeighborhoodsSection />
      <ProcessSection />
      <ServiceAreasMap />
      <EditorialAbout />
      <RecentlySoldSection />
      <AwardsSection />
      <Testimonials />
      <HomeValuation />
      <NewsletterSection />
      <ContactSection />
    </main>
  );
}
