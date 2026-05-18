// import StatusBarCard from "./StatusBarCard";

// export default function StatusBar() {
//   return (
//     <div className="w-[1200px] h-[254px] pl-[24px] pr-[24px] pb-[80px]">
//       <div className="w-[1152px] h-[174px] flex gap-[24px]">
//         <StatusBarCard
//           header="Average Sync Speed"
//           title="< 2 Seconds"
//         />
//         <StatusBarCard
//           header="Error Reduction"
//           title="100% Guaranteed"
//         />
//         <StatusBarCard
//           header="Global Channels"
//           title="450+ Integrated"
//         />
//       </div>
//     </div>
//   )
// }
















// src/components/core-solutions/channel-manager/StatusBar.tsx
import StatusBarCard from "./StatusBarCard";

export default function StatusBar() {
  return (
    <div className="w-full max-w-7xl mx-auto px-1 py-4">
      <div className="grid md:grid-cols-3 gap-3 mr-1 ml-1">
        <StatusBarCard
          header="Average Sync Speed"
          title="< 2 Seconds"
          description="Real-time availability updates across all connected OTAs"
        />
        <StatusBarCard
          header="Error Reduction"
          title="100%"
          description="Guaranteed accuracy with zero double bookings"
        />
        <StatusBarCard
          header="Global Channels"
          title="450+"
          description="Integrated OTAs including Booking.com, Expedia, Agoda"
        />
      </div>
    </div>
  );
}