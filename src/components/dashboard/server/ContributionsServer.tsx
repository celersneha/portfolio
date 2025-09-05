import { unstable_cache } from "next/cache";
import ContributionsClient from "../client/ContributionsClient";
import { fetchGitHubStats } from "@/lib/dashboard/github";

const getGitHubStats = unstable_cache(fetchGitHubStats, ["github-stats"], {
  revalidate: 3600,
});

export default async function ContributionsServer() {
  const stats = await getGitHubStats();

  const transformedStats = {
    total: stats.total.toString(),
    thisWeek: stats.thisWeek.toString(),
    bestDay: stats.bestDay.toString(),
    average: stats.average.toString(),
    commitGraph: stats.commitGraph.map((day) => ({
      date: day.date,
      count: day.count.toString(),
    })),
  };

  return <ContributionsClient stats={transformedStats} />;
}
