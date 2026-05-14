// interface HowSyncWorkCardProps {
//   integer: string;
//   title: string;
//   description: string;
// }

// export default function HowSyncWorkCard({ integer, title, description}: HowSyncWorkCardProps) {
//   return (
//     <div className="w-[544px] h-[72px] flex items-center gap-[16px]">
//       <div className="flex justify-center items-center text-center w-[32px] h-[32px] rounded-[9999px] bg-[#8B4513]">
//         <span className="flex justify-center items-center text-center w-[7.02px] h-[24px] font-bold text-white text-[16px] leadnig-[24px]">
//           {integer}
//         </span>
//       </div>
      
//       <div className="w-[414.47px] h-[72px] flex flex-col">
//         <div className="w-full h-[24px]">
//           <span className="w-[157.81px] h-full font-bold text-[#0F172A] text-[16px] leading-[24px]">
//             {title}
//           </span>
//         </div>
//         <div className="w-full h-[48px]">
//           <span className="w-full h-full font-normal text-[16px] leading-[24px] text-[#475569]">
//             {description}
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }







// src/components/core-solutions/channel-manager/HowSyncWorkCard.tsx
interface HowSyncWorkCardProps {
  integer: string;
  title: string;
  description: string;
}

export default function HowSyncWorkCard({ integer, title, description }: HowSyncWorkCardProps) {
  return (
    <div className="flex gap-5 group hover:bg-slate-50 p-4 rounded-xl transition">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg group-hover:bg-amber-600 group-hover:text-white transition">
        {integer}
      </div>
      <div>
        <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-amber-600 transition">
          {title}
        </h3>
        <p className="text-slate-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}