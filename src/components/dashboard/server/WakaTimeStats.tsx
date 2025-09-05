import { Clock } from "lucide-react";
import { unstable_cache } from "next/cache";

type WakaTimeData = {
  bestDay: string;
  dailyAverage: string;
  endDate: string;
  startDate: string;
  weeklyTotal: string;
  allTimeTotal: string;
};

const getWakaTimeStats = unstable_cache(
  async (): Promise<WakaTimeData> => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-stats`
    );
    if (!res.ok) throw new Error("Failed to fetch WakaTime data");
    return res.json();
  },
  ["wakatime-stats"],
  { revalidate: 3600 }
);

export default async function WakaTimeStats() {
  const data = await getWakaTimeStats();

  const StatCard = ({ title, value }: { title: string; value: string }) => (
    <div className="border border-slate-200 dark:border-slate-700 w-full px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{title}</p>
      <div className="font-medium text-slate-800 dark:text-slate-100">
        {value === "" ? "N/A" : value}
      </div>
    </div>
  );

  return (
    <div className="space-y-4  rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
      <div className="flex items-center mb-4">
        <span className="mr-2 text-blue-500">
          <Clock className="w-5 h-5" />
        </span>
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
          Weekly Statistics
        </h2>
      </div>
      <div className="space-y-6">
        <p className="text-slate-600 dark:text-slate-400">
          My WakaTime last 7 days stats.
        </p>
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
