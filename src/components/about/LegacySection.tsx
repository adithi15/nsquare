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
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center justify-center space-y-4 md:space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[480px] mx-auto flex justify-center"
          >
            <img 
              src="/assets/branding/two-legacies.png" 
              alt="Two Legacies. One Vision" 
              className="w-full h-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.25, ease: 'easeOut' }}
            className="space-y-1 max-w-3xl"
          >
            <p className="text-sm md:text-base lg:text-lg text-neutral-200 leading-snug font-light">
              N-Square Developers brings together the trusted legacy of Neelkanth Group and Namastey<br />
              Realty, with over 23 years of combined experience in Navi Mumbai,
            </p>

            <p className="text-xs sm:text-sm md:text-base text-neutral-200 leading-snug font-light">
              Built on Trust. Defined by Excellence. Designed for Generations.
            </p>
          </motion.div>
        </div>

      </section>



      {/* 3. FOUNDERS SECTION — EXACT BROCHURE REPLICA */}
      <section className={`relative w-full pt-16 pb-12 md:pt-24 md:pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0A0A0A] text-white' : 'bg-[#f3e4cf] text-neutral-900'}`}>

        {/* N Logo Geometric Motif - Left Edge */}
        <div
          className="absolute left-0 -top-[7.5%] h-[115%] w-[65%] m-0 p-0 z-0 pointer-events-none select-none opacity-80"
          style={{
            backgroundColor: theme === 'dark' ? '#ffffff' : '#FAF9F5',
            WebkitMaskImage: "url('/assets/branding/nsquare-geometric-motif-pattern.png')",
            maskImage: "url('/assets/branding/nsquare-geometric-motif-pattern.png')",
            WebkitMaskSize: 'auto 100%',
            maskSize: 'auto 100%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'left center',
            maskPosition: 'left center',
          }}
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
                <p className="font-sans not-italic leading-[1.2] text-justify max-w-[480px]">
                  “Success isn’t just about delivering projects; it’s about creating lasting value.”
                </p>
                <p className="leading-[1.3] tracking-wide text-justify max-w-[480px]">
                  As Director of NSQUARE, Anil Ravriya leads with a vision focused on excellence, innovation, and integrity. Committed to quality execution and ethical practices, he continues to drive the company’s growth while strengthening the trust and legacy that define the brand. His leadership inspires progress, builds strong partnerships, and ensures every project delivers meaningful value for clients and communities.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};
