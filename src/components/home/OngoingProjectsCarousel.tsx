import React, { useEffect, useRef, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { Building2, ChevronRight } from 'lucide-react';
import { ThemeMode } from '../../types';
import { ONGOING_PROJECTS, NSProject } from '../../data/nsquare';
import { EASE, VIEWPORT } from '../ui/SectionHeading';
import { ProjectInquiryModal, ProjectInquiryData } from '../layout/ProjectInquiryModal';

interface OngoingProjectsCarouselProps {
  theme: ThemeMode;
  onViewAll?: () => void;
}

export const OngoingProjectsCarousel: React.FC<OngoingProjectsCarouselProps> = ({ theme, onViewAll }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [snapType, setSnapType] = useState('x mandatory');
  const scrollAnimRef = useRef<any>(null);
  const [selectedInquiryProject, setSelectedInquiryProject] = useState<ProjectInquiryData | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const handleProjectClick = (p: NSProject) => {
    setSelectedInquiryProject({
      projectName: p.name,
      projectLocation: `${p.location}, Navi Mumbai`,
      projectImage: p.image,
      projectStatus: 'Ongoing',
    });
    setIsInquiryOpen(true);
  };

  const smoothScrollTo = (el: HTMLElement, to: number, duration = 3.2) => {
    // Temporarily disable scrollSnapType so it doesn't fight our eased scroll loop
    setSnapType('none');
    el.style.scrollSnapType = 'none';

    // Stop any active animation before starting a new one
    if (scrollAnimRef.current) {
      scrollAnimRef.current.stop();
    }

    scrollAnimRef.current = animate(el.scrollLeft, to, {
      duration: duration,
      ease: [0.22, 1, 0.36, 1], // Calm, slow ease
      onUpdate: (latest) => {
        el.scrollLeft = latest;
      },
      onComplete: () => {
        // Re-enable scrollSnapType once settled so user swiping remains intact
        setSnapType('x mandatory');
        el.style.scrollSnapType = 'x mandatory';
      }
    });
  };

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) return;
    const step = getStep(el);
    const nearest = Math.round(el.scrollLeft / step);
    const maxIndex = Math.max(1, Math.round(max / step));
    setActiveDot(Math.min(3, Math.round((nearest / maxIndex) * 3)));
  };

  const goToDot = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const step = getStep(el);
    const maxIndex = Math.max(1, Math.round(max / step));
    const target = Math.round((maxIndex / 3) * i);
    smoothScrollTo(el, Math.min(max, target * step));
  };

  const getStep = (el: HTMLElement) => {
    const cards = el.querySelectorAll('article');
    if (cards.length > 1) {
      return (cards[1] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft;
    }
    return cards[0] ? cards[0].getBoundingClientRect().width + 28 : el.clientWidth;
  };

  // calm auto-scroll — one clean card stop every 4.5 seconds, loops at the end
  useEffect(() => {
    const id = window.setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const step = getStep(el);
      const max = el.scrollWidth - el.clientWidth;
      const maxIndex = Math.max(1, Math.round(max / step));
      
      const nearest = Math.round(el.scrollLeft / step);
      const nextIndex = nearest >= maxIndex ? 0 : nearest + 1;
      smoothScrollTo(el, Math.min(max, nextIndex * step));
    }, 4500);

    return () => {
      window.clearInterval(id);
      if (scrollAnimRef.current) {
        scrollAnimRef.current.stop();
      }
    };
  }, []);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0C0C0C] overflow-hidden">

      <div className="relative z-10 px-5 sm:px-8 lg:px-14 xl:px-20">
        <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">

          {/* Left — plain text intro panel matching the image exactly */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 1.1, ease: EASE }}
            className="w-full lg:w-[320px] xl:w-[360px] shrink-0 flex flex-col justify-center relative pb-6 lg:pb-0 lg:ml-8 xl:ml-14"
          >
            {/* Dark background single quotation watermark behind text - user custom styled */}
          <div className="absolute -left-[260px] top-10 w-[350px] h-[350px] text-white/[0.03] pointer-events-none -z-10 hidden lg:block">
              <svg viewBox="-3.2 -3.2 38.40 38.40" fill="currentColor" className="w-full h-full scale-x-[-1]">
                <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"/>
              </svg>
            </div>

            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-bold mb-1 leading-normal">
              BUILDING TOMORROW,<br />STARTING TODAY
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] text-[#C5A059] font-medium leading-[1.2] mb-2">
              Signature Projects<br />in the Making
            </h2>
            
            <p className="text-sm text-white/90 font-light leading-relaxed">
              Nine landmarks rising across <br className="hidden sm:inline" />
              Navi Mumbai — each one a promise <br className="hidden sm:inline" />
              of quality, on-time delivery and timeless design.
            </p>
          </motion.div>

          {/* Cards */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex-1 min-w-0 overflow-x-auto no-scrollbar"
            style={{ scrollSnapType: snapType }}
          >
            <div className="flex gap-6 lg:gap-7 items-stretch pb-2">
              {ONGOING_PROJECTS.map((p, i) => (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 1.2, delay: (i % 2) * 0.15, ease: EASE }}
                  onClick={() => handleProjectClick(p)}
                  className="shrink-0 w-[76vw] sm:w-[380px] lg:w-[calc(50%-14px)] bg-white flex flex-col group cursor-pointer hover:shadow-2xl transition-all duration-300"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="relative overflow-hidden aspect-[4/4.4]">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-[#C5A059] text-black text-[9px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full shadow-md">
                        Enquire / Visit
                      </span>
                    </div>
                  </div>
                  <div className="bg-white px-6 py-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg text-neutral-900 leading-snug group-hover:text-[#A27E3B] transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-sm text-neutral-500 font-light mt-1">
                        {p.location}, Navi Mumbai
                      </p>
                    </div>
                    <span className="text-xs text-[#A27E3B] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      &rarr;
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Right — simple VIEW ALL PROJECTS text link matching Image 2 */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, delay: 0.24, ease: EASE }}
            onClick={onViewAll}
            className="hidden lg:flex shrink-0 flex-row items-center gap-2 cursor-pointer group text-[#C5A059] hover:text-[#B38D48] transition-colors"
          >
            <div className="flex flex-col items-start leading-tight text-left">
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.12em] font-medium">
                VIEW ALL
              </span>
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.12em] font-medium">
                PROJECTS
              </span>
            </div>
            <ChevronRight className="w-5 h-5 stroke-[2.5px] shrink-0" />
          </motion.button>

        </div>

        {/* mobile view-all */}
        <button
          onClick={onViewAll}
          className="lg:hidden mt-8 mx-auto flex items-center gap-3 border border-white/40 text-white px-8 py-3.5 text-[10px] uppercase tracking-[0.3em] font-semibold hover:border-[#C5A059] hover:text-[#C5A059] transition-colors duration-500 cursor-pointer"
        >
          View All Projects <ChevronRight className="w-4 h-4" />
        </button>

        {/* Pagination Dots */}
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

      {/* Project Inquiry Modal for Ongoing Projects Carousel */}
      <ProjectInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        project={selectedInquiryProject}
        theme={theme}
      />
    </section>
  );
};

