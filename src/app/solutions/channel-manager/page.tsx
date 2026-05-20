// src/app/solutions/channel-manager/page.tsx
import SyncRatingBanner from "@/components/core-solutions/channel-manager/SyncRatingBanner";
import StatusBar from "@/components/core-solutions/channel-manager/StatusBar";
import ZeroError from "@/components/core-solutions/channel-manager/ZeroError";
import HowSyncWork from "@/components/core-solutions/channel-manager/HowSyncWork";
import ByeOverbookingCTA from "@/components/core-solutions/channel-manager/ByeOverbookingCTA";

export default function ChannelManagerPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-linear-to-br from-[#f6efe9] to-white">
      <SyncRatingBanner />
      <StatusBar />
      <ZeroError />
      <HowSyncWork />
      <ByeOverbookingCTA />
    </div>
  );
}