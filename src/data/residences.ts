import { Property, HeroSlide } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    code: 'ESTATE 01',
    title: 'DESIGNED FOR DISCERNING LIVES',
    subtitle: 'THOUGHTFUL IN EVERY DETAIL',
    location: 'CBD Belapur, Navi Mumbai',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
    propertyId: 'aurum-villas'
  },
  {
    id: 'slide-2',
    code: 'ESTATE 02',
    title: 'AN ADDRESS THAT REFLECTS YOUR TASTE',
    subtitle: 'LIMITED EDITION 3 & 4 BED RESIDENCES',
    location: 'Kharghar, Navi Mumbai',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80',
    propertyId: 'royal-palms-estate'
  },
  {
    id: 'slide-3',
    code: 'ESTATE 03',
    title: 'A WELCOME THAT SETS THE TONE',
    subtitle: 'SUPERSIZED 2 BED RESIDENCES',
    location: 'Nerul, Navi Mumbai',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80',
    propertyId: 'platinum-sky-towers'
  },
  {
    id: 'slide-4',
    code: 'ESTATE 04',
    title: 'AN ADDRESS DEFINED BY DISTINCTION',
    subtitle: 'ULTRA LUXE 2, 3 & 4 BED RESIDENCES',
    location: 'Seawoods, Navi Mumbai',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80',
    propertyId: 'platinum-financial-hub'
  },
  {
    id: 'slide-5',
    code: 'ESTATE 05',
    title: 'ABOVE THE CITY, BEYOND COMPARE',
    subtitle: 'OPEN VISTAS, NATURALLY ELEVATED',
    location: 'Ulwe, Navi Mumbai',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80',
    propertyId: 'aurum-villas'
  },
  {
    id: 'slide-6',
    code: 'ESTATE 06',
    title: 'A SIGNATURE IN THE MAKING',
    subtitle: 'UNVEILING SOON',
    location: 'Palm Beach Road, Navi Mumbai',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2000&q=80',
    propertyId: 'platinum-sky-towers'
  }
];

export const PROPERTIES: Property[] = [
  {
    id: 'aurum-villas',
    code: 'ESTATE 01',
    title: 'The Aurum Villas',
    type: 'Villa',
    subtitle: 'Now Launching',
    location: 'Worli, South Mumbai',
    overview: 'A masterfully curated collection of 48 bespoke villas nestled in the heart of South Mumbai. Designed for those who seek tranquility without compromising on the vibrancy of urban life.',
    areaRange: '3,400 — 5,200',
    configurations: '4 & 5 BHK DUPLEX',
    possession: 'DECEMBER 2025',
    pricing: 'FROM ₹14.5 CR*',
    maharera: 'P51800029341',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80'
    ],
    amenities: [
      'Infinity Edge Lap Pool',
      'Private Elevator Access',
      'Automated Smart Home Suite',
      '24/7 Global Concierge Service'
    ],
    specs: [
      { label: 'Ceiling Height', value: '14.5 Ft Floor-to-Ceiling' },
      { label: 'Private Decks', value: 'Double Height Sun Decks' },
      { label: 'Parking Bays', value: '4 Covered EV Ready' },
      { label: 'Security', value: 'Biometric Access Control' }
    ],
    isHero: true
  },
  {
    id: 'platinum-sky-towers',
    code: 'ESTATE 02',
    title: 'Platinum Sky Towers',
    type: 'Penthouse',
    subtitle: 'Ultra Luxury High-Rise',
    location: 'Bandra West, Mumbai',
    overview: 'Panoramic Arabian Sea views framed by custom double-glazed curtain walls. Sky Residences crafted for high-net-worth connoisseurs of architectural prestige.',
    areaRange: '4,200 — 6,800',
    configurations: '5 BHK PENTHOUSE',
    possession: 'READY TO MOVE',
    pricing: 'FROM ₹28.0 CR*',
    maharera: 'P51800034892',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80'
    ],
    amenities: [
      'Private Sky Deck Pool',
      'Temperature Controlled Wine Cellar',
      'Private Helipad Access',
      'State-of-the-art Private Screening Room'
    ],
    specs: [
      { label: 'View', value: '270° Arabian Sea Panoramas' },
      { label: 'Elevators', value: 'High Speed Direct Private' },
      { label: 'Clubhouse', value: '30,000 Sq. Ft. Private Sanctuary' },
      { label: 'Furnishing', value: 'Custom Italian Marble Finish' }
    ]
  },
  {
    id: 'platinum-financial-hub',
    code: 'COMMERCIAL 01',
    title: 'Platinum Pinnacle Towers',
    type: 'Commercial',
    subtitle: 'Grade A Commercial Spaces',
    location: 'BKC, Mumbai',
    overview: 'Iconic commercial skyscraper offering LEED Platinum certified office floors, private boardrooms, and executive helipad capabilities in BKC central business district.',
    areaRange: '8,500 — 25,000',
    configurations: 'FULL FLOOR / DUPLEX',
    possession: 'MARCH 2026',
    pricing: 'UPON REQUEST',
    maharera: 'P51800041209',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80'
    ],
    amenities: [
      'LEED Platinum Green Building',
      'Biometric & RFID Turnstiles',
      '100% Power Backup & Fiber Optic',
      'Private Executive Dining & Lounge'
    ],
    specs: [
      { label: 'Efficiency', value: '82% Carpet Area Efficiency' },
      { label: 'HVAC', value: 'Chilled Water VFD Air Handling' },
      { label: 'Parking', value: 'Multi-Level Automated Sub-Basement' },
      { label: 'Security', value: '24/7 AI-monitored Perimeter' }
    ]
  },
  {
    id: 'royal-palms-estate',
    code: 'ESTATE 03',
    title: 'Royal Palms Sanctuary',
    type: 'Residential',
    subtitle: 'Bespoke Lakefront Mansions',
    location: 'Powai Lakeshore, Mumbai',
    overview: 'Expansive private lakeside estates incorporating lush botanical gardens, private dock privileges, and signature Mediterranean architecture.',
    areaRange: '5,000 — 8,500',
    configurations: '5 & 6 BHK ESTATE',
    possession: 'OCTOBER 2025',
    pricing: 'FROM ₹22.0 CR*',
    maharera: 'P51800055102',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80'
    ],
    amenities: [
      'Lakeside Private Boardwalk',
      'Private Organic Vineyard & Courtyard',
      'Hydrotherapy Wellness Spa',
      'Valet & Private Chauffeur Quarters'
    ],
    specs: [
      { label: 'Plot Size', value: 'Half Acre Private Grounds' },
      { label: 'Landscape', value: 'Bespoke Zen Botanical Gardens' },
      { label: 'Pool', value: 'Heated Infinity Lap Pool' },
      { label: 'Staffing', value: 'Independent Staff Quarter Annex' }
    ]
  }
];
