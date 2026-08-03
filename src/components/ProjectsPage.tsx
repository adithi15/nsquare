// // import React, { useState } from 'react';
// // import { Property, ThemeMode } from '../types';
// // import { motion, AnimatePresence } from 'motion/react';
// // import { MapPin, ArrowUpRight, Download, Calendar } from 'lucide-react';

// // interface ProjectsPageProps {
// //   theme: ThemeMode;
// //   initialFilter?: 'ongoing' | 'completed' | 'upcoming';
// //   properties: Property[];
// //   onSelectProperty: (property: Property) => void;
// //   onRequestBrochure: (property: Property) => void;
// //   onScheduleVisit: (property: Property) => void;
// // }

// // interface ProjectItem {
// //   id: string;
// //   name: string;
// //   location: string;
// //   category: 'ongoing' | 'completed' | 'upcoming';
// //   image: string;
// //   maharera?: string;
// //   shotAtLocation?: boolean;
// //   description?: string;
// //   propertyId?: string;
// // }

// // const ALL_PROJECTS: ProjectItem[] = [
// //   // Ongoing
// //   {
// //     id: 'parksyde',
// //     name: 'Platinum Parksyde',
// //     location: 'Kharghar, Navi Mumbai',
// //     category: 'ongoing',
// //     image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
// //     maharera: 'P52000046110',
// //     description: 'Palatial 2 & 3 Bed Golf-facing residences with luxury club amenities.',
// //     propertyId: 'royal-palms-estate'
// //   },
// //   {
// //     id: 'elysium',
// //     name: 'Platinum Elysium',
// //     location: 'Nerul, Navi Mumbai',
// //     category: 'ongoing',
// //     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
// //     maharera: 'P51700050735',
// //     description: 'Ultra-luxe high-rise towers in the heart of Nerul with panoramic vistas.',
// //     propertyId: 'platinum-sky-towers'
// //   },
// //   {
// //     id: 'esquire',
// //     name: 'Platinum Esquire',
// //     location: 'Ulwe, Navi Mumbai',
// //     category: 'ongoing',
// //     image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
// //     maharera: 'P52000054452',
// //     description: 'Executive 2 & 3 BHK residences with grand entrance lobby and sky lounge.',
// //     propertyId: 'aurum-villas'
// //   },
// //   {
// //     id: 'reserve',
// //     name: 'Platinum The Reserve',
// //     location: 'Kharghar, Navi Mumbai',
// //     category: 'ongoing',
// //     image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
// //     maharera: 'P52000078185',
// //     description: 'Exclusive reserve edition 3 & 4 Bed palatial homes overlooking hills.',
// //     propertyId: 'royal-palms-estate'
// //   },
// //   {
// //     id: 'westwoods',
// //     name: 'Platinum Westwoods',
// //     location: 'Seawoods, Navi Mumbai',
// //     category: 'ongoing',
// //     image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
// //     maharera: 'P51700050489',
// //     description: 'Eco-conscious green living spaces nestled in Seawoods prime sector.',
// //     propertyId: 'platinum-sky-towers'
// //   },
// //   {
// //     id: 'mansionz',
// //     name: 'Platinum Mansionz',
// //     location: 'Seawoods, Navi Mumbai',
// //     category: 'ongoing',
// //     image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
// //     maharera: 'P51700053815',
// //     description: 'Bespoke mansion-style sky apartments with private elevator access.',
// //     propertyId: 'aurum-villas'
// //   },
// //   {
// //     id: 'oakwoods',
// //     name: 'Platinum Oakwoods',
// //     location: 'Seawoods, Navi Mumbai',
// //     category: 'ongoing',
// //     image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
// //     maharera: 'P51700079286',
// //     description: 'Super-sized 2, 3 & 4 BHK luxury residences with infinity pool.',
// //     propertyId: 'platinum-sky-towers'
// //   },
// //   {
// //     id: 'sicily',
// //     name: 'Platinum Sicily',
// //     location: 'Nerul, Navi Mumbai (Redevelopment)',
// //     category: 'ongoing',
// //     image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
// //     maharera: 'P51700079378',
// //     description: 'Mediterranean-inspired heritage redevelopment in prime Nerul.',
// //     propertyId: 'royal-palms-estate'
// //   },

// //   // Completed
// //   {
// //     id: 'one-platinum',
// //     name: 'One Platinum',
// //     location: 'C.B.D. Belapur, Navi Mumbai',
// //     category: 'completed',
// //     shotAtLocation: true,
// //     image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
// //     description: 'Grade-A flagship commercial tower and business landmark.',
// //     propertyId: 'platinum-financial-hub'
// //   },
// //   {
// //     id: 'crescenzo',
// //     name: 'Platinum Crescenzo',
// //     location: 'Seawoods, Navi Mumbai',
// //     category: 'completed',
// //     shotAtLocation: true,
// //     image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
// //     description: 'Delivered landmark residential complex in Seawoods.'
// //   },
// //   {
// //     id: 'emporius',
// //     name: 'Platinum Emporius',
// //     location: 'Ulwe, Navi Mumbai',
// //     category: 'completed',
// //     shotAtLocation: true,
// //     image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
// //     description: 'Premier retail and corporate office space in Ulwe.'
// //   },
// //   {
// //     id: 'experio',
// //     name: 'Platinum Experio',
// //     location: 'Roadpali, Navi Mumbai',
// //     category: 'completed',
// //     shotAtLocation: true,
// //     image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
// //     description: 'Modern residential tower delivered with premium amenities.'
// //   },
// //   {
// //     id: 'escaso',
// //     name: 'Platinum Escaso',
// //     location: 'Ulwe, Navi Mumbai',
// //     category: 'completed',
// //     shotAtLocation: true,
// //     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
// //     description: 'Sophisticated living spaces with excellent connectivity.'
// //   },
// //   {
// //     id: 'palmwoods',
// //     name: 'Platinum Palmwoods',
// //     location: 'Seawoods, Navi Mumbai',
// //     category: 'completed',
// //     shotAtLocation: true,
// //     image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
// //     description: 'Award-winning palm garden residential estate.'
// //   },
// //   {
// //     id: 'venecia',
// //     name: 'Platinum Venecia',
// //     location: 'Nerul, Navi Mumbai',
// //     category: 'completed',
// //     image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
// //     description: 'Venetian inspired waterfront luxury residences.'
// //   },
// //   {
// //     id: 'avior',
// //     name: 'Platinum Avior',
// //     location: 'Roadpali, Navi Mumbai',
// //     category: 'completed',
// //     image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
// //     description: 'High-rise residential tower delivered ahead of schedule.'
// //   },
// //   {
// //     id: 'aura',
// //     name: 'Platinum Aura',
// //     location: 'Roadpali, Navi Mumbai',
// //     category: 'completed',
// //     image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
// //     description: 'Luxury 2 BHK residences delivered with high quality standards.'
// //   },
// //   {
// //     id: 'liviano',
// //     name: 'Platinum Liviano',
// //     location: 'Kamothe, Navi Mumbai',
// //     category: 'completed',
// //     image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
// //     description: 'Contemporary living spaces with landscaped garden podium.'
// //   },
// //   {
// //     id: 'palacio',
// //     name: 'Platinum Palacio I & II',
// //     location: 'Ulwe, Navi Mumbai',
// //     category: 'completed',
// //     image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
// //     description: 'Twin palatial towers defining Ulwe skyline.'
// //   },
// //   {
// //     id: 'cs-regalo',
// //     name: 'Platinum Cs Regalo',
// //     location: 'Ulwe, Navi Mumbai',
// //     category: 'completed',
// //     image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
// //     description: 'Signature boutique residential project.'
// //   },

// //   // Upcoming
// //   {
// //     id: 'midc-juinagar',
// //     name: 'MIDC',
// //     location: 'Juinagar, Navi Mumbai',
// //     category: 'upcoming',
// //     image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
// //     description: 'Upcoming Grade-A IT Park and Commercial Hub in Juinagar.'
// //   },
// //   {
// //     id: 'sector-28-ulwe',
// //     name: 'Sector 28',
// //     location: 'Ulwe, Navi Mumbai',
// //     category: 'upcoming',
// //     image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
// //     description: 'Next-generation luxury residential development unveiling soon.'
// //   }
// // ];

// // export const ProjectsPage: React.FC<ProjectsPageProps> = ({
// //   theme,
// //   initialFilter = 'ongoing',
// //   properties,
// //   onSelectProperty,
// //   onRequestBrochure,
// //   onScheduleVisit
// // }) => {
// //   const [activeTab, setActiveTab] = useState<'ongoing' | 'completed' | 'upcoming'>(initialFilter);

// //   const filteredProjects = ALL_PROJECTS.filter((p) => p.category === activeTab);

// //   return (
// //     <div className="w-full space-y-12 pb-16 select-none">
// //       {/* 1. Hero Common Banner */}
// //       <section className="relative w-full h-[50vh] min-h-[420px] max-h-[550px] overflow-hidden flex items-end pb-10 px-6 md:px-12 pt-24 md:pt-28">
// //         <motion.div
// //           initial={{ opacity: 0, scale: 1.05 }}
// //           animate={{ opacity: 1, scale: 1.0 }}
// //           transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
// //           className="absolute inset-0"
// //         >
// //           <img
// //             src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80"
// //             alt="Ongoing Projects"
// //             className="w-full h-full object-cover object-center"
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
// //         </motion.div>

// //         <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
// //             className="space-y-3"
// //           >
// //             <span className="inline-block bg-gold/20 border border-gold/40 text-gold text-[10px] uppercase tracking-[0.4em] font-bold px-4 py-1.5 rounded-full backdrop-blur-md">
// //               Platinum Portfolio
// //             </span>
// //             <h1 className="text-4xl md:text-5xl serif italic text-white font-light">
// //               Creating Iconic Statements With Incredible Craftsmanship
// //             </h1>
// //           </motion.div>

// //           <span className="text-[10px] uppercase tracking-widest text-white/50 font-light shrink-0">
// //             Image Is For Representation Purpose Only
// //           </span>
// //         </div>
// //       </section>

// //       {/* 2. Sub-Header Description & Category Tabs */}
// //       <section className="px-6 md:px-12 max-w-7xl mx-auto w-full space-y-8">
// //         <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 dark:border-white/10 pb-8 gap-6">
// //           <div className="max-w-2xl">
// //             <p className="text-sm md:text-base text-neutral-700 dark:text-white/80 font-light leading-relaxed">
// //               Our diverse range of projects are fine examples of excellence, thoughtfulness and innovation in construction. They all reflect our commitment to creating spaces where happiness can be felt in abundance.
// //             </p>
// //           </div>

// //           {/* Nav Pills for Ongoing / Completed / Upcoming */}
// //           <div className="flex items-center space-x-2 bg-neutral-100 dark:bg-black/60 p-1.5 rounded-full border border-neutral-200 dark:border-white/10 backdrop-blur-md shrink-0">
// //             {(['ongoing', 'completed', 'upcoming'] as const).map((tab) => (
// //               <button
// //                 key={tab}
// //                 onClick={() => setActiveTab(tab)}
// //                 className={`px-6 py-2.5 text-[10px] uppercase tracking-[0.25em] font-bold rounded-full transition-all duration-300 cursor-pointer ${
// //                   activeTab === tab
// //                     ? 'bg-gold text-black shadow-[0_0_15px_rgba(197,160,89,0.5)]'
// //                     : 'text-neutral-600 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-white/5'
// //                 }`}
// //               >
// //                 {tab === 'ongoing' && 'Ongoing Projects'}
// //                 {tab === 'completed' && 'Completed Projects'}
// //                 {tab === 'upcoming' && 'Upcoming Projects'}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* 3. Projects Cards Grid */}
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={activeTab}
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -20 }}
// //             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
// //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// //           >
// //             {filteredProjects.map((proj, idx) => {
// //               const matchedProp = properties.find((p) => p.id === proj.propertyId) || properties[0];

// //               return (
// //                 <motion.div
// //                   key={proj.id}
// //                   initial={{ opacity: 0, y: 30 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
// //                   className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-black/40 shadow-sm dark:shadow-none backdrop-blur-md overflow-hidden hover:border-gold/50 transition-all duration-500 group flex flex-col justify-between"
// //                 >
// //                   {/* Thumbnail */}
// //                   <div className="relative h-64 overflow-hidden">
// //                     <img
// //                       src={proj.image}
// //                       alt={proj.name}
// //                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
// //                     />
// //                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

// //                     {proj.maharera && (
// //                       <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-gold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border border-gold/30">
// //                         MahaRERA: {proj.maharera}
// //                       </div>
// //                     )}

// //                     {proj.shotAtLocation && (
// //                       <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-gold text-[8px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-sm border border-gold/40 shadow-lg">
// //                         SHOT AT LOCATION
// //                       </div>
// //                     )}

// //                     <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white/80 text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
// //                       {proj.category}
// //                     </div>
// //                   </div>

// //                   {/* Body Content */}
// //                   <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
// //                     <div className="space-y-2">
// //                       <h3 className="text-2xl serif italic text-neutral-900 dark:text-white group-hover:text-gold transition-colors">
// //                         {proj.name},
// //                       </h3>
// //                       <div className="flex items-center text-xs text-neutral-600 dark:text-white/70 font-light space-x-1.5">
// //                         <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
// //                         <span>{proj.location}</span>
// //                       </div>
// //                       {proj.description && (
// //                         <p className="text-xs text-neutral-500 dark:text-white/60 font-light leading-relaxed pt-2 line-clamp-2">
// //                           {proj.description}
// //                         </p>
// //                       )}
// //                     </div>

// //                     {/* Action Bar */}
// //                     <div className="flex items-center space-x-3 pt-4 border-t border-neutral-200 dark:border-white/10">
// //                       <button
// //                         onClick={() => onSelectProperty(matchedProp)}
// //                         className="flex-1 bg-gold text-black py-3 px-4 text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-[#D4B575] transition-all rounded-sm flex items-center justify-center space-x-2 cursor-pointer"
// //                       >
// //                         <span>View Details</span>
// //                         <ArrowUpRight className="w-3.5 h-3.5" />
// //                       </button>
// //                       <button
// //                         onClick={() => onRequestBrochure(matchedProp)}
// //                         className="p-3 border border-neutral-300 dark:border-white/20 hover:border-gold text-neutral-800 dark:text-white hover:text-gold transition-all rounded-sm cursor-pointer"
// //                         title="Download Brochure"
// //                       >
// //                         <Download className="w-4 h-4" />
// //                       </button>
// //                       <button
// //                         onClick={() => onScheduleVisit(matchedProp)}
// //                         className="p-3 border border-neutral-300 dark:border-white/20 hover:border-gold text-neutral-800 dark:text-white hover:text-gold transition-all rounded-sm cursor-pointer"
// //                         title="Schedule Visit"
// //                       >
// //                         <Calendar className="w-4 h-4" />
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               );
// //             })}
// //           </motion.div>
// //         </AnimatePresence>
// //       </section>
// //     </div>
// //   );
// // };




// import React, { useState } from 'react';
// import { Property } from '../types';
// import { ProjectModal } from './ProjectModal'; // Adjust path
// // ... other imports ...

// export const ProjectsPage: React.FC<ProjectsPageProps> = ({
//   properties,
//   // ... other props ...
// }) => {
//   const [activeTab, setActiveTab] = useState<'ongoing' | 'completed'>(initialFilter);
  
//   // 1. ADD STATE FOR MODAL CONTROL
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPropName, setSelectedPropName] = useState<string>('');

//   // 2. FUNCTION TO OPEN MODAL
//   const handleOpenModal = (propertyName: string) => {
//     setSelectedPropName(propertyName);
//     setIsModalOpen(true);
//   };

//   const filteredProjects = ALL_PROJECTS.filter((p) => p.category === activeTab);

//   return (
//     <div className="w-full bg-[#f8f9fa] min-h-screen font-sans">
      
//       {/* ... your Hero Section and Tabs code ... */}

//       {/* Projects Grid Section */}
//       <section className="relative z-20 px-6 max-w-7xl mx-auto -mt-36">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((proj) => (
//             <div
//               key={proj.id}
//               // 3. TRIGGER MODAL ON CARD CLICK
//               onClick={() => handleOpenModal(proj.name)}
//               className="bg-white rounded-none shadow-md overflow-hidden cursor-pointer group"
//             >
//               {/* Card Image */}
//               <div className="relative aspect-[4/4.8] w-full overflow-hidden">
//                 <img src={proj.image} alt={proj.name} className="object-cover" />
//               </div>

//               {/* Card Text Footer */}
//               <div className="p-4 pb-5 bg-white">
//                 <h3 className="text-sm font-medium">{proj.name},</h3>
//                 <p className="text-xs text-neutral-500">{proj.location}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 4. RENDER MODAL AT END OF PAGE */}
//       <ProjectModal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//         propertyName={selectedPropName} 
//       />
//     </div>
//   );
// // };



// import React, { useState } from 'react';
// import { Property, ThemeMode } from '../types';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Download, Calendar } from 'lucide-react';

// // ==========================================
// // 1. TYPES & INTERFACES
// // ==========================================
// export interface ProjectsPageProps {
//   theme?: ThemeMode;
//   initialFilter?: 'ongoing' | 'completed' | 'upcoming';
//   properties?: Property[];
//   onSelectProperty?: (property: Property) => void;
//   onRequestBrochure?: (property: Property) => void;
//   onScheduleVisit?: (property: Property) => void;
// }

// export interface ProjectItem {
//   id: string;
//   name: string;
//   location: string;
//   category: 'ongoing' | 'completed' | 'upcoming';
//   image: string;
//   maharera?: string;
//   shotAtLocation?: boolean;
//   description?: string;
//   propertyId?: string;
// }

// // ==========================================
// // 2. ALL PROJECTS DATA
// // ==========================================
// const ALL_PROJECTS: ProjectItem[] = [
//   // Ongoing
//   {
//     id: 'parksyde',
//     name: 'Platinum Parksyde',
//     location: 'Kharghar, Navi Mumbai',
//     category: 'ongoing',
//     image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
//     maharera: 'P52000046110',
//     description: 'Palatial 2 & 3 Bed Golf-facing residences with luxury club amenities.',
//     propertyId: 'royal-palms-estate'
//   },
//   {
//     id: 'elysium',
//     name: 'Platinum Elysium',
//     location: 'Nerul, Navi Mumbai',
//     category: 'ongoing',
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
//     maharera: 'P51700050735',
//     description: 'Ultra-luxe high-rise towers in the heart of Nerul with panoramic vistas.',
//     propertyId: 'platinum-sky-towers'
//   },
//   {
//     id: 'esquire',
//     name: 'Platinum Esquire',
//     location: 'Ulwe, Navi Mumbai',
//     category: 'ongoing',
//     image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
//     maharera: 'P52000054452',
//     description: 'Executive 2 & 3 BHK residences with grand entrance lobby and sky lounge.',
//     propertyId: 'aurum-villas'
//   },
//   {
//     id: 'reserve',
//     name: 'Platinum The Reserve',
//     location: 'Kharghar, Navi Mumbai',
//     category: 'ongoing',
//     image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
//     maharera: 'P52000078185',
//     description: 'Exclusive reserve edition 3 & 4 Bed palatial homes overlooking hills.',
//     propertyId: 'royal-palms-estate'
//   },
//   {
//     id: 'westwoods',
//     name: 'Platinum Westwoods',
//     location: 'Seawoods, Navi Mumbai',
//     category: 'ongoing',
//     image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
//     maharera: 'P51700050489',
//     description: 'Eco-conscious green living spaces nestled in Seawoods prime sector.',
//     propertyId: 'platinum-sky-towers'
//   },
//   {
//     id: 'mansionz',
//     name: 'Platinum Mansionz',
//     location: 'Seawoods, Navi Mumbai',
//     category: 'ongoing',
//     image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
//     maharera: 'P51700053815',
//     description: 'Bespoke mansion-style sky apartments with private elevator access.',
//     propertyId: 'aurum-villas'
//   },
//   {
//     id: 'oakwoods',
//     name: 'Platinum Oakwoods',
//     location: 'Seawoods, Navi Mumbai',
//     category: 'ongoing',
//     image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
//     maharera: 'P51700079286',
//     description: 'Super-sized 2, 3 & 4 BHK luxury residences with infinity pool.',
//     propertyId: 'platinum-sky-towers'
//   },
//   {
//     id: 'sicily',
//     name: 'Platinum Sicily',
//     location: 'Nerul, Navi Mumbai (Redevelopment)',
//     category: 'ongoing',
//     image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
//     maharera: 'P51700079378',
//     description: 'Mediterranean-inspired heritage redevelopment in prime Nerul.',
//     propertyId: 'royal-palms-estate'
//   },

//   // Completed
//   {
//     id: 'one-platinum',
//     name: 'One Platinum',
//     location: 'C.B.D. Belapur, Navi Mumbai',
//     category: 'completed',
//     shotAtLocation: true,
//     image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
//     description: 'Grade-A flagship commercial tower and business landmark.',
//     propertyId: 'platinum-financial-hub'
//   },
//   {
//     id: 'crescenzo',
//     name: 'Platinum Crescenzo',
//     location: 'Seawoods, Navi Mumbai',
//     category: 'completed',
//     shotAtLocation: true,
//     image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
//     description: 'Delivered landmark residential complex in Seawoods.'
//   },
//   {
//     id: 'emporius',
//     name: 'Platinum Emporius',
//     location: 'Ulwe, Navi Mumbai',
//     category: 'completed',
//     shotAtLocation: true,
//     image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
//     description: 'Premier retail and corporate office space in Ulwe.'
//   },
//   {
//     id: 'experio',
//     name: 'Platinum Experio',
//     location: 'Roadpali, Navi Mumbai',
//     category: 'completed',
//     shotAtLocation: true,
//     image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
//     description: 'Modern residential tower delivered with premium amenities.'
//   },
//   {
//     id: 'escaso',
//     name: 'Platinum Escaso',
//     location: 'Ulwe, Navi Mumbai',
//     category: 'completed',
//     shotAtLocation: true,
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
//     description: 'Sophisticated living spaces with excellent connectivity.'
//   },
//   {
//     id: 'palmwoods',
//     name: 'Platinum Palmwoods',
//     location: 'Seawoods, Navi Mumbai',
//     category: 'completed',
//     shotAtLocation: true,
//     image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
//     description: 'Award-winning palm garden residential estate.'
//   },

//   // Upcoming
//   {
//     id: 'midc-juinagar',
//     name: 'MIDC',
//     location: 'Juinagar, Navi Mumbai',
//     category: 'upcoming',
//     image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
//     description: 'Upcoming Grade-A IT Park and Commercial Hub in Juinagar.'
//   },
//   {
//     id: 'sector-28-ulwe',
//     name: 'Sector 28',
//     location: 'Ulwe, Navi Mumbai',
//     category: 'upcoming',
//     image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
//     description: 'Next-generation luxury residential development unveiling soon.'
//   }
// ];

// // ==========================================
// // 3. EMBEDDED MODAL COMPONENT
// // ==========================================
// interface ProjectModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   propertyName: string;
//   onBrochureClick?: () => void;
//   onVisitClick?: () => void;
// }

// const ProjectModal: React.FC<ProjectModalProps> = ({
//   isOpen,
//   onClose,
//   propertyName,
//   onBrochureClick,
//   onVisitClick,
// }) => {
//   if (!isOpen) return null;

//   const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
//       onClick={handleBackgroundClick}
//     >
//       <div className="relative w-full max-w-lg bg-neutral-900 border border-neutral-700 rounded-lg shadow-2xl p-8 md:p-10">
//         <button
//           onClick={onClose}
//           className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors"
//           aria-label="Close"
//         >
//           <X size={20} strokeWidth={1.5} />
//         </button>

//         <h2 className="text-xl md:text-2xl font-light text-center text-white tracking-wide uppercase mb-8">
//           PROJECT BROCHURES & VISITS
//           {propertyName && (
//             <span className="block text-sm normal-case text-neutral-400 mt-2 font-normal">
//               For {propertyName}
//             </span>
//           )}
//         </h2>

//         <div className="flex flex-col gap-4 max-w-sm mx-auto">
//           <button
//             onClick={onBrochureClick}
//             className="flex items-center justify-center gap-3 w-full bg-[#c2a26c] hover:bg-[#b0905c] text-white py-3.5 px-6 rounded-lg transition-colors duration-200"
//           >
//             <Download size={20} strokeWidth={1.5} />
//             <span className="font-semibold text-sm tracking-wide uppercase">
//               REQUEST BROCHURE
//             </span>
//           </button>

//           <button
//             onClick={onVisitClick}
//             className="flex items-center justify-center gap-3 w-full bg-[#c2a26c] hover:bg-[#b0905c] text-white py-3.5 px-6 rounded-lg transition-colors duration-200"
//           >
//             <Calendar size={20} strokeWidth={1.5} />
//             <span className="font-semibold text-sm tracking-wide uppercase">
//               SCHEDULE A VISIT
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==========================================
// // 4. MAIN PROJECTS PAGE COMPONENT
// // ==========================================
// export const ProjectsPage: React.FC<ProjectsPageProps> = ({
//   initialFilter = 'ongoing',
//   properties = [],
//   onRequestBrochure,
//   onScheduleVisit
// }) => {
//   const [activeTab, setActiveTab] = useState<'ongoing' | 'completed' | 'upcoming'>(initialFilter);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

//   const filteredProjects = ALL_PROJECTS.filter((p: ProjectItem) => p.category === activeTab);

//   const handleCardClick = (proj: ProjectItem) => {
//     setSelectedProject(proj);
//     setIsModalOpen(true);
//   };

//   const handleBrochureClick = () => {
//     if (selectedProject) {
//       const matchedProp = properties.find((p) => p.id === selectedProject.propertyId) || properties[0];
//       if (onRequestBrochure && matchedProp) {
//         onRequestBrochure(matchedProp);
//       }
//     }
//     setIsModalOpen(false);
//   };

//   const handleVisitClick = () => {
//     if (selectedProject) {
//       const matchedProp = properties.find((p) => p.id === selectedProject.propertyId) || properties[0];
//       if (onScheduleVisit && matchedProp) {
//         onScheduleVisit(matchedProp);
//       }
//     }
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="w-full bg-[#f4f5f7] min-h-screen pb-24 select-none font-sans">
      
//       {/* 1. HERO BANNER SECTION */}
//       <section className="relative w-full h-[90vh] min-h-[520px] max-h-[620px] flex flex-col justify-center px-6 md:px-16 pt-16">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80"
//             alt="Hero Background"
//             className="w-full h-full object-cover object-center"
//           />
//           <div className="absolute inset-0 bg-black/65" />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-end h-full pb-28">
//           <div className="max-w-2xl space-y-4 mb-10">
//             <h1 className="text-3xl md:text-[2.25rem] font-light text-white tracking-wide leading-snug">
//               Creating Iconic Statements<br />With Incredible Craftsmanship
//             </h1>
//             <p className="text-xs md:text-[13px] text-white/75 font-light leading-relaxed max-w-xl tracking-wide">
//               Our diverse range of projects are fine examples of excellence, thoughtfulness and innovation in construction. They all reflect our commitment to creating spaces where happiness can be felt in abundance.
//             </p>
//           </div>

//           {/* TAB NAVIGATION BAR */}
//           <div className="relative w-full border-t border-white/20 pt-3">
//             <div className="flex items-center gap-0">
//               <button
//                 onClick={() => setActiveTab('ongoing')}
//                 className={`relative pr-6 py-1 text-xs md:text-sm font-light transition-colors duration-200 cursor-pointer ${
//                   activeTab === 'ongoing' ? 'text-[#d4af37]' : 'text-white/80 hover:text-white'
//                 }`}
//               >
//                 Ongoing Projects
//                 {activeTab === 'ongoing' && (
//                   <span className="absolute left-0 right-6 -top-[13px] h-[2px] bg-[#d4af37]" />
//                 )}
//               </button>

//               <span className="text-white/30 text-xs px-2 font-extralight">|</span>

//               <button
//                 onClick={() => setActiveTab('completed')}
//                 className={`relative px-6 py-1 text-xs md:text-sm font-light transition-colors duration-200 cursor-pointer ${
//                   activeTab === 'completed' ? 'text-[#d4af37]' : 'text-white/80 hover:text-white'
//                 }`}
//               >
//                 Completed Projects
//                 {activeTab === 'completed' && (
//                   <span className="absolute left-6 right-6 -top-[13px] h-[2px] bg-[#d4af37]" />
//                 )}
//               </button>

//               <span className="text-white/30 text-xs px-2 font-extralight">|</span>

//               <button
//                 onClick={() => setActiveTab('upcoming')}
//                 className={`relative px-6 py-1 text-xs md:text-sm font-light transition-colors duration-200 cursor-pointer ${
//                   activeTab === 'upcoming' ? 'text-[#d4af37]' : 'text-white/80 hover:text-white'
//                 }`}
//               >
//                 Upcoming Projects
//                 {activeTab === 'upcoming' && (
//                   <span className="absolute left-6 right-0 -top-[13px] h-[2px] bg-[#d4af37]" />
//                 )}
//               </button>
//             </div>
//           </div>
//           <div className="relative w-full border-t border-white/20 pb-3"></div>
//         </div>
//       </section>

//       {/* 2. OVERLAPPING PROJECTS CARDS GRID */}
//      <section className="relative z-20 px-6 md:px-16 max-w-7xl mx-auto w-full pt-10 md:pt-14">
//   <AnimatePresence mode="wait">
//     <motion.div
//       key={activeTab}
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -10 }}
//       transition={{ duration: 0.3 }}
//       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//     >
//       {filteredProjects.map((proj: ProjectItem) => (
//         <div
//           key={proj.id}
//           onClick={() => handleCardClick(proj)}
//           className="bg-white rounded-none shadow-md overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow duration-300"
//         >
//           {/* Card Image */}
//           <div className="relative aspect-[4/4.8] w-full overflow-hidden bg-gray-100">
//             <img
//               src={proj.image}
//               alt={proj.name}
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
//             />
//             {/* <span className="absolute bottom-2 right-2 text-[9px] text-white/70 bg-black/40 px-1.5 py-0.5">
//               Artist's Impression
//             </span> */}
//           </div>

//           {/* Card Content Footer */}
//           <div className="p-4 pb-5 bg-white border-t border-gray-100">
//             <h3 className="text-xs md:text-sm font-medium text-neutral-800 tracking-tight leading-snug">
//               {proj.name},
//             </h3>
//             <p className="text-[11px] md:text-xs text-neutral-500 font-normal mt-0.5">
//               {proj.location}
//             </p>
//           </div>
//         </div>
//       ))}
//     </motion.div>
//   </AnimatePresence>
// </section>

//       {/* 3. PROJECT BROCHURES & VISITS MODAL */}
//       <ProjectModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         propertyName={selectedProject ? selectedProject.name : ''}
//         onBrochureClick={handleBrochureClick}
//         onVisitClick={handleVisitClick}
//       />
//     </div>
//   );
// };



import React, { useState } from 'react';
import { Property, ThemeMode } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Calendar } from 'lucide-react';

// ==========================================
// 1. TYPES & INTERFACES
// ==========================================
export interface ProjectsPageProps {
  theme?: ThemeMode;
  initialFilter?: 'ongoing' | 'completed' | 'upcoming';
  properties?: Property[];
  onSelectProperty?: (property: Property) => void;
  onRequestBrochure?: (property: Property) => void;
  onScheduleVisit?: (property: Property) => void;
}

export interface ProjectItem {
  id: string;
  name: string;
  location: string;
  category: 'ongoing' | 'completed' | 'upcoming';
  image: string;
  maharera?: string;
  shotAtLocation?: boolean;
  description?: string;
  propertyId?: string;
}

// ==========================================
// 2. ALL PROJECTS DATA
// ==========================================
const ALL_PROJECTS: ProjectItem[] = [
  // Ongoing
  {
    id: 'parksyde',
    name: 'Platinum Parksyde',
    location: 'Kharghar, Navi Mumbai',
    category: 'ongoing',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    maharera: 'P52000046110',
    description: 'Palatial 2 & 3 Bed Golf-facing residences with luxury club amenities.',
    propertyId: 'royal-palms-estate'
  },
  {
    id: 'elysium',
    name: 'Platinum Elysium',
    location: 'Nerul, Navi Mumbai',
    category: 'ongoing',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    maharera: 'P51700050735',
    description: 'Ultra-luxe high-rise towers in the heart of Nerul with panoramic vistas.',
    propertyId: 'platinum-sky-towers'
  },
  {
    id: 'esquire',
    name: 'Platinum Esquire',
    location: 'Ulwe, Navi Mumbai',
    category: 'ongoing',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    maharera: 'P52000054452',
    description: 'Executive 2 & 3 BHK residences with grand entrance lobby and sky lounge.',
    propertyId: 'aurum-villas'
  },
  {
    id: 'reserve',
    name: 'Platinum The Reserve',
    location: 'Kharghar, Navi Mumbai',
    category: 'ongoing',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    maharera: 'P52000078185',
    description: 'Exclusive reserve edition 3 & 4 Bed palatial homes overlooking hills.',
    propertyId: 'royal-palms-estate'
  },
  {
    id: 'westwoods',
    name: 'Platinum Westwoods',
    location: 'Seawoods, Navi Mumbai',
    category: 'ongoing',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    maharera: 'P51700050489',
    description: 'Eco-conscious green living spaces nestled in Seawoods prime sector.',
    propertyId: 'platinum-sky-towers'
  },
  {
    id: 'mansionz',
    name: 'Platinum Mansionz',
    location: 'Seawoods, Navi Mumbai',
    category: 'ongoing',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    maharera: 'P51700053815',
    description: 'Bespoke mansion-style sky apartments with private elevator access.',
    propertyId: 'aurum-villas'
  },
  {
    id: 'oakwoods',
    name: 'Platinum Oakwoods',
    location: 'Seawoods, Navi Mumbai',
    category: 'ongoing',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    maharera: 'P51700079286',
    description: 'Super-sized 2, 3 & 4 BHK luxury residences with infinity pool.',
    propertyId: 'platinum-sky-towers'
  },
  {
    id: 'sicily',
    name: 'Platinum Sicily',
    location: 'Nerul, Navi Mumbai (Redevelopment)',
    category: 'ongoing',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
    maharera: 'P51700079378',
    description: 'Mediterranean-inspired heritage redevelopment in prime Nerul.',
    propertyId: 'royal-palms-estate'
  },

  // Completed
  {
    id: 'one-platinum',
    name: 'One Platinum',
    location: 'C.B.D. Belapur, Navi Mumbai',
    category: 'completed',
    shotAtLocation: true,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Grade-A flagship commercial tower and business landmark.',
    propertyId: 'platinum-financial-hub'
  },
  {
    id: 'crescenzo',
    name: 'Platinum Crescenzo',
    location: 'Seawoods, Navi Mumbai',
    category: 'completed',
    shotAtLocation: true,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    description: 'Delivered landmark residential complex in Seawoods.'
  },
  {
    id: 'emporius',
    name: 'Platinum Emporius',
    location: 'Ulwe, Navi Mumbai',
    category: 'completed',
    shotAtLocation: true,
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    description: 'Premier retail and corporate office space in Ulwe.'
  },
  {
    id: 'experio',
    name: 'Platinum Experio',
    location: 'Roadpali, Navi Mumbai',
    category: 'completed',
    shotAtLocation: true,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern residential tower delivered with premium amenities.'
  },
  {
    id: 'escaso',
    name: 'Platinum Escaso',
    location: 'Ulwe, Navi Mumbai',
    category: 'completed',
    shotAtLocation: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Sophisticated living spaces with excellent connectivity.'
  },
  {
    id: 'palmwoods',
    name: 'Platinum Palmwoods',
    location: 'Seawoods, Navi Mumbai',
    category: 'completed',
    shotAtLocation: true,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: 'Award-winning palm garden residential estate.'
  },

  // Upcoming
  {
    id: 'midc-juinagar',
    name: 'MIDC',
    location: 'Juinagar, Navi Mumbai',
    category: 'upcoming',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Upcoming Grade-A IT Park and Commercial Hub in Juinagar.'
  },
  {
    id: 'sector-28-ulwe',
    name: 'Sector 28',
    location: 'Ulwe, Navi Mumbai',
    category: 'upcoming',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: 'Next-generation luxury residential development unveiling soon.'
  }
];

// ==========================================
// 3. EMBEDDED MODAL COMPONENT
// ==========================================
interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyName: string;
  onBrochureClick?: () => void;
  onVisitClick?: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  propertyName,
  onBrochureClick,
  onVisitClick,
}) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleBackgroundClick}
    >
      <div className="relative w-full max-w-lg bg-neutral-900 border border-neutral-700 rounded-lg shadow-2xl p-8 md:p-10">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        <h2 className="text-xl md:text-2xl font-light text-center text-white tracking-wide uppercase mb-8">
          PROJECT BROCHURES & VISITS
          {propertyName && (
            <span className="block text-sm normal-case text-neutral-400 mt-2 font-normal">
              For {propertyName}
            </span>
          )}
        </h2>

        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          <button
            onClick={onBrochureClick}
            className="flex items-center justify-center gap-3 w-full bg-[#c2a26c] hover:bg-[#b0905c] text-white py-3.5 px-6 rounded-lg transition-colors duration-200"
          >
            <Download size={20} strokeWidth={1.5} />
            <span className="font-semibold text-sm tracking-wide uppercase">
              REQUEST BROCHURE
            </span>
          </button>

          <button
            onClick={onVisitClick}
            className="flex items-center justify-center gap-3 w-full bg-[#c2a26c] hover:bg-[#b0905c] text-white py-3.5 px-6 rounded-lg transition-colors duration-200"
          >
            <Calendar size={20} strokeWidth={1.5} />
            <span className="font-semibold text-sm tracking-wide uppercase">
              SCHEDULE A VISIT
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. MAIN PROJECTS PAGE COMPONENT
// ==========================================
export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  initialFilter = 'ongoing',
  properties = [],
  onRequestBrochure,
  onScheduleVisit
}) => {
  const [activeTab, setActiveTab] = useState<'ongoing' | 'completed' | 'upcoming'>(initialFilter);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = ALL_PROJECTS.filter((p: ProjectItem) => p.category === activeTab);

  const handleCardClick = (proj: ProjectItem) => {
    setSelectedProject(proj);
    setIsModalOpen(true);
  };

  const handleBrochureClick = () => {
    if (selectedProject) {
      const matchedProp = properties.find((p) => p.id === selectedProject.propertyId) || properties[0];
      if (onRequestBrochure && matchedProp) {
        onRequestBrochure(matchedProp);
      }
    }
    setIsModalOpen(false);
  };

  const handleVisitClick = () => {
    if (selectedProject) {
      const matchedProp = properties.find((p) => p.id === selectedProject.propertyId) || properties[0];
      if (onScheduleVisit && matchedProp) {
        onScheduleVisit(matchedProp);
      }
    }
    setIsModalOpen(false);
  };

  return (
    <div className="w-full bg-[#f4f5f7] min-h-screen pb-24 select-none font-sans">
      
      {/* 1. HERO BANNER SECTION */}
      <section className="relative w-full h-[80vh] min-h-[550px] max-h-[650px] flex flex-col justify-end px-6 md:px-16 pb-40 pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-end">
          <div className="max-w-2xl space-y-4 mb-8">
            <h1 className="text-3xl md:text-[2.25rem] font-light text-white tracking-wide leading-snug">
              Creating Iconic Statements<br />With Incredible Craftsmanship
            </h1>
            <p className="text-xs md:text-[13px] text-white/75 font-light leading-relaxed max-w-xl tracking-wide">
              Our diverse range of projects are fine examples of excellence, thoughtfulness and innovation in construction. They all reflect our commitment to creating spaces where happiness can be felt in abundance.
            </p>
          </div>

          {/* TAB NAVIGATION BAR - Framed with Top and Bottom Borders */}
          <div className="relative w-full border-y border-white/20 py-2.5">
            <div className="flex items-center gap-0">
              <button
                onClick={() => setActiveTab('ongoing')}
                className={`relative pr-6 py-1 text-xs md:text-sm font-light transition-colors duration-200 cursor-pointer ${
                  activeTab === 'ongoing' ? 'text-[#d4af37]' : 'text-white/80 hover:text-white'
                }`}
              >
                Ongoing Projects
                {activeTab === 'ongoing' && (
                  <span className="absolute left-0 right-6 -top-[11px] h-[2px] bg-[#d4af37]" />
                )}
              </button>

              <span className="text-white/30 text-xs px-2 font-extralight">|</span>

              <button
                onClick={() => setActiveTab('completed')}
                className={`relative px-6 py-1 text-xs md:text-sm font-light transition-colors duration-200 cursor-pointer ${
                  activeTab === 'completed' ? 'text-[#d4af37]' : 'text-white/80 hover:text-white'
                }`}
              >
                Completed Projects
                {activeTab === 'completed' && (
                  <span className="absolute left-6 right-6 -top-[11px] h-[2px] bg-[#d4af37]" />
                )}
              </button>

              <span className="text-white/30 text-xs px-2 font-extralight">|</span>

              <button
                onClick={() => setActiveTab('upcoming')}
                className={`relative px-6 py-1 text-xs md:text-sm font-light transition-colors duration-200 cursor-pointer ${
                  activeTab === 'upcoming' ? 'text-[#d4af37]' : 'text-white/80 hover:text-white'
                }`}
              >
                Upcoming Projects
                {activeTab === 'upcoming' && (
                  <span className="absolute left-6 right-0 -top-[11px] h-[2px] bg-[#d4af37]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERLAPPING PROJECTS CARDS GRID */}
      <section className="relative z-20 px-6 md:px-16 max-w-7xl mx-auto w-full -mt-28 md:-mt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((proj: ProjectItem) => (
              <div
                key={proj.id}
                onClick={() => handleCardClick(proj)}
                className="bg-white rounded-none shadow-md overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow duration-300"
              >
                {/* Card Image */}
                <div className="relative aspect-[4/4.8] w-full overflow-hidden bg-gray-100">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Card Content Footer */}
                <div className="p-4 pb-5 bg-white border-t border-gray-100">
                  <h3 className="text-xs md:text-sm font-medium text-neutral-800 tracking-tight leading-snug">
                    {proj.name},
                  </h3>
                  <p className="text-[11px] md:text-xs text-neutral-500 font-normal mt-0.5">
                    {proj.location}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 3. PROJECT BROCHURES & VISITS MODAL */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        propertyName={selectedProject ? selectedProject.name : ''}
        onBrochureClick={handleBrochureClick}
        onVisitClick={handleVisitClick}
      />
    </div>
  );
};