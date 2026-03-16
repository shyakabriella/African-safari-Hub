import React from 'react'

export default function FinalSetupCTA() {
  return (
    <section className="w-full flex justify-center mb-8">
      <div className="w-[1280px] flex justify-center items-center text-center px-16">
        <div className="w-full max-w-[960px] rounded-[32px] bg-[#8B4513] flex flex-col justify-center items-center text-center px-12 py-12">
          <div className="w-full flex flex-col gap-8">
            {/* Header */}
            <div className="w-full">
              <span className="font-extrabold text-[45px] leading-[1.1] text-white block">
                Ready to Launch Your Hotel <br /> the Right Way?
              </span>
            </div>

            {/* Description */}
            <div className="w-full">
              <span className="font-normal text-[20px] leading-[32px] text-[#F1F5F9] block">
                Join 200+ hotels that skipped the technical headache and went straight to profitability.
              </span>
            </div>

            {/* Buttons */}
            <div className="w-full flex flex-wrap justify-center gap-6 mt-2">
              <button className="cursor-pointer px-10 py-5 rounded-[16px] bg-white">
                <span className="font-bold text-[18px] text-[#8B4513]">
                  Start Your Fast-Track Today
                </span>
              </button>
              
              <button className="cursor-pointer px-10 py-5 rounded-[16px] border-2 border-white/30">
                <span className="font-bold text-[18px] text-white">
                  Schedule a Call
                </span>
              </button>
            </div>

            {/* Footer Text */}
            <div className="w-full mt-2">
              <span className="text-[16px] text-white/80 leading-[20px]">
                Free Initial Audit • No-Obligation Consultation • Expert Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}