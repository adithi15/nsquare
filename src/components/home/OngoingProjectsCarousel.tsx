import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Building2, ChevronRight } from 'lucide-react';
import { ThemeMode } from '../../types';
import { ONGOING_PROJECTS } from '../../data/nsquare';
import { EASE, VIEWPORT } from '../ui/SectionHeading';

interface OngoingProjectsCarouselProps {
  theme: ThemeMode;
  onViewAll?: () => void;
}

// Signature Projects in the Making — dark band with outlined intro panel,
// auto-scrolling white project cards, fixed view-all column and dots.
export const OngoingProjectsCarousel: React.FC<OngoingProjectsCarouselProps> = ({ onViewAll }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) return;
    setActiveDot(Math.min(3, Math.round((el.scrollLeft / max) * 3)));

    // after manual scrolling settles, snap back to the nearest clean 2-card stop
    window.clearTimeout(snapTimer.current);
    snapTimer.current = window.setTimeout(() => {
      const track = trackRef.current;
      if (!track) return;
      const step = getStep(track);
      const nearest = Math.round(track.scrollLeft / step);
      indexRef.current = nearest;
      if (Math.abs(track.scrollLeft - nearest * step) > 4) {
        smoothScrollTo(track, nearest * step, 700);
      }
    }, 180);
  };

  const goToDot = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const step = getStep(el);
    const maxIndex = Math.max(1, Math.round(max / step));
    const target = Math.round((maxIndex / 3) * i);
    indexRef.current = target;
    smoothScrollTo(el, Math.min(max, target * step));
  };

  // exact card + gap distance, measured from the laid-out cards
  const getStep = (el: HTMLElement) => {
    const cards = el.querySelectorAll('article');
    if (cards.length > 1) {
      return (cards[1] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft;
    }
    return cards[0] ? cards[0].getBoundingClientRect().width + 28 : el.clientWidth;
  };

  // slow eased horizontal glide — browser smooth-scroll felt too snappy/fast
  const rafRef = useRef<number>(0);
  const indexRef = useRef(0);
  const snapTimer = useRef<number>(0);
  const smoothScrollTo = (el: HTMLElement, to: number, duration = 2000) => {
    const from = el.scrollLeft;
    const change = to - from;
    const start = performance.now();
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    cancelAnimationFrame(rafRef.current);
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      el.scrollLeft = from + change * ease(p);
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(
    () => () => {
      cancelAnimationFrame(rafRef.current);
      window.clearTimeout(snapTimer.current);
    },
    []
  );

  // calm auto-scroll — one clean 2-card stop every 4.5 seconds, loops at the end
  useEffect(() => {
    const id = window.setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const step = getStep(el);
      const max = el.scrollWidth - el.clientWidth;
      const maxIndex = Math.max(1, Math.round(max / step));
      indexRef.current = indexRef.current >= maxIndex ? 0 : indexRef.current + 1;
      smoothScrollTo(el, Math.min(max, indexRef.current * step));
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative py-20 md:py-24 bg-[#0C0C0C] overflow-hidden">
      {/* faint backdrop photo */}
      <div
        className="absolute inset-0 opacity-[0.08] bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url(/assets/branding/city-aerial.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#161616] via-transparent to-[#161616] pointer-events-none" />

      {/* vertical side label */}
      <div className="hidden lg:block absolute left-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <span className="block [writing-mode:vertical-lr] rotate-180 text-[10px] uppercase tracking-[0.35em] text-white/50 whitespace-nowrap">
          Ongoing Projects
        </span>
      </div>

      <div className="relative z-10 px-5 sm:px-8 lg:px-14 xl:px-20">
        <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch lg:-mr-14 xl:-mr-20">
          {/* Left — outlined intro panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 1.1, ease: EASE }}
            className="shrink-0 lg:w-[360px] xl:w-[400px] border border-white/50 p-9 xl:p-11 flex flex-col justify-center"
          >
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C5A059] font-semibold mb-6">
              Building Tomorrow, Starting Today
            </span>
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-8">
              <Building2 className="w-9 h-9 text-[#C5A059]" strokeWidth={1.4} />
            </div>
            <h2 className="font-serif text-3xl xl:text-4xl text-white leading-snug mb-6">
              Signature Projects in the Making
            </h2>
            <p className="text-sm text-white/75 font-light leading-relaxed">
              Nine landmarks rising across Navi Mumbai — each one a promise of quality,
              on-time delivery and timeless design.
            </p>
          </motion.div>

          {/* Center — auto-scrolling white project cards */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex-1 min-w-0 overflow-x-auto no-scrollbar lg:mr-[248px] xl:mr-[272px]"
          >
            <div className="flex gap-6 lg:gap-7 items-stretch pb-2">
              {ONGOING_PROJECTS.map((p, i) => (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 1.2, delay: (i % 2) * 0.15, ease: EASE }}
                  className="shrink-0 w-[76vw] sm:w-[380px] lg:w-[calc(50%-14px)] bg-white flex flex-col group"
                >
                  <div className="relative overflow-hidden aspect-[4/4.4]">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-108"
                    />
                  </div>
                  <div className="bg-white px-6 py-5">
                    <h3 className="text-lg text-neutral-900 leading-snug">
                      {p.name},
                    </h3>
                    <p className="text-sm text-neutral-500 font-light mt-1">
                      {p.location}, Navi Mumbai
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Right — view-all card stuck to the screen edge, half off-screen */}
          <motion.button
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, delay: 0.24, ease: EASE }}
            onClick={onViewAll}
            className="hidden lg:flex absolute inset-y-0 right-0 z-20 w-[380px] xl:w-[420px] translate-x-[42%] overflow-hidden cursor-pointer flex-col items-center justify-center gap-8 text-center group"
          >
            <img
              src="/assets/projects/upcoming/unicorn.jpg"
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-[#F2EFE8]" />
            <div className="relative w-full pr-[22%] flex justify-center">
              <span className="font-serif text-2xl text-right xl:text-3xl uppercase tracking-wide text-neutral-900 leading-snug">
                View<br />All<br />Projects
              </span>
            </div>
            <span className="relative w-14 h-14 rounded-full border border-neutral-500/70 flex items-center justify-center text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-500">
              <ChevronRight className="w-5 h-5" />
            </span>
          </motion.button>
        </div>

        {/* mobile view-all */}
        <button
          onClick={onViewAll}
          className="lg:hidden mt-8 mx-auto flex items-center gap-3 border border-white/40 text-white px-8 py-3.5 text-[10px] uppercase tracking-[0.3em] font-semibold hover:border-[#C5A059] hover:text-[#C5A059] transition-colors duration-500 cursor-pointer"
        >
          View All Projects <ChevronRight className="w-4 h-4" />
        </button>

        {/* pagination dots */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => goToDot(i)}
              aria-label={`Go to slide group ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                activeDot === i ? 'bg-white scale-110' : 'bg-[#C5A059]/50 hover:bg-[#C5A059]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
