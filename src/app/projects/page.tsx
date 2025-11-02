import ProjectsClient from "./ProjectsClient";
import projects from "@/lib/projects";

export const metadata = {
  title: "Projects - Sneha Sharma | Next.js and GenAI developer",
  description:
    "Explore impactful projects by Sneha Sharma in Next.js, GenAI, and modern web development.",
  openGraph: {
    title: "Projects - Sneha Sharma | Next.js and GenAI developer",
    description:
      "Explore impactful projects by Sneha Sharma in Next.js, GenAI, and modern web development.",
    url: "https://www.snehasharma.me/projects",
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
    type: "website",
    alternates: {
      canonical: "https://www.snehasharma.me/projects",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="sr-only">
        <h1>Projects</h1>
        <ul>
          {projects.map((project, idx) => (
            <li key={idx}>
              <strong>{project.title}</strong>: {project.description}
            </li>
          ))}
        </ul>
      </section>
      <ProjectsClient projects={projects} />
    </>
  );
}
