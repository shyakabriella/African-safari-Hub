import "./globals.css";
import SiteHeader from "@/components/navigation/SiteHeader";
import SiteFooter from "@/components/footer/SiteFooter";

const HEADER_H = 88;

const FIX_CHUNK_SCRIPT = `
(function () {
  function hardReload() {
    try {
      var url = new URL(location.href);
      url.searchParams.set("r", Date.now().toString());
      location.replace(url.toString());
    } catch (e) {
      location.reload();
    }
  }

  window.addEventListener("error", function (e) {
    var msg = (e && (e.message || "")) + "";
    if (msg.includes("ChunkLoadError") || msg.includes("Loading chunk") || msg.includes("_next/static/chunks")) {
      hardReload();
    }
  }, true);

  window.addEventListener("unhandledrejection", function (e) {
    var r = e && e.reason;
    var msg = (r && (r.message || r.toString())) || "";
    msg = msg + "";
    if (msg.includes("ChunkLoadError") || msg.includes("Loading chunk") || msg.includes("_next/static/chunks")) {
      hardReload();
    }
  });
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full w-full">
      <head>
        <script dangerouslySetInnerHTML={{ __html: FIX_CHUNK_SCRIPT }} />
      </head>

      <body className="min-h-screen w-full bg-white antialiased overflow-x-clip">
        <header className="fixed inset-x-0 top-0 z-50 bg-white">
          <SiteHeader />
        </header>

        <div style={{ height: HEADER_H }} aria-hidden="true" />

        <main className="w-full min-w-0 overflow-x-clip">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}