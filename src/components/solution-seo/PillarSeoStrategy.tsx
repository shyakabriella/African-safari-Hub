import { CheckCircle } from "lucide-react";
import Image from "next/image";
import PillarSeoStrategyCard from "./PillarSeoStrategyCard";

export default function PillarSeoStrategy() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1280px] h-[1864px] flex flex-col justify-center items-center gap-[80px] bg-[#E2E8F0]/30">
        <div className="w-[768px] h-[96px] flex flex-col text-center gap-[24px] mt-9">
          <div className="w-[768px] h-[48px]">
            <span className="w-[588.25px] h-[48px] text-[48px] font-extrabold text-[#0F172A]">
              Our 3-Pillar SEO Strategy
            </span>
          </div>
          <div className="w-[768px] h-[24px]">
            <span className="w-[684.67px] h-[24px] font-normal text-[16px] text-[#475569]">
              We don&apos;t just optimize code; we build a digital presence that
              converts browsing into bookings.
            </span>
          </div>
        </div>

        <div className="w-[960px] h-[1496px] flex flex-col gap-[64px]">
          <PillarSeoStrategyCard
            number="01"
            title="Local SEO & Google Maps"
            description={`We optimize your Google Business Profile to ensure
              you appear in the "Map Pack" for travelers searching
              nearby. Capture high-intent traffic directly from Google
              Maps.
            `}
            bullets={["Map Ranking Optimization", "Local Citation Management"]}
            image="/local-seo.png"
          />
          <PillarSeoStrategyCard
            number="02"
            title="Technical Performance"
            description={`Site speed is a booking killer. We optimize your Core
              Web Vitals, ensuring lightning-fast load times and a
              seamless mobile experience for guests on the go.              
            `}
            bullets={["Mobile-First Optimization", "SSL & Security Hardening"]}
            image="/laptop-side.png"
            reverse
          />
          <PillarSeoStrategyCard
            number="03"
            title="Content Strategy"
            description={`
              Beyond room descriptions. We create localized content
              guides that establish your hotel as the authority for
              your destination, capturing travelers in the dreaming
              phase.
            `}
            bullets={["Destination Guides", "Keyword-Rich Room Copy"]}
            image="/laptop-straight.png"
          />     
        </div>
      </div>
    </section>
  );
}
