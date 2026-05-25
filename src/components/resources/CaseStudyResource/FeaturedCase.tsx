import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/data/caseStudies";

type Props = {
  caseStudy?: CaseStudy;
};

export default function FeaturedCase({ caseStudy }: Props) {
  const cs: CaseStudy =
    caseStudy ?? {
      id: "grand-plaza",
      category: "Luxury",
      rooms: "500+ Rooms",
      title: "Grand Plaza Resort & Spa",
      summary:
        "How a leading luxury property redefined guest engagement and recovered from 80% dependency on OTA bookings within 18 months.",
      image: "/featured-case-photo.png",
      metrics: [
        { value: "+40%", label: "DIRECT BOOKINGS" },
        { value: "+25%", label: "OTA FEE SPEND" },
      ],
    };

  return (
    <div className="w-[1120px] h-auto pb-[30px]">
      <div className="rounded-[12px] overflow-hidden border border-[#E2E8F0] bg-white">
        <div className="relative w-full h-[300px]">
          {cs.image && (
            <Image
              src={cs.image}
              alt={cs.title}
              fill
              className="object-contain object-top"
              priority
            />
          )}
        </div>

        <div className="w-full p-[40px] flex flex-col gap-[16px]">
          <div className="flex items-center gap-[8px]">
            <span className="font-bold text-[14px] text-[#8B4513]">{cs.category}</span>
            <div className="w-[4px] h-[4px] rounded-full bg-[#CBD5E1]"></div>
            <span className="font-medium text-[14px] text-[#64748B]">{cs.rooms}</span>
          </div>

          <h2 className="text-[24px] font-bold leading-[32px] text-[#0F172A]">{cs.title}</h2>

          <p className="text-[16px] text-[#64748B] leading-[24px]">{cs.summary}</p>

          <div className="w-[1038px] h-[84px] pb-[32px] mt-3">
            <div className="w-full h-[52px] flex gap-[24px]">
              <div className="w-[5px] h-full bg-[#8B4513]"></div>
              <div>
                <div className="w-[487px] h-[36px]">
                  <span className="w-full h-full text-[30px] font-extrabold leading-[36px] text-[#0F172A]">{cs.metrics?.[0]?.value ?? "+40%"}</span>
                </div>
                <div className="w-[487px] h-[16px]">
                  <span className="w-full h-full text-[12px] font-normal text-[#64748B] leading-[16px]">{cs.metrics?.[0]?.label ?? "DIRECT BOOKINGS"}</span>
                </div>
              </div>

              <div className="w-[5px] h-full bg-[#10B981]"></div>
              <div>
                <div className="w-[487px] h-[36px]">
                  <span className="w-full h-full text-[30px] font-extrabold leading-[36px] text-[#0F172A]">{cs.metrics?.[1]?.value ?? "+25%"}</span>
                </div>
                <div className="w-[487px] h-[16px]">
                  <span className="w-full h-full text-[12px] font-normal text-[#64748B] leading-[16px]">{cs.metrics?.[1]?.label ?? "OTA FEE SPEND"}</span>
                </div>
              </div>
            </div>
          </div>

          <Link
            href={`/resources/case-studies/${cs.id}`}
            className="cursor-pointer w-[198.75px] h-[48px] rounded-[12px] px-[32px] bg-[#8B4513] flex items-center justify-center gap-2"
          >
            <span className="text-white font-medium text-[13px]">Read Case Study</span>
            <span className="text-white text-[20px]">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
