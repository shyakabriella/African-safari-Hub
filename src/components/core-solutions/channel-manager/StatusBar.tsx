import StatusBarCard from "./StatusBarCard";

export default function StatusBar() {
  return (
    <div className="w-[1200px] h-[254px] pl-[24px] pr-[24px] pb-[80px]">
      <div className="w-[1152px] h-[174px] flex gap-[24px]">
        <StatusBarCard
          header="Average Sync Speed"
          title="< 2 Seconds"
        />
        <StatusBarCard
          header="Error Reduction"
          title="100% Guaranteed"
        />
        <StatusBarCard
          header="Global Channels"
          title="450+ Integrated"
        />
      </div>
    </div>
  )
}
