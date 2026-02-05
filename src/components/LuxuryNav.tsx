"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IconPhone, IconMenu2, IconX } from "@tabler/icons-react";

export default function LuxuryNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Properties", href: "/listings" },
    { name: "About", href: "/about" },
    { name: "Neighborhoods", href: "/#neighborhoods" },
    { name: "Contact", href: "/contact" },
  ];

  const shouldBeTransparent = isHomePage && !scrolled && !mobileMenuOpen;

  return (
    <>
      {/* Main Navigation - FIXED positioning */}
      <motion.nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '12px 0' : '20px 0',
          transition: 'padding 0.5s ease',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: shouldBeTransparent ? 'transparent' : 'rgba(255, 255, 255, 0.97)',
            backdropFilter: shouldBeTransparent ? 'none' : 'blur(20px)',
            boxShadow: shouldBeTransparent ? 'none' : '0 4px 30px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.5s ease',
          }}
        />

        {/* Golden shimmer border when scrolled */}
        {scrolled && (
          <motion.div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 1,
              background: 'linear-gradient(to right, transparent, rgba(201,169,98,0.5), transparent)',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}

        <div style={{
          position: 'relative',
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <motion.img
              src="/LogoNav.png"
              alt="Sam Campolo"
              style={{
                height: 40,
                filter: shouldBeTransparent ? 'brightness(0) invert(1)' : 'brightness(0)',
                transition: 'filter 0.5s ease',
              }}
              whileHover={{ scale: 1.02 }}
            />
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'none' }} className="lg:!flex lg:items-center lg:gap-1">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href || 
                (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]));
              
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    style={{
                      position: 'relative',
                      padding: '8px 20px',
                      fontSize: 13,
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: shouldBeTransparent ? 'rgba(255,255,255,0.8)' : '#525252',
                      transition: 'color 0.3s ease',
                      display: 'block',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = shouldBeTransparent ? '#ffffff' : '#171717';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = shouldBeTransparent ? 'rgba(255,255,255,0.8)' : '#525252';
                    }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: '20%',
                          width: '60%',
                          height: 2,
                          backgroundColor: '#c9a962',
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <motion.a
            href="tel:+19145849799"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 8,
              padding: '12px 24px',
              fontSize: 13,
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              backgroundColor: shouldBeTransparent ? '#c9a962' : '#171717',
              color: shouldBeTransparent ? '#171717' : '#ffffff',
              transition: 'all 0.5s ease',
            }}
            className="lg:!flex"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <IconPhone size={16} />
            <span>Call Now</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'block',
              padding: 8,
              color: mobileMenuOpen ? '#ffffff' : (shouldBeTransparent ? '#ffffff' : '#171717'),
              zIndex: 1010,
              position: 'relative',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            className="lg:!hidden"
          >
            {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Dark background */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: '#0a0a0a',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Decorative particles */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: 2,
                    height: 2,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(201, 169, 98, 0.4)',
                  }}
                  animate={{
                    y: [0, -50],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>

            {/* Menu Content */}
            <motion.div
              style={{
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 24px',
                zIndex: 10,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.1 }}
            >
              {/* Decorative top line */}
              <motion.div
                style={{
                  width: 60,
                  height: 1,
                  background: 'linear-gradient(to right, transparent, #c9a962, transparent)',
                  marginBottom: 48,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2 }}
              />

              {/* Navigation Links */}
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'block',
                      padding: '16px 0',
                      fontSize: 28,
                      fontFamily: 'Playfair Display, serif',
                      color: '#ffffff',
                      textAlign: 'center',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#c9a962';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#ffffff';
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Phone CTA */}
              <motion.a
                href="tel:+19145849799"
                style={{
                  marginTop: 48,
                  padding: '16px 40px',
                  backgroundColor: '#c9a962',
                  color: '#0a0a0a',
                  fontSize: 14,
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  textDecoration: 'none',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                (914) 584-9799
              </motion.a>

              {/* Decorative bottom line */}
              <motion.div
                style={{
                  width: 60,
                  height: 1,
                  background: 'linear-gradient(to right, transparent, #c9a962, transparent)',
                  marginTop: 48,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
