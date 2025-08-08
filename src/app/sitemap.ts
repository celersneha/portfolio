import { MetadataRoute } from "next";
import { siteConfig } from "./(seo)/metadata";

// Dynamic sitemap generation for Sneha Sharma Portfolio
export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const lastModified = new Date("2024-08-08"); // Update this when you make significant changes

  // Base routes for single page application sections
  const routes = [
    {
      url: siteConfig.url,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/#home`,
      lastModified: lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/#about`,
      lastModified: lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/#projects`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/#contact`,
      lastModified: lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Project-specific URLs for better SEO
  const projectRoutes = siteConfig.projects.map((project) => ({
    url: project.url.startsWith("http")
      ? project.url
      : `${siteConfig.url}/projects/${project.name.toLowerCase()}`,
    lastModified: lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Additional important pages
  const additionalRoutes = [
    {
      url: `${siteConfig.url}/resume`,
      lastModified: lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/skills`,
      lastModified: lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // If you add blog or other dynamic pages later, you can add them here
  // const blogPosts = await getBlogPosts();
  // const blogRoutes = blogPosts.map((post) => ({
  //   url: `${siteConfig.url}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: "monthly" as const,
  //   priority: 0.6,
  // }));

  return [
    ...routes,
    // ...projectRoutes, // Uncomment when project pages are created
    // ...additionalRoutes, // Uncomment when additional pages are created
    // ...blogRoutes, // Uncomment when you add blog
  ];
}
