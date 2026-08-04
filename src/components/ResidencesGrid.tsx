import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Property, ThemeMode } from '../types';
import { ArrowUpRight, Check, MapPin, Sparkles } from 'lucide-react';

interface ResidencesGridProps {
  properties: Property[];
  theme: ThemeMode;
  onSelectProperty: (property: Property) => void;
  onRequestBrochure: (property: Property) => void;
  onScheduleVisit: (property: Property) => void;
}

export const ResidencesGrid: React.FC<ResidencesGridProps> = ({
  properties,
  theme,
  onSelectProperty,
  onRequestBrochure,
  onScheduleVisit
}) => {
  const [filter, setFilter] = useState<'All' | 'Villa' | 'Penthouse' | 'Commercial' | 'Residential'>('All');

  const filteredProperties = properties.filter((p) => {
    if (filter === 'All') return true;
    return p.type === filter;
  });

  return (
    <section id="residences-portfolio" className="px-6 md:px-12 py-8 max-w-7xl mx-auto w-full space-y-8">
      {/* Header Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 dark:border-white/10 pb-6 gap-4">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] accent-gold font-bold block mb-2">
            Signature Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl serif italic font-light text-neutral-900 dark:text-white">
            Residences & Commercial Spaces
          </h2>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {['All', 'Villa', 'Penthouse', 'Residential', 'Commercial'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as any)}
              className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase font-semibold rounded-full transition-all duration-300 shrink-0 cursor-pointer ${
                filter === category
                  ? 'bg-gold text-black shadow-md font-bold'
                  : theme === 'dark'
                    ? 'bg-white/5 text-white/60 hover:text-white border border-white/5'
                    : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300 border border-neutral-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProperties.map((prop, index) => (
          <motion.div
            key={prop.id}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.01, rotate: -0.3 }}
            className="glass-card rounded-2xl overflow-hidden group hover:border-gold/40 transition-all duration-300 flex flex-col justify-between border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-black/40 shadow-sm dark:shadow-none"
          >
            {/* Image Banner */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={prop.image}
                alt={prop.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
                <span className="bg-black/60 backdrop-blur-md text-gold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border border-gold/30">
                  {prop.code}
                </span>
                <span className="bg-black/60 backdrop-blur-md text-white/80 text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                  {prop.type}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 z-10 text-white">
                <p className="text-[9px] uppercase tracking-[0.3em] opacity-70 mb-1">
                  {prop.subtitle}
                </p>
                <h3 className="text-2xl serif italic font-light text-white">
                  {prop.title}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 flex items-center space-x-1 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>{prop.location}</span>
                </p>

                <p className="text-xs leading-relaxed text-neutral-700 dark:text-white/80 line-clamp-3 mb-6 font-light">
                  {prop.overview}
                </p>

                {/* Specs Pill Summary */}
                <div className="grid grid-cols-2 gap-4 py-3 border-y border-neutral-200 dark:border-white/10 text-xs">
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-neutral-500 dark:text-white/50 mb-0.5">Area Range</span>
                    <span className="font-light text-neutral-900 dark:text-white">{prop.areaRange} SQ. FT.</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-neutral-500 dark:text-white/50 mb-0.5">Configurations</span>
                    <span className="font-light text-neutral-900 dark:text-white">{prop.configurations}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-neutral-500 dark:text-white/50 mb-0.5">Possession</span>
                    <span className="font-light text-gold font-medium">{prop.possession}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-neutral-500 dark:text-white/50 mb-0.5">Starting From</span>
                    <span className="font-light font-medium text-neutral-900 dark:text-white">{prop.pricing}</span>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex items-center space-x-3 pt-2">
                <button
                  onClick={() => onSelectProperty(prop)}
                  className="flex-1 bg-gold text-black px-4 py-3 text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-[#D4B575] transition-all rounded-sm flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Feature Showcase</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onRequestBrochure(prop)}
                  className="px-4 py-3 border border-neutral-300 dark:border-white/20 hover:border-gold text-neutral-800 dark:text-white text-[9px] uppercase tracking-[0.2em] font-bold transition-all rounded-sm cursor-pointer"
                >
                  Brochure
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
