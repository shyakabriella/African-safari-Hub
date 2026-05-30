"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/api";

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

type ContactFormData = {
  full_name: string;
  hotel_name: string;
  work_email: string;
  message: string;
};

type ApiErrors = Partial<Record<keyof ContactFormData, string[]>>;

function Input({
  label,
  name,
  placeholder,
  type = "text",
  value,
  error,
  autoComplete,
  onChange,
}: {
  label: string;
  name: keyof ContactFormData;
  placeholder: string;
  type?: string;
  value: string;
  error?: string;
  autoComplete?: string;
  onChange: (name: keyof ContactFormData, value: string) => void;
}) {
  return (
    <label className="space-y-2">
      <span className="block text-sm font-medium text-[#111827]">{label}</span>

      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(name, e.target.value)}
        className={`w-full rounded-[10px] border bg-[#f6f7f9] px-4 py-3 text-[15px] text-[#0f172a] outline-none transition placeholder:text-[#8a94a6] focus:bg-white ${
          error
            ? "border-red-400 focus:border-red-500"
            : "border-[#d9dee7] focus:border-[#AD6419]"
        }`}
      />

      {error && <p className="text-xs text-red-600">{error}</p>}
    </label>
  );
}

export default function Page() {
  const [formData, setFormData] = useState<ContactFormData>({
    full_name: "",
    hotel_name: "",
    work_email: "",
    message: "",
  });

  const [errors, setErrors] = useState<ApiErrors>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));

    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setErrors({});
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(
        `${API_BASE_URL.replace(/\/$/, "")}/contact-messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 422 && result.errors) {
          setErrors(result.errors);
        }

        setErrorMessage(
          result.message || "Failed to send your message. Please try again."
        );

        return;
      }

      setSuccessMessage(
        result.message || "Your message has been sent successfully."
      );

      setFormData({
        full_name: "",
        hotel_name: "",
        work_email: "",
        message: "",
      });
    } catch {
      setErrorMessage(
        "Network error. Please check if the API server is running."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f4] text-[#111827]">
      <main>
        <section className="mx-auto mt-5 grid max-w-[1180px] gap-14 px-5 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-7 lg:py-16">
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
            <div className="absolute inset-x-4 bottom-6 top-0 rounded-[18px] bg-[#e8e1d5] lg:-left-4 lg:right-8" />

            <div className="relative overflow-hidden rounded-[22px] shadow-[0_20px_45px_rgba(15,23,42,0.10)]">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
                alt="Hotel reception interior"
                className="h-[220px] w-full object-cover sm:h-[300px] lg:h-[360px]"
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

            {successMessage && (
              <div className="mt-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {errorMessage}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              autoComplete="on"
              className="mt-6 space-y-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Full Name"
                  name="full_name"
                  placeholder="John Doe"
                  value={formData.full_name}
                  error={errors.full_name?.[0]}
                  autoComplete="name"
                  onChange={handleChange}
                />

                <Input
                  label="Hotel Name"
                  name="hotel_name"
                  placeholder="The Grand Plaza"
                  value={formData.hotel_name}
                  error={errors.hotel_name?.[0]}
                  autoComplete="organization"
                  onChange={handleChange}
                />
              </div>

              <Input
                label="Work Email"
                name="work_email"
                placeholder="john@hotelname.com"
                type="email"
                value={formData.work_email}
                error={errors.work_email?.[0]}
                autoComplete="email"
                onChange={handleChange}
              />

              <label className="space-y-2">
                <span className="block text-sm font-medium text-[#111827]">
                  Message
                </span>

                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  placeholder="How can we help your business grow?"
                  autoComplete="off"
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`w-full resize-none rounded-[10px] border bg-[#f6f7f9] px-3 py-2.5 text-[14px] text-[#0f172a] outline-none transition placeholder:text-[#8a94a6] focus:bg-white ${
                    errors.message
                      ? "border-red-400 focus:border-red-500"
                      : "border-[#d9dee7] focus:border-[#AD6419]"
                  }`}
                />

                {errors.message?.[0] && (
                  <p className="text-xs text-red-600">{errors.message[0]}</p>
                )}
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-[#AD6419] px-6 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_18px_rgba(173,100,25,0.2)] transition hover:bg-[#b98a35] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>

          <aside className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Get In Touch</h3>

              <div className="mt-4 space-y-3 text-sm text-black/75">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-black/50" />
                  <div>
                    <div className="text-xs text-black/50">Address</div>
                    <div className="text-sm font-semibold text-black">
                      Kigali, Rwanda (Serving Africa & beyond)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-black/50" />
                  <div>
                    <div className="text-xs text-black/50">Email</div>
                    <div className="text-sm font-semibold text-black">
                      hotelandsafari@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-black/50" />
                  <div>
                    <div className="text-xs text-black/50">Phone</div>
                    <div className="text-sm font-semibold text-black">
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
                <h3 className="text-center text-[15px] font-semibold text-[#111827]">
                  {faq.question}
                </h3>

                <p className="mt-2 text-center text-[9px] leading-6 text-[#64748b]">
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