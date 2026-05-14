interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  classNameIcon?: string;
}

export default function InfoCard({
  icon,
  title,
  description,
  className = "",
  classNameIcon = "",
}: CardProps) {
  return (
    <div
      className={`w-[300px] h-[180px] flex flex-col gap-4 p-5 rounded-2xl bg-white/40 border border-[#F5E6D3]/40 shadow-sm ${className}`}
    >
      
      <div
        className={`w-10 h-10 rounded-lg flex justify-center items-center ${classNameIcon}`}
      >
        {icon}
      </div>

      <div className="flex flex-col gap-2">
        
        <h3 className="text-sm font-bold text-[#8B4513]">
          {title}
        </h3>

        <p className="text-[#A0522D]/80 text-xs leading-relaxed">
          {description}
        </p>

      </div>
    </div>
  );
}