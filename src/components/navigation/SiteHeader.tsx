"use client";

import { useEffect, useRef, useState } from "react";
import TopBar from "./TopBar";
import MainNavbar from "./MainNavbar";

export default function SiteHeader() {
  const [scrollY, setScrollY] = useState(0);
  const lastY = useRef(0);

  // tweak these to match the video feel
  const FADE_START = 10;   // start fading after 10px
  const FADE_END = 140;    // fully hidden after 140px

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY || 0;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(y);
          lastY.current = y;
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const compact = scrollY > FADE_START;

  // 1 -> visible, 0 -> hidden (smooth)
  const t = Math.min(Math.max((scrollY - FADE_START) / (FADE_END - FADE_START), 0), 1);
  const topOpacity = 1 - t;

  // collapse fully when almost hidden (prevents empty space)
  const topCollapsed = topOpacity <= 0.02;

  return (
    <header className="w-full">
      {/* ✅ TopBar: fade + slide up + collapse height */}
      <div
        className={[
          "overflow-hidden",
          "transition-[max-height] duration-300 ease-out",
          topCollapsed ? "max-h-0" : "max-h-24",
        ].join(" ")}
        style={{
          opacity: topOpacity,
          transform: `translateY(${-8 * (1 - topOpacity)}px)`,
          transition: "opacity 200ms ease-out, transform 200ms ease-out, max-height 300ms ease-out",
        }}
      >
        <TopBar compact={compact} />
      </div>

      {/* ✅ Navbar stays visible + becomes compact on scroll */}
      <MainNavbar compact={compact} />
    </header>
  );
}