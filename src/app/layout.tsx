import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";

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
    default: "Sneha Sharma | Full-Stack Web Developer & Software Engineer",
    template: "%s | Sneha Sharma",
  },
  description:
    "Experienced Full Stack Developer specializing in Next.js, React.js, Node.js, Express.js, MongoDB, and PostgreSQL. Building scalable, high-performance web applications with modern technologies. Based in Indore, India. Expert in RESTful APIs, GraphQL, and full-stack development.",
  keywords: [
    "celersneha",
    "Sneha Sharma",
    "Sneha Sharma Portfolio",
    "Sneha Sharma Indore",
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
    "DevZoku",
    "Payment Gateway Integration",
    "InvisiFeed",
    "InactiTab",
    "QuickBites",
    "Tailwind CSS",
    "TypeScript",
    "React Mastery",
    "Software Engineer India",
    "Web Application Developer",
    "Scalable Applications",
    "High Performance Apps",
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
    siteName: "Sneha Sharma - Full-Stack Web Developer",
    title: "Sneha Sharma | Full-Stack Web Developer & Software Engineer",
    description:
      "Experienced Full Stack Developer specializing in Next.js, React.js, Node.js, Express.js, MongoDB, and PostgreSQL. Building scalable, high-performance web applications with modern technologies. Based in Indore, India. Expert in RESTful APIs, GraphQL, and full-stack development.",
    images: [
      {
        url: "https://www.snehasharma.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sneha Sharma - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@celersneha",
    creator: "@celersneha",
    title: "Sneha Sharma | Full-Stack Web Developer & Software Engineer",
    description:
      "Portfolio of Sneha Sharma — Next.js & MERN developer, building scalable web applications and learning in public.",
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
      url: "https://www.snehasharma.me",
      image: {
        "@type": "ImageObject",
        url: "https://www.snehasharma.me/og-image.png",
        width: 400,
        height: 400,
      },
      description:
        "Full Stack Developer specializing in Next.js, React.js, Node.js, Express.js, MongoDB, and PostgreSQL.",
      jobTitle: "Full Stack Web Developer",
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
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
        "Langchain.js",
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
      gender: "Female",
      nationality: "Indian",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.snehasharma.me/#website",
      url: "https://www.snehasharma.me",
      name: "Sneha Sharma - Full Stack Developer",
      description:
        "Portfolio website of Sneha Sharma, showcasing full-stack web development projects and skills",
      publisher: {
        "@id": "https://www.snehasharma.me/#person",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.snehasharma.me/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
      logo: "https://www.snehasharma.me/favicon.ico",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.snehasharma.me/#profilepage",
      url: "https://www.snehasharma.me",
      name: "Sneha Sharma Portfolio",
      isPartOf: {
        "@id": "https://www.snehasharma.me/#website",
      },
      about: {
        "@id": "https://www.snehasharma.me/#person",
      },
      description:
        "Professional portfolio showcasing Sneha Sharma's expertise in full-stack web development, projects, and skills",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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
        {/* Enhanced Layout-wide background and floating elements */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          {/* floating bubbles */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
          <div
            className="absolute top-1/4 left-1/2 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute top-1/3 right-24 w-16 h-16 bg-primary/15 rounded-full blur-lg animate-float"
            style={{ animationDelay: "1.2s" }}
          />
          <div
            className="absolute bottom-32 right-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-24 left-1/3 w-20 h-20 bg-blue-400/15 rounded-full blur-xl animate-float"
            style={{ animationDelay: "1.7s" }}
          />
          <div
            className="absolute bottom-10 left-10 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-float"
            style={{ animationDelay: "2.3s" }}
          />
          <div
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/15 rounded-full blur-lg animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "2.7s" }}
          />
        </div>

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
