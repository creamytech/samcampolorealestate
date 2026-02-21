"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { LuxuryStar } from "./AnimatedEmblems";

export default function FeaturedPropertiesV2() {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      price: "$2,450,000",
      address: "The Glass House",
      location: "Bedford Estate",
      beds: 5,
      baths: 4,
      sqft: "5,200",
      featured: true,
      link: "/listings",
      aspect: "aspect-[4/5]"
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      price: "$1,850,000",
      address: "Modern Woodland",
      location: "Chappaqua",
      beds: 4,
      baths: 4,
      sqft: "4,100",
      featured: false,
      link: "/listings",
      aspect: "aspect-square"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      price: "$3,200,000",
      address: "Tudor Revival",
      location: "Rye Waterfront",
      beds: 6,
      baths: 5,
      sqft: "6,800",
      featured: true,
      link: "/listings",
      aspect: "aspect-[16/9]"
    },
  ];

  return (
    <section className="py-32 bg-neutral-950 text-white relative">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div className="max-w-2xl relative">
            <div className="absolute -top-12 -left-8 text-neutral-800 pointer-events-none hidden md:block">
              <LuxuryStar size={80} />
            </div>
            <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight relative z-10">
              Curated <span className="text-champagne italic">Estates</span>
            </h2>
            <p className="text-neutral-400 text-lg font-light leading-relaxed relative z-10">
              An exclusive portfolio of Westchester and Fairfield County&apos;s most significant properties, selected for their architectural pedigree and exquisite design.
            </p>
          </div>
          <Link href="/listings" className="group mt-10 md:mt-0 pb-2 border-b border-champagne text-champagne w-max uppercase tracking-widest text-sm flex items-center gap-2 hover:text-white hover:border-white transition-colors">
            View All Properties <IconArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-x-12 md:gap-y-32 relative">
          <div className="col-span-1 md:col-span-6 z-10">
            <PropertyCard property={properties[0]} />
          </div>
          <div className="col-span-1 md:col-span-4 md:col-start-8 md:mt-[20vh] z-20">
             <PropertyCard property={properties[1]} />
          </div>
          <div className="col-span-1 md:col-span-9 md:col-start-2 z-10">
             <PropertyCard property={properties[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface Property {
  image: string;
  price: string;
  address: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  featured: boolean;
  link: string;
  aspect: string;
}

function PropertyCard({ property }: { property: Property }) {
  return (
    <motion.a
      href={property.link}
      className="group block w-full relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`overflow-hidden relative ${property.aspect} w-full bg-neutral-900 group-hover:scale-[0.98] transition-all duration-700 ease-out`}>
        <motion.img 
          src={property.image}
          className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
        />
        {property.featured && (
          <div className="absolute top-6 left-6 flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
             <span className="text-[10px] uppercase tracking-widest text-white font-medium bg-black/40 px-3 py-1 backdrop-blur-md rounded-full">Signature Listing</span>
          </div>
        )}
      </div>
      <div className="mt-8 flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-champagne transition-colors">{property.address}</h3>
          <p className="text-neutral-400 mt-2 font-light text-lg">{property.location}</p>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xl md:text-2xl text-champagne">{property.price}</p>
          <div className="flex flex-wrap items-center md:justify-end gap-3 text-sm text-neutral-500 mt-2">
            <span>{property.beds} BD</span>
            <span className="w-1 h-1 bg-neutral-700 rounded-full" />
            <span>{property.baths} BA</span>
            <span className="w-1 h-1 bg-neutral-700 rounded-full" />
            <span>{property.sqft} SQFT</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
