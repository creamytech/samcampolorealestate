"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { 
  IconPhone, 
  IconMail,
  IconMapPin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconClock,
  IconCheck,
  IconSparkles,
  IconSend
} from "@tabler/icons-react";

// Floating particles background
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-champagne/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export default function ContactPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    preferredContact: "email",
    timeline: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const contactMethods = [
    {
      icon: IconPhone,
      label: "Phone",
      value: "(914) 584-9799",
      subtitle: "Call or text anytime",
      href: "tel:+19145849799",
      color: "bg-champagne text-neutral-900"
    },
    {
      icon: IconMail,
      label: "Email",
      value: "sam.campolo@compass.com",
      subtitle: "Response within 24 hours",
      href: "mailto:sam.campolo@compass.com",
      color: "bg-neutral-900 text-white"
    },
    {
      icon: IconMapPin,
      label: "Office",
      value: "Compass",
      subtitle: "Chappaqua, NY",
      href: null,
      color: "bg-neutral-100 text-neutral-600"
    },
    {
      icon: IconClock,
      label: "Availability",
      value: "7 Days a Week",
      subtitle: "Flexible scheduling for showings",
      href: null,
      color: "bg-neutral-100 text-neutral-600"
    },
  ];

  return (
    <main className="bg-white min-h-screen overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative py-32 lg:py-40 bg-neutral-950 overflow-hidden">
        <FloatingParticles />
        
        <motion.div style={{ y: heroY }} className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201, 169, 98, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="h-px w-16 bg-champagne"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4 }}
              />
              <IconSparkles className="text-champagne" size={20} />
              <motion.div 
                className="h-px w-16 bg-champagne"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4 }}
              />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Let&apos;s <span className="italic font-light">Connect</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Whether you&apos;re ready to buy, sell, or just have questions about the market, I&apos;m here to help.
            </motion.p>
          </motion.div>
        </div>

        {/* Gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-10">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {method.href ? (
                      <motion.a 
                        href={method.href} 
                        className="flex items-start gap-5 group"
                        whileHover={{ x: 8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className={`w-14 h-14 ${method.color} flex items-center justify-center flex-shrink-0`}
                          whileHover={{ scale: 1.05, rotate: 5 }}
                        >
                          <method.icon size={22} />
                        </motion.div>
                        <div>
                          <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">{method.label}</p>
                          <p className="text-lg text-neutral-900 font-medium group-hover:text-champagne transition-colors">{method.value}</p>
                          <p className="text-neutral-500 text-sm mt-1">{method.subtitle}</p>
                        </div>
                      </motion.a>
                    ) : (
                      <div className="flex items-start gap-5">
                        <div className={`w-14 h-14 ${method.color} flex items-center justify-center flex-shrink-0`}>
                          <method.icon size={22} />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">{method.label}</p>
                          <p className="text-lg text-neutral-900 font-medium">{method.value}</p>
                          <p className="text-neutral-500 text-sm mt-1">{method.subtitle}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-xs text-neutral-400 uppercase tracking-wider mb-4">Follow Me</p>
                <div className="flex gap-3">
                  {[
                    { icon: IconBrandInstagram, href: "https://www.instagram.com/sam_campolo/", label: "Instagram" },
                    { icon: IconBrandFacebook, href: "https://www.facebook.com/SamCampoloRealEstate", label: "Facebook" },
                    { icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/sam-c-1008b5160/", label: "LinkedIn" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-champagne hover:text-champagne hover:bg-champagne/5 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -4, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Compass branding */}
              <motion.div 
                className="mt-14 pt-8 border-t border-neutral-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <img src="/CompassWhiteLogo.png" alt="Compass" className="h-6 brightness-0 opacity-40" />
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              {formSubmitted ? (
                <motion.div 
                  className="bg-neutral-50 p-12 lg:p-16 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.div 
                    className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <IconCheck size={48} className="text-green-600" />
                  </motion.div>
                  <motion.h3 
                    className="text-3xl font-serif text-neutral-900 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Thank You!
                  </motion.h3>
                  <motion.p 
                    className="text-neutral-600 mb-8 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    I&apos;ve received your message and will get back to you within 24 hours.
                  </motion.p>
                  <motion.button
                    onClick={() => setFormSubmitted(false)}
                    className="text-champagne hover:underline font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-neutral-50 p-8 lg:p-12 relative overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-champagne/10 to-transparent" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-10">
                      <IconSend className="text-champagne" size={24} />
                      <h3 className="text-2xl md:text-3xl font-serif text-neutral-900">Send a Message</h3>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">First Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-5 py-4 bg-white border border-neutral-200 focus:border-champagne focus:outline-none transition-all duration-300"
                        />
                      </motion.div>
                      <div>
                        <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Last Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-5 py-4 bg-white border border-neutral-200 focus:border-champagne focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-4 bg-white border border-neutral-200 focus:border-champagne focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-5 py-4 bg-white border border-neutral-200 focus:border-champagne focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">I&apos;m Interested In *</label>
                      <select
                        required
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-5 py-4 bg-white border border-neutral-200 focus:border-champagne focus:outline-none transition-all duration-300"
                      >
                        <option value="">Select an option</option>
                        <option value="buying">Buying a Home</option>
                        <option value="selling">Selling My Home</option>
                        <option value="both">Buying and Selling</option>
                        <option value="investing">Investment Properties</option>
                        <option value="valuation">Home Valuation</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-5 py-4 bg-white border border-neutral-200 focus:border-champagne focus:outline-none transition-all duration-300"
                      >
                        <option value="">When are you looking to move?</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-3months">1-3 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6-12months">6-12 months</option>
                        <option value="exploring">Just exploring</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Message</label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your real estate goals, preferred neighborhoods, or any questions you have..."
                        className="w-full px-5 py-4 bg-white border border-neutral-200 focus:border-champagne focus:outline-none transition-all duration-300 resize-none"
                      />
                    </div>
                    
                    <div className="mb-10">
                      <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-4">Preferred Contact Method</label>
                      <div className="flex gap-8">
                        {["email", "phone", "text"].map((method) => (
                          <label key={method} className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="radio"
                              name="preferredContact"
                              value={method}
                              checked={formData.preferredContact === method}
                              onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                              className="w-5 h-5 accent-[#c9a962]"
                            />
                            <span className="text-neutral-600 capitalize group-hover:text-champagne transition-colors">{method}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full px-8 py-5 bg-neutral-900 text-white font-medium uppercase tracking-widest hover:bg-neutral-800 transition-all duration-300 relative overflow-hidden group"
                      whileHover={{ scale: 1.01, y: -2 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                        initial={{ x: "-200%" }}
                        whileHover={{ x: "200%" }}
                        transition={{ duration: 0.8 }}
                      />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Send Message
                        <IconSend size={18} />
                      </span>
                    </motion.button>
                    
                    <p className="text-neutral-400 text-xs text-center mt-6">
                      Your information is kept confidential and never shared.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-neutral-200 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48244.48689847025!2d-73.83!3d41.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2be8c95c8ddab%3A0x6b2d7d6f5c0f7f22!2sChappaqua%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            className="w-full h-full border-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white via-transparent to-transparent opacity-30" />
      </section>

      {/* Footer */}
      <section className="py-14 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.img 
              src="/LogoNav.png" 
              alt="Sam Campolo" 
              className="h-8 brightness-0 invert" 
              whileHover={{ scale: 1.02 }}
            />
            <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} Sam Campolo. All rights reserved.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
