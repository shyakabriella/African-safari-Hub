import Image from "next/image";

export default function GetFoundFirst() {
  return (
    <section className="w-full mt-17 flex justify-center items-center mb-8">
      <div className="relative shadow-2xl flex w-6xl justify-center items-center h-[596px] pr-40 pl-15 pt-32 pb-32 rounded-xl overflow-hidden">
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
        <div className="relative z-20 w-[768px] h-[378px] flex flex-col gap-[24px]">
          <div className="w-[269.23px] h-7 rounded-full bg-[#D9BFA8]/10 pb-1.5 pr-4 pl-4 flex justify-center items-center">
            <span className="w-[237.23px] h-[16px] font-bold text-[14px] text-[#D9BFA8]">
              HOSPITALITY MARKETING EXPERTS
            </span>
          </div>
          <div className="w-[768px] h-[120px]">
            <span className="text-[60px] font-extrabold leading-[1]">
              <span className="text-[#0F172A]">Get Found First.</span> <br />
              <span className="text-[#876649]">Book More Directly.</span>
            </span>
          </div>
          <div className="w-[672px] h-[84px]">
            <span className="text-[20px] text-[#7B6B5A] font-normal">
              Dominate search results, outrank third-party booking sites, and
              attract <br /> more guests with our specialized hospitality SEO
              solutions tailored for <br /> luxury stays.
            </span>
          </div>
          <div className="w-[768px] h-[74px] pt-[16px] flex gap-[16px]">
            <button className="w-[178px] h-[58px] rounded-[12px] bg-[#D9BFA8] flex justify-center items-center border border-[#947F6C]">
              <span className="text-[16px] font-bold text-[#0F172A]">
                Free SEO Audit
              </span>
            </button>
            <button className="w-[208.41px] h-[58px] pt-[16px] pb-[16px] pr-[32px] pl-[32px] rounded-[12px] bg-[#ffffff] border border-[#D9BFA8]/40">
              <span className="w-[142.41px] h-[24px] font-bold text-[16px] text-[#0F172A]">
                View Case Studies
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
