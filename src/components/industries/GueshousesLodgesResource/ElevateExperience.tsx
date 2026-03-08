import { CheckCircle, MonitorSmartphone, Smile } from "lucide-react";
import ElevateExperienceCard from "./ElevateExperienceCard";
import Image from "next/image";

export default function ElevateExperience() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1280px] h-[736px] pl-[80px] pr-[80px] pt-[112px] pb-[96px] bg-[#1A120B] flex justify-center items-center">
        <div className="w-[1120px] h-[528px] flex items-center gap-[64px]">
          <div className="w-[528px] h-[488px] flex flex-col gap-[40px]">
            <div className="w-[528px] h-[80px]">
              <span className="font-bold text-[36px] text-white leading-[40px]">
                Elevate Your Guest Experience
              </span>
            </div>
            <div className="w-full h-[264px] flex flex-col gap-[24px]">
              <ElevateExperienceCard
                icon={<Smile />}
                title="More Time with Guests"
                description="Automate the paperwork and spend your energy hosting, cooking, and sharing the local charm."
              />
              <ElevateExperienceCard
                icon={<CheckCircle />}
                title="Organized Operations"
                description="Housekeeping schedules, breakfast counts, and maintenance logs—all in one central hub."
              />
              <ElevateExperienceCard
                icon={<MonitorSmartphone />}
                title="Professional Digital Presence"
                description="A modern booking engine that matches the high quality of your physical establishment."
              />
            </div>
          </div>

          <div className="w-[448px] h-[248px] flex gap-[16px]">
            <div className="relative w-[250px] h-[250px]">
              <Image
                src={"/elevate-one.png"}
                fill
                alt="elevate One"
                className="absolute rounded-[16px]"
              />
            </div>
            <div className="relative w-[216px] h-[275px]">
              <Image
                src={"/elevate-two.png"}
                alt="elevate Two"
                fill
                className="absolute rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
