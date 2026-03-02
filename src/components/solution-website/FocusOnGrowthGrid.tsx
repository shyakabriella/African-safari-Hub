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
  bgClassName = "",
  titleClassName = "",
  textClassName = "",
}: FocusOnGrowthProp) {
  return (
    <div className={`w-[276px] h-[250px] pt-[120px] pl-[32px] pr-[32px] pb-[32px] rounded-[16px] rounded-2xl shadow-md ${bgClassName}`}>
      <h3 className={`text-xl font-bold mb-3 ${titleClassName}`}>
        {title}
      </h3>
      <p className={`text-sm ${textClassName}`}>
        {description}
      </p>
    </div>
  )
}
