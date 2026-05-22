import type { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { cloneElement, isValidElement } from "react";

const navItems = ["Distribution", "Property Management", "Marketing", "Insights"];

const channels = ["Booking.com", "Expedia", "Airbnb", "Agoda"];

const valueCards = [
  {
    title: "Increased Visibility",
    body: "Expand your property's reach to global markets and niche travel segments effortlessly.",
    icon: "eye",
  },
  {
    title: "Revenue Optimization",
    body: "Implement dynamic pricing strategies across all channels to maximize yield.",
    icon: "trend",
  },
  {
    title: "Operational Efficiency",
    body: "Eliminate manual data entry and reclaim hours of staff time every week.",
    icon: "gauge",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "solid" | "outline";
  asChild?: boolean;
  className?: string;
};

function Button({
  children,
  variant = "solid",
  asChild = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseClass =
    variant === "solid"
      ? "inline-flex h-10 items-center justify-center border border-[#AD6419] bg-[#AD6419] px-6 text-[11px] font-bold text-white shadow-[0_8px_18px_rgba(173,100,25,0.18)] transition duration-300 hover:-translate-y-0.5 hover:brightness-90"
      : "inline-flex h-10 items-center justify-center border border-[#c9a78e] bg-transparent px-6 text-[11px] font-semibold text-[#AD6419] transition duration-300 hover:-translate-y-0.5 hover:border-[#AD6419] hover:bg-white/55";

  const finalClassName = cn(baseClass, className);

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;

    return cloneElement(child, {
      className: cn(finalClassName, child.props.className),
    });
  }

  return (
    <button {...props} className={finalClassName}>
      {children}
    </button>
  );
}

function LineIcon({ name }: { name: string }) {
  if (name === "eye") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M2.5 12s3.4-5.5 9.5-5.5S21.5 12 21.5 12s-3.4 5.5-9.5 5.5S2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="2.4" />
      </svg>
    );
  }

  if (name === "trend") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M4 16.5 9.2 11l3.6 3.2L20 6.5" />
        <path d="M15.5 6.5H20v4.6" />
      </svg>
    );
  }

  if (name === "gauge") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M4.8 15.8a7.6 7.6 0 1 1 14.4 0" />
        <path d="m12 13 4-4" />
        <path d="M8 16h8" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M12 3.5 18 6v5.2c0 3.9-2.4 7.4-6 8.8-3.6-1.4-6-4.9-6-8.8V6l6-2.5Z" />
        <path d="m9.2 12 2 2 3.8-4" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M4 7h12" />
      <path d="m13 4 3 3-3 3" />
      <path d="M20 17H8" />
      <path d="m11 14-3 3 3 3" />
    </svg>
  );
}

function WorldMapVisual() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[5px] bg-[#111611] shadow-[0_24px_60px_rgba(24,18,12,0.18)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_40%,rgba(215,229,218,0.18),transparent_34%),radial-gradient(circle_at_70%_60%,rgba(173,100,25,0.18),transparent_24%),linear-gradient(135deg,#0b0f0d,#202821_58%,#0b0f0d)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:46px_46px]" />

      <svg
        viewBox="0 0 900 520"
        className="absolute inset-x-0 top-[18%] h-[66%] w-full"
        aria-hidden="true"
      >
        <defs>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#fff8dc" />
            <stop offset="0.38" stopColor="#AD6419" />
            <stop offset="1" stopColor="#AD6419" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="map-orbits" fill="none" strokeLinecap="round">
          <path d="M245 219C340 92 520 76 666 197" />
          <path d="M360 242C457 108 608 119 735 237" />
          <path d="M476 215C573 159 660 160 780 217" />
          <path d="M266 257C365 190 481 176 599 245" />
          <path d="M528 271C594 227 658 236 733 305" />
        </g>

        <g className="world-land">
          <path d="M76 206 105 185l29-6 21-26 47-15 42 11 26 24 36 1 19 20-27 16 12 20-39 19-16 32-37-6-21 18-35-10-13-29-37-3-17-20-39-8Z" />
          <path d="m238 279 32 10 18 31 27 18 12 42-18 42-33 42-24-20 4-43-20-29 10-31-21-26Z" />
          <path d="m389 184 41-20 31 10 20-9 28 23-18 18-36-2-23 17-35-6Z" />
          <path d="m481 226 39-18 47 8 35 26 18 49-20 48-39-4-30-31-42-11-23-37Z" />
          <path d="m545 170 72-28 89 15 73 37 66 9-14 33-73 9-18 28-63-5-24-24-55 8-52-18-38 6-31-33Z" />
          <path d="m686 313 54 10 24 30 46 13 26 32-44 23-59-14-32-39Z" />
          <path d="m299 172 30-18 31 12-19 18-34 8Z" />
          <path d="m770 253 42-5 30 18-24 18-39-4Z" />
        </g>

        <g className="map-lines" fill="none" strokeLinecap="round">
          <path d="M248 218C335 154 432 163 501 216" />
          <path d="M502 216C569 184 649 195 704 250" />
          <path d="M502 216C531 254 559 292 588 332" />
          <path d="M248 218C219 258 201 305 196 360" />
          <path d="M704 250C724 283 735 318 739 356" />
        </g>

        <g filter="url(#softGlow)">
          {[
            [248, 218, 0],
            [502, 216, 0.5],
            [704, 250, 1],
            [588, 332, 1.4],
            [196, 360, 1.8],
            [739, 356, 2.2],
          ].map(([cx, cy, delay]) => (
            <g
              key={`${cx}-${cy}`}
              className="node-pulse"
              style={{ animationDelay: `${delay}s` }}
            >
              <circle cx={cx} cy={cy} r="34" fill="url(#nodeGlow)" opacity="0.78" />
              <circle cx={cx} cy={cy} r="7" fill="#fff4ce" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

function ControlVisual() {
  return (
    <div className="relative h-[238px] overflow-hidden rounded-sm bg-[linear-gradient(135deg,#d9e3e0,#eff3ee)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(255,255,255,0.9),transparent_31%),radial-gradient(circle_at_30%_78%,rgba(173,100,25,0.16),transparent_28%)]" />
      <div className="float-layer absolute left-[18%] top-[42px] h-14 w-[64%] border border-white/80 bg-white/70 shadow-[18px_20px_34px_rgba(86,111,103,0.12)]" />
      <div className="float-layer absolute left-[19%] top-[92px] h-12 w-[68%] border border-white/70 bg-white/55 shadow-[18px_20px_34px_rgba(86,111,103,0.14)] [animation-delay:0.35s]" />
      <div className="float-layer absolute left-[16%] top-[137px] h-12 w-[72%] border border-white/70 bg-white/45 shadow-[18px_20px_34px_rgba(86,111,103,0.15)] [animation-delay:0.7s]" />
      <div className="absolute right-[20%] top-0 h-full w-px bg-[#2d3330]/40" />
      <div className="absolute bottom-8 left-[30%] h-px w-[45%] bg-white/80" />
      <span className="node-pulse absolute left-[73%] top-[104px] h-2 w-2 rounded-full bg-[#AD6419] shadow-[0_0_20px_8px_rgba(173,100,25,0.22)]" />
      <span className="node-pulse absolute left-[62%] top-[158px] h-2 w-2 rounded-full bg-[#AD6419] shadow-[0_0_20px_8px_rgba(173,100,25,0.22)] [animation-delay:0.8s]" />
    </div>
  );
}

function TrailVisual() {
  return (
    <div className="relative h-[402px] overflow-hidden rounded-[5px] bg-[#e9efe7]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_40%,rgba(255,255,255,0.9),transparent_31%),radial-gradient(circle_at_65%_55%,rgba(173,100,25,0.22),transparent_26%)]" />

      <svg viewBox="0 0 560 420" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <filter id="trailGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="rail-lines" fill="none" strokeLinecap="round">
          {Array.from({ length: 28 }).map((_, index) => {
            const y = 256 + index * 6;
            const color =
              index % 5 === 0 ? "#AD6419" : index % 3 === 0 ? "#6c736b" : "#e8ded1";
            const width = index % 5 === 0 ? 3.2 : 2;

            return (
              <path
                key={index}
                d={`M-40 ${y} C 130 ${y - 62}, 275 ${y - 74}, 600 ${y - 220}`}
                stroke={color}
                strokeWidth={width}
                opacity={index % 5 === 0 ? 0.95 : 0.72}
                style={{ animationDelay: `${index * 0.08}s` }}
              />
            );
          })}
        </g>

        <g filter="url(#trailGlow)">
          <circle className="spark-run" cx="282" cy="204" r="8" fill="#AD6419" />
          <circle className="spark-run [animation-delay:1.6s]" cx="384" cy="158" r="6" fill="#fff0c8" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex h-16 max-w-[928px] items-center justify-between px-6 lg:px-0">
        <a href="#" className="font-display text-[17px] font-semibold tracking-tight text-[#AD6419]">
          Hotelsafari
        </a>

        <nav className="hidden items-center gap-9 text-[10px] font-medium tracking-wide text-[#33261d] md:flex">
          {navItems.map((item) => (
            <a key={item} href="#" className="group relative py-2 transition hover:text-[#AD6419]">
              {item}
              {item === "Distribution" ? (
                <span className="absolute -bottom-0.5 left-1/2 h-px w-8 -translate-x-1/2 bg-[#AD6419]" />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden h-8 border border-[#d8bfae] px-5 text-[10px] font-medium text-[#AD6419] transition hover:border-[#AD6419] hover:bg-white/60 sm:block">
            Login
          </button>
          <button className="h-8 border border-[#AD6419] bg-[#AD6419] px-5 text-[10px] font-bold text-white transition hover:brightness-90">
            Request Demo
          </button>
        </div>
      </div>
    </header>
  );
}

export default function OtaSetupPage() {
  return (
    <main className="min-h-screen bg-[#fbf4ee] text-[#21180f]">
      <Header />

      <section className="relative overflow-hidden bg-[#fbf4ee] pt-28 pb-24 md:pt-[168px] md:pb-[102px]">
        <div className="mx-auto grid max-w-[928px] items-center gap-12 px-6 md:grid-cols-[0.92fr_1fr] lg:px-0">
          <div className="reveal-up max-w-[420px]">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.24em] text-[#AD6419]">
              OTA Integration
            </p>

            <h1 className="font-display text-[32px] leading-[1.08] tracking-[-0.035em] text-[#21180f] md:text-[36px]">
              Global OTA Connectivity
            </h1>

            <p className="mt-6 max-w-[388px] text-[13px] leading-6 text-[#655950]">
              Seamlessly distribute your inventory across hundreds of channels worldwide. Ensure real-time
              synchronization, maintain rate parity, and maximize your global reach from a single, unified dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button>Request a Demo</Button>
            </div>
          </div>

          <div className="reveal-up mx-auto w-full max-w-[454px] [animation-delay:0.15s] md:mx-0 md:justify-self-end">
            <WorldMapVisual />
          </div>
        </div>
      </section>

      <section className="bg-[#fdfdfc] py-24 md:py-[108px]">
        <div className="mx-auto max-w-[928px] px-6 lg:px-0">
          <div className="mx-auto max-w-[560px] text-center">
            <h2 className="font-display text-[26px] leading-tight tracking-[-0.025em]">
              Unified Channel Management
            </h2>

            <p className="mt-4 text-[12px] leading-5 text-[#75695f]">
              Manage your presence across the world's leading travel platforms without leaving Hotelsafari. One
              interface, infinite reach.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-[136px]">
            {channels.map((channel) => (
              <div key={channel} className="h-10 bg-[#f0f0ef] text-center text-[11px] leading-10 text-[#a29a93]">
                {channel}
              </div>
            ))}
          </div>

          <div className="mt-16 border border-[#e4d5c9] bg-[#fff8f3] px-10 py-10 md:grid md:grid-cols-[0.92fr_1.08fr] md:gap-12 md:px-12">
            <div className="self-center">
              <h3 className="font-display text-[18px] tracking-[-0.02em]">Centralized Control</h3>

              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <span className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-[#AD6419] text-[#AD6419]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#AD6419]" />
                  </span>

                  <div>
                    <p className="text-[11px] font-bold text-[#251b12]">Single Dashboard</p>
                    <p className="mt-1 max-w-[320px] text-[11px] leading-5 text-[#75695f]">
                      Update rates, availability, and restrictions across all channels simultaneously.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-[#AD6419] text-[#AD6419]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#AD6419]" />
                  </span>

                  <div>
                    <p className="text-[11px] font-bold text-[#251b12]">Automated Mapping</p>
                    <p className="mt-1 max-w-[330px] text-[11px] leading-5 text-[#75695f]">
                      Intelligent room and rate plan mapping ensures consistency across platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 md:mt-0">
              <ControlVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf4ee] py-24 md:py-[104px]">
        <div className="mx-auto grid max-w-[928px] items-center gap-14 px-6 md:grid-cols-2 lg:px-0">
          <TrailVisual />

          <div>
            <h2 className="font-display text-[28px] leading-tight tracking-[-0.03em] md:text-[30px]">
              Flawless Real-time Synchronization
            </h2>

            <p className="mt-6 max-w-[440px] text-[13px] leading-6 text-[#655950]">
              Our robust 2-way XML synchronization engine communicates with OTAs instantly. The moment a booking is
              made on any channel, inventory is universally adjusted across all connected platforms.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="border border-[#e4d5c9] bg-white/55 p-6">
                <div className="text-[#AD6419]">
                  <LineIcon name="shield" />
                </div>

                <h3 className="mt-6 text-[11px] font-bold">Zero Overbookings</h3>

                <p className="mt-3 text-[11px] leading-5 text-[#75695f]">
                  Instant availability updates mitigate the risk of double bookings.
                </p>
              </div>

              <div className="border border-[#e4d5c9] bg-white/55 p-6">
                <div className="text-[#AD6419]">
                  <LineIcon name="swap" />
                </div>

                <h3 className="mt-6 text-[11px] font-bold">Rate Parity Protected</h3>

                <p className="mt-3 text-[11px] leading-5 text-[#75695f]">
                  Maintain consistent pricing strategies seamlessly across the board.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fdfdfc] py-24 md:py-[108px]">
        <div className="mx-auto max-w-[928px] px-6 lg:px-0">
          <h2 className="text-center font-display text-[27px] leading-tight tracking-[-0.03em]">
            The Value of Integration
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {valueCards.map((card) => (
              <article key={card.title} className="min-h-[240px] border border-[#e4d5c9] bg-[#fff8f3] p-8">
                <div className="text-[#AD6419]">
                  <LineIcon name={card.icon} />
                </div>

                <div className="mt-20">
                  <h3 className="font-display text-[18px] leading-tight tracking-[-0.02em]">{card.title}</h3>
                  <p className="mt-3 text-[11px] leading-5 text-[#75695f]">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf4ee] py-24 text-center md:py-[108px]">
        <div className="mx-auto max-w-[720px] px-6">
          <h2 className="font-display text-[39px] leading-tight tracking-[-0.04em] md:text-[42px]">
            Maximize Your Distribution
          </h2>

          <p className="mt-5 text-[13px] leading-6 text-[#655950]">
            Join thousands of high-end properties optimizing their global reach with Hotelsafari.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-5">
            <Button>Request a Demo</Button>
          </div>
        </div>
      </section>
    </main>
  );
}