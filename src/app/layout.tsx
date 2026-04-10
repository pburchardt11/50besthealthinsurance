import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TranslateButton } from "@/components/translate-button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "50 Best Health Insurance Plans Worldwide | Compare & Save",
    template: "%s | 50 Best Health Insurance",
  },
  description:
    "Compare the best health insurance plans from around the world. Expert ratings, reviews, and side-by-side comparisons for every country.",
  keywords: [
    "health insurance comparison",
    "best health insurance",
    "international health insurance",
    "health insurance reviews",
    "compare health plans",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <TranslateButton />
      </body>
    </html>
  );
}
