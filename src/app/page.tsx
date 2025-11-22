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
  { name: "JavaScript" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "FastAPI" },
  { name: "Python" },
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "GraphQL" },
  { name: "REST API" },
  { name: "Tailwind CSS" },
  { name: "Framer Motion" },
  { name: "Docker" },
  { name: "Git" },
  { name: "LangChain.js" },
  { name: "Prisma" },
  { name: "Socket.io" },
  { name: "Redis" },
  { name: "AWS" },
  { name: "Vercel" },
  { name: "Digital Ocean" },
  { name: "Vector Databases" },
  { name: "Chrome Extension" },
  { name: "Livekit" },
];

export default function HomePage() {
  return <HomeClient skills={skills} />;
}
