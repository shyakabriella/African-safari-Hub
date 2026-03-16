interface StatusBarCardProps {
  header: string;
  title: string;
}

export default function StatusBarCard({ header, title }: StatusBarCardProps) {
  return (
    <div className="w-[368px] h-[174px] p-[32px] mt-8 rounded-[12px] bg-white border border-[#8B4513]">
      <div className="w-[302px] h-[20px]">
        <span className="w-full h-full font-bold text-[#64748B] text-[14px] leading-[20px]">
          {header}
        </span>
      </div>
      <div className="w-[302px] h-[40px]">
        <span className="w-full h-full font-extrabold text-[#8B4513] leading-[40px] text-[36px]">
          {title}
        </span>
      </div>
    </div>
  );
}
