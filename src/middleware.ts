import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";

  // ✅ Force only ONE domain (choose one)
  // Here we force: www.ashbhub.com
  if (host === "ashbhub.com") {
    const url = req.nextUrl.clone();
    url.hostname = "www.ashbhub.com";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

// ✅ Apply to all pages (ignore Next static files)
export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)"],
};