interface FocusOnGrowthProp {
  title: string;
  description: string;
  bgClassName?: string;
  titleClassName?: string;
  textClassName?: string;
}

export default function FocusOnGrowthGrid({
  title,
  description,
  bgClassName = "bg-[#8B4513]/10",
  titleClassName = "text-[#5C3317]",
  textClassName = "text-[#8B4513]/80",
}: FocusOnGrowthProp) {
  return (
    <div className={`w-[276px] h-[250px] pt-[120px] pl-[32px] pr-[32px] pb-[32px] rounded-2xl shadow-md ${bgClassName}`}>
      <h3 className={`text-xl font-bold mb-3 ${titleClassName}`}>
        {title}
      </h3>
      <p className={`text-sm ${textClassName}`}>
        {description}
      </p>
    </div>
  )
}