interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  classNameIcon?: string;
}

export default function InfoPaymentCard({ icon, title, description, className = "", classNameIcon = "" }: CardProps) {
  return (
    <div className={`w-[378.66px] h-70.5 flex flex-col gap-8 p-4 pt-8 rounded-xxl ${className}`}>
      <div className={`shrink-0 w-12 h-12 rounded-lg flex justify-center items-center ${classNameIcon}`}>
        {icon}
      </div>
      <div className="flex flex-col justify-center gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}
