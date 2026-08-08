import React, { useState } from 'react';
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
  const [direction, setDirection] = useState(1);

  const visibleCount = 2;
  const totalSlides = TESTIMONIALS.length;

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const displayedSlides = Array.from({ length: visibleCount }, (_, idx) => {
    const index = (currentIndex + idx) % totalSlides;
    return TESTIMONIALS[index];
  });

  return (
    <section className="py-16 w-full relative">
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

      <div className="relative mt-8">
        <button
          onClick={handlePrev}
          className="hidden md:block absolute -left-20 lg:-left-28 top-1/2 -translate-y-1/2 z-10 text-neutral-900 dark:text-white hover:text-[#8c7445] dark:hover:text-[#C5A059] transition-all duration-300 hover:-translate-x-1 cursor-pointer"
          aria-label="Previous testimonial"
        >
          <LongArrow direction="left" className="w-16 lg:w-20 h-auto" />
        </button>
        <button
          onClick={handleNext}
          className="hidden md:block absolute -right-20 lg:-right-28 top-1/2 -translate-y-1/2 z-10 text-neutral-900 dark:text-white hover:text-[#8c7445] dark:hover:text-[#C5A059] transition-all duration-300 hover:translate-x-1 cursor-pointer"
          aria-label="Next testimonial"
        >
          <LongArrow direction="right" className="w-16 lg:w-20 h-auto" />
        </button>
        <div className="overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={{
              enter: (dir: number) => ({ x: dir >= 0 ? '104%' : '-104%' }),
              center: { x: '0%' },
              exit: (dir: number) => ({ x: dir >= 0 ? '-104%' : '104%' }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
          {displayedSlides.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.18)] hover:shadow-[0_28px_70px_-24px_rgba(0,0,0,0.28)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative h-80 md:h-[26rem] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <Quote className="w-7 h-7 text-[#8c7445] mb-4" />
                  <p className="text-sm text-[#2c2620] dark:text-white/80 font-light italic leading-relaxed">
                    “{item.quote}”
                  </p>
                </div>
                <div className="pt-4 border-t border-[#e5d6bf] dark:border-white/10">
                  <h4 className="text-sm font-semibold text-[#111] dark:text-white">{item.name}</h4>
                  <p className="text-[10px] text-[#8c7445] tracking-[0.32em] uppercase mt-1">{item.project}</p>
                </div>
              </div>
            </div>
          ))}
          </motion.div>
        </AnimatePresence>
        </div>
      </div>
      </div>

    </section>
  );
};
