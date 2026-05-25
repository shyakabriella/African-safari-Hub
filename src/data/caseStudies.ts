export type CaseStudy = {
  id: string;
  category: string;
  rooms?: string;
  title: string;
  summary: string;
  image?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  highlights?: string[];
  metrics?: { value: string; label: string }[];
  testimonial?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "grand-plaza",
    category: "Luxury",
    rooms: "500+ Rooms",
    title: "Grand Plaza Resort & Spa",
    summary:
      "A prestigious beachfront resort rebuilt its revenue strategy by shifting bookings from costly OTAs to direct channels, while delivering luxury guest experiences across every stay.",
    image: "/featured-case-photo.png",
    challenge:
      "Grand Plaza was dependent on OTAs for 80% of bookings, which eroded margins and blocked access to guest data. The hotel needed a stronger direct channel and a premium guest journey that matched its brand.",
    solution:
      "We introduced a unified direct-booking platform, personalized pre-arrival communications, and targeted loyalty incentives to turn high-value guests into repeat bookers.",
    results:
      "Within 18 months, direct revenue climbed by 40%, OTA commission spend fell by 25%, and repeat stays rose by 32%, proving the guest experience and the direct channel could scale together.",
    highlights: [
      "Lowered OTA dependency from 80% to 48%",
      "Increased repeat bookings by 32%",
      "Delivered a premium guest journey across web and onsite touchpoints",
    ],
    metrics: [
      { value: "+40%", label: "Direct bookings" },
      { value: "-25%", label: "OTA fee spend" },
      { value: "+32%", label: "Repeat stays" },
      { value: "92", label: "Guest satisfaction score" },
    ],
    testimonial:
      "HotelTech helped us reclaim our direct business and deliver a luxury experience our guests love — the ROI was clear in less than a year.",
  },
  {
    id: "urban-attic",
    category: "Boutique",
    title: "The Urban Attic",
    summary:
      "A boutique urban hotel turned personalization into a competitive advantage, using guest data to increase satisfaction and direct repeat bookings.",
    image: "/growth-image-one.png",
    challenge:
      "The Urban Attic struggled with inconsistent guest communication, limited profiling, and low direct retention in a crowded city market.",
    solution:
      "We automated guest segmentation, tailored offers based on stay preferences, and connected front-desk, marketing, and guest messaging for a seamless boutique experience.",
    results:
      "Guest satisfaction surged, return rates improved dramatically, and direct bookings became the primary growth engine.",
    highlights: [
      "85% NPS improvement",
      "28% more repeat bookings",
      "Personalized stays at scale for boutique guests",
    ],
    metrics: [
      { value: "85%", label: "NPS increase" },
      { value: "+28%", label: "Repeat bookings" },
      { value: "+20%", label: "ADR growth" },
    ],
    testimonial:
      "Our guests now feel known and valued from reservation to checkout. That emotional connection is driving direct revenue and glowing reviews.",
  },
  {
    id: "metro-business",
    category: "Mid-size",
    title: "Metro Business Suites",
    summary:
      "A mid-size business hotel modernized operations and guest service by eliminating manual workflows and delivering fast, consistent stays for business travelers.",
    image: "/growth-image-two.png",
    challenge:
      "Metro Business Suites faced slow check-in, fractured staff communication, and inefficient housekeeping coordination across its property.",
    solution:
      "We integrated PMS, housekeeping, and guest messaging to automate routine tasks, accelerate check-in, and give staff one source of truth.",
    results:
      "Operational efficiency improved by 35%, guest processing time dropped to under a minute, and the team regained focus on high-value service.",
    highlights: [
      "35% faster operations",
      "Check-in reduced to 45 seconds",
      "Stronger staff productivity and guest service consistency",
    ],
    metrics: [
      { value: "35%", label: "Operational efficiency" },
      { value: "45s", label: "Average guest processing" },
      { value: "60%", label: "Reduction in manual tasks" },
    ],
    testimonial:
      "We finally have a single system that runs our operations smoothly and lets our team focus on exceptional guest service.",
  },
];
