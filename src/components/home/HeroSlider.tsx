import React, { useState, useEffect, useRef } from 'react';
import { HeroSlide, ThemeMode } from '../../types';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin } from 'lucide-react';

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
  const [currentDuration, setCurrentDuration] = useState(6.5);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const currentSlide = slides[currentIndex];

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    videoRefs.current.forEach((vid, idx) => {
      if (vid) {
        if (idx === currentIndex) {
          vid.currentTime = 0;
          vid.play().catch(e => console.log('Autoplay prevented', e));

          if (vid.duration) {
            setCurrentDuration(vid.duration);
          } else {
            vid.onloadedmetadata = () => setCurrentDuration(vid.duration);
          }
        } else {
          // Let the outgoing video continue playing during the 1.2s crossfade
          const t = setTimeout(() => {
            vid.pause();
          }, 1200);
          timeouts.push(t);
        }
      }
    });
    return () => timeouts.forEach(clearTimeout);
  }, [currentIndex]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!currentSlide.video) {
      timer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 6500);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [slides.length, currentIndex, currentSlide.video]);





  return (
    <section className="relative w-full h-[75vh] min-h-[75vh] bg-black overflow-hidden flex flex-col justify-between">
      {/* Preload all backgrounds in DOM to prevent lag from mounting/unmounting heavy videos */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <motion.div
            key={slide.id}
            initial={false}
            animate={{ opacity: isActive ? 1 : 0, zIndex: isActive ? 10 : 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 overflow-hidden"
          >
            {slide.video ? (
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                src={slide.video}
                muted
                playsInline
                className="w-full h-full object-cover object-center"
                onTimeUpdate={(e) => {
                  if (isActive) {
                    const video = e.currentTarget;
                    // Trigger transition 1.2s before the video ends to perfectly align with the crossfade
                    if (video.duration && video.duration - video.currentTime <= 1.2) {
                      setCurrentIndex((prev) => (prev + 1) % slides.length);
                    }
                  }
                }}
              />
            ) : (
              <motion.img
                src={slide.image}
                alt={slide.title}
                initial={{ scale: 1 }}
                animate={{ scale: isActive ? 1.08 : 1 }}
                transition={{ duration: 6.5, ease: 'easeOut' }}
                className="w-full h-full object-cover object-center"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent z-10 pointer-events-none" />
          </motion.div>
        );
      })}



      <div className="relative z-20 px-5 sm:px-8 md:px-16 mt-auto mb-24 sm:mb-20 max-w-5xl">
        <div className="space-y-4">
          <div className="flex flex-col gap-4 md:gap-6">
            {/* "it's Crafted For Generations" Graphic */}
            <motion.div
              key={currentIndex}
              initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
              animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
              transition={{ duration: 2.0, ease: 'easeInOut', delay: 0.4 }}
              className="max-w-[280px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[540px] pointer-events-none select-none"
            >
              <img
                src="/assets/branding/crafted-for-generations.png"
                alt="it's Crafted for Generations"
                className="w-full h-auto object-contain bg-transparent"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Disclaimer & Action Button - centered on mobile, right on desktop */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 sm:left-auto sm:right-12 z-30 flex flex-col items-center space-y-3 px-4 sm:px-0 pointer-events-none">

        {/* Enquire Now Button - placed above the line, clickable */}
        <button
          onClick={() => onOpenScheduleVisit(currentSlide)}
          className="bg-[#c5a059] text-black px-7 sm:px-8 py-3 text-[12px] uppercase tracking-[0.35em] font-bold hover:bg-[#D4B575] transition-all rounded-none shadow-[0_8px_25px_rgba(0,0,0,0.3)] cursor-pointer pointer-events-auto"
        >
          Enquire Now
        </button>

        {/* Progress Line */}
        <div className="w-56 h-[2px] bg-white/20 rounded-full overflow-hidden relative">
          <motion.div
            key={`progress-${currentIndex}-${currentDuration}`}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: currentSlide.video ? currentDuration : 6.5,
              ease: 'linear',
            }}
            className="h-full bg-[#b88a33] shadow-[0_0_10px_#b88a33]"
          />
        </div>

        {/* Disclaimer Text */}
        <span className="text-[9px] uppercase tracking-widest text-white/45 font-light whitespace-nowrap">
          Image Is For Representation Purpose Only
        </span>
      </div>
    </section>
  );
};
