export const BLOG_FILTER_CATEGORIES = [
  "All Intelligence",
  "Hospitality Trends",
  "Revenue Management",
  "Digital Marketing",
] as const;

export type BlogFilterCategory = (typeof BLOG_FILTER_CATEGORIES)[number];

export type HubNewsArticle = {
  slug: string;
  category: string;
  filterGroup: Exclude<BlogFilterCategory, "All Intelligence">;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  keyPoints?: string[];
  body: string[];
  closingNote?: string;
};

export const HUB_NEWS_ARTICLES: HubNewsArticle[] = [
  {
    slug: "pop-1",
    category: "DIRECT BOOKINGS",
    filterGroup: "Revenue Management",
    title: "How a booking engine increases revenue (and reduces OTA costs).",
    date: "December 9, 2024",
    image: "/featured-post.png",
    excerpt:
      "Every reservation that completes on your own site keeps margin in-house, builds guest data you own, and still lets OTAs do what they do best — discovery. Here is how leading lodges and safari camps make that balance work.",
    keyPoints: [
      "Properties with a polished direct path typically recover 15–35% more net revenue on the same room night versus OTA checkout.",
      "Mobile-first booking flows matter: most safari and lodge research happens on a phone before guests commit.",
      "Repeat guests and referrals are your highest-LTV channel — member rates and packages belong on your site, not only on third parties.",
    ],
    body: [
      "A modern booking engine turns website traffic into confirmed stays without handing guests to a third-party checkout. You keep commission on those bookings, own the relationship from day one, and can follow up with pre-arrival messaging, upsells, and loyalty offers that OTAs will never run for you.",
      "The difference between a brochure site and a revenue site is friction. When availability is live, payments are secure, and the path from room selection to confirmation takes minutes — not a phone call — conversion climbs. That is especially true for high-intent travelers comparing camps across time zones late at night.",
      "You do not need to abandon OTAs to win on direct. Use them for reach during peak search windows, then steer returning guests, wedding blocks, and corporate referrals to your own engine with transparent policies, bundled experiences, and rates that reward loyalty.",
      "Operators we work with often start with one property and one clear offer: best available direct rate, free cancellation where possible, and a reason to book now (limited inventory, included transfer, or park-fee clarity). That single message, repeated consistently, outperforms a dozen scattered promotions.",
      "Measure what matters: direct share of bookings, conversion rate by device, and average commission saved per month. When those three move in the right direction, you are not just marketing harder — you are building a healthier P&L.",
    ],
    closingNote:
      "Direct is not a vanity metric. It is how you protect margin, own the guest journey, and fund the experiences that earn five-star reviews.",
  },
  {
    slug: "pop-2",
    category: "CHANNEL MANAGER",
    filterGroup: "Revenue Management",
    title: "Prevent overbookings with real-time rate & availability sync.",
    date: "December 9, 2024",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "One inventory source of truth across every channel stops double-bookings, protects your reputation, and lets your team stop living in spreadsheets during high season.",
    keyPoints: [
      "A single overbooking during peak season can cost thousands in relocations, refunds, and review damage.",
      "Automated sync means rate and availability updates propagate in minutes — not after someone notices a mismatch.",
      "Safari camps and boutique lodges feel this most during short demand windows when every room counts.",
    ],
    body: [
      "When inventory lives in more than one place, drift is inevitable. A cancellation on one channel might not free the room elsewhere fast enough; a group block might sit in a spreadsheet while OTAs still sell the last units. A channel manager keeps one calendar authoritative so every partner reflects the same truth in near real time.",
      "Rate parity headaches shrink when updates propagate automatically. Instead of manually chasing channels after every maintenance closure or wedding buyout, your team applies changes once and automation carries them everywhere — fewer errors, fewer emergency calls.",
      "For seasonal safari camps and boutique lodges, reliability during high-demand windows is non-negotiable. Guests have planned flights, guides, and park entries around your dates. One double-booking cascades into operational chaos your brand may feel for years.",
      "The best implementations pair channel sync with clear internal rules: who can override inventory, how holds work for agents, and what happens when a channel lags. Technology plus process beats technology alone.",
      "Track sync health the way you track occupancy: time-to-update after a change, count of parity exceptions per week, and zero overbookings as the baseline expectation — not a lucky streak.",
    ],
    closingNote:
      "Guests never forgive the night you did not have their room. Real-time sync is insurance for your reputation and your revenue.",
  },
  {
    slug: "pop-3",
    category: "PMS + OPERATIONS",
    filterGroup: "Hospitality Trends",
    title: "Front desk workflow: check-in/out, billing, housekeeping status.",
    date: "December 9, 2024",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "When reservations, housekeeping, and billing share one system, staff spend less time on admin and more time delivering the moments guests remember.",
    keyPoints: [
      "Integrated check-in can cut guest processing from 12 minutes to under a minute at busy properties.",
      "Housekeeping boards tied to the front desk reduce walkie-talkie chaos and missed room-ready signals.",
      "Accurate folios at checkout prevent disputes and speed departures when transfers and flights are waiting.",
    ],
    body: [
      "A practical PMS tells the operational story of each stay: who is arriving, which room is ready, what extras were purchased, and whether balance is due at checkout. When that picture is fragmented across tabs and paper, mistakes multiply and service suffers.",
      "Housekeeping boards that update from the front desk reduce radio chatter and missed turns. Billing that pulls folio charges automatically reduces end-of-stay surprises — and speeds departures when drivers and flights are on a clock.",
      "The goal is not more software for its own sake. It is fewer disconnected tools so managers see occupancy, tasks, and exceptions in one place — and can coach the team with facts instead of anecdotes.",
      "Properties that modernize operations often report the same win: staff morale improves when systems remove repetitive entry, and guest satisfaction rises when humans focus on hospitality instead of hunting for information.",
      "Start with the workflows that hurt daily: check-in bottlenecks, room-not-ready complaints, and billing disputes. Fix those first; the ROI shows up in reviews and labor hours within weeks.",
    ],
    closingNote:
      "Great safaris are remembered for people, not software — but the right PMS lets your people shine instead of fighting the back office.",
  },
  {
    slug: "analytics-occupancy",
    category: "ANALYTICS",
    filterGroup: "Revenue Management",
    title: "Dashboard metrics that actually move occupancy decisions.",
    date: "November 18, 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Most dashboards fail because they measure everything and change nothing. A small set of KPIs, reviewed on a rhythm your team can keep, turns data into decisions that lift occupancy and ADR.",
    keyPoints: [
      "Anchor weekly reviews on ADR, occupancy, channel mix, and booking lead time — then drill into exceptions only.",
      "When direct traffic rises but conversion lags, fix the booking path before increasing ad spend.",
      "A 15-minute Monday standup beats a monthly deck nobody acts on.",
    ],
    body: [
      "Too many charts create noise. Properties that get real value from analytics usually pick four numbers everyone understands and review them the same day each week. Everyone knows what “good” looks like; surprises become rare.",
      "When a channel spikes with low lead time, you can decide whether to tighten restrictions or lean into last-minute demand. When direct traffic rises but conversion lags, you fix the website path instead of buying more ads — a cheaper, faster win.",
      "Lead time trends tell you how far ahead to promote packages and when to release inventory to OTAs versus holding back for direct. Ignoring lead time is how operators discount too early or too late.",
      "Consistency beats intensity. A short standup with the same four metrics, documented actions, and owners assigned per action outperforms a quarterly strategy offsite with no follow-through.",
      "Tie metrics to decisions, not vanity. If occupancy is soft next month, the output of the meeting should be three concrete changes — rate fence, package tweak, or channel shift — not another report.",
    ],
    closingNote:
      "Data earns its keep when it changes what you do on Tuesday morning — not when it fills a slide.",
  },
  {
    slug: "safari-pre-arrival",
    category: "GUEST EXPERIENCE",
    filterGroup: "Hospitality Trends",
    title: "Safari lodge pre-arrival: confirmations, upsells, and clear comms.",
    date: "October 7, 2024",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Safari guests juggle flights, visas, and ground logistics. Structured pre-arrival communication reduces no-shows, sets expectations, and opens tasteful upsell moments that feel helpful — not salesy.",
    keyPoints: [
      "Clear confirmations with next steps cut anxious inbound calls and improve first-night satisfaction.",
      "Relevant upsells — private vehicle, extra night, dietary confirmation — convert best when tied to the guest’s itinerary.",
      "Automate repetitive details so your team answers questions that truly need a human touch.",
    ],
    body: [
      "Guests booking a safari often coordinate multiple vendors. A concise confirmation that explains what happens next, who meets them, and how to reach the lodge removes anxiety and builds trust before they land.",
      "Upsells work when they solve a real need: private vehicle upgrades for photographers, extra nights to recover from long-haul flights, or dietary confirmations tied to bush breakfasts. Generic “buy more” emails underperform; itinerary-aware offers do not.",
      "Automate the repetitive parts — timing, packing hints, lodge rules, park regulations — so your team reserves energy for complex requests and VIP touches that differentiate your brand.",
      "Pre-arrival is also your best defense against no-shows and last-minute chaos. Payment reminders, transfer confirmations, and clear cancellation windows protect revenue without sounding harsh when worded with care.",
      "Measure success with reply rates, upsell attach rate, and post-stay mentions of “communication” in reviews. Those three signals tell you whether your pre-arrival program is working.",
    ],
    closingNote:
      "The safari starts before the guest reaches the gate. Pre-arrival is where confidence — and incremental revenue — are won.",
  },
  {
    slug: "local-seo-lodges",
    category: "WEBSITE + SEO",
    filterGroup: "Digital Marketing",
    title: "Local SEO for lodges: map visibility without OTA dependency.",
    date: "September 22, 2024",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "When travelers search your region, you want them to find you — and book direct. Accurate listings, strong on-page content, and ethical review growth reduce reliance on OTAs for discovery.",
    keyPoints: [
      "Consistent name, address, and phone across maps and directories is the foundation most properties skip.",
      "Pages that answer how guests actually search — seasons, access, activities, policies — outperform generic “about us” copy.",
      "Steady, authentic review requests after great stays beat sporadic bursts that look unnatural to algorithms and guests.",
    ],
    body: [
      "Start with consistent NAP (name, address, phone) across Google, maps, and directories. Inconsistent listings confuse search engines and guests alike — and cost you clicks you already earned.",
      "Invest in pages that mirror real questions: road access in wet season, minimum stays, child policies, what is included in the nightly rate, and what makes your location distinct. That content ranks and converts.",
      "Structured data and fast mobile pages help search engines understand multi-property groups without cannibalizing each camp’s identity. Each property needs its own story, not a duplicate template.",
      "Reviews are both a ranking and conversion lever. A calm, ethical request process after a memorable checkout produces steady social proof; panic-driven review pushes do not.",
      "Track organic direct bookings and branded search volume alongside rankings. SEO is working when more people type your name and complete on your site — not when you only move from position eight to five for a generic term.",
    ],
    closingNote:
      "Visibility you own beats visibility you rent. Local SEO is how independent lodges stay discoverable on their terms.",
  },
];

export function getHubNewsBySlug(slug: string) {
  return HUB_NEWS_ARTICLES.find((a) => a.slug === slug);
}

export function getHubNewsByFilter(filter: BlogFilterCategory | string) {
  if (filter === "All Intelligence") return HUB_NEWS_ARTICLES;
  return HUB_NEWS_ARTICLES.filter((a) => a.filterGroup === filter);
}
