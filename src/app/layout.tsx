import "./globals.css";
import SiteHeader from "@/components/navigation/SiteHeader";
import SiteFooter from "@/components/footer/SiteFooter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full overflow-x-hidden">
      <body className="min-h-screen bg-white antialiased overflow-x-hidden">
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white">
          <SiteHeader />
        </header>

        <div className="h-[88px]" aria-hidden="true" />

        <main className="w-full">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}