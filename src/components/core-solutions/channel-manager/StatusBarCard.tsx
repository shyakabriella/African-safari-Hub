// interface StatusBarCardProps {
//   header: string;
//   title: string;
// }

// export default function StatusBarCard({ header, title }: StatusBarCardProps) {
//   return (
//     <div className="w-[368px] h-[174px] p-[32px] mt-8 rounded-[12px] bg-white border border-[#8B4513]">
//       <div className="w-[302px] h-[20px]">
//         <span className="w-full h-full font-bold text-[#64748B] text-[14px] leading-[20px]">
//           {header}
//         </span>
//       </div>
//       <div className="w-[302px] h-[40px]">
//         <span className="w-full h-full font-extrabold text-[#8B4513] leading-[40px] text-[36px]">
//           {title}
//         </span>
//       </div>
//     </div>
//   );
// }






// src/components/core-solutions/channel-manager/StatusBarCard.tsx
import { Zap, ShieldCheck, Globe } from "lucide-react";

interface StatusBarCardProps {
  header: string;
  title: string;
  description: string;
}

export default function StatusBarCard({ header, title, description }: StatusBarCardProps) {
  const getIcon = () => {
    if (header.includes("Sync")) return <Zap className="w-6 h-6" />;
    if (header.includes("Error")) return <ShieldCheck className="w-6 h-6" />;
    return <Globe className="w-6 h-6" />;
  };

  return (
    <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#f6efe9] text-[#AD6419] transition group-hover:bg-[#AD6419] group-hover:text-white">
        {getIcon()}
      </div>
      <p className="mb-2 text-sm font-semibold tracking-wide text-[#AD6419] uppercase">{header}</p>
      <p className="text-xl md:text-2xl font-bold text-slate-800 mb-3">{title}</p>
      <p className="text-slate-500 text-[11px] leading-relaxed">{description}</p>
    </div>
  );
}