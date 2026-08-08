import React from 'react';
import { motion } from 'motion/react';
import { Users, Award, ShieldCheck, Handshake, Lightbulb, HeartHandshake } from 'lucide-react';
import { ThemeMode } from '../../types';
import { CORE_VALUES } from '../../data/nsquare';
import { EASE, VIEWPORT, SectionHeading } from '../ui/SectionHeading';

interface CoreValuesSectionProps {
  theme: ThemeMode;
}

const VALUE_ICONS = [Users, Award, ShieldCheck, Handshake, Lightbulb, HeartHandshake];

// Core Values — brochure page 7: 1/2/3 column staggered grid
export const CoreValuesSection: React.FC<CoreValuesSectionProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <section className={`relative py-20 md:py-28 ${isDark ? 'bg-[#0A0A0A]' : 'bg-[#FAFAFA]'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          theme={theme}
          eyebrow="What We Stand For"
          title="Core Values"
          description="Six principles guide every drawing, every brick and every handshake at N-Square."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map((v, i) => {
            const Icon = VALUE_ICONS[i % VALUE_ICONS.length];
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.9, delay: (i % 3) * 0.15, ease: EASE }}
                className={`group relative p-8 md:p-10 border transition-colors duration-700 ${
                  isDark
                    ? 'bg-white/[0.02] border-white/10 hover:border-[#C5A059]/60'
                    : 'bg-white border-black/10 hover:border-[#C5A059]'
                }`}
              >
                {/* Border draw-on-hover: sleeping → standing → sleeping → standing, gold traces the whole box */}
                <span className="absolute top-0 left-0 h-[2px] w-0 bg-[#C5A059] transition-all duration-300 ease-out group-hover:w-full" />
                <span className="absolute top-0 right-0 w-[2px] h-0 bg-[#C5A059] transition-all duration-300 ease-out group-hover:h-full group-hover:delay-300" />
                <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#C5A059] transition-all duration-300 ease-out group-hover:w-full group-hover:delay-600" />
                <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#C5A059] transition-all duration-300 ease-out group-hover:h-full group-hover:delay-900" />
                <Icon className="w-7 h-7 text-[#C5A059] mb-6" strokeWidth={1.5} />
                <h3 className={`font-serif text-xl md:text-2xl mb-3 ${isDark ? 'text-white' : 'text-[#121212]'}`}>
                  {v.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-[#121212]/60'}`}>
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
