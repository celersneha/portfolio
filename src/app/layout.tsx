import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.snehasharma.me"),
  title: {
    default: "Sneha Sharma | Next.js & GenAI Developer",
    template: "%s - Sneha Sharma | Next.js & GenAI Developer",
  },
  description:
    "Full Stack Developer specializing in Next.js, GenAI, and modern web technologies. Experienced in building scalable, high-performance applications with React.js, Node.js, MongoDB, and PostgreSQL. Based in Indore, India.",
  keywords: [
    "Sneha Sharma",
    "celersneha",
    "Next.js Developer",
    "GenAI Developer",
    "Full Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "FastAPI Developer",
    "Livekit Developer",
    "Livekit",
    "MERN Stack Developer",
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
    "The Algorithm",
    "The Algorithm Software Company",
  ],
  authors: [{ name: "Sneha Sharma", url: "https://www.snehasharma.me" }],
  creator: "Sneha Sharma",
  publisher: "Sneha Sharma",
  applicationName: "Sneha Sharma Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  verification: {
    google: "IANU7tJOZ8duM6yXQwKjzF7YQml50jSng7SVGHo3du0",
  },
  manifest: "/favicon-images/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.snehasharma.me",
    siteName: "Sneha Sharma Portfolio",
    title: "Sneha Sharma | Next.js & GenAI Developer",
    description:
      "Full Stack Developer specializing in Next.js, React.js, Node.js, Express.js, MongoDB, and PostgreSQL. Building scalable, high-performance web applications with modern technologies. Based in Indore, India.",
    images: [
      {
        url: "https://www.snehasharma.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sneha Sharma - Next.js & GenAI Developer Portfolio",
        type: "image/png",
      },
      {
        url: "https://www.snehasharma.me/favicon-images/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Sneha Sharma Profile",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@celersneha",
    creator: "@celersneha",
    title: "Sneha Sharma | Next.js & GenAI Developer",
    description:
      "Portfolio of Sneha Sharma — Next.js & MERN developer with emerging interest in GenAI, building scalable web applications and learning in public.",
    images: {
      url: "https://www.snehasharma.me/og-image.png",
      alt: "Sneha Sharma Portfolio",
    },
  },
  alternates: {
    canonical: "https://www.snehasharma.me",
    languages: {
      "en-US": "https://www.snehasharma.me",
    },
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "msapplication-TileColor": "#da532c",
    "msapplication-config": "/favicon-images/browserconfig.xml",
  },
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
      telephone: "+91-87705-79552",
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
        "FastAPI",
        "Livekit",
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
          dateCreated: "2024-10-01",
          dateModified: "2024-12-01",
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
          dateCreated: "2024-08-01",
          dateModified: "2024-11-01",
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
          dateCreated: "2024-06-01",
          dateModified: "2024-09-01",
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
          dateCreated: "2024-05-01",
          dateModified: "2024-08-01",
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
          dateCreated: "2024-04-01",
          dateModified: "2024-07-01",
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
          dateCreated: "2024-03-01",
          dateModified: "2024-06-01",
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
          dateCreated: "2024-02-01",
          dateModified: "2024-05-01",
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
          dateCreated: "2024-01-01",
          dateModified: "2024-04-01",
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
      name: "Sneha Sharma | Next.js & GenAI Developer",
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
      logo: {
        "@type": "ImageObject",
        url: "https://www.snehasharma.me/favicon-images/android-chrome-512x512.png",
        width: 512,
        height: 512,
      },
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
      inLanguage: "en-US",
      dateCreated: "2024-01-01",
      dateModified: "2025-01-26",
      copyrightYear: 2025,
      copyrightHolder: {
        "@id": "https://www.snehasharma.me/#person",
      },
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
      dateModified: "2025-01-26",
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
      logo: {
        "@type": "ImageObject",
        url: "https://www.snehasharma.me/og-image.png",
        width: 1200,
        height: 630,
      },
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
        geo: {
          "@type": "GeoCoordinates",
          latitude: "22.7196",
          longitude: "75.8577",
        },
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "celersneha@gmail.com",
        telephone: "+91-87705-79552",
        contactType: "Business Inquiries",
        availableLanguage: ["English", "Hindi"],
        areaServed: "Worldwide",
      },
      sameAs: [
        "https://github.com/celersneha",
        "https://linkedin.com/in/celersneha",
        "https://x.com/celersneha",
      ],
      foundingDate: "2024-01-01",
      numberOfEmployees: 1,
      serviceType: [
        "Web Development",
        "Full Stack Development",
        "Frontend Development",
        "Backend Development",
        "AI Integration",
        "Chrome Extension Development",
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
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Favicons and Web App Manifest */}
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
        <link rel="manifest" href="/favicon-images/site.webmanifest" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* SEO and Social Media Meta Tags */}
        <link rel="canonical" href="https://www.snehasharma.me" />
        <link rel="me" href="https://github.com/celersneha" />
        <link rel="me" href="https://linkedin.com/in/celersneha" />
        <link rel="me" href="https://x.com/celersneha" />

        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Indore" />
        <meta name="geo.position" content="22.7196;75.8577" />
        <meta name="ICBM" content="22.7196, 75.8577" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicon-images/browserconfig.xml"
        />

        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Sneha Sharma Portfolio"
        />

        {/* Preload critical resources */}
        <link rel="preload" href="/og-image.png" as="image" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Toaster
          theme="system"
          position="bottom-right"
          closeButton={false}
          richColors
          expand={false}
          duration={4000}
        />
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col min-h-screen md:ml-72">
            <main className="flex-1" role="main">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
