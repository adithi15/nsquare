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
    { value: 29, suffix: 'L', label: 'Sq.mt\nFuture Planning' },
  ];

  return (
    <section className={`w-full py-12 md:py-16 transition-colors duration-500 ${
      isDark ? 'bg-[#0D0D0D] border-t border-white/5' : 'bg-[#F4EFE6] border-t border-neutral-200/60'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-10">
        
        {/* Top: Text and Logos */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-20">
          <div className="text-left">
            <h3 className={`font-serif text-lg sm:text-xl md:text-[25px] leading-[1.4] font-normal ${
              isDark ? 'text-white' : 'text-neutral-800'
            }`}>
              N-Square Developers Is A Strategic Partnership Between<br />
              Neelkanth Group And Namastey Realty, Created To Deliver<br />
              Excellence In Redevelopment.
            </h3>
          </div>
          
          <div className="flex items-center justify-center gap-6 sm:gap-10 w-full lg:w-auto shrink-0">
            {/* Logo 1: Neelkanth Group (High-Res Large View) */}
            <div className="max-w-[260px] sm:max-w-[300px] h-24 sm:h-28 md:h-36 flex items-center justify-center">
              <img 
                src="/assets/branding/neelkanth-logo.png" 
                alt="Neelkanth Group" 
                className="max-h-full w-auto max-w-full object-contain filter drop-shadow-sm hover:scale-105 transition-transform duration-300" 
              />
            </div>
 
            {/* Logo 2: Namastey Realty (High-Res Large View) */}
            <div className="max-w-[260px] sm:max-w-[300px] h-24 sm:h-28 md:h-36 flex items-center justify-center">
              <img 
                src="/assets/branding/namastey-logo.png" 
                alt="Namastey Realty" 
                className="max-h-full w-auto max-w-full object-contain filter drop-shadow-sm hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>
        </div>

        {/* Bottom: Stats */}
        <div className="space-y-10 pt-8 pb-4">
          <div className="flex items-center gap-6">
            <h4 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#A27E3B] dark:text-[#C5A059] font-bold whitespace-nowrap tracking-wide">
              A Legacy Measured in Trust
            </h4>
            <div className={`flex-1 h-[1.5px] ${isDark ? 'bg-gradient-to-r from-[#C5A059]/40 to-transparent' : 'bg-gradient-to-r from-[#A27E3B] to-transparent'}`} />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6 lg:gap-8 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col items-center space-y-3 p-4 rounded-xl transition-all duration-300 ${
                  isDark ? 'hover:bg-white/[0.03] hover:scale-105' : 'hover:bg-white/60 hover:scale-105'
                }`}
              >
                <div className="font-sans text-5xl sm:text-6xl md:text-6xl lg:text-7xl text-[#A27E3B] dark:text-[#C5A059] tabular-nums font-bold drop-shadow-sm tracking-tight">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className={`text-xs sm:text-sm md:text-[13px] font-medium leading-snug whitespace-pre-line font-sans tracking-wide ${
                  isDark ? 'text-neutral-200' : 'text-[#A27E3B]/80'
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
