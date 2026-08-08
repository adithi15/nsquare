import React from 'react';
import { ThemeMode } from '../../types';
import { motion } from 'framer-motion';
import { Eye, Target, Sparkles } from 'lucide-react';
import { ABOUT, DIRECTORS } from '../../data/nsquare';

interface LegacySectionProps {
  theme?: ThemeMode;
  onOpenVisitModal?: () => void;
}

// Side Label Helper Component - Fixed positioning to align directly on screen margin
const SideLabel = ({ text, className = "text-neutral-400" }: { text: string; className?: string }) => (
  <div className="hidden lg:block absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
    <span className={`block [writing-mode:vertical-lr] rotate-180 text-[10px] uppercase tracking-[0.3em] font-light whitespace-nowrap ${className}`}>
      {text}
    </span>
  </div>
);

export const LegacySection: React.FC<LegacySectionProps> = () => {
  return (
    <div className="w-full bg-[#f4efe6] text-neutral-800 font-sans pb-20">

      {/* 1. HERO BANNER WITH BACKGROUND IMAGE */}
      <section className="relative w-full h-[60vh] min-h-[480px] max-h-[580px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/branding/city-aerial.jpg"
            alt="Navi Mumbai Skyline"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />
        </div>

        {/* Side Label */}
        <SideLabel text="ABOUT N-SQUARE" className="text-white/50" />

        <span className="absolute bottom-4 right-6 text-[9px] uppercase tracking-widest text-white/40 z-10">
          Images For Representation Purpose Only
        </span>
      </section>

      {/* 2. OVERLAPPING BEIGE HERO INTRO CARD */}
      <section className="relative z-20 px-6 md:px-16 max-w-6xl mx-auto w-full -mt-40 md:-mt-52">
        <div className="bg-[#f4e3ca] p-10 md:p-14 shadow-2xl border border-neutral-300/60 text-left space-y-5">
          <div className="flex items-center gap-4 md:gap-6">
            <span className="hidden sm:block h-[2px] flex-1 bg-[#c2a26c]/70" />
            <h1 className="text-3xl md:text-5xl font-serif text-neutral-900 leading-snug tracking-wide text-center">
              {ABOUT.heading}
            </h1>
            <span className="hidden sm:block h-[2px] flex-1 bg-[#c2a26c]/70" />
          </div>
          <p className="text-sm md:text-base text-neutral-700 font-light leading-relaxed max-w-4xl">
            {ABOUT.body1}
          </p>
          <p className="text-sm md:text-base text-neutral-700 font-light leading-relaxed max-w-4xl">
            {ABOUT.body2}
          </p>
        </div>
      </section>

      {/* 3. FOUNDERS SECTION */}
      <section className="relative w-full pt-20 pb-20 px-6 md:px-20 mt-16 overflow-hidden bg-[#0C0C0C]">
        {/* Side Label */}
        <SideLabel text="THE FOUNDERS" className="text-white/60" />

        <div className="relative z-10 max-w-6xl mx-auto pl-4 lg:pl-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12 text-white">
            <div className="md:col-span-5 space-y-2">
              <h2 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                The Visionaries Behind<br />
                N-Square’s Growing Legacy
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-xs md:text-[13px] text-white/80 font-light leading-relaxed">
                N-Square Developers is the coming together of two trusted legacies — Neelkanth Group and Namastey Realty. Led by founders with over two decades of on-ground experience, the company has grown into a name synonymous with quality-first development across Navi Mumbai.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {DIRECTORS.map((leader, idx) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="space-y-4"
              >
                <div className="relative aspect-[4/4.2] w-full bg-neutral-900 border border-white/20">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute -top-5 -right-5 w-14 h-14 border-t-8 border-r-8 border-[#c2a26c]" />
                </div>

                <div className="text-white space-y-1.5 pt-1">
                  <h3 className="text-sm font-medium tracking-wide">
                    {leader.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-[#c2a26c]">
                    {leader.role}
                  </p>
                  <p className="text-[11px] text-white/70 font-light leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VISION · MISSION · BELIEF SECTION */}
      <section className="relative w-full py-24 px-6 md:px-20 overflow-hidden bg-[#0C0C0C]">

        {/* Side Label */}
        <SideLabel text="VISION · MISSION · BELIEF" className="text-white/60" />

        <div className="relative z-10 max-w-6xl mx-auto pl-4 lg:pl-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-serif text-[#c8a165]">
                The Pillars That Determine Our Progress
              </h2>
              <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#c2a26c] to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-black/50 backdrop-blur-md p-8 text-center border border-white/10 flex flex-col items-center transition-all duration-500 hover:-translate-y-1.5 hover:border-[#c2a26c]/50">
              <span className="absolute top-0 left-0 h-[2px] w-0 bg-[#c2a26c] transition-all duration-300 ease-out group-hover:w-full" />
              <span className="absolute top-0 right-0 w-[2px] h-0 bg-[#c2a26c] transition-all duration-300 ease-out group-hover:h-full group-hover:delay-300" />
              <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#c2a26c] transition-all duration-300 ease-out group-hover:w-full group-hover:delay-600" />
              <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#c2a26c] transition-all duration-300 ease-out group-hover:h-full group-hover:delay-900" />
              <div className="w-16 h-16 rounded-full bg-neutral-900/80 border border-[#c2a26c] flex items-center justify-center text-[#c2a26c] mb-6 transition-transform duration-500 group-hover:scale-110">
                <Eye className="w-7 h-7" strokeWidth={1.2} />
              </div>
              <h3 className="text-lg font-serif text-white mb-3">Our Vision</h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                To establish itself as a thought leader across all verticals of the real estate industry & own a name synonymous with crafting world-class assets.
              </p>
            </div>

            <div className="group relative bg-black/50 backdrop-blur-md p-8 text-center border border-white/10 flex flex-col items-center transition-all duration-500 hover:-translate-y-1.5 hover:border-[#c2a26c]/50">
              <span className="absolute top-0 left-0 h-[2px] w-0 bg-[#c2a26c] transition-all duration-300 ease-out group-hover:w-full" />
              <span className="absolute top-0 right-0 w-[2px] h-0 bg-[#c2a26c] transition-all duration-300 ease-out group-hover:h-full group-hover:delay-300" />
              <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#c2a26c] transition-all duration-300 ease-out group-hover:w-full group-hover:delay-600" />
              <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#c2a26c] transition-all duration-300 ease-out group-hover:h-full group-hover:delay-900" />
              <div className="w-16 h-16 rounded-full bg-neutral-900/80 border border-[#c2a26c] flex items-center justify-center text-[#c2a26c] mb-6 transition-transform duration-500 group-hover:scale-110">
                <Target className="w-7 h-7" strokeWidth={1.2} />
              </div>
              <h3 className="text-lg font-serif text-white mb-3">Our Mission</h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                To be a prudent, tactical and path-breaking realtor that specializes in landmark creations as an ode to the world of real estate.
              </p>
            </div>

            <div className="group relative bg-black/50 backdrop-blur-md p-8 text-center border border-white/10 flex flex-col items-center transition-all duration-500 hover:-translate-y-1.5 hover:border-[#c2a26c]/50">
              <span className="absolute top-0 left-0 h-[2px] w-0 bg-[#c2a26c] transition-all duration-300 ease-out group-hover:w-full" />
              <span className="absolute top-0 right-0 w-[2px] h-0 bg-[#c2a26c] transition-all duration-300 ease-out group-hover:h-full group-hover:delay-300" />
              <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#c2a26c] transition-all duration-300 ease-out group-hover:w-full group-hover:delay-600" />
              <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#c2a26c] transition-all duration-300 ease-out group-hover:h-full group-hover:delay-900" />
              <div className="w-16 h-16 rounded-full bg-neutral-900/80 border border-[#c2a26c] flex items-center justify-center text-[#c2a26c] mb-6 transition-transform duration-500 group-hover:scale-110">
                <Sparkles className="w-7 h-7" strokeWidth={1.2} />
              </div>
              <h3 className="text-lg font-serif text-white mb-3">Our Belief</h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Committed to innovation, creativity and sustainability, we construct landmark marvels embracing our principles and values that shape our success to deliver with zero compromises on quality, standardization and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
