import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Property, ThemeMode } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPLETED_PROJECTS, ONGOING_PROJECTS, UPCOMING_PROJECTS, NSProject } from '../../data/nsquare';
import { ProjectInquiryModal, ProjectInquiryData } from '../layout/ProjectInquiryModal';

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
  location: `${p.location}, Navi Mumbai`,
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
    <div className="bg-transparent text-white overflow-hidden flex flex-col transition-all duration-300">
      {/* Card Image */}
      <div 
        onClick={() => onImageClick(proj)}
        className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 border border-white/5 rounded-sm cursor-pointer group"
      >
        <img
          src={proj.image}
          alt={proj.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
        
        {/* Overlay hover cue */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
          <span className="bg-[#C5A059] text-black text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">
            Enquire Now
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="pt-4 pb-6 flex flex-col flex-1">
        
        {/* Title */}
        <h3 
          onClick={() => onImageClick(proj)}
          className="text-xl md:text-2xl font-serif text-white font-normal tracking-wide mb-2.5 leading-snug cursor-pointer hover:text-[#C5A059] transition-colors"
        >
          {proj.name}
        </h3>

        {/* Badges / Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-3.5">
          <span className="px-3.5 py-1 text-[9px] uppercase tracking-[0.15em] font-medium border border-white/40 rounded-full text-white/90">
            {proj.location}
          </span>
          <span className="px-4 py-1 text-[9px] uppercase tracking-[0.15em] font-bold bg-white text-black rounded-full">
            {proj.category === 'ongoing' ? 'Ongoing' : proj.category === 'completed' ? 'Completed' : 'Upcoming'}
          </span>
        </div>

        {/* Top specs */}
        <div className="space-y-0.5 text-[10px] md:text-[11px] text-neutral-400 tracking-wider font-light uppercase">
          <p>PLOT SIZE : {specs.plotSize}</p>
          <p>PROJECT TYPE : {specs.projectType}</p>
        </div>

        {/* Know More Action */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3.5 inline-flex items-center text-xs md:text-sm font-light text-white hover:text-[#C5A059] transition-colors text-left self-start group cursor-pointer"
        >
          <span className="underline decoration-white/30 group-hover:decoration-[#C5A059] transition-colors pb-0.5">
            Know more
          </span>
          <span className="ml-1.5 transition-transform group-hover:translate-x-1 duration-200">
            &rarr;
          </span>
        </button>

        {/* Specs detail collapsible panel */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              {/* Specification detailed list */}
              <div className="space-y-1 pt-3 text-[10px] md:text-[11px] text-neutral-400 tracking-wider font-light uppercase leading-relaxed border-t border-white/10 mt-3">
                <p><span className="text-neutral-500 font-normal">PROJECT :</span> {specs.details.project}</p>
                <p><span className="text-neutral-500 font-normal">TOTAL FLOORS :</span> {specs.details.totalFloors}</p>
                <p><span className="text-neutral-500 font-normal">TOTAL UNITS :</span> {specs.details.totalUnits}</p>
                <p><span className="text-neutral-500 font-normal">CONFIGURATIONS :</span> {specs.details.configurations}</p>
                <p><span className="text-neutral-500 font-normal">AMENITIES :</span> {specs.details.amenities}</p>
                <p><span className="text-neutral-500 font-normal">POSSESSION YEAR :</span> {specs.details.possessionYear}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
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
    <div className="w-full bg-[#0C0C0C] text-white min-h-screen pb-24 font-sans">
      
      {/* 1. HERO BANNER SECTION */}
      <section className="relative w-full h-[50vh] min-h-[380px] max-h-[460px] flex flex-col justify-end px-6 md:px-16 pb-20 pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/assets/section-titles/legacy-title.jpg"
            alt=""
            decoding="async"
            className="absolute left-1/2 -translate-x-1/2 top-[-34%] h-[340%] w-auto max-w-none animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-end">

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
                  <>
                    <span className="absolute left-0 right-6 -top-[11px] h-[2px] bg-[#d4af37]" />
                    <span className="absolute left-0 right-6 -bottom-[11px] h-[2px] bg-[#d4af37]" />
                  </>
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
                  <>
                    <span className="absolute left-6 right-6 -top-[11px] h-[2px] bg-[#d4af37]" />
                    <span className="absolute left-6 right-6 -bottom-[11px] h-[2px] bg-[#d4af37]" />
                  </>
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
                  <>
                    <span className="absolute left-6 right-0 -top-[11px] h-[2px] bg-[#d4af37]" />
                    <span className="absolute left-6 right-0 -bottom-[11px] h-[2px] bg-[#d4af37]" />
                  </>
                )}
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