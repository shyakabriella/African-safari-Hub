export type HubNewsArticle = {
  slug: string;
  category: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  body: string[];
};

export const HUB_NEWS_ARTICLES: HubNewsArticle[] = [
  {
    slug: "pop-1",
    category: "DIRECT BOOKINGS",
    title: "How a booking engine increases revenue (and reduces OTA costs).",
    date: "December 9, 2024",
    image:
      "https://images.unsplash.com/photo-1551887373-6aa6c26f98bd?auto=format&fit=crop&w=1200&q=75",
    excerpt:
      "Direct reservations keep margin in-house while you still use OTAs for discovery — here is how properties balance both.",
    body: [
      "A modern booking engine turns your website traffic into confirmed stays without sending guests through a third-party checkout. That means lower commission spend on those bookings and clearer ownership of the guest relationship from day one.",
      "The best setups pair instant availability with secure payments and mobile-friendly flows, because most safari and lodge searches start on a phone. When the path from room selection to confirmation is short, conversion improves — especially for high-intent travelers comparing options late at night across time zones.",
      "You do not have to abandon OTAs to win on direct. Use OTAs for reach, then convert repeat guests and referrals on your own site with member rates, packages, and transparent policies.",
    ],
  },
  {
    slug: "pop-2",
    category: "CHANNEL MANAGER",
    title: "Prevent overbookings with real-time rate & availability sync.",
    date: "December 9, 2024",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=75",
    excerpt:
      "One inventory source of truth across hundreds of channels stops double-bookings and protects your reputation.",
    body: [
      "When inventory lives in more than one place, drift is inevitable — a cancellation on one channel might not free the room elsewhere fast enough. A channel manager keeps a single calendar in sync so every OTA reflects the same availability in near real time.",
      "Rate parity headaches also shrink when updates propagate automatically. Instead of manually chasing spreadsheets after every group booking or maintenance block, your team applies changes once and lets automation carry them everywhere.",
      "For seasonal safari camps and boutique lodges, that reliability matters during short high-demand windows when a single overbooking can cascade into costly relocations and bad reviews.",
    ],
  },
  {
    slug: "pop-3",
    category: "PMS + OPERATIONS",
    title: "Front desk workflow: check-in/out, billing, housekeeping status.",
    date: "December 9, 2024",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=75",
    excerpt:
      "Connect reservations, housekeeping, and billing so staff spend less time on admin and more time with guests.",
    body: [
      "A practical PMS ties together the operational story of each stay: who is arriving, which room is ready, what extras were purchased, and whether balance is due at checkout.",
      "Housekeeping boards that update from the front desk reduce radio chatter and mistakes. Billing that pulls folio charges automatically reduces end-of-stay surprises — and speeds departures when drivers and flights are waiting.",
      "The goal is not more software for its own sake; it is fewer disconnected tabs so managers can see occupancy, tasks, and exceptions in one place.",
    ],
  },
  {
    slug: "analytics-occupancy",
    category: "ANALYTICS",
    title: "Dashboard metrics that actually move occupancy decisions.",
    date: "November 18, 2024",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=75",
    excerpt:
      "Pick a small set of KPIs tied to revenue and operations — then review them on a rhythm your team can keep.",
    body: [
      "Too many charts create noise. Properties that get value from analytics usually anchor weekly reviews on ADR, occupancy, channel mix, and booking lead time — then drill into exceptions.",
      "When a channel spikes with low lead time, you can decide whether to tighten restrictions or lean into last-minute demand. When direct traffic rises but conversion lags, you fix the website path instead of buying more ads.",
      "Consistency beats intensity: a 15-minute Monday standup with the same four numbers beats a monthly 40-slide deck nobody acts on.",
    ],
  },
  {
    slug: "safari-pre-arrival",
    category: "GUEST EXPERIENCE",
    title: "Safari lodge pre-arrival: confirmations, upsells, and clear comms.",
    date: "October 7, 2024",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=75",
    excerpt:
      "Structured pre-arrival messaging reduces no-shows, sets transfer expectations, and opens tasteful upsell moments.",
    body: [
      "Guests booking a safari often juggle flights, visas, and ground transport. A concise confirmation with what happens next — and who to contact — removes anxiety and cuts inbound calls.",
      "Upsells work best when they are relevant: private vehicle upgrades, extra nights before/after the bush, or dietary confirmations tied to bush breakfasts.",
      "Automate the repetitive parts (timing, packing hints, lodge rules) so your team answers the questions that truly need a human.",
    ],
  },
  {
    slug: "local-seo-lodges",
    category: "WEBSITE + SEO",
    title: "Local SEO for lodges: map visibility without OTA dependency.",
    date: "September 22, 2024",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=75",
    excerpt:
      "Accurate listings, strong on-page signals, and reviews help travelers find you directly when they search near your region.",
    body: [
      "Start with consistent NAP (name, address, phone) across maps and directories, then invest in pages that answer how guests actually search: activities, access roads, seasons, and policies.",
      "Structured data and fast mobile pages help search engines understand what you offer — especially for multi-property groups where clarity prevents cannibalization.",
      "Reviews are a ranking and conversion lever. A steady, ethical request process after a great stay beats sporadic bursts that look unnatural.",
    ],
  },
];

export function getHubNewsBySlug(slug: string) {
  return HUB_NEWS_ARTICLES.find((a) => a.slug === slug);
}
