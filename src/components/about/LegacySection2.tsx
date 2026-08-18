// import React from 'react';
// import { ThemeMode } from '../../types';
// import { motion } from 'framer-motion';

// interface LegacySection2Props {
//   theme?: ThemeMode;
// }

// export const LegacySection2: React.FC<LegacySection2Props> = ({ theme = 'light' }) => {
//   return (
//     <section className={`relative w-full pt-20 pb-16 md:pt-24 md:pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0A0A0A] text-white' : 'bg-[#FAF9F5] text-neutral-900'}`}>

//       {/* N Logo Geometric Motif - Right Edge */}
//       <div
//         className="absolute right-0 top-0 bottom-0 w-[35%] h-full m-0 p-0 z-0 pointer-events-none select-none"
//         style={{
//           backgroundColor: theme === 'dark' ? '#ffffff' : '#f3e4cf',
//           opacity: theme === 'dark' ? 0.15 : 0.9,
//           WebkitMaskImage: "url('/assets/branding/nsquare-geometric-motif-pattern.png')",
//           maskImage: "url('/assets/branding/nsquare-geometric-motif-pattern.png')",
//           WebkitMaskSize: 'contain',
//           maskSize: 'contain',
//           WebkitMaskRepeat: 'no-repeat',
//           maskRepeat: 'no-repeat',
//           WebkitMaskPosition: 'left top',
//           maskPosition: 'left top',
//           transform: 'scaleX(-1)'
//         }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto">

//         {/* Mr. Jignesh Patel */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16 w-full relative z-10"
//         >
//           {/* Left: Photo column (6 cols - 50% split) */}
//           <div className="lg:col-span-6 lg:order-2 flex justify-center lg:justify-start z-10 w-full pl-0 lg:pl-8">
//             <div className="relative w-56 sm:w-72 md:w-80 lg:w-full lg:max-w-[340px] aspect-[4/4.7] bg-neutral-900 overflow-hidden shadow-2xl border border-neutral-300/20">
//               <img
//                 src="/assets/branding/director-jignesh-new.jpg"
//                 alt="Mr. Jignesh Patel"
//                 loading="lazy"
//                 decoding="async"
//                 className="w-full h-full object-cover object-top"
//               />
//             </div>
//           </div>

//           {/* Right: Content column (6 cols - 50% split) */}
//           <div className="lg:col-span-6 lg:order-1 text-left w-full pt-8 pb-2 z-10 lg:pr-24 xl:pr-32">
//             <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-semibold leading-none text-[#c2a26c] tracking-wide">
//               Mr. Jignesh Patel
//             </h2>
//             <p className={`text-lg sm:text-xl font-semibold tracking-wide mt-0 ${theme === 'dark' ? 'text-neutral-300' : 'text-black/80'
//               }`}>
//               Founder & Director
//             </p>

//             <div className={`space-y-6 mt-6 text-lg sm:text-xl ${theme === 'dark' ? 'text-neutral-300' : 'text-black/80'}`}>
//               <p className="font-sans not-italic leading-[1.2]">
//                 “True leadership is built on trust, consistency,<br /> and getting things done right.”
//               </p>
//               <p className="leading-[1.2] tracking-wide">
//                 As Director of Namastey, Jignesh Patel brings <br /> a strategic vision and hands-on approach to leadership, with a strong focus on quality, operational excellence, and long-term value creation. His practical, results-driven mindset combines disciplined execution with a <br />commitment to building lasting relationships <br />with clients, partners, and stakeholders. Under<br /> his leadership, Namastey continues to grow <br />with confidence while staying rooted in <br />integrity, reliability, and quality.
//               </p>
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };




import React from 'react';
import { ThemeMode } from '../../types';
import { motion } from 'framer-motion';

interface LegacySection2Props {
  theme?: ThemeMode;
}

export const LegacySection2: React.FC<LegacySection2Props> = ({ theme = 'light' }) => {
  return (
    <section className={`relative w-full pt-20 pb-16 md:pt-24 md:pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0A0A0A] text-white' : 'bg-[#FAF9F5] text-neutral-900'}`}>

      {/* N Logo Geometric Motif - Shifted slightly left */}
      <div
        className="absolute right-[-5%] lg:right-[4%] top-0 bottom-0 w-[48%] h-full m-0 p-0 z-0 pointer-events-none select-none"
        style={{
          backgroundColor: theme === 'dark' ? '#ffffff' : '#f3e4cf',
          opacity: theme === 'dark' ? 0.15 : 0.9,
          WebkitMaskImage: "url('/assets/branding/nsquare-geometric-motif-pattern.png')",
          maskImage: "url('/assets/branding/nsquare-geometric-motif-pattern.png')",
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'left top',
          maskPosition: 'left top',
          transform: 'scaleX(-1.2)'
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Mr. Jignesh Patel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16 w-full relative z-10"
        >
          {/* Left: Photo column (6 cols - 50% split) */}
          <div className="lg:col-span-6 lg:order-2 flex justify-center lg:justify-start z-10 w-full pl-0 lg:pl-8">
            <div className="relative w-56 sm:w-72 md:w-80 lg:w-full lg:max-w-[340px] aspect-[4/4.7] bg-neutral-900 overflow-hidden shadow-2xl border border-neutral-300/20">
              <img
                src="/assets/branding/director-jignesh-new.jpg"
                alt="Mr. Jignesh Patel"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right: Content column - Shifted more to the right */}
          <div className="lg:col-span-6 lg:order-1 text-left w-full pt-8 pb-2 z-10 lg:pl-10 xl:pl-16 lg:pr-12 xl:pr-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-semibold leading-none text-[#c2a26c] tracking-wide">
              Mr. Jignesh Patel
            </h2>
            <p className={`text-lg sm:text-xl font-semibold tracking-wide mt-0 ${theme === 'dark' ? 'text-neutral-300' : 'text-black/80'
              }`}>
              Founder & Director
            </p>

            <div className={`space-y-6 mt-6 text-lg sm:text-xl ${theme === 'dark' ? 'text-neutral-300' : 'text-black/80'}`}>
              <p className="font-sans not-italic leading-[1.2]">
                “True leadership is built on trust, consistency,<br /> and getting things done right.”
              </p>
              <p className="leading-[1.2] tracking-wide">
                As Director of Namastey, Jignesh Patel brings <br /> a strategic vision and hands-on approach to leadership, with a strong focus on quality, operational excellence, and long-term value creation. His practical, results-driven mindset combines disciplined execution with a <br />commitment to building lasting relationships <br />with clients, partners, and stakeholders. Under<br /> his leadership, Namastey continues to grow <br />with confidence while staying rooted in <br />integrity, reliability, and quality.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};