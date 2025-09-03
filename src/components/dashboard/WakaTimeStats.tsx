"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

type Item = {
  name: string;
  percent: number;
  color: string;
};

type WakaTimeData = {
  bestDay: string;
  dailyAverage: string;
  endDate: string;
  startDate: string;
  weeklyTotal: string;
  allTimeTotal: string;
};

type ShareableProps = {
  language: Item[];
};

export const WakaTimeStats = () => {
  const [data, setData] = useState<WakaTimeData>({
    bestDay: "",
    dailyAverage: "",
    endDate: "",
    startDate: "",
    weeklyTotal: "",
    allTimeTotal: "",
  });

  const [shareable, setShareable] = useState<ShareableProps>({
    language: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/get-stats");
        if (res.ok) {
          const {
            bestDay,
            dailyAverage,
            endDate,
            startDate,
            weeklyTotal,
            allTimeTotal,
          } = await res.json();

          setData({
            bestDay,
            dailyAverage,
            endDate,
            startDate,
            weeklyTotal,
            allTimeTotal,
          });
        }
      } catch (error) {
        console.error("Failed to fetch WakaTime data:", error);
      }
    };

    // const getLanguage = async () => {
    //   try {
    //     const res = await fetch(
    //       "https://wakatime.com/share/@rohitsx/7bbf6a11-2842-4d5e-92fd-5156cb72e37b.json"
    //     );
    //     if (res.ok) {
    //       const { data } = await res.json();
    //       setShareable((prev) => ({
    //         ...prev,
    //         language: data || [],
    //       }));
    //     }
    //   } catch (error) {
    //     console.error("Failed to fetch language data:", error);
    //   }
    // };

    const fetchAllData = async () => {
      setLoading(true);
      await Promise.all([getData()]);
      setLoading(false);
    };

    fetchAllData();
  }, []);

  const StatCard = ({ title, value }: { title: string; value: string }) => (
    <div className="border border-slate-200 dark:border-slate-700 w-full px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{title}</p>
      <div className="font-medium text-slate-800 dark:text-slate-100">
        {loading ? (
          <div className="animate-pulse bg-slate-200 dark:bg-slate-700 h-5 w-20 rounded" />
        ) : value === "" ? (
          "N/A"
        ) : (
          value
        )}
      </div>
    </div>
  );

  // Skeleton for the whole stats grid
  const StatsSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="border border-slate-200 dark:border-slate-700 w-full px-4 py-3 rounded-xl shadow-sm"
        >
          <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded mb-2 animate-pulse" />
          <div className="h-5 w-20 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
        </div>
      ))}
    </div>
  );

  // Only language StatList
  const StatList = ({
    title,
    data,
    variant = "languages",
  }: {
    title: string;
    data: Item[];
    variant?: "languages";
  }) => {
    const styles = {
      languages: {
        border: "border-red-300/80",
        gradient: "from-orange-400 to-red-500",
        defaultColor: "#ef476f",
      },
    };
    const { border, defaultColor } = styles[variant];

    return (
      <div className={`border-2 rounded-xl p-3 space-y-3 ${border}`}>
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-sm">{title}</h2>
        </div>
        <div className="space-y-2">
          {data.slice(0, 4).map((item) => (
            <div key={item.name} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{item.name}</span>
                <span>{item.percent}%</span>
              </div>
              <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${item.percent}%`,
                    background: `linear-gradient(90deg, ${item.color}, ${defaultColor})`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

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

        {loading ? (
          <StatsSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatCard title="Start Date" value={data.startDate} />
            <StatCard title="End Date" value={data.endDate} />
            <StatCard title="Daily Coding Average" value={data.dailyAverage} />
            <StatCard title="This Week Coding Time" value={data.weeklyTotal} />
            <StatCard title="Best Day Coding Time" value={data.bestDay} />
            <StatCard title="All Time Since Today" value={data.allTimeTotal} />
          </div>
        )}

        {/* <div className="mt-6">
          <StatList
            title="Languages"
            data={shareable.language}
            variant="languages"
          />
        </div> */}
      </div>
    </div>
  );
};
