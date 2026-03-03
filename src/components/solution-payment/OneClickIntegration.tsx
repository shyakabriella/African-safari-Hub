import { Bed, Calendar, RefreshCw } from 'lucide-react'
import React from 'react'

export default function OneClickIntegration() {
  return (
    <section className="w-full mt-10 flex justify-center items-center pb-10">
      <div className='w-[1280px] h-[248px] flex flex-col gap-[64px] text-center pl-5'>
        <div className='w-[1216px] h-[76px] flex flex-col gap-[16px]'>
          <div className='w-full h-[36px]'>
            <span className='w-[313.53px] h-[36px] font-bold text-[30px] text-[#0F172A]'>
              One-Click Integration
            </span>
          </div>
          <div className='w-full h-[24px]'>
            <span className='text-[#475569] text-[16px] w-[569.13px] h-full font-normal'>
              Our payment gateway connects seamlessly with our Booking Engine and PMS.
            </span>
          </div>
        </div>

        <div className='w-[1216px] h-[108px] flex justify-center items-center gap-[48px]'>
          <div className='w-[99.92px] h-[92px] flex justify-center items-center flex-col gap-[12px]'>
            <div className='w-[64px] h-[64px] rounded-[9999px] bg-[#F5E6D3] flex justify-center items-center'>
              <div className='w-[22.5px] h-[25px]'>
                <Calendar className='w-[22.5px] h-[25px] text-[#8B4513]' />
              </div>
            </div>
            <div className='w-[99.92px] h-[16px]'>
              <span className='w-[99.92px] h-[16px] text-[#8B4513]/70 text-[12px] font-bold'>
                Booking Engine
              </span>
            </div>
          </div>

          <div className='w-[96px] h-[1px] bg-[#D9C5B3]'></div>

          <div className='w-[80px] h-[108px] flex items-center flex-col gap-[6px]'>
            <div className='w-[80px] h-[80px] flex justify-center items-center rounded-[16px] bg-[#8B4513]'>
              <div className='w-[24px] h-[24px]'>
                <RefreshCw className='w-full h-full text-[#F5E6D3]' />
              </div>
            </div>
            <div className='w-[62.8px] h-[16px]'>
              <span className='w-full h-full text-[12px] font-bold text-[#8B4513]'>Payments</span>
            </div>
          </div>

          <div className='w-[96px] h-[1px] bg-[#D9C5B3]'></div>

          <div className='w-[75.17px] h-[92px] flex flex-col items-center gap-[12px]'>
            <div className='w-[64px] h-[64px] flex justify-center items-center rounded-[9999px] bg-[#F5E6D3]'>
              <div className='w-[27.5px] h-[18.75px]'>
                <Bed className='w-[27.5px] h-[18.75px] text-[#8B4513]' />
              </div>
            </div>
            <div className='w-[75.17px] h-[16px]'>
              <span className='text-[#8B4513]/70 text-[12px] font-bold'>PMS System</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}