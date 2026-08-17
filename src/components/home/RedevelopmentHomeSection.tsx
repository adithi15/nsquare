import React from 'react';
import { motion } from 'framer-motion';
import { ThemeMode } from '../../types';
import { Quote } from 'lucide-react';

interface RedevelopmentHomeSectionProps {
  theme: ThemeMode;
  onNavigateToRedevelopment: () => void;
}

export const RedevelopmentHomeSection: React.FC<RedevelopmentHomeSectionProps> = ({
  onNavigateToRedevelopment,
}) => {
  return (
    <section className="w-full bg-[#f5e6d3] pt-0 pb-8 sm:pb-12 relative overflow-hidden">
      {/* 1. Giant Top Background Watermark Image "REDEVELOPMENT" */}
      <div className="hidden sm:block w-full text-center overflow-hidden m-0 px-6 sm:px-10 lg:px-14 pointer-events-none select-none">
        <img
          src="/assets/branding/redevelopment-watermark.png"
          alt="REDEVELOPMENT Watermark"
          className="mx-auto h-[48px] sm:h-[72px] md:h-[110px] lg:h-[145px] xl:h-[165px] object-contain select-none pointer-events-none -mt-0.5 sm:-mt-1.5 md:-mt-3 lg:-mt-4 xl:-mt-5"
        />
      </div>

      {/* 2. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 mt-20 sm:mt-36 lg:mt-44">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Quote with giant quotation mark, text and button */}
          <div className="lg:col-span-5 relative z-10 text-left">
            {/* Giant Quotation Mark Watermark - PNG image replacing SVG */}
            <div className="absolute -top-[72px] sm:-top-[100px] -left-[35px] sm:-left-[50px] w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] pointer-events-none -z-10 hidden sm:block">
              <img
                src="/assets/branding/quote-marks.png"
                alt="Quotation Marks"
                className="w-full h-full object-contain select-none pointer-events-none"
              />
            </div>

            {/* Headline Quote in bold serif all caps */}
            <h2 className="text-neutral-900 font-serif font-bold text-2xl sm:text-3xl lg:text-[30px] leading-[1.25] tracking-tight uppercase mb-4">
              &quot;WHERE QUALITY IS A JOURNEY <br className="hidden sm:inline" />AND NOT THE DESTINATION&quot;
            </h2>

            {/* Subtitle */}
            <h3 className="font-sans font-black text-[20px] sm:text-[22px] text-neutral-900 mt-8 mb-2">
              Redevelopment
            </h3>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-neutral-800 text-[15px] sm:text-[16px] font-sans font-normal leading-relaxed mb-8 max-w-lg">
              <p>
                Redevelopment at N-Square is a carefully planned process that transforms aging structures into modern, safe, and future-ready developments.
              </p>
              <p>
                We work closely with societies, stakeholders, and authorities to deliver redevelopment solutions that enhance lifestyle value while maintaining transparency and trust throughout the journey.
              </p>
            </div>

            {/* CTA Button with Chevron */}
            <button
              onClick={onNavigateToRedevelopment}
              className="bg-[#C5A059] hover:bg-[#B38D48] text-white font-sans text-[22px] sm:text-[24px] font-normal py-2 px-4 transition-all duration-300 inline-flex items-center gap-4 w-fit shadow-md rounded-none cursor-pointer"
            >
              <span>Explore Redevelopment Services</span>
              <span className="text-2xl font-normal">&gt;</span>
            </button>
          </div>

          {/* Right Column: Exact scale model photograph */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end lg:-mr-16 xl:-mr-24">
            <div className="w-full max-w-[740px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
              <img
                src="/assets/img/redevelopment-planning-model.jpg"
                alt="Old Building Existing Structure to New Development Planned Structure Redevelopment Planning"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section >
  );
};

