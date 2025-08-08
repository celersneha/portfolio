import { MetadataRoute } from "next";

// Site URL
const SITE_URL = "https://snehasharma.me";

// Dynamic sitemap generation for Sneha Sharma Portfolio
export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Only real, crawlable URLs (no hash fragments)
  const routes = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
  ];

  return routes;
}
