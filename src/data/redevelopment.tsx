import React from 'react';
import {
  ShieldCheck,
  Maximize2,
  Sparkles,
  TrendingUp,
  Users2,
  Search,
  Users,
  Scale,
  PenTool,
  Building2,
  FileCheck,
  ClipboardCheck,
  Network,
  Key,
  Wrench
} from 'lucide-react';

export const BENEFITS_CAROUSEL = [
  {
    id: '1',
    imageSrc: '/assets/icons/benefits/larger_better_homes.png',
    bgImage: '/assets/branding/why_choose_lifestyle.jpg',
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
    bgImage: '/assets/branding/why_choose_safety.jpg',
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
    bgImage: '/assets/branding/why_choose_parking.jpg',
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
    bgImage: '/assets/branding/why_choose_amenities.jpg',
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
    bgImage: '/assets/branding/why_choose_property_value.jpg',
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
    bgImage: '/assets/branding/why_choose_fire_safety.jpg',
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
    bgImage: '/assets/branding/why_choose_security.jpg',
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
    bgImage: '/assets/branding/why_choose_family.jpg',
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
    bgImage: '/assets/branding/why_choose_repairs.jpg',
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

export const BENEFITS = [
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

export const WORKFLOW = [
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

export const REDEVELOPMENT_PROCESS = [
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
        RCC Structure & <br /> Superstructure Work
      </>
    ),
    description: 'The developer commences foundation excavation, plinth casting, and vertical RCC columns under regular testing. PMC engineers verify concrete strength and reinforcement steel grades at each slab casting stage.'
  },
  {
    num: '10',
    title: (
      <>
        Finishing, MEP & <br /> Utility Installations
      </>
    ),
    description: 'Plumbing, electrical conduits, plastering, internal tiling, and exterior painting progress simultaneously. High-speed elevators, fire-fighting systems, and solar panels are installed to meet sustainable green building norms.'
  },
  {
    num: '11',
    title: (
      <>
        Occupancy Certificate <br /> (OC) Procurement
      </>
    ),
    description: 'Upon completion, statutory departments conduct final inspections for water connection, drainage systems, and lift safety. The local authority (NMMC/CIDCO) officially issues the final Occupancy Certificate (OC).'
  },
  {
    num: '12',
    title: (
      <>
        Possession & <br /> Handover of Keys
      </>
    ),
    description: 'The society coordinates individual possession letters and flat registration deeds. Members perform a walk-through quality inspection of their apartments and formally receive keys to their new properties.'
  },
  {
    num: '13',
    title: (
      <>
        Defect Liability Period <br /> (DLP) Monitoring
      </>
    ),
    description: 'Under MahaRERA provisions, the developer maintains a 5-year defect liability period. Any structural defects, water leakages, or execution errors reported by residents are rectified by the developer at zero cost.'
  },
  {
    num: '14',
    title: (
      <>
        Society Handover & <br /> Conveyance Update
      </>
    ),
    description: 'The developer hands over all utility accounts, manuals, and municipal drawings. The land conveyance deed is formally updated in government records to reflect the new build structure\'s ownership.'
  }
];

export const FAQ_DATA = [
  {
    question: 'Are buyers protected, and if so, how?',
    answer: 'Yes, buyers are fully protected under MahaRERA guidelines. The developer is legally bound to deposit 70% of project receivables in a dedicated escrow account used only for construction and land costs, adhere to strict completion deadlines, provide 5 years of structural defect liability, and update progress reports quarterly on the MahaRERA portal.'
  },
  {
    question: 'What are the stages of redevelopment?',
    answer: 'The redevelopment process comprises major key stages: structural audit of the existing building, appointing a Project Management Consultant (PMC), preparing a feasibility report, floating tenders to select a developer, executing the Development Agreement (DA), securing CIDCO NOC and planning approvals, vacating the premises (with transit rent support), building construction, obtaining the Occupancy Certificate (OC), and finally handing over keys to new residences.'
  },
  {
    question: 'What is transit rent in redevelopment?',
    answer: 'Transit rent is the monthly financial allowance paid by the developer to existing society members to cover their rental costs during the construction phase. It is calculated based on current market rental rates for equivalent flats in the same locality, begins when members vacate their premises, and continues until they receive the Occupancy Certificate (OC) and possession of their new homes.'
  },
  {
    question: 'Can minor repairs be considered redevelopment?',
    answer: 'No, minor or major structural repairs simply extend the current building\'s lifespan temporarily. Redevelopment involves the complete demolition of the existing structure and construction of an entirely new building from foundation up, which incorporates enhanced carpet area, modern earthquake-resistant RCC structures, advanced amenities, covered car parking, and modern fire safety infrastructure.'
  },
  {
    question: 'Who pays for redevelopment project expenses?',
    answer: 'The developer covers all expenses associated with the redevelopment project, including municipal planning fees, CIDCO premiums, structural audits, architectural designs, PMC consultancy charges, construction material/labor costs, alternative transit rent for residents, shifting allowances, and the final society corpus funds.'
  }
];
