// import Image from "next/image";
// import HowSyncWorkCard from "./HowSyncWorkCard";

// export default function HowSyncWork() {
//   return (
//     <div className="w-[1200px] h-[516px] pr-[24px] pl-[24px] pt-[46px] pb-[96px]">
//       <div className="w-[1152px] h-[324px] flex gap-[64px]">
//         <div className="w-[544px] h-[306px] rounded-[16px] bg-[#E2E8F0] relative">
//           <Image
//             src={`/how-it-works.png`}
//             alt="How It Works"
//             fill
//             className="absolute object-cover rounded-[16px]"
//           />
//         </div>
        
//         <div className="w-[544px] h-[324px] flex flex-col gap-[24px]">
//           <div className="w-full h-[36px]">
//             <span className="w-full h-full font-extrabold text-[#0F172A] text-[30px] leading-[36px]">
//               How the &apos;Sync&apos; Engine Works
//             </span>
//           </div>

//           <div className="w-[544px] h-[264px] flex flex-col gap-[24px]">
//             <HowSyncWorkCard
//               integer="1"
//               title="Centralize Your Data"
//               description="Upload your rooms, descriptions, and base rates into the ChannelSync dashboard."
//             />
//             <HowSyncWorkCard
//               integer="2"
//               title="Connect Your OTAs"
//               description="Map your rooms to Expedia, Booking, and hundreds more with a single click."
//             />
//             <HowSyncWorkCard
//               integer="3"
//               title="Automate the Flow"
//               description="The Sync engine monitors bookings 24/7. When a room sells, availability is slashed across all other sites in milliseconds."
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }







// src/components/core-solutions/channel-manager/HowSyncWork.tsx
import HowSyncWorkCard from "./HowSyncWorkCard";

export default function HowSyncWork() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-2 mt-10">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Side - Image/Visual */}
        <div className="flex-1">
          <div className="relative flex h-full items-center justify-center rounded-2xl bg-linear-to-br from-[#f6efe9] to-slate-100 p-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#e8d5c0]">
                <span className="text-4xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">The Sync Engine</h3>
              <p className="text-slate-500">Real-time data flow between your PMS and 450+ OTAs</p>
              <div className="mt-6 flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs text-slate-500">Live connection active</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Steps */}
        <div className="flex-1">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              How the <span className="text-[#AD6419]">Sync Engine</span> Works
            </h2>
            <p className="text-[14px] text-slate-500">
              Three simple steps to eliminate manual work and prevent overbookings forever
            </p>
          </div>

          <div className="space-y-1">
            <HowSyncWorkCard
              integer="1"
              title="Centralize Your Data"
              description="Upload your rooms, descriptions, base rates, and availability into the ChannelSync dashboard. One source of truth for all your inventory across all platforms."
            />
            <HowSyncWorkCard
              integer="2"
              title="Connect Your OTAs"
              description="Map your rooms to Expedia, Booking.com, Agoda, and 450+ more channels with a single click. No technical skills needed. Our team helps with setup."
            />
            <HowSyncWorkCard
              integer="3"
              title="Automate the Flow"
              description="The Sync engine monitors bookings 24/7. When a room sells, availability is instantly updated across ALL connected channels. No manual work. No double bookings. Ever."
            />
          </div>
        </div>
      </div>
    </div>
  );
}