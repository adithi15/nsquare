// import React, { useEffect, useState } from 'react';
// import { ThemeMode } from '../types';
// import { motion, useInView } from 'motion/react';

// interface PlatinumWorldSectionProps {
//   theme?: ThemeMode;
// }

// interface StatItemProps {
//   icon: React.ReactNode;
//   value: number;
//   suffix?: string;
//   unit?: string;
//   sublabel: string;
// }

// const StatCounter: React.FC<StatItemProps> = ({ icon, value, suffix = '', unit = '', sublabel }) => {
//   const [count, setCount] = useState(0);
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-50px' });

//   useEffect(() => {
//     if (!isInView) return;

//     let start = 0;
//     const end = value;
//     const duration = 1800;
//     const incrementTime = 30;
//     const totalSteps = duration / incrementTime;
//     const step = (end - start) / totalSteps;

//     const timer = setInterval(() => {
//       start += step;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, incrementTime);

//     return () => clearInterval(timer);
//   }, [isInView, value]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="relative pt-6 md:pt-8 border-t border-[#b89a5b]/40 flex items-center space-x-4 sm:space-x-5"
//     >
//       {/* Circular White Icon Badge with soft shadow */}
//       <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center shrink-0">
//         {icon}
//       </div>

//       {/* Number & Suffix / Unit & Sublabel */}
//       <div>
//         <div className="flex items-baseline space-x-1">
//           <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#8a6b2d]">
//             {count}
//           </span>
//           {suffix && (
//             <sup className="text-xl font-bold text-[#8a6b2d] relative -top-3">
//               {suffix}
//             </sup>
//           )}
//           {unit && (
//             <span className="text-sm sm:text-base font-semibold text-[#8a6b2d] ml-1">
//               {unit}
//             </span>
//           )}
//         </div>
//         <div className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-normal mt-0.5 leading-snug">
//           {sublabel}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export const PlatinumWorldSection: React.FC<PlatinumWorldSectionProps> = () => {
//   return (
//     <section className="bg-[#f4e3ca] text-[#111] py-16 md:py-20 relative overflow-hidden border-t border-b border-[#e3d1b8]">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
//         <div className="grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)] gap-12 items-start">
//           {/* Vertical Left Title */}
//           <div className="hidden lg:flex items-start">
//             <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.35em] text-[10px] font-semibold text-[#8b6c44] whitespace-nowrap">
//               THE PLATINUM WORLD
//             </span>
//           </div>

//           <div className="flex-1">
//             <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-start mb-12">
//               <div>
//                 <h2 className="text-3xl sm:text-4xl md:text-[40px] font-serif text-[#111] leading-[1.12] tracking-tight max-w-3xl">
//                   Platinum Group Prides Itself For Etching A Glorious<br className="hidden sm:block" /> Presence In The Flourishing City Of Navi Mumbai
//                 </h2>
//               </div>
//               <div className="text-sm text-[#4f4f4f] leading-relaxed max-w-md">
//                 Over the years, we have attained major milestones by constantly pushing the boundaries while creating landmarks of eminence.
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//               <div className="rounded-[1.75rem] border border-[#e4d4bc] bg-white/85 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
//                 <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f1e3ce] text-[#8b6c44] mb-4">
//                   <span className="text-lg font-bold">25</span>
//                 </div>
//                 <div className="text-sm font-semibold text-[#111] mb-1">Years</div>
//                 <div className="text-xs text-[#6d6658]">Of Crafting Legacies</div>
//               </div>

//               <div className="rounded-[1.75rem] border border-[#e4d4bc] bg-white/85 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
//                 <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f1e3ce] text-[#8b6c44] mb-4">
//                   <span className="text-lg font-bold">4</span>
//                 </div>
//                 <div className="text-sm font-semibold text-[#111] mb-1">Million Sq. Ft.</div>
//                 <div className="text-xs text-[#6d6658]">Completed</div>
//               </div>

//               <div className="rounded-[1.75rem] border border-[#e4d4bc] bg-white/85 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
//                 <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f1e3ce] text-[#8b6c44] mb-4">
//                   <span className="text-lg font-bold">8</span>
//                 </div>
//                 <div className="text-sm font-semibold text-[#111] mb-1">Picturesque</div>
//                 <div className="text-xs text-[#6d6658]">Ongoing Projects</div>
//               </div>

//               <div className="rounded-[1.75rem] border border-[#e4d4bc] bg-white/85 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
//                 <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f1e3ce] text-[#8b6c44] mb-4">
//                   <span className="text-lg font-bold">3500</span><sup className="text-sm">+</sup>
//                 </div>
//                 <div className="text-sm font-semibold text-[#111] mb-1">Homes Delivered</div>
//                 <div className="text-xs text-[#6d6658]">High-quality residential delivery</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };




import React, { useEffect, useState } from 'react';
import { ThemeMode } from '../types';
import { motion, useInView } from 'framer-motion';
import { Calendar, Building2, Home, Key } from 'lucide-react';

interface PlatinumWorldSectionProps {
  theme?: ThemeMode;
}

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  unit?: string;
  sublabel: string;
}

const StatCounter: React.FC<StatItemProps> = ({ icon, value, suffix = '', unit = '', sublabel }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1800;
    const incrementTime = 30;
    const totalSteps = duration / incrementTime;
    const step = (end - start) / totalSteps;

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative pt-6 md:pt-8 border-t border-[#c2a26c]/40 flex items-center space-x-4"
    >
      {/* Circular White Icon Badge with soft shadow */}
      <div className="w-14 h-14 rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.06)] border border-neutral-100 flex items-center justify-center shrink-0 text-[#b8965f]">
        {icon}
      </div>

      {/* Number & Text Layout */}
      <div>
        <div className="flex items-baseline space-x-1">
          <span className="text-3xl sm:text-4xl font-serif font-normal text-[#b8965f]">
            {count}
          </span>
          {suffix && (
            <sup className="text-lg font-serif text-[#b8965f] relative -top-2">
              {suffix}
            </sup>
          )}
          {unit && (
            <span className="text-sm font-medium text-neutral-800 ml-1">
              {unit}
            </span>
          )}
        </div>
        <div className="text-xs text-neutral-500 font-light mt-0.5 leading-snug">
          {sublabel}
        </div>
      </div>
    </motion.div>
  );
};

export const PlatinumWorldSection: React.FC<PlatinumWorldSectionProps> = () => {
  return (
    <section className="bg-[#f4f5f8] text-neutral-800 py-16 md:py-24 relative overflow-hidden">
      
      {/* Vertical Left Title */}
      <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
        <span className="block [writing-mode:vertical-lr] rotate-180 text-[10px] uppercase tracking-[0.35em] font-light text-neutral-400 whitespace-nowrap">
          THE PLATINUM WORLD
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pl-6 lg:pl-16">
        
        {/* Top Heading Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-serif text-neutral-900 leading-[1.25] tracking-tight font-normal">
              Platinum Group Prides Itself For Etching A<br className="hidden sm:block" />
              Glorious Presence In The Flourishing City Of<br className="hidden sm:block" />
              Navi Mumbai
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs md:text-[13px] text-neutral-500 leading-relaxed font-light pt-1">
              Over the years, we have attained major milestones by constantly pushing the boundaries while creating landmarks of eminence.
            </p>
          </div>
        </div>

        {/* Bottom 4 Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          
          {/* Stat 1 */}
          <StatCounter
            icon={<Calendar className="w-6 h-6 stroke-[1.2]" />}
            value={25}
            unit="Years"
            sublabel="Of Crafting Legacies"
          />

          {/* Stat 2 */}
          <StatCounter
            icon={<Building2 className="w-6 h-6 stroke-[1.2]" />}
            value={4}
            unit="Million Sq. Ft."
            sublabel="Completed"
          />

          {/* Stat 3 */}
          <StatCounter
            icon={<Home className="w-6 h-6 stroke-[1.2]" />}
            value={8}
            unit="Picturesque"
            sublabel="Ongoing Projects"
          />

          {/* Stat 4 */}
          <StatCounter
            icon={<Key className="w-6 h-6 stroke-[1.2]" />}
            value={3500}
            suffix="+"
            unit=""
            sublabel="Homes Delivered"
          />

        </div>
      </div>
    </section>
  );
};

export default PlatinumWorldSection;