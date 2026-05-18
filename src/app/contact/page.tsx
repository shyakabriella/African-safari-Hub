import { Mail, MapPin, Phone } from "lucide-react";

const faqs = [
  {
    question: "How long does implementation take?",
    answer:
      "Typical enterprise setup takes 2-4 weeks depending on existing infrastructure and staff training needs.",
  },
  {
    question: "Do you support multi-property groups?",
    answer:
      "Yes, our platform is built for centralized management of portfolios ranging from 5 to 500+ properties.",
  },
  {
    question: "Is there 24/7 technical support?",
    answer:
      "All premium plans include round-the-clock priority technical assistance via phone and live chat.",
  },
  {
    question: "Can we integrate with our current PMS?",
    answer:
      "We provide native integrations for over 50+ leading Property Management Systems including Opera and Mews.",
  },
];

function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="space-y-2">
      <span className="block text-sm font-medium text-[#111827]">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-[10px] border border-[#d9dee7] bg-[#f6f7f9] px-4 py-3 text-[15px] text-[#0f172a] outline-none transition placeholder:text-[#8a94a6] focus:border-[#AD6419] focus:bg-white"
      />
    </label>
  );
}

export default function page() {
  return (
    <div className="min-h-screen bg-[#f5f5f4] text-[#111827]">
      <main>
        <section className="mx-auto grid max-w-[1180px] gap-14 px-5 py-12 mt-5 lg:grid-cols-[1.02fr_0.98fr] lg:px-7 lg:py-16">
          <div className="flex flex-col justify-center">
            <div className="mb-7 inline-flex w-fit rounded-full bg-[#efe8dd] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.24em] text-[#AD6419]">
              Global Hospitality Partner
            </div>

            <h1 className="max-w-[560px] text-3xl font-semibold leading-[0.94] tracking-[-0.05em] text-[#0f172a] sm:text-2xl lg:text-[45px]">
              Let&apos;s <span className="text-[#AD6419]">Connect</span>
            </h1>

            <p className="mt-3 max-w-[560px] text-[14px] leading-5 text-[#334155] sm:text-[11px]">
              Partner with the world&apos;s leading hotel technology provider.
              Our team of experts is ready to help you scale your operations and
              enhance guest experiences.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-x-4 top-0 bottom-6 rounded-[18px] bg-[#e8e1d5] lg:-left-4 lg:right-8" />

            <div className="relative overflow-hidden rounded-[22px] shadow-[0_20px_45px_rgba(15,23,42,0.10)]">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
                alt="Hotel reception interior"
                className="h-[220px] sm:h-[300px] lg:h-[360px] w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/10 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto grid max-w-[1100px] gap-8 px-4 py-3 lg:grid-cols-[1.1fr_0.6fr] lg:px-6 lg:py-5"
        >
          <div className="rounded-[20px] border border-[#e5e7eb] bg-white/70 p-6 shadow-[0_8px_20px_rgba(15,23,42,0.04)] sm:p-7">
            <h2 className="text-[20px] font-semibold text-[#111827] sm:text-[22px]">
              Send us a message
            </h2>

            <form className="mt-6 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Full Name" placeholder="John Doe" />
                <Input label="Hotel Name" placeholder="The Grand Plaza" />
              </div>

              <Input
                label="Work Email"
                placeholder="john@hotelname.com"
                type="email"
              />

              <label className="space-y-2">
                <span className="block text-sm font-medium text-[#111827]">
                  Message
                </span>
                <textarea
                  rows={4}
                  placeholder="How can we help your business grow?"
                  className="w-full resize-none rounded-[10px] border border-[#d9dee7] bg-[#f6f7f9] px-3 py-2.5 text-[14px] text-[#0f172a] outline-none transition placeholder:text-[#8a94a6] focus:border-[#AD6419] focus:bg-white"
                />
              </label>

              <button
                type="button"
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-[#AD6419] px-6 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_18px_rgba(173,100,25,0.2)] transition hover:bg-[#b98a35]"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          <aside className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold">Get In Touch</h3>

              <div className="mt-4 space-y-3 text-sm text-black/75">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-black/50" />
                  <div>
                    <div className="text-black/50 text-xs">Address</div>
                    <div className="font-semibold text-black text-sm">
                      Kigali, Rwanda (Serving Africa & beyond)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-black/50" />
                  <div>
                    <div className="text-black/50 text-xs">Email</div>
                    <div className="font-semibold text-black text-sm">
                      hotelandsafari@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-black/50" />
                  <div>
                    <div className="text-black/50 text-xs">Phone</div>
                    <div className="font-semibold text-black text-sm">
                      +250788471880
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
        
        <section className="mx-auto max-w-[850px] px-4 py-3 text-center lg:px-6 lg:py-7">
          <h2 className="text-[26px] font-semibold text-[#111827]">
            Common Inquiries
          </h2>

          <p className="mx-auto mt-3 max-w-[580px] text-[14px] leading-6 text-[#64748b]">
            Quick answers to frequently asked questions about our technology and
            integration process.
          </p>

          <div className="mt-8 grid gap-4 text-left md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[16px] border border-[#e5e7eb] bg-white/70 p-4 shadow-[0_8px_20px_rgba(15,23,42,0.03)]"
              >
                <h3 className="text-[15px] font-semibold text-[#111827]">
                  {faq.question}
                </h3>

                <p className="mt-2 text-[12px] text-center leading-6 text-[#64748b]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
