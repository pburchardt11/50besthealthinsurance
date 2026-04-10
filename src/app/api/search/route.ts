import { NextRequest, NextResponse } from "next/server";
import { getCountries, insurancePlans } from "@/lib/data";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.toLowerCase() || "";
  if (q.length < 2) return NextResponse.json([]);

  const results: { type: string; label: string; sublabel: string; href: string }[] = [];

  // Search countries
  for (const c of getCountries()) {
    if (c.name.toLowerCase().includes(q) || c.code.includes(q)) {
      results.push({
        type: "country",
        label: `${c.flag} ${c.name}`,
        sublabel: `${c.planCount} plans \u00B7 ${c.region}`,
        href: `/${c.code}`,
      });
    }
    if (results.length >= 5) break;
  }

  // Search plans (limit scan for performance)
  let planMatches = 0;
  for (const p of insurancePlans) {
    if (planMatches >= 5) break;
    if (p.name.toLowerCase().includes(q) || p.provider.toLowerCase().includes(q)) {
      results.push({
        type: "plan",
        label: p.name,
        sublabel: `${p.provider} \u00B7 ${p.country}`,
        href: `/${p.countryCode}/${p.id}`,
      });
      planMatches++;
    }
  }

  return NextResponse.json(results.slice(0, 10));
}
