import TechStackClient from "./TechStackClient";

export const metadata = {
  title: "Tech Stack - Sneha Sharma | Next.js and GenAI developer",
  description:
    "Discover the technologies and tools Sneha Sharma works with: Next.js, React, GenAI, databases, and more.",
  alternates: {
    canonical: "https://www.snehasharma.me/tech-stack",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const skills = [
  {
    category: "Frontend Development",
    icon: "Palette" as "Palette",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Shadcn", // mapped to SiShadcnui
    ],
  },
  {
    category: "Backend Development",
    icon: "Server" as "Server",
    technologies: [
      "Node.js",
      "Express.js",
      "API Integration",
      "Webhooks",
      "WebSocket",
      "JWT",
      "FastAPI",
      "REST API", // mapped to FiGlobe
      "JWT Auth", // mapped to SiGithubactions or custom
      "Cron Jobs", // mapped to BiGitBranch or custom
    ],
  },
  {
    category: "Databases",
    icon: "Database" as "Database",
    technologies: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    category: "GenAI",
    icon: "Code" as "Code",
    technologies: [
      "LangChain.js",
      "Vector Databases",
      "RAG Pipelines",
      "Embeddings",
    ],
  },
  {
    category: "Tools & Services",
    icon: "Globe" as "Globe",
    technologies: [
      "Git",
      "Postman",
      "Docker",
      "GitHub",
      "GitHub Actions",
      "Browser APIs",
      "Digital Ocean",
      "CI/CD", // mapped to SiGithubactions or custom
      "Nginx", // fallback icon
      "Vercel",
      // Figma, Canva, Notion: fallback icon or custom
      "Figma",
      "Canva",
      "Notion",
    ],
  },
];

export default function TechStackPage() {
  return <TechStackClient skills={skills} />;
}
