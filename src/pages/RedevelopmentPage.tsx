import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  Gem, 
  Users2, 
  Search, 
  Users, 
  Scale, 
  PenTool, 
  FileCheck, 
  ClipboardCheck, 
  Network, 
  Key, 
  Wrench,
  Maximize2,
  TrendingUp,
  Send,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Car,
  HeartHandshake
} from 'lucide-react';
import { CONTACT } from '../data/nsquare';

interface RedevelopmentPageProps {
  theme?: ThemeMode;
}

// Official WhatsApp glyph
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const BENEFITS = [
  {
    step: '01',
    icon: ShieldCheck,
    title: 'Stronger and Safer Structures',
    description: 'Older buildings across Navi Mumbai often face structural degradation and aging infrastructure. Redevelopment ensures modern engineering standards, enhanced earthquake resistance, superior building materials, and full compliance with updated regulatory norms.',
  },
  {
    step: '02',
    icon: Maximize2,
    title: 'Better Space Planning',
    description: 'New architectural layouts are meticulously designed to maximize carpet area and usable space, offering modern homes with optimized cross-ventilation, abundant natural light, and smart interior planning.',
  },
  {
    step: '03',
    icon: Sparkles,
    title: 'Enhanced Lifestyle Amenities',
    description: 'Redeveloped developments incorporate essential contemporary features such as tower/automated parking, modern fitness centers, advanced security systems, and well-planned community spaces that elevate everyday urban living.',
  },
  {
    step: '04',
    icon: TrendingUp,
    title: 'Financial and Long-Term Value',
    description: 'Redevelopment significantly boosts property asset value, offering residents upgraded, modern homes with higher market appreciation—all while retaining their prime Navi Mumbai location.',
  },
  {
    step: '05',
    icon: Users2,
    title: 'Continuity of Community',
    description: 'A major advantage of redevelopment across Navi Mumbai is the ability for long-standing residents to preserve their established neighbourhood bonds and social connections while seamlessly transitioning into modernized, safer living environments.',
  },
];

const WORKFLOW = [
  {
    num: '01',
    icon: Search,
    title: 'Identifying Potential Sites',
    description: 'We start by evaluating CIDCO-allocated plots, society buildings, and aging nodes across Navi Mumbai that have untapped potential and require structural revitalization. Our experienced team assesses the site\'s structural health, plot clear titles, regulatory guidelines, and potential impact on the node.',
  },
  {
    num: '02',
    icon: Users,
    title: 'Community Engagement',
    description: 'We believe in absolute transparency with housing societies. We engage directly with society members, managing committees, and local stakeholders to understand their expectations, space requirements, and aspirations. This collaboration ensures our plans align with the community\'s collective vision.',
  },
  {
    num: '03',
    icon: Scale,
    title: 'Feasibility Study',
    description: 'Before proceeding, we conduct a comprehensive feasibility study assessing financial viability, CIDCO/NMMC/PMC zoning regulations, potential FSI (Floor Space Index), and UDCPR norms. This guarantees that the redevelopment project is legally compliant, economically sound, and financially secure for every member.',
  },
  {
    num: '04',
    icon: PenTool,
    title: 'Design and Planning',
    description: 'Our team of architects and urban planners designs modern, sustainable layouts that optimize usable carpet area, ventilation, and natural light. We focus on smart, energy-efficient building standards that enhance daily living while respecting the surrounding urban landscape.',
  },
  {
    num: '05',
    icon: FileCheck,
    title: 'Obtaining Approvals',
    description: 'We navigate the local regulatory framework seamlessly, securing all mandatory sanctions, NOCs from CIDCO, NMMC/PMC, fire safety approvals, and environmental clearances to ensure the project strictly adheres to local development control rules.',
  },
  {
    num: '06',
    icon: Building2,
    title: 'Construction',
    description: 'Execution begins as our construction team transforms the site using state-of-the-art construction technologies, high-grade materials, and modern engineering practices to deliver structural strength, safety, and longevity.',
  },
  {
    num: '07',
    icon: ClipboardCheck,
    title: 'Quality Control',
    description: 'Quality is non-negotiable. We maintain multi-tier quality checks and third-party audits to guarantee that structural integrity, finishing, safety standards, and material specifications meet or exceed industry benchmarks.',
  },
  {
    num: '08',
    icon: Network,
    title: 'Community Integration',
    description: 'We design projects that integrate smoothly into the existing node infrastructure. By incorporating ample parking, green open spaces, modern clubhouses, and security systems, we enhance the lifestyle of the entire society.',
  },
  {
    num: '09',
    icon: Key,
    title: 'Completion and Delivery',
    description: 'Upon completion, we conduct meticulous quality inspections before obtaining the Occupancy Certificate (OC). We ensure a seamless handover of key keys and modern homes to existing society residents and new homeowners.',
  },
  {
    num: '10',
    icon: Wrench,
    title: 'Ongoing Maintenance',
    description: 'Our commitment extends beyond handing over keys. We provide structured post-possession support, defect liability assistance, and guidance on facility management to ensure the property remains a valuable asset for generations.',
  },
];

export const RedevelopmentPage: React.FC<RedevelopmentPageProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';

  // Common animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } 
    }
  };

  return (
    <div className={`w-full flex flex-col space-y-20 pb-24 transition-colors duration-500 ${
      isDark ? 'bg-[#0A0A0A] text-neutral-200' : 'bg-[#f8f6f0] text-neutral-800'
    } font-sans overflow-hidden`}>
      
      {/* 1. HERO HEADER */}
      <section className="relative w-full h-[55vh] min-h-[440px] max-h-[540px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/branding/city-aerial.jpg"
            alt="Navi Mumbai Skyline"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-[0.45em] text-[#C5A059] font-bold block">
              Navi Mumbai Redevelopment
            </span>
            <h1 className="text-3xl md:text-6xl font-serif text-white tracking-wide leading-tight uppercase">
              Transforming Societies
            </h1>
            <div className="w-20 h-[1.5px] bg-[#C5A059] mx-auto my-4" />
            <p className="text-xs md:text-base text-white/80 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Engineering safer developments, introducing luxury amenities, and securing generational assets. Learn how we redevelop legacy buildings.
            </p>
          </motion.div>
        </div>

      </section>

      {/* 2. INTRO & WHAT IS REDEVELOPMENT */}
      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Redefining Redevelopment */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className={`text-2xl md:text-[2.1rem] font-serif leading-tight tracking-wide uppercase ${
              isDark ? 'text-white' : 'text-neutral-950'
            }`}>
              Redefining Redevelopment.<br />Building What's Next.
            </h2>
            <div className={`space-y-4.5 text-xs md:text-[13.5px] leading-relaxed font-light ${
              isDark ? 'text-neutral-400' : 'text-neutral-700'
            }`}>
              <p>
                At <strong className="font-semibold text-[#C5A059]">NSQUARE</strong>, we believe redevelopment is more than rebuilding a structure — it is about <strong className="font-semibold text-neutral-950 dark:text-white">creating better homes, stronger communities, and lasting value.</strong> With our understanding of Navi Mumbai's evolving landscape, we work closely with housing societies, homeowners, and stakeholders to transform existing properties into thoughtfully planned, modern developments.
              </p>
              <p>
                We understand that redevelopment is a significant decision for every society and its members. That's why we believe in a <strong className="font-semibold text-neutral-950 dark:text-white">transparent, collaborative, and well-managed process</strong>, keeping residents informed and involved at every stage — from planning and approvals to construction and handover.
              </p>
              <p>
                Our approach combines <strong className="font-semibold text-neutral-950 dark:text-white">design excellence, quality construction, disciplined execution, and ethical practices</strong> to create developments that meet the aspirations of today while adding long-term value for tomorrow.
              </p>
              <p>
                At <strong className="font-semibold text-[#C5A059]">NSQUARE</strong>, we don't just rebuild structures; we build trust and long-term value. We strive to make the process as seamless and stress-free as possible for our clients.
              </p>
            </div>
          </div>

          {/* Right Column: What Is Redevelopment? */}
          <div className={`lg:col-span-5 p-8 border flex flex-col justify-center min-h-[300px] text-left ${
            isDark 
              ? 'bg-neutral-900/30 border-white/5' 
              : 'bg-[#f4efe6] border-neutral-300/40 shadow-sm'
          }`}>
            <h3 className="text-xl font-serif text-[#C5A059] mb-4 uppercase tracking-wide">
              What Is Redevelopment?
            </h3>
            <p className={`text-xs md:text-[13.5px] leading-relaxed font-light ${
              isDark ? 'text-neutral-400' : 'text-neutral-700'
            }`}>
              Redevelopment offers a powerful solution for housing societies in Mumbai where old buildings are either dilapidated, uninhabitable or lack modern amenities. It is a process of demolishing existing structures and reconstructing buildings into modern, functional spaces. Redevelopment of societies accelerates and empowers them with more space, better amenities, and an improved quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS OF REDEVELOPMENT BOX (6 PILLARS) */}
      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full">
        <div className={`p-8 md:p-14 text-center border shadow-xl relative overflow-hidden transition-all duration-300 ${
          isDark 
            ? 'bg-[#121212]/95 border-white/5 text-white shadow-black/60' 
            : 'bg-[#F9F8F6] border-neutral-200/80 text-neutral-800'
        }`}>
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E2863B]/20 via-[#E2863B] to-[#E2863B]/20 dark:from-[#C5A059]/20 dark:via-[#C5A059] dark:to-[#C5A059]/20" />
          
          <h2 className="text-3xl md:text-[2.6rem] font-serif text-[#E2863B] dark:text-[#C5A059] tracking-wide mb-3">
            Benefits of Redevelopment
          </h2>
          <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 font-semibold mb-12 max-w-3xl mx-auto">
            PARTNERING WITH A REPUTABLE DEVELOPER LIKE N-SQUARE UNLOCKS A RANGE OF BENEFITS FOR SOCIETIES.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 max-w-5xl mx-auto">
            {/* Benefit 1: Optimal Space Utilization */}
            <div className="flex flex-col items-center text-center space-y-3.5 group cursor-default">
              <div className="flex items-center justify-center text-[#E2863B] dark:text-[#C5A059] transition-transform duration-300 group-hover:scale-110">
                <svg className="w-11 h-11" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {/* Center Square */}
                  <rect x="7" y="11" width="16" height="16" rx="0.5" />
                  {/* Top Horizontal Measurement Arrow */}
                  <line x1="7" y1="5" x2="23" y2="5" />
                  <polyline points="10,2 7,5 10,8" />
                  <polyline points="20,2 23,5 20,8" />
                  {/* Right Vertical Measurement Arrow */}
                  <line x1="29" y1="11" x2="29" y2="27" />
                  <polyline points="26,14 29,11 32,14" />
                  <polyline points="26,24 29,27 32,24" />
                </svg>
              </div>
              <span className={`text-xs md:text-sm tracking-wider font-semibold ${
                isDark ? 'text-neutral-200' : 'text-neutral-800'
              }`}>
                Optimal Space Utilization
              </span>
            </div>

            {/* Benefit 2: Dedicated Parking Space */}
            <div className="flex flex-col items-center text-center space-y-3.5 group cursor-default">
              <div className="flex items-center justify-center text-[#E2863B] dark:text-[#C5A059] transition-transform duration-300 group-hover:scale-110">
                <svg className="w-11 h-11" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Left: Top-down view of car */}
                  <line x1="2" y1="5" x2="2" y2="31" strokeDasharray="2 2" />
                  <line x1="20" y1="5" x2="20" y2="31" />
                  <rect x="5.5" y="8" width="11" height="20" rx="3" />
                  <path d="M7 13c1.5-1 4.5-1 8 0" />
                  <path d="M7 23c1.5 1 4.5 1 8 0" />
                  <rect x="7" y="14" width="8" height="8" rx="1" strokeWidth="1.2" />
                  <path d="M4 12.5h1.5M4 14.5h1.5M16.5 12.5H18M16.5 14.5H18" />
                  <line x1="7" y1="8" x2="8.5" y2="8" strokeWidth="2" />
                  <line x1="13.5" y1="8" x2="15" y2="8" strokeWidth="2" />
                  <line x1="7" y1="28" x2="8.5" y2="28" strokeWidth="2" />
                  <line x1="13.5" y1="28" x2="15" y2="28" strokeWidth="2" />
                  {/* Right: Parking P with markers */}
                  <line x1="24" y1="8" x2="33" y2="8" />
                  <path d="M26.5 22V13h3.5a2.5 2.5 0 0 1 0 5h-3.5" strokeWidth="1.8" />
                  <line x1="24" y1="28" x2="33" y2="28" />
                </svg>
              </div>
              <span className={`text-xs md:text-sm tracking-wider font-semibold ${
                isDark ? 'text-neutral-200' : 'text-neutral-800'
              }`}>
                Dedicated Parking Space
              </span>
            </div>

            {/* Benefit 3: Enhanced Property Value */}
            <div className="flex flex-col items-center text-center space-y-3.5 group cursor-default">
              <div className="flex items-center justify-center text-[#E2863B] dark:text-[#C5A059] transition-transform duration-300 group-hover:scale-110">
                <svg className="w-11 h-11" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* 3 Growth Bars */}
                  <rect x="3" y="21" width="4" height="9" rx="1.5" />
                  <rect x="9" y="16" width="4" height="14" rx="1.5" />
                  <rect x="15" y="11" width="4" height="19" rx="1.5" />
                  {/* Upward Arching Growth Arrow */}
                  <path d="M3 17C6 11 12 7 19 6" strokeWidth="1.8" />
                  <polyline points="15,4 20,6 18,11" strokeWidth="1.8" />
                  {/* Circle with Rupee ₹ Symbol */}
                  <circle cx="27" cy="22" r="7.5" strokeWidth="1.5" />
                  <path d="M24 18.5h6" strokeWidth="1.3" />
                  <path d="M24 21h4.5" strokeWidth="1.3" />
                  <path d="M25.5 18.5v3.5a1.8 1.8 0 0 0 0 3.5h.5l3.5 3.5" strokeWidth="1.3" />
                </svg>
              </div>
              <span className={`text-xs md:text-sm tracking-wider font-semibold ${
                isDark ? 'text-neutral-200' : 'text-neutral-800'
              }`}>
                Enhanced Property Value
              </span>
            </div>

            {/* Benefit 4: Modernized Living Spaces */}
            <div className="flex flex-col items-center text-center space-y-3.5 group cursor-default">
              <div className="flex items-center justify-center text-[#E2863B] dark:text-[#C5A059] transition-transform duration-300 group-hover:scale-110">
                <svg className="w-11 h-11" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Left building */}
                  <path d="M4 31V16l6-4v19" />
                  <line x1="7" y1="17" x2="7" y2="28" />
                  {/* Center tall building with angled roof */}
                  <path d="M11 31V9l8-5v27" strokeWidth="1.6" />
                  <line x1="13.5" y1="10" x2="16.5" y2="10" />
                  <line x1="13.5" y1="13" x2="16.5" y2="13" />
                  <line x1="13.5" y1="16" x2="16.5" y2="16" />
                  <line x1="13.5" y1="19" x2="16.5" y2="19" />
                  <line x1="13.5" y1="22" x2="16.5" y2="22" />
                  <line x1="13.5" y1="25" x2="16.5" y2="25" />
                  <line x1="13.5" y1="28" x2="16.5" y2="28" />
                  {/* Right building */}
                  <path d="M20 31V12l6 3v16" />
                  <line x1="23" y1="18" x2="23" y2="28" />
                  {/* Far right wing & ground */}
                  <path d="M27 31V20l5 2v9" />
                  <line x1="2" y1="31" x2="34" y2="31" />
                </svg>
              </div>
              <span className={`text-xs md:text-sm tracking-wider font-semibold ${
                isDark ? 'text-neutral-200' : 'text-neutral-800'
              }`}>
                Modernized Living Spaces
              </span>
            </div>

            {/* Benefit 5: Upgraded Lifestyle Amenities */}
            <div className="flex flex-col items-center text-center space-y-3.5 group cursor-default">
              <div className="flex items-center justify-center text-[#E2863B] dark:text-[#C5A059] transition-transform duration-300 group-hover:scale-110">
                <svg className="w-11 h-11" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Circular Cycle Arrows */}
                  <path d="M18 4a14 14 0 0 1 13 9" strokeWidth="1.5" />
                  <polyline points="29,7 32,13 26,13" strokeWidth="1.5" />
                  <path d="M18 32a14 14 0 0 1-13-9" strokeWidth="1.5" />
                  <polyline points="7,29 4,23 10,23" strokeWidth="1.5" />
                  {/* Center House */}
                  <path d="M11 25V17l7-5 7 5v8a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1Z" strokeWidth="1.5" />
                  <path d="M16 26v-5h4v5" strokeWidth="1.3" />
                  <path d="M22 13v-3h2v4.5" strokeWidth="1.2" />
                </svg>
              </div>
              <span className={`text-xs md:text-sm tracking-wider font-semibold ${
                isDark ? 'text-neutral-200' : 'text-neutral-800'
              }`}>
                Upgraded Lifestyle Amenities
              </span>
            </div>

            {/* Benefit 6: Community Revitalization */}
            <div className="flex flex-col items-center text-center space-y-3.5 group cursor-default">
              <div className="flex items-center justify-center text-[#E2863B] dark:text-[#C5A059] transition-transform duration-300 group-hover:scale-110">
                <svg className="w-11 h-11" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Center Person */}
                  <circle cx="18" cy="11" r="2.5" />
                  <path d="M14 20a4 4 0 0 1 8 0" />
                  {/* Left Person */}
                  <circle cx="12" cy="13" r="2" />
                  <path d="M9 20a3.5 3.5 0 0 1 5-2" />
                  {/* Right Person */}
                  <circle cx="24" cy="13" r="2" />
                  <path d="M22 18a3.5 3.5 0 0 1 5 2" />
                  {/* Radiating Dots */}
                  <circle cx="18" cy="5" r="0.8" fill="currentColor" stroke="none" />
                  <circle cx="14" cy="6" r="0.8" fill="currentColor" stroke="none" />
                  <circle cx="22" cy="6" r="0.8" fill="currentColor" stroke="none" />
                  {/* Cupping Hands */}
                  <path d="M6 19c0 5 4 10 10 12l2-3" strokeWidth="1.5" />
                  <path d="M8 20c1 4 4 7 8 8" strokeWidth="1.2" />
                  <path d="M30 19c0 5-4 10-10 12l-2-3" strokeWidth="1.5" />
                  <path d="M28 20c-1 4-4 7-8 8" strokeWidth="1.2" />
                </svg>
              </div>
              <span className={`text-xs md:text-sm tracking-wider font-semibold ${
                isDark ? 'text-neutral-200' : 'text-neutral-800'
              }`}>
                Community Revitalization
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY SOCIETIES CHOOSE REDEVELOPMENT */}

      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full pt-8 space-y-12">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className={`text-2xl md:text-4xl lg:text-[2.5rem] font-serif leading-tight tracking-wide uppercase ${
            isDark ? 'text-white' : 'text-neutral-950'
          }`}>
            Why Societies in Navi Mumbai Choose <br className="hidden md:block" />
            <span className="text-[#E2863B] dark:text-[#C5A059]">Redevelopment?</span>
          </h2>
          <p className={`text-sm md:text-base leading-relaxed font-light max-w-3xl mx-auto pt-2 ${
            isDark ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            Redevelopment today is driven by the need for safer structures, better planning, and an upgraded quality of life. For housing societies evaluating redevelopment projects across Navi Mumbai, the benefits extend far beyond just new construction.
          </p>
        </div>

        {/* Dynamic Asymmetric Grid of Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className={`p-8 border shadow-sm flex flex-col items-start space-y-5 transition-all duration-300 relative group hover:shadow-md ${
                  isDark 
                    ? 'bg-[#121212]/80 border-white/5 hover:border-[#C5A059]/40' 
                    : 'bg-[#f4efe6] border-neutral-300/40 hover:border-[#C5A059]'
                }`}
              >
                {/* Corner outline detail on hover */}
                <span className="absolute top-0 left-0 h-[2px] w-0 bg-[#C5A059] transition-all duration-300 ease-out group-hover:w-full" />
                <span className="absolute top-0 right-0 w-[2px] h-0 bg-[#C5A059] transition-all duration-300 ease-out group-hover:h-full group-hover:delay-150" />
                <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#C5A059] transition-all duration-300 ease-out group-hover:w-full group-hover:delay-300" />
                <span className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#C5A059] transition-all duration-300 ease-out group-hover:h-full group-hover:delay-450" />

                <div className="flex justify-between items-center w-full">
                  <div className="w-10 h-10 bg-white dark:bg-neutral-900 flex items-center justify-center text-[#C5A059] border border-neutral-200 dark:border-white/5 group-hover:bg-[#C5A059] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-[#C5A059] font-bold text-lg opacity-40 group-hover:opacity-100 transition-opacity">
                    {b.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className={`text-base font-serif font-medium tracking-wide ${
                    isDark ? 'text-white' : 'text-neutral-950'
                  }`}>
                    {b.title}
                  </h3>
                  <p className={`text-xs md:text-[13px] leading-relaxed font-light ${
                    isDark ? 'text-neutral-400' : 'text-neutral-700'
                  }`}>
                    {b.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. HOW REDEVELOPMENT WORKS (Timeline) */}
      <section className={`w-full py-20 px-6 md:px-12 lg:px-16 transition-colors duration-500 ${
        isDark ? 'bg-[#0C0C0C]' : 'bg-[#FAF9F5]'
      }`}>
        <div className="max-w-7xl mx-auto w-full space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold block">
              Step-by-step Process
            </span>
            <h2 className={`text-2xl md:text-4xl font-serif uppercase ${
              isDark ? 'text-white' : 'text-neutral-950'
            }`}>
              How does Navi Mumbai Redevelopment work?
            </h2>
          </div>

          {/* Interactive vertical stepper timeline layout */}
          <div className="relative pl-6 md:pl-10 max-w-4xl mx-auto">
            {WORKFLOW.map((w, idx) => {
              const StepIcon = w.icon;
              const isLast = idx === WORKFLOW.length - 1;
              return (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: Math.min(2, idx * 0.05) }}
                  className="relative group text-left pb-12 last:pb-0"
                >
                  {/* Vertical connecting line segment - stops exactly at node 10 */}
                  {!isLast && (
                    <div className="absolute -left-[19px] md:-left-[35px] top-8 bottom-0 w-[1px] bg-neutral-300 dark:bg-white/10 z-0 pointer-events-none" />
                  )}

                  {/* Glowing vertical bullet node point */}
                  <div className="absolute -left-[35px] md:-left-[51px] top-0 w-8 h-8 rounded-full bg-white dark:bg-neutral-950 border-2 border-neutral-300 dark:border-white/10 flex items-center justify-center text-[#C5A059] z-10 transition-all duration-300 group-hover:border-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white">
                    <span className="text-[10px] font-bold font-serif">{w.num}</span>
                  </div>

                  <div className={`p-6 border rounded-sm transition-all duration-300 ${
                    isDark 
                      ? 'bg-neutral-900/40 border-white/5 group-hover:border-white/10 group-hover:bg-neutral-900/60' 
                      : 'bg-white border-neutral-200 group-hover:border-[#c2a26c]/30 group-hover:bg-white/90 shadow-sm'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <StepIcon className="w-4 h-4 text-[#C5A059]" />
                      <h3 className={`text-sm md:text-base font-semibold uppercase tracking-wider ${
                        isDark ? 'text-white' : 'text-neutral-900'
                      }`}>
                        {w.title}
                      </h3>
                    </div>
                    <p className={`text-xs md:text-[13px] leading-relaxed font-light ${
                      isDark ? 'text-neutral-400' : 'text-neutral-700'
                    }`}>
                      {w.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. ENQUIRY & PROPOSAL REQUEST */}
      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full">
        <div className={`p-8 md:p-14 border shadow-xl transition-colors duration-500 ${
          isDark ? 'bg-[#121212] border-white/5' : 'bg-[#f4efe6] border-neutral-300/40'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Info / FAQ Left Column */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold block">
                Expert Consult
              </span>
              <h3 className={`font-serif text-2xl md:text-4xl font-light leading-tight ${
                isDark ? 'text-white' : 'text-neutral-950'
              }`}>
                Request a Consultation
              </h3>
              <p className={`text-xs md:text-sm leading-relaxed font-light ${
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                If your housing society is considering redevelopment, let us guide you. Our experts can perform a feasibility study and explain legal requirements and carpet area enhancements at no cost.
              </p>

              <div className="space-y-4 pt-4 border-t border-neutral-300/60 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 flex items-center justify-center text-[#C5A059]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400">Call Direct</p>
                    <a href={CONTACT.phoneHref} className={`text-sm font-bold hover:underline ${
                      isDark ? 'text-white' : 'text-neutral-950'
                    }`}>
                      +91 {CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 flex items-center justify-center text-[#C5A059]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400">Email Proposal</p>
                    <a href={`mailto:${CONTACT.email}`} className={`text-sm font-bold hover:underline ${
                      isDark ? 'text-white' : 'text-neutral-950'
                    }`}>
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 flex items-center justify-center text-[#C5A059]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400">Visit Corporate HQ</p>
                    <p className={`text-xs leading-tight font-light max-w-xs ${
                      isDark ? 'text-neutral-300' : 'text-neutral-700'
                    }`}>
                      {CONTACT.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="hidden lg:flex lg:col-span-1 justify-center items-center h-full self-stretch">
              <div className="w-[1px] bg-neutral-300/80 dark:bg-white/10 h-full py-10" />
            </div>

            {/* WhatsApp Integration Right Column */}
            <div className="lg:col-span-6 w-full text-left">
              <div className={`p-8 border flex flex-col justify-center text-center space-y-6 ${
                isDark ? 'bg-neutral-900/40 border-white/5 shadow-2xl' : 'bg-white border-neutral-200/80 shadow-md'
              }`}>
                <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mx-auto animate-pulse">
                  <WhatsAppIcon className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h4 className={`font-serif text-xl md:text-2xl font-medium tracking-wide ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}>
                    Discuss on WhatsApp
                  </h4>
                  <p className={`text-xs md:text-sm font-light leading-relaxed max-w-sm mx-auto ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    Connect directly with our redevelopment experts on WhatsApp for instant feasibility advice, FSI inquiries, and quick answers.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={`${CONTACT.whatsappHref}?text=${encodeURIComponent('Hello N-Square Developers! I would like to consult regarding the redevelopment of my society.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-neutral-950 hover:bg-neutral-900 text-white dark:bg-[#C5A059] dark:hover:bg-[#d5b36a] dark:text-neutral-950 px-8 py-3.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer rounded-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>Start Consultation</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-neutral-300/40 dark:border-white/5 text-[10px] text-neutral-400 uppercase tracking-widest">
                  Response time: under 15 minutes
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
