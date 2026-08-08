import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ThemeMode } from '../../types';
import { MILESTONES, NSStat } from '../../data/nsquare';
import { EASE, VIEWPORT } from '../ui/SectionHeading';

interface PlatinumWorldSectionProps {
  theme: ThemeMode;
}

// Animated count-up number — starts the moment the stat scrolls into view
const Counter: React.FC<{ stat: NSStat }> = ({ stat }) => {
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
      setDisplay(stat.value * eased);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, stat.value]);

  const formatted =
    stat.value >= 1000
      ? Math.round(display).toLocaleString('en-IN')
      : display.toFixed(stat.decimals ?? 0);

  return (
    <span ref={ref} className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#C5A059] tabular-nums">
      {formatted}
      <span className="text-white/80 text-2xl sm:text-3xl lg:text-4xl align-top">{stat.suffix}</span>
    </span>
  );
};

// Milestones — brochure page 8: dark band with 6 animated counters
export const PlatinumWorldSection: React.FC<PlatinumWorldSectionProps> = ({ theme }) => {
  return (
    <section className="relative py-20 md:py-24 bg-[#0C0C0C] overflow-hidden">
      {/* faint architectural backdrop */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/branding/milestones.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.0, ease: EASE }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#C5A059] font-semibold">
            Milestones
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight mt-4">
            A Legacy Measured in Trust
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 md:gap-4">
          {MILESTONES.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.9, delay: i * 0.12, ease: EASE }}
              className="flex flex-col items-center text-center gap-3 py-8 px-2 border border-white/5 bg-white/[0.02] backdrop-blur-sm"
            >
              <Counter stat={stat} />
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-white/60 leading-relaxed">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatinumWorldSection;
