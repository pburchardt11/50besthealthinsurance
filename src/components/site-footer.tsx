import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold">50 Best Health Insurance</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Compare health insurance plans from around the world. Find the best coverage for your needs.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Popular Countries</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li><Link href="/us" className="hover:text-foreground transition-colors">United States</Link></li>
              <li><Link href="/uk" className="hover:text-foreground transition-colors">United Kingdom</Link></li>
              <li><Link href="/de" className="hover:text-foreground transition-colors">Germany</Link></li>
              <li><Link href="/sg" className="hover:text-foreground transition-colors">Singapore</Link></li>
              <li><Link href="/ae" className="hover:text-foreground transition-colors">UAE</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">More Countries</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li><Link href="/ca" className="hover:text-foreground transition-colors">Canada</Link></li>
              <li><Link href="/au" className="hover:text-foreground transition-colors">Australia</Link></li>
              <li><Link href="/fr" className="hover:text-foreground transition-colors">France</Link></li>
              <li><Link href="/jp" className="hover:text-foreground transition-colors">Japan</Link></li>
              <li><Link href="/in" className="hover:text-foreground transition-colors">India</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/about#disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link></li>
              <li><Link href="/about#privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} 50besthealthinsurance.com. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Affiliate Disclosure: We may earn commissions from qualifying purchases through links on this site.
          </p>
        </div>
      </div>
    </footer>
  );
}
