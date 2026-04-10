import { MetadataRoute } from "next";
import { getCountries, getPlansByCountry } from "@/lib/data";

const BASE_URL = "https://www.50besthealthinsurance.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const countries = getCountries();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/rankings`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  const countryPages: MetadataRoute.Sitemap = countries.map((country) => ({
    url: `${BASE_URL}/${country.code}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const planPages: MetadataRoute.Sitemap = countries.flatMap((country) =>
    getPlansByCountry(country.code).map((plan) => ({
      url: `${BASE_URL}/${country.code}/${plan.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }))
  );

  return [...staticPages, ...countryPages, ...planPages];
}
