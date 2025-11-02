import ProjectDetailClient from "./ProjectClient";
import projects from "@/lib/projects";

export async function generateMetadata({
  params,
}: {
  params: { projectTitle: string };
}) {
  const awaitedParams = await params;
  const projectTitle = decodeURIComponent(awaitedParams.projectTitle);
  const project = projects.find(
    (p) => p.title.toLowerCase() === projectTitle.toLowerCase()
  );

  if (!project) {
    return {
      title: "Project Not Found - Sneha Sharma Portfolio",
      description: "This project does not exist.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${project.title} - Sneha Sharma | Next.js and GenAI developer`,
    description: project.description,
    alternates: {
      canonical: `https://www.snehasharma.me/projects/${encodeURIComponent(
        project.title
      )}`,
    },
    openGraph: {
      title: `${project.title} - Sneha Sharma | Next.js and GenAI developer`,
      description: project.description,
      url: `https://www.snehasharma.me/projects/${encodeURIComponent(
        project.title
      )}`,
      siteName: "Sneha Sharma Portfolio",
      images: [
        {
          url: project.img || "https://www.snehasharma.me/og-image.png",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    robots: { index: true, follow: true },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { projectTitle: string };
}) {
  const awaitedParams = await params;
  const projectTitle = decodeURIComponent(awaitedParams.projectTitle);
  const project = projects.find(
    (p) => p.title.toLowerCase() === projectTitle.toLowerCase()
  );

  if (!project) {
    return <div className="py-20 text-center text-xl">Project not found.</div>;
  }

  return <ProjectDetailClient project={project} />;
}
