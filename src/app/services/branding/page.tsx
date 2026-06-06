"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PenTool,
  Globe,
  Printer,
  Smartphone,
  ArrowRight,
  X,
  ChevronRight,
} from "lucide-react";

// Animation variants (unchanged)
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-[55vh] flex items-center overflow-hidden mt-10">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-hallway.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cream/80" />
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-4 lg:px-8 py-11 mt-6 grid lg:grid-cols-2 gap-6 items-center">
        {/* LEFT TEXT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-xl"
        >
          {/* Label */}
          <motion.p className="text-[10px] uppercase tracking-[0.3em] text-white mb-2">
            The Art of Identity
          </motion.p>

          {/* Headline */}
            <motion.h1 className="font-serif text-xl md:text-2xl lg:text-[30px] font-light leading-[1.1] text-[#c67032] mb-2">
            <span className="">Legacy</span>{" "}
            <span className="">Refined by Design</span>
          </motion.h1>

          {/* Divider */}
            <motion.div className="w-12 h-[1px] bg-[#8B4513]/40 my-3" />

          {/* Description */}
            <motion.p className="text-sm md:text-[15px] leading-relaxed text-white max-w-md mb-4">
            Crafting timeless identities for distinguished hospitality brands —
            where heritage meets modern digital precision.
          </motion.p>

          {/* CTA */}
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#8B4513] text-white text-[11px] tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#c98453] transition rounded-md"
          >
            Elevate Your Brand
            <ArrowRight size={14} />
          </motion.a>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >
          {/* Glow background shape */}
          <div className="absolute -inset-10 bg-gradient-to-br from-[#8B4513]/20 to-transparent blur-3xl rounded-full" />

          {/* Decorative shape */}
          <div className="absolute -top-6 -right-6 w-40 h-40 border border-[#8B4513]/20 rounded-full" />
          <div className="absolute bottom-10 left-0 w-24 h-24 border border-[#8B4513]/10 rotate-12" />

          {/* Main image card */}
          <div className="relative z-10 bg-white/40 backdrop-blur-xl border border-white/40 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/hero-hallway.jpg"
              className="w-full h-[320px] object-cover"
            />

            {/* small floating stat card */}
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur px-4 py-3 rounded-xl shadow-md">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Design Impact
              </p>
              <p className="text-[15px] font-light text-[#0F172A]">
                +42% Booking Growth
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- PHILOSOPHY ---------------- */
function Philosophy() {
  return (
    <section id="philosophy" className="py-10">
      <div className="max-w-3xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-light mb-2">Heritage Philosophy</h2>
          <div className="w-10 h-px bg-black/30 mb-5" />

          <p className="text-sm text-gray-600 mb-4 italic">
            “Luxury lives in timeless consistency.”
          </p>

          <p className="text-sm text-gray-600 mb-6">
            We combine traditional hospitality values with modern UX systems.
          </p>

          <div className="flex gap-10 text-sm">
            <div>
              <p className="text-xl">50+</p>
              <span className="text-xs text-gray-500">Estates</span>
            </div>
            <div>
              <p className="text-xl">15</p>
              <span className="text-xs text-gray-500">Awards</span>
            </div>
          </div>
        </div>

        <img
          src="/images/bronze-lamp.jpg"
          className="h-[200px] object-cover w-full rounded-md"
        />
      </div>
    </section>
  );
}

/* ---------------- SERVICES (ICON SECTION KEPT) ---------------- */
function Services() {
  const services = [
    {
      icon: PenTool,
      title: "Visual Identity",
      description: "Brand systems and identity design.",
      items: ["Logos", "Colors", "Guidelines"],
    },
    {
      icon: Globe,
      title: "Digital Presence",
      description: "Web experiences for hospitality.",
      items: ["Websites", "SEO", "UX"],
    },
    {
      icon: Printer,
      title: "Print",
      description: "Physical brand touchpoints.",
      items: ["Menus", "Stationery", "Signage"],
    },
    {
      icon: Smartphone,
      title: "Guest UX",
      description: "Apps and booking flows.",
      items: ["Apps", "Bookings", "Portals"],
    },
  ];

  return (
    <section id="services" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-center text-2xl mb-8 font-light">
          Core Creative Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-5 border border-[#d57936] rounded-[2px] hover:shadow-sm transition"
            >
              <s.icon size={20} className="mb-3 text-[#9d5f33]" />
              <h3 className="text-sm mb-2 text-[#9d5f33]">{s.title}</h3>
              <p className="text-xs mb-3 text-gray-700">{s.description}</p>
              <ul className="text-[10px] text-gray-500 space-y-1">
                {s.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CASE STUDY ---------------- */
function CaseStudy() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl flex justify-center items-center px-4 lg:px-8 lg:grid-cols-2 gap-10">
        <img
          src="/images/resort-case-study.jpg"
          className="h-[280px] w-full object-cover rounded-md"
        />

        <div className="w-[50%]">
          <h3 className="text-xl mb-3 text-center text-[#9d5f33]">The Balsams Resort</h3>
          <p className="text-sm text-gray-600 mb-4">
            Rebranded a historic estate into a modern luxury system.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- METHODOLOGY ---------------- */
function Methodology() {
  const steps = ["Discovery", "Concept", "Refinement", "Launch"];

  return (
    <section className="py-10 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-xl mb-6">Process</h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {steps.map((s, i) => (
            <div key={s}>
              <p className="text-2xl opacity-40">0{i + 1}</p>
              <p className="text-sm">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section id="cta" className="py-14 bg-gradient-to-b from-white to-cream/40">
  <div className="max-w-3xl mx-auto px-4 text-center relative">

    {/* subtle glow background */}
    <div className="absolute inset-0 flex justify-center -z-10">
      <div className="w-72 h-72 bg-[#8B4513]/10 blur-3xl rounded-full" />
    </div>

    <h2 className="text-3xl md:text-4xl font-light text-[#0F172A] mb-4">
      Ready to start?
    </h2>

    <div className="w-12 h-[1px] bg-[#8B4513]/40 mx-auto mb-5" />

    <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
      Let’s build a brand identity that actually feels timeless, not trendy.
    </p>

    <div className="flex flex-col sm:flex-row gap-3 justify-center">

      {/* Primary button */}
      <a href="/pricing/monthly-plans" target="_blank" className="bg-[#8B4513] text-white text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#6B3410] transition shadow-md">
        View Plans
      </a>

      {/* Secondary button */}
      <a href="/contact" target="_blank" className="border border-[#8B4513]/30 text-[#8B4513] text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#8B4513]/5 transition">
        Contact Us
      </a>

    </div>

  </div>
</section>
  );
}

/* ---------------- APP ---------------- */
export default function App() {
  return (
    <div className="bg-cream">
      <Hero />
      <Philosophy />
      <Services />
      <CaseStudy />
      <Methodology />
      <CTA />
    </div>
  );
}
