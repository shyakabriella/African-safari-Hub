import { Calendar, Receipt, Tag } from 'lucide-react'
import TailoredHospitalityCard from './TailoredHospitalityCard'

export default function TailoredHospitality() {
  return (
    <section className="w-full flex justify-center items-center mb-10">
      <div className="w-[1280px] h-[625px] flex flex-col pt-[10px] pb-[80px]">
        <div className="h-[465px] flex flex-col gap-[48px]">
          
          <div className="w-[768px] h-[117px] flex flex-col gap-[16px]">
            <div className="w-full h-[45px]">
              <span className="font-extrabold text-[36px] leading-[45px] text-[#0F172A]">
                Tailored for Boutique Hospitality
              </span>
            </div>
            <div className="w-full h-[56px]">
              <span className="font-normal text-[18px] leading-[28px] text-[#475569]">
                Our system is designed to handle the unique nuances of guesthouses and lodges, where every detail counts.
              </span>
            </div>
          </div>

          <div className="w-full h-[300px] flex gap-[40px] mt-2">
            <TailoredHospitalityCard
              image="/tailored-one.png"
              title="Simple Booking System"
              icon={<Calendar />}
              description="An intuitive calendar interface that your staff can master in minutes. Manage check-ins and check-outs with a single drag-and-drop."
            />
            <TailoredHospitalityCard
              image="/tailored-two.png"
              title="Guest Preference Tracking"
              icon={<Tag />}
              description="Remember every detail, from dietary needs to favorite rooms. Provide a personalized experience that brings guests back time and again."
            />
            <TailoredHospitalityCard
              image="/tailored-three.png"
              title="Easy Invoicing"
              icon={<Receipt />}
              description="Generate professional, branded invoices and process secure payments with one click. Integrated tax calculations for peace of mind."
            />
          </div>

        </div>
      </div>
    </section>
  )
}
