export interface InsurancePlan {
  id: string;
  name: string;
  provider: string;
  country: string;
  countryCode: string;
  logo: string;
  rating: number;
  reviewCount: number;
  monthlyPremium: string;
  deductible: string;
  coverageType: "basic" | "standard" | "premium" | "comprehensive";
  badges: string[];
  highlights: string[];
  pros: string[];
  cons: string[];
  affiliateUrl: string;
  description: string;
  coverageDetails: {
    hospitalization: boolean;
    outpatient: boolean;
    dental: boolean;
    vision: boolean;
    mental: boolean;
    maternity: boolean;
    prescription: boolean;
    emergency: boolean;
    international: boolean;
    telehealth: boolean;
  };
  editorialExcerpt: string;
  editorialSource: string;
}

export interface Country {
  code: string;
  name: string;
  flag: string;
  region: string;
  planCount: number;
  description: string;
  healthcareSystem: string;
}

export const REGIONS = [
  "North America",
  "Central America",
  "Caribbean",
  "Latin America",
  "Europe",
  "Middle East",
  "Africa",
  "Asia Pacific",
  "Oceania",
] as const;

export type Region = (typeof REGIONS)[number];
