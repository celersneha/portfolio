import { unstable_cache } from "next/cache";
import ContributionsClient from "../client/ContributionsClient";

const getGitHubStats = unstable_cache(
  async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/github`);
    if (!res.ok) throw new Error("Failed to fetch GitHub stats");
    return res.json();
  },
  ["github-stats"],
  { revalidate: 3600 }
);

export default async function ContributionsServer() {
  const stats = await getGitHubStats();
  return <ContributionsClient stats={stats} />;
}
