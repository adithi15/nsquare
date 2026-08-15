import React from 'react';
import { ThemeMode } from '../../types';
import { motion } from 'framer-motion';
import { ABOUT } from '../../data/nsquare';

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

      {/* 3. FOUNDERS SECTION — EXACT BROCHURE REPLICA */}
      <section className={`relative w-full py-12 md:py-16 px-4 sm:px-6 lg:px-12 overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-[#0A0A0A]' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          
          {/* Row 1: Mr. Anil Ravriya (Aligned to Left Content Margin) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6 sm:gap-8 lg:gap-10 max-w-4xl"
          >
            {/* Left: Photo with Offset Gold Backdrop Square */}
            <div className="relative shrink-0 pt-3 pl-3">
              {/* Gold Offset Accent Block */}
              <div className="absolute top-0 left-0 w-14 h-14 sm:w-16 sm:h-16 bg-[#c2a26c] z-0" />
              
              {/* Portrait Photo */}
              <div className="relative z-10 w-52 sm:w-60 md:w-64 aspect-[4/4.7] bg-neutral-900 overflow-hidden shadow-md">
                <img
                  src="/assets/branding/director-anil.png"
                  alt="Mr. Anil Ravriya"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right: Founder Content (Matched 1:1 to Photo Height) */}
            <div className="flex-1 flex flex-col justify-between text-left py-0.5 max-w-xl">
              {/* Top: Headline */}
              <div>
                <h2 className={`text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-serif font-normal leading-[0.96] tracking-wide ${
                  theme === 'dark' ? 'text-[#dcd7cf]' : 'text-neutral-900'
                }`}>
                  Leadership That<br />Builds Lasting Value
                </h2>

                {/* Subtitle */}
                <p className="text-xs sm:text-[13px] font-semibold text-[#c2a26c] tracking-wide mt-3">
                  Mr. Anil Ravriya - Founder & Director
                </p>

                {/* Quote */}
                <p className={`italic text-[11px] sm:text-[11.5px] leading-relaxed mt-1 ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  "Success isn't just about delivering projects; it's about building enduring value for our clients, partners, and communities."
                </p>
              </div>

              {/* Bottom: Bio Paragraphs */}
              <div className={`text-[11px] sm:text-[11.5px] leading-[1.55] font-light space-y-2 mt-2 ${
                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                <p>
                  As Director of NSQUARE, Anil Ravriya brings a clear vision rooted in operational excellence, innovation, and long-term value creation. His leadership combines disciplined execution with a forward-thinking approach, ensuring that every project meets the highest standards of quality and integrity.
                </p>
                <p>
                  With a strong emphasis on quality execution, ethical practices, and continuous innovation, Mr. Ravriya continues to shape NSQUARE's growth while upholding the values, trust, and legacy that define the brand.
                </p>
              </div>
            </div>
          </motion.div>


          {/* Row 2: Mr. Jignesh Patel (Motif Starts at Left Margin -> Touches Photo -> Text on Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col lg:flex-row items-center lg:items-stretch gap-0 lg:gap-8 w-full"
          >
            {/* Left Group: Motif sticking directly against the Photo */}
            <div className="relative flex items-center shrink-0">
              {/* Exact Geometric Motif attached to the left of photo */}
              <div className="hidden lg:flex items-center justify-end shrink-0 w-80 lg:w-[380px] xl:w-[460px] select-none pointer-events-none -mr-1 relative z-0">
                <img
                  src="/assets/branding/nsquare-geometric-motif.png"
                  alt="N-Square Geometric Motif"
                  className="w-full h-auto object-contain opacity-90 translate-y-1"
                />
              </div>

              {/* Photo with Offset Gold Backdrop Square */}
              <div className="relative shrink-0 pt-3 pl-3 z-10">
                {/* Gold Offset Accent Block */}
                <div className="absolute top-0 left-0 w-14 h-14 sm:w-16 sm:h-16 bg-[#c2a26c] z-0" />
                
                {/* Portrait Photo */}
                <div className="relative z-10 w-52 sm:w-60 md:w-64 aspect-[4/4.7] bg-neutral-900 overflow-hidden shadow-md">
                  <img
                    src="/assets/branding/director-jignesh.png"
                    alt="Mr. Jignesh Patel"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Right: Founder Content (Matched 1:1 to Photo Height) */}
            <div className="flex-1 flex flex-col justify-between text-left py-0.5 max-w-xl">
              {/* Top: Headline */}
              <div>
                <h2 className={`text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-serif font-normal leading-[0.96] tracking-wide ${
                  theme === 'dark' ? 'text-[#dcd7cf]' : 'text-neutral-900'
                }`}>
                  Vision & Execution<br />Combined
                </h2>

                {/* Subtitle */}
                <p className="text-xs sm:text-[13px] font-semibold text-[#c2a26c] tracking-wide mt-3">
                  Mr. Jignesh Patel - Founder & Director
                </p>

                {/* Quote */}
                <p className={`italic text-[11px] sm:text-[11.5px] leading-relaxed mt-1 ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  "Success isn't just about delivering projects; it's about building enduring value for our clients, partners, and communities."
                </p>
              </div>

              {/* Bottom: Bio Paragraphs */}
              <div className={`text-[11px] sm:text-[11.5px] leading-[1.55] font-light space-y-2 mt-2 ${
                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                <p>
                  As Director of NSQUARE, Jignesh Patel brings a clear vision rooted in operational excellence, innovation, and long-term value creation. His leadership combines disciplined execution with a forward-thinking approach, ensuring that every project meets the highest standards of quality and integrity.
                </p>
                <p>
                  With a strong emphasis on quality execution, ethical practices, and continuous innovation, Mr. Patel continues to shape NSQUARE's growth while upholding the values, trust, and legacy that define the brand.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};
