import { unstable_cache } from "next/cache";
import { FiClock } from "react-icons/fi";
import { fetchWakaTimeData, WakaTimeData } from "@/actions/dashboard/wakatime";

const getWakaTimeStats = unstable_cache(fetchWakaTimeData, ["wakatime-stats"], {
  revalidate: 3600,
});

export default async function WakaTimeStats() {
  const data: WakaTimeData = await getWakaTimeStats();

  const StatCard = ({ title, value }: { title: string; value: string }) => (
    <div className="border w-full px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <p className="text-sm text-white b-1">{title}</p>
      <div className="font-medium text-white">{value || "N/A"}</div>
    </div>
  );

  return (
    <div className="space-y-4 rounded-xl shadow-lg border   p-6">
      <div className="flex items-center mb-4">
        <span className="mr-2 text-primary">
          <FiClock className="w-5 h-5" />
        </span>
        <h2 className="text-2xl font-semibold ">Weekly Statistics</h2>
      </div>
      <div className="space-y-6">
        <p className="">My WakaTime last 7 days stats.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard title="Start Date" value={data.startDate} />
          <StatCard title="End Date" value={data.endDate} />
          <StatCard title="Daily Coding Average" value={data.dailyAverage} />
          <StatCard title="This Week Coding Time" value={data.weeklyTotal} />
          <StatCard title="Best Day Coding Time" value={data.bestDay} />
          <StatCard title="All Time Since Today" value={data.allTimeTotal} />
        </div>
      </div>
    </div>
  );
}
