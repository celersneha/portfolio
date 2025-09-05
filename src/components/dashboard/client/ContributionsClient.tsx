// components/dashboard/ContributionsClient.tsx
"use client";

import { useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

type CommitGraphProps = { date: string; count: string };
type StatsProps = {
  total: string;
  thisWeek: string;
  bestDay: string;
  average: string;
  commitGraph: CommitGraphProps[];
};

export default function ContributionsClient({ stats }: { stats: StatsProps }) {
  const [commits, setCommits] = useState({
    count: null as number | null,
    date: "",
  });

  const maxCount = stats.commitGraph.length
    ? Math.max(...stats.commitGraph.map((d) => Number(d.count)))
    : 0;

  const getColorClass = (v: any) => {
    if (!v?.count) return "color-empty";
    const ratio = v.count / maxCount;
    if (ratio <= 0.25) return "color-scale-1";
    if (ratio <= 0.5) return "color-scale-2";
    if (ratio <= 0.75) return "color-scale-3";
    return "color-scale-4";
  };

  return (
    <div className="space-y-4 rounded-xl border p-6 shadow-lg">
      <div className="flex items-center mb-4">
        <FaGithub className="w-5 h-5 mr-2 text-green-500" />
        <h2 className="text-2xl font-semibold">Contributions</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat title="Total" value={stats.total} />
        <Stat title="This Week" value={stats.thisWeek} />
        <Stat title="Best Day" value={stats.bestDay} />
        <Stat title="Average" value={`${stats.average} / day`} />
      </div>

      {stats.commitGraph.length > 0 && (
        <CalendarHeatmap
          startDate={new Date(stats.commitGraph[0].date)}
          endDate={
            new Date(stats.commitGraph[stats.commitGraph.length - 1].date)
          }
          values={stats.commitGraph.map((d) => ({
            date: d.date,
            count: Number(d.count),
          }))}
          classForValue={getColorClass}
          onMouseOver={(e, v) =>
            v && setCommits({ count: v.count, date: v.date })
          }
          onMouseLeave={() => setCommits({ count: null, date: "" })}
        />
      )}

      {commits.count && (
        <div className="fixed left-1/2 bottom-8 -translate-x-1/2 z-50 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg rounded-xl px-3 py-2 flex flex-wrap items-center gap-1 max-w-xs w-full text-sm transition-all duration-200 animate-fade-in">
          <span className="font-bold text-green-600 text-base">
            {commits.count}
          </span>
          <span className="text-slate-700 dark:text-slate-300">
            contributions
          </span>
          <span className="mx-1 text-xs text-slate-400">on</span>
          <span className="font-mono text-xs text-blue-500 break-all">
            {commits.date}
          </span>
        </div>
      )}

      <Link href="https://github.com/celersneha" className="text-blue-500">
        @celersneha
      </Link>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="p-2 border rounded-lg shadow-sm">
      <p className="font-medium">{title}</p>
      <p className="text-xl text-[#2dba4e]">{value}</p>
    </div>
  );
}
