import Image from "next/image";

export default function GuestHouseBanner() {
  return (
    <section className="w-full flex justify-center items-center mb-12 mt-20">
      <div className="w-[1120px] h-[416px] flex gap-[48px]">
        <div className="w-[536px] h-[416px] flex flex-col gap-[32px]">
          <div className="w-[536px] h-[250px] flex flex-col gap-[16px]">
            <div className="w-[250.45px] h-[24px] pt-[4px] pb-[4px] pr-[12px] pl-[12px] rounded-[9999px] bg-[#8B4513]/10 flex items-center justify-center">
              <span className="font-bold text-[9px] leading-[17px] text-[#8B4513] whitespace-nowrap">
                BOUTIQUE HOSPITALITY MANAGEMENT
              </span>
            </div>

            <div className="w-[536px] h-[90px]">
              <span className="w-full h-full font-extrabold text-[30px] leading-[48px]">
                <span className="text-[#0F172A]">Preserve the</span>{" "}
                <span className="text-[#0F172A]">Charm,</span> <br />
                <span className="text-[#8B4513]">Automate The Rest</span>
              </span>
            </div>

            <div className="w-full h-[20px]">
              <span className="text-[15px] leading-[28px] font-normal text-[#475569]">
                Don&apos;t let administrative burdens overshadow your
                hospitality. Seamlessly manage bookings while focusing on what
                matters most: your guests.
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="/contact"
              target="_blank"
              className="w-[234px] h-[64px] flex items-center justify-center rounded-[12px] bg-[#8B4513]"
            >
              <span className="font-bold text-[13px] text-white">
                Start Free Trial
              </span>
            </a>

            <a
              href="/contact"
              target="_blank"
              className="w-[179px] h-[64px] flex items-center justify-center rounded-[12px] border border-[#8B4513]/20"
            >
              <span className="font-bold text-[13px] text-[#8B4513]">
                Watch Demo
              </span>
            </a>
          </div>
        </div>

        <div className="relative w-[636px] h-[401.5px] rounded-[20px] overflow-hidden">
          <Image
            src={"/GuestHouseBanner.png"}
            alt="Guest House Banner"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
