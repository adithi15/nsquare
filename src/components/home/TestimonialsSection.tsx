import React, { useState, useEffect } from 'react';
import { ThemeMode } from '../../types';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  theme: ThemeMode;
}

// Custom long-shaft arrow SVG pointing left/right
// Custom chevron arrow SVG pointing left/right (no shaft line)
const ChevronArrow: React.FC<{ direction: 'left' | 'right'; className?: string }> = ({ direction, className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {direction === 'right' ? (
      <polyline points="9 5 16 12 9 19" />
    ) : (
      <polyline points="15 5 8 12 15 19" />
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
  },
  {
    id: '5',
    name: 'Mr. Vikram Singhania',
    project: 'Neelkanth Kingdom, Panvel',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    quote: 'The spacious designs, excellent connectivity, and premium clubhouse facilities make it the perfect home for my family.'
  },
  {
    id: '6',
    name: 'Mrs. Priya & Amit Patil',
    project: 'Goodluck Residency, Kharghar',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    quote: 'Their customer service is exceptional. Even post-handover, they have assisted us with everything we needed promptly.'
  },
  {
    id: '7',
    name: 'Mr. Rohan Mehta',
    project: 'Neelkanth Heights, Vashi',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
    quote: 'Investing with N-Square was the best decision for my portfolio. The appreciation has been solid and renting it out was very easy.'
  }
];

// Helper hook to dynamically calculate cards per page
const useCardsPerPage = () => {
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return cardsPerPage;
};

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  const cardsPerPage = useCardsPerPage();
  const N = TESTIMONIALS.length;

  // Tripled dataset to handle infinite looping boundaries smoothly
  const extendedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  // Start in the middle set (index 7 for a dataset of 7)
  const [currentIndex, setCurrentIndex] = useState(N);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleAnimationComplete = () => {
    // Reached right clone boundary: instantly jump back to equivalent middle index
    if (currentIndex >= 2 * N) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - N);
    }
    // Reached left clone boundary: instantly jump forward to equivalent middle index
    else if (currentIndex < N) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + N);
    }
  };

  // Re-enable transition settings in the next animation frame
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  return (
    <section className="py-16 sm:py-20 w-full bg-[#F9F8F6] dark:bg-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">

        {/* Header Block: Title & Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-serif font-medium text-neutral-900 dark:text-white leading-tight">
            We Care About Our Customer’s Experience Too
          </h2>

          {/* Loop navigation buttons */}
          <div className="flex items-center gap-3 text-[14px] self-end sm:self-auto">
            <button
              onClick={handlePrev}
              className="p-2 sm:p-2.5 rounded-full border border-neutral-300 dark:border-white/10 text-neutral-800 dark:text-white hover:bg-neutral-200/50 dark:hover:bg-white/5 transition-all cursor-pointer shadow-sm active:scale-95 flex items-center justify-center bg-white dark:bg-[#181818]"
              aria-label="Previous testimonial"
            >
              <ChevronArrow direction="left" className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700 dark:text-neutral-300" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 sm:p-2.5 rounded-full border border-neutral-300 dark:border-white/10 text-neutral-800 dark:text-white hover:bg-neutral-200/50 dark:hover:bg-white/5 transition-all cursor-pointer shadow-sm active:scale-95 flex items-center justify-center bg-white dark:bg-[#181818]"
              aria-label="Next testimonial"
            >
              <ChevronArrow direction="right" className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700 dark:text-neutral-300" />
            </button>
          </div>
        </div>

        {/* Sliding Carousel Viewport */}
        <div className="overflow-hidden relative w-full px-1 pt-1 pb-4">
          <motion.div
            className="flex -mx-4 sm:-mx-5"
            animate={{ x: `-${currentIndex * (100 / cardsPerPage)}%` }}
            transition={
              isTransitioning
                ? { type: 'tween', ease: 'easeInOut', duration: 1.2 }
                : { duration: 0 }
            }
            onAnimationComplete={handleAnimationComplete}
          >
            {extendedTestimonials.map((item, idx) => (
              <div
                key={`testi-${item.id}-${idx}`}
                className={`${cardsPerPage === 3 ? 'w-1/3' : cardsPerPage === 2 ? 'w-1/2' : 'w-full'
                  } flex-shrink-0 px-3 sm:px-4`}
              >
                <div className="relative rounded-xl bg-white dark:bg-gradient-to-br dark:from-[#141414] dark:to-[#0C0C0C] border border-black/[0.04] dark:border-white/5 shadow-[0_10px_25px_rgba(0,0,0,0.03)] p-6 sm:p-8 flex flex-col justify-between overflow-hidden min-h-[240px] h-full transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
                  {/* Giant background quote watermark */}
                  <Quote className="absolute right-6 top-6 w-20 h-20 text-[#c2a26c]/[0.05] dark:text-[#c2a26c]/[0.02] pointer-events-none select-none rotate-180" />

                  <div className="space-y-4 relative z-10">
                    <Quote className="w-5 h-5 text-[#c2a26c] mb-2 rotate-180" />
                    <p className="text-sm sm:text-[14px] text-neutral-700 dark:text-white/80 font-normal leading-relaxed">
                      “{item.quote}”
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-neutral-100 dark:border-white/5 flex flex-col gap-1 relative z-10">
                    <h4 className="text-[18px] sm:text-[14px] font-bold text-neutral-900 dark:text-white leading-none">
                      {item.name}
                    </h4>
                    <p className="text-[9px] sm:text-[12px] text-[#A27E3B] tracking-[0.2em] uppercase mt-1 leading-none font-semibold">
                      {item.project}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
