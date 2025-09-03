"use client";

import { useState, useEffect } from "react";
import { WakaTimeStats } from "@/components/dashboard/WakaTimeStats";
import { Contributions } from "@/components/dashboard/Contributions";
import { motion } from "motion/react";

export default function Dashboard() {
  const [heatmapData, setHeatmapData] = useState<
    Array<{
      week: number;
      day: number;
      contributions: number;
      intensity: number;
    }>
  >([]);

  const generateHeatmapData = () => {
    const data = [];
    for (let week = 0; week < 53; week++) {
      for (let day = 0; day < 7; day++) {
        const contributions = Math.floor(Math.random() * 5);
        data.push({
          week,
          day,
          contributions,
          intensity:
            contributions === 0
              ? 0
              : contributions <= 1
              ? 1
              : contributions <= 2
              ? 2
              : contributions <= 3
              ? 3
              : 4,
        });
      }
    }
    return data;
  };

  useEffect(() => {
    setHeatmapData(generateHeatmapData());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="min-h-screen p-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            Dashboard
          </h1>
        </div>
        {/* WakaTime Stats Card */}
        <div className="mb-8">
          <WakaTimeStats />
        </div>

        {/* Contributions Component */}
        <Contributions />
      </div>
    </motion.div>
  );
}
