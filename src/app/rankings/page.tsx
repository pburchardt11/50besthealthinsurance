import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { RatingStars } from "@/components/rating-stars";
import { insurancePlans, getCountryByCode } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Global Best Health Insurance Rankings 2025 — Top 50 Worldwide",
  description:
    "The definitive global ranking of the best health insurance plans in the world. Compared across coverage, value, innovation, and customer satisfaction.",
};

const globalRanked = [...insurancePlans]
  .sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;
    return b.reviewCount - a.reviewCount;
  })
  .slice(0, 50);

const categoryAwards = [
  {
    title: "Best Overall",
    description: "Highest combined score across all criteria",
    plans: globalRanked.slice(0, 3),
    color: "bg-amber-50 border-amber-200",
    badgeColor: "bg-amber-100 text-amber-800",
  },
  {
    title: "Best Value",
    description: "Top-rated plans with the most competitive pricing",
    plans: globalRanked
      .filter((p) => p.badges.some((b) => b.toLowerCase().includes("value") || b.toLowerCase().includes("affordable")))
      .slice(0, 3),
    color: "bg-green-50 border-green-200",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    title: "Most Innovative",
    description: "Leading in digital tools, wellness programs, and technology",
    plans: globalRanked
      .filter((p) => p.badges.some((b) => b.toLowerCase().includes("innovat") || b.toLowerCase().includes("digital") || b.toLowerCase().includes("tech")))
      .slice(0, 3),
    color: "bg-purple-50 border-purple-200",
    badgeColor: "bg-purple-100 text-purple-800",
  },
  {
    title: "Best International Coverage",
    description: "Top plans for expats and global coverage",
    plans: globalRanked
      .filter((p) => p.coverageDetails.international)
      .slice(0, 3),
    color: "bg-blue-50 border-blue-200",
    badgeColor: "bg-blue-100 text-blue-800",
  },
];

function getMedal(rank: number) {
  if (rank === 1) return { emoji: "\u{1F947}", bg: "bg-amber-500" };
  if (rank === 2) return { emoji: "\u{1F948}", bg: "bg-zinc-400" };
  if (rank === 3) return { emoji: "\u{1F949}", bg: "bg-amber-700" };
  return null;
}

export default function GlobalRankingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-amber-50 to-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 text-sm">
              Updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              The 50 Best Health Insurance Plans <span className="text-amber-600">in the World</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              The top 50 health insurance plans in the world, selected from {new Set(globalRanked.map((p) => p.countryCode)).size}+ countries and
              ranked by coverage quality, customer satisfaction, value, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Category Awards */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Category Awards</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {categoryAwards.map((cat) => (
              <Card key={cat.title} className={cat.color}>
                <CardContent className="p-6">
                  <Badge variant="outline" className={cat.badgeColor}>{cat.title}</Badge>
                  <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
                  <div className="mt-4 space-y-3">
                    {cat.plans.map((plan, i) => {
                      const country = getCountryByCode(plan.countryCode);
                      return (
                        <Link
                          key={plan.id}
                          href={`/${plan.countryCode}/${plan.id}`}
                          className="flex items-center gap-3 rounded-lg bg-background/80 border p-3 transition-colors hover:bg-background"
                        >
                          <span className="text-lg font-bold text-muted-foreground w-6 text-center">
                            {i + 1}
                          </span>
                          <span className="text-lg">{country?.flag}</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{plan.name}</p>
                            <p className="text-xs text-muted-foreground">{plan.provider} &middot; {plan.country}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-sm font-bold">{plan.rating}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Full Global Ranking */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">Full Global Ranking</h2>
          <p className="text-muted-foreground mb-8">
            The top 50 plans worldwide, ranked by rating and review volume.
          </p>

          <div className="space-y-3">
            {globalRanked.map((plan, i) => {
              const rank = i + 1;
              const medal = getMedal(rank);
              const country = getCountryByCode(plan.countryCode);

              return (
                <Link
                  key={plan.id}
                  href={`/${plan.countryCode}/${plan.id}`}
                  className={`flex items-center gap-4 rounded-lg border p-4 transition-all hover:shadow-md hover:border-blue-200 ${
                    rank <= 3 ? "bg-amber-50/50 border-amber-200" : rank <= 10 ? "bg-blue-50/30" : ""
                  }`}
                >
                  {/* Rank */}
                  <div className="w-10 shrink-0 text-center">
                    {medal ? (
                      <span className="text-2xl">{medal.emoji}</span>
                    ) : (
                      <span className={`text-lg font-bold ${rank <= 10 ? "text-blue-600" : "text-muted-foreground"}`}>
                        {rank}
                      </span>
                    )}
                  </div>

                  {/* Flag */}
                  <span className="text-2xl shrink-0">{country?.flag}</span>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold truncate">{plan.name}</h3>
                      {rank <= 10 && (
                        <Badge variant="secondary" className="text-xs shrink-0">Top 10</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {plan.provider} &middot; {plan.country}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {plan.badges.slice(0, 2).map((badge) => (
                        <Badge key={badge} variant="outline" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Coverage type */}
                  <div className="hidden sm:block shrink-0">
                    <Badge variant="outline" className="capitalize text-xs">{plan.coverageType}</Badge>
                  </div>

                  {/* Premium */}
                  <div className="hidden md:block text-right shrink-0 w-36">
                    <p className="text-xs text-muted-foreground">Premium</p>
                    <p className="text-sm font-medium">{plan.monthlyPremium}</p>
                  </div>

                  {/* Rating */}
                  <div className="text-right shrink-0 w-24">
                    <div className="flex items-center justify-end gap-1">
                      <RatingStars rating={plan.rating} size="sm" />
                    </div>
                    <p className="text-lg font-bold">{plan.rating}</p>
                    <p className="text-xs text-muted-foreground">
                      {plan.reviewCount.toLocaleString()} reviews
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <Separator className="my-12" />

          {/* Methodology */}
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">Ranking Methodology</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our global ranking evaluates health insurance plans across six key dimensions:
              coverage quality (breadth of benefits, network size), customer satisfaction
              (review scores, complaint ratios), value for money (premium-to-coverage ratio),
              innovation (digital tools, wellness programs), financial stability (insurer
              ratings), and accessibility (ease of enrollment, claims processing).
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Plans are ranked primarily by their expert rating score, with review volume used
              as a tiebreaker. Rankings are updated quarterly based on the latest data from
              regulatory bodies, consumer surveys, and our own editorial research.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
                Browse by Country
              </Link>
              <Link href="/about" className={cn(buttonVariants({ variant: "outline" }))}>
                Our Methodology
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
