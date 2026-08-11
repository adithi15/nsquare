// ============================================================
// N-SQUARE DEVELOPERS — Real project & brand data
// Sourced from the official N-Square brochure (2026)
// ============================================================

export interface NSProject {
  id: string;
  name: string;
  location: string;
  floors: string;
  year: string;
  image: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  tag?: string;
}

export interface NSLocation {
  name: string;
  projects?: number;
}

export interface NSDirector {
  name: string;
  role: string;
  image: string;
  bio: string;
  quote?: string;
  heading?: string;
}

export interface NSStat {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

// ------------------------------------------------------------
// Milestones — page 8
// ------------------------------------------------------------
export const MILESTONES: NSStat[] = [
  { value: 23, suffix: '+', label: 'Years of Legacy' },
  { value: 32, suffix: '+', label: 'Landmarks Delivered' },
  { value: 8, suffix: '+', label: 'Ongoing Projects' },
  { value: 2.3, suffix: 'M', label: 'Sq. Ft. Delivered', decimals: 1 },
  { value: 2300, suffix: '+', label: 'Happy Families' },
  { value: 290000, suffix: '+', label: 'Sq. Mt. Under Development' },
];

// ------------------------------------------------------------
// Completed Projects — pages 11–18
// ------------------------------------------------------------
export const COMPLETED_PROJECTS: NSProject[] = [
  { id: 'exotica', name: 'Neelkanth Exotica', location: 'Dronagiri', floors: 'G+16', year: '2026', image: '/assets/projects/completed/exotica.jpg', status: 'completed' },
  { id: 'avenue', name: 'Neelkanth Avenue', location: 'Kharghar', floors: 'G+22', year: '2026', image: '/assets/projects/completed/avenue.jpg', status: 'completed' },
  { id: 'luxuria', name: 'Neelkanth Luxuria', location: 'Taloja', floors: 'G+26', year: '2024', image: '/assets/projects/completed/luxuria.jpg', status: 'completed', tag: 'Flagship Tower' },
  { id: 'majestic', name: 'Neelkanth Majestic', location: 'Ulwe', floors: 'G+14', year: '2023', image: '/assets/projects/completed/majestic.jpg', status: 'completed' },
  { id: 'bliss', name: 'Neelkanth Bliss', location: 'Roadpali', floors: 'G+7', year: '2023', image: '/assets/projects/completed/bliss.jpg', status: 'completed' },
  { id: 'green', name: 'Neelkanth Green', location: 'Kamothe', floors: 'G+7', year: '2022', image: '/assets/projects/completed/green.jpg', status: 'completed' },
  { id: 'goodluck-heights', name: 'Goodluck Heights', location: 'Taloja', floors: 'G+14', year: '2021', image: '/assets/projects/completed/goodluck-heights.jpg', status: 'completed' },
  { id: 'classic', name: 'Neelkanth Classic', location: 'Kharghar', floors: 'G+6', year: '2021', image: '/assets/projects/completed/classic.jpg', status: 'completed' },
  { id: 'prism-heights', name: 'Prism Heights', location: 'Taloja', floors: 'G+14', year: '2021', image: '/assets/projects/completed/prism-heights.jpg', status: 'completed' },
  { id: 'pride', name: 'Neelkanth Pride', location: 'Ulwe', floors: 'G+13', year: '2019', image: '/assets/projects/completed/pride.jpg', status: 'completed' },
  { id: 'greystone-heights', name: 'Greystone Heights', location: 'Kamothe', floors: 'G+13', year: '2019', image: '/assets/projects/completed/greystone-heights.jpg', status: 'completed' },
  { id: 'panchanand-heights', name: 'Panchanand Heights', location: 'Taloja', floors: 'G+12', year: '2018', image: '/assets/projects/completed/panchanand-heights.jpg', status: 'completed' },
  { id: 'tulsi-heights', name: 'Tulsi Heights', location: 'Kamothe', floors: 'G+13', year: '2012', image: '/assets/projects/completed/tulsi-heights.jpg', status: 'completed' },
];

// ------------------------------------------------------------
// Ongoing Projects — pages 19–33
// ------------------------------------------------------------
export const ONGOING_PROJECTS: NSProject[] = [
  { id: 'darshan', name: 'Neelkanth Darshan', location: 'Kharghar', floors: 'G+30', year: '2027', image: '/assets/projects/ongoing/darshan.jpg', status: 'ongoing', tag: 'Signature Tower' },
  { id: 'corner', name: 'Neelkanth Corner', location: 'Pushpak Nagar', floors: 'G+7', year: '2029', image: '/assets/projects/ongoing/corner.jpg', status: 'ongoing' },
  { id: 'shreeji', name: 'Neelkanth Shreeji', location: 'Pushpak Nagar', floors: 'G+14', year: '2027', image: '/assets/projects/ongoing/shreeji.jpg', status: 'ongoing' },
  { id: 'dham', name: 'Neelkanth Dham', location: 'Roadpali', floors: 'G+22', year: '2029', image: '/assets/projects/ongoing/dham.jpg', status: 'ongoing' },
  { id: 'rudra', name: 'Neelkanth Rudra', location: 'Ulwe', floors: 'G+7', year: '2027', image: '/assets/projects/ongoing/rudra.jpg', status: 'ongoing' },
  { id: 'complex', name: 'Neelkanth Complex', location: 'Old Panvel', floors: 'G+7', year: '2028', image: '/assets/projects/ongoing/complex.jpg', status: 'ongoing' },
  { id: 'shiv', name: 'Neelkanth Shiv', location: 'Kamothe', floors: 'G+14', year: '2029', image: '/assets/projects/ongoing/shiv.jpg', status: 'ongoing' },
  { id: 'laxmi', name: 'Neelkanth Laxmi', location: 'Panvel', floors: 'G+14', year: '2027', image: '/assets/projects/ongoing/laxmi.jpg', status: 'ongoing' },
  { id: 'patel-park', name: 'Patel Park', location: 'Ulwe', floors: 'G+7', year: '2027', image: '/assets/projects/ongoing/patel-park.jpg', status: 'ongoing' },
];

// ------------------------------------------------------------
// Upcoming Projects — pages 43, 44
// ------------------------------------------------------------
export const UPCOMING_PROJECTS: NSProject[] = [
  { id: 'unicorn', name: 'Neelkanth Unicorn', location: 'Rabale', floors: 'G+33', year: '2030', image: '/assets/projects/upcoming/unicorn.jpg', status: 'upcoming', tag: 'Commercial Icon' },
  { id: 's7-24', name: 'Neelkanth S7-24', location: 'Pushpak Nagar', floors: 'G+14', year: '2030', image: '/assets/projects/upcoming/s7-24.jpg', status: 'upcoming' },
  { id: 'space', name: 'Neelkanth Space', location: 'Ulwe', floors: 'G+14', year: '2032', image: '/assets/projects/upcoming/space.jpg', status: 'upcoming' },
];

// ------------------------------------------------------------
// Expanding Footprints — page 9 map locations
// ------------------------------------------------------------
export const FOOTPRINT_LOCATIONS: string[] = [
  'Rabale', 'Taloja', 'Kharghar', 'Roadpali', 'Kalamboli', 'Seawoods', 'Kamothe',
  'New Panvel', 'Ulwe', 'Pushpak Nagar', 'Panvel', 'Karanjade', 'Dronagiri', 'Old Panvel',
];

// ------------------------------------------------------------
// Core Values — page 7
// ------------------------------------------------------------
export const CORE_VALUES: { title: string; description: string }[] = [
  { title: 'People First', description: 'Every decision begins with the families and communities we serve.' },
  { title: 'Quality', description: 'Uncompromising standards in materials, craftsmanship and finish.' },
  { title: 'Integrity', description: 'Transparent dealings and promises delivered — every single time.' },
  { title: 'Teamwork', description: 'Architects, engineers and partners working as one force.' },
  { title: 'Innovation', description: 'Modern design thinking and construction technology in every project.' },
  { title: 'Customer Commitment', description: 'A relationship that continues long after the keys are handed over.' },
];

// ------------------------------------------------------------
// Directors — pages 4–5
// ------------------------------------------------------------
export const DIRECTORS: NSDirector[] = [
  {
    name: 'Mr. Anil Ravriya',
    role: 'Founder — N Square · Director — Neelkanth Group',
    image: '/assets/branding/director-anil.png',
    bio: 'As Director of NSQUARE, Anil Ravriya brings a clear vision rooted in operational excellence, innovation, and long-term value creation. His leadership combines disciplined execution with a forward-thinking approach, ensuring that every project meets the highest standards of quality and integrity. With a strong emphasis on quality execution, ethical practices, and continuous innovation, Mr. Ravriya continues to shape NSQUARE\'s growth while upholding the values, trust, and legacy that define the brand.',
    heading: 'Leadership That Builds Lasting Value',
    quote: "Success isn't just about delivering projects; it's about building enduring value for our clients, partners, and communities.",
  },
  {
    name: 'Mr. Jignesh Patel',
    role: 'Founder — N Square & Namastey Realty',
    image: '/assets/branding/director-jignesh.png',
    bio: 'As Director of Namastey, Jignesh Patel brings a strategic vision and hands-on approach to leadership, with a strong focus on quality, operational excellence, and long-term value creation. His practical, results-driven mindset combines disciplined execution with a commitment to building lasting relationships with clients, partners, and stakeholders. Under his leadership, Namastey continues to grow with confidence while staying rooted in integrity, reliability, and quality.',
    quote: 'True leadership is built on trust, consistency, and getting things done right.',
  },
];

// ------------------------------------------------------------
// Contact — page 46
// ------------------------------------------------------------
export const CONTACT = {
  phone: '885 885 8835',
  phoneHref: 'tel:+918858858835',
  whatsappHref: 'https://wa.me/918858858835',
  email: 'info@nsquaredevelopers.com',
  address: 'Office No. 601, Above Namastey Salon, The Pacific, Sector 13, Kharghar, Navi Mumbai, Maharashtra - 410210',
  tagline: 'The Epitome of Extravagance',
};

// ------------------------------------------------------------
// About — pages 2–3
// ------------------------------------------------------------
export const ABOUT = {
  heading: 'Two Legacies. One Vision.',
  body1: 'N-Square Developers brings together the trusted legacy of Neelkanth Group and Namastey Realty, uniting decades of experience, expertise, and a shared commitment to excellence.',
  body2: 'With a combined legacy spanning over 23 years, we have contributed to the evolving skyline of Navi Mumbai through thoughtfully designed landmarks that embody quality, transparency, and timeless architecture.',
  body3: 'From premium residences to distinctive commercial destinations, every N-Square development is envisioned with purpose and built to create lasting value. Our philosophy is simple — to create exceptional homes and spaces that inspire pride today and endure for generations.',
  body4: 'Built on Trust. Defined by Excellence. Designed for Generations.',
  visionImpact: [
    'Creating landmark destinations that elevate everyday living',
    'Delivering on time, every time — with uncompromised quality',
    'Building lasting relationships with 2300+ happy families',
  ],
  visionPerspective: 'Like a diamond formed under pressure, every N-Square project is refined through discipline, precision and patience — emerging as a rare landmark that holds its value and brilliance for decades.',
};
