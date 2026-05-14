// src/app/solutions/channel-manager/page.tsx
import SyncRatingBanner from "@/components/core-solutions/channel-manager/SyncRatingBanner";
import StatusBar from "@/components/core-solutions/channel-manager/StatusBar";
import ZeroError from "@/components/core-solutions/channel-manager/ZeroError";
import HowSyncWork from "@/components/core-solutions/channel-manager/HowSyncWork";
import ByeOverbookingCTA from "@/components/core-solutions/channel-manager/ByeOverbookingCTA";

export default function ChannelManagerPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-white">
      <SyncRatingBanner />
      <StatusBar />
      <ZeroError />
      <HowSyncWork />
      <ByeOverbookingCTA />
    </div>
  );
}