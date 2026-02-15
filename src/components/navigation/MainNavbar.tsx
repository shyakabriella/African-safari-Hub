"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Home,
  LayoutGrid,
  Settings,
  BadgeDollarSign,
  Building2,
  BookOpen,
  Info,
  Phone,
  ChevronDown,
  Globe,
  Network,
  Repeat2,
  MonitorCog,
  CreditCard,
  Search,
  ClipboardList,
  PlugZap,
  Megaphone,
  PenTool,
  Star,
  Headset,
  FileText,
  HelpCircle,
  BookMarked,
  Users,
  Award,
  Brain, // ✅ added for "Connect All AI"
} from "lucide-react";

/* ---------------- Brand colors (from PMS slide) ---------------- */
const BRAND = {
  orange: "#AD6419",
  orangeDark: "#8E4F13",
  orangeSoftBg: "#FFF3E8",
  green: "#599E1A",
  greenSoftBg: "#EFF8E7",
};

/* ---------------- types ---------------- */
type ChildItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  description?: string;
};

type NavLinkItem = { type: "link"; label: string; href: string; icon: LucideIcon };
type NavMenuItem = {
  type: "menu";
  label: string;
  icon: LucideIcon;
  children: ChildItem[];
};

type NavItem = NavLinkItem | NavMenuItem;

/* ---------------- menu data ---------------- */
const NAV_ITEMS: NavItem[] = [
  { type: "link", label: "Home", href: "/", icon: Home },

  {
    type: "menu",
    label: "Solutions",
    icon: LayoutGrid,
    children: [
      {
        label: "Hotel Website + Booking Engine",
        href: "/solutions/website",
        icon: Globe,
        description: "Modern site + direct bookings",
      },
      {
        label: "450+ OTAs Distribution",
        href: "/solutions/otas",
        icon: Network,
        description: "Reach Booking, Expedia, Airbnb…",
      },
      {
        label: "Channel Manager",
        href: "/solutions/channel-manager",
        icon: Repeat2,
        description: "Sync rates & availability",
      },
      {
        label: "PMS (Front Office)",
        href: "/solutions/pms",
        icon: MonitorCog,
        description: "Manage guests & operations",
      },
      {
        label: "Online Payments",
        href: "/solutions/payments",
        icon: CreditCard,
        description: "Accept payments securely",
      },
      {
        label: "SEO Optimization",
        href: "/solutions/seo",
        icon: Search,
        description: "Rank higher on Google",
      },
    ],
  },

  {
    type: "menu",
    label: "Services",
    icon: Settings,
    children: [
      {
        label: "Setup & Onboarding",
        href: "/services/onboarding",
        icon: ClipboardList,
        description: "Fast setup and training",
      },
      {
        label: "OTA Setup & Sync",
        href: "/services/ota-setup",
        icon: PlugZap,
        description: "Accounts + connectivity",
      },
      {
        label: "PMS Training",
        href: "/services/pms-training",
        icon: MonitorCog,
        description: "Team onboarding & support",
      },
      {
        label: "Social Media Management",
        href: "/services/social-media",
        icon: Megaphone,
        description: "Content + growth strategy",
      },
      {
        label: "Digital Marketing (Ads)",
        href: "/services/marketing",
        icon: Megaphone,
        description: "Google/Meta campaigns",
      },
      {
        label: "Branding & Design",
        href: "/services/branding",
        icon: PenTool,
        description: "Logos, posters, brand kit",
      },
      {
        label: "Review Management",
        href: "/services/reviews",
        icon: Star,
        description: "Boost reputation & trust",
      },

      // ✅ NEW: Connect All AI (only addition requested)
      {
        label: "Connect All AI",
        href: "/services/connect-all-ai",
        icon: Brain,
        description: "Integrate AI tools across your workflow",
      },

      {
        label: "24/7 Support",
        href: "/services/support",
        icon: Headset,
        description: "Local help when needed",
      },
    ],
  },

  {
    type: "menu",
    label: "Pricing",
    icon: BadgeDollarSign,
    children: [
      { label: "Monthly Plans", href: "/pricing#plans", icon: BadgeDollarSign, description: "Basic / Standard / Premium" },
      { label: "One-time Setup Fees", href: "/pricing#setup-fees", icon: FileText, description: "Website, OTA setup, PMS…" },
      { label: "Commission Option", href: "/pricing#commission", icon: Repeat2, description: "Pay only when you earn" },
      { label: "Compare Plans", href: "/pricing#compare", icon: LayoutGrid, description: "Choose what fits you" },
    ],
  },

  {
    type: "menu",
    label: "Industries",
    icon: Building2,
    children: [
      { label: "Apartments & Airbnbs", href: "/industries/apartments-airbnb", icon: Building2, description: "Small properties & hosts" },
      { label: "Guesthouses & Lodges", href: "/industries/guesthouses-lodges", icon: Building2, description: "Growth + OTA visibility" },
      { label: "Mid-size Hotels", href: "/industries/mid-size-hotels", icon: Building2, description: "Scale operations + revenue" },
      { label: "Luxury Hotels & Resorts", href: "/industries/luxury-hotels", icon: Building2, description: "Premium experience & systems" },
    ],
  },

  {
    type: "menu",
    label: "Resources",
    icon: BookOpen,
    children: [
      { label: "Blog / Insights", href: "/resources/blog", icon: BookMarked, description: "Tips to increase bookings" },
      { label: "FAQs", href: "/resources/faqs", icon: HelpCircle, description: "Quick answers" },
      { label: "Case Studies", href: "/resources/case-studies", icon: FileText, description: "Real success stories" },
      { label: "Guides", href: "/resources/guides", icon: BookOpen, description: "Step-by-step learning" },
    ],
  },

  {
    type: "menu",
    label: "About",
    icon: Info,
    children: [
      { label: "Who We Are", href: "/about", icon: Users, description: "Our story & mission" },
      { label: "Partners / Certifications", href: "/about#partners", icon: Award, description: "Trusted partnerships" },
      { label: "Our Team", href: "/about#team", icon: Users, description: "People behind the work" },
    ],
  },

  { type: "link", label: "Contact", href: "/contact", icon: Phone },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function MainNavbar({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSections, setOpenMobileSections] = useState<Record<string, boolean>>({});

  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDesktopMenu(label);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDesktopMenu(null), 220);
  };

  useEffect(() => {
    setOpenDesktopMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  const activeTopLabel = useMemo(() => {
    for (const item of NAV_ITEMS) {
      if (item.type === "link" && isActivePath(pathname, item.href)) return item.label;
      if (item.type === "menu") {
        const anyChildActive = item.children.some((c) => isActivePath(pathname, c.href));
        if (anyChildActive) return item.label;
      }
    }
    return "";
  }, [pathname]);

  const toggleMobileSection = (label: string) => {
    setOpenMobileSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  // ✅ Pill base: remove all blue, use brand colors on hover/focus
  const pillBase = [
    "inline-flex items-center gap-2 rounded-full px-3 font-semibold",
    "text-gray-700 transition cursor-pointer",
    "hover:bg-[rgba(173,100,25,0.08)] hover:text-[#AD6419]",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(173,100,25,0.25)]",
    compact ? "py-1.5 text-[13px]" : "py-2 text-[14px]",
  ].join(" ");

  return (
    <div
      className={[
        "w-full border-b supports-[backdrop-filter]:backdrop-blur",
        "transition-all duration-300 ease-out",
        compact ? "bg-white/95 shadow-md" : "bg-white/80",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex w-full items-center justify-between gap-4",
          "max-w-[1400px]",
          "px-2 sm:px-4 lg:px-6",
          "transition-all duration-300 ease-out",
          compact ? "py-3" : "py-4",
        ].join(" ")}
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center shrink-0">
          <span className="sr-only">HotelSafari</span>

          <div
            className={[
              "relative overflow-hidden rounded-2xl bg-white",
              "ring-1 ring-black/5 shadow-sm",
              "transition-all duration-300 ease-out",
              compact
                ? "h-12 w-[170px] sm:h-12 sm:w-[190px]"
                : "h-14 w-[190px] sm:h-14 sm:w-[220px]",
            ].join(" ")}
          >
            <Image
              src="/lg.png"
              alt="HotelSafari logo"
              fill
              priority
              sizes="(max-width: 640px) 170px, 220px"
              className={[
                "object-contain object-left",
                "p-0.5 sm:p-1",
                "scale-[1.05]",
                "origin-left",
              ].join(" ")}
            />
          </div>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-2 md:flex">
          {NAV_ITEMS.map((item) => {
            if (item.type === "link") {
              const active = isActivePath(pathname, item.href);
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${pillBase} ${
                    active ? "bg-[rgba(173,100,25,0.10)] text-[#AD6419]" : ""
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="whitespace-nowrap">{item.label}</span>
                </Link>
              );
            }

            const Icon = item.icon;
            const anyChildActive = item.children.some((c) => isActivePath(pathname, c.href));
            const isOpen = openDesktopMenu === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openMenu(item.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenDesktopMenu((prev) => (prev === item.label ? null : item.label))
                  }
                  className={`${pillBase} ${
                    anyChildActive ? "bg-[rgba(173,100,25,0.10)] text-[#AD6419]" : ""
                  }`}
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                >
                  <Icon className="h-4 w-4" />
                  <span className="whitespace-nowrap">{item.label}</span>
                  <ChevronDown className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown */}
                <div
                  className={[
                    "absolute left-0 top-full z-50 mt-3 w-[520px] rounded-2xl border bg-white p-3 shadow-xl",
                    "transition duration-150 ease-out",
                    isOpen
                      ? "visible opacity-100 translate-y-0 pointer-events-auto"
                      : "invisible opacity-0 -translate-y-1 pointer-events-none",
                  ].join(" ")}
                  onMouseEnter={() => openMenu(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  <div className="grid grid-cols-2 gap-2">
                    {item.children.map((child) => {
                      const active = isActivePath(pathname, child.href);
                      const ChildIcon = child.icon;

                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={[
                            "group flex items-start gap-3 rounded-xl p-3 transition",
                            active ? "bg-[rgba(173,100,25,0.10)]" : "hover:bg-gray-50",
                          ].join(" ")}
                        >
                          <div
                            className={[
                              "mt-0.5 rounded-xl border bg-white p-2",
                              "text-[#AD6419]",
                              "group-hover:bg-[rgba(89,158,26,0.10)] group-hover:text-[#599E1A]",
                            ].join(" ")}
                          >
                            <ChildIcon className="h-4 w-4" />
                          </div>

                          <div className="min-w-0">
                            <div
                              className={`text-sm font-semibold ${
                                active ? "text-[#AD6419]" : "text-gray-800"
                              }`}
                            >
                              {child.label}
                            </div>
                            {child.description && (
                              <div className="mt-0.5 text-xs text-gray-500">
                                {child.description}
                              </div>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* ✅ small green accent bar at the bottom like your slide */}
                  <div
                    className="mt-3 h-[5px] w-24 rounded-full"
                    style={{ backgroundColor: BRAND.green }}
                  />
                </div>
              </div>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className={[
              "hidden rounded-full font-semibold text-white shadow-sm transition sm:inline-flex",
              compact ? "px-4 py-2 text-[13px]" : "px-5 py-2.5 text-[14px]",
            ].join(" ")}
            style={{ backgroundColor: BRAND.orange }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRAND.orangeDark)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND.orange)}
          >
            Request a Demo
          </Link>

          <button
            className={[
              "inline-flex items-center justify-center rounded-full border md:hidden",
              compact ? "h-10 w-10" : "h-11 w-11",
            ].join(" ")}
            style={{
              color: BRAND.orange,
              borderColor: "rgba(173,100,25,0.35)",
              backgroundColor: "white",
            }}
            aria-label="Open menu"
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-white px-2 sm:px-4 py-4 md:hidden">
          <div className="mb-3 text-xs text-gray-500">
            {activeTopLabel ? `Active: ${activeTopLabel}` : "Menu"}
          </div>

          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              if (item.type === "link") {
                const active = isActivePath(pathname, item.href);
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition",
                      active
                        ? "bg-[rgba(173,100,25,0.10)] text-[#AD6419]"
                        : "text-gray-800 hover:bg-gray-50",
                    ].join(" ")}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              }

              const open = !!openMobileSections[item.label];
              const anyChildActive = item.children.some((c) => isActivePath(pathname, c.href));
              const Icon = item.icon;

              return (
                <div key={item.label} className="rounded-xl border">
                  <button
                    type="button"
                    className={[
                      "flex w-full items-center justify-between px-3 py-2 text-sm font-semibold transition",
                      anyChildActive ? "text-[#AD6419]" : "text-gray-800",
                    ].join(" ")}
                    onClick={() => toggleMobileSection(item.label)}
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </span>
                    <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
                  </button>

                  {open && (
                    <div className="border-t p-2">
                      {item.children.map((child) => {
                        const active = isActivePath(pathname, child.href);
                        const ChildIcon = child.icon;

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={[
                              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition",
                              active
                                ? "bg-[rgba(89,158,26,0.10)] text-[#599E1A]"
                                : "text-gray-700 hover:bg-gray-50",
                            ].join(" ")}
                          >
                            <ChildIcon className="h-4 w-4" />
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href="/contact"
              className="mt-2 inline-flex justify-center rounded-full px-4 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: BRAND.orange }}
            >
              Request a Demo
            </Link>

            <div
              className="mt-3 h-[5px] w-28 rounded-full"
              style={{ backgroundColor: BRAND.green }}
            />
          </div>
        </div>
      )}
    </div>
  );
}