import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BENEFITS_CAROUSEL } from '../../data/redevelopment';

interface RedevelopmentBenefitsProps {
  isDark: boolean;
}

export const RedevelopmentBenefits: React.FC<RedevelopmentBenefitsProps> = ({ isDark }) => {
  const [benefitsCardsPerPage, setBenefitsCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setBenefitsCardsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setBenefitsCardsPerPage(2);
      } else {
        setBenefitsCardsPerPage(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalBenefits = BENEFITS_CAROUSEL.length;
  const extendedBenefits = [...BENEFITS_CAROUSEL, ...BENEFITS_CAROUSEL, ...BENEFITS_CAROUSEL];
  const [benefitsIndex, setBenefitsIndex] = useState(totalBenefits);
  const [isBenefitsTransitioning, setIsBenefitsTransitioning] = useState(true);

  const handleBenefitsNext = () => {
    if (!isBenefitsTransitioning) return;
    setBenefitsIndex((prev) => prev + 1);
  };

  const handleBenefitsPrev = () => {
    if (!isBenefitsTransitioning) return;
    setBenefitsIndex((prev) => prev - 1);
  };

  const handleBenefitsAnimationComplete = () => {
    if (benefitsIndex >= 2 * totalBenefits) {
      setIsBenefitsTransitioning(false);
      setBenefitsIndex(benefitsIndex - totalBenefits);
    } else if (benefitsIndex < totalBenefits) {
      setIsBenefitsTransitioning(false);
      setBenefitsIndex(benefitsIndex + totalBenefits);
    }
  };

  useEffect(() => {
    if (!isBenefitsTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsBenefitsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isBenefitsTransitioning]);

  // Autoplay benefits carousel every 5 seconds
  useEffect(() => {
    const autoPlayTimer = window.setInterval(() => {
      setBenefitsIndex((prev) => prev + 1);
    }, 5000);
    return () => window.clearInterval(autoPlayTimer);
  }, []);

  return (
    <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full mt-12">
      <div className="w-full space-y-12">
        
        {/* Header Block: Centered Title */}
        <div className="pb-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#C5A059] tracking-wide">
              Benefits of Redevelopment
            </h2>
            <p className={`text-xs md:text-sm lg:text-[15px] font-sans font-light leading-relaxed max-w-none whitespace-normal sm:whitespace-nowrap text-center ${
              isDark ? 'text-neutral-400' : 'text-neutral-700'
            }`}>
              Partnering with N Square brings housing societies a host of benefits, opportunities, and value-driven solutions.
            </p>
          </div>
        </div>

        {/* Sliding Carousel Viewport */}
        <div className="relative w-full px-8 sm:px-16 pt-4 pb-4">
          
          {/* Left navigation arrow */}
          <button
            onClick={handleBenefitsPrev}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border border-transparent text-[#C5A059] transition-all cursor-pointer active:scale-95 flex items-center justify-center"
            aria-label="Previous benefits"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Right navigation arrow */}
          <button
            onClick={handleBenefitsNext}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border border-transparent text-[#C5A059] transition-all cursor-pointer active:scale-95 flex items-center justify-center"
            aria-label="Next benefits"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <div className="overflow-hidden w-full">
            <motion.div
              className="flex animate-none"
              animate={{ x: `-${benefitsIndex * (100 / benefitsCardsPerPage)}%` }}
              transition={
                isBenefitsTransitioning
                  ? { type: 'tween', ease: 'easeInOut', duration: 1.5 }
                  : { duration: 0 }
              }
              onAnimationComplete={handleBenefitsAnimationComplete}
            >
              {extendedBenefits.map((item, idx) => {
                return (
                  <div
                    key={`benefit-${item.id}-${idx}`}
                    className={`${
                      benefitsCardsPerPage === 3 ? 'w-1/3' : benefitsCardsPerPage === 2 ? 'w-1/2' : 'w-full'
                    } flex-shrink-0 px-3 sm:px-4`}
                  >
                    <div className="relative pt-0 pb-4 px-3 sm:pt-0 sm:pb-6 sm:px-4 flex flex-col items-center justify-start text-center">
                      
                      {/* Icon */}
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="w-[90px] h-[90px] object-contain shrink-0 mb-4"
                      />

                      {/* Title */}
                      <h3 className="font-sans font-bold text-sm sm:text-base md:text-lg tracking-wider text-[#C5A059] uppercase mb-0">
                        {item.title}
                      </h3>

                      {/* Description with precise lines */}
                      <p className={`text-xs sm:text-[14.5px] md:text-[16px] lg:text-[17px] leading-relaxed font-light mt-0 ${
                        isDark ? 'text-neutral-400' : 'text-neutral-700'
                      }`}>
                        {item.description}
                      </p>

                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
