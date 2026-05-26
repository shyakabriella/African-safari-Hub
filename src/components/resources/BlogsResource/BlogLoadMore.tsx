type Props = {
  showing: number;
  total: number;
};

export default function BlogLoadMore({ showing, total }: Props) {
  return (
    <div className="w-[960px] h-[88px] flex flex-col justify-center items-center gap-[24px] mb-10 mt-2">
      <div className="w-[131.13px] h-[16px] min-w-max">
        <span className="text-[12px] font-normal leading-[16px] text-[#64748B]">
          Showing {showing} of {total} articles
        </span>
      </div>
    </div>
  );
}
