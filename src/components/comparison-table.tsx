"use client";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { RatingStars } from "@/components/rating-stars";
import { InsurancePlan } from "@/lib/types";
import { cn } from "@/lib/utils";

const coverageKeys: { key: keyof InsurancePlan["coverageDetails"]; label: string }[] = [
  { key: "hospitalization", label: "Hospitalization" },
  { key: "outpatient", label: "Outpatient" },
  { key: "dental", label: "Dental" },
  { key: "vision", label: "Vision" },
  { key: "mental", label: "Mental Health" },
  { key: "maternity", label: "Maternity" },
  { key: "prescription", label: "Prescription" },
  { key: "emergency", label: "Emergency" },
  { key: "international", label: "International" },
  { key: "telehealth", label: "Telehealth" },
];

export function ComparisonTable({
  plans,
  onRemove,
}: {
  plans: InsurancePlan[];
  onRemove: (id: string) => void;
}) {
  if (plans.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
        <p className="text-lg font-medium mb-2">Select plans to compare</p>
        <p className="text-sm">Click &ldquo;Compare&rdquo; on up to 3 insurance plans to see them side by side.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="sticky left-0 bg-background p-3 text-left font-medium text-muted-foreground w-40">
              Feature
            </th>
            {plans.map((plan) => (
              <th key={plan.id} className="p-3 text-left min-w-[220px]">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-base">{plan.name}</p>
                    <p className="text-xs text-muted-foreground font-normal">{plan.provider}</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => onRemove(plan.id)} className="text-xs h-7">
                    &#x2715;
                  </Button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="sticky left-0 bg-background p-3 font-medium">Rating</td>
            {plans.map((p) => (
              <td key={p.id} className="p-3">
                <div className="flex items-center gap-2">
                  <RatingStars rating={p.rating} size="sm" />
                  <span className="font-medium">{p.rating}</span>
                </div>
                <span className="text-xs text-muted-foreground">({p.reviewCount.toLocaleString()} reviews)</span>
              </td>
            ))}
          </tr>
          <tr className="border-t bg-muted/30">
            <td className="sticky left-0 bg-muted/30 p-3 font-medium">Monthly Premium</td>
            {plans.map((p) => (
              <td key={p.id} className="p-3 font-semibold">{p.monthlyPremium}</td>
            ))}
          </tr>
          <tr className="border-t">
            <td className="sticky left-0 bg-background p-3 font-medium">Deductible</td>
            {plans.map((p) => (
              <td key={p.id} className="p-3">{p.deductible}</td>
            ))}
          </tr>
          <tr className="border-t bg-muted/30">
            <td className="sticky left-0 bg-muted/30 p-3 font-medium">Coverage Type</td>
            {plans.map((p) => (
              <td key={p.id} className="p-3">
                <Badge variant="outline" className="capitalize">{p.coverageType}</Badge>
              </td>
            ))}
          </tr>
          <tr className="border-t">
            <td className="sticky left-0 bg-background p-3 font-medium">Badges</td>
            {plans.map((p) => (
              <td key={p.id} className="p-3">
                <div className="flex flex-wrap gap-1">
                  {p.badges.map((b) => (
                    <Badge key={b} variant="secondary" className="text-xs">{b}</Badge>
                  ))}
                </div>
              </td>
            ))}
          </tr>

          <tr className="border-t">
            <td colSpan={plans.length + 1} className="p-3 font-semibold text-base bg-muted/50">
              Coverage Details
            </td>
          </tr>

          {coverageKeys.map((item, i) => (
            <tr key={item.key} className={`border-t ${i % 2 === 0 ? "" : "bg-muted/30"}`}>
              <td className={`sticky left-0 p-3 font-medium ${i % 2 === 0 ? "bg-background" : "bg-muted/30"}`}>
                {item.label}
              </td>
              {plans.map((p) => (
                <td key={p.id} className="p-3">
                  {p.coverageDetails[item.key] ? (
                    <span className="text-green-600 font-medium">&#10003; Covered</span>
                  ) : (
                    <span className="text-red-500">&#10007; Not covered</span>
                  )}
                </td>
              ))}
            </tr>
          ))}

          <tr className="border-t">
            <td colSpan={plans.length + 1} className="p-3 font-semibold text-base bg-muted/50">
              Pros &amp; Cons
            </td>
          </tr>
          <tr className="border-t">
            <td className="sticky left-0 bg-background p-3 font-medium">Pros</td>
            {plans.map((p) => (
              <td key={p.id} className="p-3">
                <ul className="space-y-1">
                  {p.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-1.5">
                      <span className="text-green-600 mt-0.5">+</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
          <tr className="border-t bg-muted/30">
            <td className="sticky left-0 bg-muted/30 p-3 font-medium">Cons</td>
            {plans.map((p) => (
              <td key={p.id} className="p-3">
                <ul className="space-y-1">
                  {p.cons.map((con) => (
                    <li key={con} className="flex items-start gap-1.5">
                      <span className="text-red-500 mt-0.5">-</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>

          <tr className="border-t">
            <td className="sticky left-0 bg-background p-3 font-medium">Get Quote</td>
            {plans.map((p) => (
              <td key={p.id} className="p-3">
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={cn(buttonVariants({ size: "sm" }))}
                >
                  Get Quote &#8594;
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
