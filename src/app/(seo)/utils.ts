import { siteConfig } from "@/app/(seo)/metadata";

// Helper functions for SEO
export const seoUtils = {
  // Generate page title with site name
  generateTitle: (pageTitle?: string) => {
    return pageTitle ? `${pageTitle} | ${siteConfig.name}` : siteConfig.title;
  },

  // Generate canonical URL
  generateCanonicalUrl: (path: string = "") => {
    return `${siteConfig.url}${path}`;
  },

  // Generate Open Graph image URL
  generateOgImageUrl: (imagePath?: string) => {
    return imagePath ? `${siteConfig.url}${imagePath}` : siteConfig.ogImage;
  },

  // Format keywords for meta tag
  formatKeywords: (additionalKeywords: string[] = []) => {
    return [...siteConfig.keywords, ...additionalKeywords].join(", ");
  },

  // Generate breadcrumb structured data
  generateBreadcrumbStructuredData: (
    breadcrumbs: Array<{ name: string; url: string }>
  ) => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  },

  // Generate FAQ structured data
  generateFAQStructuredData: (
    faqs: Array<{ question: string; answer: string }>
  ) => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };
  },

  // Generate WebSite structured data for search box
  generateWebsiteStructuredData: () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    };
  },
};

// Common meta tags for different page types
export const commonMetaTags = {
  homepage: {
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
  },

  about: {
    title: "About",
    description: `Learn more about ${siteConfig.author.name}, a passionate frontend developer specializing in modern web technologies.`,
    keywords: [...siteConfig.keywords, "about", "biography", "experience"],
  },

  projects: {
    title: "Projects",
    description: `Explore the portfolio of projects created by ${siteConfig.author.name}, showcasing skills in React, Next.js, and modern web development.`,
    keywords: [
      ...siteConfig.keywords,
      "projects",
      "portfolio",
      "work",
      "showcase",
    ],
  },

  contact: {
    title: "Contact",
    description: `Get in touch with ${siteConfig.author.name} for web development projects, collaborations, or opportunities.`,
    keywords: [
      ...siteConfig.keywords,
      "contact",
      "hire",
      "collaboration",
      "opportunities",
    ],
  },
};

export default seoUtils;
