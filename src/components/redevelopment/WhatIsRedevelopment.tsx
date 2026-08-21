import React from 'react';

interface WhatIsRedevelopmentProps {
  isDark: boolean;
}

export const WhatIsRedevelopment: React.FC<WhatIsRedevelopmentProps> = ({ isDark }) => {
  return (
    <section className={`relative w-full py-6 md:py-8 overflow-hidden transition-colors duration-500 !mt-0 ${isDark ? 'bg-neutral-900/30 border-y border-white/5' : 'bg-[#f3e4cf] border-y border-neutral-300/20'
      }`}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        {/* Left Column: What is Redevelopment */}
        <div className="lg:col-span-5 flex flex-col space-y-4 text-left">
          <h2 className="text-6xl md:text-[2.6rem] font-serif font-bold text-[#C5A059] leading-[1]  tracking-wide">
            What is <br /> Redevelopment?
          </h2>
          <p className={`text-sm sm:text-base md:text-lg lg:text-[19px] leading-relaxed lg:leading-[1.4] font-light text-justify max-w-[460px] ${isDark ? 'text-neutral-400' : 'text-neutral-700'
            }`}>
            Redevelopment offers an effective solution for housing societies, where existing buildings have become old, unsafe, uninhabitable, or lack modern facilities. It involves replacing ageing structures with thoughtfully planned, contemporary buildings designed for improved functionality and comfort. Society redevelopment provides residents with enhanced living spaces, modern amenities, better infrastructure, and an overall improved <span className="whitespace-nowrap">quality of life.</span>
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-7 w-full flex justify-center">
          <div className="relative w-full max-w-[650px] flex items-center justify-center">
            <img
              src="/assets/branding/what-is-redevelopment.png"
              alt="What is Redevelopment"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
