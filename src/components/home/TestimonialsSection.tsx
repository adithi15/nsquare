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

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  // Use first 3 testimonials for the static 3-card layout
  const displayTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 w-full bg-[#F9F8F6] dark:bg-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Title */}
        <div className="mb-10 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-serif font-medium text-neutral-900 dark:text-white leading-tight">
            We Care About Our Customer’s Experience Too
          </h2>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {displayTestimonials.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl bg-white dark:from-[#141414] dark:to-[#0C0C0C] border border-black/[0.04] dark:border-white/5 shadow-[0_10px_25px_rgba(0,0,0,0.03)] p-6 sm:p-8 flex flex-col justify-between overflow-hidden min-h-[220px] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
            >
              {/* Giant background quote watermark */}
              <Quote className="absolute right-6 top-6 w-20 h-20 text-[#c2a26c]/[0.05] dark:text-[#c2a26c]/[0.02] pointer-events-none select-none rotate-180" />

              <div className="space-y-4 relative z-10">
                <Quote className="w-5 h-5 text-[#c2a26c] mb-2 rotate-180" />
                <p className="text-xs sm:text-[13px] text-neutral-700 dark:text-white/80 font-normal leading-relaxed">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-neutral-100 dark:border-white/5 flex flex-col gap-1 relative z-10">
                <h4 className="text-xs sm:text-[13px] font-bold text-neutral-900 dark:text-white leading-none">
                  {item.name}
                </h4>
                <p className="text-[9px] sm:text-[10px] text-[#A27E3B] tracking-[0.2em] uppercase mt-1 leading-none font-semibold">
                  {item.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

