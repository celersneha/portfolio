"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, BookOpenText } from "lucide-react";
import projects from "@/lib/projects";
import SkeletonProject from "@/components/SkeletonProject";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";

const Projects = () => {
  const [search, setSearch] = useState("");

  // Filter projects based on search query
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="projects" className="py-20 relative z-0">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Projects that make{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                an impact
              </span>
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
                className="relative group block h-full"
                tabIndex={-1}
                style={{ textDecoration: "none" }}
              >
                <Card className="border-primary/50 bg-background/80 backdrop-blur-md hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer">
                  {/* Project Image */}
                  <div className="relative  w-full px-2 pt-0 pb-0">
                    {/* pt-0: remove top padding, px-2 for left/right space */}
                    <div
                      className="relative h-full w-full rounded-t-lg overflow-hidden flex items-center justify-center"
                      style={{
                        background: "transparent",
                        margin: 0,
                      }}
                    >
                      {project.img ? (
                        <img
                          src={project.img}
                          alt={project.title}
                          className="object-contain w-full h-full rounded-t-lg shadow-md transition-transform duration-300"
                          loading="lazy"
                          draggable={false}
                        />
                      ) : (
                        <SkeletonProject />
                      )}
                      <div className="absolute inset-0 group-hover:bg-black/20 transition-colors pointer-events-none" />
                      {/* Hover Overlay for Details - only over image */}
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
                  <div className="flex flex-col flex-1 p-5">
                    {" "}
                    {/* reduced padding */}
                    <CardHeader className="p-0 mb-2">
                      {" "}
                      {/* reduced margin-bottom */}
                      <div className="flex items-center justify-between mb-1">
                        {" "}
                        {/* reduced margin-bottom */}
                        <Badge
                          variant="secondary"
                          className="text-xs border-primary/40"
                        >
                          {project.category}
                        </Badge>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          {" "}
                          {/* reduced space-x */}
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-1">
                        {" "}
                        {/* reduced text size and margin-bottom */}
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-1">
                        {" "}
                        {/* added mb-1 */}
                        {project.description}
                      </p>
                    </CardHeader>
                    <CardContent className="p-0 space-y-2 mt-1">
                      {" "}
                      {/* reduced space-y and margin-top */}
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-1 text-sm">
                          {" "}
                          {/* reduced margin-bottom */}
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {" "}
                          {/* reduced gap */}
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
                      {/* Action Buttons */}
                      {/* <div className="flex flex-wrap gap-2 pt-2">
                        <Button
                          asChild={false}
                          size="sm"
                          className="flex-1 group"
                          tabIndex={-1}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              project.liveUrl,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }}
                        >
                          <span className="flex items-center">
                            <ExternalLink className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Live Demo
                          </span>
                        </Button>
                        <Button
                          variant="outline"
                          asChild={false}
                          size="sm"
                          className="flex-1 group"
                          tabIndex={-1}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              project.githubUrl,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }}
                        >
                          <span className="flex items-center">
                            <Github className="mr-2 w-4 h-4  transition-transform" />
                            View Code
                          </span>
                        </Button>
                      </div> */}
                    </CardContent>
                  </div>
                </Card>
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
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* Explore More Projects Button */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="mt-8 text-primary hover:bg-primary/10 transition-colors font-semibold  "
            >
              <a
                href="https://github.com/celersneha?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore More Projects
                <Github className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
