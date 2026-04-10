import { Metadata } from "next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the 50 Best Health Insurance team.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl">Contact Us</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Have a question, suggestion, or want to partner with us? We&apos;d love to hear from you.
      </p>

      <Separator className="my-8" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <h2 className="font-semibold">General Inquiries</h2>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>Questions about our rankings, reviews, or methodology.</p>
            <a
              href="mailto:info@50besthealthinsurance.com"
              className="inline-block text-foreground font-medium underline underline-offset-4"
            >
              info@50besthealthinsurance.com
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="font-semibold">Partnerships &amp; Advertising</h2>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>Interested in affiliate partnerships, sponsorships, or advertising.</p>
            <a
              href="mailto:partners@50besthealthinsurance.com"
              className="inline-block text-foreground font-medium underline underline-offset-4"
            >
              partners@50besthealthinsurance.com
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="font-semibold">Press &amp; Media</h2>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>Press inquiries, interview requests, and media resources.</p>
            <a
              href="mailto:press@50besthealthinsurance.com"
              className="inline-block text-foreground font-medium underline underline-offset-4"
            >
              press@50besthealthinsurance.com
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="font-semibold">Corrections &amp; Updates</h2>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>Found an error or have updated information about an insurance plan?</p>
            <a
              href="mailto:corrections@50besthealthinsurance.com"
              className="inline-block text-foreground font-medium underline underline-offset-4"
            >
              corrections@50besthealthinsurance.com
            </a>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-3">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "How do you rank insurance plans?",
                a: "Our rankings are based on coverage quality, customer satisfaction, value for money, provider network, digital experience, and financial stability. See our About page for the full methodology.",
              },
              {
                q: "Are your reviews independent?",
                a: "Yes. While we earn commissions through affiliate links, our editorial team operates independently. Affiliate relationships never influence our rankings or ratings.",
              },
              {
                q: "How often are rankings updated?",
                a: "We update our rankings quarterly based on the latest market data, regulatory changes, and consumer surveys. Country-specific updates may happen more frequently.",
              },
              {
                q: "Can I list my insurance company on your site?",
                a: "We welcome inquiries from insurance providers. Please contact our partnerships team at partners@50besthealthinsurance.com for listing and advertising options.",
              },
              {
                q: "I found incorrect information. How do I report it?",
                a: "Please email corrections@50besthealthinsurance.com with details about the error and the correct information. We take accuracy seriously and will investigate promptly.",
              },
            ].map((faq) => (
              <div key={faq.q} className="rounded-lg border p-4">
                <h3 className="font-semibold text-sm">{faq.q}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Response Times</h2>
          <p className="text-muted-foreground text-sm">
            We aim to respond to all inquiries within 2 business days. Partnership and
            advertising inquiries may take up to 5 business days for an initial response.
          </p>
        </section>
      </div>
    </div>
  );
}
