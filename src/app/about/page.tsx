import { Metadata } from "next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about 50 Best Health Insurance — how we rank and review health insurance plans worldwide.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl">About 50 Best Health Insurance</h1>
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
        We help people around the world find the best health insurance for their needs. Our
        expert team researches, evaluates, and ranks health insurance plans in every major
        market so you can make informed decisions.
      </p>

      <Separator className="my-8" />

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">How We Rank Insurance Plans</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our rankings are based on a comprehensive methodology that considers multiple
            factors:
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { title: "Coverage Quality", desc: "Breadth and depth of coverage including hospital, outpatient, dental, vision, and mental health." },
              { title: "Customer Satisfaction", desc: "Real user reviews, complaint ratios, and independent satisfaction surveys." },
              { title: "Value for Money", desc: "Premium-to-coverage ratio, deductibles, co-payments, and overall cost effectiveness." },
              { title: "Provider Network", desc: "Size and quality of hospital and specialist networks available to members." },
              { title: "Digital Experience", desc: "Mobile apps, online claims, telehealth services, and digital tools." },
              { title: "Financial Stability", desc: "Insurer financial ratings, claims-paying ability, and long-term viability." },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-bold mb-4">Editorial Independence</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our editorial team operates independently from our business team. While we may
            earn commissions when you click through to an insurer and purchase a plan, this
            never influences our rankings or reviews. Our editorial team has full autonomy in
            determining ratings and recommendations.
          </p>
        </section>

        <Separator />

        <section id="disclaimer">
          <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The information provided on 50besthealthinsurance.com is for general
                informational purposes only. It is not intended as professional insurance
                advice. Health insurance products, pricing, and availability vary by
                location and individual circumstances. We recommend consulting with a
                licensed insurance professional before making any insurance decisions.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Prices, coverage details, and ratings shown are based on publicly available
                information and our own research. Actual premiums and coverage may differ
                based on your personal profile, location, and the insurer&apos;s current offerings.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section id="privacy">
          <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We respect your privacy. We do not collect personal information unless you
            voluntarily provide it. When you click through to an insurer via our affiliate
            links, you will be subject to that insurer&apos;s privacy policy.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We use analytics to understand how visitors use our site in order to improve our
            content and user experience. No personally identifiable information is collected
            through our analytics.
          </p>
        </section>
      </div>
    </div>
  );
}
