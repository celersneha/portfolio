"use client";

import { useState } from "react";
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

const Projects = () => {
  const projects = [
    {
      title: "DevZoku",
      description:
        "Empowering Collaboration in the World of Hackathons. A modern hackathon management platform for developers, organizers, and the wider hackathon community.",
      longDescription:
        "DevZoku is a modern hackathon management platform built for developers, organizers, and the wider hackathon community. Discover and join hackathons, form teams, manage events, and receive intelligent recommendations. Features include profile management, team collaboration, project management, hackathon discovery, notifications, organizer tools and AI-driven matching. Built with Next.js, Express, PostgreSQL, Qdrant, and more.",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "React Hook Form",
        "Framer Motion",
        "Lucide React",
        "Express.js",
        "PostgreSQL 17",
        "Drizzle ORM",
        "Qdrant",
        "Bun",
        "Valkey",
        "Cloudinary",
        "MistralAI",
        "Google Gemini",
        "Socket.io",
        "BullMQ",
        "Docker",
        "GitHub Actions",
      ],
      features: [
        "Developer & Organizer profile management",
        "Team creation and collaboration tools",
        "Project portfolio and management",
        "Hackathon discovery and recommendations",
        "Real-time notifications",
        "AI-powered event and team matching",
        "Hackathon creation and management for organizers",
        "Automated email notifications",
        "Secure authentication and file storage",
        "Responsive, accessible UI",
      ],
      liveUrl: "https://devzoku.app",
      githubUrl: "https://github.com/celersneha/devzoku",
      category: "Web Application",
    },
    {
      title: "InvisiFeed",
      description:
        "A revolutionary anonymous feedback platform that enables honest communication in educational and professional environments.",
      longDescription:
        "InvisiFeed transforms feedback culture by providing a secure, anonymous platform for students and employees to share honest opinions. Built with Next.js and features AI-powered sentiment analysis.",
      technologies: [
        "Next.js",
        "JavaScript",
        "TailwindCSS",
        "Shadcn UI",
        "Radix UI",
        "Framer Motion",
        "Recharts",
        "React-Hook-Form",

        "NextAuth",
        "Cloudinary",
        "pdf-lib",
        "Zod",
        "JWT",
        "Bcrypt",
        "Nodemailer",
        "Mongoose",
        "Gemini 2.0 Flash API",
        "Razorpay",
        "ClearTax GSTIN API",
        "CRON Jobs",

        // Database
        "MongoDB Atlas",
      ],
      features: [
        "Anonymous feedback system",
        "AI sentiment analysis",
        "Real-time notifications",
        "Admin dashboard",
      ],
      liveUrl: "https://invisifeed.vercel.app",
      githubUrl: "https://github.com/celersneha/invisifeed",
      category: "Web Application",
    },
    {
      title: "InactiTab",
      description:
        "Chrome extension that automatically detects and manages inactive browser tabs to improve performance and reduce memory usage.",
      longDescription:
        "InactiTab is a smart browser extension that monitors tab activity and automatically suspends inactive tabs, resulting in 30% better browser performance and reduced memory consumption.",
      technologies: [
        "JavaScript",
        "Chrome APIs",
        "Manifest V3",
        "Vite",
        "TailwindCSS",
      ],
      features: [
        "Automatic tab suspension",
        "Customizable settings",
        "Memory usage tracking",
        "Media tab detection",
      ],
      liveUrl: "https://inactitab.vercel.app",
      githubUrl: "https://github.com/celersneha/inactitab",
      category: "Browser Extension",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
                            : project.title === "DevZoku"
                            ? "/projects/Devzoku.png"
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
          <div className="text-center mt-16">
            <div className="flex flex-col items-center space-x-2 text-muted-foreground mb-4">
              <Users className="w-5 h-5" />
              <span>Interested in collaboration?</span>
            </div>
            <Button
              size="lg"
              className="group"
              onClick={() =>
                (window.location.href = "mailto:celersneha@gmail.com")
              }
            >
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
