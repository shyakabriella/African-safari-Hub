const navItems = ["Marketing Team", "Campaigns", "Content Studio", "Insights"];

const bookingFeatures = [
  "Audience and demand planning",
  "Campaign landing page optimization",
  "Weekly performance reviews",
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <rect x="7" y="3" width="10" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 6h4M11 18h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <circle cx="10.5" cy="10.5" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m14 14 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 16v-4M12 16V9M17 16V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="m6 12 5-3 3 2 4-5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function PieIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M12 3v9h9A9 9 0 0 0 12 3Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M18.3 14A7 7 0 1 1 10 5.3" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 text-[#a34400]">
      <rect x="7" y="10" width="18" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m8 11 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FeatureLine({ children }: { children: string }) {
  return (
    <li className="flex items-center gap-3 border-b border-[#e9ded6] py-3 text-sm text-[#3f352f] last:border-b-0">
      <span className="flex h-3 w-3 items-center justify-center rounded-full border border-[#b8672a] text-[8px] leading-none text-[#a84e08]">o</span>
      {children}
    </li>
  );
}

function BarChart() {
  const bars = [34, 56, 45, 82, 100];
  const labels = ["Q1", "Q2", "Q3", "Q4", "YTD"];

  return (
    <div className="chart-panel relative h-full min-h-[310px] w-full rounded-md bg-white px-9 pb-8 pt-12 shadow-[0_16px_45px_rgba(82,54,34,0.06)]">
      <div className="absolute right-16 top-6 rounded-sm bg-[#f5e7dd] px-2 py-1 text-xs font-semibold text-[#b05a14]">+42%</div>
      <div className="flex h-48 items-end justify-between gap-5">
        {bars.map((height, index) => (
          <div key={labels[index]} className="flex flex-1 flex-col items-center gap-4">
            <div
              className={`w-full max-w-[84px] ${index < 3 ? "bg-[#e2d8d1]" : index === 3 ? "bg-[#c18547]" : "bg-[#984200]"}`}
              style={{ height: `${height}%` }}
            />
            <span className="text-[11px] text-[#574a43]">{labels[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#fbf3ed] text-[#1e1712]">
     

      <section className="mx-auto grid max-w-[1400px] items-center gap-14 px-8 pb-28 pt-40 md:px-12 lg:grid-cols-[0.88fr_1fr] lg:px-16 lg:pt-[162px]">
        <div className="motion-rise max-w-[645px]">
          <h1 className="font-display max-w-[570px] text-[46px] font-normal leading-[0.96] tracking-[-0.055em] text-black md:text-[62px] lg:text-[72px]">
            African Safari and Hotel Booking Hub Marketing Team
          </h1>
          <p className="mt-8 max-w-[610px] text-[16px] leading-7 tracking-[0.01em] text-[#4f443f]">
            Meet the team shaping demand for safari lodges and hotel partners through brand strategy, paid campaigns, content, lifecycle messaging, and clear performance reporting.
          </p>
         
        </div>
        <div className="motion-scale justify-self-end overflow-hidden rounded-md bg-[#e7dbd1] shadow-[0_18px_48px_rgba(87,59,40,0.10)] lg:w-[670px]">
          <img
            src="/images/safari-booking-hero.jpg"
            alt="Luxury African safari lodge suite with a warm savanna view"
            className="aspect-[1.05/1] w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-14 px-8 pb-32 md:px-12 lg:grid-cols-[1.35fr_0.93fr] lg:px-16">
        <article className="motion-rise rounded-lg bg-white px-14 py-14 shadow-[0_18px_50px_rgba(87,59,40,0.06)]">
          <div className="mb-9 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fbf1eb] text-[#a14a06]">
            <PhoneIcon />
          </div>
          <h2 className="font-display text-[27px] font-normal tracking-[-0.035em]">Growth Marketing Team</h2>
          <p className="mt-5 max-w-[640px] text-[14px] leading-6 text-[#5a504b]">
            Our growth team plans and launches campaigns that connect high-intent travelers with safari lodges, boutique hotels, and curated travel packages.
          </p>
          <ul className="mt-6 max-w-[640px]">
            {bookingFeatures.map((feature) => (
              <FeatureLine key={feature}>{feature}</FeatureLine>
            ))}
          </ul>
        </article>

        <article className="motion-rise motion-delay-1 rounded-lg bg-[#f0e7e1] px-14 py-14">
          <div className="mb-9 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#a14a06]">
            <SearchIcon />
          </div>
          <h2 className="font-display text-[27px] font-normal tracking-[-0.035em]">Performance Campaigns</h2>
          <p className="mt-5 text-[14px] leading-6 text-[#5a504b]">
            The team manages search, meta-search, social, and retargeting campaigns so the right lodge or hotel appears when travelers are ready to compare and book.
          </p>
         
        </article>
      </section>

      <section className="mx-auto max-w-[1400px] px-8 pb-32 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-display text-[38px] font-normal tracking-[-0.045em]">Creative Team, Clear Purpose</h2>
          <p className="mt-4 text-[15px] leading-6 text-[#554942]">
            Strategy, storytelling, and lifecycle specialists work together to move travelers from first inspiration to confirmed itinerary.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <article className="motion-rise overflow-hidden rounded-md bg-white shadow-[0_16px_45px_rgba(87,59,40,0.06)]">
            <img
              src="/images/safari-lodge-pool.jpg"
              alt="Luxury safari lodge infinity pool overlooking the savanna at sunset"
              className="h-[310px] w-full object-cover"
            />
            <div className="px-10 py-9">
              <h3 className="font-display text-[26px] font-normal tracking-[-0.035em]">Content &amp; Social Team</h3>
              <p className="mt-4 text-[14px] leading-6 text-[#554b45]">
                Our content marketers turn lodges, landscapes, wildlife encounters, and guest moments into campaigns that make each destination feel vivid and bookable.
              </p>
            </div>
          </article>

          <article className="motion-rise motion-delay-1 flex min-h-[468px] flex-col justify-end rounded-md bg-[#e4dfda] px-10 py-9 shadow-[0_16px_45px_rgba(87,59,40,0.04)]">
            <div className="mb-auto mt-12 flex justify-center">
              <div className="w-full max-w-[520px] rounded-md bg-white px-10 py-10 shadow-[0_14px_36px_rgba(74,54,42,0.05)]">
                <div className="flex justify-center">
                  <EnvelopeIcon />
                </div>
                <div className="mx-auto mt-8 h-4 w-[88%] bg-[#d9d0c9]" />
                <div className="mx-auto mt-4 h-4 w-[72%] bg-[#d9d0c9]" />
              </div>
            </div>
            <h3 className="font-display text-[26px] font-normal tracking-[-0.035em]">Lifecycle Marketing Team</h3>
            <p className="mt-4 text-[14px] leading-6 text-[#554b45]">
              Lifecycle specialists design email journeys from inquiry to arrival, using helpful reminders, add-ons, and post-stay messaging to build long-term guest relationships.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-8 pb-32 md:px-12 lg:px-16">
        <div className="motion-rise grid items-center gap-14 rounded-md bg-[#eee5df] px-9 py-16 md:px-16 lg:grid-cols-[1.05fr_0.85fr] lg:px-20">
          <div className="order-2 lg:order-1">
            <BarChart />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-[42px] font-normal leading-tight tracking-[-0.05em]">Marketing Analytics &amp; ROI</h2>
            <p className="mt-8 max-w-[560px] text-[15px] leading-7 text-[#4f443e]">
              The analytics team shows what is working across every channel. We track demand, conversion rates, booking revenue, and campaign efficiency for each lodge and hotel partner.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center gap-3 bg-white px-6 py-4 text-[12px] font-bold tracking-[0.04em] text-[#3b2d25] transition hover:text-[#9b4300]">
                <span className="text-[#a94f08]"><ChartIcon /></span>
                Real-time Dashboards
              </a>
              <a href="#" className="inline-flex items-center gap-3 bg-white px-6 py-4 text-[12px] font-bold tracking-[0.04em] text-[#3b2d25] transition hover:text-[#9b4300]">
                <span className="text-[#a94f08]"><PieIcon /></span>
                Spend Optimization
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}