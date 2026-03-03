interface SecurityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function SecurityCard({
  icon,
  title,
  description,
}: SecurityCardProps) {
  return (
    <>
      <div className="text-[#8B4513]">{icon}</div>
      <div className="flex flex-col mt-3 ml-3">
        <div className="text-[#5C3317] font-bold text-[16px]">{title}</div>
        <div className="text-[#A0522D] text-[14px] font-normal">{description}</div>
      </div>
    </>
  );
}