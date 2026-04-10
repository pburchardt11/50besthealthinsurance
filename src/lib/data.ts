import { Country, InsurancePlan } from "./types";
import { allCountries } from "./countries-all";
import { plansEurope } from "./plans-europe";
import { plansAsia } from "./plans-asia";
import { plansAmericas } from "./plans-americas";
import { plansMiddleEast } from "./plans-middle-east";
import { plansAfrica } from "./plans-africa";
import { plansOceania } from "./plans-oceania";

// Original 12-country plans (US, UK, DE, AE, SG, CA, AU, FR, JP, BR, ZA, IN)
import { originalPlans } from "./plans-original";
import { supplementalPlans1 } from "./plans-supplemental-1";
import { supplementalPlans2 } from "./plans-supplemental-2";
import { supplementalPlans3 } from "./plans-supplemental-3";
import { supplementalPlans4 } from "./plans-supplemental-4";

export const countries: Country[] = allCountries;

export const insurancePlans: InsurancePlan[] = [
  ...originalPlans,
  ...plansEurope,
  ...plansAsia,
  ...plansAmericas,
  ...plansMiddleEast,
  ...plansAfrica,
  ...plansOceania,
  ...supplementalPlans1,
  ...supplementalPlans2,
  ...supplementalPlans3,
  ...supplementalPlans4,
];

export function getCountries(): Country[] {
  return countries;
}

export function getCountryByCode(code: string): Country | undefined {
  return countries.find((c) => c.code === code);
}

export function getPlansByCountry(countryCode: string): InsurancePlan[] {
  return insurancePlans.filter((p) => p.countryCode === countryCode);
}

export function getPlanById(id: string): InsurancePlan | undefined {
  return insurancePlans.find((p) => p.id === id);
}

export function getCountriesByRegion(region: string): Country[] {
  return countries.filter((c) => c.region === region);
}
