interface RoiProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function RoiCard({ icon, title, description }: RoiProps) {
  return (
    <div className='w-[415px] h-[76px] flex gap-[16px]'>
      <div className='w-[40px] h-[40px] flex items-center justify-center rounded-[8px] bg-[#7B6B5A]/10'>
        <span className='w-[20px] h-[12px] text-[#7B6B5A] flex justify-center items-center'>
          {icon}
        </span>
      </div>

      <div className='w-[351.95px] h-[76px] flex flex-col'>
        <div className='w-[351.95px] h-[28px]'>
          <span className='w-[142.34px] h-[28px] font-bold text-[#4A3B2A] text-[18px]'>
            {title}
          </span>
        </div>
        <div className='w-[351.95px] h-[48px]'>
          <span className="w-full h-full text-[16px] font-normal text-[#A19182]">
            {description}
          </span>
        </div>
      </div>
    </div>
  )
}