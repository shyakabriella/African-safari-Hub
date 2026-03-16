import OnlineVisibilityBanner from "@/components/core-solutions/otas/OnlineVisibilityBanner";
import OTAsCTA from "@/components/core-solutions/otas/OTAsCTA";
import ReachMoreGuests from "@/components/core-solutions/otas/ReachMoreGuests";
import WhyOurChannelManager from "@/components/core-solutions/otas/WhyOurChannelManager";

export default function Otas() {
  return (
    <div className="w-full flex flex-col mt-5 justify-center items-center bg-[#8B4513]/10">
      <OnlineVisibilityBanner />
      <ReachMoreGuests />
      <WhyOurChannelManager />
      <OTAsCTA />
    </div>
  )
}
