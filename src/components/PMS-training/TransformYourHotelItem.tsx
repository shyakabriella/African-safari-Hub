import { CheckCircle } from "lucide-react";

interface TransformYourHotelProps {
  text: string;
}

export default function TransformYourHotelItem({ text }: TransformYourHotelProps) {
  return (
    <div className="w-[576px] h-[24px] flex items-center gap-[15px]">
      <div className="w-[20px] h-[20px]">
        <span className="w-full h-full text-white"><CheckCircle /></span>
      </div>
      <div className="w-[349.14px] h-[24px]">
        <span className="w-full h-full font-normal text-[16px] text-white leading-[24px]">{text}</span>
      </div>
    </div>
  )
}