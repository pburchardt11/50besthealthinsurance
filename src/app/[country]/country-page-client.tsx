"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InsuranceCard } from "@/components/insurance-card";
import { ComparisonTable } from "@/components/comparison-table";
import { Country, InsurancePlan } from "@/lib/types";

export function CountryPageClient({
  country,
  plans,
}: {
  country: Country;
  plans: InsurancePlan[];
}) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const selectedPlans = plans.filter((p) => selectedIds.includes(p.id));

  function toggleSelect(id: string) {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  }

  function removeFromComparison(id: string) {
    setSelectedIds((prev) => prev.filter((x) => x !== id));
  }

  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-blue-50 to-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span>{country.name}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-5xl">{country.flag}</span>
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">
                Best Health Insurance in {country.name}
              </h1>
              <p className="mt-2 text-muted-foreground">
                {plans.length} plans ranked and reviewed &middot; Updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg border bg-card p-4">
            <h2 className="font-semibold mb-1">Healthcare System Overview</h2>
            <p className="text-sm text-muted-foreground">{country.healthcareSystem}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Tabs defaultValue="rankings">
          <div className="flex items-center justify-between gap-4 mb-6">
            <TabsList>
              <TabsTrigger value="rankings">Rankings</TabsTrigger>
              <TabsTrigger value="compare">
                Compare
                {selectedIds.length > 0 && (
                  <Badge variant="secondary" className="ml-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center">
                    {selectedIds.length}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>

            {selectedIds.length > 0 && (
              <Button variant="outline" size="sm" onClick={() => setSelectedIds([])}>
                Clear Selection
              </Button>
            )}
          </div>

          <TabsContent value="rankings">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {plans.map((plan, i) => (
                <InsuranceCard
                  key={plan.id}
                  plan={plan}
                  rank={i + 1}
                  countryCode={country.code}
                  selectable
                  selected={selectedIds.includes(plan.id)}
                  onSelect={toggleSelect}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="compare">
            <ComparisonTable plans={selectedPlans} onRemove={removeFromComparison} />
          </TabsContent>
        </Tabs>

        <Separator className="my-12" />

        {/* About this country */}
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">
            About Health Insurance in {country.name}
          </h2>
          <p className="text-muted-foreground leading-relaxed">{country.description}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our team of insurance experts has evaluated and ranked the top {plans.length} health
            insurance providers in {country.name} based on coverage quality, customer satisfaction,
            pricing, network size, and digital experience. Rankings are updated quarterly to
            reflect the latest market changes.
          </p>

          <div className="mt-8 rounded-lg border bg-muted/30 p-6">
            <h3 className="font-semibold mb-2">Affiliate Disclosure</h3>
            <p className="text-sm text-muted-foreground">
              Some links on this page are affiliate links. If you click through and purchase a
              plan, we may earn a commission at no extra cost to you. This helps us keep the
              site free and our reviews independent.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
