import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCountryByCode, getPlansByCountry, getCountries } from "@/lib/data";
import { CountryPageClient } from "./country-page-client";

export async function generateStaticParams() {
  return getCountries().map((c) => ({ country: c.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country: code } = await params;
  const country = getCountryByCode(code);
  if (!country) return {};

  return {
    title: `Best Health Insurance in ${country.name} (${new Date().getFullYear()}) — Ranked & Compared`,
    description: `Compare the top ${country.planCount} health insurance plans in ${country.name}. Expert ratings, side-by-side comparison, and detailed reviews.`,
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: code } = await params;
  const country = getCountryByCode(code);
  if (!country) notFound();

  const plans = getPlansByCountry(code);

  return <CountryPageClient country={country} plans={plans} />;
}
