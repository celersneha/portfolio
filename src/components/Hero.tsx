"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, ExternalLink } from "lucide-react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Docker",
    "LangChain.js",
    "RAG",
    "Vector Databases",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
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

      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                👋 Available for new opportunities
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  Sneha
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
                Full Stack Developer & MERN Stack Expert
              </h2>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                I build exceptional digital experiences with modern
                technologies. Specializing in scalable web applications using
                Next.js, React, and Node.js.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
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
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group" onClick={scrollToProjects}>
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
      </div>
    </section>
  );
};

export default Hero;
