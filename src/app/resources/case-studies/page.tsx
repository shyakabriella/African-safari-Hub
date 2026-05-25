"use client";

import { useState } from "react";
import FeaturedCase from "@/components/resources/CaseStudyResource/FeaturedCase";
import FilterPills from "@/components/resources/CaseStudyResource/FilterPills";
import GrowthMetrics from "@/components/resources/CaseStudyResource/GrowthMetrics";
import SuccessStoryBanner from "@/components/resources/CaseStudyResource/SuccessStoryBanner";
import SuccessStoryCTA from "@/components/resources/CaseStudyResource/SuccessStoryCTA";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  const [active, setActive] = useState<string>("All Stories");
  const normalize = (s: string) => s.toLowerCase();

  const filtered = caseStudies.filter((c) => {
    if (active === "All Stories" || active === "all") return true;
    return normalize(c.category) === normalize(active);
  });

  const featured = filtered[0] ?? caseStudies[0];

  return (
    <div className="w-full flex flex-col mt-5 justify-center items-center bg-[#8B4513]/10">
      <SuccessStoryBanner />
      <FilterPills active={active} setActive={setActive} />
      <FeaturedCase caseStudy={featured} />
      <GrowthMetrics caseStudies={filtered.length ? filtered : caseStudies} />
      <SuccessStoryCTA />
    </div>
  );
}
