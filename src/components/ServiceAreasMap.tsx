"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { IconMapPin, IconBuildingEstate, IconDownload } from "@tabler/icons-react";

// Westchester County service areas with coordinates for visual positioning
const serviceAreas = [
  { 
    name: "Scarsdale", 
    description: "Premier village known for exceptional schools and stately homes",
    avgPrice: "$1.8M",
    x: 55, y: 65,
    featured: true
  },
  { 
    name: "Bronxville", 
    description: "Charming village with Tudor-style architecture and walkable downtown",
    avgPrice: "$2.1M",
    x: 45, y: 75,
    featured: true
  },
  { 
    name: "Larchmont", 
    description: "Waterfront community with vibrant village center and yacht clubs",
    avgPrice: "$1.5M",
    x: 60, y: 80,
    featured: true
  },
  { 
    name: "Rye", 
    description: "Prestigious Sound Shore community with beaches and country clubs",
    avgPrice: "$1.9M",
    x: 70, y: 70,
    featured: true
  },
  { 
    name: "Pelham", 
    description: "Historic charm with easy NYC commute and community feel",
    avgPrice: "$1.2M",
    x: 40, y: 85,
    featured: false
  },
  { 
    name: "Eastchester", 
    description: "Family-friendly with excellent amenities and schools",
    avgPrice: "$950K",
    x: 50, y: 55,
    featured: false
  },
  { 
    name: "Mamaroneck", 
    description: "Diverse waterfront town with active harbor and arts scene",
    avgPrice: "$1.1M",
    x: 65, y: 60,
    featured: false
  },
  { 
    name: "New Rochelle", 
    description: "Growing city with waterfront development and urban renewal",
    avgPrice: "$750K",
    x: 35, y: 70,
    featured: false
  },
];

export function ServiceAreasMap() {
  const [activeArea, setActiveArea] = useState<string | null>(null);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  const selectedArea = serviceAreas.find(a => a.name === (hoveredArea || activeArea));

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-champagne" />
            <span className="text-champagne text-xs uppercase tracking-[0.3em]">Coverage Area</span>
            <div className="h-px w-12 bg-champagne" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-6">
            Westchester Expertise
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg font-light">
            Deep knowledge of every neighborhood, from waterfront estates to village charm
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <motion.div
            className="relative aspect-square bg-neutral-50 border border-neutral-200 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Actual Google Map Background */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192237.52550186595!2d-73.914238!3d41.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2b74b68eef9eb%3A0xeebd1217e65ad57c!2sWestchester%20County%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-40 pointer-events-none"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-blue-50/10 pointer-events-none mix-blend-overlay" />
            
            {/* County label */}
            <div className="absolute top-6 left-6 text-xs uppercase tracking-widest text-neutral-400 font-medium">
              Westchester County, NY
            </div>

            {/* NYC Direction indicator */}
            <div className="absolute bottom-6 left-6 flex items-center gap-2 text-xs text-neutral-400">
              <div className="w-8 h-px bg-neutral-300" />
              <span>NYC →</span>
            </div>

            {/* Area pins */}
            {serviceAreas.map((area, index) => (
              <motion.button
                key={area.name}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 group z-10`}
                style={{ left: `${area.x}%`, top: `${area.y}%` }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.08 }}
                viewport={{ once: true }}
                onClick={() => setActiveArea(area.name)}
                onMouseEnter={() => setHoveredArea(area.name)}
                onMouseLeave={() => setHoveredArea(null)}
              >
                {/* Pulse ring for featured */}
                {area.featured && (
                  <motion.div
                    className="absolute inset-0 bg-champagne/30 rounded-full"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
                
                {/* Pin */}
                <div className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                  hoveredArea === area.name || activeArea === area.name
                    ? "bg-champagne scale-125 shadow-lg shadow-champagne/30"
                    : area.featured 
                      ? "bg-neutral-900 hover:bg-champagne" 
                      : "bg-neutral-400 hover:bg-neutral-900"
                }`}>
                  <IconMapPin size={18} className="text-white" />
                </div>

                {/* Label */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-xs font-medium transition-all duration-300 ${
                  hoveredArea === area.name || activeArea === area.name
                    ? "text-champagne"
                    : "text-neutral-600"
                }`}>
                  {area.name}
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Area Details */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Selected area info */}
            <div className="bg-neutral-900 p-8 mb-8 min-h-[200px]">
              {selectedArea ? (
                <motion.div
                  key={selectedArea.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-serif text-white mb-1">{selectedArea.name}</h3>
                      {selectedArea.featured && (
                        <span className="inline-block px-2 py-0.5 bg-champagne/20 text-champagne text-xs uppercase tracking-wider">
                          Featured Area
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Avg. Price</p>
                      <p className="text-champagne text-2xl font-serif">{selectedArea.avgPrice}</p>
                    </div>
                  </div>
                  <p className="text-neutral-300 font-light leading-relaxed">
                    {selectedArea.description}
                  </p>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <IconBuildingEstate size={40} className="text-neutral-700 mb-4" />
                  <p className="text-neutral-400 font-light">
                    Select a neighborhood on the map to learn more
                  </p>
                </div>
              )}
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-neutral-50 p-6 text-center border border-neutral-100">
                <p className="text-3xl font-serif text-neutral-900 mb-1">8+</p>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Communities</p>
              </div>
              <div className="bg-neutral-50 p-6 text-center border border-neutral-100">
                <p className="text-3xl font-serif text-neutral-900 mb-1">15+</p>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Years Local</p>
              </div>
              <div className="bg-neutral-50 p-6 text-center border border-neutral-100">
                <p className="text-3xl font-serif text-neutral-900 mb-1">100%</p>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Coverage</p>
              </div>
            </div>

            {/* Area list */}
            <div className="mt-8">
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 mb-4">All Service Areas</h4>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <button
                    key={area.name}
                    className={`px-4 py-2 text-sm transition-all duration-300 ${
                      activeArea === area.name || hoveredArea === area.name
                        ? "bg-champagne text-neutral-900"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                    onClick={() => setActiveArea(area.name)}
                    onMouseEnter={() => setHoveredArea(area.name)}
                    onMouseLeave={() => setHoveredArea(null)}
                  >
                    {area.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Market Report Download */}
            <motion.div 
              className="mt-12 bg-neutral-950 p-6 lg:p-8 relative overflow-hidden group border border-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-champagne/5 blur-2xl group-hover:bg-champagne/10 transition-colors duration-500" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h4 className="text-white font-serif text-xl mb-2">2026 Q1 Market Report</h4>
                  <p className="text-neutral-400 text-sm font-light max-w-sm">
                    Gain exclusive insights into Westchester&apos;s luxury real estate trends, neighborhood valuations, and forecasts.
                  </p>
                </div>
                <a 
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert("Market report will begin downloading shortly."); }}
                  className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-champagne text-neutral-900 uppercase text-xs font-bold tracking-widest hover:bg-white transition-colors self-start md:self-auto"
                >
                  Download PDF
                  <IconDownload size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
