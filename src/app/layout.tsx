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

export const metadata: Metadata = {
  metadataBase: new URL("https://snehasharma.me"),
  title: {
    default: "Sneha Sharma",
    template: "%s | Sneha Sharma",
  },
  description:
    "Experienced Full Stack Developer specializing in Next.js, React.js, Node.js, Express.js, MongoDB, and PostgreSQL. Building scalable, high-performance web applications with modern technologies. Based in Indore, India. Expert in RESTful APIs, GraphQL, and full-stack development.",
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
    "Software Engineer India",
    "Web Application Developer",
    "Scalable Applications",
    "High Performance Apps",
  ],
  authors: [{ name: "Sneha Sharma", url: "https://snehasharma.me" }],
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
    url: "https://snehasharma.me",
    siteName: "Sneha Sharma - Full Stack Developer",
    title:
      "Sneha Sharma - Full Stack Developer | Next.js Expert | Building Scalable Web Applications",
    description:
      "Experienced Full Stack Developer specializing in Next.js, React.js, Node.js, Express.js, MongoDB, and PostgreSQL. Building scalable, high-performance web applications with modern technologies. Based in Indore, India. Expert in RESTful APIs, GraphQL, and full-stack development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sneha Sharma - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SnehaDevs",
    creator: "@SnehaDevs",
    title:
      "Sneha Sharma - Full Stack Developer | Next.js Expert | Building Scalable Web Applications",
    description:
      "Portfolio of Sneha Sharma — Next.js & MERN developer, building scalable web applications and learning in public.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://snehasharma.me",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://snehasharma.me/#person",
      name: "Sneha Sharma",
      url: "https://snehasharma.me",
      image: {
        "@type": "ImageObject",
        url: "/og-image.jpg",
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
      email: "mailto:snehav2109@gmail.com",
      sameAs: [
        "https://github.com/SnehaSharma245",
        "https://linkedin.com/in/ss0807",
        "https://twitter.com/SnehaDevs",
      ],
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
      gender: "Female",
      nationality: "Indian",
    },
    {
      "@type": "WebSite",
      "@id": "https://snehasharma.me/#website",
      url: "https://snehasharma.me",
      name: "Sneha Sharma - Full Stack Developer",
      description:
        "Portfolio website of Sneha Sharma, showcasing full-stack web development projects and skills",
      publisher: {
        "@id": "https://snehasharma.me/#person",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://snehasharma.me/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://snehasharma.me/#profilepage",
      url: "https://snehasharma.me",
      name: "Sneha Sharma Portfolio",
      isPartOf: {
        "@id": "https://snehasharma.me/#website",
      },
      about: {
        "@id": "https://snehasharma.me/#person",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://snehasharma.me" />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Indore" />
        <meta name="geo.position" content="22.7196;75.8577" />
        <meta name="ICBM" content="22.7196, 75.8577" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
