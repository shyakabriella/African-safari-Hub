const metrics = [
  {
    label: "Average Daily Rate",
    value: "$842.00",
    delta: "+12.4%",
    deltaTone: "positive",
    icon: "rate",
  },
  {
    label: "RevPAR",
    value: "$624.50",
    delta: "+5.2%",
    deltaTone: "positive",
    icon: "bed",
  },
  {
    label: "Total Bookings",
    value: "1,284",
    delta: "Stable",
    deltaTone: "neutral",
    icon: "calendar",
  },
  {
    label: "Occupancy Rate",
    value: "74.2%",
    delta: "-2.1%",
    deltaTone: "negative",
    icon: "guests",
  },
];

const chartBars = [
  { month: "Jan", revenue: 38, occupancy: 0 },
  { month: "Feb", revenue: 53, occupancy: 0 },
  { month: "Mar", revenue: 0, occupancy: 43 },
  { month: "Apr", revenue: 67, occupancy: 0 },
  { month: "May", revenue: 0, occupancy: 58 },
  { month: "Jun", revenue: 81, occupancy: 0 },
  { month: "Jul", revenue: 0, occupancy: 72 },
  { month: "Aug", revenue: 91, occupancy: 0 },
];

const channels = [
  { name: "Direct Booking", value: 42 },
  { name: "Expedia Group", value: 28 },
  { name: "Booking.com", value: 18 },
  { name: "Others", value: 12 },
];

const oversight = [
  "Real-time occupancy forecasting",
  "Competitor pricing benchmarks",
  "Automated yield management",
];

function MetricIcon({ name }: { name: string }) {
  const common = {
    className: "h-4 w-4 text-[#8a3b00]",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "bed") {
    return (
      <svg {...common}>
        <path d="M4 11V6" />
        <path d="M20 16v-3a2 2 0 0 0-2-2H4v5" />
        <path d="M4 16h16" />
        <path d="M7 11V9h4a2 2 0 0 1 2 2" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg {...common}>
        <rect x="5" y="5" width="14" height="15" rx="2" />
        <path d="M8 3v4" />
        <path d="M16 3v4" />
        <path d="M5 10h14" />
        <path d="m9 15 2 2 4-5" />
      </svg>
    );
  }

  if (name === "guests") {
    return (
      <svg {...common}>
        <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
        <path d="M17 10a2.4 2.4 0 1 0 0-4.8" />
        <path d="M16.5 14.5A4.5 4.5 0 0 1 20.5 19" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="4" y="7" width="16" height="10" rx="2" />
      <path d="M7 11h5" />
      <path d="M15 11h2" />
      <path d="M7 14h2" />
      <path d="M12 5v14" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#9a4300] text-[#9a4300]">
      <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m3 6 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Page() {
  return (
    <main className="min-h-screen bg-[#f7efe8] text-[#170d08]">
    

      <section id="top" className="relative isolate min-h-[510px] overflow-hidden lg:min-h-[500px]">
        <img
          className="hero-image absolute inset-0 h-full w-full object-cover"
          src="/images/hospitality-hero-lodge.jpg"
          alt="Open-air luxury safari lodge looking over a golden landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4eee8]/95 via-[#f4eee8]/68 to-[#f4eee8]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7efe8]/10 to-transparent" />

        <div className="hero-copy relative mx-auto flex min-h-[510px] max-w-[1160px] flex-col justify-center px-6 py-16 lg:min-h-[500px] lg:px-0">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8b3c00]">
            Advanced Analytics
          </p>
          <p className="mb-3 max-w-[760px] font-serif text-[38px] leading-[0.95] tracking-[-0.04em] text-[#130b07] sm:text-[50px] lg:text-[58px]">
            African Safari and Hotel Booking Hub
          </p>
          <h1 className="max-w-[650px] font-serif text-[34px] leading-[0.98] tracking-[-0.04em] text-[#130b07] sm:text-[45px] lg:text-[50px]">
            Data-Driven Insights for Elite Hospitality
          </h1>
          <p className="mt-7 max-w-[560px] text-[15px] leading-8 text-[#473a31]">
            Harness the power of the African Safari and Hotel Booking Hub to make informed decisions for your luxury lodges. Optimize yield, track market trends, and elevate guest experiences through precision intelligence.
          </p>
        </div>
      </section>

      <section id="insights" className="mx-auto max-w-[1160px] px-6 py-20 lg:px-0">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <article
              className="metric-card min-h-[150px] bg-white px-8 py-8 shadow-[0_18px_48px_rgba(54,28,10,0.04)]"
              style={{ animationDelay: `${index * 90}ms` }}
              key={metric.label}
            >
              <div className="mb-8 flex items-start justify-between">
                <MetricIcon name={metric.icon} />
                <span
                  className={`px-2 py-1 text-[10px] ${
                    metric.deltaTone === "positive"
                      ? "bg-[#e9f7ec] text-[#3f9d5a]"
                      : metric.deltaTone === "negative"
                        ? "bg-[#fff0f0] text-[#d05050]"
                        : "bg-[#eee8e2] text-[#7b6b60]"
                  }`}
                >
                  {metric.delta}
                </span>
              </div>
              <p className="text-[12px] tracking-[0.09em]">{metric.label}</p>
              <p className="mt-2 font-serif text-[23px] tracking-[-0.03em]">{metric.value}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-[1fr_370px]">
          <section className="bg-white px-9 py-10 shadow-[0_20px_60px_rgba(54,28,10,0.035)] sm:px-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="font-serif text-[27px] leading-tight tracking-[-0.03em]">
                  Revenue &amp; Occupancy Trends
                </h2>
                <p className="mt-1 text-[12px] tracking-[0.05em] text-[#65564d]">
                  Performance analysis over the last 6 months
                </p>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-[#5c4d44]">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#9a4300]" /> Revenue
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ded6cf]" /> Occupancy
                </span>
              </div>
            </div>

            <div className="mt-16 h-[235px] border-b border-[#a98b70]">
              <div className="flex h-full items-end justify-between gap-4 sm:gap-6">
                {chartBars.map((item, index) => {
                  const isRevenue = item.revenue > 0;
                  const height = isRevenue ? item.revenue : item.occupancy;
                  return (
                    <div className="flex h-full flex-1 flex-col justify-end" key={item.month}>
                      <div
                        className={`chart-bar w-full ${isRevenue ? "bg-[#b86616]" : "bg-[#ded6cf]"}`}
                        style={{ height: `${height}%`, animationDelay: `${260 + index * 85}ms` }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-8 text-[10px] text-[#3b2f28]">
              {chartBars.map((item) => (
                <span key={item.month}>{item.month}</span>
              ))}
            </div>
          </section>

          <aside className="bg-white px-9 py-10 shadow-[0_20px_60px_rgba(54,28,10,0.035)]">
            <h2 className="font-serif text-[27px] leading-tight tracking-[-0.03em]">Channel Performance</h2>
            <p className="mt-2 text-[12px] tracking-[0.05em] text-[#65564d]">Top traffic drivers</p>

            <div className="mt-10 space-y-7">
              {channels.map((channel, index) => (
                <div key={channel.name}>
                  <div className="mb-2 flex justify-between text-[12px] tracking-[0.05em]">
                    <span>{channel.name}</span>
                    <span>{channel.value}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-[#ece4dd]">
                    <div
                      className="progress-fill h-full rounded-full bg-[#8f3d00]"
                      style={{ width: `${channel.value}%`, animationDelay: `${520 + index * 100}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#f1e9e2] py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1160px] items-center gap-14 px-6 lg:grid-cols-[0.9fr_1fr] lg:px-0">
          <div className="content-reveal max-w-[560px]">
            <h2 className="font-serif text-[42px] leading-[0.98] tracking-[-0.045em] sm:text-[50px]">
              Expert Strategic Oversight
            </h2>
            <p className="mt-8 text-[15px] leading-8 text-[#473a31]">
              Beyond the numbers, our platform provides professional hospitality consulting tools to help you interpret data. Whether it's seasonality adjustments or market shifting, you have the oversight needed for excellence.
            </p>
            <ul className="mt-7 space-y-4 text-[14px] text-[#221713]">
              {oversight.map((item) => (
                <li className="flex items-center gap-3" key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="image-reveal justify-self-end overflow-hidden rounded-[3px] shadow-[0_22px_55px_rgba(31,19,10,0.16)]">
            <img
              className="aspect-[1.13/1] w-full max-w-[540px] object-cover"
              src="/images/hospitality-laptop-insights.jpg"
              alt="Laptop showing hospitality analytics in a safari lodge suite"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;