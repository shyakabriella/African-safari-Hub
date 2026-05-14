import Image from "next/image";

export default function EmpowerYourTeamBanner() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1280px] h-[694px] pr-[32px] pl-[32px] pt-[96px] pb-[96px]">
        <div className="w-[1216px] h-[502px] flex items-center justify-evenly gap-[48px]">
          <div className="w-[584px] h-[456px] flex flex-col gap-[20px] mt-20">
            <div className="relative w-[273.02px] h-[28px] pt-[4px] pb-[4px] pr-[12px] pl-[12px] rounded-[9999px] bg-[#8B4513]/10 text-center flex items-center justify-center">
              <div className="absolute w-full h-full rounded-[9999px] bg-[#FFFFFF]/0.2"></div>
              <span className="w-[249.02px] h-[20px] text-[14px] font-medium text-[#8B4513]">
                Expert Property Management Support
              </span>
            </div>
            <div className="w-[584px] h-[90px]">
              <span className="w-full h-full text-[30px] font-extrabold">
                <span className="text-[#0F172A]">Empower Your Team.</span>{" "}
                <br />
                <span className="text-[#8B4513]">Master Your Operations.</span>
              </span>
            </div>
            <div className="w-[576px] h-[60px]">
              <span className="w-[544.75px] h-full text-[15px] font-normal text-[#475569]">
                Seamless PMS onboarding, expert training, and 24/7 support to
                ensure your hotel runs like clockwork. Reduce errors and
                maximize guest satisfaction.
              </span>
            </div>
            <div className="w-full h-[68px] flex items-center gap-[16px]">
              <button className="cursor-pointer h-[50px] px-[28px] rounded-[16px] bg-[#8B4513] flex items-center justify-center">
                <span className="font-semibold text-[10px] text-white whitespace-nowrap">
                  Schedule Training
                </span>
              </button>

              <button className="cursor-pointer h-[50px] px-[28px] rounded-[16px] bg-white border border-[#E2E8F0] flex items-center justify-center">
                <span className="font-semibold text-[10px] text-[#0F172A] whitespace-nowrap">
                  View Support Plans
                </span>
              </button>
            </div>
          </div>
          <div className="w-[524px] h-[402px]">
            <div className="relative w-full h-full rounded-[16px] bg-[#FFFFFF]/0.2 border border-[#FFFFFF]/20 shadow-md">
              <Image
                src={"/pms-banner.png"}
                alt="PMS Banner"
                fill
                className="absolute rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
