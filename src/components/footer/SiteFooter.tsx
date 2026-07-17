"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

const C = {
  orange: "#AD6419",
  green: "#599E1A",
};

const TikTokIcon = ({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    className={className}
    aria-hidden="true"
  >
    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
  </svg>
);

const SOLUTIONS = [
  {
    label: "Hotel Website + Booking Engine",
    href: "/solutions/website",
  },
  {
    label: "450+ OTAs Distribution",
    href: "/solutions/otas",
  },
  {
    label: "Channel Manager",
    href: "/solutions/channel-manager",
  },
  {
    label: "Property Management System (PMS)",
    href: "/solutions/pms",
  },
  {
    label: "Digital Marketing",
    href: "/solutions/marketing",
  },
  {
    label: "Pricing",
    href: "/pricing/monthly-plans",
  },
];

const COMPANY = [
  {
    label: "About African Safari and Hotel Booking Hub",
    href: "/about",
  },
  {
    label: "Why African Safari and Hotel Booking Hub",
    href: "/why-us",
  },
  // {
  //   label: "Partners & Trust",
  //   href: "/partners",
  // },
  // {
  //   label: "Case Studies",
  //   href: "/case-studies",
  // },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function SiteFooter() {
  return (
    <footer className="w-full bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex shrink-0 items-center"
              aria-label="African Safari and Hotel Booking Hub home"
            >
              <span className="relative block w-[200px] sm:w-[320px]">
                <Image
                  src="/logo.png"
                  alt="African Safari and Hotel Booking Hub logo"
                  width={320}
                  height={100}
                  className="object-contain object-left"
                />
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
              We help hotels, apartments, lodges and resorts grow direct
              bookings with a professional website, booking engine, OTA
              distribution, channel management, PMS, digital marketing,
              analytics and continued support.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white/85 ring-1 ring-white/10">
                <ShieldCheck
                  className="h-4 w-4"
                  style={{ color: C.green }}
                />
                Secure integrations
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white/85 ring-1 ring-white/10">
                <Award
                  className="h-4 w-4"
                  style={{ color: C.orange }}
                />
                Hospitality specialists
              </span>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <SocialIcon
                href="https://www.instagram.com/ashbhub?igsh=ZDhsdHQ3aTA2NjQ2&utm_source=qr"
                label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </SocialIcon>

              <SocialIcon
                href="https://www.facebook.com/share/1Ef3iMgcXC/?mibextid=wwXIfr"
                label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </SocialIcon>

              <SocialIcon
                href="https://www.tiktok.com/@ashbhub?_r=1&_t=ZS-96Y7UClfp4e"
                label="TikTok"
              >
                <TikTokIcon className="h-4 w-4" />
              </SocialIcon>

              <SocialIcon
                href="https://linkedin.com"
                label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>

          <FooterLinks
            title="Solutions"
            items={SOLUTIONS}
          />

          <FooterLinks
            title="Company"
            items={COMPANY}
          />

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />

                <div>
                  <div className="text-white/50">
                    Address
                  </div>

                  <div className="font-semibold text-white">
                    Kigali, Rwanda
                    <span className="block text-sm font-normal text-white/65">
                      Serving Africa and beyond
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />

                <div>
                  <div className="text-white/50">
                    Email
                  </div>

                  <a
                    href="mailto:hotelandsafari@gmail.com"
                    className="font-semibold text-white transition hover:text-[#AD6419]"
                  >
                    hotelandsafari@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />

                <div>
                  <div className="text-white/50">
                    Phone
                  </div>

                  <a
                    href="tel:+250788471880"
                    className="font-semibold text-white transition hover:text-[#AD6419]"
                  >
                    +250 788 471 880
                  </a>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-white/10" />

        <div className="mt-6 flex flex-col gap-4 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} African Safari and Hotel Booking Hub.
            All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              className="transition hover:text-white"
              href="/legal/privacy"
            >
              Privacy
            </Link>

            <span className="text-white/25">•</span>

            <Link
              className="transition hover:text-white"
              href="/legal/terms"
            >
              Terms
            </Link>

            <span className="text-white/25">•</span>

            <Link
              className="transition hover:text-white"
              href="/support"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  items,
}: {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={`${item.label}-${item.href}`}>
            <Link
              href={item.href}
              className="group inline-flex items-start gap-2 text-sm leading-6 text-white/75 transition hover:text-white"
            >
              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-white/35 transition group-hover:text-[#AD6419]" />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full text-black transition hover:text-white"
      style={{
        backgroundColor: "rgba(255,255,255,0.9)",
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.backgroundColor = C.orange;
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.backgroundColor =
          "rgba(255,255,255,0.9)";
      }}
    >
      {children}
    </Link>
  );
}
