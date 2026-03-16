import Image from "next/image";
import ThreeStepsTrainingCard from "./ThreeStepsTrainingCard";

export default function ThreeStepsTraining() {
  return (
    <section className="w-full flex justify-center items-center mt-20">
      <div className="w-[1218px] h-[584px] flex items-center justify-between gap-[48px]">
        <div className="w-[584px] h-[380px] flex flex-col gap-[24px]">
          <div className="w-[584px] h-[40px]">
            <span className="w-full h-full text-[36px] font-extrabold">
              <span className="text-[#0F172A]">Our 3-Step</span>{" "}
              <span className="text-[#8B4513]">Training Solution</span>
            </span>
          </div>
          <div className="w-full h-[316px] flex flex-col gap-[28px] mt-6">
            <ThreeStepsTrainingCard
              count="1"
              title="Phase 1: Deep-Dive System Setup"
              description="We configure your PMS to your specific operational needs, ensuring a rock-solid foundation for your team."
            />
            <ThreeStepsTrainingCard
              count="2"
              title="Phase 2: Hands-on Staff Workshops"
              description="Interactive training sessions tailored to different departments—from front desk to housekeeping."
            />
            <ThreeStepsTrainingCard
              count="3"
              title="Phase 3: Go-Live Support & Optimization"
              description="On-site or remote assistance during launch to troubleshoot issues and fine-tune workflows in real-time."
            />
          </div>
        </div>
        <div className="relative w-[584px] h-[584px] bg-[#FFFFFF]/0.2 rounded-[16px]">
          <Image 
            src={'/TeamCollaboration.png'}
            alt="Training"
            fill
            className="absolute rounded-[16px]"
          />
        </div>
      </div>
    </section>
  )
}
