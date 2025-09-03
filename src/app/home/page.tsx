"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
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
    <motion.section
      id="home"
      className="h-screen flex items-center justify-center py-20"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="w-full h-full flex items-center justify-center px-4 py-8 pt-12 sm:pt-16">
        {/* Added pt-12 sm:pt-16 for top padding */}
        {/* Content */}
        <div className="space-y-10 sm:space-y-2 md:space-y-2 animate-fade-in-up text-center md:text-left max-w-4xl">
          <div className="space-y-6 sm:space-y-8 md:space-y-4">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge
                variant="secondary"
                className="text-sm flex items-center justify-center"
              >
                👋 Available for new opportunities
              </Badge>
            </div>

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
              I build exceptional digital experiences with modern technologies,
              specializing in scalable web applications, with a remote-first
              work preference.
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 sm:pt-6 md:pt-0 mt-5">
            <Link
              href="/projects"
              className="group w-full sm:w-auto text-base"
              passHref
            >
              <Button
                size="lg"
                variant="fancy"
                className="w-[max-content] sm:w-auto text-base"
                asChild
              >
                <span>
                  See My Work
                  <ExternalLink className="ml-2 w-3 h-3 " />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
