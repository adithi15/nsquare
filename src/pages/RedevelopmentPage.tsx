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
  MessageCircle
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
    <div className={`w-full flex flex-col space-y-16 pb-24 transition-colors duration-500 ${
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

      {/* 2. WHY SOCIETIES CHOOSE REDEVELOPMENT */}
      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full pt-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold block">
            Why societies in Navi Mumbai choose
          </span>
          <h2 className={`text-2xl md:text-4xl font-serif leading-snug tracking-wide uppercase ${
            isDark ? 'text-white' : 'text-neutral-950'
          }`}>
            REDEVELOPMENT?
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto my-3" />
          <p className={`text-xs md:text-sm leading-relaxed font-light ${
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
            <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mt-3" />
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
