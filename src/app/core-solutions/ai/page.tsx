import AIGuestExperienceCTA from "@/components/core-solutions/ai/AIGuestExperienceCTA";
import ConnectToAIBanner from "@/components/core-solutions/ai/ConnectToAIBanner";
import PowerfulAI from "@/components/core-solutions/ai/PowerfulAI";
import TheIntelligentConcierge from "@/components/core-solutions/ai/TheIntelligentConcierge";

export default function Ai() {
  return (
    <div className="w-full flex flex-col mt-5 justify-center items-center bg-[#8B4513]/10">
      <ConnectToAIBanner />
      <PowerfulAI />
      <TheIntelligentConcierge />
      <AIGuestExperienceCTA />
    </div>
  )
}
