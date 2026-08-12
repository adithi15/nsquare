import React, { useState, useEffect } from 'react';
import { ThemeMode } from '../../types';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  theme: ThemeMode;
}

// Custom long-shaft arrow — the horizontal line stays dominant, like the reference sketch
const LongArrow: React.FC<{ direction: 'left' | 'right'; className?: string }> = ({ direction, className }) => (
  <svg
    viewBox="0 0 96 32"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {direction === 'right' ? (
      <>
        <line x1="2" y1="16" x2="92" y2="16" />
        <polyline points="78 4 92 16 78 28" />
      </>
    ) : (
      <>
        <line x1="4" y1="16" x2="94" y2="16" />
        <polyline points="18 4 4 16 18 28" />
      </>
    )}
  </svg>
);

const TESTIMONIALS = [
  {
    id: '1',
    name: 'Mr. & Mrs. Sharma',
    project: 'Neelkanth Luxuria, Taloja',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    quote: 'The construction quality and timely possession surpassed our expectations. N-Square made our home buying journey completely seamless.'
  },
  {
    id: '2',
    name: 'Dr. Ananya Deshmukh',
    project: 'Neelkanth Majestic, Ulwe',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    quote: 'Living at Ulwe with lush greenery and thoughtful amenities has transformed our family lifestyle.'
  },
  {
    id: '3',
    name: 'Mr. Rajesh Merchant',
    project: 'Goodluck Heights, Taloja',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    quote: 'N-Square represents integrity and world-class quality in Navi Mumbai real estate.'
  },
  {
    id: '4',
    name: 'Mrs. Kavita Nair',
    project: 'Neelkanth Bliss, Roadpali',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    quote: 'From the first site visit to possession, every promise was honoured. Our society could not be happier.'
  }
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ theme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const maxIndex = isMobile ? 3 : 2;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + (maxIndex + 1)) % (maxIndex + 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1));
  };

  return (
    <section className="py-16 w-full relative overflow-hidden">
      {/* Architectural Background Watermark */}
      <div className="absolute right-4 bottom-4 text-[12vw] font-serif font-bold text-[#c2a26c]/[0.015] dark:text-white/[0.008] select-none pointer-events-none uppercase tracking-[0.2em] z-0 leading-none">
        Voices
      </div>
      <div className="absolute left-0 top-[38%] hidden lg:block -translate-y-1/2">
        <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.35em] text-[10px] font-semibold text-[#7e6642]">
          TESTIMONIALS
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 relative">
        <div>
          <h2 className="text-3xl md:text-4xl serif italic text-neutral-900 dark:text-white font-light leading-tight">
            We Care About Our Customer’s Experience Too
          </h2>
          <p className="text-xs md:text-sm text-neutral-600 dark:text-white/70 font-light mt-3 max-w-2xl">
            Real stories from homeowners who found their sanctuary in N-Square developments.
          </p>
        </div>
      </div>

      <div className="relative mt-8 max-w-5xl mx-auto">
        <button
          onClick={handlePrev}
          className="hidden lg:block absolute -left-20 xl:-left-24 top-1/2 -translate-y-1/2 z-10 text-neutral-900 dark:text-white hover:text-[#8c7445] dark:hover:text-[#C5A059] transition-all duration-300 hover:-translate-x-1 cursor-pointer"
          aria-label="Previous testimonial"
        >
          <LongArrow direction="left" className="w-16 h-auto" />
        </button>
        <button
          onClick={handleNext}
          className="hidden lg:block absolute -right-20 xl:-right-24 top-1/2 -translate-y-1/2 z-10 text-neutral-900 dark:text-white hover:text-[#8c7445] dark:hover:text-[#C5A059] transition-all duration-300 hover:translate-x-1 cursor-pointer"
          aria-label="Next testimonial"
        >
          <LongArrow direction="right" className="w-16 h-auto" />
        </button>
        <div className="overflow-hidden px-1">
          <motion.div
            animate={{ x: isMobile ? `calc(-${currentIndex} * (100% + 24px))` : `calc(-${currentIndex} * (50% + 12px))` }}
            transition={{ type: "spring", stiffness: 32, damping: 15, mass: 1.2 }}
            className="flex flex-row gap-6 min-h-[220px]"
          >
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="relative rounded-xl bg-gradient-to-br from-white/95 to-white/90 dark:from-[#141414] dark:to-[#0C0C0C] border border-black/[0.06] dark:border-white/5 shadow-[0_12px_30px_rgba(0,0,0,0.06)] p-6 md:p-8 flex flex-col justify-between overflow-hidden cursor-pointer w-full md:w-[calc(50%-12px)] shrink-0"
              >
                {/* Giant background quote watermark */}
                <Quote className="absolute right-6 top-6 w-16 h-16 text-[#c2a26c]/[0.08] dark:text-[#c2a26c]/[0.04] pointer-events-none select-none rotate-180" />

                <div className="space-y-4 relative z-10">
                  <Quote className="w-6 h-6 text-[#c2a26c] mb-2 rotate-180" />
                  <p className="text-xs md:text-sm text-neutral-700 dark:text-white/80 font-light italic leading-relaxed">
                    “{item.quote}”
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#e5d6bf]/40 dark:border-white/5 flex items-center gap-4 relative z-10">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-11 h-11 rounded-full object-cover border border-[#c2a26c]/30"
                  />
                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-[#111] dark:text-white leading-none">
                      {item.name}
                    </h4>
                    <p className="text-[9px] text-[#8c7445] tracking-[0.25em] uppercase mt-1.5 leading-none">
                      {item.project}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      </div>

    </section>
  );
};
