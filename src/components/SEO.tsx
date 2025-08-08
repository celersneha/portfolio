import { Metadata } from "next";
import { siteConfig, structuredData } from "@/app/(seo)/metadata";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export function generateSEOMetadata({
  title,
  description,
  image,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  section,
  tags,
}: SEOProps = {}): Metadata {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const seoDescription = description || siteConfig.description;
  const seoImage = image || siteConfig.ogImage;
  const seoUrl = url || siteConfig.url;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: tags || siteConfig.keywords,
    openGraph: {
      type,
      url: seoUrl,
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
      publishedTime,
      modifiedTime,
      section,
      tags,
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
    },
    alternates: {
      canonical: seoUrl,
    },
  };
}

export function StructuredDataScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noindex?: boolean;
  canonical?: string;
}

export function SEOHead({
  title,
  description,
  image,
  url,
  noindex = false,
  canonical,
}: SEOHeadProps) {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const seoDescription = description || siteConfig.description;
  const seoImage = image || siteConfig.ogImage;
  const seoUrl = url || siteConfig.url;
  const canonicalUrl = canonical || seoUrl;

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={siteConfig.keywords.join(", ")} />
      <meta name="author" content={siteConfig.author.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:creator" content={siteConfig.author.twitter} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Structured Data */}
      <StructuredDataScript />
    </>
  );
}
