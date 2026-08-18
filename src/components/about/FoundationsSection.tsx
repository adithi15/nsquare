import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Gem } from 'lucide-react';
import { ThemeMode } from '../../types';

interface FoundationsSectionProps {
  theme?: ThemeMode;
}

export const FoundationsSection: React.FC<FoundationsSectionProps> = ({ theme = 'light' }) => {
  const cards = [
    {
      title: 'Our Vision',
      icon: Eye,
      text: (
        <>
          To emerge as a trusted thought leader across the real
          <br />
          estate landscape, building a distinctive reputation for
          <br />
          creating exceptional, world-class developments that
          <br />
          set new benchmarks for quality and design.
        </>
      )
    },
    {
      title: 'Our Mission',
      icon: Target,
      text: (
        <>
          To be a forward-thinking and strategic real estate
          <br />
          developer, delivering pioneering landmark projects
          <br />
          through bold ideas, smart execution, and a
          <br />
          commitment to creating lasting value.
        </>
      )
    },
    {
      title: 'Our Values',
      icon: Gem,
      text: (
        <>
          We believe in innovation, creativity, sustainability,
          <br />
          and uncompromising excellence. By staying true to our
          <br />
          values and focusing on quality, consistency, and detail,
          <br />
          we create landmark spaces that inspire and endure.
        </>
      )
    }
  ];

  return (
    <section className="relative w-full pt-8 pb-10 md:pt-12 md:pb-16 overflow-hidden bg-neutral-950">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/branding/foundations-bg.jpg"
          alt="Foundations Background"
          className="w-full h-full object-cover object-center opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-[1480px] mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-semibold text-[#c2a26c] tracking-wide">
            The Foundations That Shape Our Growth
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center py-3 px-2 md:py-4 md:px-3 bg-black/40 backdrop-blur-xs border border-white/5 rounded-none flex-1 w-full mx-auto"
              >
                {/* Gold Circle with White Icon */}
                <div className="w-12 h-12 rounded-full bg-[#c2a26c] flex items-center justify-center shadow-lg mb-4">
                  <IconComponent className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>

                {/* Card Title */}
                <h3 className="text-xl lg:text-2xl font-serif font-medium text-[#c2a26c] mb-3">
                  {card.title}
                </h3>

                {/* Card Text */}
                <p className="text-neutral-300 text-[13px] lg:text-sm leading-[1.65] font-light">
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
