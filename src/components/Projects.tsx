"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "InvisiFeed",
      description:
        "A revolutionary anonymous feedback platform that enables honest communication in educational and professional environments.",
      longDescription:
        "InvisiFeed transforms feedback culture by providing a secure, anonymous platform for students and employees to share honest opinions. Built with Next.js and features AI-powered sentiment analysis.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "AI/ML"],
      features: [
        "Anonymous feedback system",
        "AI sentiment analysis",
        "Real-time notifications",
        "Admin dashboard",
      ],
      liveUrl: "https://invisifeed.vercel.app",
      githubUrl: "https://github.com/SnehaSharma245/invisifeed",
      category: "Web Application",
    },
    {
      title: "InactiTab",
      description:
        "Chrome extension that automatically detects and manages inactive browser tabs to improve performance and reduce memory usage.",
      longDescription:
        "InactiTab is a smart browser extension that monitors tab activity and automatically suspends inactive tabs, resulting in 30% better browser performance and reduced memory consumption.",
      technologies: ["JavaScript", "Chrome APIs", "HTML", "CSS"],
      features: [
        "Automatic tab suspension",
        "Performance monitoring",
        "Customizable settings",
        "Memory usage tracking",
      ],
      liveUrl: "https://inactitab.vercel.app",
      githubUrl: "https://github.com/SnehaSharma245/inactitab",
      category: "Browser Extension",
    },
    {
      title: "CineHue",
      description:
        "A modern, responsive movie discovery application with real-time search suggestions and detailed movie information powered by the OMDB API.",
      longDescription:
        "CineHue is a feature-rich movie discovery platform built with React and React Router. It offers real-time search suggestions, keyboard navigation, and detailed movie pages with information from the OMDB API. The app features a dark theme, smooth animations, responsive design, and custom loading screens for a seamless user experience.",
      technologies: [
        "React",
        "React Router v7",
        "Tailwind CSS",
        "Axios",
        "Vite",
        "OMDB API",
      ],
      features: [
        "Real-time movie search with live suggestions",
        "Keyboard navigation for search dropdown",
        "Responsive movie grid and detailed pages",
        "Star rating system based on IMDB scores",
        "Dark theme and smooth UI animations",
        "Custom loading screens",
      ],
      liveUrl: "https://cinehue.vercel.app",
      githubUrl: "https://github.com/SnehaSharma245/cinehue",
      category: "Web Application",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Featured Work
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Projects that make{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                an impact
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover my latest projects showcasing full-stack development,
              innovative solutions, and modern technologies that solve
              real-world problems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden group"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-lg m-4" />
                    <div className="relative h-full bg-muted rounded-lg m-4 overflow-hidden flex items-center justify-center">
                      {/* Project image from public folder */}
                      <img
                        src={
                          project.title === "InvisiFeed"
                            ? "/projects/Invisifeed.png"
                            : project.title === "CineHue"
                            ? "/projects/Cinehue.png"
                            : project.title === "InactiTab"
                            ? "/projects/Inactitab.png"
                            : ""
                        }
                        alt={project.title}
                        className="object-contain w-full h-full rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105 bg-muted p-4"
                        loading="lazy"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div
                    className={`p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>2024</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.longDescription}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold mb-3">Key Features</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center space-x-2"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-4 pt-4">
                        <Button asChild className="flex-1 group">
                          <a href={project.liveUrl}>
                            <ExternalLink className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          asChild
                          className="flex-1 group"
                        >
                          <a href={project.githubUrl}>
                            <Github className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 text-muted-foreground mb-4">
              <Users className="w-5 h-5" />
              <span>Interested in collaboration?</span>
            </div>
            <Button size="lg" className="group">
              Let's Work Together
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
