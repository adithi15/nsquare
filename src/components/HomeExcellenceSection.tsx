import React, { useState, useEffect } from 'react';
import { ThemeMode } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ChevronRight, Building2 } from 'lucide-react';

interface SectionProps {
  theme?: ThemeMode;
}

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

      <div className="flex flex-col lg:flex-row min-h-[480px] lg:min-h-[660px]">
        {/* LEFT: Text area — beige background, full height of the image */}
        <div className="relative lg:w-[50%] flex flex-col justify-center px-8 py-12 lg:py-20 lg:pl-16 lg:pr-12" style={{ background: '#f5e6d3' }}>
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
        <div className="relative lg:w-[50%] min-h-[400px] lg:min-h-0 overflow-hidden">
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
          <div className="hidden lg:flex flex-col justify-end p-8 shrink-0 w-[22%] min-h-[480px] relative overflow-hidden"
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
        <div className="relative w-full lg:w-[48%] min-h-[400px] lg:min-h-[640px] overflow-hidden">
          <img
            src="/assets/img/home/quality.jpg"
            alt="Crafting Legacies"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* "Shot At Nsquare" label bottom-left */}
          <span className="absolute bottom-4 left-4 z-10 text-white/80"
            style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Shot At Nsquare
          </span>
        </div>

        {/* RIGHT: Text on beige background — full height card */}
        <div className="relative lg:w-[52%] flex flex-col justify-center px-8 py-12 lg:py-20 lg:pl-14 lg:pr-16" style={{ background: '#f5e6d3' }}>
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#a1896b] mb-4 inline-block">
            Team
          </span>
          {/* Thin horizontal line under Team label (matches reference) */}
          <div className="w-[140px] h-px bg-[#a1896b]/40 mb-6" />
          <h2 className="text-3xl sm:text-[38px] md:text-[42px] font-serif text-[#222] leading-[1.15] tracking-tight mb-5">
            Crafting Legacies That Meet<br />
            Global Standards
          </h2>
          <p className="text-[14px] text-[#58595b] leading-[1.85] mb-8 text-justify" style={{ maxWidth: '560px' }}>
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
      <div className="w-full h-12 lg:h-20" style={{ background: '#f5e6d3' }} />
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
    { name: 'Nsquare', location: 'C.B.D. Belapur, Navi Mumbai', key: 'belapur' },
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