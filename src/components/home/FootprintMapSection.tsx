import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { ThemeMode } from '../../types';
import { FOOTPRINT_LOCATIONS } from '../../data/nsquare';
import { EASE, VIEWPORT } from '../ui/SectionHeading';

interface FootprintMapSectionProps {
  theme: ThemeMode;
}

// Expanding Footprints — brochure page 9: dark panel + freehand map bleeding to the right edge
export const FootprintMapSection: React.FC<FootprintMapSectionProps> = ({ theme }) => {
  return (
    <section className="relative bg-[#0C0C0C] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Left — headline + locations */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.1, ease: EASE }}
          className="py-20 md:py-28 px-5 sm:px-8 lg:px-0 lg:col-span-2 flex flex-col justify-center"
        >
          <div className="max-w-xl mx-auto lg:ml-auto lg:mr-0 lg:pr-12 xl:pr-16 lg:pl-8">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#C5A059] font-semibold">
              Expanding Footprints
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mt-4 mb-6">
              Across Navi Mumbai, We Are Home
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10">
              From Rabale to Dronagiri, N-Square landmarks dot the fastest-growing region in
              Maharashtra — each location chosen for its promise of tomorrow.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {FOOTPRINT_LOCATIONS.map((loc, i) => (
                <motion.span
                  key={loc}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.06, ease: EASE }}
                  className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] border border-white/15 px-3.5 py-2 text-white/70 hover:border-[#C5A059] hover:text-[#C5A059] transition-colors duration-500"
                >
                  <MapPin className="w-3 h-3 text-[#C5A059]" />
                  {loc}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — map flush to the screen edge, no frame, no white bg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.4, delay: 0.15, ease: EASE }}
          className="relative h-[520px] sm:h-[600px] lg:h-full lg:min-h-[820px] lg:col-span-3"
        >
          <img
            src="/assets/branding/map-footprint.png"
            alt="N-Square project locations across Navi Mumbai"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-right opacity-90"
          />
          {/* warm tint + blends the map into the dark panel — freehand, no box */}
          <div className="absolute inset-0 bg-[#C5A059]/5 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-20 md:w-44 bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0C0C0C] to-transparent lg:hidden pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
