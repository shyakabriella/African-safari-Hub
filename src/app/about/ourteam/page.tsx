"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Lightbulb, HeartHandshake } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200";

const LEADERS = [
  {
    name: "Julian Thorne",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
    bio: "With two decades in luxury hotel management, Julian founded Heritage & Horizon to digitize the intuition of world-class concierges.",
  },
  {
    name: "Elena Rossi",
    role: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    bio: "Elena ensures that every digital interface evokes the same tactile satisfaction as a silk-bound guest directory or a hand-delivered note.",
  },
  {
    name: "Dr. Marcus Chen",
    role: "Head of AI Strategy",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    bio: "A pioneer in predictive analytics, Marcus leads the development of our proprietary AI suites that anticipate guest needs before they arise.",
  },
] as const;

const PRINCIPLES = [
  {
    icon: Sparkles,
    title: "Uncompromising Craft",
    description:
      "We believe that software should be as meticulously crafted as a boutique hotel suite, where every pixel serves a purpose.",
  },
  {
    icon: Lightbulb,
    title: "Invisible Innovation",
    description:
      "Technology is at its best when it disappears, leaving only the seamless results of heightened efficiency and guest delight.",
  },
  {
    icon: HeartHandshake,
    title: "Proactive Service",
    description:
      "Hospitality is the art of anticipation. Our team builds the tools that allow staff to stay three steps ahead of every request.",
  },
] as const;

function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative flex min-h-[85vh] items-center pt-28 lg:pt-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ opacity }}
          >
            <p className="mb-4 text-[10px] font-semibold tracking-[0.35em] text-[#AD6419] uppercase">
              Our Team
            </p>
            <h1 className="font-serif text-5xl leading-[1.1] text-[#2a1e17] lg:text-7xl">
              The Visionaries
              <br />
              Behind
              <br />
              <em className="italic">the Heritage</em>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-8 max-w-md text-sm leading-relaxed text-[#2a1e17]/70 lg:text-base"
            >
              We bridge the gap between timeless hospitality tradition and the frontier of
              artificial intelligence. Our mission is to preserve the human touch of
              white-glove service while empowering hoteliers with next-generation
              institutional efficiency.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{ y: y1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={HERO_IMAGE}
                alt="Luxury hotel lobby"
                className="h-[400px] w-full object-cover lg:h-[550px]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#2a1e17]/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="bg-[#f6efe9] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 font-serif text-4xl text-[#2a1e17] lg:text-5xl"
        >
          Leadership
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3 lg:gap-12">
          {LEADERS.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-[380px] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[#2a1e17]/0 transition-all duration-500 group-hover:bg-[#2a1e17]/10" />
              </div>
              <p className="mb-2 text-[10px] tracking-[0.2em] text-[#2a1e17]/50 uppercase">
                {leader.role}
              </p>
              <h3 className="mb-3 font-serif text-2xl text-[#2a1e17]">{leader.name}</h3>
              <p className="text-sm leading-relaxed text-[#2a1e17]/60">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-14 font-serif text-4xl text-[#2a1e17] lg:text-5xl"
            >
              Our Philosophy
            </motion.h2>

            <div className="space-y-10">
              {PRINCIPLES.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    className="flex gap-5"
                  >
                    <div className="mt-1 shrink-0">
                      <Icon size={22} className="text-[#AD6419]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="mb-2 font-serif text-xl text-[#2a1e17]">
                        {principle.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#2a1e17]/60">
                        {principle.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=600"
                alt="Luxury hotel room"
                className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[340px]"
              />
            </div>
            <div className="space-y-4 pt-8">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1445018380250-f9e2f1ee0f8f?auto=format&fit=crop&q=80&w=600"
                  alt="City skyline view"
                  className="h-[200px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[240px]"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
                  alt="Modern office space"
                  className="h-[200px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[240px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-6 py-24 lg:px-8 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="mx-auto max-w-5xl bg-[#AD6419] px-8 py-20 text-center lg:py-28"
      >
        <p className="mb-6 text-[10px] tracking-[0.3em] text-white/50 uppercase">
          The Future of Hospitality
        </p>
        <h2 className="mb-6 font-serif text-4xl leading-tight text-white lg:text-5xl">
          Ready to elevate your
          <br />
          institution?
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-white/80">
          Join the ranks of the world&apos;s most prestigious hotel groups by integrating
          Heritage & Horizon&apos;s proprietary technology.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="bg-white px-8 py-3.5 text-xs tracking-[0.15em] text-[#AD6419] uppercase transition-colors duration-300 hover:bg-[#f6efe9]"
          >
            Request Consultation
          </Link>
          <Link
            href="/solutions/website"
            className="border border-white/30 px-8 py-3.5 text-xs tracking-[0.15em] text-white uppercase transition-colors duration-300 hover:bg-white/10"
          >
            View Capabilities
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-[#f6efe9]">
      <HeroSection />
      <LeadershipSection />
      <PhilosophySection />
      <CTASection />
    </div>
  );
}
