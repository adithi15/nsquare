// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { Property, ThemeMode } from '../../types';
// import { motion, AnimatePresence } from 'framer-motion';
// import { COMPLETED_PROJECTS, ONGOING_PROJECTS, UPCOMING_PROJECTS, NSProject } from '../../data/nsquare';
// import { ProjectInquiryModal, ProjectInquiryData } from '../layout/ProjectInquiryModal';
// import { ChevronDown } from 'lucide-react';

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
// // 2. ALL PROJECTS DATA — sourced from N-Square brochure
// // ==========================================
// const HERO_PROPERTY_IDS: Record<string, string> = {
//   darshan: 'neelkanth-darshan',
//   unicorn: 'unicorn',
//   space: 'space',
//   dham: 'dham',
//   shiv: 'shiv',
// };

// const toProjectItem = (
//   p: NSProject,
//   category: ProjectItem['category']
// ): ProjectItem => ({
//   id: p.id,
//   name: p.name,
//   location: `${p.location}, Navi Mumbai`,
//   category,
//   image: p.image,
//   shotAtLocation: category === 'completed',
//   description: `${p.floors} tower · ${category === 'completed' ? `Delivered ${p.year}` : `Expected ${p.year}`}`,
//   propertyId: HERO_PROPERTY_IDS[p.id],
// });

// const ALL_PROJECTS: ProjectItem[] = [
//   // Ongoing
//   ...ONGOING_PROJECTS.map((p) => toProjectItem(p, 'ongoing')),

//   // Completed
//   ...COMPLETED_PROJECTS.map((p) => toProjectItem(p, 'completed')),

//   // Upcoming
//   ...UPCOMING_PROJECTS.map((p) => toProjectItem(p, 'upcoming')),
// ];

// // ==========================================
// // 3. PROJECT CARD SPECIFICATIONS LOOKUP
// // ==========================================
// interface ProjectSpecs {
//   plotSize: string;
//   projectType: string;
//   details: {
//     project: string;
//     totalFloors: string;
//     totalUnits: string;
//     configurations: string;
//     amenities: string;
//     possessionYear: string;
//   };
// }

// const PROJECT_SPECS_LOOKUP: Record<string, ProjectSpecs> = {
//   luxuria: {
//     plotSize: '2450 SQ. MTR.',
//     projectType: 'RESIDENTIAL CUM COMMERCIAL',
//     details: {
//       project: 'CIDCO TRANSFER PLOT',
//       totalFloors: 'G+26 FLOORS',
//       totalUnits: '92 FLATS, 12 SHOPS & 11 OFFICES',
//       configurations: '1 & 2 BHK',
//       amenities: '24/7 CCTV SURVEILLANCE, INTERCOM, LANDSCAPE GARDEN, KIDS PLAY AREA, INDOOR GAMES, GYMNASIUM, SWIMMING POOL, SENIOR CITIZEN AREA, GAZEBO, CRICKET TURF, PARTY LAWN',
//       possessionYear: '2024',
//     }
//   },
//   darshan: {
//     plotSize: '2450 SQ. MTR.',
//     projectType: 'RESIDENTIAL CUM COMMERCIAL',
//     details: {
//       project: 'CIDCO TRANSFER PLOT',
//       totalFloors: 'G+26 FLOORS',
//       totalUnits: '92 FLATS, 12 SHOPS & 11 OFFICES',
//       configurations: '1 & 2 BHK',
//       amenities: '24/7 CCTV SURVEILLANCE, INTERCOM, LANDSCAPE GARDEN, KIDS PLAY AREA, INDOOR GAMES, GYMNASIUM, SWIMMING POOL, SENIOR CITIZEN AREA, GAZEBO, CRICKET TURF, PARTY LAWN',
//       possessionYear: '2024',
//     }
//   },
//   unicorn: {
//     plotSize: '4200 SQ. MTR.',
//     projectType: 'COMMERCIAL ICON',
//     details: {
//       project: 'CIDCO TRANSFER PLOT',
//       totalFloors: 'G+33 FLOORS',
//       totalUnits: '180 OFFICES & FLAGSHIP RETAIL',
//       configurations: 'OFFICES & RETAIL SHARING',
//       amenities: 'HIGH-STREET RETAIL PODIUM, HIGH-SPEED ELEVATORS, AMPLE PARKING, POWER BACKUP, 24X7 CCTV SURVEILLANCE, CAFETERIA, ROOFTOP LOUNGE',
//       possessionYear: '2030',
//     }
//   },
//   space: {
//     plotSize: '2200 SQ. MTR.',
//     projectType: 'RESIDENTIAL CUM COMMERCIAL',
//     details: {
//       project: 'CIDCO TRANSFER PLOT',
//       totalFloors: 'G+14 FLOORS',
//       totalUnits: '72 FLATS, 10 SHOPS',
//       configurations: '1 & 2 BHK RESIDENCES + RETAIL',
//       amenities: 'RETAIL PLAZA, CHILDREN\'S PLAY AREA, LANDSCAPED GARDENS, CCTV SECURITY, SENIOR CITIZEN AREA, INDOOR GAMES GYM',
//       possessionYear: '2032',
//     }
//   },
//   dham: {
//     plotSize: '2800 SQ. MTR.',
//     projectType: 'RESIDENTIAL',
//     details: {
//       project: 'CIDCO TRANSFER PLOT',
//       totalFloors: 'G+22 FLOORS',
//       totalUnits: '110 FLATS',
//       configurations: '1 & 2 BHK RESIDENCES',
//       amenities: 'PODIUM DECK GARDEN, YOGA & FITNESS ZONE, SENIOR CITIZEN CORNER, EV CHARGING, 24X7 CCTV SURVEILLANCE, KIDS PLAY AREA, GYMNASIUM',
//       possessionYear: '2029',
//     }
//   },
//   shiv: {
//     plotSize: '2500 SQ. MTR.',
//     projectType: 'RESIDENTIAL CUM COMMERCIAL',
//     details: {
//       project: 'CIDCO TRANSFER PLOT',
//       totalFloors: 'G+14 FLOORS',
//       totalUnits: '88 FLATS, 14 SHOPS',
//       configurations: '1 & 2 BHK RESIDENCES',
//       amenities: 'SKY DECKS, PODIUM RETAIL, INDOOR GAMES, POWER BACKUP, LANDSCAPE GARDEN, GYMNASIUM, SECURITY PODS',
//       possessionYear: '2029',
//     }
//   }
// };

// const getProjectSpecs = (proj: ProjectItem): ProjectSpecs => {
//   const lookup = PROJECT_SPECS_LOOKUP[proj.id];
//   if (lookup) return lookup;

//   const floorsText = proj.description?.split('·')[0]?.trim() || 'G+14 FLOORS';
//   const yearText = proj.description?.split('·')[1]?.trim()?.replace('Expected ', '')?.replace('Delivered ', '') || (proj.category === 'completed' ? '2024' : '2028');

//   return {
//     plotSize: '2100 SQ. MTR.',
//     projectType: proj.name.toLowerCase().includes('unicorn') || proj.name.toLowerCase().includes('office') ? 'COMMERCIAL' : 'RESIDENTIAL CUM COMMERCIAL',
//     details: {
//       project: 'CIDCO TRANSFER PLOT',
//       totalFloors: floorsText.toUpperCase(),
//       totalUnits: '64 FLATS, 8 SHOPS',
//       configurations: '1 & 2 BHK RESIDENCES',
//       amenities: 'KIDS PLAY AREA, LANDSCAPE GARDEN, 24/7 CCTV SURVEILLANCE, SENIOR CITIZEN AREA, POWER BACKUP, CLUBHOUSE',
//       possessionYear: yearText,
//     }
//   };
// };

// // ==========================================
// // 4. INDIVIDUAL PROJECT CARD COMPONENT
// // ==========================================
// interface ProjectCardProps {
//   proj: ProjectItem;
//   onImageClick: (proj: ProjectItem) => void;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ proj, onImageClick }) => {
//   const [isExpanded, setIsExpanded] = useState<boolean>(false);
//   const specs = getProjectSpecs(proj);

//   return (
//     <div className="bg-transparent text-white overflow-hidden flex flex-col transition-all duration-300 w-full group">
//       {/* Card Image - Portrait Aspect Ratio (4:5) */}
//       <div
//         onClick={() => onImageClick(proj)}
//         className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-950 cursor-pointer rounded-none"
//       >
//         <img
//           src={proj.image}
//           alt={proj.name}
//           loading="lazy"
//           decoding="async"
//           className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
//         />
//         <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
//       </div>

//       {/* Card Body - White Box with Title, Location, and Gold Chevron */}
//       <div
//         onClick={() => setIsExpanded(!isExpanded)}
//         className="bg-white p-4 md:p-5 flex items-center justify-between border-t border-neutral-100 cursor-pointer select-none transition-colors hover:bg-neutral-50"
//       >
//         <div className="space-y-0.5">
//           <h3 className="text-[13px] md:text-sm font-semibold tracking-wide text-neutral-900 uppercase font-sans">
//             {proj.name}
//           </h3>
//           <p className="text-[11px] text-neutral-500 font-light font-sans">
//             {proj.location}
//           </p>
//         </div>

//         <div
//           className="text-[#C5A059] shrink-0 ml-4 transition-transform duration-300"
//           style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
//         >
//           <ChevronDown className="w-5 h-5 stroke-[1.5]" />
//         </div>
//       </div>

//       {/* Collapsible Specs Panel (high readability dark text on white card background) */}
//       <AnimatePresence initial={false}>
//         {isExpanded && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//             className="overflow-hidden bg-white border-t border-neutral-100 px-4 md:px-5 pb-5"
//           >
//             <div className="space-y-1.5 pt-4 text-[10px] md:text-[11px] text-neutral-600 tracking-wider font-light uppercase leading-relaxed border-t border-neutral-100">
//               <p><span className="text-neutral-800 font-semibold">PLOT SIZE :</span> {specs.plotSize}</p>
//               <p><span className="text-neutral-800 font-semibold">PROJECT TYPE :</span> {specs.projectType}</p>
//               <p><span className="text-neutral-800 font-semibold">PROJECT :</span> {specs.details.project}</p>
//               <p><span className="text-neutral-800 font-semibold">TOTAL FLOORS :</span> {specs.details.totalFloors}</p>
//               <p><span className="text-neutral-800 font-semibold">TOTAL UNITS :</span> {specs.details.totalUnits}</p>
//               <p><span className="text-neutral-800 font-semibold">CONFIGURATIONS :</span> {specs.details.configurations}</p>
//               <p><span className="text-neutral-800 font-semibold">AMENITIES :</span> {specs.details.amenities}</p>
//               <p><span className="text-neutral-800 font-semibold">POSSESSION YEAR :</span> {specs.details.possessionYear}</p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // ==========================================
// // 5. MAIN PROJECTS PAGE COMPONENT
// // ==========================================
// export const ProjectsPage: React.FC<ProjectsPageProps> = ({
//   initialFilter = 'ongoing',
//   theme = 'dark',
// }) => {
//   const [searchParams] = useSearchParams();
//   const urlFilter = searchParams.get('filter') || searchParams.get('tab');
//   const validUrlFilter =
//     urlFilter === 'completed' || urlFilter === 'ongoing' || urlFilter === 'upcoming'
//       ? (urlFilter as 'ongoing' | 'completed' | 'upcoming')
//       : null;

//   const [activeTab, setActiveTab] = useState<'ongoing' | 'completed' | 'upcoming'>(
//     validUrlFilter || initialFilter
//   );

//   useEffect(() => {
//     if (validUrlFilter) {
//       setActiveTab(validUrlFilter);
//     }
//   }, [validUrlFilter]);

//   const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);
//   const [selectedInquiryProject, setSelectedInquiryProject] = useState<ProjectInquiryData | null>(null);

//   const filteredProjects = ALL_PROJECTS.filter((p: ProjectItem) => p.category === activeTab);

//   const handleCardClick = (proj: ProjectItem) => {
//     setSelectedInquiryProject({
//       projectName: proj.name,
//       projectLocation: proj.location,
//       projectImage: proj.image,
//       projectStatus: proj.category === 'ongoing' ? 'Ongoing' : proj.category === 'completed' ? 'Completed' : 'Upcoming',
//     });
//     setIsInquiryModalOpen(true);
//   };

//   return (
//     <div className="w-full bg-[#f3e8db] text-neutral-800 min-h-screen pb-24 font-sans">

//       {/* 1. HERO BANNER SECTION */}
//       <section className="relative w-full h-[75vh] min-h-[450px] flex flex-col justify-end px-6 md:px-16 pb-20 pt-16 overflow-hidden">
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           <img
//             src="/assets/section-titles/legacy-title.jpg"
//             alt=""
//             decoding="async"
//             className="absolute left-1/2 -translate-x-1/2 top-[-34%] h-[340%] w-auto max-w-none animate-pulse-slow"
//           />
//           <div className="absolute inset-0 bg-black/55" />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col items-center justify-center select-none pointer-events-none pb-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="w-full max-w-[90%] md:max-w-xl lg:max-w-2xl px-4 translate-y-8 md:translate-y-12"
//           >
//             <img
//               src="/assets/projects-text.png"
//               alt="Creating Spaces With Soul"
//               className="w-full h-auto object-contain mx-auto"
//             />
//           </motion.div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-end">

//           {/* TAB NAVIGATION BAR - Framed with Top and Bottom Borders */}
//           {/* <div className="relative w-full border-y border-white/20 py-2.5">
//             <div className="flex items-center gap-0 pl-8 sm:pl-16 lg:pl-28">
//               <button
//                 onClick={() => setActiveTab('ongoing')}
//                 className={`relative pr-6 py-1 text-xs md:text-sm font-light transition-colors duration-200 cursor-pointer ${activeTab === 'ongoing' ? 'text-[#d4af37]' : 'text-white/55'
//                   }`}
//               >
//                 Ongoing Projects
//                 {activeTab === 'ongoing' && (
//                   <>
//                     <span className="absolute left-0 right-6 -top-[11px] h-[2px] bg-[#d4af37]" />
//                     <span className="absolute left-0 right-6 -bottom-[11px] h-[2px] bg-[#d4af37]" />
//                   </>
//                 )}
//               </button>

//               <span className="text-white/30 text-xs px-2 font-extralight">|</span>

//               <button
//                 onClick={() => setActiveTab('completed')}
//                 className={`relative px-6 py-1 text-xs md:text-sm font-light transition-colors duration-200 cursor-pointer ${activeTab === 'completed' ? 'text-[#d4af37]' : 'text-white/55'
//                   }`}
//               >
//                 Completed Projects
//                 {activeTab === 'completed' && (
//                   <>
//                     <span className="absolute left-6 right-6 -top-[11px] h-[2px] bg-[#d4af37]" />
//                     <span className="absolute left-6 right-6 -bottom-[11px] h-[2px] bg-[#d4af37]" />
//                   </>
//                 )}
//               </button>

//               <span className="text-white/30 text-xs px-2 font-extralight">|</span>

//               <button
//                 onClick={() => setActiveTab('upcoming')}
//                 className={`relative px-6 py-1 text-xs md:text-sm font-light transition-colors duration-200 cursor-pointer ${activeTab === 'upcoming' ? 'text-[#d4af37]' : 'text-white/55'
//                   }`}
//               >
//                 Upcoming Projects
//                 {activeTab === 'upcoming' && (
//                   <>
//                     <span className="absolute left-6 right-0 -top-[11px] h-[2px] bg-[#d4af37]" />
//                     <span className="absolute left-6 right-0 -bottom-[11px] h-[2px] bg-[#d4af37]" />
//                   </>
//                 )}
//               </button>
//             </div>
//           </div> */}

//           {/* TAB NAVIGATION BAR - Upar aur niche ki yellow lines removed */}
//           <div className="relative w-full border-y border-white/20 py-2.5">
//             <div className="flex items-center gap-0 pl-8 sm:pl-16 lg:pl-28">
//               <button
//                 onClick={() => setActiveTab('ongoing')}
//                 className={`relative pr-6 py-1 text-xs md:text-sm font-light transition-colors duration-200 cursor-pointer ${activeTab === 'ongoing' ? 'text-[#d4af37]' : 'text-white/55'
//                   }`}
//               >
//                 Ongoing Projects
//               </button>

//               <span className="text-white/30 text-xs px-2 font-extralight">|</span>

//               <button
//                 onClick={() => setActiveTab('completed')}
//                 className={`relative px-6 py-1 text-xs md:text-sm font-light transition-colors duration-200 cursor-pointer ${activeTab === 'completed' ? 'text-[#d4af37]' : 'text-white/55'
//                   }`}
//               >
//                 Completed Projects
//               </button>

//               <span className="text-white/30 text-xs px-2 font-extralight">|</span>

//               <button
//                 onClick={() => setActiveTab('upcoming')}
//                 className={`relative px-6 py-1 text-xs md:text-sm font-light transition-colors duration-200 cursor-pointer ${activeTab === 'upcoming' ? 'text-[#d4af37]' : 'text-white/55'
//                   }`}
//               >
//                 Upcoming Projects
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. OVERLAPPING PROJECTS CARDS GRID */}
//       <section className="relative z-20 px-6 md:px-16 max-w-7xl mx-auto w-full -mt-10 md:-mt-12">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3 }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
//           >
//             {filteredProjects.map((proj: ProjectItem) => (
//               <ProjectCard
//                 key={proj.id}
//                 proj={proj}
//                 onImageClick={handleCardClick}
//               />
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </section>

//       {/* 3. CONTACT US / PROJECT INQUIRY FORM MODAL */}
//       <ProjectInquiryModal
//         isOpen={isInquiryModalOpen}
//         onClose={() => setIsInquiryModalOpen(false)}
//         project={selectedInquiryProject}
//         theme={theme}
//       />
//     </div>
//   );
// };








import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Property, ThemeMode } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPLETED_PROJECTS, ONGOING_PROJECTS, UPCOMING_PROJECTS, NSProject } from '../../data/nsquare';
import { ProjectInquiryModal, ProjectInquiryData } from '../layout/ProjectInquiryModal';
import { ChevronDown } from 'lucide-react';

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
// 2. ALL PROJECTS DATA — sourced from N-Square brochure
// ==========================================
const HERO_PROPERTY_IDS: Record<string, string> = {
  darshan: 'neelkanth-darshan',
  unicorn: 'unicorn',
  space: 'space',
  dham: 'dham',
  shiv: 'shiv',
};

const toProjectItem = (
  p: NSProject,
  category: ProjectItem['category']
): ProjectItem => ({
  id: p.id,
  name: p.name,
  location: p.location, // Navi Mumbai removed, clean format directly from data
  category,
  image: p.image,
  shotAtLocation: category === 'completed',
  description: `${p.floors} tower · ${category === 'completed' ? `Delivered ${p.year}` : `Expected ${p.year}`}`,
  propertyId: HERO_PROPERTY_IDS[p.id],
});

const ALL_PROJECTS: ProjectItem[] = [
  // Ongoing
  ...ONGOING_PROJECTS.map((p) => toProjectItem(p, 'ongoing')),

  // Completed
  ...COMPLETED_PROJECTS.map((p) => toProjectItem(p, 'completed')),

  // Upcoming
  ...UPCOMING_PROJECTS.map((p) => toProjectItem(p, 'upcoming')),
];

// ==========================================
// 3. PROJECT CARD SPECIFICATIONS LOOKUP
// ==========================================
interface ProjectSpecs {
  plotSize: string;
  projectType: string;
  details: {
    project: string;
    totalFloors: string;
    totalUnits: string;
    configurations: string;
    amenities: string;
    possessionYear: string;
  };
}

const PROJECT_SPECS_LOOKUP: Record<string, ProjectSpecs> = {
  luxuria: {
    plotSize: '2450 SQ. MTR.',
    projectType: 'RESIDENTIAL CUM COMMERCIAL',
    details: {
      project: 'CIDCO TRANSFER PLOT',
      totalFloors: 'G+26 FLOORS',
      totalUnits: '92 FLATS, 12 SHOPS & 11 OFFICES',
      configurations: '1 & 2 BHK',
      amenities: '24/7 CCTV SURVEILLANCE, INTERCOM, LANDSCAPE GARDEN, KIDS PLAY AREA, INDOOR GAMES, GYMNASIUM, SWIMMING POOL, SENIOR CITIZEN AREA, GAZEBO, CRICKET TURF, PARTY LAWN',
      possessionYear: '2024',
    }
  },
  darshan: {
    plotSize: '2450 SQ. MTR.',
    projectType: 'RESIDENTIAL CUM COMMERCIAL',
    details: {
      project: 'CIDCO TRANSFER PLOT',
      totalFloors: 'G+26 FLOORS',
      totalUnits: '92 FLATS, 12 SHOPS & 11 OFFICES',
      configurations: '1 & 2 BHK',
      amenities: '24/7 CCTV SURVEILLANCE, INTERCOM, LANDSCAPE GARDEN, KIDS PLAY AREA, INDOOR GAMES, GYMNASIUM, SWIMMING POOL, SENIOR CITIZEN AREA, GAZEBO, CRICKET TURF, PARTY LAWN',
      possessionYear: '2024',
    }
  },
  unicorn: {
    plotSize: '4200 SQ. MTR.',
    projectType: 'COMMERCIAL ICON',
    details: {
      project: 'CIDCO TRANSFER PLOT',
      totalFloors: 'G+33 FLOORS',
      totalUnits: '180 OFFICES & FLAGSHIP RETAIL',
      configurations: 'OFFICES & RETAIL SHARING',
      amenities: 'HIGH-STREET RETAIL PODIUM, HIGH-SPEED ELEVATORS, AMPLE PARKING, POWER BACKUP, 24X7 CCTV SURVEILLANCE, CAFETERIA, ROOFTOP LOUNGE',
      possessionYear: '2030',
    }
  },
  space: {
    plotSize: '2200 SQ. MTR.',
    projectType: 'RESIDENTIAL CUM COMMERCIAL',
    details: {
      project: 'CIDCO TRANSFER PLOT',
      totalFloors: 'G+14 FLOORS',
      totalUnits: '72 FLATS, 10 SHOPS',
      configurations: '1 & 2 BHK RESIDENCES + RETAIL',
      amenities: 'RETAIL PLAZA, CHILDREN\'S PLAY AREA, LANDSCAPED GARDENS, CCTV SECURITY, SENIOR CITIZEN AREA, INDOOR GAMES GYM',
      possessionYear: '2032',
    }
  },
  dham: {
    plotSize: '2800 SQ. MTR.',
    projectType: 'RESIDENTIAL',
    details: {
      project: 'CIDCO TRANSFER PLOT',
      totalFloors: 'G+22 FLOORS',
      totalUnits: '110 FLATS',
      configurations: '1 & 2 BHK RESIDENCES',
      amenities: 'PODIUM DECK GARDEN, YOGA & FITNESS ZONE, SENIOR CITIZEN CORNER, EV CHARGING, 24X7 CCTV SURVEILLANCE, KIDS PLAY AREA, GYMNASIUM',
      possessionYear: '2029',
    }
  },
  shiv: {
    plotSize: '2500 SQ. MTR.',
    projectType: 'RESIDENTIAL CUM COMMERCIAL',
    details: {
      project: 'CIDCO TRANSFER PLOT',
      totalFloors: 'G+14 FLOORS',
      totalUnits: '88 FLATS, 14 SHOPS',
      configurations: '1 & 2 BHK RESIDENCES',
      amenities: 'SKY DECKS, PODIUM RETAIL, INDOOR GAMES, POWER BACKUP, LANDSCAPE GARDEN, GYMNASIUM, SECURITY PODS',
      possessionYear: '2029',
    }
  }
};

const getProjectSpecs = (proj: ProjectItem): ProjectSpecs => {
  const lookup = PROJECT_SPECS_LOOKUP[proj.id];
  if (lookup) return lookup;

  const floorsText = proj.description?.split('·')[0]?.trim() || 'G+14 FLOORS';
  const yearText = proj.description?.split('·')[1]?.trim()?.replace('Expected ', '')?.replace('Delivered ', '') || (proj.category === 'completed' ? '2024' : '2028');

  return {
    plotSize: '2100 SQ. MTR.',
    projectType: proj.name.toLowerCase().includes('unicorn') || proj.name.toLowerCase().includes('office') ? 'COMMERCIAL' : 'RESIDENTIAL CUM COMMERCIAL',
    details: {
      project: 'CIDCO TRANSFER PLOT',
      totalFloors: floorsText.toUpperCase(),
      totalUnits: '64 FLATS, 8 SHOPS',
      configurations: '1 & 2 BHK RESIDENCES',
      amenities: 'KIDS PLAY AREA, LANDSCAPE GARDEN, 24/7 CCTV SURVEILLANCE, SENIOR CITIZEN AREA, POWER BACKUP, CLUBHOUSE',
      possessionYear: yearText,
    }
  };
};

// ==========================================
// 4. INDIVIDUAL PROJECT CARD COMPONENT
// ==========================================
interface ProjectCardProps {
  proj: ProjectItem;
  onImageClick: (proj: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ proj, onImageClick }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const specs = getProjectSpecs(proj);

  return (
    <div className="bg-transparent text-white overflow-hidden flex flex-col transition-all duration-300 w-full group">
      {/* Card Image - Portrait Aspect Ratio (4:5) */}
      <div
        onClick={() => onImageClick(proj)}
        className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-950 cursor-pointer rounded-none"
      >
        <img
          src={proj.image}
          alt={proj.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Card Body - White Box with Title, Location, and Gold Chevron */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-white p-4 md:p-5 flex items-center justify-between border-t border-neutral-100 cursor-pointer select-none transition-colors hover:bg-neutral-50"
      >
        <div className="space-y-0.5">
          <h3 className="text-[13px] md:text-sm font-semibold tracking-wide text-neutral-900 uppercase font-sans">
            {proj.name}
          </h3>
          <p className="text-[11px] text-neutral-500 font-light font-sans">
            {proj.location}
          </p>
        </div>

        <div
          className="text-[#C5A059] shrink-0 ml-4 transition-transform duration-300"
          style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ChevronDown className="w-5 h-5 stroke-[1.5]" />
        </div>
      </div>

      {/* Collapsible Specs Panel */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-white border-t border-neutral-100 px-4 md:px-5 pb-5"
          >
            <div className="space-y-1.5 pt-4 text-[10px] md:text-[11px] text-neutral-600 tracking-wider font-light uppercase leading-relaxed border-t border-neutral-100">
              <p><span className="text-neutral-800 font-semibold">PLOT SIZE :</span> {specs.plotSize}</p>
              <p><span className="text-neutral-800 font-semibold">PROJECT TYPE :</span> {specs.projectType}</p>
              <p><span className="text-neutral-800 font-semibold">PROJECT :</span> {specs.details.project}</p>
              <p><span className="text-neutral-800 font-semibold">TOTAL FLOORS :</span> {specs.details.totalFloors}</p>
              <p><span className="text-neutral-800 font-semibold">TOTAL UNITS :</span> {specs.details.totalUnits}</p>
              <p><span className="text-neutral-800 font-semibold">CONFIGURATIONS :</span> {specs.details.configurations}</p>
              <p><span className="text-neutral-800 font-semibold">AMENITIES :</span> {specs.details.amenities}</p>
              <p><span className="text-neutral-800 font-semibold">POSSESSION YEAR :</span> {specs.details.possessionYear}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// 5. MAIN PROJECTS PAGE COMPONENT
// ==========================================
export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  initialFilter = 'ongoing',
  theme = 'dark',
}) => {
  const [searchParams] = useSearchParams();
  const urlFilter = searchParams.get('filter') || searchParams.get('tab');
  const validUrlFilter =
    urlFilter === 'completed' || urlFilter === 'ongoing' || urlFilter === 'upcoming'
      ? (urlFilter as 'ongoing' | 'completed' | 'upcoming')
      : null;

  const [activeTab, setActiveTab] = useState<'ongoing' | 'completed' | 'upcoming'>(
    validUrlFilter || initialFilter
  );

  useEffect(() => {
    if (validUrlFilter) {
      setActiveTab(validUrlFilter);
    }
  }, [validUrlFilter]);

  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);
  const [selectedInquiryProject, setSelectedInquiryProject] = useState<ProjectInquiryData | null>(null);

  const filteredProjects = ALL_PROJECTS.filter((p: ProjectItem) => p.category === activeTab);

  const handleCardClick = (proj: ProjectItem) => {
    setSelectedInquiryProject({
      projectName: proj.name,
      projectLocation: proj.location,
      projectImage: proj.image,
      projectStatus: proj.category === 'ongoing' ? 'Ongoing' : proj.category === 'completed' ? 'Completed' : 'Upcoming',
    });
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="w-full bg-[#f3e8db] text-neutral-800 min-h-screen pb-24 font-sans">

      {/* 1. HERO BANNER SECTION */}
      <section className="relative w-full h-[75vh] min-h-[75vh] flex flex-col justify-end px-6 md:px-16 pb-20 pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/assets/section-titles/legacy-title.jpg"
            alt=""
            decoding="async"
            className="absolute left-1/2 -translate-x-1/2 top-[-34%] h-[340%] w-auto max-w-none animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col items-center justify-center select-none pointer-events-none pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-[90%] md:max-w-xl lg:max-w-2xl px-4 translate-y-8 md:translate-y-12"
          >
            <img
              src="/assets/projects-text.png"
              alt="Creating Spaces With Soul"
              className="w-full h-auto object-contain mx-auto"
            />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-end">
          {/* TAB NAVIGATION BAR */}
          <div className="relative w-full border-y border-white/20 py-2.5">
            <div className="flex items-center gap-0 pl-8 sm:pl-16 lg:pl-28">
              <button
                onClick={() => setActiveTab('ongoing')}
                className={`relative pr-6 py-1 text-xs md:text-sm font-light transition-colors duration-200 cursor-pointer ${activeTab === 'ongoing' ? 'text-[#d4af37]' : 'text-white/55'
                  }`}
              >
                Ongoing Projects
              </button>

              <span className="text-white/30 text-xs px-2 font-extralight">|</span>

              <button
                onClick={() => setActiveTab('completed')}
                className={`relative px-6 py-1 text-xs md:text-sm font-light transition-colors duration-200 cursor-pointer ${activeTab === 'completed' ? 'text-[#d4af37]' : 'text-white/55'
                  }`}
              >
                Completed Projects
              </button>

              <span className="text-white/30 text-xs px-2 font-extralight">|</span>

              <button
                onClick={() => setActiveTab('upcoming')}
                className={`relative px-6 py-1 text-xs md:text-sm font-light transition-colors duration-200 cursor-pointer ${activeTab === 'upcoming' ? 'text-[#d4af37]' : 'text-white/55'
                  }`}
              >
                Upcoming Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERLAPPING PROJECTS CARDS GRID */}
      <section className="relative z-20 px-6 md:px-16 max-w-7xl mx-auto w-full -mt-10 md:-mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {filteredProjects.map((proj: ProjectItem) => (
              <ProjectCard
                key={proj.id}
                proj={proj}
                onImageClick={handleCardClick}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 3. CONTACT US / PROJECT INQUIRY FORM MODAL */}
      <ProjectInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        project={selectedInquiryProject}
        theme={theme}
      />
    </div>
  );
};
