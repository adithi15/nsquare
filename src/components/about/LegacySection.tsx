import React from 'react';
import { ThemeMode } from '../../types';
import { motion } from 'framer-motion';
import { ABOUT } from '../../data/nsquare';

interface LegacySectionProps {
  theme?: ThemeMode;
  onOpenVisitModal?: () => void;
}

export const LegacySection: React.FC<LegacySectionProps> = ({ theme = 'light' }) => {
  return (
    <div className="w-full bg-[#f4efe6] text-neutral-800 font-sans">

      {/* 1. HERO BANNER WITH BACKGROUND IMAGE */}
      <section className="relative w-full h-[75vh] min-h-[75vh] flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/branding/city-aerial.jpg"
            alt="Navi Mumbai Skyline"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Centered Overlay Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center justify-center space-y-6 md:space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className="text-3xl md:text-4xl lg:text-5.5xl font-serif leading-tight font-medium text-[#c5a059]"
          >
            Two Legacies. One Vision
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.25, ease: 'easeOut' }}
            className="space-y-4 max-w-3xl"
          >
            <p className="text-sm md:text-base lg:text-lg text-neutral-200 leading-relaxed font-light">
              N-Square Developers brings together the trusted legacy of Neelkanth Group and Namastey<br />
              Realty, with over 23 years of combined experience in Navi Mumbai,
            </p>
            <p className="text-sm md:text-base lg:text-lg text-neutral-200 leading-relaxed font-light">
              Driven by quality, transparency, and thoughtful design, we create premium residential and<br />
              commercial spaces built to deliver lasting value.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-neutral-200 leading-relaxed font-light">
              Built on Trust. Defined by Excellence. Designed for Generations.
            </p>
          </motion.div>
        </div>

        {/* Bottom-Left Graphic Overlay - matches homepage slider style */}
        <div className="absolute bottom-0 left-0 z-20 px-6 sm:px-12 md:px-20 mb-16 sm:mb-14 pointer-events-none select-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[220px] sm:max-w-[300px] md:max-w-[360px]"
          >
            <img
              src="/assets/branding/ideas-to-legacy.png"
              alt="Where Ideas become legacy"
              className="w-full h-auto object-contain bg-transparent"
            />
          </motion.div>
        </div>
      </section>



      {/* 3. FOUNDERS SECTION — EXACT BROCHURE REPLICA */}
      <section className={`relative w-full pt-16 pb-12 md:pt-24 md:pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0A0A0A] text-white' : 'bg-[#f3e4cf] text-neutral-900'}`}>

        {/* N Logo Geometric Motif - Left Edge */}
        <img
          src="/assets/branding/nsquare-geometric-motif-pattern.png"
          alt=""
          className="absolute left-0 top-0 bottom-0 w-[30%] h-full m-0 p-0 z-0 pointer-events-none object-contain"
          style={{ objectPosition: 'left top' }}
        />



        <div className="relative z-10 max-w-7xl mx-auto space-y-12 md:space-y-16">

          {/* Row 1: Mr. Anil Ravriya */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16 w-full relative z-10"
          >
            {/* Left: Photo column (6 cols - 50% split) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end z-10 w-full pr-0 lg:pr-4">
              <div className="relative w-56 sm:w-72 md:w-80 lg:w-full lg:max-w-[340px] aspect-[4/4.7] bg-neutral-900 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-neutral-300/20">
                <img
                  src="/assets/branding/director-anil-new.jpg"
                  alt="Mr. Anil Ravriya"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right: Content column (6 cols - 50% split) */}
            <div className="lg:col-span-6 text-left w-full py-2 z-10 lg:pl-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-semibold leading-none text-[#c2a26c] tracking-wide">
                Mr. Anil Ravriya
              </h2>
              <p className={`text-[18px] sm:text-xl  tracking-wide mt-0 ${theme === 'dark' ? 'text-neutral-300' : 'text-black/80'}`}>Founder & Director</p>
              <div className={`space-y-4 mt-6 text-lg sm:text-xl ${theme === 'dark' ? 'text-neutral-300' : 'text-black/80'}`}>
                <p className="font-sans not-italic leading-[1.2] text-justify">
                  “Success isn’t just about delivering projects; it’s about building enduring value for our clients, partners, and communities.”
                </p>
                <p className="leading-[1.2] tracking-wide text-justify">
                  As Director of NSQUARE, Anil Ravriya brings a clear vision rooted in operational excellence, innovation, and long‑term value creation. His leadership combines disciplined execution with a forward‑thinking approach, ensuring that every project meets the highest standards of quality and integrity.
                </p>
                <p className="leading-[1.2] tracking-wide text-justify">
                  With a strong emphasis on quality execution, ethical practices, and continuous innovation, Mr. Ravriya continues to shape NSQUARE’s growth while upholding the values, trust, and legacy that define the brand.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};
