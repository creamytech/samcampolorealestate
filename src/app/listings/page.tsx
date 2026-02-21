"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { 
  IconBed, 
  IconBath, 
  IconRuler, 
  IconMapPin, 
  IconFilter,
  IconGridDots,
  IconList,
  IconSparkles,
  IconHome,
  IconPlayerPlayFilled
} from "@tabler/icons-react";

import { FloatingParticles } from "@/components/FloatingParticles";
import { PrivateCollectionSection } from "@/components/PrivateCollectionSection";
import { CinematicTourModal } from "@/components/CinematicTourModal";
import { ScrollIndicator, LuxuryStar } from "@/components/AnimatedEmblems";

// Property Card Component
function PropertyCard({ 
  listing, 
  index, 
  viewMode,
  onPlayTour
}: { 
  listing: typeof listings[0]; 
  index: number;
  viewMode: "grid" | "list";
  onPlayTour: (url: string, title: string) => void;
}) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <motion.a
      href={listing.link}
      className={`group bg-white overflow-hidden relative ${
        viewMode === "list" ? "flex" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${viewMode === "list" ? "w-80 flex-shrink-0" : "aspect-[4/3]"}`}>
        <motion.img
          src={listing.image}
          alt={listing.address}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        
        {/* Play Tour Button */}
        <motion.button 
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
          initial={false}
          whileHover={{ scale: 1.1 }}
          onClick={(e) => {
            e.preventDefault();
            // Pass a placeholder high-end luxury cinematic video
            onPlayTour("https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1", listing.address);
          }}
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md flex items-center justify-center rounded-full border border-white/50 text-white hover:bg-champagne hover:border-champagne hover:text-neutral-900 transition-all duration-300 shadow-xl">
             <IconPlayerPlayFilled size={24} className="ml-1" />
          </div>
        </motion.button>
        
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
        
        {/* Status badge */}
        <motion.div 
          className={`absolute top-4 left-4 px-4 py-1.5 text-xs uppercase tracking-wider font-medium ${
            listing.status === "active" ? "bg-green-500 text-white" :
            listing.status === "pending" ? "bg-yellow-500 text-neutral-900" :
            "bg-neutral-500 text-white"
          }`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.08 + 0.2 }}
          viewport={{ once: true }}
        >
          {listing.status}
        </motion.div>
        
        {listing.featured && (
          <motion.div 
            className="absolute top-4 right-4 px-4 py-1.5 bg-champagne text-neutral-900 text-xs uppercase tracking-wider font-medium flex items-center gap-1.5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 + 0.3 }}
            viewport={{ once: true }}
          >
            <IconSparkles size={12} />
            Featured
          </motion.div>
        )}

        {/* View button on hover */}
        <motion.div 
          className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: 10 }}
          whileHover={{ y: 0 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-neutral-900 text-sm font-medium">
            View Details
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="p-6 lg:p-8 flex-1 relative">
        {/* Decorative line */}
        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 bg-champagne"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.4 }}
        />
        
        <p className="text-2xl lg:text-3xl font-serif text-neutral-900 mb-2 group-hover:text-champagne transition-colors duration-300">
          {formatPrice(listing.price)}
        </p>
        <h3 className="text-lg text-neutral-800 mb-1.5">{listing.address}</h3>
        <p className="text-neutral-500 flex items-center gap-1.5 mb-5 text-sm">
          <IconMapPin size={14} className="text-champagne" />
          {listing.location}
        </p>
        <div className="flex items-center gap-6 text-sm text-neutral-400 pt-5 border-t border-neutral-100">
          <span className="flex items-center gap-2">
            <IconBed size={18} className="text-neutral-300" /> 
            <span className="text-neutral-600">{listing.beds}</span> beds
          </span>
          <span className="flex items-center gap-2">
            <IconBath size={18} className="text-neutral-300" /> 
            <span className="text-neutral-600">{listing.baths}</span> baths
          </span>
          <span className="flex items-center gap-2">
            <IconRuler size={18} className="text-neutral-300" /> 
            <span className="text-neutral-600">{listing.sqft.toLocaleString()}</span> sqft
          </span>
        </div>
      </div>
    </motion.a>
  );
}

const listings = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    price: 925000,
    address: "40 Plaster House Road",
    location: "Southbury, CT",
    beds: 4,
    baths: 3,
    sqft: 3200,
    status: "active",
    featured: true,
    link: "https://www.compass.com/homedetails/40-Plaster-House-Rd-Southbury-CT-06488/17YU2Z_pid/"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    price: 1850000,
    address: "Modern Estate",
    location: "Chappaqua, NY",
    beds: 5,
    baths: 4,
    sqft: 4500,
    status: "active",
    featured: false,
    link: "#"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    price: 2400000,
    address: "Tudor Revival",
    location: "Bedford, NY",
    beds: 6,
    baths: 5,
    sqft: 5800,
    status: "active",
    featured: true,
    link: "#"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    price: 1250000,
    address: "Contemporary Home",
    location: "Armonk, NY",
    beds: 4,
    baths: 3,
    sqft: 3600,
    status: "pending",
    featured: false,
    link: "#"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    price: 3200000,
    address: "Waterfront Estate",
    location: "Rye, NY",
    beds: 7,
    baths: 6,
    sqft: 7200,
    status: "active",
    featured: true,
    link: "#"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    price: 195000,
    address: "68 East Hartsdale Ave",
    location: "Hartsdale, NY",
    beds: 1,
    baths: 1,
    sqft: 850,
    status: "active",
    featured: false,
    link: "https://www.compass.com/homedetails/68-E-Hartsdale-Ave-Unit-2G-Hartsdale-NY-10530/15RZKH_pid/"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    price: 1650000,
    address: "Colonial Estate",
    location: "Scarsdale, NY",
    beds: 5,
    baths: 4,
    sqft: 4200,
    status: "sold",
    featured: false,
    link: "#"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    price: 2850000,
    address: "Georgian Manor",
    location: "Greenwich, CT",
    beds: 6,
    baths: 5,
    sqft: 6100,
    status: "active",
    featured: true,
    link: "#"
  },
];

export default function ListingsPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filterOpen, setFilterOpen] = useState(false);
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [currentProperty, setCurrentProperty] = useState("");

  const handlePlayTour = (url: string, title: string) => {
    setCurrentVideoUrl(url);
    setCurrentProperty(title);
    setTourModalOpen(true);
  };

  const [filters, setFilters] = useState({
    priceMin: "",
    priceMax: "",
    beds: "",
    location: "",
    status: "all"
  });

  const filteredListings = listings.filter(listing => {
    if (filters.status !== "all" && listing.status !== filters.status) return false;
    if (filters.beds && listing.beds < parseInt(filters.beds)) return false;
    if (filters.priceMin && listing.price < parseInt(filters.priceMin)) return false;
    if (filters.priceMax && listing.price > parseInt(filters.priceMax)) return false;
    if (filters.location && !listing.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    return true;
  });

  return (
    <main className="bg-neutral-50 min-h-screen overflow-hidden">
      {/* Hero Header */}
      <section ref={heroRef} className="relative py-32 lg:py-40 bg-neutral-950 overflow-hidden">
        <FloatingParticles />
        
        <motion.div 
          className="absolute inset-0 opacity-15"
          style={{ y: backgroundY }}
        >
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/80 to-neutral-950" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
                transition={{ delay: 0.4 }}
              />
              <IconHome className="text-champagne" size={18} />
              <span className="text-champagne/80 text-xs uppercase tracking-[0.4em]">Properties</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute -top-10 -left-6 text-neutral-800 pointer-events-none hidden md:block">
                <LuxuryStar size={70} />
              </div>
              Available <span className="italic font-light">Listings</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/60 font-light max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Explore our curated selection of luxury properties across Westchester and Fairfield County
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:block">
          <ScrollIndicator />
        </div>

        {/* Gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none" />
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Toolbar */}
          <motion.div 
            className="flex flex-wrap items-center justify-between gap-4 mb-10 p-5 bg-white shadow-sm rounded-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => setFilterOpen(!filterOpen)}
                className={`flex items-center gap-2 px-5 py-2.5 border text-neutral-600 transition-all duration-300 ${
                  filterOpen ? "border-champagne bg-champagne/5 text-champagne" : "border-neutral-200 hover:border-neutral-400"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconFilter size={18} />
                <span>Filters</span>
              </motion.button>
              
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="px-5 py-2.5 border border-neutral-200 text-neutral-600 bg-transparent hover:border-neutral-400 transition-colors focus:border-champagne focus:outline-none"
              >
                <option value="all">All Properties</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <motion.span 
                className="text-neutral-500 text-sm"
                key={filteredListings.length}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className="text-champagne font-medium">{filteredListings.length}</span> properties
              </motion.span>
              <div className="flex border border-neutral-200 overflow-hidden">
                <motion.button
                  onClick={() => setViewMode("grid")}
                  className={`p-2.5 transition-all duration-300 ${viewMode === "grid" ? "bg-neutral-900 text-white" : "text-neutral-400 hover:text-neutral-600"}`}
                  whileHover={{ scale: viewMode === "grid" ? 1 : 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconGridDots size={18} />
                </motion.button>
                <motion.button
                  onClick={() => setViewMode("list")}
                  className={`p-2.5 transition-all duration-300 ${viewMode === "list" ? "bg-neutral-900 text-white" : "text-neutral-400 hover:text-neutral-600"}`}
                  whileHover={{ scale: viewMode === "list" ? 1 : 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconList size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {filterOpen && (
              <motion.div
                className="mb-10 p-8 bg-white shadow-sm"
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: "auto", marginBottom: 40 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Min Price</label>
                    <input
                      type="number"
                      placeholder="$0"
                      value={filters.priceMin}
                      onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-200 focus:border-champagne focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Max Price</label>
                    <input
                      type="number"
                      placeholder="No Max"
                      value={filters.priceMax}
                      onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-200 focus:border-champagne focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Min Beds</label>
                    <select
                      value={filters.beds}
                      onChange={(e) => setFilters({ ...filters, beds: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-200 focus:border-champagne focus:outline-none bg-transparent transition-colors"
                    >
                      <option value="">Any</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Location</label>
                    <input
                      type="text"
                      placeholder="City or area"
                      value={filters.location}
                      onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-200 focus:border-champagne focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <motion.button
                  onClick={() => setFilters({ priceMin: "", priceMax: "", beds: "", location: "", status: "all" })}
                  className="mt-6 text-sm text-champagne hover:underline font-medium"
                  whileHover={{ x: 4 }}
                >
                  Clear All Filters
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Listings Grid/List */}
          <motion.div 
            className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" : "flex flex-col gap-6"}
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredListings.map((listing, index) => (
                <PropertyCard 
                  key={listing.id} 
                  listing={listing} 
                  index={index}
                  viewMode={viewMode}
                  onPlayTour={handlePlayTour}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredListings.length === 0 && (
            <motion.div 
              className="text-center py-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <IconHome className="mx-auto text-neutral-300 mb-6" size={48} />
              <p className="text-neutral-500 text-xl mb-4">No properties match your filters.</p>
              <motion.button
                onClick={() => setFilters({ priceMin: "", priceMax: "", beds: "", location: "", status: "all" })}
                className="text-champagne hover:underline font-medium"
                whileHover={{ scale: 1.02 }}
              >
                Clear all filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Don&apos;t See What You&apos;re Looking For?
            </h2>
            <p className="text-neutral-400 text-lg mb-10 font-light">
              I have access to exclusive listings and can help you find your perfect home.
            </p>
            <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-champagne text-neutral-900 font-medium uppercase tracking-wider hover:bg-champagne-light transition-colors"
              >
                Get in Touch
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VIP Private Collection Section */}
      <PrivateCollectionSection />

      {/* Cinematic Tour Modal */}
      <CinematicTourModal
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
        videoUrl={currentVideoUrl}
        propertyName={currentProperty}
      />
    </main>
  );
}
