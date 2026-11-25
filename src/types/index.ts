export type Language = 'ar' | 'en';

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'projects'
  | 'gallery'
  | 'quality'
  | 'contact';

export type DisciplineKey = 'fire' | 'hvac' | 'plumbing' | 'electrical' | 'infrastructure';

export type ProjectStatus = 'completed' | 'in-progress';

export type ProjectCountry = 'egypt' | 'ksa';

export interface BilingualText {
  ar: string;
  en: string;
}

export interface Project {
  id: string;
  number: string;
  name: BilingualText;
  country: ProjectCountry;
  countryLabel: BilingualText;
  location: BilingualText;
  client?: BilingualText;
  owner?: BilingualText;
  consultant?: BilingualText;
  mainContractor?: BilingualText;
  role?: BilingualText;
  status: ProjectStatus;
  sector: BilingualText;
  disciplines: Record<DisciplineKey, boolean>;
  scope: {
    ar: string[];
    en: string[];
  };
  coverImage: string;
  images: string[];
  highlightMetric?: BilingualText;
}

export interface OtherProject {
  number: string;
  name: BilingualText;
  subtitle?: BilingualText;
  sector: BilingualText;
  status: ProjectStatus;
}

export type GalleryCategory =
  | 'all'
  | 'fire'
  | 'hvac'
  | 'electrical'
  | 'plumbing'
  | 'landmarks';

export interface GalleryItem {
  id: string;
  image: string;
  category: Exclude<GalleryCategory, 'all'>;
  projectTitle: BilingualText;
  caption: BilingualText;
  location: BilingualText;
  aspect: 'wide' | 'square' | 'tall';
}

export interface ReelItem {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  category: BilingualText;
  duration: string;
  slides: {
    image: string;
    caption: BilingualText;
  }[];
  videoUrl?: string;
}

export interface CertificationItem {
  id: string;
  code: string;
  title: BilingualText;
  authority: BilingualText;
  summary: BilingualText;
  scopePoints: {
    ar: string[];
    en: string[];
  };
}

export interface RfpFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: ProjectCountry;
  projectType: string;
  disciplines: DisciplineKey[];
  message: string;
}
