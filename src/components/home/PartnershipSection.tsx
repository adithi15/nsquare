import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ThemeMode } from '../../types';

const Counter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2200;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4); // easeOutQuart — smooth & slow
      setDisplay(value * eased);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, value]);

  const formatted = Math.round(display).toLocaleString('en-IN');

  return (
    <span ref={ref}>
      {formatted}{suffix}
    </span>
  );
};

interface PartnershipSectionProps {
  theme?: ThemeMode;
}

export const PartnershipSection: React.FC<PartnershipSectionProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';
  const stats = [
    { value: 23, suffix: '', label: 'Years of\nRich Legacy' },
    { value: 32, suffix: '', label: 'Delivered\nLandmarks' },
    { value: 10, suffix: '', label: 'Ongoing\nProjects' },
    { value: 23, suffix: 'L', label: 'Sq. Ft. Developed\nSpaces' },
    { value: 3, suffix: 'K', label: 'Happy\nFamilies' },
    { value: 29, suffix: 'L', label: 'Sq.mt\nFootprint' },
  ];

  return (
    <section className={`w-full py-12 md:py-16 transition-colors duration-500 ${
      isDark ? 'bg-[#0D0D0D] border-t border-white/5' : 'bg-[#F4EFE6] border-t border-neutral-200/60'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-10">
        
        {/* Top: Text and Logos */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="lg:w-3/5 text-left">
            <h3 className={`font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed tracking-wide font-normal ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              N-Square Developers Is A Strategic Partnership Between <span className="text-[#A27E3B] dark:text-[#C5A059] font-medium">Neelkanth Group</span> And <span className="text-[#A27E3B] dark:text-[#C5A059] font-medium">Namastey Realty</span>, Created To Deliver Excellence In Redevelopment.
            </h3>
          </div>
          
          <div className="lg:w-2/5 flex items-center justify-center lg:justify-end gap-6 sm:gap-8 w-full">
            {/* Logo 1: Neelkanth Group */}
            <div className="flex-1 max-w-[170px] h-16 sm:h-20 flex items-center justify-center">
              <img 
                src="/assets/branding/neelkanth-logo.png" 
                alt="Neelkanth Group" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>

            <span className={`text-lg font-light select-none ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
              ✕
            </span>

            {/* Logo 2: Namastey Realty */}
            <div className="flex-1 max-w-[170px] h-16 sm:h-20 flex items-center justify-center">
              <img 
                src="/assets/branding/namastey-logo.png" 
                alt="Namastey Realty" 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </div>
        </div>

        {/* Bottom: Stats */}
        <div className="space-y-8 pt-4">
          <div className="flex items-center gap-4">
            <h4 className="font-serif text-lg md:text-xl text-[#A27E3B] dark:text-[#C5A059] font-semibold whitespace-nowrap">
              A Legacy Measured in Trust
            </h4>
            <div className={`flex-1 h-px ${isDark ? 'bg-white/10' : 'bg-neutral-300/80'}`} />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col items-center space-y-2 p-3 rounded-lg transition-colors ${
                  isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-white/40'
                }`}
              >
                <div className="font-serif text-4xl md:text-5xl text-[#C5A059] tabular-nums" style={{ fontWeight: 700 }}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className={`text-xs md:text-sm font-medium leading-snug whitespace-pre-line font-sans ${
                  isDark ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};
