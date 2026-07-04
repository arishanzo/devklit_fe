
// app/types/index.ts
export interface dataArtikel {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: string;
  categories: string[];
}

export type Job = {
  id: string | number;
  type: string;
  title: string;
  location: string;
  experience: string;
};


export interface FeatureOption {
  id: string;
  name: string;
  description: string;
  basePrice: number; // in IDR
  addedDays: number;
  category: 'platform' | 'feature' | 'tier';
  allowedPlatforms?: string[]; // If undefined, available for all platforms
}
