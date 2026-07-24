// src/app/layout.tsx

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import SiteHeader from "@/components/navigation/SiteHeader";
import SiteFooter from "@/components/footer/SiteFooter";
import SupportChatBadge from "@/components/support/SupportChatBadge";

const HEADER_H = 88;

const UMAMI_ANALYTICS_URL =
  "https://analytics.ashbhub.com/script.js";

const UMAMI_WEBSITE_ID =
  "9a8dea77-d98a-451c-8450-9381c98cf462";

export const metadata: Metadata = {
  title: {
    default: "AshBHub | African Safari and Hotel Booking Hub",
    template: "%s | AshBHub",
  },

  description:
    "African Safari and Hotel Booking Hub — hotels, safaris, and travel solutions across Africa. Direct booking, marketing, and support.",

  icons: {
    icon: "/icon.svg",
  },

  openGraph: {
    title: "AshBHub | African Safari and Hotel Booking Hub",
    description:
      "African Safari and Hotel Booking Hub — hotels, safaris, and travel solutions across Africa. Direct booking, marketing, and support.",
    images: ["/icon.png"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AshBHub | African Safari and Hotel Booking Hub",
    description:
      "African Safari and Hotel Booking Hub — hotels, safaris, and travel solutions across Africa. Direct booking, marketing, and support.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="min-h-screen w-full overflow-x-clip bg-white antialiased">
        {/* Self-hosted Umami Analytics */}
        <Script
          id="umami-analytics"
          src={UMAMI_ANALYTICS_URL}
          data-website-id={UMAMI_WEBSITE_ID}
          data-performance="true"
          strategy="afterInteractive"
        />

        <header className="fixed inset-x-0 top-0 z-50 bg-white">
          <SiteHeader />
        </header>

        {/* Space reserved for the fixed header */}
        <div style={{ height: HEADER_H }} aria-hidden="true" />

        <main className="w-full min-w-0 overflow-x-clip">
          {children}
        </main>

        <SiteFooter />

        <SupportChatBadge />
      </body>
    </html>
  );
}