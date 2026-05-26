import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { HubNewsArticle } from "@/data/hubNews";

type Props = {
  featured: HubNewsArticle;
};

export default function FeaturedPosts({ featured }: Props) {
  const imageSrc = featured.image.startsWith("http") ? "/featured-post.png" : featured.image;

  return (
    <div className="flex w-[960px] h-[549px] pb-[16px] mt-15 rounded-[12px] bg-white border border-[#F1F5F9]">
      <div className="w-[574.8px] relative h-[531px]">
        <Image
          src={imageSrc}
          alt={featured.title}
          fill
          className="absolute rounded-[12px] object-cover"
        />
      </div>
      <div className="w-[383.2px] h-[531px] flex flex-col gap-[16px] p-[48px]">
        <div className="w-[287.2px] h-[24px] flex gap-[8px]">
          <div className="w-auto flex justify-center items-center text-center h-[24px] pt-[4px] pb-[4px] pr-[12px] pl-[12px] rounded-[9999px] bg-[#8B4513]/10">
            <span className="font-bold text-[12px] text-[#8B4513] leading-[16px]">
              {featured.category}
            </span>
          </div>
          <div className="h-[16px]">
            <span className="font-normal text-[12px] leading-[16px] text-[#94A3B8]">
              {featured.date}
            </span>
          </div>
        </div>
        <div className="w-[287.2px] min-h-[113px]">
          <span className="text-[30px] font-bold leading-[37.5px] text-[#0F172A]">
            {featured.title}
          </span>
        </div>
        <div className="w-[287.2px] min-h-[130px]">
          <span className="font-normal text-[#475569] text-[16px] leading-[26px]">
            {featured.excerpt}
          </span>
        </div>
        <div className="w-[174.26px] h-[64px] pt-[16px]">
          <Link
            href={`/resources/blog/${featured.slug}`}
            className="cursor-pointer w-full h-[48px] flex items-center justify-center gap-2 px-[24px] rounded-[8px] bg-[#8B4513]"
          >
            <span className="font-bold text-[13px] leading-[20px] text-white">
              Read Full Article
            </span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
