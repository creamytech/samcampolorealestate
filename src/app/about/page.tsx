"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { 
  IconPhone, 
  IconArrowRight,
  IconSparkles,
  IconCertificate,
  IconScale,
  IconTarget,
  IconFlame,
  IconTrophy
} from "@tabler/icons-react";
import { GoogleRatingBadge } from "@/components/GoogleRatingBadge";

// Floating Orbs Background
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
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

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const timeline = [
    { year: "2020", event: "Began real estate career", detail: "Started at Keller Williams in White Plains" },
    { year: "2021", event: "Top Producing Agent", detail: "Recognized as top agent in White Plains office" },
    { year: "2022", event: "Expanded Territory", detail: "Extended coverage to Fairfield County, CT" },
    { year: "2023", event: "Joined Compass", detail: "Partnered with the #1 luxury brokerage" },
    { year: "2024", event: "$12M+ in Sales", detail: "Best year with 18 closed transactions" },
    { year: "2025", event: "RealTrends Top 1.5%", detail: "Nationally recognized for performance" },
  ];

  const values = [
    {
      title: "Integrity",
      description: "Honest, transparent communication in every interaction. Your best interest is my only interest.",
      Icon: IconScale
    },
    {
      title: "Expertise",
      description: "Deep local knowledge combined with cutting-edge marketing strategies and negotiation skills.",
      Icon: IconTarget
    },
    {
      title: "Dedication",
      description: "Available when you need me, responsive to your questions, and committed to your success.",
      Icon: IconFlame
    },
    {
      title: "Results",
      description: "A proven track record of exceeding client expectations and achieving optimal outcomes.",
      Icon: IconTrophy
    },
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center bg-neutral-950 overflow-hidden">
        <FloatingOrbs />
        
        {/* Background image with parallax */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y: heroY }}
        >
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80" 
            alt="" 
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/50" />
        
        <motion.div 
          className="relative max-w-7xl mx-auto px-6 pt-32 pb-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="h-px w-16 bg-champagne"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
              <span className="text-champagne text-xs uppercase tracking-[0.4em] font-light">About</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Meet <span className="italic font-light">Sam Campolo</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              A lifelong Westchester resident dedicated to helping clients navigate the luxury real estate market with expertise, integrity, and personalized service.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-champagne to-transparent"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* Bio Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative group">
                <div className="aspect-[3/4] overflow-hidden">
                  <motion.img 
                    src="/sampic.jpg" 
                    alt="Sam Campolo" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                {/* Decorative frame */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-full h-full border-2 border-champagne -z-10"
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                />
                
                {/* Stats card with shimmer */}
                <motion.div 
                  className="absolute -bottom-10 -left-10 bg-neutral-900 text-white p-8 shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <div className="relative z-10">
                    <div className="text-4xl font-serif text-champagne mb-2">$12.38M</div>
                    <p className="text-neutral-400 text-sm">Closed Volume in 2024</p>
                    <div className="mt-4 pt-4 border-t border-neutral-700">
                      <div className="text-2xl font-serif">18</div>
                      <p className="text-neutral-400 text-xs">Transactions</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 mb-10 leading-tight">
                A Fresh Approach to<br />
                <span className="italic font-light">Luxury Real Estate</span>
              </h2>
              
              <div className="space-y-6 text-lg text-neutral-600 font-light leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  As a lifelong resident of Westchester County, I bring an intimate understanding of our communities that only comes from truly knowing a place as home. This deep local connection, combined with exceptional service, has allowed me to achieve unprecedented success in just four years.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Beginning my career at Keller Williams as the top agent in White Plains, I quickly established a reputation for dedication and results. Now, as a proud member of Compass—the nation&apos;s leading luxury brokerage—I bring even more resources and expertise to serve clients throughout Westchester and Fairfield County.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  My approach is built on three foundational pillars: <span className="text-champagne font-medium">mutual trust</span>, <span className="text-champagne font-medium">integrity</span>, and <span className="text-champagne font-medium">loyalty</span>. I believe every client deserves not just a transaction, but a relationship.
                </motion.p>
              </div>

              <motion.blockquote 
                className="relative pl-8 my-12 py-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-champagne via-champagne to-champagne/20 rounded-full"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                />
                <p className="text-2xl md:text-3xl font-serif italic text-neutral-700 leading-relaxed">
                  &ldquo;Arrive as a customer, work as a client, and leave a friend.&rdquo;
                </p>
              </motion.blockquote>

              {/* Google Rating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <GoogleRatingBadge rating={5.0} reviewCount={47} size="md" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-neutral-50 relative overflow-hidden">
        <FloatingOrbs />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="h-px w-12 bg-champagne" />
              <span className="text-champagne text-xs uppercase tracking-[0.3em]">Philosophy</span>
              <div className="h-px w-12 bg-champagne" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900">What I Stand For</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group bg-white p-8 lg:p-10 text-center relative overflow-hidden card-lift"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Hover shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-champagne/0 via-champagne/5 to-champagne/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                {/* Icon container */}
                <motion.div 
                  className="w-16 h-16 mx-auto mb-6 bg-neutral-950 flex items-center justify-center group-hover:bg-champagne transition-colors duration-500"
                  whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <value.Icon size={28} className="text-champagne group-hover:text-neutral-900 transition-colors duration-500" />
                </motion.div>
                <h3 className="text-xl font-serif text-neutral-900 mb-4 group-hover:text-champagne transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-neutral-500 font-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-champagne" />
              <span className="text-champagne text-xs uppercase tracking-[0.3em]">Journey</span>
              <div className="h-px w-12 bg-champagne" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900">My Career Path</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line with gradient */}
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-champagne via-champagne/50 to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative flex gap-8 mb-14 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Year dot */}
                <motion.div 
                  className="relative z-10 w-16 h-16 flex items-center justify-center bg-champagne text-neutral-900 font-serif text-sm font-medium rounded-full flex-shrink-0 shadow-lg"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(201, 169, 98, 0.4)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.year}
                </motion.div>
                
                {/* Content */}
                <div className="pt-3">
                  <h3 className="text-xl font-medium text-neutral-900 mb-1">{item.event}</h3>
                  <p className="text-neutral-500">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-neutral-950 relative overflow-hidden">
        <FloatingOrbs />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <IconCertificate className="text-champagne" size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Certifications & Training</h2>
            <p className="text-neutral-400 font-light">Continuous education to better serve my clients</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {[
              "Dale Carnegie Certified",
              "Chris Voss Negotiation Training",
              "Compass Technology Certified",
              "Luxury Home Marketing Specialist"
            ].map((cert, index) => (
              <motion.div
                key={cert}
                className="group px-6 lg:px-8 py-4 lg:py-5 border border-neutral-700 text-white font-light hover:border-champagne hover:bg-champagne/5 transition-all duration-500 cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <span className="group-hover:text-champagne transition-colors duration-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-champagne relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full mb-8"
            >
              <IconSparkles className="text-champagne" size={28} />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-neutral-700 text-lg mb-10 font-light max-w-xl mx-auto">
              Whether you&apos;re buying, selling, or exploring your options, I&apos;m here to help you achieve your real estate goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-neutral-900 text-white font-medium uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  Get in Touch
                  <IconArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.a
                href="tel:+19145849799"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-neutral-900 text-neutral-900 font-medium uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconPhone size={18} />
                (914) 584-9799
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
