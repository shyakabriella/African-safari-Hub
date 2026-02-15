// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/navigation/SiteHeader";
import SiteFooter from "@/components/footer/SiteFooter";

const HEADER_H = 88;

export const metadata: Metadata = {
  title: {
    default: "AshBHub | African Safari Hub",
    template: "%s | AshBHub",
  },
  description:
    "African Safari Hub — hotels, safaris, and travel solutions across Africa. Direct booking, marketing, and support.",
  icons: {
    icon: "/icon.svg", // ✅ from public/icon.svg
  },
  openGraph: {
    title: "AshBHub | African Safari Hub",
    description:
      "African Safari Hub — hotels, safaris, and travel solutions across Africa. Direct booking, marketing, and support.",
    images: ["/og.png"], // ✅ put og.png in /public
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AshBHub | African Safari Hub",
    description:
      "African Safari Hub — hotels, safaris, and travel solutions across Africa. Direct booking, marketing, and support.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="min-h-screen w-full bg-white antialiased overflow-x-clip">
        <header className="fixed inset-x-0 top-0 z-50 bg-white">
          <SiteHeader />
        </header>

        {/* Spacer for fixed header */}
        <div style={{ height: HEADER_H }} aria-hidden="true" />

        <main className="w-full min-w-0 overflow-x-clip">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}