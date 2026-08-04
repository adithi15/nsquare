import React from 'react';
import { ThemeMode } from '../types';
import { motion } from 'motion/react';

interface PlatinumWorldSectionProps {
  theme?: ThemeMode;
}

const STATS = [
  { icon: '/assets/img/home/16years-crafting.png', value: '25 Years', sublabel: 'Of Crafting Legacies' },
  { icon: '/assets/img/home/2million-sqft.png', value: '4 Million  Sq. Ft.', sublabel: 'Completed' },
  { icon: '/assets/img/home/07-year-projects.png', value: '8 Picturesque', sublabel: 'Ongoing  Projects' },
  { icon: '/assets/img/home/home-deliverd.png', value: '3500 +', sublabel: 'Homes  Delivered' },
];

export const PlatinumWorldSection: React.FC<PlatinumWorldSectionProps> = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: '#eff2f6' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Section label */}
        <motion.h6
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] uppercase tracking-[0.3em] text-[#a1896b] font-semibold mb-4"
        >
          The Platinum World
        </motion.h6>

        {/* Heading + description row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-14">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-[42px] font-serif text-[#222] leading-[1.15] tracking-tight"
            >
              Platinum Group Prides Itself For Etching<br className="hidden sm:block" />
              A Glorious Presence In The Flourishing City<br className="hidden sm:block" />
              Of Navi Mumbai
            </motion.h2>
          </div>
          <div className="lg:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[14px] text-[#58595b] leading-[1.8]"
            >
              Over the years, we have attained major milestones by constantly pushing the boundaries while creating landmarks of eminence.
            </motion.p>
          </div>
        </div>

        {/* 4 Stat counters with icon images */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border-t border-[#a1896b] pt-5"
            >
              <img
                src={stat.icon}
                alt={stat.value}
                className="w-14 h-14 object-contain mb-3"
              />
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#222] mb-1">
                {stat.value}
              </h3>
              <p className="text-[13px] text-[#58595b] leading-snug">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatinumWorldSection;
