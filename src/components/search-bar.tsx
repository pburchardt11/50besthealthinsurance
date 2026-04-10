"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { getCountries, insurancePlans } from "@/lib/data";

interface SearchResult {
  type: "country" | "plan";
  label: string;
  sublabel: string;
  href: string;
  flag?: string;
}

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const countries = useMemo(() => getCountries(), []);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    const matches: SearchResult[] = [];

    for (const c of countries) {
      if (c.name.toLowerCase().includes(q) || c.code.includes(q)) {
        matches.push({
          type: "country",
          label: `${c.flag} ${c.name}`,
          sublabel: `${c.planCount} plans \u00B7 ${c.region}`,
          href: `/${c.code}`,
          flag: c.flag,
        });
      }
      if (matches.length >= 5) break;
    }

    for (const p of insurancePlans) {
      if (
        p.name.toLowerCase().includes(q) ||
        p.provider.toLowerCase().includes(q)
      ) {
        matches.push({
          type: "plan",
          label: p.name,
          sublabel: `${p.provider} \u00B7 ${p.country}`,
          href: `/${p.countryCode}/${p.id}`,
        });
      }
      if (matches.length >= 10) break;
    }

    return matches;
  }, [query, countries]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function navigate(href: string) {
    setOpen(false);
    setQuery("");
    router.push(href);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      e.preventDefault();
      navigate(results[selectedIndex].href);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div ref={wrapperRef} className="relative">
      <Input
        type="search"
        placeholder="Search country or insurer..."
        className="h-8 w-48 lg:w-64 text-sm"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => query.length >= 2 && setOpen(true)}
        onKeyDown={handleKeyDown}
      />

      {open && results.length > 0 && (
        <div className="absolute top-full right-0 mt-1 w-80 rounded-lg border bg-background shadow-lg z-50 overflow-hidden">
          {results.map((r, i) => (
            <button
              key={r.href}
              className={`flex w-full items-start gap-3 px-3 py-2.5 text-left text-sm transition-colors ${
                i === selectedIndex ? "bg-muted" : "hover:bg-muted/50"
              }`}
              onClick={() => navigate(r.href)}
              onMouseEnter={() => setSelectedIndex(i)}
            >
              <span className="mt-0.5 shrink-0 text-xs text-muted-foreground uppercase font-medium w-14">
                {r.type === "country" ? "Country" : "Plan"}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-medium truncate">{r.label}</p>
                <p className="text-xs text-muted-foreground truncate">{r.sublabel}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
