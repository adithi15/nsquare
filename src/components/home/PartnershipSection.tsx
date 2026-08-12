import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

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

export const PartnershipSection: React.FC = () => {
  const stats = [
    { value: 23, suffix: '', label: 'Years of\nRich Legacy' },
    { value: 32, suffix: '', label: 'Delivered\nLandmarks' },
    { value: 10, suffix: '', label: 'Ongoing\nProjects' },
    { value: 23, suffix: 'L', label: 'Sq. Ft. Developed\nSpaces' },
    { value: 3, suffix: 'K', label: 'Happy\nFamilies' },
    { value: 29, suffix: 'L', label: 'Sq.mt\nFuture Planning' },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-[#F4EFE6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-8">
        
        {/* Top: Text and Logos */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-3/5 text-left">
            <h3 className="font-serif text-xl md:text-2xl text-neutral-900 leading-relaxed">
              N-Square Developers Is A Strategic Partnership Between Neelkanth Group And Namastey Realty, Created To Deliver Excellence In Redevelopment.
            </h3>
          </div>
          <div className="md:w-2/5 flex items-center justify-center gap-8">
            {/* For now, using N-Square logo for both as requested */}
            <img src="/N-Square-logo.png" alt="Logo 1" className="h-16 md:h-20 object-contain" />
            <img src="/N-Square-logo.png" alt="Logo 2" className="h-16 md:h-20 object-contain" />
          </div>
        </div>

        {/* Bottom: Stats */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h4 className="font-serif text-lg md:text-xl text-[#A27E3B] font-semibold whitespace-nowrap">
              A Legacy Measured in Trust
            </h4>
            <div className="flex-1 h-px bg-neutral-300/80" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center space-y-2"
              >
                <div className="font-serif text-4xl md:text-5xl text-[#C5A059]" style={{ fontWeight: 700 }}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm text-neutral-600 font-medium leading-snug whitespace-pre-line font-sans">
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
