"use client";

import { useParams, notFound } from "next/navigation";
import projects from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectTitle = decodeURIComponent(params.projectTitle as string);

  const project = projects.find(
    (p) => p.title.toLowerCase() === projectTitle.toLowerCase()
  );

  if (!project) return notFound();

  return (
    <section className="py-16 min-h-screen bg-background">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Project Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg bg-muted flex items-center justify-center h-64">
          {project.img ? (
            <img
              src={project.img}
              alt={project.title}
              className="object-contain w-full h-full"
              loading="lazy"
              draggable={false}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No Image Available
            </div>
          )}
        </div>

        {/* Title & Category */}
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <Badge variant="secondary" className="text-xs">
            {project.category}
          </Badge>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
          <Calendar className="w-4 h-4" />
          <span>2025</span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <p className="mb-6">{project.longDescription}</p>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h4 className="font-semibold mb-2">Key Features</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button asChild className="flex-1 group">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Live Demo
            </a>
          </Button>
          <Button variant="outline" asChild className="flex-1 group">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              View Code
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
