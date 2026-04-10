import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { RatingStars } from "@/components/rating-stars";
import {
  getCountryByCode,
  getPlanById,
  getPlansByCountry,
  getCountries,
} from "@/lib/data";

// Plan pages are rendered on-demand and cached (too many to pre-generate)
export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; plan: string }>;
}): Promise<Metadata> {
  const { plan: planId } = await params;
  const plan = getPlanById(planId);
  if (!plan) return {};

  return {
    title: `${plan.name} Review — ${plan.country} Health Insurance`,
    description: `Detailed review of ${plan.name} by ${plan.provider}. Rating: ${plan.rating}/5. ${plan.highlights.join(". ")}.`,
  };
}

const coverageLabels: Record<string, string> = {
  hospitalization: "Hospitalization",
  outpatient: "Outpatient Care",
  dental: "Dental",
  vision: "Vision",
  mental: "Mental Health",
  maternity: "Maternity",
  prescription: "Prescription Drugs",
  emergency: "Emergency Care",
  international: "International Coverage",
  telehealth: "Telehealth",
};

export default async function PlanDetailPage({
  params,
}: {
  params: Promise<{ country: string; plan: string }>;
}) {
  const { country: countryCode, plan: planId } = await params;
  const country = getCountryByCode(countryCode);
  const plan = getPlanById(planId);

  if (!country || !plan || plan.countryCode !== countryCode) notFound();

  const otherPlans = getPlansByCountry(countryCode).filter((p) => p.id !== plan.id);

  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className="border-b bg-gradient-to-b from-blue-50 to-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${countryCode}`} className="hover:text-foreground transition-colors">
              {country.name}
            </Link>
            <span>/</span>
            <span className="truncate">{plan.name}</span>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                {plan.badges.map((badge) => (
                  <Badge key={badge} variant="secondary">{badge}</Badge>
                ))}
              </div>
              <h1 className="text-3xl font-bold sm:text-4xl">{plan.name}</h1>
              <p className="mt-1 text-lg text-muted-foreground">by {plan.provider}</p>

              <div className="mt-4 flex items-center gap-4">
                <RatingStars rating={plan.rating} size="lg" />
                <span className="text-2xl font-bold">{plan.rating}</span>
                <span className="text-muted-foreground">
                  ({plan.reviewCount.toLocaleString()} reviews)
                </span>
              </div>

              <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
                {plan.description}
              </p>
            </div>

            <Card className="w-full lg:w-80 shrink-0">
              <CardContent className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Premium</p>
                  <p className="text-2xl font-bold">{plan.monthlyPremium}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Deductible</p>
                  <p className="text-lg font-semibold">{plan.deductible}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Coverage Type</p>
                  <Badge variant="outline" className="mt-1 capitalize">{plan.coverageType}</Badge>
                </div>
                <Separator />
                <a
                  href={plan.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={cn(buttonVariants({ size: "lg" }), "w-full")}
                >
                  Get a Free Quote &#8594;
                </a>
                <p className="text-xs text-center text-muted-foreground">
                  No obligation. Compare personalized rates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {/* Coverage Details */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold">Coverage Details</h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {Object.entries(plan.coverageDetails).map(([key, value]) => (
                    <div
                      key={key}
                      className={`flex items-center gap-3 rounded-lg border p-3 ${
                        value ? "border-green-200 bg-green-50" : "border-zinc-200 bg-zinc-50"
                      }`}
                    >
                      <span className={value ? "text-green-600" : "text-zinc-400"}>
                        {value ? "\u2713" : "\u2717"}
                      </span>
                      <span className={`text-sm font-medium ${value ? "" : "text-muted-foreground"}`}>
                        {coverageLabels[key] || key}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <h2 className="text-lg font-bold text-green-700">Pros</h2>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 text-green-600">&#10003;</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h2 className="text-lg font-bold text-red-700">Cons</h2>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 text-red-500">&#10007;</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Editorial */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold">Editorial Review</h2>
              </CardHeader>
              <CardContent>
                <blockquote className="border-l-4 border-blue-500 pl-4 text-muted-foreground italic leading-relaxed">
                  &ldquo;{plan.editorialExcerpt}&rdquo;
                </blockquote>
                <p className="mt-3 text-sm font-medium">
                  &mdash; {plan.editorialSource}
                </p>
              </CardContent>
            </Card>

            {/* Key Highlights */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold">Key Highlights</h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs text-blue-700 font-bold">
                        &#10003;
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="font-semibold">Quick Summary</h3>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Provider</span>
                  <span className="font-medium">{plan.provider}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Country</span>
                  <span className="font-medium">{plan.country}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rating</span>
                  <span className="font-medium">{plan.rating}/5</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reviews</span>
                  <span className="font-medium">{plan.reviewCount.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type</span>
                  <Badge variant="outline" className="capitalize">{plan.coverageType}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Other plans */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold">
                  Other Plans in {country.name}
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {otherPlans.slice(0, 5).map((other) => (
                  <Link
                    key={other.id}
                    href={`/${countryCode}/${other.id}`}
                    className="flex items-center justify-between gap-2 rounded-lg border p-3 transition-colors hover:bg-muted/50"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{other.name}</p>
                      <p className="text-xs text-muted-foreground">{other.provider}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-semibold">{other.rating}</p>
                      <RatingStars rating={other.rating} size="sm" />
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-blue-600 text-white border-blue-600">
              <CardContent className="p-6 text-center space-y-3">
                <h3 className="font-bold text-lg">Ready to get covered?</h3>
                <p className="text-sm text-blue-100">
                  Get a personalized quote from {plan.provider} today.
                </p>
                <a
                  href={plan.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
                >
                  Get Free Quote &#8594;
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
