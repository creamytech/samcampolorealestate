"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconDiamond,
} from "@tabler/icons-react";

export default function LuxuryFooter() {
  return (
    <footer className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Top border accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-champagne to-transparent" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.img
              src="/LogoNav.png"
              alt="Sam Campolo"
              className="h-14 brightness-0 invert mb-6"
              whileHover={{ scale: 1.02 }}
            />
            <p className="text-neutral-400 text-lg font-light leading-relaxed mb-6 max-w-md">
              Delivering exceptional real estate experiences in Westchester and
              Fairfield County&apos;s most prestigious communities.
            </p>
            <div className="flex items-center gap-4">
              <img
                src="/CompassWhiteLogo.png"
                alt="Compass"
                className="h-6 opacity-60"
              />
              <span className="text-neutral-600">|</span>
              <span className="text-neutral-500 text-sm">
                Licensed Real Estate Agent
              </span>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-champagne text-xs uppercase tracking-[0.2em] mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+19145849799"
                className="block text-white hover:text-champagne transition-colors"
              >
                (914) 584-9799
              </a>
              <a
                href="mailto:sam.campolo@compass.com"
                className="block text-neutral-400 hover:text-champagne transition-colors text-sm"
              >
                sam.campolo@compass.com
              </a>
              <p className="text-neutral-500 text-sm">
                Compass
                <br />
                Chappaqua, NY
              </p>
            </div>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="text-champagne text-xs uppercase tracking-[0.2em] mb-6">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: IconBrandInstagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/sam_campolo/",
                },
                {
                  icon: IconBrandFacebook,
                  label: "Facebook",
                  href: "https://www.facebook.com/SamCampoloRealEstate",
                },
                {
                  icon: IconBrandLinkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/sam-c-1008b5160/",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                >
                  <social.icon
                    size={18}
                    className="text-neutral-600 group-hover:text-champagne transition-colors"
                  />
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} Sam Campolo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <span className="text-neutral-700">|</span>
            <span className="flex items-center gap-2">
              <IconDiamond size={12} className="text-champagne" />
              <span className="text-xs tracking-wider">
                LUXURY REAL ESTATE
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
