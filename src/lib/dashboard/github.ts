export interface GitHubStats {
  total: number;
  thisWeek: number;
  bestDay: number;
  average: number;
  commitGraph: { date: string; count: number }[];
}

export async function fetchGitHubStats(): Promise<GitHubStats> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GitHub token not configured");

  const query = `
    {
      viewer {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) throw new Error("Failed to fetch GitHub data");

  const rawData = await response.json();
  const weeks =
    rawData.data.viewer.contributionsCollection.contributionCalendar.weeks;
  const allDays = weeks.flatMap((week: any) => week.contributionDays);

  const total =
    rawData.data.viewer.contributionsCollection.contributionCalendar
      .totalContributions;
  const thisWeek = weeks[weeks.length - 1].contributionDays.reduce(
    (sum: number, day: any) => sum + day.contributionCount,
    0
  );
  const bestDay = Math.max(...allDays.map((day: any) => day.contributionCount));
  const average = Math.round(
    allDays.reduce((sum: number, day: any) => sum + day.contributionCount, 0) /
      allDays.length
  );

  const commitGraph = allDays.map((day: any) => ({
    date: day.date,
    count: day.contributionCount,
  }));

  return { total, thisWeek, bestDay, average, commitGraph };
}
