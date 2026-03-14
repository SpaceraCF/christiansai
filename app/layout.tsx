import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Phone Receptionist for Small Businesses | Orange, Bathurst & Central West NSW — Christian's AI",
  description:
    "AI phone assistants and automation for local small businesses in Orange, Bathurst, Dubbo & Mudgee. Never miss a call. From $100/month. No lock-in.",
};

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--gray-200)] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold text-[var(--teal)] sm:text-xl">
          Christian&apos;s AI
        </Link>
        <nav className="hidden items-center gap-6 sm:flex">
          <Link href="/" className="text-sm font-medium text-[var(--gray-600)] hover:text-[var(--teal)]">
            Home
          </Link>
          <Link href="/about/" className="text-sm font-medium text-[var(--gray-600)] hover:text-[var(--teal)]">
            About
          </Link>
          <Link href="/contact/" className="text-sm font-medium text-[var(--gray-600)] hover:text-[var(--teal)]">
            Contact
          </Link>
          <Link
            href="/contact/"
            className="rounded-lg bg-[var(--teal)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--teal-dark)]"
          >
            Book a Free Chat
          </Link>
        </nav>
        <div className="flex items-center gap-3 sm:hidden">
          <Link
            href="/contact/"
            className="rounded-lg bg-[var(--teal)] px-3 py-1.5 text-sm font-semibold text-white hover:bg-[var(--teal-dark)]"
          >
            Book a Free Chat
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <details className="relative">
      <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-lg hover:bg-[var(--gray-100)]">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </summary>
      <div className="absolute right-0 top-11 w-48 rounded-lg border border-[var(--gray-200)] bg-white p-2 shadow-lg">
        <Link href="/" className="block rounded-md px-3 py-2 text-sm text-[var(--gray-700)] hover:bg-[var(--gray-50)]">
          Home
        </Link>
        <Link href="/about/" className="block rounded-md px-3 py-2 text-sm text-[var(--gray-700)] hover:bg-[var(--gray-50)]">
          About
        </Link>
        <Link href="/contact/" className="block rounded-md px-3 py-2 text-sm text-[var(--gray-700)] hover:bg-[var(--gray-50)]">
          Contact
        </Link>
      </div>
    </details>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--gray-200)] bg-[var(--gray-900)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">Christian&apos;s AI for Business</h3>
            <p className="mt-2 text-sm text-[var(--gray-400)]">
              AI automation for local small businesses in Central West NSW.
            </p>
            <p className="mt-1 text-sm text-[var(--gray-400)]">Local. Simple. No lock-in contracts.</p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <div className="mt-2 flex flex-col gap-1">
              <Link href="/" className="text-sm text-[var(--gray-400)] hover:text-white">Home</Link>
              <Link href="/about/" className="text-sm text-[var(--gray-400)] hover:text-white">About</Link>
              <Link href="/contact/" className="text-sm text-[var(--gray-400)] hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Get in Touch</h4>
            <div className="mt-2 flex flex-col gap-1">
              <a href="tel:0485005656" className="text-sm text-[var(--gray-400)] hover:text-white">
                0485 00 56 56
              </a>
              <p className="text-sm text-[var(--gray-400)]">Central West, NSW</p>
              <p className="text-sm text-[var(--gray-400)]">christiansai.com.au</p>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-[var(--gray-400)]">
          Proudly serving local businesses in Orange, Bathurst, Dubbo, Mudgee and across Central West NSW.
        </p>
        <div className="mt-4 border-t border-[var(--gray-700)] pt-6 text-center text-sm text-[var(--gray-500)]">
          &copy; {new Date().getFullYear()} Christian&apos;s AI for Business. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Christian's AI for Business",
              "telephone": "+61485005656",
              "url": "https://christiansai.com.au",
              "priceRange": "$$",
              "areaServed": ["Orange NSW", "Bathurst NSW", "Dubbo NSW", "Mudgee NSW", "Central West NSW"],
              "serviceType": "AI Phone Assistant and Business Automation",
              "description": "AI phone assistants and automation for local small businesses in Central West NSW. Never miss a call. From $100/month.",
            }),
          }}
        />
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "ebc455b92d5d4c2da6a222b2b19e01b5"}'
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
