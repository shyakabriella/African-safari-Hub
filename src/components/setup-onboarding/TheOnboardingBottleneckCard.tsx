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
      <div className="w-[318px] h-[28px] mt-3">
        <span className="w-[200.17px] h-[28px] font-bold text-[20px] text-[#0F172A]">
          {title}
        </span>
      </div>
      <div className="w-[318px] h-[72px] mt-3">
        <span className="w-[284.86px] h-full text-[16px] text-[#64748B] font-normal">
          {description}
        </span>
      </div>
    </div>
  );
}