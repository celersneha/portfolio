import { MetadataRoute } from "next";
import { siteConfig } from "./(seo)/metadata";

// Dynamic sitemap generation for Sneha Sharma Portfolio
export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const lastModified = new Date("2024-08-08"); // Update this when you make significant changes

  // Only real, crawlable URLs (no hash fragments)
  const routes = [
    {
      url: siteConfig.url,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    // Uncomment and add these routes if you have real pages (not SPA sections)
    // {
    //   url: `${siteConfig.url}/projects`,
    //   lastModified: lastModified,
    //   changeFrequency: "monthly" as const,
    //   priority: 0.9,
    // },
    // {
    //   url: `${siteConfig.url}/contact`,
    //   lastModified: lastModified,
    //   changeFrequency: "monthly" as const,
    //   priority: 0.8,
    // },
  ];

  // Project-specific URLs (only if they are real pages)
  // const projectRoutes = siteConfig.projects.map((project) => ({
  //   url: project.url.startsWith("http")
  //     ? project.url
  //     : `${siteConfig.url}/projects/${project.name.toLowerCase()}`,
  //   lastModified: lastModified,
  //   changeFrequency: "monthly" as const,
  //   priority: 0.6,
  // }));

  return [
    ...routes,
    // ...projectRoutes,
  ];
}
