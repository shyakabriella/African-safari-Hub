import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  img: string;
  header: string;
  timer: string;
  title: string;
  description: string;
}

export default function ArticleCard({
  img,
  header,
  timer,
  title,
  description,
}: ArticleCardProps) {
  return (
    <div className="w-[298.66px] flex flex-col gap-[16px] pb-[25px] rounded-[12px] bg-white border border-[#F1F5F9] overflow-hidden">

      <div className="relative w-full h-[166px] flex-shrink-0">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-[12px] p-[24px] text-center items-center">

        <div className="w-full flex justify-between text-[12px]">
          <span className="font-bold text-[#8B4513]">{header}</span>
          <span className="text-[#94A3B8]">{timer}</span>
        </div>

        <h3 className="text-[20px] font-bold leading-[25px] text-[#0F172A] line-clamp-2">
          {title}
        </h3>

        <p className="text-[14px] leading-[20px] text-[#475569] line-clamp-3">
          {description}
        </p>

        <Link
          href="#"
          className="flex items-center gap-[6px] text-[14px] font-bold text-[#8B4513]"
        >
          Read Insight
          <div className="relative w-[10px] h-[10px]">
            <Image
              src="/arrow-no-tail.png"
              alt="Arrow"
              fill
              className="object-contain"
            />
          </div>
        </Link>

      </div>
    </div>
  );
}