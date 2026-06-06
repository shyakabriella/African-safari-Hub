// src/app/layout.tsx

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import SiteHeader from "@/components/navigation/SiteHeader";
import SiteFooter from "@/components/footer/SiteFooter";
import SupportChatBadge from "@/components/support/SupportChatBadge";

const HEADER_H = 88;
const GOOGLE_ANALYTICS_ID = "G-YMM9N7S7XL";

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
    images: ["/og.png"],
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
        {/* Google Analytics external script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />

        {/* Google Analytics configuration */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname
            });
          `}
        </Script>

        <header className="fixed inset-x-0 top-0 z-50 bg-white">
          <SiteHeader />
        </header>

        {/* Space reserved for the fixed header */}
        <div style={{ height: HEADER_H }} aria-hidden="true" />

        <main className="w-full min-w-0 overflow-x-clip">{children}</main>

        <SiteFooter />

        <SupportChatBadge />
      </body>
    </html>
  );
}