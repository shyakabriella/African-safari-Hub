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
    bio: "With two decades in luxury hotel management, Julian founded African Safari and Hotel Booking Hub to digitize the intuition of world-class concierges.",
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

  const y1 = useTransform(scrollY, [0, 500], [0, 70]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <section className="relative flex min-h-[70vh] items-center pt-20 lg:pt-24">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity }}
          >
            <p className="mb-3 text-[9px] font-semibold tracking-[0.25em] uppercase text-[#AD6419]">
              Our Team
            </p>

            <h1 className="font-serif text-2xl leading-tight text-[#2a1e17] lg:text-3xl">
              The Visionaries
              <br />
              Behind
              <br />
              <em className="italic">the Heritage</em>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-sm text-[10px] leading-relaxed text-[#2a1e17]/70 lg:text-[12px]"
            >
              We bridge the gap between timeless hospitality tradition and
              artificial intelligence. Our mission is to preserve the human
              touch of white-glove service while empowering hoteliers with
              next-generation institutional efficiency.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            style={{ y: y1 }}
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={HERO_IMAGE}
                alt="Luxury hotel lobby"
                className="h-[220px] w-full object-cover lg:h-[380px] rounded-xl"
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
    <section className="bg-[#f6efe9] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 font-serif text-2xl text-[#2a1e17] lg:text-3xl"
        >
          Leadership
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {LEADERS.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-[260px] w-full object-cover grayscale transition duration-700 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-[#2a1e17]/0 transition-all duration-500 group-hover:bg-[#2a1e17]/10" />
              </div>

              <p className="mb-1 text-[9px] uppercase tracking-[0.15em] text-[#2a1e17]/50">
                {leader.role}
              </p>

              <h3 className="mb-2 font-serif text-xl text-[#2a1e17]">
                {leader.name}
              </h3>

              <p className="text-xs leading-relaxed text-[#2a1e17]/60">
                {leader.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 font-serif text-3xl text-[#2a1e17] lg:text-4xl"
            >
              Our Philosophy
            </motion.h2>

            <div className="space-y-6">
              {PRINCIPLES.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="mt-1 shrink-0">
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#AD6419]"
                      />
                    </div>

                    <div>
                      <h3 className="mb-1 font-serif text-lg text-[#2a1e17]">
                        {principle.title}
                      </h3>

                      <p className="text-xs leading-relaxed text-[#2a1e17]/60">
                        {principle.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600"
                alt="Luxury hotel room"
                className="h-[220px] w-full object-cover transition duration-700 hover:scale-105 lg:h-[260px]"
              />
            </div>

            <div className="space-y-3 pt-5">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                  alt="City skyline"
                  className="h-[160px] w-full object-cover transition duration-700 hover:scale-105 lg:h-[180px]"
                />
              </div>

              <div className="overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
                  alt="Modern office"
                  className="h-[160px] w-full object-cover transition duration-700 hover:scale-105 lg:h-[180px]"
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
    <section className="px-5 py-16 lg:px-6 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl bg-[#AD6419] px-6 py-14 text-center lg:py-18"
      >
        <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-white/60">
          The Future of Hospitality
        </p>

        <h2 className="mb-4 font-serif text-3xl leading-tight text-white lg:text-4xl">
          Ready to elevate your
          <br />
          institution?
        </h2>

        <p className="mx-auto mb-7 max-w-md text-xs leading-relaxed text-white/80">
          Join the ranks of the world's most prestigious hotel groups by
          integrating African Safari and Hotel Booking Hub's proprietary technology.
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="bg-white px-6 py-3 text-[11px] uppercase tracking-[0.12em] text-[#AD6419] transition hover:bg-[#f6efe9]"
          >
            Request Consultation
          </Link>

          <Link
            href="/solutions/website"
            className="border border-white/30 px-6 py-3 text-[11px] uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
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
