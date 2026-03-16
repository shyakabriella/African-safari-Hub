import FeaturedCase from "@/components/resources/CaseStudyResource/FeaturedCase";
import FilterPills from "@/components/resources/CaseStudyResource/FilterPills";
import GrowthMetrics from "@/components/resources/CaseStudyResource/GrowthMetrics";
import SuccessStoryBanner from "@/components/resources/CaseStudyResource/SuccessStoryBanner";
import SuccessStoryCTA from "@/components/resources/CaseStudyResource/SuccessStoryCTA";

export default function CaseStudies() {
  return (
    <div className="w-full flex flex-col mt-5 justify-center items-center bg-[#8B4513]/10">
      <SuccessStoryBanner />
      <FilterPills />
      <FeaturedCase />
      <GrowthMetrics />
      <SuccessStoryCTA />
    </div>
  )
}
