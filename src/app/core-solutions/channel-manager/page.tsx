import ByeOverbookingCTA from "@/components/core-solutions/channel-manager/ByeOverbookingCTA";
import HowSyncWork from "@/components/core-solutions/channel-manager/HowSyncWork";
import StatusBar from "@/components/core-solutions/channel-manager/StatusBar";
import SyncRatingBanner from "@/components/core-solutions/channel-manager/SyncRatingBanner";
import ZeroError from "@/components/core-solutions/channel-manager/ZeroError";

export default function ChannelManager() {
  return (
    <div className="w-full flex flex-col mt-5 justify-center items-center bg-[#8B4513]/10">
      <SyncRatingBanner />
      <StatusBar />
      <ZeroError />
      <HowSyncWork />
      <ByeOverbookingCTA />
    </div>
  )
}
