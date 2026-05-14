interface WhyChooseUsProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyChooseUsCard({
  icon,
  title,
  description,
}: WhyChooseUsProps) {
  return (
    <div className="p-5 rounded-xl bg-[#F5E6D3]/30 border border-[#F5E6D3]/40 shadow-sm flex flex-col gap-3 hover:shadow-md transition">
      
      {/* Icon */}
      <div className="text-[#8B4513]">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-[#5C3317]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#8B4513]/80 leading-relaxed">
        {description}
      </p>

    </div>
  );
}