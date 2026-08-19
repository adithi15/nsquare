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
  HeartHandshake,
  Flame,
  Video,
  ChevronLeft,
  ChevronRight
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

const BENEFITS_CAROUSEL = [
  {
    id: '1',
    imageSrc: '/assets/icons/benefits/larger_better_homes.png',
    bgImage: '/assets/branding/why_choose_nsquare_bg.jpg',
    title: 'Larger & Better Homes',
    description: (
      <>
        Members can receive additional <br className="hidden sm:block" />
        carpet area without purchasing a <br className="hidden sm:block" />
        new flat.
      </>
    )
  },
  {
    id: '2',
    imageSrc: '/assets/icons/benefits/improved_safety.png',
    bgImage: '/assets/branding/why_choose_nsquare_bg.jpg',
    title: 'Improved Safety',
    description: (
      <>
        New construction provides better <br className="hidden sm:block" />
        structural strength and modern <br className="hidden sm:block" />
        safety standards.
      </>
    )
  },
  {
    id: '3',
    imageSrc: '/assets/icons/benefits/better_parking_facilities.png',
    bgImage: '/assets/branding/why_choose_nsquare_bg.jpg',
    title: 'Better Parking Facilities',
    description: (
      <>
        Redevelopment can provide <br className="hidden sm:block" />
        organized, covered, mechanized, <br className="hidden sm:block" />
        or additional parking.
      </>
    )
  },
  {
    id: '4',
    imageSrc: '/assets/icons/benefits/modern_amenities.png',
    bgImage: '/assets/branding/why_choose_nsquare_bg.jpg',
    title: 'Modern Amenities',
    description: (
      <>
        Members can get facilities such as <br className="hidden sm:block" />
        modern lifts, security, landscaped <br className="hidden sm:block" />
        areas, gyms, play areas, etc.
      </>
    )
  },
  {
    id: '5',
    imageSrc: '/assets/icons/benefits/increase_property_value.png',
    bgImage: '/assets/branding/why_choose_nsquare_bg.jpg',
    title: 'Increase in Property Value',
    description: (
      <>
        A new building with better <br className="hidden sm:block" />
        amenities and infrastructure can <br className="hidden sm:block" />
        improve the property's value.
      </>
    )
  },
  {
    id: '6',
    imageSrc: '/assets/icons/benefits/improved_safety.png', 
    bgImage: '/assets/branding/why_choose_nsquare_bg.jpg',
    title: 'Improved Fire Safety',
    description: (
      <>
        Modern fire-fighting and <br className="hidden sm:block" />
        emergency systems can be <br className="hidden sm:block" />
        incorporated as per regulations.
      </>
    )
  },
  {
    id: '7',
    imageSrc: '/assets/icons/benefits/enhanced_security.png',
    bgImage: '/assets/branding/why_choose_nsquare_bg.jpg',
    title: 'Enhanced Security',
    description: (
      <>
        CCTV, access control, intercom, <br className="hidden sm:block" />
        security cabins, and other modern <br className="hidden sm:block" />
        security can be incorporated.
      </>
    )
  },
  {
    id: '8',
    imageSrc: '/assets/icons/benefits/better_lifestyle_families.png',
    bgImage: '/assets/branding/why_choose_nsquare_bg.jpg',
    title: 'Better Lifestyle for Families',
    description: (
      <>
        Modern homes and amenities can <br className="hidden sm:block" />
        provide a safer, more comfortable <br className="hidden sm:block" />
        and convenient living environment.
      </>
    )
  },
  {
    id: '9',
    imageSrc: '/assets/icons/benefits/low_maintenance_repairs.png',
    bgImage: '/assets/branding/why_choose_nsquare_bg.jpg',
    title: 'Low Maintenance & Repairs',
    description: (
      <>
        Members can move beyond <br className="hidden sm:block" />
        frequent repairs, leakages, and <br className="hidden sm:block" />
        structural issues of ageing building.
      </>
    )
  }
];

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

const REDEVELOPMENT_PROCESS = [
  {
    num: '01',
    title: (
      <>
        Pre-Feasibility Check & <br /> Land Document Audit
      </>
    ),
    description: 'The Managing Committee audits essential property documents, reconciling CIDCO lease deeds with NMMC property tax records to verify clear legal ownership, unencumbered land title, and zero outstanding municipal dues before initiating redevelopment.'
  },
  {
    num: '02',
    title: (
      <>
        Structural Audit & <br /> Dilapidation Certification
      </>
    ),
    description: 'An NMMC-empanelled structural engineer conducts non-destructive testing to assess building stability, issuing an official C1 dilapidation report to establish formal municipal eligibility for structural reconstruction under local safety norms.'
  },
  {
    num: '03',
    title: (
      <>
        Section 79A Requisition & <br /> Initial SGM
      </>
    ),
    description: 'At least one-fourth of society members formally request a Special General Body Meeting (SGM) under Section 79A, issuing a 14-day notice to pass an in-principle redevelopment resolution for Deputy Registrar submission.'
  },
  {
    num: '04',
    title: (
      <>
        PMC Appointment & <br /> Feasibility Guidelines
      </>
    ),
    description: 'The society invites competitive bids to appoint an experienced Project Management Consultant (PMC) or Architect. The PMC guides the committee, prepares preliminary project reports, and defines guidelines for structural parameters.'
  },
  {
    num: '05',
    title: (
      <>
        Preparation of Feasibility Report & <br /> Floating Tender
      </>
    ),
    description: 'The PMC prepares a detailed feasibility report outlining potential FSI, extra carpet area, alternative rent, and corpus fund. Upon member approval, tenders are floated to receive bids from qualified developers.'
  },
  {
    num: '06',
    title: (
      <>
        Developer Selection & <br /> SGM Voting
      </>
    ),
    description: 'Bids from developers are opened, evaluated, and presented by the PMC. A second SGM is conducted in the presence of a government representative where members vote to select the developer and submit consents.'
  },
  {
    num: '07',
    title: (
      <>
        Development Agreement & <br /> MahaRERA Registration
      </>
    ),
    description: 'A formal Development Agreement (DA) is executed between the society and the developer. The developer obtains CIDCO NOC, plans approval from local municipal bodies (NMMC/PMC), and registers the project under MahaRERA.'
  },
  {
    num: '08',
    title: (
      <>
        Vacating Premises & <br /> Commencement Certificate
      </>
    ),
    description: 'Once all initial permissions and NOCs are obtained, members sign individual agreements, receive alternative rent allowances or accommodation details, vacate their flats, and construction commences after receiving the CC.'
  },
  {
    num: '09',
    title: (
      <>
        Construction Phase & <br /> Handover of Keys
      </>
    ),
    description: 'The developer constructs the building under strict PMC quality monitoring. Upon building completion, the Occupancy Certificate (OC) is secured, and members receive keys to their new, safe, and modern homes.'
  }
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

  // State & Hook for benefits carousel cards-per-page
  const [benefitsCardsPerPage, setBenefitsCardsPerPage] = useState(3);
  const [showAllProcess, setShowAllProcess] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setBenefitsCardsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setBenefitsCardsPerPage(2);
      } else {
        setBenefitsCardsPerPage(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalBenefits = BENEFITS_CAROUSEL.length;
  const extendedBenefits = [...BENEFITS_CAROUSEL, ...BENEFITS_CAROUSEL, ...BENEFITS_CAROUSEL];
  const [benefitsIndex, setBenefitsIndex] = useState(totalBenefits);
  const [isBenefitsTransitioning, setIsBenefitsTransitioning] = useState(true);

  const handleBenefitsNext = () => {
    if (!isBenefitsTransitioning) return;
    setBenefitsIndex((prev) => prev + 1);
  };

  const handleBenefitsPrev = () => {
    if (!isBenefitsTransitioning) return;
    setBenefitsIndex((prev) => prev - 1);
  };

  const handleBenefitsAnimationComplete = () => {
    if (benefitsIndex >= 2 * totalBenefits) {
      setIsBenefitsTransitioning(false);
      setBenefitsIndex(benefitsIndex - totalBenefits);
    } else if (benefitsIndex < totalBenefits) {
      setIsBenefitsTransitioning(false);
      setBenefitsIndex(benefitsIndex + totalBenefits);
    }
  };

  React.useEffect(() => {
    if (!isBenefitsTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsBenefitsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isBenefitsTransitioning]);

  // Autoplay benefits carousel every 5 seconds
  React.useEffect(() => {
    const autoPlayTimer = window.setInterval(() => {
      setBenefitsIndex((prev) => prev + 1);
    }, 5000);
    return () => window.clearInterval(autoPlayTimer);
  }, []);

  // State & Hook for Why Choose N Square carousel cards-per-page
  const [whyChooseCardsPerPage, setWhyChooseCardsPerPage] = useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setWhyChooseCardsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setWhyChooseCardsPerPage(2);
      } else {
        setWhyChooseCardsPerPage(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalWhyChoose = BENEFITS_CAROUSEL.length;
  const extendedWhyChoose = [...BENEFITS_CAROUSEL, ...BENEFITS_CAROUSEL, ...BENEFITS_CAROUSEL];
  const [whyChooseIndex, setWhyChooseIndex] = useState(totalWhyChoose);
  const [isWhyChooseTransitioning, setIsWhyChooseTransitioning] = useState(true);

  const handleWhyChooseNext = () => {
    if (!isWhyChooseTransitioning) return;
    setWhyChooseIndex((prev) => prev + 1);
  };

  const handleWhyChoosePrev = () => {
    if (!isWhyChooseTransitioning) return;
    setWhyChooseIndex((prev) => prev - 1);
  };

  const handleWhyChooseAnimationComplete = () => {
    if (whyChooseIndex >= 2 * totalWhyChoose) {
      setIsWhyChooseTransitioning(false);
      setWhyChooseIndex(whyChooseIndex - totalWhyChoose);
    } else if (whyChooseIndex < totalWhyChoose) {
      setIsWhyChooseTransitioning(false);
      setWhyChooseIndex(whyChooseIndex + totalWhyChoose);
    }
  };

  React.useEffect(() => {
    if (!isWhyChooseTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsWhyChooseTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isWhyChooseTransitioning]);

  // Autoplay Why Choose carousel every 5 seconds
  React.useEffect(() => {
    const autoPlayTimer = window.setInterval(() => {
      setWhyChooseIndex((prev) => prev + 1);
    }, 5000);
    return () => window.clearInterval(autoPlayTimer);
  }, []);

  return (
    <div className={`w-full flex flex-col pb-24 transition-colors duration-500 ${isDark ? 'bg-[#0A0A0A] text-neutral-200' : 'bg-[#f8f6f0] text-neutral-800'
      } font-sans overflow-hidden`}>

      {/* 1. HERO HEADER */}
      <section className="relative w-full h-[75vh] min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/branding/city-aerial.jpg"
            alt="Navi Mumbai Skyline"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
        </div>
        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center justify-center text-center">
          <img
            src="/assets/branding/think_redevelopment_text.png"
            alt="Think Redevelopment, Think N Square"
            className="w-full max-w-[600px] h-auto object-contain select-none"
          />
        </div>
      </section>

      {/* 2. INTRO & WHAT IS REDEVELOPMENT */}
      <section className={`relative w-full py-16 md:py-24 overflow-hidden transition-colors duration-500 !mt-0 ${isDark ? 'bg-neutral-900/30 border-y border-white/5' : 'bg-[#f3e4cf] border-y border-neutral-300/20'
        }`}>


        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: What is Redevelopment */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
            <h2 className="text-6xl md:text-[2.6rem] font-serif font-bold text-[#C5A059] leading-[1]  tracking-wide">
              What is <br /> Redevelopment
            </h2>
            <p className={`text-sm sm:text-base md:text-lg lg:text-[19px] leading-relaxed lg:leading-[1.3] font-light ${isDark ? 'text-neutral-400' : 'text-neutral-700'
              }`}>
              Redevelopment offers an effective solution <br className="hidden sm:block" />
              for housing societies, where existing <br className="hidden sm:block" />
              buildings have become old, unsafe, <br className="hidden sm:block" />
              uninhabitable, or lack modern facilities. It <br className="hidden sm:block" />
              involves replacing ageing structures with <br className="hidden sm:block" />
              thoughtfully planned, contemporary <br className="hidden sm:block" />
              buildings designed for improved functionality <br className="hidden sm:block" />
              and comfort. Society redevelopment <br className="hidden sm:block" />
              provides residents with enhanced living <br className="hidden sm:block" />
              spaces, modern amenities, better <br className="hidden sm:block" />
              infrastructure, and an overall improved <br className="hidden sm:block" />
              quality of life.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <div className="relative w-full aspect-[4/3] max-w-[650px] bg-white dark:bg-neutral-800 shadow-xl overflow-hidden border border-neutral-300/10 dark:border-white/5">
              <img
                src="/assets/branding/city-aerial.jpg"
                alt="Navi Mumbai Skyline"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. BENEFITS OF REDEVELOPMENT BOX (9 PILLARS SLIDING CAROUSEL) */}
      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full mt-20">
        <div className="w-full space-y-12">
          
          {/* Header Block: Centered Title */}
          <div className="pb-6 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#C5A059] tracking-wide">
                Benefits of Redevelopment
              </h2>
              <p className={`text-xs md:text-sm lg:text-[15px] font-sans font-light leading-relaxed max-w-none whitespace-normal sm:whitespace-nowrap text-center ${
                isDark ? 'text-neutral-400' : 'text-neutral-700'
              }`}>
                Partnering with N Square brings housing societies a host of benefits, opportunities, and value-driven solutions.
              </p>
            </div>
          </div>

          {/* Sliding Carousel Viewport */}
          <div className="overflow-hidden w-full relative px-1 pt-4 pb-4">
            <motion.div
              className="flex animate-none"
              animate={{ x: `-${benefitsIndex * (100 / benefitsCardsPerPage)}%` }}
              transition={
                isBenefitsTransitioning
                  ? { type: 'tween', ease: 'easeInOut', duration: 1.5 }
                  : { duration: 0 }
              }
              onAnimationComplete={handleBenefitsAnimationComplete}
            >
              {extendedBenefits.map((item, idx) => {
                return (
                  <div
                    key={`benefit-${item.id}-${idx}`}
                    className={`${
                      benefitsCardsPerPage === 3 ? 'w-1/3' : benefitsCardsPerPage === 2 ? 'w-1/2' : 'w-full'
                    } flex-shrink-0 px-3 sm:px-4`}
                  >
                    <div className="relative pt-0 pb-4 px-3 sm:pt-0 sm:pb-6 sm:px-4 flex flex-col items-center justify-start text-center">
                      
                      {/* Icon */}
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="w-[90px] h-[90px] object-contain shrink-0 mb-4"
                      />

                      {/* Title */}
                      <h3 className="font-sans font-bold text-sm sm:text-base md:text-lg tracking-wider text-[#C5A059] uppercase mb-0">
                        {item.title}
                      </h3>

                      {/* Description with precise lines */}
                      <p className={`text-xs sm:text-[14.5px] md:text-[16px] lg:text-[17px] leading-relaxed font-light mt-0 ${
                        isDark ? 'text-neutral-400' : 'text-neutral-700'
                      }`}>
                        {item.description}
                      </p>

                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE N SQUARE (9 PILLARS SLIDING CAROUSEL) */}
      <section className={`relative w-full py-16 md:py-24 overflow-hidden transition-colors duration-500 mt-10 ${
        isDark ? 'bg-neutral-900/30 border-y border-white/5' : 'bg-[#f3e4cf] border-y border-neutral-300/20'
      }`}>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full space-y-12">
          
          {/* Header Block: Centered Title */}
          <div className="pb-4 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#C5A059] tracking-wide">
                Why Choose N Square
              </h2>
              <p className={`text-xs md:text-sm lg:text-[15px] font-sans font-light leading-relaxed max-w-none whitespace-normal sm:whitespace-nowrap text-center ${
                isDark ? 'text-neutral-400' : 'text-neutral-700'
              }`}>
                Partnering with N Square brings housing societies a host of benefits, opportunities, and value-driven solutions.
              </p>
            </div>
          </div>

          {/* Sliding Carousel Viewport */}
          <div className="relative w-full px-8 sm:px-16 pt-4 pb-4">
            
            {/* Right navigation arrow */}
            <button
              onClick={handleWhyChooseNext}
              className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border border-transparent text-[#C5A059] transition-all cursor-pointer active:scale-95 flex items-center justify-center"
              aria-label="Next why-choose"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <div className="overflow-hidden w-full">
              <motion.div
                className="flex animate-none"
                animate={{ x: `-${whyChooseIndex * (100 / whyChooseCardsPerPage)}%` }}
                transition={
                  isWhyChooseTransitioning
                    ? { type: 'tween', ease: 'easeInOut', duration: 1.5 }
                    : { duration: 0 }
                }
                onAnimationComplete={handleWhyChooseAnimationComplete}
              >
                {extendedWhyChoose.map((item, idx) => {
                  return (
                    <div
                      key={`why-choose-${item.id}-${idx}`}
                      className={`${
                        whyChooseCardsPerPage === 3 ? 'w-1/3' : whyChooseCardsPerPage === 2 ? 'w-1/2' : 'w-full'
                      } flex-shrink-0 px-3 sm:px-4`}
                    >
                      {/* Tall vertical rectangular card with image and hover text overlay */}
                      <div className="relative w-full aspect-[2/3] overflow-hidden rounded-none group shadow-lg cursor-pointer bg-neutral-900">
                        {/* Background Image */}
                        <img
                          src={item.bgImage}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Dark Overlay: Gradual by default, darker solid on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-all duration-500 group-hover:bg-black/80" />
                        
                        {/* Text content layout */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center">
                            {/* Title */}
                            <h3 className="font-sans font-bold text-sm sm:text-base md:text-lg tracking-wider text-white uppercase">
                              {item.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-xs sm:text-[13px] md:text-[14px] leading-relaxed font-light text-neutral-300 mt-4 max-w-[280px]">
                              {item.description}
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. REDEVELOPMENT PROCESS SECTION */}
      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full mt-20 pb-16">
        <div className="w-full space-y-12">
          
          {/* Header Block: Centered Title */}
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#C5A059] tracking-wide">
              Redevelopment Process
            </h2>
          </div>

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {REDEVELOPMENT_PROCESS.slice(0, showAllProcess ? 9 : 3).map((item) => (
              <div
                key={item.num}
                className="relative bg-[#F5EFE6] dark:bg-neutral-900/60 p-8 sm:p-10 flex flex-col justify-start items-start text-left min-h-[385px] overflow-hidden shadow-sm"
              >
                {/* Giant background number positioned at the top right */}
                <div className="absolute top-0 right-0 m-0 p-0 text-[8.5rem] md:text-[10rem] font-serif font-black text-white dark:text-neutral-800 leading-[0.75] select-none tracking-tighter opacity-80 pointer-events-none">
                  {item.num}
                </div>

                {/* Title */}
                <h3 className="relative z-10 font-serif font-bold text-base sm:text-lg text-[#C5A059] leading-snug pr-8 mt-16 sm:mt-24">
                  {item.title}
                </h3>

                {/* Divider Line */}
                <div className="relative z-10 w-20 h-[1.5px] bg-[#C5A059] mt-2 mb-2" />

                {/* Description */}
                <p className="relative z-10 font-sans font-light text-xs sm:text-[13px] md:text-[14px] leading-relaxed text-neutral-800 dark:text-neutral-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowAllProcess(!showAllProcess)}
              className="bg-[#C5A059] hover:bg-[#B08F4C] text-white font-sans text-xs font-bold uppercase tracking-wider px-8 py-3.5 transition-all duration-300 cursor-pointer flex items-center gap-2 active:scale-95 shadow-md"
            >
              {showAllProcess ? 'View Less' : 'View All'}
              {showAllProcess ? (
                <svg className="w-3.5 h-3.5 transform rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
