import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using 50besthealthinsurance.com.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl">Terms of Service</h1>
      <p className="mt-2 text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

      <Separator className="my-8" />

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using 50besthealthinsurance.com (&ldquo;the Site&rdquo;), you accept and agree
            to be bound by these Terms of Service. If you do not agree to these terms, please
            do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">2. Information Purpose</h2>
          <p>
            The Site provides general information about health insurance plans available in
            various countries. This information is for educational and comparison purposes
            only and does not constitute insurance advice, financial advice, or a
            recommendation to purchase any specific insurance product.
          </p>
          <p className="mt-3">
            We strive to keep our information accurate and up-to-date, but we make no
            warranties or representations about the completeness, accuracy, or reliability
            of any information on the Site. Insurance products, pricing, and availability
            change frequently and may differ from what is displayed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">3. Affiliate Relationships</h2>
          <p>
            The Site contains affiliate links to third-party insurance providers. When you
            click on these links and purchase a product, we may receive a commission at no
            additional cost to you. These affiliate relationships do not influence our
            editorial rankings or reviews.
          </p>
          <p className="mt-3">
            We clearly identify affiliate links and disclose our relationships with
            insurance providers throughout the Site. Our reviews and ratings are based on
            our independent editorial assessment.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">4. Not Insurance Advice</h2>
          <p>
            The content on this Site is not a substitute for professional insurance advice.
            Health insurance needs vary based on individual circumstances including health
            status, location, family size, and budget. We strongly recommend consulting with
            a licensed insurance broker or advisor before purchasing any health insurance plan.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">5. Third-Party Links</h2>
          <p>
            The Site contains links to external websites operated by insurance companies and
            other third parties. We are not responsible for the content, privacy policies,
            or practices of these external sites. Clicking on a third-party link will take
            you away from our Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">6. Intellectual Property</h2>
          <p>
            All content on the Site, including text, graphics, logos, and data compilations,
            is the property of 50besthealthinsurance.com and is protected by copyright law.
            You may not reproduce, distribute, or create derivative works without our
            written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">7. User Conduct</h2>
          <p>You agree not to:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Use the Site for any unlawful purpose</li>
            <li>Scrape, crawl, or extract data from the Site without permission</li>
            <li>Attempt to interfere with the Site&apos;s operation or security</li>
            <li>Use automated systems to access the Site in a manner that exceeds reasonable use</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, 50besthealthinsurance.com shall not be
            liable for any indirect, incidental, special, or consequential damages arising
            from your use of the Site or reliance on any information provided. Our total
            liability shall not exceed the amount you have paid us, if any.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective
            immediately upon posting to the Site. Your continued use of the Site after changes
            constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">10. Contact</h2>
          <p>
            If you have questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:info@50besthealthinsurance.com" className="text-foreground underline underline-offset-4">
              info@50besthealthinsurance.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
