import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Configuration
const siteConfig = {
  name: "Sneha Sharma",
  title:
    "Sneha Sharma - Full Stack Developer | Next.js Expert | Building Scalable Web Applications",
  description:
    "Experienced Full Stack Developer specializing in Next.js, React.js, Node.js, Express.js, MongoDB, and PostgreSQL. Building scalable, high-performance web applications with modern technologies. Based in Indore, India. Expert in RESTful APIs, GraphQL, and full-stack development.",
  url: "https://snehasharma.me",
  ogImage: "https://snehasharma.me/og-image.png",
  keywords: [
    "Sneha Sharma Web Developer",
    "Web Developer Indore",
    "MERN Stack Developer",
    "Next.js Developer",
    "React.js Developer",
    "Node.js Developer",
    "Full Stack Developer",
    "JavaScript Expert",
    "MongoDB Developer",
    "PostgreSQL",
    "Express.js",
    "GraphQL Developer",
    "RESTful API",
    "Frontend Developer India",
    "Backend Developer",
    "Computer Science Engineering",
    "Acropolis Institute",
    "Chrome Extension Developer",
    "AI Integration Developer",
    "Payment Gateway Integration",
    "InvisiFeed",
    "InactiTab",
    "QuickBites",
    "Tailwind CSS",
    "TypeScript",
    "React Mastery",
    "NPTEL Certified",
    "Software Engineer India",
    "Web Application Developer",
    "Scalable Applications",
    "High Performance Apps",
  ],
  author: {
    name: "Sneha Sharma",
    email: "snehav2109@gmail.com",
    twitter: "@SnehaDevs",
    linkedin: "https://linkedin.com/in/ss0807",
    github: "https://github.com/SnehaSharma245",
    phone: "+91 87705 79552",
    location: "Indore, Madhya Pradesh, India",
  },
};

// Metadata for SEO
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.author.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  verification: {
    google: "IANU7tJOZ8duM6yXQwKjzF7YQml50jSng7SVGHo3du0",
  },
};

// Structured Data for Google
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.author.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/profile-image.jpg`,
  description: siteConfig.description,
  jobTitle: "Full Stack Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    addressCountry: "India",
  },
  email: siteConfig.author.email,
  telephone: siteConfig.author.phone,
  sameAs: [
    siteConfig.author.linkedin,
    siteConfig.author.github,
    siteConfig.author.twitter,
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Acropolis Institute of Technology and Research",
  },
  knowsAbout: [
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Express.js",
    "GraphQL",
    "RESTful APIs",
    "MERN Stack",
    "Chrome Extensions",
    "AI Integration",
  ],
  award: [
    "React Mastery Certification [CodProg]",
    "NPTEL Certification in C++",
    "NPTEL Certification in C",
    "1st Runner-up, Learn and Win 2022 (IIST)",
  ],
  gender: "Female",
  nationality: "Indian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
