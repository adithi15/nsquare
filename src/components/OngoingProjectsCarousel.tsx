import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Building2 } from 'lucide-react';
import { ThemeMode } from '../types';

interface OngoingProject {
  title: string;
  location: string;
  image: string;
}

interface OngoingProjectsCarouselProps {
  theme?: ThemeMode;
}

const ONGOING_ITEMS: OngoingProject[] = [
  {
    title: 'Platinum Oakwoods',
    location: 'Seawoods, Navi Mumbai',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Platinum Sicily',
    location: 'Nerul, Navi Mumbai (Redevelopment)',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Platinum Parksyde',
    location: 'Kharghar, Navi Mumbai',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Platinum Elysium',
    location: 'Nerul, Navi Mumbai',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Platinum Esquire',
    location: 'Ulwe, Navi Mumbai',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Platinum The Reserve',
    location: 'Kharghar, Navi Mumbai',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Platinum Mansionz',
    location: 'Seawoods, Navi Mumbai',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Platinum Westwoods',
    location: 'Seawoods, Navi Mumbai',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
  },
];

export const OngoingProjectsCarousel: React.FC<OngoingProjectsCarouselProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = ONGOING_ITEMS.length - 2;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4200);

    return () => window.clearInterval(timer);
  }, [maxIndex]);

  const totalDots = 4;
  const activeDotIndex = Math.min(totalDots - 1, Math.floor((currentIndex / maxIndex) * totalDots));

  const handleDotClick = (dotIdx: number) => {
    const targetIndex = Math.round((dotIdx / (totalDots - 1)) * maxIndex);
    setCurrentIndex(targetIndex);
  };

  return (
    <section className="w-full bg-[#111213] text-white pt-20 pb-14 relative overflow-hidden border-t border-[#2b2316]">
      <div className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20">
        <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.35em] text-[10px] font-semibold text-[#b49e69] whitespace-nowrap">
          ONGOING PROJECTS
        </span>
      </div>

      <div className="max-w-[1380px] mx-auto pl-12 sm:pl-16 lg:pl-24 pr-6 sm:pr-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-5">
          <div className="border border-[#3c3220] p-10 bg-[#141517] shadow-[0_28px_100px_rgba(0,0,0,0.28)] rounded-[2rem]">
            <div className="w-14 h-14 rounded-full bg-[#1b1c1e] border border-[#4d422d] flex items-center justify-center">
              <Building2 className="w-7 h-7 text-[#d4c28b]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif leading-[1.1] font-semibold text-white tracking-tight mt-7">
              Beautifying Skylines<br />
              Of The Future With<br />
              Excellence
            </h2>
            <p className="text-[12px] sm:text-[13px] text-[#cdc09b] leading-[1.85] mt-5 max-w-[16rem]">
              Our diverse range of ongoing projects exemplifies our commitment to exceptional construction standards and elegant design.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-5 items-stretch">
              <div className="w-[68%] min-w-0 overflow-hidden">
                <motion.div
                  animate={{ x: `calc(-${currentIndex} * (50% + 20px))` }}
                  transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
                  className="flex gap-5 w-full"
                >
                  {ONGOING_ITEMS.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 24, y: 12 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -6, scale: 1.01 }}
                      className="w-[calc(50%-10px)] flex flex-col bg-white overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.14)] group cursor-pointer shrink-0 border border-[#e6d7b7] rounded-[1.5rem]"
                    >
                      <div className="relative aspect-[1/1] w-full overflow-hidden bg-neutral-900">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5 bg-white text-[#111]">
                        <h3 className="text-lg font-serif font-semibold text-[#111]">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-[#6b6555] mt-2 font-medium">
                          {item.location}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className="flex-1 min-w-[240px] relative overflow-hidden bg-[#f7f2e7] border border-[#e7d7b8] rounded-[1.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.12)] flex flex-col justify-center items-center text-center p-7">
                <img
                  src="https://source.unsplash.com/random/850x1000?office,architecture"
                  alt="View All Projects"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-white/90" />
                <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#4d4232] leading-tight">
                    VIEW<br />ALL PROJECTS
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[#bda56e] text-white flex items-center justify-center shadow-lg">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 pt-6 pr-4">
              {[0, 1, 2, 3].map((dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => handleDotClick(dotIdx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeDotIndex === dotIdx ? 'bg-[#b79f6b] scale-125' : 'bg-[#d6c99e]/70 hover:bg-[#bbac7c]'
                  }`}
                  aria-label={`Go to section ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
