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

export const LegacySection: React.FC<LegacySectionProps> = ({ theme = 'light' }) => {
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

      </section>

      {/* 2. OVERLAPPING BEIGE HERO INTRO CARD */}
      <section className="relative z-20 px-6 md:px-16 max-w-6xl mx-auto w-full -mt-40 md:-mt-52">
        <div className="bg-[#f4e3ca] p-10 md:p-14 shadow-2xl border border-neutral-300/60 text-center space-y-5">
          <div className="flex items-center gap-4 md:gap-6">
            <span className="hidden sm:block h-[2px] flex-1 bg-[#c2a26c]/70" />
            <h1 className="text-3xl md:text-5xl font-serif text-neutral-900 leading-snug tracking-wide text-center">
              {ABOUT.heading}
            </h1>
            <span className="hidden sm:block h-[2px] flex-1 bg-[#c2a26c]/70" />
          </div>
          <p className="text-sm md:text-base text-neutral-700 font-light leading-relaxed max-w-4xl mx-auto">
            {ABOUT.body1}
          </p>
          <p className="text-sm md:text-base text-neutral-700 font-light leading-relaxed max-w-4xl mx-auto">
            {ABOUT.body2}
          </p>
          {/* @ts-ignore */}
          {ABOUT.body3 && (
            <p className="text-sm md:text-base text-neutral-700 font-light leading-relaxed max-w-4xl mx-auto">
              {/* @ts-ignore */}
              {ABOUT.body3}
            </p>
          )}
          {/* @ts-ignore */}
          {ABOUT.body4 && (
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] font-semibold text-[#c2a26c] border-t border-neutral-300/40 pt-4 max-w-4xl mx-auto mt-5">
              {/* @ts-ignore */}
              {ABOUT.body4}
            </p>
          )}
        </div>
      </section>

      {/* 3. FOUNDERS SECTION */}
      <section className={`relative w-full pt-20 pb-24 px-6 md:px-20 mt-16 overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-[#0C0C0C]' : 'bg-white'
      }`}>
        {/* Side Label */}
        <SideLabel text="THE FOUNDERS" className={theme === 'dark' ? 'text-white/60' : 'text-neutral-400'} />

        <div className="relative z-10 max-w-6xl mx-auto pl-4 lg:pl-10 space-y-16 md:space-y-24">
          
          {/* Row 1: Mr. Anil Ravriya */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left: Image Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="md:col-span-4 relative group"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#c2a26c]/40 z-0 pointer-events-none" />
              <div className="relative aspect-square w-full bg-neutral-900 border border-white/10 z-10 overflow-hidden shadow-xl">
                <img
                  src="/assets/branding/director-anil.png"
                  alt="Mr. Anil Ravriya"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-[#c2a26c] z-20 pointer-events-none" />
            </motion.div>

            {/* Right: Text Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`md:col-span-8 p-8 md:p-10 shadow-lg border flex flex-col justify-center min-h-[300px] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-[#161512] to-[#0F0E0C] border-[#C5A059]/20' 
                  : 'bg-[#FDF3E7] border-neutral-300/40'
              }`}
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className={`text-lg md:text-xl font-serif font-bold tracking-wide ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-950'
                  }`}>
                    Leadership That Builds Lasting Value
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#c2a26c] font-medium">
                    Mr. Anil Ravriya · Founder & Director
                  </p>
                </div>
                
                <p className={`font-serif italic text-xs md:text-sm leading-relaxed border-l-2 border-[#c2a26c] pl-4 ${
                  theme === 'dark' ? 'text-[#C5A059]' : 'text-[#8c7445]'
                }`}>
                  "Success isn't just about delivering projects; it's about building enduring value for our clients, partners, and communities."
                </p>

                <div className={`text-xs md:text-[13px] leading-relaxed font-light space-y-3 ${
                  theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  <p>
                    As Director of <strong className="font-semibold">NSQUARE</strong>, <strong className="font-semibold text-[#c2a26c]">Anil Ravriya</strong> brings a clear vision rooted in operational excellence, innovation, and long-term value creation. His leadership combines disciplined execution with a forward-thinking approach, ensuring that every project meets the highest standards of quality and integrity.
                  </p>
                  <p>
                    With a strong emphasis on <strong className="font-semibold">quality execution, ethical practices, and continuous innovation</strong>, Mr. Ravriya continues to shape NSQUARE's growth while upholding the values, trust, and legacy that define the brand.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Mr. Jignesh Patel */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left: Text Card (Desktop: left, Mobile: bottom) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`order-last md:order-first md:col-span-8 p-8 md:p-10 shadow-lg border flex flex-col justify-center min-h-[300px] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-[#161512] to-[#0F0E0C] border-[#C5A059]/20' 
                  : 'bg-[#FDF3E7] border-neutral-300/40'
              }`}
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className={`text-lg md:text-xl font-serif font-bold tracking-wide ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-950'
                  }`}>
                    Vision & Execution Combined
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#c2a26c] font-medium">
                    Mr. Jignesh Patel · Founder & Director
                  </p>
                </div>

                <p className={`font-serif italic text-xs md:text-sm leading-relaxed border-l-2 border-[#c2a26c] pl-4 ${
                  theme === 'dark' ? 'text-[#C5A059]' : 'text-[#8c7445]'
                }`}>
                  "True leadership is built on trust, consistency, and getting things done right."
                </p>

                <div className={`text-xs md:text-[13px] leading-relaxed font-light space-y-3 ${
                  theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  <p>
                    As Director of Namastey, <strong className="font-semibold text-[#c2a26c]">Jignesh Patel</strong> brings a strategic vision and hands-on approach to leadership, with a strong focus on <strong className="font-semibold">quality, operational excellence, and long-term value creation</strong>. His practical, results-driven mindset combines disciplined execution with a commitment to building lasting relationships with clients, partners, and stakeholders.
                  </p>
                  <p>
                    Under his leadership, Namastey continues to grow with confidence while staying rooted in <strong className="font-semibold">integrity, reliability, and quality</strong>.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Image Card (Desktop: right, Mobile: top) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="order-first md:order-last md:col-span-4 relative group"
            >
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#c2a26c]/40 z-0 pointer-events-none" />
              <div className="relative aspect-square w-full bg-neutral-900 border border-white/10 z-10 overflow-hidden shadow-xl">
                <img
                  src="/assets/branding/director-jignesh.png"
                  alt="Mr. Jignesh Patel"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-[#c2a26c] z-20 pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* 5. VISION · MISSION · BELIEF SECTION */}
      <section className="relative w-full py-24 px-6 md:px-20 overflow-hidden bg-[#0C0C0C]">
        
        {/* Architectural Background Watermark */}
        <div className="absolute right-4 top-1/4 text-[12vw] font-serif font-bold text-white/[0.012] select-none pointer-events-none uppercase tracking-[0.18em] z-0 leading-none">
          Legacy
        </div>

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
              <p className="text-xs text-white/75 font-light leading-relaxed">
                To be a premier real estate brand admired as an industry leader—celebrated for creating thoughtfully designed, high-quality, and innovative life-spaces. We aspire to set benchmark standards in customer-centricity and people-first practices, while nurturing enduring, trust-based relationships with all our stakeholders.
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
              <p className="text-xs text-white/75 font-light leading-relaxed">
                To engineer superior living spaces rooted in quality, built on trust, and designed for generations to come. To craft modern, sustainable environments where communities thrive and lifelong value is built.
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
