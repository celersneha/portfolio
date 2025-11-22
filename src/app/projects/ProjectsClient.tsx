"use client";

import { useState } from "react";
import { CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiGithub, FiExternalLink, FiCalendar } from "react-icons/fi";
import SkeletonProject from "@/components/SkeletonProject";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  img?: string;
  category: string;
  year: string | number;
  technologies: string[];
}

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [search, setSearch] = useState("");

  // Filter projects based on search query
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.section
      id="projects"
      className="relative z-0 py-8 sm:py-12"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Projects that make <span className="text-primary">an impact</span>
            </h2>
          </div>

          {/* Search Bar */}
          <SearchBar value={search} onChange={setSearch} />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={index}
                href={`/projects/${project.title ?? index}`}
                className="relative group block h-full border border-peach-100 rounded-lg bg-white shadow-[0_2px_16px_0_rgba(245,182,196,0.08)] transition-all duration-300 overflow-hidden"
                tabIndex={-1}
                style={{ textDecoration: "none" }}
              >
                {/* Project Image */}
                <div className="relative w-full ">
                  <div className="relative h-full w-full rounded-t-lg overflow-hidden flex items-center justify-center">
                    {project.img ? (
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="object-contain w-full h-full rounded-t-lg shadow-md transition-transform duration-300"
                        loading="lazy"
                        draggable={false}
                      />
                    ) : (
                      <SkeletonProject />
                    )}
                    <div className="absolute inset-0 group-hover:bg-black/20 transition-colors pointer-events-none" />
                    {/* Hover Overlay for Details */}
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/70 transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                      tabIndex={-1}
                    >
                      <span className="text-white font-semibold text-base px-4 py-2 rounded">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
                {/* Project Content */}
                <div className="flex flex-col flex-1 p-3 relative">
                  {/* Pink rising gradient from bottom of card */}

                  <CardHeader className="p-0 mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <Badge
                        variant="secondary"
                        className="text-xs border-primary/40"
                      >
                        {project.category}
                      </Badge>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <FiCalendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-1">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent className="p-0 space-y-2 mt-1">
                    <div>
                      <h4 className="font-semibold mb-1 text-sm">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs text-muted-foreground">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 ">
            <Button
              size="lg"
              className="group mr-2"
              onClick={() =>
                (window.location.href = "mailto:celersneha@gmail.com")
              }
            >
              Let's Work Together
              <FiExternalLink className="ml-2 w-4 h-4 " />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="mt-8 text-primary hover:bg-primary/10 transition-colors font-semibold"
            >
              <a
                href="https://github.com/celersneha?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore More Projects
                <FiGithub className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
