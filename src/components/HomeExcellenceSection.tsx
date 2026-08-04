// // // import React, { useState } from 'react';
// // // import { ThemeMode } from '../types';
// // // import { motion, AnimatePresence } from 'motion/react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { MapPin } from 'lucide-react';

// // // interface SectionProps {
// // //   theme?: ThemeMode;
// // // }

// // // export const AboutUsSection: React.FC<SectionProps> = () => {
// // //   const navigate = useNavigate();

// // //   return (
// // //     <section className="w-full bg-[#f4e2c8] text-[#111] pt-20 md:pt-24 pb-20 relative overflow-hidden border-t border-[#e1d0b8]">
// // //       <div className="max-w-[1380px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
// // //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
// // //           <div className="lg:col-span-5">
// // //             <div className="max-w-xl bg-white/90 border border-[#dfcfb9] p-10 rounded-[2rem] shadow-[0_25px_90px_rgba(64,47,14,0.12)]">
// // //               <span className="text-[10px] uppercase tracking-[0.35em] font-semibold text-[#8b6c44] mb-4 inline-block">
// // //                 ABOUT US
// // //               </span>
// // //               <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif text-[#111] leading-[1.12] tracking-tight">
// // //                 Where Excellence Is Etched<br className="hidden sm:block" /> In Every Process
// // //               </h2>
// // //               <p className="text-[14px] sm:text-[15px] text-[#5b5649] leading-[1.9] mt-6">
// // //                 With a massive presence across Navi Mumbai, Platinum Group has created a legacy of excellence in the real estate landscape of the region. The group achieved great success with the collective vision of Dharamshi Patel, Girish Chheda and Virchand Virsaria. Currently driven by their second generation, Platinum Group is constantly creating iconic landmarks that adhere to the finest standards of quality.
// // //               </p>
// // //               <button
// // //                 onClick={() => navigate('/about')}
// // //                 className="mt-8 inline-flex items-center px-10 py-3 bg-[#b19661] hover:bg-[#98794c] text-white text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 shadow-lg rounded-none"
// // //               >
// // //                 Know More
// // //               </button>
// // //             </div>
// // //           </div>

// // //           <div className="lg:col-span-7 relative overflow-hidden rounded-[2rem] border border-[#e4d4bd] shadow-[0_30px_120px_rgba(0,0,0,0.14)] bg-[#f2e5d2] min-h-[480px]">
// // //             <img
// // //               src="https://source.unsplash.com/random/1200x1000?office,architecture,interior"
// // //               alt="Where Excellence Is Etched In Every Process"
// // //               className="w-full h-full object-cover object-center"
// // //             />
// // //             <div className="absolute inset-0 bg-black/20" />
// // //             <div className="absolute inset-0 pointer-events-none p-6">
// // //               <svg className="w-full h-full text-white/15" viewBox="0 0 400 300" fill="none" preserveAspectRatio="none">
// // //                 <path d="M 20 20 H 180 V 140 H 100 V 280" stroke="currentColor" strokeWidth="1.2" />
// // //               </svg>
// // //             </div>
// // //             <div className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.35em] text-white/80">
// // //               Image Is For Representation Purpose Only
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export const WhereExcellenceSection = AboutUsSection;

// // // // ==========================================
// // // // SECTION 5: TEAM - Crafting Legacies That Meet Global Standards
// // // // ==========================================
// // // export const TeamCraftingLegaciesSection: React.FC<SectionProps> = () => {
// // //   const navigate = useNavigate();

// // //   return (
// // //     <section className="w-full bg-[#f7e7d3] text-[#111] py-16 md:py-24 relative overflow-hidden border-t border-[#e8d7bf]">
// // //       <div className="max-w-[1380px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
// // //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
// // //           <div className="lg:col-span-7 relative overflow-hidden rounded-[2rem] border border-[#e7d4bc] shadow-[0_30px_100px_rgba(0,0,0,0.12)] bg-[#f3e7d6] min-h-[460px]">
// // //             <img
// // //               src="https://source.unsplash.com/random/1200x1000?hotel,lobby"
// // //               alt="Crafting Legacies"
// // //               className="w-full h-full object-cover object-center"
// // //             />
// // //             <div className="absolute inset-0 bg-black/16" />
// // //             <div className="absolute bottom-4 left-4 text-white/80 text-[10px] uppercase tracking-[0.35em] font-normal">
// // //               Shot At One Platinum
// // //             </div>
// // //           </div>

// // //           <div className="lg:col-span-5">
// // //             <span className="text-[10px] uppercase tracking-[0.35em] font-semibold text-[#8b6c44] mb-4 inline-block">
// // //               Team
// // //             </span>
// // //             <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif text-[#111] leading-[1.18] tracking-tight mb-6">
// // //               Crafting Legacies That Meet<br className="hidden sm:block" /> Global Standards
// // //             </h2>
// // //             <p className="text-[14px] sm:text-[15px] text-[#5d5548] leading-[1.9] mb-10">
// // //               Each of our projects is handcrafted to perfection right from design to the development stage. Employing nuances of urban planning, strategic analysis, and leveraging on the highest standards of geotechnical engineering, our projects meet and exceed the calibre of world-class construction. We relentlessly focus not only on quality creation, but we also aim to enhance the quality of life and living standards of people, making us a leading choice for safe investments.
// // //             </p>
// // //             <button
// // //               onClick={() => navigate('/about')}
// // //               className="inline-flex items-center px-10 py-3 bg-[#ad9360] hover:bg-[#997a47] text-white text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 shadow-lg rounded-none"
// // //             >
// // //               Know More
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // // ==========================================
// // // // SECTION 6: PLATINUM PRESENCE - Navi Mumbai Map & Accordion
// // // // ==========================================
// // // export const PlatinumPresenceSection: React.FC<SectionProps> = () => {
// // //   const [openFaq, setOpenFaq] = useState<'ongoing' | 'completed' | 'upcoming' | null>('ongoing');
// // //   const [activeLocation, setActiveLocation] = useState<string | null>('seawoods');

// // //   const ONGOING_LIST = [
// // //     { name: 'Platinum Westwoods', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
// // //     { name: 'Platinum Elysium', location: 'Nerul, Navi Mumbai', key: 'nerul' },
// // //     { name: 'Platinum Mansionz', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
// // //     { name: 'Platinum The Reserve', location: 'Kharghar, Navi Mumbai', key: 'kharghar' },
// // //     { name: 'Platinum Parksyde', location: 'Kharghar, Navi Mumbai', key: 'kharghar' },
// // //     { name: 'Platinum Esquire', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
// // //     { name: 'Platinum Oakwoods', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
// // //     { name: 'Platinum Sicily', location: 'Nerul, Navi Mumbai (Redevelopment)', key: 'nerul' },
// // //   ];

// // //   const COMPLETED_LIST = [
// // //     { name: 'One Platinum', location: 'C.B.D. Belapur, Navi Mumbai', key: 'belapur' },
// // //     { name: 'Platinum Crescenzo', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
// // //     { name: 'Platinum Emporius', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
// // //     { name: 'Platinum Experio', location: 'Roadpali, Navi Mumbai', key: 'roadpali' },
// // //     { name: 'Platinum Escaso', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
// // //     { name: 'Platinum Palmwoods', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
// // //     { name: 'Platinum Venecia', location: 'Nerul, Navi Mumbai', key: 'nerul' },
// // //     { name: 'Platinum Avior', location: 'Roadpali, Navi Mumbai', key: 'roadpali' },
// // //     { name: 'Platinum Aura', location: 'Roadpali, Navi Mumbai', key: 'roadpali' },
// // //     { name: 'Platinum Liviano', location: 'Kamothe, Navi Mumbai', key: 'kamothe' },
// // //     { name: 'Platinum Palacio I & II', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
// // //     { name: 'Platinum Cs Regalo', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
// // //   ];

// // //   const UPCOMING_LIST = [
// // //     { name: 'MIDC', location: 'Juinagar, Navi Mumbai', key: 'juinagar' },
// // //     { name: 'Sector 28', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
// // //   ];

// // //   const MAP_PINS = [
// // //     { id: 'juinagar', label: 'JUINAGAR', x: '42%', y: '28%' },
// // //     { id: 'nerul', label: 'NERUL', x: '38%', y: '42%' },
// // //     { id: 'belapur', label: 'CBD BELAPUR', x: '46%', y: '48%' },
// // //     { id: 'seawoods', label: 'SEAWOODS', x: '34%', y: '54%' },
// // //     { id: 'kharghar', label: 'KHARGHAR', x: '68%', y: '52%' },
// // //     { id: 'roadpali', label: 'ROADPALI', x: '82%', y: '46%' },
// // //     { id: 'kamothe', label: 'KAMOTHE', x: '78%', y: '62%' },
// // //     { id: 'ulwe', label: 'ULWE', x: '58%', y: '74%' },
// // //   ];

// // //   return (
// // //     <section className="w-full bg-[#f5ebdc] text-[#111] py-16 md:py-24 relative overflow-hidden">
// // //       {/* Side Label */}
// // //       <div className="absolute top-12 left-6 hidden xl:block">
// // //         <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.35em] text-[10px] font-medium text-[#7e6642] whitespace-nowrap">
// // //           PLATINUM PRESENCE
// // //         </span>
// // //       </div>

// // //       <div className="max-w-7xl mx-auto px-6 md:px-12">
// // //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
// // //           {/* Left Column: Heading & Accordions */}
// // //           <div className="lg:col-span-5 space-y-8">
// // //             <div>
// // //               <span className="xl:hidden text-[10px] uppercase tracking-[0.35em] font-medium text-[#7e6642] block mb-2">
// // //                 PLATINUM PRESENCE
// // //               </span>
// // //               <h2 className="text-3xl sm:text-4xl font-serif leading-[1.25] font-normal text-[#111]">
// // //                 A Solid Footprint Across<br />
// // //                 Navi Mumbai
// // //               </h2>
// // //               <p className="text-[13px] text-[#4a4a4a] leading-relaxed font-normal mt-4">
// // //                 We have a wide presence across Navi Mumbai's key locations like Seawoods, Nerul, Kharghar and Ulwe among others.
// // //               </p>
// // //             </div>

// // //             {/* Accordion FAQ */}
// // //             <div className="space-y-3 pt-2">
// // //               {/* ONGOING PROJECTS */}
// // //               <div className="border-b border-white/10 pb-3">
// // //                 <button
// // //                   onClick={() => setOpenFaq(openFaq === 'ongoing' ? null : 'ongoing')}
// // //                   className="w-full flex items-center justify-between text-left py-2 hover:text-[#c5b596] transition-colors cursor-pointer group"
// // //                 >
// // //                   <span className="text-lg font-serif text-white group-hover:text-[#c5b596]">
// // //                     Ongoing Projects ({ONGOING_LIST.length})
// // //                   </span>
// // //                   <span className="text-[#c5b596] text-xl font-bold">{openFaq === 'ongoing' ? '−' : '+'}</span>
// // //                 </button>
// // //                 <AnimatePresence>
// // //                   {openFaq === 'ongoing' && (
// // //                     <motion.div
// // //                       initial={{ opacity: 0, height: 0 }}
// // //                       animate={{ opacity: 1, height: 'auto' }}
// // //                       exit={{ opacity: 0, height: 0 }}
// // //                       className="overflow-hidden"
// // //                     >
// // //                       <ul className="pt-3 space-y-2 text-[12px] text-neutral-300 pl-2">
// // //                         {ONGOING_LIST.map((item, idx) => (
// // //                           <li
// // //                             key={idx}
// // //                             onClick={() => setActiveLocation(item.key)}
// // //                             className="flex items-center space-x-2 cursor-pointer hover:text-[#c5b596] transition-colors"
// // //                           >
// // //                             <span className="w-1.5 h-1.5 bg-[#9e8a63] rounded-full shrink-0" />
// // //                             <span className="font-medium text-white">{item.name},</span>
// // //                             <span className="text-neutral-400">{item.location}</span>
// // //                           </li>
// // //                         ))}
// // //                       </ul>
// // //                     </motion.div>
// // //                   )}
// // //                 </AnimatePresence>
// // //               </div>

// // //               {/* COMPLETED PROJECTS */}
// // //               <div className="border-b border-white/10 pb-3">
// // //                 <button
// // //                   onClick={() => setOpenFaq(openFaq === 'completed' ? null : 'completed')}
// // //                   className="w-full flex items-center justify-between text-left py-2 hover:text-[#c5b596] transition-colors cursor-pointer group"
// // //                 >
// // //                   <span className="text-lg font-serif text-white group-hover:text-[#c5b596]">
// // //                     Completed Projects ({COMPLETED_LIST.length})
// // //                   </span>
// // //                   <span className="text-[#c5b596] text-xl font-bold">{openFaq === 'completed' ? '−' : '+'}</span>
// // //                 </button>
// // //                 <AnimatePresence>
// // //                   {openFaq === 'completed' && (
// // //                     <motion.div
// // //                       initial={{ opacity: 0, height: 0 }}
// // //                       animate={{ opacity: 1, height: 'auto' }}
// // //                       exit={{ opacity: 0, height: 0 }}
// // //                       className="overflow-hidden"
// // //                     >
// // //                       <ul className="pt-3 space-y-2 text-[12px] text-neutral-300 pl-2 max-h-[220px] overflow-y-auto custom-scrollbar">
// // //                         {COMPLETED_LIST.map((item, idx) => (
// // //                           <li
// // //                             key={idx}
// // //                             onClick={() => setActiveLocation(item.key)}
// // //                             className="flex items-center space-x-2 cursor-pointer hover:text-[#c5b596] transition-colors"
// // //                           >
// // //                             <span className="w-1.5 h-1.5 bg-[#9e8a63] rounded-full shrink-0" />
// // //                             <span className="font-medium text-white">{item.name},</span>
// // //                             <span className="text-neutral-400">{item.location}</span>
// // //                           </li>
// // //                         ))}
// // //                       </ul>
// // //                     </motion.div>
// // //                   )}
// // //                 </AnimatePresence>
// // //               </div>

// // //               {/* UPCOMING PROJECTS */}
// // //               <div className="border-b border-white/10 pb-3">
// // //                 <button
// // //                   onClick={() => setOpenFaq(openFaq === 'upcoming' ? null : 'upcoming')}
// // //                   className="w-full flex items-center justify-between text-left py-2 hover:text-[#c5b596] transition-colors cursor-pointer group"
// // //                 >
// // //                   <span className="text-lg font-serif text-white group-hover:text-[#c5b596]">
// // //                     Upcoming Projects ({UPCOMING_LIST.length})
// // //                   </span>
// // //                   <span className="text-[#c5b596] text-xl font-bold">{openFaq === 'upcoming' ? '−' : '+'}</span>
// // //                 </button>
// // //                 <AnimatePresence>
// // //                   {openFaq === 'upcoming' && (
// // //                     <motion.div
// // //                       initial={{ opacity: 0, height: 0 }}
// // //                       animate={{ opacity: 1, height: 'auto' }}
// // //                       exit={{ opacity: 0, height: 0 }}
// // //                       className="overflow-hidden"
// // //                     >
// // //                       <ul className="pt-3 space-y-2 text-[12px] text-neutral-300 pl-2">
// // //                         {UPCOMING_LIST.map((item, idx) => (
// // //                           <li
// // //                             key={idx}
// // //                             onClick={() => setActiveLocation(item.key)}
// // //                             className="flex items-center space-x-2 cursor-pointer hover:text-[#c5b596] transition-colors"
// // //                           >
// // //                             <span className="w-1.5 h-1.5 bg-[#9e8a63] rounded-full shrink-0" />
// // //                             <span className="font-medium text-white">{item.name},</span>
// // //                             <span className="text-neutral-400">{item.location}</span>
// // //                           </li>
// // //                         ))}
// // //                       </ul>
// // //                     </motion.div>
// // //                   )}
// // //                 </AnimatePresence>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Right Column: Interactive Navi Mumbai Geographic Vector Map */}
// // //           <div className="lg:col-span-7 bg-[#0e1114] p-6 sm:p-10 rounded-2xl border border-white/10 relative min-h-[440px] flex items-center justify-center shadow-2xl">
// // //             {/* Map Decorative Vector Grid Lines */}
// // //             <svg className="absolute inset-0 w-full h-full text-white/5 pointer-events-none" viewBox="0 0 500 400" fill="none">
// // //               <path d="M 50 0 V 400 M 150 0 V 400 M 250 0 V 400 M 350 0 V 400 M 450 0 V 400" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
// // //               <path d="M 0 80 H 500 M 0 160 H 500 M 0 240 H 500 M 0 320 H 500" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
// // //               {/* Region Contour Path */}
// // //               <path
// // //                 d="M 120 40 C 180 80 220 150 200 220 C 180 290 280 340 380 360 C 440 370 470 320 450 260 C 430 200 380 120 300 80 Z"
// // //                 fill="#161b22"
// // //                 stroke="#2a3342"
// // //                 strokeWidth="2"
// // //               />
// // //             </svg>

// // //             {/* Interactive Pins */}
// // //             <div className="relative w-full h-[380px]">
// // //               {MAP_PINS.map((pin) => {
// // //                 const isSelected = activeLocation === pin.id;
// // //                 return (
// // //                   <div
// // //                     key={pin.id}
// // //                     style={{ left: pin.x, top: pin.y }}
// // //                     onClick={() => setActiveLocation(pin.id)}
// // //                     className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
// // //                   >
// // //                     <div className="relative flex items-center">
// // //                       {/* Pulse Circle */}
// // //                       <span className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${
// // //                         isSelected ? 'bg-[#9e8a63] ring-4 ring-[#9e8a63]/40 scale-125' : 'bg-neutral-600 group-hover:bg-[#9e8a63]'
// // //                       }`}>
// // //                         <span className="w-1.5 h-1.5 bg-white rounded-full" />
// // //                       </span>

// // //                       {/* Label Badge */}
// // //                       <span className={`ml-2 px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold whitespace-nowrap rounded transition-all duration-300 shadow-md ${
// // //                         isSelected
// // //                           ? 'bg-[#9e8a63] text-white'
// // //                           : 'bg-black/70 text-neutral-300 border border-white/10 group-hover:bg-white group-hover:text-black'
// // //                       }`}>
// // //                         {pin.label}
// // //                       </span>
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>

// // //             <div className="absolute bottom-3 right-4 text-white/50 text-[9px] uppercase tracking-widest font-normal pointer-events-none">
// // //               Image Is For Representation Purpose Only
// // //             </div>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };





// // import React, { useState } from 'react';
// // import { ThemeMode } from '../types';
// // import { motion, AnimatePresence } from 'motion/react';
// // import { useNavigate } from 'react-router-dom';
// // import { MapPin } from 'lucide-react';

// // interface SectionProps {
// //   theme?: ThemeMode;
// // }

// // const AboutUsBlock: React.FC<SectionProps> = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <section className="relative w-full bg-[#f4e2c8] text-[#111]">
// //       {/* Full-bleed row: text sits within a max-width reading column, image bleeds to the browser edge */}
// //       <div className="relative flex flex-col lg:block min-h-[300px] lg:min-h-[520px]">

// //         {/* Vertical "ABOUT US" label pinned to the far left edge */}
// //         <span className="hidden lg:block absolute left-4 xl:left-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-lr] rotate-180 text-[10px] tracking-[0.4em] uppercase text-[#8b6c44] font-semibold select-none">
// //           ABOUT US
// //         </span>

// //         {/* Text column — plain on beige, no card. Kept wide (~57%) so plenty of beige shows before the image starts */}
// //         <div className="relative z-0 flex flex-col justify-center pl-10 pr-6 py-14 sm:pl-16 md:pl-20 lg:pl-28 lg:pr-16 lg:py-0 lg:w-[57%]">
// //           <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif text-[#111] leading-[1.15] tracking-tight max-w-md">
// //             Where Excellence Is Etched<br className="hidden sm:block" /> In Every Process
// //           </h2>
// //           <p className="text-[14px] sm:text-[15px] text-[#5b5649] leading-[1.9] mt-6 max-w-md">
// //             With a massive presence across Navi Mumbai, Platinum Group has created a legacy of excellence in the real estate landscape of the region. The group achieved great success with the collective vision of Dharamshi Patel, Girish Chheda and Virchand Virsaria. Currently driven by their second generation, Platinum Group is constantly creating iconic landmarks that adhere to the finest standards of quality.
// //           </p>
// //           <button
// //             onClick={() => navigate('/about')}
// //             className="mt-8 self-start px-10 py-3 bg-[#b19661] hover:bg-[#98794c] text-white text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 shadow-lg rounded-none cursor-pointer"
// //           >
// //             Know More
// //           </button>
// //         </div>

// //         {/* Image column — narrower (~43%) so the beige panel on the left reads bigger, matches reference.
// //             Bleeds to the right edge AND drops below the section's own bottom edge,
// //             overlapping the section that follows (matches reference screenshots) */}
// //         <div className="relative w-full h-[320px] sm:h-[420px] lg:h-auto lg:absolute lg:right-0 lg:top-0 lg:w-[43%] lg:h-[calc(100%+160px)] z-10">
// //           <img
// //             src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
// //             alt="Where Excellence Is Etched In Every Process"
// //             className="w-full h-full object-cover object-center"
// //           />
// //           <div className="absolute inset-0 bg-black/15" />

// //           <span className="absolute bottom-4 right-5 text-[9px] uppercase tracking-[0.35em] text-white/85">
// //             Image Is For Representation Purpose Only
// //           </span>

// //           {/* Single continuous "step" line — spans the FULL bled height of this wrapper
// //               (top of the image all the way down into the dark section it overlaps).
// //               Because it's one path stretched across that whole height, it visually
// //               "joins" the beige section, the image, and the section below it. */}
// //           <svg
// //             className="hidden lg:block absolute inset-0 w-full h-full z-20 pointer-events-none"
// //             viewBox="0 0 100 100"
// //             preserveAspectRatio="none"
// //             fill="none"
// //           >
// //             <path
// //               d="M 78 0 L 78 34 L 42 34 L 42 100"
// //               stroke="white"
// //               strokeOpacity="0.85"
// //               strokeWidth="1"
// //               vectorEffect="non-scaling-stroke"
// //             />
// //           </svg>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// //   export const HomeExcellenceCombinedSection: React.FC<SectionProps> = () => {
// //     return (
// //       <>
// //         <AboutUsBlock />
// //         <TeamBlock />
// //         <PresenceBlock />
// //       </>
// //     );
// //   };

// // // alias removed — AboutUsSection replaced by combined component later

// // // ==========================================
// // // SECTION 5: TEAM - Crafting Legacies That Meet Global Standards
// // // ==========================================
// // const TeamBlock: React.FC<SectionProps> = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <section className="relative w-full bg-[#f7e7d3] text-[#111]">
// //       <div className="relative flex flex-col lg:block min-h-[320px] lg:min-h-[480px]">

// //         {/* Image column — full-bleed to the LEFT browser edge (~42% width), no rounded corners, no container padding */}
// //         <div className="relative w-full h-[320px] sm:h-[420px] lg:h-auto lg:absolute lg:left-0 lg:top-0 lg:w-[42%] lg:h-full z-10">
// //           <img
// //             src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
// //             alt="Crafting Legacies"
// //             className="w-full h-full object-cover object-center"
// //           />
// //           <div className="absolute inset-0 bg-black/16" />
// //           <div className="absolute bottom-4 left-4 text-white/80 text-[10px] uppercase tracking-[0.35em] font-normal">
// //             Shot At One Platinum
// //           </div>
// //         </div>

// //         {/* Text column — plain on cream, wide (~58%), pushed right past the image's width */}
// //         <div className="relative z-0 flex flex-col justify-center pl-10 pr-6 py-14 sm:pl-16 md:pl-20 lg:pl-[45%] lg:pr-16 lg:py-0">
// //           <span className="text-[10px] uppercase tracking-[0.35em] font-semibold text-[#8b6c44] mb-4 inline-block">
// //             Team
// //           </span>
// //           <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif text-[#111] leading-[1.18] tracking-tight mb-6 max-w-lg">
// //             Crafting Legacies That Meet<br className="hidden sm:block" /> Global Standards
// //           </h2>
// //           <p className="text-[14px] sm:text-[15px] text-[#5d5548] leading-[1.9] mb-10 max-w-lg">
// //             Each of our projects is handcrafted to perfection right from design to the development stage. Employing nuances of urban planning, strategic analysis, and leveraging on the highest standards of geotechnical engineering, our projects meet and exceed the calibre of world-class construction. We relentlessly focus not only on quality creation, but we also aim to enhance the quality of life and living standards of people, making us a leading choice for safe investments.
// //           </p>
// //           <button
// //             onClick={() => navigate('/about')}
// //             className="self-start px-10 py-3 bg-[#ad9360] hover:bg-[#997a47] text-white text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 shadow-lg rounded-none cursor-pointer"
// //           >
// //             Know More
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // ==========================================
// // // SECTION 6: PLATINUM PRESENCE - Navi Mumbai Map & Accordion
// // // ==========================================
// // const PresenceBlock: React.FC<SectionProps> = () => {
// //   const [openFaq, setOpenFaq] = useState<'ongoing' | 'completed' | 'upcoming' | null>('ongoing');
// //   const [activeLocation, setActiveLocation] = useState<string | null>('seawoods');

// //   const ONGOING_LIST = [
// //     { name: 'Platinum Westwoods', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
// //     { name: 'Platinum Elysium', location: 'Nerul, Navi Mumbai', key: 'nerul' },
// //     { name: 'Platinum Mansionz', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
// //     { name: 'Platinum The Reserve', location: 'Kharghar, Navi Mumbai', key: 'kharghar' },
// //     { name: 'Platinum Parksyde', location: 'Kharghar, Navi Mumbai', key: 'kharghar' },
// //     { name: 'Platinum Esquire', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
// //     { name: 'Platinum Oakwoods', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
// //     { name: 'Platinum Sicily', location: 'Nerul, Navi Mumbai (Redevelopment)', key: 'nerul' },
// //   ];

// //   const COMPLETED_LIST = [
// //     { name: 'One Platinum', location: 'C.B.D. Belapur, Navi Mumbai', key: 'belapur' },
// //     { name: 'Platinum Crescenzo', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
// //     { name: 'Platinum Emporius', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
// //     { name: 'Platinum Experio', location: 'Roadpali, Navi Mumbai', key: 'roadpali' },
// //     { name: 'Platinum Escaso', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
// //     { name: 'Platinum Palmwoods', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
// //     { name: 'Platinum Venecia', location: 'Nerul, Navi Mumbai', key: 'nerul' },
// //     { name: 'Platinum Avior', location: 'Roadpali, Navi Mumbai', key: 'roadpali' },
// //     { name: 'Platinum Aura', location: 'Roadpali, Navi Mumbai', key: 'roadpali' },
// //     { name: 'Platinum Liviano', location: 'Kamothe, Navi Mumbai', key: 'kamothe' },
// //     { name: 'Platinum Palacio I & II', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
// //     { name: 'Platinum Cs Regalo', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
// //   ];

// //   const UPCOMING_LIST = [
// //     { name: 'MIDC', location: 'Juinagar, Navi Mumbai', key: 'juinagar' },
// //     { name: 'Sector 28', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
// //   ];

// //   const MAP_PINS = [
// //     { id: 'juinagar', label: 'JUINAGAR', x: '42%', y: '28%' },
// //     { id: 'nerul', label: 'NERUL', x: '38%', y: '42%' },
// //     { id: 'belapur', label: 'CBD BELAPUR', x: '46%', y: '48%' },
// //     { id: 'seawoods', label: 'SEAWOODS', x: '34%', y: '54%' },
// //     { id: 'kharghar', label: 'KHARGHAR', x: '68%', y: '52%' },
// //     { id: 'roadpali', label: 'ROADPALI', x: '82%', y: '46%' },
// //     { id: 'kamothe', label: 'KAMOTHE', x: '78%', y: '62%' },
// //     { id: 'ulwe', label: 'ULWE', x: '58%', y: '74%' },
// //   ];

// //   return (
// //     <section className="w-full bg-[#f5ebdc] text-[#111] py-16 md:py-24 relative overflow-hidden">
// //       {/* Side Label */}
// //       <div className="absolute top-12 left-6 hidden xl:block">
// //         <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.35em] text-[10px] font-medium text-[#7e6642] whitespace-nowrap">
// //           PLATINUM PRESENCE
// //         </span>
// //       </div>

// //       <div className="max-w-7xl mx-auto px-6 md:px-12">
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
// //           {/* Left Column: Heading & Accordions */}
// //           <div className="lg:col-span-5 space-y-8">
// //             <div>
// //               <span className="xl:hidden text-[10px] uppercase tracking-[0.35em] font-medium text-[#7e6642] block mb-2">
// //                 PLATINUM PRESENCE
// //               </span>
// //               <h2 className="text-3xl sm:text-4xl font-serif leading-[1.25] font-normal text-[#111]">
// //                 A Solid Footprint Across<br />
// //                 Navi Mumbai
// //               </h2>
// //               <p className="text-[13px] text-[#4a4a4a] leading-relaxed font-normal mt-4">
// //                 We have a wide presence across Navi Mumbai's key locations like Seawoods, Nerul, Kharghar and Ulwe among others.
// //               </p>
// //             </div>

// //             {/* Accordion FAQ */}
// //             <div className="space-y-3 pt-2">
// //               {/* ONGOING PROJECTS */}
// //               <div className="border-b border-white/10 pb-3">
// //                 <button
// //                   onClick={() => setOpenFaq(openFaq === 'ongoing' ? null : 'ongoing')}
// //                   className="w-full flex items-center justify-between text-left py-2 hover:text-[#c5b596] transition-colors cursor-pointer group"
// //                 >
// //                   <span className="text-lg font-serif text-white group-hover:text-[#c5b596]">
// //                     Ongoing Projects ({ONGOING_LIST.length})
// //                   </span>
// //                   <span className="text-[#c5b596] text-xl font-bold">{openFaq === 'ongoing' ? '−' : '+'}</span>
// //                 </button>
// //                 <AnimatePresence>
// //                   {openFaq === 'ongoing' && (
// //                     <motion.div
// //                       initial={{ opacity: 0, height: 0 }}
// //                       animate={{ opacity: 1, height: 'auto' }}
// //                       exit={{ opacity: 0, height: 0 }}
// //                       className="overflow-hidden"
// //                     >
// //                       <ul className="pt-3 space-y-2 text-[12px] text-neutral-300 pl-2">
// //                         {ONGOING_LIST.map((item, idx) => (
// //                           <li
// //                             key={idx}
// //                             onClick={() => setActiveLocation(item.key)}
// //                             className="flex items-center space-x-2 cursor-pointer hover:text-[#c5b596] transition-colors"
// //                           >
// //                             <span className="w-1.5 h-1.5 bg-[#9e8a63] rounded-full shrink-0" />
// //                             <span className="font-medium text-white">{item.name},</span>
// //                             <span className="text-neutral-400">{item.location}</span>
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </div>

// //               {/* COMPLETED PROJECTS */}
// //               <div className="border-b border-white/10 pb-3">
// //                 <button
// //                   onClick={() => setOpenFaq(openFaq === 'completed' ? null : 'completed')}
// //                   className="w-full flex items-center justify-between text-left py-2 hover:text-[#c5b596] transition-colors cursor-pointer group"
// //                 >
// //                   <span className="text-lg font-serif text-white group-hover:text-[#c5b596]">
// //                     Completed Projects ({COMPLETED_LIST.length})
// //                   </span>
// //                   <span className="text-[#c5b596] text-xl font-bold">{openFaq === 'completed' ? '−' : '+'}</span>
// //                 </button>
// //                 <AnimatePresence>
// //                   {openFaq === 'completed' && (
// //                     <motion.div
// //                       initial={{ opacity: 0, height: 0 }}
// //                       animate={{ opacity: 1, height: 'auto' }}
// //                       exit={{ opacity: 0, height: 0 }}
// //                       className="overflow-hidden"
// //                     >
// //                       <ul className="pt-3 space-y-2 text-[12px] text-neutral-300 pl-2 max-h-[220px] overflow-y-auto custom-scrollbar">
// //                         {COMPLETED_LIST.map((item, idx) => (
// //                           <li
// //                             key={idx}
// //                             onClick={() => setActiveLocation(item.key)}
// //                             className="flex items-center space-x-2 cursor-pointer hover:text-[#c5b596] transition-colors"
// //                           >
// //                             <span className="w-1.5 h-1.5 bg-[#9e8a63] rounded-full shrink-0" />
// //                             <span className="font-medium text-white">{item.name},</span>
// //                             <span className="text-neutral-400">{item.location}</span>
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </div>

// //               {/* UPCOMING PROJECTS */}
// //               <div className="border-b border-white/10 pb-3">
// //                 <button
// //                   onClick={() => setOpenFaq(openFaq === 'upcoming' ? null : 'upcoming')}
// //                   className="w-full flex items-center justify-between text-left py-2 hover:text-[#c5b596] transition-colors cursor-pointer group"
// //                 >
// //                   <span className="text-lg font-serif text-white group-hover:text-[#c5b596]">
// //                     Upcoming Projects ({UPCOMING_LIST.length})
// //                   </span>
// //                   <span className="text-[#c5b596] text-xl font-bold">{openFaq === 'upcoming' ? '−' : '+'}</span>
// //                 </button>
// //                 <AnimatePresence>
// //                   {openFaq === 'upcoming' && (
// //                     <motion.div
// //                       initial={{ opacity: 0, height: 0 }}
// //                       animate={{ opacity: 1, height: 'auto' }}
// //                       exit={{ opacity: 0, height: 0 }}
// //                       className="overflow-hidden"
// //                     >
// //                       <ul className="pt-3 space-y-2 text-[12px] text-neutral-300 pl-2">
// //                         {UPCOMING_LIST.map((item, idx) => (
// //                           <li
// //                             key={idx}
// //                             onClick={() => setActiveLocation(item.key)}
// //                             className="flex items-center space-x-2 cursor-pointer hover:text-[#c5b596] transition-colors"
// //                           >
// //                             <span className="w-1.5 h-1.5 bg-[#9e8a63] rounded-full shrink-0" />
// //                             <span className="font-medium text-white">{item.name},</span>
// //                             <span className="text-neutral-400">{item.location}</span>
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Column: Interactive Navi Mumbai Geographic Vector Map */}
// //           <div className="lg:col-span-7 bg-[#0e1114] p-6 sm:p-10 rounded-2xl border border-white/10 relative min-h-[440px] flex items-center justify-center shadow-2xl">
// //             {/* Map Decorative Vector Grid Lines */}
// //             <svg className="absolute inset-0 w-full h-full text-white/5 pointer-events-none" viewBox="0 0 500 400" fill="none">
// //               <path d="M 50 0 V 400 M 150 0 V 400 M 250 0 V 400 M 350 0 V 400 M 450 0 V 400" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
// //               <path d="M 0 80 H 500 M 0 160 H 500 M 0 240 H 500 M 0 320 H 500" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
// //               {/* Region Contour Path */}
// //               <path
// //                 d="M 120 40 C 180 80 220 150 200 220 C 180 290 280 340 380 360 C 440 370 470 320 450 260 C 430 200 380 120 300 80 Z"
// //                 fill="#161b22"
// //                 stroke="#2a3342"
// //                 strokeWidth="2"
// //               />
// //             </svg>

// //             {/* Interactive Pins */}
// //             <div className="relative w-full h-[380px]">
// //               {MAP_PINS.map((pin) => {
// //                 const isSelected = activeLocation === pin.id;
// //                 return (
// //                   <div
// //                     key={pin.id}
// //                     style={{ left: pin.x, top: pin.y }}
// //                     onClick={() => setActiveLocation(pin.id)}
// //                     className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
// //                   >
// //                     <div className="relative flex items-center">
// //                       {/* Pulse Circle */}
// //                       <span className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${
// //                         isSelected ? 'bg-[#9e8a63] ring-4 ring-[#9e8a63]/40 scale-125' : 'bg-neutral-600 group-hover:bg-[#9e8a63]'
// //                       }`}>
// //                         <span className="w-1.5 h-1.5 bg-white rounded-full" />
// //                       </span>

// //                       {/* Label Badge */}
// //                       <span className={`ml-2 px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold whitespace-nowrap rounded transition-all duration-300 shadow-md ${
// //                         isSelected
// //                           ? 'bg-[#9e8a63] text-white'
// //                           : 'bg-black/70 text-neutral-300 border border-white/10 group-hover:bg-white group-hover:text-black'
// //                       }`}>
// //                         {pin.label}
// //                       </span>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>

// //             <div className="absolute bottom-3 right-4 text-white/50 text-[9px] uppercase tracking-widest font-normal pointer-events-none">
// //               Image Is For Representation Purpose Only
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };





// import React, { useState } from 'react';
// import { ThemeMode } from '../types';
// import { motion, AnimatePresence } from 'motion/react';
// import { useNavigate } from 'react-router-dom';
// import { MapPin } from 'lucide-react';

// interface SectionProps {
//   theme?: ThemeMode;
// }

// // ==========================================
// // COMBINED WRAPPER — this is what App.tsx actually imports and renders:
// //   import { HomeExcellenceCombinedSection } from './components/HomeExcellenceSection';
// //   <HomeExcellenceCombinedSection theme={theme} />
// // It just renders the three sections below, in order.
// // ==========================================
// export const HomeExcellenceCombinedSection: React.FC<SectionProps> = ({ theme }) => {
//   return (
//     <>
//       <AboutUsSection theme={theme} />
//       <TeamCraftingLegaciesSection theme={theme} />
//       <PlatinumPresenceSection theme={theme} />
//     </>
//   );
// };

// export const AboutUsSection: React.FC<SectionProps> = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="relative w-full bg-[#f4e2c8] text-[#111]">
//       {/* Full-bleed row: text sits within a max-width reading column, image bleeds to the browser edge */}
//       <div className="relative flex flex-col lg:block min-h-[300px] lg:min-h-[520px]">

//         {/* Vertical "ABOUT US" label pinned to the far left edge */}
//         <span className="hidden lg:block absolute left-4 xl:left-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-lr] rotate-180 text-[10px] tracking-[0.4em] uppercase text-[#8b6c44] font-semibold select-none">
//           ABOUT US
//         </span>

//         {/* Text column — plain on beige, no card. Kept wide (~57%) so plenty of beige shows before the image starts */}
//         <div className="relative z-0 flex flex-col justify-center pl-10 pr-6 py-14 sm:pl-16 md:pl-20 lg:pl-28 lg:pr-16 lg:py-0 lg:w-[57%]">
//           <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif text-[#111] leading-[1.15] tracking-tight max-w-md">
//             Where Excellence Is Etched<br className="hidden sm:block" /> In Every Process
//           </h2>
//           <p className="text-[14px] sm:text-[15px] text-[#5b5649] leading-[1.9] mt-6 max-w-md">
//             With a massive presence across Navi Mumbai, Platinum Group has created a legacy of excellence in the real estate landscape of the region. The group achieved great success with the collective vision of Dharamshi Patel, Girish Chheda and Virchand Virsaria. Currently driven by their second generation, Platinum Group is constantly creating iconic landmarks that adhere to the finest standards of quality.
//           </p>
//           <button
//             onClick={() => navigate('/about')}
//             className="mt-8 self-start px-10 py-3 bg-[#b19661] hover:bg-[#98794c] text-white text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 shadow-lg rounded-none cursor-pointer"
//           >
//             Know More
//           </button>
//         </div>

//         {/* Image column — narrower (~43%) so the beige panel on the left reads bigger, matches reference.
//             Bleeds to the right edge AND drops below the section's own bottom edge,
//             overlapping the section that follows (matches reference screenshots) */}
//         <div className="relative w-full h-[320px] sm:h-[420px] lg:h-auto lg:absolute lg:right-0 lg:top-0 lg:w-[43%] lg:h-[calc(100%+160px)] z-10">
//           <img
//             src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
//             alt="Where Excellence Is Etched In Every Process"
//             className="w-full h-full object-cover object-center"
//           />
//           <div className="absolute inset-0 bg-black/15" />

//           <span className="absolute bottom-4 right-5 text-[9px] uppercase tracking-[0.35em] text-white/85">
//             Image Is For Representation Purpose Only
//           </span>

//           {/* Single continuous "step" line — spans the FULL bled height of this wrapper
//               (top of the image all the way down into the dark section it overlaps).
//               Because it's one path stretched across that whole height, it visually
//               "joins" the beige section, the image, and the section below it. */}
//           <svg
//             className="hidden lg:block absolute inset-0 w-full h-full z-20 pointer-events-none"
//             viewBox="0 0 100 100"
//             preserveAspectRatio="none"
//             fill="none"
//           >
//             <path
//               d="M 78 0 L 78 34 L 42 34 L 42 100"
//               stroke="white"
//               strokeOpacity="0.85"
//               strokeWidth="1"
//               vectorEffect="non-scaling-stroke"
//             />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// };

// export const WhereExcellenceSection = AboutUsSection;

// // ==========================================
// // SECTION 5: TEAM - Crafting Legacies That Meet Global Standards
// // ==========================================
// export const TeamCraftingLegaciesSection: React.FC<SectionProps> = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="relative w-full bg-[#f7e7d3] text-[#111]">
//       <div className="relative flex flex-col lg:block min-h-[320px] lg:min-h-[480px]">

//         {/* Image column — full-bleed to the LEFT browser edge (~42% width), no rounded corners, no container padding */}
//         <div className="relative w-full h-[320px] sm:h-[420px] lg:h-auto lg:absolute lg:left-0 lg:top-0 lg:w-[42%] lg:h-full z-10">
//           <img
//             src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
//             alt="Crafting Legacies"
//             className="w-full h-full object-cover object-center"
//           />
//           <div className="absolute inset-0 bg-black/16" />
//           <div className="absolute bottom-4 left-4 text-white/80 text-[10px] uppercase tracking-[0.35em] font-normal">
//             Shot At One Platinum
//           </div>
//         </div>

//         {/* Text column — plain on cream, wide (~58%), pushed right past the image's width */}
//         <div className="relative z-0 flex flex-col justify-center pl-10 pr-6 py-14 sm:pl-16 md:pl-20 lg:pl-[45%] lg:pr-16 lg:py-0">
//           <span className="text-[10px] uppercase tracking-[0.35em] font-semibold text-[#8b6c44] mb-4 inline-block">
//             Team
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif text-[#111] leading-[1.18] tracking-tight mb-6 max-w-lg">
//             Crafting Legacies That Meet<br className="hidden sm:block" /> Global Standards
//           </h2>
//           <p className="text-[14px] sm:text-[15px] text-[#5d5548] leading-[1.9] mb-10 max-w-lg">
//             Each of our projects is handcrafted to perfection right from design to the development stage. Employing nuances of urban planning, strategic analysis, and leveraging on the highest standards of geotechnical engineering, our projects meet and exceed the calibre of world-class construction. We relentlessly focus not only on quality creation, but we also aim to enhance the quality of life and living standards of people, making us a leading choice for safe investments.
//           </p>
//           <button
//             onClick={() => navigate('/about')}
//             className="self-start px-10 py-3 bg-[#ad9360] hover:bg-[#997a47] text-white text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 shadow-lg rounded-none cursor-pointer"
//           >
//             Know More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==========================================
// // SECTION 6: PLATINUM PRESENCE - Navi Mumbai Map & Accordion
// // ==========================================
// export const PlatinumPresenceSection: React.FC<SectionProps> = () => {
//   const [openFaq, setOpenFaq] = useState<'ongoing' | 'completed' | 'upcoming' | null>('ongoing');
//   const [activeLocation, setActiveLocation] = useState<string | null>('seawoods');

//   const ONGOING_LIST = [
//     { name: 'Platinum Westwoods', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
//     { name: 'Platinum Elysium', location: 'Nerul, Navi Mumbai', key: 'nerul' },
//     { name: 'Platinum Mansionz', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
//     { name: 'Platinum The Reserve', location: 'Kharghar, Navi Mumbai', key: 'kharghar' },
//     { name: 'Platinum Parksyde', location: 'Kharghar, Navi Mumbai', key: 'kharghar' },
//     { name: 'Platinum Esquire', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
//     { name: 'Platinum Oakwoods', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
//     { name: 'Platinum Sicily', location: 'Nerul, Navi Mumbai (Redevelopment)', key: 'nerul' },
//   ];

//   const COMPLETED_LIST = [
//     { name: 'One Platinum', location: 'C.B.D. Belapur, Navi Mumbai', key: 'belapur' },
//     { name: 'Platinum Crescenzo', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
//     { name: 'Platinum Emporius', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
//     { name: 'Platinum Experio', location: 'Roadpali, Navi Mumbai', key: 'roadpali' },
//     { name: 'Platinum Escaso', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
//     { name: 'Platinum Palmwoods', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
//     { name: 'Platinum Venecia', location: 'Nerul, Navi Mumbai', key: 'nerul' },
//     { name: 'Platinum Avior', location: 'Roadpali, Navi Mumbai', key: 'roadpali' },
//     { name: 'Platinum Aura', location: 'Roadpali, Navi Mumbai', key: 'roadpali' },
//     { name: 'Platinum Liviano', location: 'Kamothe, Navi Mumbai', key: 'kamothe' },
//     { name: 'Platinum Palacio I & II', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
//     { name: 'Platinum Cs Regalo', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
//   ];

//   const UPCOMING_LIST = [
//     { name: 'MIDC', location: 'Juinagar, Navi Mumbai', key: 'juinagar' },
//     { name: 'Sector 28', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
//   ];

//   const MAP_PINS = [
//     { id: 'juinagar', label: 'JUINAGAR', x: '42%', y: '28%' },
//     { id: 'nerul', label: 'NERUL', x: '38%', y: '42%' },
//     { id: 'belapur', label: 'CBD BELAPUR', x: '46%', y: '48%' },
//     { id: 'seawoods', label: 'SEAWOODS', x: '34%', y: '54%' },
//     { id: 'kharghar', label: 'KHARGHAR', x: '68%', y: '52%' },
//     { id: 'roadpali', label: 'ROADPALI', x: '82%', y: '46%' },
//     { id: 'kamothe', label: 'KAMOTHE', x: '78%', y: '62%' },
//     { id: 'ulwe', label: 'ULWE', x: '58%', y: '74%' },
//   ];

//   return (
//     <section className="w-full bg-[#f5ebdc] text-[#111] py-16 md:py-24 relative overflow-hidden">
//       {/* Side Label */}
//       <div className="absolute top-12 left-6 hidden xl:block">
//         <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.35em] text-[10px] font-medium text-[#7e6642] whitespace-nowrap">
//           PLATINUM PRESENCE
//         </span>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
//           {/* Left Column: Heading & Accordions */}
//           <div className="lg:col-span-5 space-y-8">
//             <div>
//               <span className="xl:hidden text-[10px] uppercase tracking-[0.35em] font-medium text-[#7e6642] block mb-2">
//                 PLATINUM PRESENCE
//               </span>
//               <h2 className="text-3xl sm:text-4xl font-serif leading-[1.25] font-normal text-[#111]">
//                 A Solid Footprint Across<br />
//                 Navi Mumbai
//               </h2>
//               <p className="text-[13px] text-[#4a4a4a] leading-relaxed font-normal mt-4">
//                 We have a wide presence across Navi Mumbai's key locations like Seawoods, Nerul, Kharghar and Ulwe among others.
//               </p>
//             </div>

//             {/* Accordion FAQ */}
//             <div className="space-y-3 pt-2">
//               {/* ONGOING PROJECTS */}
//               <div className="border-b border-white/10 pb-3">
//                 <button
//                   onClick={() => setOpenFaq(openFaq === 'ongoing' ? null : 'ongoing')}
//                   className="w-full flex items-center justify-between text-left py-2 hover:text-[#c5b596] transition-colors cursor-pointer group"
//                 >
//                   <span className="text-lg font-serif text-white group-hover:text-[#c5b596]">
//                     Ongoing Projects ({ONGOING_LIST.length})
//                   </span>
//                   <span className="text-[#c5b596] text-xl font-bold">{openFaq === 'ongoing' ? '−' : '+'}</span>
//                 </button>
//                 <AnimatePresence>
//                   {openFaq === 'ongoing' && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="overflow-hidden"
//                     >
//                       <ul className="pt-3 space-y-2 text-[12px] text-neutral-300 pl-2">
//                         {ONGOING_LIST.map((item, idx) => (
//                           <li
//                             key={idx}
//                             onClick={() => setActiveLocation(item.key)}
//                             className="flex items-center space-x-2 cursor-pointer hover:text-[#c5b596] transition-colors"
//                           >
//                             <span className="w-1.5 h-1.5 bg-[#9e8a63] rounded-full shrink-0" />
//                             <span className="font-medium text-white">{item.name},</span>
//                             <span className="text-neutral-400">{item.location}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* COMPLETED PROJECTS */}
//               <div className="border-b border-white/10 pb-3">
//                 <button
//                   onClick={() => setOpenFaq(openFaq === 'completed' ? null : 'completed')}
//                   className="w-full flex items-center justify-between text-left py-2 hover:text-[#c5b596] transition-colors cursor-pointer group"
//                 >
//                   <span className="text-lg font-serif text-white group-hover:text-[#c5b596]">
//                     Completed Projects ({COMPLETED_LIST.length})
//                   </span>
//                   <span className="text-[#c5b596] text-xl font-bold">{openFaq === 'completed' ? '−' : '+'}</span>
//                 </button>
//                 <AnimatePresence>
//                   {openFaq === 'completed' && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="overflow-hidden"
//                     >
//                       <ul className="pt-3 space-y-2 text-[12px] text-neutral-300 pl-2 max-h-[220px] overflow-y-auto custom-scrollbar">
//                         {COMPLETED_LIST.map((item, idx) => (
//                           <li
//                             key={idx}
//                             onClick={() => setActiveLocation(item.key)}
//                             className="flex items-center space-x-2 cursor-pointer hover:text-[#c5b596] transition-colors"
//                           >
//                             <span className="w-1.5 h-1.5 bg-[#9e8a63] rounded-full shrink-0" />
//                             <span className="font-medium text-white">{item.name},</span>
//                             <span className="text-neutral-400">{item.location}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* UPCOMING PROJECTS */}
//               <div className="border-b border-white/10 pb-3">
//                 <button
//                   onClick={() => setOpenFaq(openFaq === 'upcoming' ? null : 'upcoming')}
//                   className="w-full flex items-center justify-between text-left py-2 hover:text-[#c5b596] transition-colors cursor-pointer group"
//                 >
//                   <span className="text-lg font-serif text-white group-hover:text-[#c5b596]">
//                     Upcoming Projects ({UPCOMING_LIST.length})
//                   </span>
//                   <span className="text-[#c5b596] text-xl font-bold">{openFaq === 'upcoming' ? '−' : '+'}</span>
//                 </button>
//                 <AnimatePresence>
//                   {openFaq === 'upcoming' && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="overflow-hidden"
//                     >
//                       <ul className="pt-3 space-y-2 text-[12px] text-neutral-300 pl-2">
//                         {UPCOMING_LIST.map((item, idx) => (
//                           <li
//                             key={idx}
//                             onClick={() => setActiveLocation(item.key)}
//                             className="flex items-center space-x-2 cursor-pointer hover:text-[#c5b596] transition-colors"
//                           >
//                             <span className="w-1.5 h-1.5 bg-[#9e8a63] rounded-full shrink-0" />
//                             <span className="font-medium text-white">{item.name},</span>
//                             <span className="text-neutral-400">{item.location}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Interactive Navi Mumbai Geographic Vector Map */}
//           <div className="lg:col-span-7 bg-[#0e1114] p-6 sm:p-10 rounded-2xl border border-white/10 relative min-h-[440px] flex items-center justify-center shadow-2xl">
//             {/* Map Decorative Vector Grid Lines */}
//             <svg className="absolute inset-0 w-full h-full text-white/5 pointer-events-none" viewBox="0 0 500 400" fill="none">
//               <path d="M 50 0 V 400 M 150 0 V 400 M 250 0 V 400 M 350 0 V 400 M 450 0 V 400" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
//               <path d="M 0 80 H 500 M 0 160 H 500 M 0 240 H 500 M 0 320 H 500" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
//               {/* Region Contour Path */}
//               <path
//                 d="M 120 40 C 180 80 220 150 200 220 C 180 290 280 340 380 360 C 440 370 470 320 450 260 C 430 200 380 120 300 80 Z"
//                 fill="#161b22"
//                 stroke="#2a3342"
//                 strokeWidth="2"
//               />
//             </svg>

//             {/* Interactive Pins */}
//             <div className="relative w-full h-[380px]">
//               {MAP_PINS.map((pin) => {
//                 const isSelected = activeLocation === pin.id;
//                 return (
//                   <div
//                     key={pin.id}
//                     style={{ left: pin.x, top: pin.y }}
//                     onClick={() => setActiveLocation(pin.id)}
//                     className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
//                   >
//                     <div className="relative flex items-center">
//                       {/* Pulse Circle */}
//                       <span className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${
//                         isSelected ? 'bg-[#9e8a63] ring-4 ring-[#9e8a63]/40 scale-125' : 'bg-neutral-600 group-hover:bg-[#9e8a63]'
//                       }`}>
//                         <span className="w-1.5 h-1.5 bg-white rounded-full" />
//                       </span>

//                       {/* Label Badge */}
//                       <span className={`ml-2 px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold whitespace-nowrap rounded transition-all duration-300 shadow-md ${
//                         isSelected
//                           ? 'bg-[#9e8a63] text-white'
//                           : 'bg-black/70 text-neutral-300 border border-white/10 group-hover:bg-white group-hover:text-black'
//                       }`}>
//                         {pin.label}
//                       </span>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="absolute bottom-3 right-4 text-white/50 text-[9px] uppercase tracking-widest font-normal pointer-events-none">
//               Image Is For Representation Purpose Only
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };




// import React, { useState } from 'react';
// import { ThemeMode } from '../types';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// interface SectionProps {
//   theme?: ThemeMode;
// }

// // ==========================================
// // 1. ABOUT US BLOCK
// // ==========================================
// export const AboutUsSection: React.FC<SectionProps> = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="relative w-full bg-[#f4e2c8] text-[#111]">
//       <div className="relative flex flex-col lg:block min-h-[300px] lg:min-h-[520px]">
//         {/* Vertical "ABOUT US" label pinned to far left edge */}
//         <span className="hidden lg:block absolute left-4 xl:left-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-lr] rotate-180 text-[10px] tracking-[0.4em] uppercase text-[#8b6c44] font-semibold select-none z-20">
//           ABOUT US
//         </span>

//         {/* Text column */}
//         <div className="relative z-0 flex flex-col justify-center pl-10 pr-6 py-14 sm:pl-16 md:pl-20 lg:pl-28 lg:pr-16 lg:py-0 lg:w-[57%]">
//           <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif text-[#111] leading-[1.15] tracking-tight max-w-md">
//             Where Excellence Is Etched<br className="hidden sm:block" /> In Every Process
//           </h2>
//           <p className="text-[14px] sm:text-[15px] text-[#5b5649] leading-[1.9] mt-6 max-w-md">
//             With a massive presence across Navi Mumbai, Platinum Group has created a legacy of excellence in the real estate landscape of the region. The group achieved great success with the collective vision of Dharamshi Patel, Girish Chheda and Virchand Visaria. Currently driven by their second generation, Platinum Group is constantly creating iconic landmarks that adhere to the finest standards of quality.
//           </p>
//           <button
//             onClick={() => navigate('/about')}
//             className="mt-8 self-start px-10 py-3 bg-[#b19661] hover:bg-[#98794c] text-white text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 shadow-lg rounded-none cursor-pointer"
//           >
//             Know More
//           </button>
//         </div>

//         {/* Image column */}
//         <div className="relative w-full h-[320px] sm:h-[420px] lg:h-auto lg:absolute lg:right-0 lg:top-0 lg:w-[43%] lg:h-[calc(100%+160px)] z-10">
//           <img
//             src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
//             alt="Where Excellence Is Etched In Every Process"
//             className="w-full h-full object-cover object-center"
//           />
//           <div className="absolute inset-0 bg-black/15" />

//           <span className="absolute bottom-4 right-5 text-[9px] uppercase tracking-[0.35em] text-white/85">
//             Image Is For Representation Purpose Only
//           </span>

//           <svg
//             className="hidden lg:block absolute inset-0 w-full h-full z-20 pointer-events-none"
//             viewBox="0 0 100 100"
//             preserveAspectRatio="none"
//             fill="none"
//           >
//             <path
//               d="M 78 0 L 78 34 L 42 34 L 42 100"
//               stroke="white"
//               strokeOpacity="0.85"
//               strokeWidth="1"
//               vectorEffect="non-scaling-stroke"
//             />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// };

// export const WhereExcellenceSection = AboutUsSection;

// // ==========================================
// // 2. TEAM CRAFTING LEGACIES BLOCK
// // ==========================================
// export const TeamCraftingLegaciesSection: React.FC<SectionProps> = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="relative w-full bg-[#f7e7d3] text-[#111]">
//       <div className="relative flex flex-col lg:block min-h-[320px] lg:min-h-[480px]">
//         {/* Image column */}
//         <div className="relative w-full h-[320px] sm:h-[420px] lg:h-auto lg:absolute lg:left-0 lg:top-0 lg:w-[42%] lg:h-full z-10">
//           <img
//             src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
//             alt="Crafting Legacies"
//             className="w-full h-full object-cover object-center"
//           />
//           <div className="absolute inset-0 bg-black/16" />
//           <div className="absolute bottom-4 left-4 text-white/80 text-[10px] uppercase tracking-[0.35em] font-normal">
//             Shot At One Platinum
//           </div>
//         </div>

//         {/* Text column */}
//         <div className="relative z-0 flex flex-col justify-center pl-10 pr-6 py-14 sm:pl-16 md:pl-20 lg:pl-[45%] lg:pr-16 lg:py-0">
//           <span className="text-[10px] uppercase tracking-[0.35em] font-semibold text-[#8b6c44] mb-4 inline-block">
//             Team
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif text-[#111] leading-[1.18] tracking-tight mb-6 max-w-lg">
//             Crafting Legacies That Meet<br className="hidden sm:block" /> Global Standards
//           </h2>
//           <p className="text-[14px] sm:text-[15px] text-[#5d5548] leading-[1.9] mb-10 max-w-lg">
//             Each of our projects is handcrafted to perfection right from design to the development stage. Employing nuances of urban planning, strategic analysis, and leveraging on the highest standards of geotechnical engineering, our projects meet and exceed the calibre of world-class construction. We relentlessly focus not only on quality creation, but we also aim to enhance the quality of life and living standards of people, making us a leading choice for safe investments.
//           </p>
//           <button
//             onClick={() => navigate('/about')}
//             className="self-start px-10 py-3 bg-[#ad9360] hover:bg-[#997a47] text-white text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 shadow-lg rounded-none cursor-pointer"
//           >
//             Know More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==========================================
// // 3. PLATINUM PRESENCE SECTION (ENLARGED MAP DESIGN)
// // ==========================================
// export const PlatinumPresenceSection: React.FC<SectionProps> = () => {
//   const [openFaq, setOpenFaq] = useState<'ongoing' | 'completed' | 'upcoming' | null>('ongoing');
//   const [activeLocation, setActiveLocation] = useState<string | null>('seawoods');

//   const ONGOING_LIST = [
//     { name: 'Platinum Westwoods', location: 'Seawoods', key: 'seawoods' },
//     { name: 'Platinum Elysium', location: 'Nerul', key: 'nerul' },
//     { name: 'Platinum Mansionz', location: 'Seawoods', key: 'seawoods' },
//     { name: 'Platinum The Reserve', location: 'Kharghar', key: 'kharghar' },
//     { name: 'Platinum Parksyde', location: 'Kharghar', key: 'kharghar' },
//     { name: 'Platinum Esquire', location: 'Ulwe', key: 'ulwe' },
//     { name: 'Platinum Oakwoods', location: 'Seawoods', key: 'seawoods' },
//     { name: 'Platinum Sicily', location: 'Nerul (Redevelopment)', key: 'nerul' },
//   ];

//   const COMPLETED_LIST = [
//     { name: 'One Platinum', location: 'C.B.D. Belapur', key: 'belapur' },
//     { name: 'Platinum Crescenzo', location: 'Seawoods', key: 'seawoods' },
//     { name: 'Platinum Emporius', location: 'Ulwe', key: 'ulwe' },
//     { name: 'Platinum Experio', location: 'Roadpali', key: 'roadpali' },
//     { name: 'Platinum Escaso', location: 'Ulwe', key: 'ulwe' },
//     { name: 'Platinum Palmwoods', location: 'Seawoods', key: 'seawoods' },
//   ];

//   const UPCOMING_LIST = [
//     { name: 'MIDC', location: 'Juinagar', key: 'juinagar' },
//     { name: 'Sector 28', location: 'Ulwe', key: 'ulwe' },
//   ];

//   const MAP_PINS = [
//     { id: 'juinagar', label: 'JUINAGAR', x: '55%', y: '24%' },
//     { id: 'nerul', label: 'NERUL', x: '48%', y: '36%' },
//     { id: 'belapur', label: 'CBD BELAPUR', x: '58%', y: '45%' },
//     { id: 'seawoods', label: 'SEAWOODS', x: '42%', y: '50%' },
//     { id: 'roadpali', label: 'ROADPALI', x: '82%', y: '44%' },
//     { id: 'kharghar', label: 'KHARGHAR', x: '73%', y: '52%' },
//     { id: 'kamothe', label: 'KAMOTHE', x: '78%', y: '60%' },
//     { id: 'ulwe', label: 'ULWE', x: '62%', y: '72%' },
//   ];

//   return (
//     <section className="relative w-full py-20 lg:py-28 overflow-hidden min-h-[750px] flex items-center">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80"
//           alt="Mountains Background"
//           className="w-full h-full object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
//       </div>

//       {/* Side Label */}
//       <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
//         <span className="block [writing-mode:vertical-lr] rotate-180 text-[10px] uppercase tracking-[0.35em] font-light text-white/70 whitespace-nowrap">
//           PLATINUM PRESENCE
//         </span>
//       </div>

//       <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
//           {/* Left Column: Heading & Cream Accordion */}
//           <div className="lg:col-span-5 space-y-6">
//             <div className="text-white space-y-2">
//               <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif leading-tight font-normal">
//                 A Solid Footprint Across<br />
//                 Navi Mumbai
//               </h2>
//               <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light max-w-md">
//                 We have a wide presence across Navi Mumbai's key locations like Seawoods, Nerul, Kharghar and Ulwe among others.
//               </p>
//             </div>

//             {/* Accordion Box */}
//             <div className="space-y-3 pt-2">
//               {/* ONGOING PROJECTS */}
//               <div className="bg-[#f4efe6] border border-neutral-300/80 shadow-2xl overflow-hidden">
//                 <button
//                   onClick={() => setOpenFaq(openFaq === 'ongoing' ? null : 'ongoing')}
//                   className="w-full flex items-center justify-between text-left p-4 text-neutral-900 font-serif text-base font-medium cursor-pointer"
//                 >
//                   <span>Ongoing Projects</span>
//                   <span className="text-neutral-600 text-lg font-normal">{openFaq === 'ongoing' ? '−' : '+'}</span>
//                 </button>

//                 <AnimatePresence>
//                   {openFaq === 'ongoing' && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="overflow-hidden border-t border-neutral-300/60"
//                     >
//                       <ul className="p-4 pt-2 space-y-2.5 text-xs text-neutral-800">
//                         {ONGOING_LIST.map((item, idx) => (
//                           <li
//                             key={idx}
//                             onClick={() => setActiveLocation(item.key)}
//                             className="flex items-center space-x-2 cursor-pointer hover:text-[#c2a26c] transition-colors"
//                           >
//                             <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full shrink-0" />
//                             <span className="font-semibold">{item.name},</span>
//                             <span className="text-neutral-600">{item.location}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* COMPLETED PROJECTS */}
//               <div className="bg-[#f4efe6] border border-neutral-300/80 shadow-2xl overflow-hidden">
//                 <button
//                   onClick={() => setOpenFaq(openFaq === 'completed' ? null : 'completed')}
//                   className="w-full flex items-center justify-between text-left p-4 text-neutral-900 font-serif text-base font-medium cursor-pointer"
//                 >
//                   <span>Completed Projects</span>
//                   <span className="text-neutral-600 text-lg font-normal">{openFaq === 'completed' ? '−' : '+'}</span>
//                 </button>

//                 <AnimatePresence>
//                   {openFaq === 'completed' && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="overflow-hidden border-t border-neutral-300/60"
//                     >
//                       <ul className="p-4 pt-2 space-y-2.5 text-xs text-neutral-800 max-h-[200px] overflow-y-auto">
//                         {COMPLETED_LIST.map((item, idx) => (
//                           <li
//                             key={idx}
//                             onClick={() => setActiveLocation(item.key)}
//                             className="flex items-center space-x-2 cursor-pointer hover:text-[#c2a26c] transition-colors"
//                           >
//                             <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full shrink-0" />
//                             <span className="font-semibold">{item.name},</span>
//                             <span className="text-neutral-600">{item.location}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* UPCOMING PROJECTS */}
//               <div className="bg-[#f4efe6] border border-neutral-300/80 shadow-2xl overflow-hidden">
//                 <button
//                   onClick={() => setOpenFaq(openFaq === 'upcoming' ? null : 'upcoming')}
//                   className="w-full flex items-center justify-between text-left p-4 text-neutral-900 font-serif text-base font-medium cursor-pointer"
//                 >
//                   <span>Upcoming Projects</span>
//                   <span className="text-neutral-600 text-lg font-normal">{openFaq === 'upcoming' ? '−' : '+'}</span>
//                 </button>

//                 <AnimatePresence>
//                   {openFaq === 'upcoming' && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="overflow-hidden border-t border-neutral-300/60"
//                     >
//                       <ul className="p-4 pt-2 space-y-2.5 text-xs text-neutral-800">
//                         {UPCOMING_LIST.map((item, idx) => (
//                           <li
//                             key={idx}
//                             onClick={() => setActiveLocation(item.key)}
//                             className="flex items-center space-x-2 cursor-pointer hover:text-[#c2a26c] transition-colors"
//                           >
//                             <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full shrink-0" />
//                             <span className="font-semibold">{item.name},</span>
//                             <span className="text-neutral-600">{item.location}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Enlarged Map Graphic */}
//           <div className="lg:col-span-7 relative min-h-[580px] lg:min-h-[620px] flex items-center justify-center">
//             <div className="relative w-full h-[580px] lg:h-[620px]">
//               <svg
//                 className="w-full h-full text-[#1d2d38]/90 drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
//                 viewBox="0 0 700 600"
//                 fill="none"
//               >
//                 <path
//                   d="M 360 40 
//                      C 440 110, 520 180, 500 270 
//                      C 480 320, 580 340, 630 380 
//                      C 670 420, 620 490, 550 520 
//                      C 470 550, 420 510, 390 450 
//                      C 360 400, 310 340, 320 270 
//                      C 330 190, 280 130, 360 40 Z"
//                   fill="#182633"
//                   fillOpacity="0.88"
//                   stroke="#ffffff"
//                   strokeWidth="2"
//                 />
//                 <path
//                   d="M 350 270 Q 450 310 520 250 M 390 410 Q 450 430 480 480 M 325 200 Q 360 230 400 200"
//                   stroke="#ffffff"
//                   strokeWidth="1.2"
//                   strokeOpacity="0.75"
//                   fill="none"
//                 />
//               </svg>

//               {MAP_PINS.map((pin) => {
//                 const isSelected = activeLocation === pin.id;
//                 return (
//                   <div
//                     key={pin.id}
//                     style={{ left: pin.x, top: pin.y }}
//                     onClick={() => setActiveLocation(pin.id)}
//                     className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
//                   >
//                     <div className="flex items-center space-x-2.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 hover:border-white transition-all shadow-xl">
//                       <span className={`w-3 h-3 rounded-full bg-white transition-all duration-300 shadow-[0_0_12px_rgba(255,255,255,0.9)] ${
//                         isSelected ? 'scale-125 bg-[#c2a26c] shadow-[0_0_16px_#c2a26c]' : 'group-hover:scale-110'
//                       }`} />
//                       <span className={`text-[11px] uppercase tracking-wider font-semibold whitespace-nowrap transition-colors ${
//                         isSelected ? 'text-[#c2a26c]' : 'text-white/90 group-hover:text-white'
//                       }`}>
//                         {pin.label}
//                       </span>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <span className="absolute bottom-2 right-2 text-[9px] uppercase tracking-widest text-white/50 pointer-events-none">
//               Image Is For Representation Purpose Only
//             </span>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// // ==========================================
// // 4. COMBINED EXPORT (FOR HomePage.tsx)
// // ==========================================
// export const HomeExcellenceCombinedSection: React.FC<SectionProps> = ({ theme }) => {
//   return (
//     <>
//       <AboutUsSection theme={theme} />
//       <TeamCraftingLegaciesSection theme={theme} />
//       <PlatinumPresenceSection theme={theme} />
//     </>
//   );
// };

// // Default Export as Fallback
// export default HomeExcellenceCombinedSection;



import React, { useState, useEffect } from 'react';
import { ThemeMode } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ChevronRight, Building2 } from 'lucide-react';

interface SectionProps {
  theme?: ThemeMode;
}

// ==========================================
// COMBINED WRAPPER — this is the ONLY thing App.tsx needs to import:
//   import { HomeExcellenceCombinedSection } from './components/HomeExcellenceSection';
//   <HomeExcellenceCombinedSection theme={theme} />
// Renders everything in the CORRECT order internally, so there's no
// ordering to get wrong in App.tsx anymore:
//   About -> Ongoing Projects (dark carousel) -> Team -> Presence
// ==========================================
export const HomeExcellenceCombinedSection: React.FC<SectionProps> = ({ theme }) => {
  return (
    <>
      <AboutUsSection theme={theme} />
      <OngoingProjectsCarousel theme={theme} />
      <TeamCraftingLegaciesSection theme={theme} />
      <PlatinumPresenceSection theme={theme} />
    </>
  );
};

export const AboutUsSection: React.FC<SectionProps> = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden" style={{ background: '#f5e6d3' }}>
      {/* Vertical "ABOUT US" label — pinned to far left edge */}
      <span className="hidden lg:flex absolute left-0 top-0 bottom-0 items-center z-20 pointer-events-none"
        style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#a1896b', fontWeight: 600, padding: '0 6px' }}>
        ABOUT US
      </span>

      <div className="flex flex-col lg:flex-row min-h-[420px] lg:min-h-[500px]">
        {/* LEFT: Text area — beige background */}
        <div className="relative lg:w-[50%] flex flex-col justify-center px-8 py-12 lg:py-16 lg:pl-16 lg:pr-12" style={{ background: '#f5e6d3' }}>
          <h2 className="text-3xl sm:text-[38px] md:text-[42px] font-serif text-[#222] leading-[1.15] tracking-tight">
            Where Excellence Is Etched<br />
            In Every Process
          </h2>
          <p className="text-[14px] text-[#58595b] leading-[1.85] mt-5 text-justify" style={{ width: '88%' }}>
            With a massive presence across Navi Mumbai, Platinum Group has created a legacy of excellence in the real estate landscape of the region. The group achieved great success with the collective vision of Dharamshi Patel, Girish Chheda and Virchand Virsaria. Currently driven by their second generation, Platinum Group is constantly creating iconic landmarks that adhere to the finest standards of quality.
          </p>
          <button
            onClick={() => navigate('/about')}
            className="mt-8 self-start px-8 py-3 bg-[#a1896b] hover:bg-[#8b7559] text-white text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 cursor-pointer"
          >
            Know More
          </button>
        </div>

        {/* RIGHT: Photo — bleeds to browser edge, white rect border overlay */}
        <div className="relative lg:w-[50%] min-h-[340px] lg:min-h-0 overflow-hidden">
          <img
            src="/assets/img/home/about.jpg"
            alt="Where Excellence Is Etched"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* White rectangle outline overlay — matches reference screenshot exactly */}
          <div className="absolute z-10 pointer-events-none"
            style={{ top: '12%', left: '18%', right: '8%', bottom: '8%', border: '2px solid rgba(255,255,255,0.85)' }} />
          {/* Disclaimer */}
          <span className="absolute bottom-3 right-4 z-10 text-white/80"
            style={{ fontSize: '8px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Image Is For Representation Purpose Only
          </span>
        </div>
      </div>
    </section>
  );
};

export const WhereExcellenceSection = AboutUsSection;

// ==========================================
// SECTION: ONGOING PROJECTS CAROUSEL (dark) — sits between About and Team
// ==========================================
interface OngoingProject {
  title: string;
  location: string;
  image: string;
}

const ONGOING_ITEMS: OngoingProject[] = [
  { title: 'Platinum Oakwoods', location: 'Seawoods, Navi Mumbai', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Platinum Sicily', location: 'Nerul, Navi Mumbai (Redevelopment)', image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Platinum Parksyde', location: 'Kharghar, Navi Mumbai', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Platinum Elysium', location: 'Nerul, Navi Mumbai', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Platinum Esquire', location: 'Ulwe, Navi Mumbai', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Platinum The Reserve', location: 'Kharghar, Navi Mumbai', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Platinum Mansionz', location: 'Seawoods, Navi Mumbai', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Platinum Westwoods', location: 'Seawoods, Navi Mumbai', image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80' },
];

export const OngoingProjectsCarousel: React.FC<SectionProps> = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  // Show 2 cards at a time; slide by 1
  const visibleCards = 2;
  const maxIndex = ONGOING_ITEMS.length - visibleCards;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => window.clearInterval(timer);
  }, [maxIndex]);

  const totalDots = 4;
  const activeDotIndex = Math.min(totalDots - 1, Math.floor((currentIndex / maxIndex) * (totalDots - 1)));

  const handleDotClick = (dotIdx: number) => {
    const targetIndex = Math.round((dotIdx / (totalDots - 1)) * maxIndex);
    setCurrentIndex(Math.min(targetIndex, maxIndex));
  };

  return (
    <section className="w-full text-white relative overflow-hidden" style={{ background: 'url(/assets/img/home/projectbg.jpg) no-repeat center center', backgroundSize: 'cover' }}>
      {/* Vertical "ONGOING PROJECTS" label — far left */}
      <span className="hidden lg:flex absolute left-0 top-0 bottom-0 items-center z-20 pointer-events-none"
        style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', fontWeight: 600, padding: '0 6px' }}>
        ONGOING PROJECTS
      </span>

      <div className="relative z-10 py-12 md:py-16 lg:py-20 pl-6 lg:pl-14">
        {/* 4-column layout (matches screenshot exactly):
            [info card] [photo card] [photo card] [view all panel] */}
        <div className="flex items-stretch gap-0 lg:gap-0 w-full overflow-hidden">

          {/* Col 1: Info card with white 1px border, dark bg, icon + text */}
          <div className="hidden lg:flex flex-col justify-end p-8 shrink-0 w-[22%] min-h-[440px] relative overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.5)' }}>
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-7">
                <Building2 className="w-7 h-7 text-[#1b1c1e]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-white leading-[1.2] tracking-tight">
                Beautifying Skylines<br />
                Of The Future With<br />
                Excellence
              </h2>
              <p className="text-[12px] text-white/75 leading-[1.85] mt-4">
                Our diverse range of ongoing projects exemplifies our commitment to exceptional construction standards and elegant design.
              </p>
            </div>
          </div>

          {/* Col 2 + 3: Sliding project photo cards — each card has photo + white label strip */}
          <div className="flex-1 min-w-0 overflow-hidden">
            <motion.div
              animate={{ x: `calc(-${currentIndex} * 50%)` }}
              transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
              className="flex w-full"
              style={{ width: `${ONGOING_ITEMS.length * 50}%` }}
            >
              {ONGOING_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="shrink-0 flex flex-col bg-white overflow-hidden group cursor-pointer"
                  style={{ width: `${100 / ONGOING_ITEMS.length}%` }}
                >
                  {/* Photo — square-ish */}
                  <div className="relative overflow-hidden bg-neutral-900" style={{ aspectRatio: '1/1' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* White label strip */}
                  <div className="px-4 py-3 bg-white text-[#111]">
                    <h3 className="text-[14px] font-serif font-semibold text-[#111] leading-snug">
                      {item.title},
                    </h3>
                    <p className="text-[11px] text-[#6b6555] mt-0.5">
                      {item.location}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Col 4: VIEW ALL PROJECTS panel */}
          <div
            onClick={() => navigate('/projects')}
            className="hidden lg:flex shrink-0 w-[17%] flex-col justify-center items-center text-center relative overflow-hidden cursor-pointer"
            style={{ border: '1px solid rgba(255,255,255,0.3)' }}
          >
            <img
              src="/assets/img/home/viewprojects.jpg"
              alt="View All Projects"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white leading-tight">
                VIEW<br />ALL PROJECTS
              </span>
              <div className="w-11 h-11 rounded-full bg-[#b88a33] flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Pagination dots — centered below the cards */}
        <div className="flex items-center justify-center gap-2 pt-5">
          {[0, 1, 2, 3].map((dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => handleDotClick(dotIdx)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                activeDotIndex === dotIdx
                  ? 'w-3 h-3 bg-white'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to section ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// SECTION 5: TEAM - Crafting Legacies That Meet Global Standards
// ==========================================
export const TeamCraftingLegaciesSection: React.FC<SectionProps> = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden" style={{ background: '#f5e6d3' }}>
      {/* Cream/beige top strip that spans full width above the photo (matches screenshot) */}
      <div className="w-full h-[80px] lg:h-[100px]" style={{ background: '#f5e6d3' }} />

      {/* Main two-column row: photo LEFT, text RIGHT */}
      <div className="flex flex-col lg:flex-row">
        {/* LEFT: Photo — full-bleed, no padding, takes ~48% width */}
        <div className="relative w-full lg:w-[48%] min-h-[360px] lg:min-h-[560px] overflow-hidden">
          <img
            src="/assets/img/home/quality.jpg"
            alt="Crafting Legacies"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* "Shot At One Platinum" label bottom-left */}
          <span className="absolute bottom-4 left-4 z-10 text-white/80"
            style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Shot At One Platinum
          </span>
        </div>

        {/* RIGHT: Text on beige background */}
        <div className="relative lg:w-[52%] flex flex-col justify-center px-8 py-12 lg:py-16 lg:pl-14 lg:pr-16" style={{ background: '#f5e6d3' }}>
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#a1896b] mb-4 inline-block">
            Team
          </span>
          {/* Thin horizontal line under Team label (matches reference) */}
          <div className="w-[140px] h-px bg-[#a1896b]/40 mb-6" />
          <h2 className="text-3xl sm:text-[38px] md:text-[42px] font-serif text-[#222] leading-[1.15] tracking-tight mb-5">
            Crafting Legacies That Meet<br />
            Global Standards
          </h2>
          <p className="text-[14px] text-[#58595b] leading-[1.85] mb-8 text-justify" style={{ maxWidth: '480px' }}>
            Each of our projects is handcrafted to perfection right from design to the development stage. Employing nuances of urban planning, strategic analysis, and leveraging on the highest standards of geotechnical engineering, our projects meet and exceed the calibre of world-class construction. We relentlessly focus not only on quality creation, but we also aim to enhance the quality of life and living standards of people, making us a leading choice for safe investments. We know that every home we build carries our legacy through the tides of time.
          </p>
          <button
            onClick={() => navigate('/about')}
            className="self-start px-8 py-3 bg-[#a1896b] hover:bg-[#8b7559] text-white text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 cursor-pointer"
          >
            Know More
          </button>
        </div>
      </div>

      {/* Bottom padding */}
      <div className="w-full h-10 lg:h-16" style={{ background: '#f5e6d3' }} />
    </section>
  );
};

// ==========================================
// SECTION 6: PLATINUM PRESENCE - Navi Mumbai Map & Accordion
// ==========================================
export const PlatinumPresenceSection: React.FC<SectionProps> = () => {
  const [openFaq, setOpenFaq] = useState<'ongoing' | 'completed' | 'upcoming' | null>('ongoing');
  const [activeLocation, setActiveLocation] = useState<string | null>('seawoods');

  const ONGOING_LIST = [
    { name: 'Platinum Westwoods', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
    { name: 'Platinum Elysium', location: 'Nerul, Navi Mumbai', key: 'nerul' },
    { name: 'Platinum Mansionz', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
    { name: 'Platinum The Reserve', location: 'Kharghar, Navi Mumbai', key: 'kharghar' },
    { name: 'Platinum Parksyde', location: 'Kharghar, Navi Mumbai', key: 'kharghar' },
    { name: 'Platinum Esquire', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
    { name: 'Platinum Oakwoods', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
    { name: 'Platinum Sicily', location: 'Nerul, Navi Mumbai (Redevelopment)', key: 'nerul' },
  ];

  const COMPLETED_LIST = [
    { name: 'One Platinum', location: 'C.B.D. Belapur, Navi Mumbai', key: 'belapur' },
    { name: 'Platinum Crescenzo', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
    { name: 'Platinum Emporius', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
    { name: 'Platinum Experio', location: 'Roadpali, Navi Mumbai', key: 'roadpali' },
    { name: 'Platinum Escaso', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
    { name: 'Platinum Palmwoods', location: 'Seawoods, Navi Mumbai', key: 'seawoods' },
    { name: 'Platinum Venecia', location: 'Nerul, Navi Mumbai', key: 'nerul' },
    { name: 'Platinum Avior', location: 'Roadpali, Navi Mumbai', key: 'roadpali' },
    { name: 'Platinum Aura', location: 'Roadpali, Navi Mumbai', key: 'roadpali' },
    { name: 'Platinum Liviano', location: 'Kamothe, Navi Mumbai', key: 'kamothe' },
    { name: 'Platinum Palacio I & II', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
    { name: 'Platinum Cs Regalo', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
  ];

  const UPCOMING_LIST = [
    { name: 'MIDC', location: 'Juinagar, Navi Mumbai', key: 'juinagar' },
    { name: 'Sector 28', location: 'Ulwe, Navi Mumbai', key: 'ulwe' },
  ];

  const MAP_PINS = [
    { id: 'juinagar', label: 'JUINAGAR', x: '42%', y: '28%' },
    { id: 'nerul', label: 'NERUL', x: '38%', y: '42%' },
    { id: 'belapur', label: 'CBD BELAPUR', x: '46%', y: '48%' },
    { id: 'seawoods', label: 'SEAWOODS', x: '34%', y: '54%' },
    { id: 'kharghar', label: 'KHARGHAR', x: '68%', y: '52%' },
    { id: 'roadpali', label: 'ROADPALI', x: '82%', y: '46%' },
    { id: 'kamothe', label: 'KAMOTHE', x: '78%', y: '62%' },
    { id: 'ulwe', label: 'ULWE', x: '58%', y: '74%' },
  ];

  return (
    <section className="w-full py-10 md:py-16 relative overflow-hidden" style={{ background: 'url(/assets/img/home/ourpresence.jpg) no-repeat', backgroundSize: 'cover', color: '#fff' }}>
      {/* Side Label */}
      <div className="absolute top-12 left-6 hidden xl:block">
        <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.35em] text-[10px] font-medium text-white/70 whitespace-nowrap">
          PLATINUM PRESENCE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Accordions */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="xl:hidden text-[10px] uppercase tracking-[0.35em] font-medium text-white/70 block mb-2">
                PLATINUM PRESENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif leading-[1.25] font-normal text-white">
                A Solid Footprint Across<br />
                Navi Mumbai
              </h2>
              <p className="text-[13px] text-white/80 leading-relaxed font-normal mt-4">
                We have a wide presence across Navi Mumbai's key locations like Seawoods, Nerul, Kharghar and Ulwe among others.
              </p>
            </div>

            {/* Accordion FAQ */}
            <div className="space-y-3 pt-2">
              {/* ONGOING PROJECTS */}
              <div className="border-b border-white/20 pb-3">
                <button
                  onClick={() => setOpenFaq(openFaq === 'ongoing' ? null : 'ongoing')}
                  className="w-full flex items-center justify-between text-left py-2 hover:text-[#d4c28b] transition-colors cursor-pointer group"
                >
                  <span className="text-lg font-serif text-white group-hover:text-[#d4c28b]">
                    Ongoing Projects ({ONGOING_LIST.length})
                  </span>
                  <span className="text-[#d4c28b] text-xl font-bold">{openFaq === 'ongoing' ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openFaq === 'ongoing' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="pt-3 space-y-2 text-[12px] pl-2">
                        {ONGOING_LIST.map((item, idx) => (
                          <li
                            key={idx}
                            onClick={() => setActiveLocation(item.key)}
                            className="flex items-center space-x-2 cursor-pointer hover:text-[#d4c28b] transition-colors"
                          >
                            <span className="w-1.5 h-1.5 bg-[#a1896b] rounded-full shrink-0" />
                            <span className="font-medium text-white">{item.name},</span>
                            <span className="text-white/60">{item.location}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* COMPLETED PROJECTS */}
              <div className="border-b border-white/20 pb-3">
                <button
                  onClick={() => setOpenFaq(openFaq === 'completed' ? null : 'completed')}
                  className="w-full flex items-center justify-between text-left py-2 hover:text-[#d4c28b] transition-colors cursor-pointer group"
                >
                  <span className="text-lg font-serif text-white group-hover:text-[#d4c28b]">
                    Completed Projects ({COMPLETED_LIST.length})
                  </span>
                  <span className="text-[#d4c28b] text-xl font-bold">{openFaq === 'completed' ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openFaq === 'completed' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="pt-3 space-y-2 text-[12px] pl-2 max-h-[220px] overflow-y-auto custom-scrollbar">
                        {COMPLETED_LIST.map((item, idx) => (
                          <li
                            key={idx}
                            onClick={() => setActiveLocation(item.key)}
                            className="flex items-center space-x-2 cursor-pointer hover:text-[#d4c28b] transition-colors"
                          >
                            <span className="w-1.5 h-1.5 bg-[#a1896b] rounded-full shrink-0" />
                            <span className="font-medium text-white">{item.name},</span>
                            <span className="text-white/60">{item.location}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* UPCOMING PROJECTS */}
              <div className="border-b border-white/20 pb-3">
                <button
                  onClick={() => setOpenFaq(openFaq === 'upcoming' ? null : 'upcoming')}
                  className="w-full flex items-center justify-between text-left py-2 hover:text-[#d4c28b] transition-colors cursor-pointer group"
                >
                  <span className="text-lg font-serif text-white group-hover:text-[#d4c28b]">
                    Upcoming Projects ({UPCOMING_LIST.length})
                  </span>
                  <span className="text-[#d4c28b] text-xl font-bold">{openFaq === 'upcoming' ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openFaq === 'upcoming' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="pt-3 space-y-2 text-[12px] pl-2">
                        {UPCOMING_LIST.map((item, idx) => (
                          <li
                            key={idx}
                            onClick={() => setActiveLocation(item.key)}
                            className="flex items-center space-x-2 cursor-pointer hover:text-[#d4c28b] transition-colors"
                          >
                            <span className="w-1.5 h-1.5 bg-[#a1896b] rounded-full shrink-0" />
                            <span className="font-medium text-white">{item.name},</span>
                            <span className="text-white/60">{item.location}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Navi Mumbai Geographic Vector Map */}
          <div className="lg:col-span-7 bg-[#0e1114] p-6 sm:p-10 rounded-2xl border border-white/10 relative min-h-[440px] flex items-center justify-center shadow-2xl">
            {/* Map Decorative Vector Grid Lines */}
            <svg className="absolute inset-0 w-full h-full text-white/5 pointer-events-none" viewBox="0 0 500 400" fill="none">
              <path d="M 50 0 V 400 M 150 0 V 400 M 250 0 V 400 M 350 0 V 400 M 450 0 V 400" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 0 80 H 500 M 0 160 H 500 M 0 240 H 500 M 0 320 H 500" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              {/* Region Contour Path */}
              <path
                d="M 120 40 C 180 80 220 150 200 220 C 180 290 280 340 380 360 C 440 370 470 320 450 260 C 430 200 380 120 300 80 Z"
                fill="#161b22"
                stroke="#2a3342"
                strokeWidth="2"
              />
            </svg>

            {/* Interactive Pins */}
            <div className="relative w-full h-[380px]">
              {MAP_PINS.map((pin) => {
                const isSelected = activeLocation === pin.id;
                return (
                  <div
                    key={pin.id}
                    style={{ left: pin.x, top: pin.y }}
                    onClick={() => setActiveLocation(pin.id)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                  >
                    <div className="relative flex items-center">
                      {/* Pulse Circle */}
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected ? 'bg-[#9e8a63] ring-4 ring-[#9e8a63]/40 scale-125' : 'bg-neutral-600 group-hover:bg-[#9e8a63]'
                      }`}>
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      </span>

                      {/* Label Badge */}
                      <span className={`ml-2 px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold whitespace-nowrap rounded transition-all duration-300 shadow-md ${
                        isSelected
                          ? 'bg-[#9e8a63] text-white'
                          : 'bg-black/70 text-neutral-300 border border-white/10 group-hover:bg-white group-hover:text-black'
                      }`}>
                        {pin.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute bottom-3 right-4 text-white/50 text-[9px] uppercase tracking-widest font-normal pointer-events-none">
              Image Is For Representation Purpose Only
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};