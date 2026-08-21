import React, { useState } from 'react';
import { REDEVELOPMENT_PROCESS } from '../../data/redevelopment';

export const RedevelopmentProcess: React.FC = () => {
  const [showAllProcess, setShowAllProcess] = useState(false);

  return (
    <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full mt-12 pb-12">
      <div className="w-full space-y-12">
        
        {/* Header Block: Centered Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#C5A059] tracking-wide">
            Redevelopment Process
          </h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {REDEVELOPMENT_PROCESS.slice(0, showAllProcess ? REDEVELOPMENT_PROCESS.length : 3).map((item) => (
            <div
              key={item.num}
              className="relative bg-[#F5EFE6] dark:bg-neutral-900/60 p-8 sm:p-10 flex flex-col justify-start items-start text-left min-h-[385px] overflow-hidden shadow-sm group"
            >
              {/* Giant background number positioned at the top right */}
              <div className="absolute top-0 right-0 m-0 p-0 text-[8.5rem] md:text-[10rem] font-serif font-black text-white dark:text-neutral-800 leading-[0.75] select-none tracking-tighter opacity-80 pointer-events-none transition-transform duration-500 group-hover:scale-105 z-0">
                {item.num}
              </div>

              {/* Border Hover Animation Lines (Left-Down-Right-Up Draw Clockwise) */}
              {/* Top border (left to right) */}
              <span className="absolute top-0 left-0 w-full h-[2px] bg-[#C5A059] z-10 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" />
              {/* Right border (top to bottom) */}
              <span className="absolute top-0 right-0 w-[2px] h-full bg-[#C5A059] z-10 transition-transform duration-500 origin-top scale-y-0 group-hover:scale-y-100 delay-[500ms]" />
              {/* Bottom border (right to left) */}
              <span className="absolute bottom-0 right-0 w-full h-[2px] bg-[#C5A059] z-10 transition-transform duration-500 origin-right scale-x-0 group-hover:scale-x-100 delay-[1000ms]" />
              {/* Left border (bottom to top) */}
              <span className="absolute bottom-0 left-0 w-[2px] h-full bg-[#C5A059] z-10 transition-transform duration-500 origin-bottom scale-y-0 group-hover:scale-y-100 delay-[1500ms]" />

              {/* Title */}
              <h3 className="relative z-10 font-serif font-bold text-base sm:text-lg text-[#C5A059] leading-snug pr-8 mt-16 sm:mt-24">
                {item.title}
              </h3>

              {/* Divider Line */}
              <div className="relative z-10 w-20 h-[1.5px] bg-[#C5A059] mt-2 mb-2" />

              {/* Description */}
              <p className="relative z-10 font-sans font-light text-xs sm:text-[13px] md:text-[14px] leading-relaxed text-neutral-800 dark:text-neutral-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setShowAllProcess(!showAllProcess)}
            className="bg-[#C5A059] hover:bg-[#B08F4C] text-white font-sans text-xs font-bold uppercase tracking-wider px-8 py-3.5 transition-all duration-300 cursor-pointer flex items-center gap-2 active:scale-95 shadow-md"
          >
            {showAllProcess ? 'View Less' : 'View All'}
            {showAllProcess ? (
              <svg className="w-3.5 h-3.5 transform rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </button>
        </div>

      </div>
    </section>
  );
};
