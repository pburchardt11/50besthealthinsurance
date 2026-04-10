import Link from "next/link";
import { SearchBar } from "@/components/search-bar";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-bold tracking-tight">50 Best</span>
          <span className="text-xl font-light text-primary hidden sm:inline">Health Insurance</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
            Home
          </Link>
          <Link href="/rankings" className="text-muted-foreground transition-colors hover:text-foreground">
            Global Rankings
          </Link>
          <Link href="/#countries" className="text-muted-foreground transition-colors hover:text-foreground">
            By Country
          </Link>
          <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>
        <SearchBar />
      </div>
    </header>
  );
}
