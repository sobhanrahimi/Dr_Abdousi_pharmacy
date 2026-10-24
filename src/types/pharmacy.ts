export type StockStatus = 'in_stock' | 'low_stock' | 'out_of_stock' | 'prescription_required';

export interface Product {
  id: string;
  slug: string;
  name: string;
  englishName?: string;
  categoryId: string;
  categoryName: string;
  price?: number;
  formattedPrice?: string;
  isSamplePrice?: boolean;
  status: StockStatus;
  isPrescriptionRequired: boolean;
  rating?: number;
  reviewsCount?: number;
  image: string;
  summary: string;
  description: string;
  usageInstructions?: string;
  packagingInfo?: string;
  warnings?: string[];
  brand?: string;
  countryOfOrigin?: string;
  isFeatured?: boolean;
  isMockData: boolean;
  tags?: string[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  iconName: string;
  productCount: number;
}

export interface PharmacyService {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  badgeText?: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface PharmacyInfo {
  name: string;
  doctorName: string;
  tagline: string;
  description: string;
  phone: string;
  consultationPhone: string;
  address: string;
  city: string;
  workingHours: {
    weekdays: string;
    thursday: string;
    friday: string;
  };
  licenseNumber: string;
  licenseIssuer: string;
  googleMapUrl?: string;
  socials: {
    instagram?: string;
    telegram?: string;
    whatsapp?: string;
  };
}
