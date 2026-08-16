import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { ThemeMode } from '../../types';

interface FootprintMapSectionProps {
  theme: ThemeMode;
}

interface ProjectCategory {
  id: string;
  title: string;
  buttonLabel: string;
  projects: string[];
}

const CATEGORIES: ProjectCategory[] = [
  {
    id: 'delivered',
    title: 'Delivered Projects-',
    buttonLabel: 'Delivered Projects',
    projects: [
      'Neelkanth Luxuria – Taloja',
      'Goodluck Heights – Taloja',
      'Neelkanth pride – Ulwe',
      'Neelkanth Majestic – Ulwe',
      'Neelkanth Avenue – Kharghar',
      'Panchanand Heights – Taloja',
      'Greystone Heights – Kamothe',
      'Neelkanth Bliss – Roadpali',
      'Neelkanth Exotica – Dronagiri',
      'Neelkanth Classic – Kharghar',
      'Prism Heights – Taloja',
    ],
  },
  {
    id: 'ongoing',
    title: 'Ongoing Projects-',
    buttonLabel: 'Ongoing Projects',
    projects: [
      'Neelkanth Darshan – Kharghar',
      'Neelkanth Corner – Puspak Nagar',
      'Neelkanth Shreeji – Puspak Nagar',
      'Neelkanth Rudra – Ulwe',
      'Neelkanth Shiv – Kamothe',
      'Neelkanth Laxmi – Panvel',
      'Neelkanth Dham – Roadpali',
      'Neelkanth Complex – Old Panvel',
      'Patel Park – Ulwe',
    ],
  },
  {
    id: 'upcoming',
    title: 'Upcoming Projects-',
    buttonLabel: 'Upcoming Projects',
    projects: [
      'Neelkanth Space – Ulwe',
      'Neelkanth Unicorn – Rabale',
      'Neelkanth S7-24 – Puspak Nagar',
    ],
  },
  {
    id: 'redevelopment',
    title: 'Redevelopment Projects-',
    buttonLabel: 'Redevelopment Projects',
    projects: [
      'Societies & Towers Across Kharghar',
      'Premium Node Redevelopment Planning',
      'Residential Society Modernization',
    ],
  },
];

interface MapPinInfo {
  id: string;
  label: string;
  x: string; // Left percentage relative to native aspect ratio
  y: string; // Top percentage relative to native aspect ratio
  projects: string[];
  categories: string[];
}

const MAP_PINS: MapPinInfo[] = [
  {
    id: 'rabale',
    label: 'Rabale',
    x: '64.8%',
    y: '25.6%',
    projects: ['Neelkanth Unicorn (Upcoming Commercial Icon)'],
    categories: ['upcoming']
  },
  {
    id: 'taloja',
    label: 'Taloja',
    x: '95.6%',
    y: '37.8%',
    projects: ['Neelkanth Luxuria', 'Goodluck Heights', 'Prism Heights', 'Panchanand Heights'],
    categories: ['delivered']
  },
  {
    id: 'kharghar',
    label: 'Kharghar',
    x: '83.6%',
    y: '45.3%',
    projects: ['Neelkanth Avenue', 'Neelkanth Classic', 'Neelkanth Darshan'],
    categories: ['delivered', 'ongoing']
  },
  {
    id: 'roadpali',
    label: 'Roadpali',
    x: '92.7%',
    y: '56.2%',
    projects: ['Neelkanth Bliss', 'Neelkanth Dham'],
    categories: ['delivered', 'ongoing']
  },
  {
    id: 'kalamboli',
    label: 'Kalamboli',
    x: '93.7%',
    y: '63.3%',
    projects: ['Strategic Land Parcel for Future Development'],
    categories: []
  },
  {
    id: 'seawoods',
    label: 'Seawoods',
    x: '69.1%',
    y: '65.2%',
    projects: ['Premium Residential Planning Area'],
    categories: []
  },
  {
    id: 'kamothe',
    label: 'Kamothe',
    x: '86.9%',
    y: '67.0%',
    projects: ['Greystone Heights', 'Neelkanth Shiv'],
    categories: ['delivered', 'ongoing']
  },
  {
    id: 'new-panvel',
    label: 'New Panvel',
    x: '94.8%',
    y: '72.9%',
    projects: ['Residential Land Footprints'],
    categories: []
  },
  {
    id: 'panvel',
    label: 'Panvel',
    x: '94.8%',
    y: '81.7%',
    projects: ['Neelkanth Laxmi', 'Neelkanth Complex (Old Panvel)'],
    categories: ['ongoing']
  },
  {
    id: 'ulwe',
    label: 'Ulwe',
    x: '70.8%',
    y: '80.3%',
    projects: ['Neelkanth Pride', 'Neelkanth Majestic', 'Neelkanth Rudra', 'Patel Park', 'Neelkanth Space'],
    categories: ['delivered', 'ongoing', 'upcoming']
  },
  {
    id: 'pushpak-nagar',
    label: 'Pushpak Nagar',
    x: '81.2%',
    y: '83.2%',
    projects: ['Neelkanth Corner', 'Neelkanth Shreeji', 'Neelkanth S7-24'],
    categories: ['ongoing', 'upcoming']
  },
  {
    id: 'karanjade',
    label: 'Karanjade',
    x: '90.4%',
    y: '88.4%',
    projects: ['Future Planned Footprints'],
    categories: []
  },
  {
    id: 'dronagiri',
    label: 'Dronagiri',
    x: '65.6%',
    y: '95.0%',
    projects: ['Neelkanth Exotica'],
    categories: ['delivered']
  }
];

export const FootprintMapSection: React.FC<FootprintMapSectionProps> = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('delivered');

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? '' : categoryId);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#101512] text-white min-h-screen flex items-center">
      {/* 1. Full-Width Mountain Landscape Background */}
      <img
        src="/assets/branding/footprint-bg.jpg"
        alt="Navi Mumbai Landscape"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
      />

      {/* 2. Main 2-Column Content Container */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-stretch justify-between min-h-screen lg:min-h-[112vh]">
        
        {/* COLUMN 1: Heading & Accordion Stack */}
        <div className="w-full lg:w-[25%] xl:w-[22%] flex flex-col justify-center pt-24 pb-4 lg:py-12 lg:min-h-[112vh] px-6 sm:px-12 lg:pl-16 lg:pr-2 z-10">
          {/* Main Title */}
          <div className="mb-6 lg:mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold text-white leading-[1.2] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              A Solid Footprint Across <br />
              Navi Mumbai
            </h2>
          </div>

          {/* Accordion Stack */}
          <div className="space-y-3 w-full">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <div key={category.id} className="w-full">
                  <button
                    id={`footprint-btn-${category.id}`}
                    onClick={() => handleSelectCategory(category.id)}
                    className={`w-full flex items-center justify-between px-6 py-4 rounded-sm text-left transition-all duration-300 font-sans font-medium text-[15px] sm:text-[16px] shadow-[0_6px_20px_rgba(0,0,0,0.35)] hover:scale-[1.01] cursor-pointer ${
                      isActive 
                        ? 'bg-white text-[#101512] ring-2 ring-[#C5A059]' 
                        : 'bg-[#C5A059] hover:bg-[#B38D48] text-white'
                    }`}
                  >
                    <span className="tracking-wide">{category.buttonLabel}</span>
                    <Plus className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isActive ? 'rotate-45 text-[#C5A059]' : 'text-white'}`} />
                  </button>

                  {/* Accordion List Body */}
                  {isActive && (
                    <div className="mt-2.5 bg-[#202722]/90 backdrop-blur-md rounded-lg p-5 border border-white/10 shadow-lg space-y-4">
                      <ul className="space-y-2 text-[12px] sm:text-[13px] text-white/90 font-light leading-relaxed">
                        {category.projects.map((proj, idx) => (
                          <li key={idx} className="flex items-start gap-2 hover:text-white transition-colors">
                            <span className="text-[#C5A059] mt-1">•</span>
                            <span>{proj}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* COLUMN 2: Navi Mumbai Geographic Map with Pins */}
        <div className="w-full lg:w-[75%] xl:w-[78%] relative flex-1 lg:min-h-[112vh] flex flex-col justify-end items-center lg:items-start p-0 z-10 overflow-hidden">
          <div className="relative w-full lg:w-auto lg:h-full aspect-[1920/1358] flex-shrink-0">
            <img
              src="/assets/branding/map-footprint.png"
              alt="Navi Mumbai Geographic Map Footprints"
              loading="lazy"
              className="w-full h-full object-contain object-bottom lg:object-left pointer-events-none"
            />
            {/* Interactive Pulse Indicators & Tooltips */}
            {MAP_PINS.map((pin) => {
              return (
                <div
                  key={pin.id}
                  style={{ left: pin.x, top: pin.y }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group z-30"
                >
                  <div className="relative flex items-center justify-center">
                    {/* Interactive hotspot dot overlaying the map's red pins (completely invisible, triggers tooltip on hover) */}
                    <div className="w-6 h-6 rounded-full cursor-pointer bg-transparent" />

                    {/* Tooltip on Hover */}
                    <div className="absolute bottom-full mb-3 hidden group-hover:flex flex-col items-center z-50 pointer-events-none transition-all duration-300">
                      <div className="bg-[#202722]/95 backdrop-blur-md border border-[#C5A059]/40 rounded-xl py-2.5 px-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.8)] min-w-[200px] max-w-[280px]">
                        <p className="text-[11px] uppercase tracking-wider font-semibold text-[#C5A059] border-b border-[#C5A059]/20 pb-1.5 mb-1.5">
                          {pin.label}
                        </p>
                        <ul className="space-y-1">
                          {pin.projects.map((proj, idx) => (
                            <li key={idx} className="text-[10px] text-white/90 font-light flex items-start gap-1.5 leading-relaxed">
                              <span className="text-[#C5A059] mt-0.5">•</span>
                              <span>{proj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-2.5 h-2.5 bg-[#202722]/95 border-r border-b border-[#C5A059]/40 rotate-45 -mt-1.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
