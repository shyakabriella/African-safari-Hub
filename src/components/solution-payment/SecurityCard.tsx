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
      <div>{icon}</div>
      <div className="flex flex-col mt-3 ml-3">
        <div className="text-[#0F172A] font-bold text-[16px]">{title}</div>
        <div className="text-[#64748B] text-[14px] font-normal">{description}</div>
      </div>
    </>
  );
}
