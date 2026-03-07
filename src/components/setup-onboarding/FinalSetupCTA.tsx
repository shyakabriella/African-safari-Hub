import React from 'react'

export default function FinalSetupCTA() {
  return (
    <section className="w-full h-[520px] flex justify-center">
      <div className='w-[1280px] pr-[160px] pl-[160px] flex justify-center items-center text-center'>
        <div className='w-[960px] h-[428px] pt-[48px] pb-[48px] pr-[144px] pl-[144px] rounded-[32px] bg-[#8B4513] flex justify-center items-center text-center'>
          <div className='w-[672px] h-[332px] flex flex-col gap-[24px]'>
            {/* header */}
            <div className='w-full h-[96px]'>
              <span className='w-[638.3px] h-[96px] font-bold text-[48px] leading-[48px] text-[#FFFFFF]'>
                Ready to Launch Your Hotel the Right Way?
              </span>
            </div>
            {/* desc */}
            <div className='w-full h-[56px] mt-3'>
              <span className='w-[651.02px] h-full font-normal text-[#F1F5F9] text-[20px] leading-[28px]'>
                Join 200+ hotels that skipped the technical headache and went straight to profitability.
              </span>
            </div>
            {/* buttons */}
            <div className='w-[672px] h-[80px] flex items-center gap-[16px] pl-15'>
              <button className='cursor-pointer w-[317.08px] h-[64px] rounded-[16px] bg-[#FFFFFF]'>
                <span className='w-full h-[28px] font-bold text-[18px] leading-[28px] text-[#8B4513]'>
                  Start Your Fast-Track Today
                </span>
              </button>
              
              <button className='cursor-pointer w-[217.06px] h-[64px] pr-[40px] pl-[40px] rounded-[16px] border-2 border-[#FFFFFF]/30'>
                <span className='w-[133.06] h-[28px] font-bold text-[18px] leading-[28px] text-[#FFFFFF]'>
                  Schedule a Call
                </span>
              </button>
            </div>
            
            {/* end */}
            <div className='w-[672px] h-[28px]'>
              <span className='w-[386.45px] h-[20px] text-[14px] text-[#E2E8F0]/80 leading-[20px]'>
                Free Initial Audit • No-Obligation Consultation • Expert Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
