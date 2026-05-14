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
    <div
      className={`p-5 rounded-2xl shadow-sm flex flex-col justify-between gap-2 min-h-[140px] ${bgClassName}`}
    >
      <h3 className={`text-lg font-bold ${titleClassName}`}>
        {title}
      </h3>

      <p className={`text-xs leading-relaxed ${textClassName}`}>
        {description}
      </p>
    </div>
  );
}