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
    <section className="relative w-full h-[75vh] min-h-[75vh] bg-black overflow-hidden flex flex-col justify-between">
      {/* Preload all backgrounds in DOM to prevent lag from mounting/unmounting heavy videos */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <motion.div
            key={slide.id}
            initial={false}
            animate={{ opacity: isActive ? 1 : 0, zIndex: isActive ? 10 : 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
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
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
                style={{
                  transition: 'transform 6.5s ease-out',
                  transform: isActive ? 'scale(1.08)' : 'scale(1)',
                }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_30%)] opacity-80 pointer-events-none" />
          </motion.div>
        );
      })}

      {/* <div className="absolute top-24 sm:top-28 md:top-32 right-6 sm:right-12 md:right-20 z-20 pointer-events-none">
        <div className="flex items-center space-x-1.5 text-white/90 text-[10px] tracking-[0.2em] uppercase bg-black/40 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
          <MapPin className="w-3 h-3 text-[#b88a33]" />
          <span>{currentSlide.location}</span>
        </div>
      </div> */}



      <div className="relative z-20 px-5 sm:px-8 md:px-16 mt-auto mb-36 sm:mb-32 max-w-5xl">
        <div className="space-y-4">
          <div className="flex flex-col gap-4 md:gap-6">
            {/* "it's Crafted For Generations" Graphic */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[280px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[540px] pointer-events-none select-none"
            >
              <img
                src="/assets/branding/crafted-for-generations.png"
                alt="it's Crafted for Generations"
                className="w-full h-auto object-contain bg-transparent"
              />
            </motion.div>

            {/* Commented out title and subtitle as requested
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
            */}
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
          Video Is For Representation Purpose Only
        </span>
      </div>
    </section>
  );
};
