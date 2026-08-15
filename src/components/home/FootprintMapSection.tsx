import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
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
      'Need on – off Button for This in backend',
    ],
  },
];

export const FootprintMapSection: React.FC<FootprintMapSectionProps> = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('delivered');
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<{ id: string; d: string }[]>([]);

  const handleNavigateCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId === 'delivered') {
      navigate('/projects?filter=completed');
    } else if (categoryId === 'ongoing') {
      navigate('/projects?filter=ongoing');
    } else if (categoryId === 'upcoming') {
      navigate('/projects?filter=upcoming');
    } else if (categoryId === 'redevelopment') {
      navigate('/redevelopment');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Robust path calculator that accurately connects text titles on the left to buttons in center
  const updateConnectorLines = useCallback(() => {
    if (!containerRef.current || window.innerWidth < 1024) {
      setLines([]);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const newLines: { id: string; d: string }[] = [];

    // Distinct channel offsets so vertical lines never clash
    const channelOffsets: Record<string, number> = {
      delivered: 32,
      ongoing: 20,
      upcoming: 10,
      redevelopment: 26,
    };

    CATEGORIES.forEach((cat) => {
      const titleEl = document.getElementById(`footprint-left-title-${cat.id}`);
      const btnEl = document.getElementById(`footprint-btn-${cat.id}`);

      if (titleEl && btnEl) {
        const titleRect = titleEl.getBoundingClientRect();
        const btnRect = btnEl.getBoundingClientRect();

        // Start point right at the end of the text label
        const x1 = titleRect.right - containerRect.left + 6;
        const y1 = titleRect.top + titleRect.height / 2 - containerRect.top;

        // End point directly on the left edge of the golden button
        const x2 = btnRect.left - containerRect.left;
        const y2 = btnRect.top + btnRect.height / 2 - containerRect.top;

        // Channel position for vertical segment
        const offset = channelOffsets[cat.id] || 20;
        const midX = x1 + Math.max(16, (x2 - x1) * 0.45 + offset);
        const radius = 16;

        let path = '';
        if (Math.abs(y2 - y1) < 4) {
          // Direct straight horizontal line
          path = `M ${x1} ${y1} L ${x2} ${y2}`;
        } else if (y2 > y1) {
          // Curves DOWN to reach button
          const r = Math.min(radius, Math.abs(midX - x1) / 2, Math.abs(x2 - midX) / 2, (y2 - y1) / 2);
          path = `M ${x1} ${y1} L ${midX - r} ${y1} Q ${midX} ${y1} ${midX} ${y1 + r} L ${midX} ${y2 - r} Q ${midX} ${y2} ${midX + r} ${y2} L ${x2} ${y2}`;
        } else {
          // Curves UP to reach button
          const r = Math.min(radius, Math.abs(midX - x1) / 2, Math.abs(x2 - midX) / 2, (y1 - y2) / 2);
          path = `M ${x1} ${y1} L ${midX - r} ${y1} Q ${midX} ${y1} ${midX} ${y1 - r} L ${midX} ${y2 + r} Q ${midX} ${y2} ${midX + r} ${y2} L ${x2} ${y2}`;
        }

        newLines.push({ id: cat.id, d: path });
      }
    });

    setLines(newLines);
  }, []);

  useEffect(() => {
    updateConnectorLines();

    // Re-measure across multiple ticks to handle layout shifts and font rendering
    const timers = [50, 150, 300, 600, 1200].map((delay) =>
      setTimeout(updateConnectorLines, delay)
    );

    const handleResize = () => {
      requestAnimationFrame(updateConnectorLines);
    };

    window.addEventListener('resize', handleResize);

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateConnectorLines);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, [updateConnectorLines, activeCategory]);

  return (
    <section className="relative w-full overflow-hidden bg-[#101512] text-white min-h-screen lg:min-h-[850px] flex items-center">
      {/* 1. Full-Width Mountain Landscape Background */}
      <img
        src="/assets/branding/footprint-bg.jpg"
        alt="Navi Mumbai Landscape"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
      />

      {/* 2. Main 3-Column Content Container */}
      <div
        ref={containerRef}
        className="relative z-10 w-full flex flex-col lg:flex-row items-stretch justify-between min-h-screen lg:min-h-[850px]"
      >
        {/* Dynamic SVG Connecting Drag Lines (Desktop) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-20 overflow-visible">
          {lines.map((line) => (
            <g key={line.id}>
              {/* Drop Shadow Line for High Visibility */}
              <path
                d={line.d}
                fill="none"
                stroke="rgba(0,0,0,0.7)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Clean Golden Connector Line */}
              <path
                d={line.d}
                fill="none"
                stroke="#C5A059"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          ))}
        </svg>

        {/* COLUMN 1 (LEFT ~27%): Single Unified Project Lists Container */}
        <div className="w-full lg:w-[28%] xl:w-[26%] flex flex-col justify-center py-8 lg:py-12 px-4 sm:px-6 lg:pl-10 xl:pl-12 lg:pr-2 z-10">
          <div className="bg-[#202722]/85 backdrop-blur-md rounded-[28px] p-6 sm:p-7 shadow-[0_12px_35px_rgba(0,0,0,0.5)] space-y-5 max-w-[320px]">
            {/* Delivered Projects */}
            <div
              id="footprint-category-delivered"
              onClick={() => handleNavigateCategory('delivered')}
              className="cursor-pointer group"
            >
              <div className="flex items-center">
                <h3
                  id="footprint-left-title-delivered"
                  className="font-sans font-medium text-[14px] sm:text-[15px] text-white group-hover:text-[#C5A059] transition-colors tracking-wide inline-block whitespace-nowrap"
                >
                  {CATEGORIES[0].title}
                </h3>
              </div>
              <ul className="mt-2 space-y-1 text-[11px] sm:text-[12px] text-white/90 font-light leading-relaxed">
                {CATEGORIES[0].projects.map((proj, idx) => (
                  <li key={idx} className="group-hover:text-white transition-colors">{proj}</li>
                ))}
              </ul>
            </div>

            {/* Ongoing Projects */}
            <div
              id="footprint-category-ongoing"
              onClick={() => handleNavigateCategory('ongoing')}
              className="pt-1 cursor-pointer group"
            >
              <div className="flex items-center">
                <h3
                  id="footprint-left-title-ongoing"
                  className="font-sans font-medium text-[14px] sm:text-[15px] text-white group-hover:text-[#C5A059] transition-colors tracking-wide inline-block whitespace-nowrap"
                >
                  {CATEGORIES[1].title}
                </h3>
              </div>
              <ul className="mt-2 space-y-1 text-[11px] sm:text-[12px] text-white/90 font-light leading-relaxed">
                {CATEGORIES[1].projects.map((proj, idx) => (
                  <li key={idx} className="group-hover:text-white transition-colors">{proj}</li>
                ))}
              </ul>
            </div>

            {/* Upcoming Projects */}
            <div
              id="footprint-category-upcoming"
              onClick={() => handleNavigateCategory('upcoming')}
              className="pt-1 cursor-pointer group"
            >
              <div className="flex items-center">
                <h3
                  id="footprint-left-title-upcoming"
                  className="font-sans font-medium text-[14px] sm:text-[15px] text-white group-hover:text-[#C5A059] transition-colors tracking-wide inline-block whitespace-nowrap"
                >
                  {CATEGORIES[2].title}
                </h3>
              </div>
              <ul className="mt-2 space-y-1 text-[11px] sm:text-[12px] text-white/90 font-light leading-relaxed">
                {CATEGORIES[2].projects.map((proj, idx) => (
                  <li key={idx} className="group-hover:text-white transition-colors">{proj}</li>
                ))}
              </ul>
            </div>

            {/* Redevelopment Projects */}
            <div
              id="footprint-category-redevelopment"
              onClick={() => handleNavigateCategory('redevelopment')}
              className="pt-1 cursor-pointer group"
            >
              <div className="flex items-center">
                <h3
                  id="footprint-left-title-redevelopment"
                  className="font-sans font-medium text-[14px] sm:text-[15px] text-white group-hover:text-[#C5A059] transition-colors tracking-wide inline-block whitespace-nowrap"
                >
                  {CATEGORIES[3].title}
                </h3>
              </div>
              <ul className="mt-2 space-y-1 text-[11px] sm:text-[12px] text-white/90 font-light leading-relaxed">
                {CATEGORIES[3].projects.map((proj, idx) => (
                  <li key={idx} className="group-hover:text-white transition-colors">{proj}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* COLUMN 2 (CENTER ~34%): Heading, Subtitle & 4 Golden Action Buttons */}
        <div className="w-full lg:w-[34%] xl:w-[33%] flex flex-col justify-center py-8 lg:py-12 px-4 sm:px-6 lg:pl-12 lg:pr-4 z-10">
          {/* Main Title & Subtitle */}
          <div className="mb-8 lg:mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold text-white leading-[1.2] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] mb-4">
              A Solid Footprint Across <br />
              Navi Mumbai
            </h2>
            <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed max-w-md font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              We have a wide presence across Navi Mumbai&apos;s key locations like Seawoods, Nerul,
              Kharghar and Ulwe among others.
            </p>
          </div>

          {/* 4 Golden Rectangular Action Buttons */}
          <div className="space-y-3.5 max-w-[340px] w-full">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                id={`footprint-btn-${category.id}`}
                onClick={() => handleNavigateCategory(category.id)}
                className="w-full flex items-center justify-between px-6 py-3.5 rounded-sm text-left bg-[#C5A059] hover:bg-[#B38D48] text-white transition-all duration-300 font-sans font-medium text-[15px] sm:text-[16px] shadow-[0_6px_20px_rgba(0,0,0,0.35)] hover:scale-[1.01] cursor-pointer"
              >
                <span className="tracking-wide">{category.buttonLabel}</span>
                <Plus className="w-4 h-4 text-white shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* COLUMN 3 (RIGHT ~39%): Navi Mumbai Geographic Map with Pins */}
        <div className="w-full lg:w-[38%] xl:w-[41%] relative min-h-[350px] sm:min-h-[450px] lg:min-h-[850px] flex items-center justify-end overflow-hidden">
          <img
            src="/assets/branding/map-footprint.png"
            alt="Navi Mumbai Geographic Map Footprints"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center lg:object-right pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};
