import IncreaseCTA from "@/components/core-solutions/website/IncreaseCTA";
import SellDirectly from "@/components/core-solutions/website/SellDirectly";
import SocialProof from "@/components/core-solutions/website/SocialProof";
import VisualLayout from "@/components/core-solutions/website/VisualLayout";
import WebsiteBanner from "@/components/core-solutions/website/WebsiteBanner";

export default function Website() {
  return (
    <div className="w-full flex flex-col mt-5 justify-center items-center bg-[#8B4513]/10">
      <WebsiteBanner />
      <SocialProof />
      <SellDirectly />
      <VisualLayout />
      <IncreaseCTA />
    </div>
  )
}
