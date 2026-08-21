import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BENEFITS_CAROUSEL } from '../../data/redevelopment';

interface WhyChooseNSquareProps {
  isDark: boolean;
}

export const WhyChooseNSquare: React.FC<WhyChooseNSquareProps> = ({ isDark }) => {
  const [whyChooseCardsPerPage, setWhyChooseCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setWhyChooseCardsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setWhyChooseCardsPerPage(2);
      } else {
        setWhyChooseCardsPerPage(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalWhyChoose = BENEFITS_CAROUSEL.length;
  const extendedWhyChoose = [...BENEFITS_CAROUSEL, ...BENEFITS_CAROUSEL, ...BENEFITS_CAROUSEL];
  const [whyChooseIndex, setWhyChooseIndex] = useState(totalWhyChoose);
  const [isWhyChooseTransitioning, setIsWhyChooseTransitioning] = useState(true);

  const handleWhyChooseNext = () => {
    if (!isWhyChooseTransitioning) return;
    setWhyChooseIndex((prev) => prev + 1);
  };

  const handleWhyChoosePrev = () => {
    if (!isWhyChooseTransitioning) return;
    setWhyChooseIndex((prev) => prev - 1);
  };

  const handleWhyChooseAnimationComplete = (e?: React.TransitionEvent) => {
    if (e && e.propertyName !== 'transform') return;
    if (whyChooseIndex >= 2 * totalWhyChoose) {
      setIsWhyChooseTransitioning(false);
      setWhyChooseIndex(whyChooseIndex - totalWhyChoose);
    } else if (whyChooseIndex < totalWhyChoose) {
      setIsWhyChooseTransitioning(false);
      setWhyChooseIndex(whyChooseIndex + totalWhyChoose);
    }
  };

  useEffect(() => {
    if (!isWhyChooseTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsWhyChooseTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isWhyChooseTransitioning]);

  // Autoplay Why Choose carousel every 5 seconds (resets on index change/interaction)
  useEffect(() => {
    const autoPlayTimer = window.setInterval(() => {
      setWhyChooseIndex((prev) => prev + 1);
    }, 5000);
    return () => window.clearInterval(autoPlayTimer);
  }, [whyChooseIndex]);

  return (
    <section className={`relative w-full pt-6 pb-10 md:pt-10 md:pb-16 overflow-hidden transition-colors duration-500 mt-2 ${isDark ? 'bg-neutral-900/30 border-y border-white/5' : 'bg-[#f3e4cf] border-y border-neutral-300/20'
      }`}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full space-y-12">

        {/* Header Block: Centered Title */}
        <div className="pb-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#C5A059] tracking-wide">
              Why Choose N Square?
            </h2>
            <p className={`text-[14px] md:text-sm lg:text-[15px] font-sans font-light leading-relaxed text-center max-w-3xl mx-auto ${isDark ? 'text-neutral-400' : 'text-neutral-700'
              }`}>
              A trusted redevelopment partner offering transparent processes, quality construction, better amenities, timely execution, enhanced property value and creating a better future for every society member.
            </p>
          </div>
        </div>

        {/* Sliding Carousel Viewport */}
        <div className="relative w-full px-8 sm:px-16 pt-4 pb-4">

          {/* Left navigation arrow */}
          <button
            onClick={handleWhyChoosePrev}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border border-transparent text-[#C5A059] transition-all cursor-pointer active:scale-95 flex items-center justify-center"
            aria-label="Previous why-choose"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Right navigation arrow */}
          <button
            onClick={handleWhyChooseNext}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border border-transparent text-[#C5A059] transition-all cursor-pointer active:scale-95 flex items-center justify-center"
            aria-label="Next why-choose"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <div className="overflow-hidden w-full">
            <div
              className="flex w-full"
              style={{
                transform: `translate3d(-${whyChooseIndex * (100 / whyChooseCardsPerPage)}%, 0, 0)`,
                transition: isWhyChooseTransitioning ? 'transform 1.5s ease-in-out' : 'none'
              }}
              onTransitionEnd={handleWhyChooseAnimationComplete}
            >
              {extendedWhyChoose.map((item, idx) => {
                return (
                  <div
                    key={`why-choose-${item.id}-${idx}`}
                    className={`${whyChooseCardsPerPage === 3 ? 'w-1/3' : whyChooseCardsPerPage === 2 ? 'w-1/2' : 'w-full'
                      } flex-shrink-0 px-3 sm:px-4`}
                  >
                    {/* Tall vertical rectangular card with image and hover text overlay */}
                    <div className="relative w-full aspect-[2/3] overflow-hidden rounded-none group shadow-lg cursor-pointer bg-neutral-900">
                      {/* Background Image */}
                      <img
                        src={item.bgImage}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Dark Overlay: Gradual by default, darker solid on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-all duration-500 group-hover:bg-black/80" />

                      {/* Text content layout */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center">
                        {/* Inner container: translates to the bottom by default and aligns to center on hover */}
                        <div className="w-full flex flex-col items-center transition-all duration-[2200ms] ease-in-out transform translate-y-[110px] sm:translate-y-[130px] md:translate-y-[140px] group-hover:translate-y-0">
                          {/* Title - always visible */}
                          <h3 className="font-sans font-bold text-sm sm:text-base md:text-lg tracking-wider text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                            {item.title}
                          </h3>

                          {/* Description - height expands and opacity fades in on hover */}
                          <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-[2200ms] ease-in-out group-hover:max-h-[160px] group-hover:opacity-100 group-hover:mt-4 max-w-[280px]">
                            <p className="text-xs sm:text-[13px] md:text-[14px] leading-relaxed font-light text-neutral-300">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
