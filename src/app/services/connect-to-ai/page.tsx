// src/app/services/connect-to-ai/page.tsx
import ConnectToAIBanner from "@/components/core-solutions/ai/ConnectToAIBanner";
import PowerfulAI from "@/components/core-solutions/ai/PowerfulAI";
import TheIntelligentConcierge from "@/components/core-solutions/ai/TheIntelligentConcierge";
import AIGuestExperienceCTA from "@/components/core-solutions/ai/AIGuestExperienceCTA";

export default function ConnectToAIPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#8B4513]/5">
      <div className="max-w-[1280px] w-full">
        <ConnectToAIBanner />
        <PowerfulAI />
        <TheIntelligentConcierge />
        <AIGuestExperienceCTA />
      </div>
    </div>
  );
}