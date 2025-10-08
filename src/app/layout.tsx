import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.snehasharma.me"),
  title: {
    default: "Sneha Sharma | Next.js + GenAI Developer",
    template: "%s | Sneha Sharma",
  },
  description:
    "Full Stack Developer specializing in Next.js, GenAI, and modern web technologies. Expert in building scalable, high-performance applications with React.js, Node.js, MongoDB, and PostgreSQL. Focused on delivering user-centric solutions, AI-powered features, and seamless digital experiences. Based in Indore, India.",
  keywords: [
    "Sneha Sharma",
    "celersneha",
    "Sneha Sharma Portfolio",
    "Next.js Developer",
    "GenAI Developer",
    "Full Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "MERN Stack",
    "MERN Developer Indore",
    "Web Developer Indore",
    "MongoDB",
    "PostgreSQL",
    "TypeScript",
    "JavaScript",
    "AI Integration",
    "Chrome Extension Developer",
    "GraphQL",
    "RESTful API",
    "Express.js",
    "Software Engineer India",
    "Acropolis Institute of Technology",
    "Payment Integration",
    "Razorpay",
    "User-centric Solutions",
    "Scalable Applications",
    "High Performance Apps",
    "Software Engineer India",
    "Web Application Developer",
    "Scalable Applications",
    "High Performance Apps",
    "DevZoku",
    "Hackathon Platform",
    "InvisiFeed",
    "Anonymous Feedback",
    "InactiTab",
    "Tab Management",
    "EduZen",
    "AI Education",
    "PdfIQ",
    "AI Chat PDF",
    "TickTask",
    "GraphQL Todo",
    "RoastRadar",
    "Anonymous Messaging",
    "CineHue",
    "Movie Discovery",
    "Portfolio",
    "Modern Web Technologies",
    "Frontend Developer",
    "Backend Developer",
    "Project Portfolio",
    "Open Source",
    "Cloud Deployment",
    "AI-powered Applications",
    "Indore",
    "India",
    "UI/UX",
    "Performance Optimization",
    "APIs",
    "Team Collaboration",
    "Freelance Developer",
    "Remote Work",
    "Tech Community",
    "Learning in Public",
  ],
  authors: [{ name: "Sneha Sharma", url: "https://www.snehasharma.me" }],
  creator: "Sneha Sharma",
  publisher: "Sneha Sharma",
  verification: {
    google: "IANU7tJOZ8duM6yXQwKjzF7YQml50jSng7SVGHo3du0",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.snehasharma.me",
    siteName: "Sneha Sharma | Next.js + GenAI Developer",
    title: "Sneha Sharma | Next.js + GenAI Developer",
    description:
      "Experienced Full Stack Developer specializing in Next.js, React.js, Node.js, Express.js, MongoDB, and PostgreSQL. Building scalable, high-performance web applications with modern technologies. Based in Indore, India. Expert in RESTful APIs, GraphQL, and full-stack development.",
    images: [
      {
        url: "https://www.snehasharma.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sneha Sharma | Next.js + GenAI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@celersneha",
    creator: "@celersneha",
    title: "Sneha Sharma | Next.js + GenAI Developer",
    description:
      "Portfolio of Sneha Sharma — Next.js & MERN developer,  with emerging interest in GenAI, building scalable web applications and learning in public.",
    images: ["https://www.snehasharma.me/og-image.png"],
  },
  alternates: {
    canonical: "https://www.snehasharma.me",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.snehasharma.me/#person",
      name: "Sneha Sharma",
      alternateName: "celersneha",
      url: "https://www.snehasharma.me",
      image: {
        "@type": "ImageObject",
        url: "https://www.snehasharma.me/og-image.png",
        width: 1200,
        height: 630,
      },
      description:
        "Full Stack Developer specializing in Next.js, React.js, Node.js, Express.js, MongoDB, and PostgreSQL. Proficient in AI integration, Chrome extensions, and modern web technologies.",
      jobTitle: "Full Stack Web Developer & Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Freelance Developer",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Acropolis Institute of Technology and Research",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Indore",
          addressRegion: "Madhya Pradesh",
          addressCountry: "India",
        },
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        addressCountry: "India",
      },
      email: "mailto:celersneha@gmail.com",
      sameAs: [
        "https://github.com/celersneha",
        "https://linkedin.com/in/celersneha",
        "https://x.com/celersneha",
      ],
      knowsAbout: [
        "Web Development",
        "Frontend Development",
        "Backend Development",
        "Full Stack Development",
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "GraphQL",
        "RESTful APIs",
        "MERN Stack",
        "Chrome Extensions",
        "AI Integration",
        "Langchain.js",
        "Google Gemini",
        "MistralAI",
        "Socket.io",
        "Docker",
        "Microservices",
        "Cloud Computing",
        "DevOps",
        "CI/CD",
        "Tailwind CSS",
        "Framer Motion",
        "React Hook Form",
        "NextAuth.js",
        "Drizzle ORM",
        "Prisma",
        "BullMQ",
        "Qdrant",
        "Vector Databases",
        "Real-time Applications",
        "Performance Optimization",
        "SEO",
        "Web Accessibility",
        "Responsive Design",
        "Progressive Web Apps",
        "Serverless Architecture",
        "API Development",
        "Database Design",
        "Security Best Practices",
        "Test-Driven Development",
        "Agile Methodologies",
        "Version Control",
        "Git",
        "GitHub Actions",
        "Vercel",
        "AWS",
        "Azure",
        "Google Cloud Platform",
      ],
      hasProject: [
        {
          "@type": "SoftwareApplication",
          name: "DevZoku",
          description:
            "Modern hackathon management platform with AI-powered team matching",
          url: "https://devzoku.app",
          applicationCategory: "Web Application",
          operatingSystem: "Web Browser",
          programmingLanguage: ["Next.js", "TypeScript", "PostgreSQL"],
          creator: {
            "@id": "https://www.snehasharma.me/#person",
          },
        },
        {
          "@type": "SoftwareApplication",
          name: "InvisiFeed",
          description:
            "Revolutionary anonymous feedback platform with AI-powered sentiment analysis",
          url: "https://invisifeed.vercel.app",
          applicationCategory: "Web Application",
          operatingSystem: "Web Browser",
          programmingLanguage: ["Next.js", "JavaScript", "MongoDB"],
          creator: {
            "@id": "https://www.snehasharma.me/#person",
          },
        },
        {
          "@type": "SoftwareApplication",
          name: "InactiTab",
          description:
            "Chrome extension for automatic tab management and performance optimization",
          url: "https://inactitab.vercel.app",
          applicationCategory: "Browser Extension",
          operatingSystem: "Chrome",
          programmingLanguage: ["JavaScript", "Manifest V3"],
          creator: {
            "@id": "https://www.snehasharma.me/#person",
          },
        },
        {
          "@type": "SoftwareApplication",
          name: "EduZen",
          description:
            "AI-powered learning companion with personalized education features",
          url: "https://github.com/celersneha/eduzen",
          applicationCategory: "Web Application",
          operatingSystem: "Web Browser",
          programmingLanguage: ["Next.js", "TypeScript", "MongoDB"],
          creator: {
            "@id": "https://www.snehasharma.me/#person",
          },
        },
        {
          "@type": "SoftwareApplication",
          name: "PdfIQ",
          description:
            "AI-powered PDF chat application with vector search capabilities",
          url: [
            "https://github.com/celersneha/chat-with-pdf",
            "https://pdfiq.vercel.app",
          ],
          applicationCategory: "Web Application",
          operatingSystem: "Web Browser",
          programmingLanguage: ["Next.js", "TypeScript", "PostgreSQL"],
          creator: {
            "@id": "https://www.snehasharma.me/#person",
          },
        },
        {
          "@type": "SoftwareApplication",
          name: "TickTask",
          description:
            "Modern GraphQL-powered todo application with real-time updates",
          url: "https://github.com/celersneha/todo-graphql",
          applicationCategory: "Web Application",
          operatingSystem: "Web Browser",
          programmingLanguage: ["React", "TypeScript", "GraphQL"],
          creator: {
            "@id": "https://www.snehasharma.me/#person",
          },
        },
        {
          "@type": "SoftwareApplication",
          name: "RoastRadar",
          description:
            "Anonymous messaging platform with AI-powered roast suggestions",
          applicationCategory: "Web Application",
          url: "https://roastradar.netlify.app",
          operatingSystem: "Web Browser",
          programmingLanguage: ["Next.js", "TypeScript", "MongoDB"],
          creator: {
            "@id": "https://www.snehasharma.me/#person",
          },
        },
        {
          "@type": "SoftwareApplication",
          name: "CineHue",
          description:
            "Modern movie discovery application with real-time search",
          url: "https://cinehue.vercel.app",
          applicationCategory: "Web Application",
          operatingSystem: "Web Browser",
          programmingLanguage: ["React", "TypeScript", "Vite"],
          creator: {
            "@id": "https://www.snehasharma.me/#person",
          },
        },
      ],
      gender: "Female",
      nationality: "Indian",
      birthPlace: {
        "@type": "Place",
        name: "India",
      },
      homeLocation: {
        "@type": "Place",
        name: "Indore, Madhya Pradesh, India",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.snehasharma.me/#website",
      url: "https://www.snehasharma.me",
      name: "Sneha Sharma | Next.js + GenAI Developer",
      description:
        "Portfolio website showcasing full-stack web development projects, skills, and professional experience of Sneha Sharma",
      publisher: {
        "@id": "https://www.snehasharma.me/#person",
      },
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.snehasharma.me/projects?search={search_term_string}",
        "query-input": "required name=search_term_string",
      },
      logo: "https://www.snehasharma.me/favicon.ico",
      mainEntity: {
        "@id": "https://www.snehasharma.me/#person",
      },
      about: [
        "Web Development",
        "Software Engineering",
        "Full Stack Development",
        "React.js",
        "Next.js",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "AI Integration",
        "Chrome Extensions",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.snehasharma.me/#profilepage",
      url: "https://www.snehasharma.me",
      name: "Sneha Sharma Portfolio - Full Stack Developer",
      isPartOf: {
        "@id": "https://www.snehasharma.me/#website",
      },
      about: {
        "@id": "https://www.snehasharma.me/#person",
      },
      mainEntity: {
        "@id": "https://www.snehasharma.me/#person",
      },
      description:
        "Professional portfolio showcasing Sneha Sharma's expertise in full-stack web development, AI integration, and modern software engineering practices",
      dateModified: "2025-01-15",
      datePublished: "2024-01-01",
      inLanguage: "en-US",
      audience: {
        "@type": "Audience",
        audienceType: [
          "Recruiters",
          "Clients",
          "Developers",
          "Tech Enthusiasts",
        ],
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.snehasharma.me/#organization",
      name: "Sneha Sharma - Freelance Development",
      url: "https://www.snehasharma.me",
      logo: "https://www.snehasharma.me/og-image.png",
      description:
        "Freelance full-stack development services specializing in modern web technologies",
      founder: {
        "@id": "https://www.snehasharma.me/#person",
      },
      employee: {
        "@id": "https://www.snehasharma.me/#person",
      },
      location: {
        "@type": "Place",
        name: "Indore, Madhya Pradesh, India",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "celersneha@gmail.com",
        contactType: "Business Inquiries",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: [
        "https://github.com/celersneha",
        "https://linkedin.com/in/celersneha",
        "https://x.com/celersneha",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.snehasharma.me/#breadcrumbs",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.snehasharma.me/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://www.snehasharma.me/about",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Projects",
          item: "https://www.snehasharma.me/projects",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Tech Stack",
          item: "https://www.snehasharma.me/tech-stack",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Contact",
          item: "https://www.snehasharma.me/contact",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-images/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-images/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon-images/android-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon-images/apple-touch-icon.png"
        />
        <link
          rel="shortcut icon"
          href="/favicon-images/favicon.ico"
          type="image/x-icon"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* SEO extras */}
        <link rel="canonical" href="https://www.snehasharma.me" />
        <link rel="me" href="https://github.com/celersneha" />
        <link rel="me" href="https://linkedin.com/in/celersneha" />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Indore" />
        <meta name="geo.position" content="22.7196;75.8577" />
        <meta name="ICBM" content="22.7196, 75.8577" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Toaster theme="system" position="bottom-right" closeButton={false} />
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col min-h-screen md:ml-72">
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
