import React from 'react';

interface WhatIsRedevelopmentProps {
  isDark: boolean;
}

export const WhatIsRedevelopment: React.FC<WhatIsRedevelopmentProps> = ({ isDark }) => {
  return (
    <section className={`relative w-full py-10 md:py-16 overflow-hidden transition-colors duration-500 !mt-0 ${isDark ? 'bg-neutral-900/30 border-y border-white/5' : 'bg-[#f3e4cf] border-y border-neutral-300/20'
      }`}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        {/* Left Column: What is Redevelopment */}
        <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
          <h2 className="text-6xl md:text-[2.6rem] font-serif font-bold text-[#C5A059] leading-[1]  tracking-wide">
            What is <br /> Redevelopment
          </h2>
          <p className={`text-sm sm:text-base md:text-lg lg:text-[19px] leading-relaxed lg:leading-[1.3] font-light ${isDark ? 'text-neutral-400' : 'text-neutral-700'
            }`}>
            Redevelopment offers an effective solution <br className="hidden sm:block" />
            for housing societies, where existing <br className="hidden sm:block" />
            buildings have become old, unsafe, <br className="hidden sm:block" />
            uninhabitable, or lack modern facilities. It <br className="hidden sm:block" />
            involves replacing ageing structures with <br className="hidden sm:block" />
            thoughtfully planned, contemporary <br className="hidden sm:block" />
            buildings designed for improved functionality <br className="hidden sm:block" />
            and comfort. Society redevelopment <br className="hidden sm:block" />
            provides residents with enhanced living <br className="hidden sm:block" />
            spaces, modern amenities, better <br className="hidden sm:block" />
            infrastructure, and an overall improved <br className="hidden sm:block" />
            quality of life.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-7 w-full flex justify-center">
          <div className="relative w-full aspect-[4/3] max-w-[650px] bg-white dark:bg-neutral-800 shadow-xl overflow-hidden border border-neutral-300/10 dark:border-white/5">
            <img
              src="/assets/branding/city-aerial.jpg"
              alt="Navi Mumbai Skyline"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
