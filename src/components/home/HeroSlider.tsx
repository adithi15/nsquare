import React, { useState, useEffect } from 'react';
import { HeroSlide, ThemeMode } from '../../types';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, ChevronDown, MapPin } from 'lucide-react';

interface HeroSliderProps {
  slides: HeroSlide[];
  theme: ThemeMode;
  onOpenBrochure: (slide: HeroSlide) => void;
  onOpenScheduleVisit: (slide: HeroSlide) => void;
  onSelectPropertyId?: (propertyId: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  theme,
  onOpenBrochure,
  onOpenScheduleVisit,
  onSelectPropertyId,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlide = slides[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const titleChunks: { text: string; space: boolean }[] = [];
  currentSlide.title
    .toLowerCase()
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .forEach((word, wi, arr) => {
      for (let i = 0; i < word.length; i += 2) {
        titleChunks.push({ text: word.slice(i, i + 2), space: false });
      }
      if (wi < arr.length - 1) titleChunks.push({ text: ' ', space: true });
    });
  const chunkCount = titleChunks.filter((t) => !t.space).length;
  const lateDelay = 0.8 + chunkCount * 0.16 + 0.4;

  return (
    <section className="relative w-full h-screen min-h-screen overflow-hidden flex flex-col justify-between">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          className="absolute inset-0 z-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <motion.img
            src={currentSlide.image}
            alt={currentSlide.title}
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 6.5, ease: 'easeOut' }}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_30%)] opacity-80 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-24 sm:top-28 md:top-32 right-6 sm:right-12 md:right-20 z-20 pointer-events-none">
        <div className="flex items-center space-x-1.5 text-white/90 text-[10px] tracking-[0.2em] uppercase bg-black/40 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
          <MapPin className="w-3 h-3 text-[#b88a33]" />
          <span>{currentSlide.location}</span>
        </div>
      </div>

      <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center space-y-3.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="p-1.5 text-white/80 hover:text-[#b88a33] transition-all cursor-pointer group"
          title="Previous Slide"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>

        <div className="flex flex-col items-center space-y-2.5 py-1">
          {slides.map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="relative p-1 flex items-center justify-center cursor-pointer group transition-all duration-300"
              >
                <div
                  className={`w-4 h-4 rotate-45 flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'border-[1.8px] border-white shadow-[0_0_10px_rgba(255,255,255,0.8)] scale-110'
                      : 'border border-white/60 group-hover:border-[#b88a33] group-hover:scale-110'
                  }`}
                >
                  {isActive && <div className="w-1.5 h-1.5 bg-white shadow-[0_0_6px_#ffffff]" />}
                </div>
              </button>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="p-1.5 text-white/80 hover:text-[#b88a33] transition-all cursor-pointer group"
          title="Next Slide"
        >
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="relative z-20 px-6 md:px-16 mt-auto mb-20 max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="space-y-4"
          >
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-script leading-[1.25] text-white max-w-5xl drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
                {titleChunks.map((t, i) => {
                  if (t.space) return <span key={`${currentSlide.id}-sp${i}`}> </span>;
                  const ci = titleChunks.slice(0, i).filter((x) => !x.space).length;
                  return (
                    <motion.span
                      key={`${currentSlide.id}-c${i}`}
                      initial={{ opacity: 0, y: 22, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{
                        duration: 1.0,
                        delay: 0.5 + ci * 0.16,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }}
                      className="inline-block"
                    >
                      {t.text}
                    </motion.span>
                  );
                })}
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: lateDelay, ease: [0.22, 1, 0.36, 1] as const }}
                className="flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-3"
              >
                <p className="text-[11px] uppercase tracking-[0.35em] text-white/70 border-l-2 border-white/40 pl-4">
                  {currentSlide.subtitle}
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: lateDelay + 0.3, ease: [0.22, 1, 0.36, 1] as const }}
              className="pt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={() => onOpenScheduleVisit(currentSlide)}
                className="bg-[#b88a33] text-black px-8 py-3 text-[10px] uppercase tracking-[0.35em] font-bold hover:bg-[#D4B575] transition-all rounded-sm shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
              >
                Schedule A Visit
              </button>
              <button
                onClick={() => onOpenBrochure(currentSlide)}
                className="border border-white/50 text-white text-[10px] uppercase tracking-[0.35em] font-bold px-8 py-3 hover:border-[#b88a33] hover:text-[#b88a33] transition-all rounded-sm bg-white/10"
              >
                Request Floorplans
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-20 px-6 md:px-12 pb-8 flex flex-col items-center justify-center gap-4 pt-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex flex-col items-center space-y-1 w-full max-w-xs">
          <div className="w-full h-[2px] bg-white/20 rounded-full overflow-hidden relative">
            <motion.div
              key={`progress-${currentIndex}`}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{
                duration: 6,
                ease: 'linear',
              }}
              className="h-full bg-[#b88a33] shadow-[0_0_10px_#b88a33]"
            />
          </div>
          <span className="text-[9px] uppercase tracking-widest text-white/50 font-light">
            Image Is For Representation Purpose Only
          </span>
        </div>
      </div>
    </section>
  );
};
