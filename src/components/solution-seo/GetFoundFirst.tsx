import Image from "next/image";

export default function GetFoundFirst() {
  return (
    <section className="w-full mt-17 flex justify-center items-center mb-8">
      <div className="relative shadow-2xl flex w-6xl justify-center items-center h-[406px] pr-40 pl-15 pt-32 pb-32 rounded-xl overflow-hidden">
        {/* Background Image */}
        <Image
          src={"/background.png"}
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          className="absolute top-0 left-0 z-0"
        />

        {/* Dark overlay to make text pop */}
        <div className="absolute top-0 left-0 w-full h-full z-10 rounded-xl bg-gradient-to-r from-[#D9BFA8]/100 to-[#D9BFA8]/10"></div>

        {/* Text content */}
        <div className="relative pt-6 z-20 w-[768px] h-[378px] flex flex-col gap-[24px]">
          <div className="w-[269.23px] h-7 rounded-full bg-[#D9BFA8]/10 pb-1.5 pr-4 pl-4 flex justify-center items-center">
            <span className="w-[237.23px] h-[16px] font-bold text-[14px] text-[#D9BFA8]">
              HOSPITALITY MARKETING EXPERTS
            </span>
          </div>
          <div className="w-[768px] h-[60px]">
            <span className="text-[30px] font-extrabold leading-[1]">
              <span className="text-[#0F172A]">Get Found First.</span> <br />
              <span className="text-[#876649]">Book More Directly.</span>
            </span>
          </div>
          <div className="w-[672px] h-[64px]">
            <span className="text-[12px] text-[#4a4035] font-normal">
              Dominate search results, outrank third-party booking sites, and
              attract <br /> more guests with our specialized hospitality SEO
              solutions tailored for <br /> luxury stays.
            </span>
          </div>
          <div className="w-[768px] h-[74px] pt-[16px] flex gap-[16px]">
            <a href="/contact" target="_blank" className="w-[120px] h-[40px] rounded-[12px] bg-[#D9BFA8] flex justify-center items-center border border-[#947F6C]">
              <span className="text-[10px] font-bold text-[#0F172A]">
                Contact Our Team
              </span>
            </a>

            <a href="/resources/case-studies" target="_blank" className="w-[200px] h-[40px] rounded-[12px] bg-[#ffffff] border border-[#D9BFA8]/40 flex justify-center items-center">
              <span className="font-bold text-[10px] text-[#0F172A]">
                View Case Studies
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
