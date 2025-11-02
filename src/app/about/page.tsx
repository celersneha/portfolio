import AboutClient from "./AboutClient";

export const metadata = {
  title: "About - Sneha Sharma | Next.js and GenAI developer",
  description:
    "Know more about Sneha Sharma, her experience, skills, and expertise in Next.js and GenAI.",
  openGraph: {
    title: "About - Sneha Sharma | Next.js and GenAI developer",
    description:
      "Learn more about Sneha Sharma, her experience, skills, and expertise in Next.js and GenAI.",
    url: "https://www.snehasharma.me/about",
    siteName: "Sneha Sharma Portfolio",
    images: [
      {
        url: "https://www.snehasharma.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sneha Sharma Portfolio",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
