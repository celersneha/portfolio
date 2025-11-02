import HomeClient from "@/components/Home/HomeClient";

export const metadata = {
  title: "Sneha Sharma | Next.js & GenAI Developer",
  description:
    "Full Stack Developer building scalable web applications with Next.js, React, GenAI, and modern technologies.",
  alternates: {
    canonical: "https://www.snehasharma.me/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const skills = [
  { name: "Next.js" },
  { name: "React.js" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "Docker" },
  { name: "LangChain.js" },
  { name: "Digital Ocean" },
  { name: "Vector Databases" },
  { name: "FastAPI" },
];

export default function HomePage() {
  return <HomeClient skills={skills} />;
}
