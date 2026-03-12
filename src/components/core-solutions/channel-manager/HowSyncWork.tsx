import Image from "next/image";
import HowSyncWorkCard from "./HowSyncWorkCard";

export default function HowSyncWork() {
  return (
    <div className="w-[1200px] h-[516px] pr-[24px] pl-[24px] pt-[46px] pb-[96px]">
      <div className="w-[1152px] h-[324px] flex gap-[64px]">
        <div className="w-[544px] h-[306px] rounded-[16px] bg-[#E2E8F0] relative">
          <Image
            src={`/how-it-works.png`}
            alt="How It Works"
            fill
            className="absolute object-cover rounded-[16px]"
          />
        </div>
        
        <div className="w-[544px] h-[324px] flex flex-col gap-[24px]">
          <div className="w-full h-[36px]">
            <span className="w-full h-full font-extrabold text-[#0F172A] text-[30px] leading-[36px]">
              How the &apos;Sync&apos; Engine Works
            </span>
          </div>

          <div className="w-[544px] h-[264px] flex flex-col gap-[24px]">
            <HowSyncWorkCard
              integer="1"
              title="Centralize Your Data"
              description="Upload your rooms, descriptions, and base rates into the ChannelSync dashboard."
            />
            <HowSyncWorkCard
              integer="2"
              title="Connect Your OTAs"
              description="Map your rooms to Expedia, Booking, and hundreds more with a single click."
            />
            <HowSyncWorkCard
              integer="3"
              title="Automate the Flow"
              description="The Sync engine monitors bookings 24/7. When a room sells, availability is slashed across all other sites in milliseconds."
            />
          </div>
        </div>
      </div>
    </div>
  )
}
