export type WakaTimeData = {
  bestDay: string;
  dailyAverage: string;
  endDate: string;
  startDate: string;
  weeklyTotal: string;
  allTimeTotal: string;
};

export async function fetchWakaTimeData(): Promise<WakaTimeData> {
  const API_KEY = process.env.WAKATIME_API_KEY;
  if (!API_KEY) throw new Error("WakaTime API key not configured");

  const headers = {
    Authorization: `Basic ${Buffer.from(API_KEY).toString("base64")}`,
  };

  const [weeklyRes, allTimeRes] = await Promise.all([
    fetch("https://wakatime.com/api/v1/users/current/stats/last_7_days", {
      headers,
    }),
    fetch("https://wakatime.com/api/v1/users/current/all_time_since_today", {
      headers,
    }),
  ]);

  if (!weeklyRes.ok || !allTimeRes.ok)
    throw new Error("Failed to fetch WakaTime data");

  const weeklyData = await weeklyRes.json();
  const allTimeData = await allTimeRes.json();

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const startDate = new Date(weeklyData.data.start).toLocaleDateString(
    "en-US",
    dateOptions
  );
  const endDate = new Date(weeklyData.data.end).toLocaleDateString(
    "en-US",
    dateOptions
  );
  const bestDay = `${new Date(weeklyData.data.best_day.date).toLocaleDateString(
    "en-US",
    dateOptions
  )} (${weeklyData.data.best_day.text})`;

  return {
    startDate,
    endDate,
    dailyAverage: weeklyData.data.human_readable_daily_average,
    weeklyTotal: weeklyData.data.human_readable_total_including_other_language,
    bestDay,
    allTimeTotal: allTimeData.data.text,
  };
}
