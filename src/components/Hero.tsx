"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ExternalLink } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    "Next.js",
    "React.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "LangChain.js",
    "RAG",
    "Vector Databases",
  ];

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div
        className="absolute bottom-32 right-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/15 rounded-full blur-lg animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="w-full h-full flex items-center justify-center px-4 py-4">
        {/* Content */}
        <div className="space-y-10 sm:space-y-2 md:space-y-2 animate-fade-in-up text-center md:text-left max-w-4xl">
          <div className="space-y-6 sm:space-y-8 md:space-y-4">
            <Badge variant="secondary" className="text-sm">
              👋 Available for new opportunities
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Sneha
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-muted-foreground">
              Full Stack Developer
            </h2>

            <p className="text-lg sm:text-xl md:text-lg text-muted-foreground max-w-lg md:max-w-lg mx-auto md:mx-0 leading-relaxed">
              I build exceptional digital experiences with modern technologies.
              Specializing in building scalable web applications.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-2 justify-center md:justify-start">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 sm:pt-6 md:pt-0">
            <Button
              size="lg"
              className="group w-full sm:w-auto text-base"
              onClick={scrollToProjects}
            >
              View My Work
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="hidden lg:flex items-center space-x-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
