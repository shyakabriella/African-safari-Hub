interface TheOnboardingBottleneckCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function TheOnboardingBottleneckCard({
  icon,
  title,
  description,
}: TheOnboardingBottleneckCardProps) {
  return (
    <div className="w-[384px] h-[230px] pt-9 pl-4 rounded-[16px] bg-[#FFFFFF]/50 border border-[#F1F5F9]">
      {icon}
      <div className="w-[318px] h-[28px] mt-5">
        <span className="w-[200.17px] h-[28px] font-bold text-[18px] text-[#8B4513]">
          {title}
        </span>
      </div>
      <div className="w-[318px] h-[72px] mt-2">
        <span className="w-[284.86px] h-full text-[13px] text-[#64748B] font-normal">
          {description}
        </span>
      </div>
    </div>
  );
}