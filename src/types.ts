export type ThemeMode = 'dark' | 'light';

export type NavTab = 'residences' | 'projects' | 'commercial' | 'legacy' | 'contact' | 'redevelopment';

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  code: string;
  location: string;
  image: string;
  propertyId: string;
}

export interface Amenity {
  name: string;
  category?: string;
}

export interface Property {
  id: string;
  code: string;
  title: string;
  type: 'Residential' | 'Commercial' | 'Penthouse' | 'Villa';
  subtitle: string;
  location: string;
  overview: string;
  areaRange: string;
  configurations: string;
  possession: string;
  pricing: string;
  maharera: string;
  image: string;
  gallery: string[];
  amenities: string[];
  specs: {
    label: string;
    value: string;
  }[];
  isHero?: boolean;
}

export interface ScheduleVisitForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  propertyId: string;
  notes?: string;
}

export interface RequestBrochureForm {
  name: string;
  email: string;
  phone: string;
  propertyId: string;
  receiveOnWhatsApp: boolean;
}
