export type Vertical = 'surveys' | 'crypto' | 'forex' | 'sweepstakes' | 'casino';

export interface Offer {
  id: string;
  name: string;
  vertical: Vertical;
  countries: string[]; // ISO 2-letter codes, or 'ALL'
  status: 'active' | 'inactive';
  beginnerFriendly: boolean;
  tagline: string;
  bullets: string[];
  ctaText: string;
  placeholderLink: string;
  image?: string;
  badge: string;
  experienceFit: {
    beginner: number;
    intermediate: number;
    advanced: number;
    [key: string]: number;
  };
  riskFit: {
    noRisk: number;
    lowRisk: number;
    mediumRisk: number;
    highRisk: number;
    [key: string]: number;
  };
  timeFit: {
    low: number; // maps to 5-10 min
    medium: number; // maps to 30-60 min
    high: number; // maps to few hours
    serious: number; // maps to serious time
    [key: string]: number;
  };
  countryFit: Record<string, number>;
  internalPriority: number;
  historicalPerformance: number;
}
