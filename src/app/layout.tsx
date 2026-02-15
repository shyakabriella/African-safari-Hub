import "./globals.css";
import SiteHeader from "@/components/navigation/SiteHeader";
import SiteFooter from "@/components/footer/SiteFooter";

const HEADER_H = 88; // keep in sync with your header height

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="min-h-screen w-full bg-white antialiased overflow-x-clip">
        {/* fixed header */}
        <header className="fixed inset-x-0 top-0 z-50 bg-white">
          <SiteHeader />
        </header>

        {/* spacer for fixed header */}
        <div style={{ height: HEADER_H }} aria-hidden="true" />

        {/* main */}
        <main className="w-full min-w-0 overflow-x-clip">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}