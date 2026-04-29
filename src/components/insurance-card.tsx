import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RatingStars } from "@/components/rating-stars";
import { InsurancePlan } from "@/lib/types";
import { cn } from "@/lib/utils";

const coverageTypeColors: Record<string, string> = {
  basic: "bg-zinc-100 text-zinc-700 border-zinc-200",
  standard: "bg-blue-50 text-blue-700 border-blue-200",
  premium: "bg-purple-50 text-purple-700 border-purple-200",
  comprehensive: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

const badgeColors: Record<string, string> = {
  "Editor's Choice": "bg-amber-100 text-amber-800 border-amber-300",
  "Most Popular": "bg-blue-100 text-blue-800 border-blue-300",
  "Best Value": "bg-green-100 text-green-800 border-green-300",
  "Top Rated": "bg-purple-100 text-purple-800 border-purple-300",
  "Rising Star": "bg-pink-100 text-pink-800 border-pink-300",
  "Budget Pick": "bg-zinc-100 text-zinc-800 border-zinc-300",
};

function getBadgeColor(badge: string): string {
  for (const [key, color] of Object.entries(badgeColors)) {
    if (badge.includes(key) || key.includes(badge)) return color;
  }
  return "bg-zinc-100 text-zinc-700 border-zinc-200";
}

export function InsuranceCard({
  plan,
  rank,
  countryCode,
  selectable,
  selected,
  onSelect,
}: {
  plan: InsurancePlan;
  rank: number;
  countryCode: string;
  selectable?: boolean;
  selected?: boolean;
  onSelect?: (id: string) => void;
}) {
  return (
    <Card className={`relative transition-all hover:shadow-lg ${selected ? "ring-2 ring-primary shadow-lg" : ""}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`inline-flex h-7 min-w-7 items-center justify-center rounded-full px-1.5 text-xs font-bold text-white shrink-0 ${
                rank === 1 ? "bg-amber-500" : rank === 2 ? "bg-zinc-400" : rank === 3 ? "bg-amber-700" : rank <= 10 ? "bg-blue-600" : "bg-zinc-500"
              }`}>
                #{rank}
              </span>
              <h3 className="text-lg font-semibold truncate">{plan.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{plan.provider}</p>
          </div>
          <Badge variant="outline" className={coverageTypeColors[plan.coverageType]}>
            {plan.coverageType}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-2">
          {plan.badges.map((badge) => (
            <Badge key={badge} variant="outline" className={`text-xs ${getBadgeColor(badge)}`}>
              {badge}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <RatingStars rating={plan.rating} />
          <span className="text-sm font-medium">{plan.rating}</span>
          <span className="text-xs text-muted-foreground">({plan.reviewCount.toLocaleString()} reviews)</span>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-muted-foreground">Monthly Premium</p>
            <p className="font-semibold">{plan.monthlyPremium}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Deductible</p>
            <p className="font-semibold">{plan.deductible}</p>
          </div>
        </div>

        <Separator />

        <ul className="space-y-1.5">
          {plan.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm">
              <span className="mt-0.5 text-green-600">&#10003;</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <blockquote className="border-l-2 border-muted pl-3 text-xs text-muted-foreground italic">
          &ldquo;{plan.editorialExcerpt}&rdquo;
          <cite className="block mt-1 not-italic font-medium">&mdash; {plan.editorialSource}</cite>
        </blockquote>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Link
          href={`/${countryCode}/${plan.id}`}
          className={cn(buttonVariants({ variant: "default" }), "flex-1")}
        >
          View Details
        </Link>
        {selectable && (
          <Button
            variant={selected ? "secondary" : "outline"}
            onClick={() => onSelect?.(plan.id)}
            className="flex-1"
          >
            {selected ? "Selected" : "Compare"}
          </Button>
        )}
        <a
          href={plan.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={cn(buttonVariants({ variant: "outline" }), "flex-1")}
        >
          Get Quote &#8594;
        </a>
      </CardFooter>
    </Card>
  );
}
