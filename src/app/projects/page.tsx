"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  BookOpenText,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ProjectDetail from "@/components/popup/ProjectDetail";
import projects from "@/lib/projects";
import SkeletonProject from "@/components/SkeletonProject";
import SearchBar from "@/components/SearchBar"; // add import

const Projects = () => {
  useEffect(() => {
    console.log(projects);
  });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState(""); // add search state

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
          <div className="space-y-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="border-border/50 bg-background/80 backdrop-blur-md hover:border-primary/50 transition-all duration-300 overflow-hidden group"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Project Image */}
                  <div
                    className={`relative h-64 lg:h-auto ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-lg" />
                    <div className="relative h-full bg-muted rounded-lg overflow-hidden flex items-center justify-center m-0">
                      {/* Project image from img property or fallback */}
                      {project.img ? (
                        <img
                          src={project.img}
                          alt={project.title}
                          className="object-contain w-full h-full rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105 bg-muted p-2"
                          loading="lazy"
                          draggable={false}
                        />
                      ) : (
                        <SkeletonProject />
                      )}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div
                    className={`p-8 flex flex-col justify-between ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>2024</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-4">
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies
                            .slice(0, 5)
                            .map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          {project.technologies.length > 5 && (
                            <span className="text-xs text-muted-foreground">
                              +{project.technologies.length - 5} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Button asChild size="sm" className="flex-1 group">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          asChild
                          size="sm"
                          className="flex-1 group"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                            View Code
                          </a>
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="flex-1 cursor-pointer"
                          onClick={() => setOpenIndex(index)}
                        >
                          <BookOpenText className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                          View In Detail
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Project Detail Dialog */}
          <Dialog
            open={openIndex !== null}
            onOpenChange={(open) => !open && setOpenIndex(null)}
          >
            <DialogContent className="max-w-lg w-full sm:max-w-xl md:max-w-2xl p-0">
              {openIndex !== null && (
                <ProjectDetail
                  project={projects[openIndex]}
                  open={openIndex !== null}
                  onClose={() => setOpenIndex(null)}
                  onOpen={() => {}}
                />
              )}
            </DialogContent>
          </Dialog>

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
