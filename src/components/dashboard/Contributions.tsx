"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

type CommitGraphProps = {
  date: string;
  count: string;
};

type StatsProps = {
  total: string;
  thisWeek: string;
  bestDay: string;
  average: string;
  commitGraph: CommitGraphProps[];
};

export const Contributions = () => {
  const [stats, setStats] = useState<StatsProps>({
    total: "",
    thisWeek: "",
    bestDay: "",
    average: "",
    commitGraph: [],
  });

  const [commits, setCommits] = useState({
    count: null,
    date: "",
  });

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/github");
      const { total, thisWeek, bestDay, average, commitGraph } =
        await res.json();
      console.log(commitGraph);
      setStats({
        total,
        thisWeek,
        bestDay,
        average,
        commitGraph,
      });
    };

    getData();
  }, []);

  const StatsContainer = ({
    title,
    value,
  }: {
    title: string;
    value: string;
  }) => (
    <div className="p-2 border border-neutral-200 shadow-sm rounded-lg">
      <p className="font-medium">{title}</p>
      <p className="text-xl md:text-2xl font-medium text-[#2dba4e]">
        {value}{" "}
        {title === "Average" && (
          <span className="text-base text-neutral-800">/ day</span>
        )}
      </p>
    </div>
  );

  // Calculate max count for dynamic color scaling
  const maxCount = stats.commitGraph.length
    ? Math.max(...stats.commitGraph.map((d) => Number(d.count)))
    : 0;

  // Helper to get color class based on value and maxCount
  const getColorClass = (value: any) => {
    if (!value || value.count === undefined || value.count === null)
      return "color-empty";
    const count = value.count;
    if (maxCount === 0) return "color-empty";
    // 4 levels: 0-25%, 25-50%, 50-75%, 75-100%
    const ratio = count / maxCount;
    if (count === 0) return "color-empty";
    if (ratio <= 0.25) return "color-scale-1";
    if (ratio <= 0.5) return "color-scale-2";
    if (ratio <= 0.75) return "color-scale-3";
    return "color-scale-4";
  };

  return (
    <div className="space-y-4  rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 mb-8">
      <div className="flex items-center mb-4">
        <span className="mr-2 text-green-500">
          <FaGithub className="w-5 h-5" />
        </span>
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
          Contributions
        </h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="md:flex justify-between items-center space-y-1">
            <p className="text-slate-600 dark:text-slate-400">
              My contributions from last year on github.
            </p>
            <Link
              href="https://github.com/celersneha"
              className="text-neutral-400 hover:text-blue-500 transition-colors"
            >
              @celersneha
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 md:px-2 gap-3">
            <StatsContainer title="Total" value={stats.total} />
            <StatsContainer title="This Week" value={stats.thisWeek} />
            <StatsContainer title="Best Day" value={stats.bestDay} />
            <StatsContainer title="Average" value={stats.average} />
          </div>
        </div>

        <div className="space-y-2">
          {stats.commitGraph.length > 0 && (
            <CalendarHeatmap
              startDate={new Date(stats.commitGraph[0].date)}
              endDate={
                new Date(stats.commitGraph[stats.commitGraph.length - 1].date)
              }
              values={stats.commitGraph.map((day) => ({
                date: day.date,
                count: Number(day.count),
              }))}
              onMouseOver={(e, v) =>
                v && setCommits({ count: v.count, date: v.date })
              }
              onMouseLeave={() => setCommits({ count: null, date: "" })}
              gutterSize={4}
              classForValue={getColorClass}
            />
          )}

          <div className="w-full space-y-2 md:flex justify-between items-center">
            <div className="flex items-center space-x-2 mt-4">
              <span className="text-sm">Less</span>
              <div className="flex space-x-1">
                <div
                  className="size-2 md:size-2.5"
                  style={{ background: "#9be9a8" }}
                ></div>
                <div
                  className="size-2 md:size-2.5"
                  style={{ background: "#40c463" }}
                ></div>
                <div
                  className="size-2 md:size-2.5"
                  style={{ background: "#30a14e" }}
                ></div>
                <div
                  className="size-2 md:size-2.5"
                  style={{ background: "#216e39" }}
                ></div>
              </div>
              <span className="text-sm">More</span>
            </div>
            <div
              className={`bg-gray-200 px-3 font-medium text-sm rounded-sm max-w-fit ${
                !commits.count && "hidden"
              }`}
            >
              {commits.count} contributions on {commits.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
