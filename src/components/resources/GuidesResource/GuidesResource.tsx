"use client";

import { useState } from "react";
import { Sparkles, FileText, Clock, Download, ArrowRight } from "lucide-react";

import Image from "next/image";

const Hero = () => (
  <div className="flex justify-between items-start pt-[64px] mb-[48px]">
    <div className="max-w-[560px]">
      <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#F6EBE6] text-[#964722] text-[10px] font-bold uppercase tracking-widest rounded-full mb-5">
        <Sparkles size={12} /> Education Center
      </span>

      <h1 className="text-[40px] font-bold text-[#0F172A] leading-[48px] mb-4">
        Expert Guides & Resources
      </h1>

      <p className="text-[16px] text-[#64748B] leading-[26px]">
        Master the art of hotel management and digital growth with our curated
        professional resource library.
      </p>
    </div>

    <div className="flex gap-4">
      <div className="bg-white border border-[#E2E8F0] rounded-xl px-6 py-4 text-center shadow-sm">
        <p className="text-[28px] font-bold text-[#964722]">150+</p>
        <p className="text-[10px] uppercase text-[#94A3B8] font-bold tracking-widest">
          Resources
        </p>
      </div>

      <div className="bg-white border border-[#E2E8F0] rounded-xl px-6 py-4 text-center shadow-sm">
        <p className="text-[28px] font-bold text-[#964722]">12k+</p>
        <p className="text-[10px] uppercase text-[#94A3B8] font-bold tracking-widest">
          Downloads
        </p>
      </div>
    </div>
  </div>
);

const Tabs = () => {
  const tabs = [
    "All Resources",
    "SEO & Organic",
    "Booking Optimization",
    "Digital Marketing",
    "Revenue Management",
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="border-b border-[#E2E8F0] mb-[48px]">
      <div className="flex gap-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`pb-4 text-[14px] font-semibold relative transition-colors ${
              activeTab === index
                ? "text-[#964722]"
                : "text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            {tab}

            {activeTab === index && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#964722]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const FeaturedResource = () => (
  <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden mb-[56px] grid grid-cols-2">
    <div className="relative h-[300px]">
      <span className="absolute top-5 left-5 bg-[#964722] text-white text-[10px] font-bold px-2 py-1 rounded">
        Featured
      </span>

      <Image
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
        alt="SEO Guide"
        fill
        className="object-cover"
      />
    </div>

    <div className="p-10 flex flex-col justify-center">
      <h2 className="text-[26px] font-bold text-[#0F172A] mb-3">
        The Ultimate Hotel SEO Checklist
      </h2>

      <p className="text-[#64748B] mb-6 leading-[26px]">
        Boost your organic visibility and drive more direct bookings with our
        comprehensive SEO guide tailored for hotels.
      </p>

      <div className="flex gap-6 text-[14px] text-[#64748B] mb-6">
        <div className="flex items-center gap-2">
          <FileText size={16} />
          PDF Guide
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} />
          15 min read
        </div>
      </div>

      <div className="flex gap-4">
        <button className="cursor-pointer bg-[#964722] text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2">
          <Download size={16} />
          Download Now
        </button>

        <button className="cursor-pointer bg-[#F1F5F9] text-[#0F172A] px-5 py-2.5 rounded-lg font-semibold">
          Read Overview
        </button>
      </div>
    </div>
  </div>
);

interface ResourceCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  time: string;
}

const ResourceCard = ({
  image,
  category,
  title,
  description,
  time,
}: ResourceCardProps) => (
  <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden flex flex-col hover:shadow-md transition">
    <div className="relative h-[180px]">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>

    <div className="p-5 flex flex-col flex-grow">
      <span className="text-[#964722] text-[10px] uppercase font-bold tracking-widest mb-2">
        {category}
      </span>

      <h3 className="text-[16px] font-bold text-[#0F172A] mb-2 leading-snug">
        {title}
      </h3>

      <p className="text-[14px] text-[#64748B] mb-4 flex-grow">{description}</p>

      <div className="flex justify-between items-center text-[12px] text-[#94A3B8]">
        <span>{time}</span>

        <button className="cursor-pointer hover:underline text-[#964722] font-semibold flex items-center gap-1">
          Read More
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  </div>
);

const ResourceGrid = () => {
  const resources = [
    {
      image:
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80",
      category: "Optimization",
      title: "How to Optimize Your Booking Engine",
      description: "UX patterns that convert visitors into bookings.",
      time: "8 min read",
    },
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      category: "Revenue",
      title: "Direct Booking Strategy Guide",
      description: "Reduce OTA commissions and increase direct revenue.",
      time: "12 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      category: "Marketing",
      title: "Social Media for Modern Hotels",
      description: "Leverage Instagram and TikTok to attract guests.",
      time: "10 min read",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 mb-[64px]">
      {resources.map((r, i) => (
        <ResourceCard key={i} {...r} />
      ))}
    </div>
  );
};

const CTA = () => (
  <div className="bg-[#8C401E] rounded-3xl p-12 text-white mb-[80px]">
    <div className="flex justify-between items-center">
      <div className="max-w-[480px]">
        <h2 className="text-[28px] font-bold mb-3">Stay ahead of the curve</h2>

        <p className="text-white/80">
          Get our latest expert guides and insights monthly.
        </p>
      </div>

      <div className="flex gap-3">
        <input
          placeholder="Your email..."
          className="px-5 py-3 rounded-lg text-[#0F172A] border border-white placeholder-white focus:outline-none"
        />

        <button className="cursor-pointer bg-white text-[#8C401E] px-6 py-3 rounded-lg font-bold">
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

export default function GuidesResource() {
  return (
    <div className="bg-[#FDFBF9] flex justify-center">
      <div className="w-[1120px]">
        <Hero />
        <Tabs />
        <FeaturedResource />
        <ResourceGrid />
        <CTA />
      </div>
    </div>
  );
}
