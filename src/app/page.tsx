import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getCountries } from "@/lib/data";
import { REGIONS } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const countries = getCountries();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-blue-50 to-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 text-sm">
              Trusted by 100,000+ readers worldwide
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Find the <span className="text-blue-600">Best Health Insurance</span> in Your Country
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Expert-curated ratings and reviews of health insurance plans across{" "}
              {countries.length} countries. Compare plans side-by-side, read editorial
              reviews, and find the perfect coverage for you and your family.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/rankings" className={cn(buttonVariants({ size: "lg" }))}>
                Global Top 50 Rankings
              </Link>
              <a href="#countries" className={cn(buttonVariants({ size: "lg", variant: "outline" }))}>
                Browse by Country &#8595;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: `${countries.length}+`, label: "Countries Covered" },
              { value: "50+", label: "Insurance Plans" },
              { value: "10K+", label: "Expert Reviews" },
              { value: "Free", label: "Always Free to Use" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">How It Works</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Choose Your Country",
                description:
                  "Select your country to see all available health insurance plans ranked by our expert team.",
              },
              {
                step: "2",
                title: "Compare Plans",
                description:
                  "Use our side-by-side comparison tool to evaluate up to 3 plans on coverage, price, and ratings.",
              },
              {
                step: "3",
                title: "Get Covered",
                description:
                  "Click through to get a personalized quote from your chosen insurer and start your coverage.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries by Region */}
      <section id="countries" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Health Insurance by Country
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Select a country to view detailed rankings, reviews, and comparisons of available health insurance plans.
          </p>

          <div className="mt-12 space-y-12">
            {REGIONS.map((region) => {
              const regionCountries = countries.filter((c) => c.region === region);
              if (regionCountries.length === 0) return null;

              return (
                <div key={region}>
                  <h3 className="mb-4 text-lg font-semibold text-muted-foreground">{region}</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {regionCountries.map((country) => (
                      <Link key={country.code} href={`/${country.code}`}>
                        <Card className="transition-all hover:shadow-md hover:border-blue-200 cursor-pointer h-full">
                          <CardContent className="p-5">
                            <div className="flex items-center gap-3">
                              <span className="text-3xl">{country.flag}</span>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold truncate">{country.name}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {country.planCount} plans reviewed
                                </p>
                              </div>
                              <span className="text-muted-foreground">&#8594;</span>
                            </div>
                            <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                              {country.description}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                  <Separator className="mt-8" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to Find Your Perfect Health Insurance?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Our expert-curated rankings help millions find the right coverage.
            Start comparing plans today — it&apos;s completely free.
          </p>
          <a
            href="#countries"
            className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "mt-8")}
          >
            Get Started &#8594;
          </a>
        </div>
      </section>
    </>
  );
}
