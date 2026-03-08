import TailoredTechnologyCard from './TailoredTechnologyCard'

export default function TailoredTechnology() {
  return (
    <section className="w-full flex justify-center items-center mb-30">
      <div className="w-[1280px] h-[625px] flex flex-col pt-[80px] pb-[80px] pr-[160px] pl-[160px]">
        <div className="w-[960px] h-[465px] flex flex-col gap-[48px]">
          
          <div className="w-[768px] h-[117px] flex flex-col gap-[16px]">
            <div className='w-[672px] h-[20px]'>
              <span className='text-[14px] font-bold leading-[20px] text-[#8B4513]'>
                Our Solutions
              </span>
            </div>
            <div className="w-full h-[45px]">
              <span className="font-extrabold text-[36px] leading-[45px] text-[#0F172A]">
                Tailored Technology for Mid-Market Excellence
              </span>
            </div>
            <div className="w-full h-[56px] mt-12">
              <span className="font-normal text-[18px] leading-[28px] text-[#475569]">
                We&apos;ve built a suite of tools specifically for the unique rhythm of mid-size hotel <br /> operations.
              </span>
            </div>
          </div>

          <div className="w-[960px] h-[300px] flex gap-[40px] mt-12">
            <TailoredTechnologyCard
              image="/trailored-tech-one.png"
              title="Scalable PMS"
              description="A powerful property management system that simplifies check-ins, housekeeping, and billing in one intuitive interface."
            />
            <TailoredTechnologyCard
              image="/trailored-tech-two.png"
              title="Direct Booking Engine"
              description="Convert website visitors into guests with a seamless, mobile-optimized booking flow that cuts out the middleman."
            />
            <TailoredTechnologyCard
              image="/trailored-tech-three.png"
              title="Staff Efficiency Tools"
              description="Automate guest communication and internal task management to save your team hours of manual work every single day."
            />
          </div>

        </div>
      </div>
    </section>
  )
}
