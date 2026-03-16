import Image from "next/image";

export default function EmpowerYourTeamBanner() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1280px] h-[694px] pr-[32px] pl-[32px] pt-[96px] pb-[96px]">
        <div className="w-[1216px] h-[502px] flex items-center justify-between gap-[48px]">
          <div className="w-[584px] h-[456px] flex flex-col gap-[32px]">
            <div className="relative w-[273.02px] h-[28px] pt-[4px] pb-[4px] pr-[12px] pl-[12px] rounded-[9999px] bg-[#8B4513]/10 text-center flex items-center justify-center">
              <div className="absolute w-full h-full rounded-[9999px] bg-[#FFFFFF]/0.2"></div>
              <span className="w-[249.02px] h-[20px] text-[14px] font-medium text-[#8B4513]">
                Expert Property Management Support
              </span>
            </div>
            <div className="w-[584px] h-[180px]">
              <span className="w-full h-full text-[55px] font-extrabold">
                <span className="text-[#0F172A]">Empower Your Team.</span>{" "}
                <span className="text-[#8B4513]">Master Your Operations.</span>
              </span>
            </div>
            <div className="w-[576px] h-[84px] mt-13">
              <span className="w-[544.75px] h-full text-[18px] font-normal text-[#475569]">
                Seamless PMS onboarding, expert training, and 24/7 support to
                ensure your hotel runs like clockwork. Reduce errors and maximize
                guest satisfaction.
              </span>
            </div>
            <div className="w-full h-[68px] flex items-center gap-[16px]">
              <button className="relative w-[254.66px] h-[68px] pt-[20px] pb-[20px] pr-[40px] pl-[40px] rounded-[16px] bg-[#8B4513]">
                <span className="w-[174.66px] h-[28px] font-bold text-[20px] text-white">Schedule Training</span>
              </button>
              <button className="w-[233.64px] h-[68px] pr-[32px] pl-[32px] pt-[19px] pb-[19px] rounded-[16px] bg-white border border-[#E2E8F0]">
                <span className="w-[167.64px] h-[28px] font-bold text-[18px] text-[#0F172A]">
                  View Support Plans
                </span>
              </button>
            </div>
          </div>
          <div className="w-[584px] h-[502px]">
            <div className="relative w-full h-full rounded-[16px] bg-[#FFFFFF]/0.2 border border-[#FFFFFF]/20 shadow-md">
              <Image 
                src={'/pms-banner.png'}
                alt="PMS Banner"
                fill
                className="absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
