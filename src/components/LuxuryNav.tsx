"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IconPhone, IconMenu2, IconX } from "@tabler/icons-react";

export default function LuxuryNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = 0;
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        setScrolled(currentY > 80);
        // Hide nav on scroll down, show on scroll up (only after hero)
        if (currentY > 400) {
          setHidden(currentY > lastY && currentY - lastY > 5);
        } else {
          setHidden(false);
        }
        lastY = currentY;
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Properties", href: "/listings" },
    { name: "About", href: "/about" },
    { name: "Neighborhoods", href: "/neighborhoods" },
    { name: "Contact", href: "/contact" },
    { name: "Home Valuation", href: "/#valuation" },
    { name: "Private Collection", href: "/listings#private" },
  ];

  const shouldBeTransparent = !scrolled && !mobileMenuOpen;

  return (
    <>
      {/* ===== MAIN NAV BAR ===== */}
      <motion.nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: scrolled ? '10px 0' : '20px 0',
          transition: 'padding 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: (hidden && !mobileMenuOpen) ? -100 : 0, 
          opacity: 1 
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Nav Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: mobileMenuOpen
              ? '#0a0a0a'
              : shouldBeTransparent
                ? 'transparent'
                : 'rgba(255, 255, 255, 0.92)',
            backdropFilter: shouldBeTransparent && !mobileMenuOpen ? 'none' : 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: shouldBeTransparent && !mobileMenuOpen ? 'none' : 'blur(24px) saturate(180%)',
            boxShadow: shouldBeTransparent && !mobileMenuOpen
              ? 'none'
              : '0 1px 0 rgba(201,169,98,0.15), 0 8px 32px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />

        {/* Golden shimmer border when scrolled */}
        {scrolled && !mobileMenuOpen && (
          <motion.div
            style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
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
          <Link href="/" style={{ display: 'flex', alignItems: 'center', position: 'relative', zIndex: 10 }}>
            <motion.img
              src="/LogoNav.png"
              alt="Sam Campolo"
              style={{
                height: 40,
                filter: (mobileMenuOpen || shouldBeTransparent)
                  ? 'brightness(0) invert(1)'
                  : 'brightness(0)',
                transition: 'filter 0.4s ease',
              }}
              whileHover={{ scale: 1.02 }}
            />
          </Link>

          {/* Desktop Nav - Center */}
          <div style={{ display: 'none' }} className="lg:!flex lg:items-center lg:gap-1">
            {navLinks.filter(l => l.name !== "Home Valuation" && l.name !== "Private Collection").map((link, index) => {
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
                          bottom: 0, left: '20%', width: '60%', height: 2,
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
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/listings#private"
              className="text-white hover:text-champagne transition-colors text-[13px] font-medium uppercase tracking-widest hidden xl:block"
              style={{ color: shouldBeTransparent ? 'rgba(255,255,255,0.9)' : '#525252' }}
            >
              Private Collection
            </Link>
            
            <motion.a
              href="/#valuation"
              style={{
                display: 'flex',
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
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Home Valuation
            </motion.a>
          </div>

          {/* Mobile Hamburger / Close */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            style={{
              display: 'block',
              padding: 8,
              color: mobileMenuOpen ? '#ffffff' : (shouldBeTransparent ? '#ffffff' : '#171717'),
              position: 'relative',
              zIndex: 10,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
            }}
            className="lg:!hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconX size={26} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconMenu2 size={26} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* ===== MOBILE FULL-SCREEN MENU ===== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9998,
              backgroundColor: '#0a0a0a',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Floating gold particles */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: `${8 + (i * 7.5) % 84}%`,
                    top: `${15 + (i * 6.3) % 70}%`,
                    width: 3,
                    height: 3,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(201, 169, 98, 0.35)',
                  }}
                  animate={{
                    y: [0, -40, 0],
                    opacity: [0.2, 0.7, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>

            {/* Menu Content */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: '100px 32px 60px',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {/* Top decorative line */}
              <motion.div
                style={{
                  width: 60,
                  height: 1,
                  background: 'linear-gradient(to right, transparent, #c9a962, transparent)',
                  marginBottom: 32,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              />

              {/* Nav Links */}
              <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]));
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: 0.1 + index * 0.07, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: 'block',
                          padding: '14px 24px',
                          fontSize: 30,
                          fontFamily: 'Playfair Display, serif',
                          fontWeight: 400,
                          color: isActive ? '#c9a962' : '#ffffff',
                          textDecoration: 'none',
                          textAlign: 'center',
                          letterSpacing: '0.02em',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Phone CTA */}
              <motion.a
                href="tel:+19145849799"
                style={{
                  marginTop: 36,
                  padding: '16px 40px',
                  backgroundColor: '#c9a962',
                  color: '#0a0a0a',
                  fontSize: 15,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                whileTap={{ scale: 0.96 }}
              >
                <IconPhone size={16} />
                (914) 584-9799
              </motion.a>

              {/* Bottom decorative line */}
              <motion.div
                style={{
                  width: 60,
                  height: 1,
                  background: 'linear-gradient(to right, transparent, #c9a962, transparent)',
                  marginTop: 36,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
