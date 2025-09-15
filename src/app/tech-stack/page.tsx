"use client";

import React, { JSX } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Database, Globe } from "lucide-react";
import { motion } from "motion/react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiLangchain,
  SiGithub,
  SiDocker,
  SiGit,
  SiPostman,
  SiGithubactions,
  SiShadcnui,
  SiGooglechrome,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { FaBrain, FaDigitalOcean } from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";

const techIcons: Record<string, JSX.Element> = {
  "Next.js": <SiNextdotjs className="mr-1 w-4 h-4" color="#fff" />,
  "React.js": <SiReact className="mr-1 w-4 h-4" color="#61DAFB" />,
  TypeScript: <SiTypescript className="mr-1 w-4 h-4" color="#3178C6" />,
  JavaScript: <SiJavascript className="mr-1 w-4 h-4" color="#F7DF1E" />,
  "Tailwind CSS": <SiTailwindcss className="mr-1 w-4 h-4" color="#38B2AC" />,
  HTML5: <SiHtml5 className="mr-1 w-4 h-4" color="#E34F26" />,
  CSS3: <SiCss3 className="mr-1 w-4 h-4" color="#1572B6" />,
  "Node.js": <SiNodedotjs className="mr-1 w-4 h-4" color="#339933" />,
  "Express.js": <SiExpress className="mr-1 w-4 h-4" color="#fff" />,
  "API Integration": <Globe className="mr-1 w-4 h-4" />,
  Webhooks: <BiGitBranch className="mr-1 w-4 h-4" color="#a855f7" />,
  WebSocket: <TbDatabase className="mr-1 w-4 h-4" color="#f59e42" />,
  MongoDB: <SiMongodb className="mr-1 w-4 h-4" color="#47A248" />,
  PostgreSQL: <SiPostgresql className="mr-1 w-4 h-4" color="#336791" />,
  Redis: <SiRedis className="mr-1 w-4 h-4" color="#DC382D" />,
  "LangChain.js": <FaBrain className="mr-1 w-4 h-4" color="#a855f7" />,
  "Vector Databases": <TbDatabase className="mr-1 w-4 h-4" color="#10b981" />,
  "RAG Pipelines": <FaBrain className="mr-1 w-4 h-4" color="#f59e42" />,
  Git: <SiGit className="mr-1 w-4 h-4" color="#F05032" />,
  Postman: <SiPostman className="mr-1 w-4 h-4" color="#FF6C37" />,
  Docker: <SiDocker className="mr-1 w-4 h-4" color="#2496ED" />,
  GitHub: <SiGithub className="mr-1 w-4 h-4" color="#fff" />,
  "GitHub Actions": (
    <SiGithubactions className="mr-1 w-4 h-4" color="#2088FF" />
  ),
  "Browser APIs": <SiGooglechrome className="mr-1 w-4 h-4" color="#4285F4" />,
  Shadcn: <SiShadcnui className="mr-1 w-4 h-4" />,
  "Digital Ocean": <FaDigitalOcean className="mr-1 w-4 h-4" color="#2496ED" />,
};

const TechStack = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: Palette,
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Shadcn",
      ],
    },
    {
      category: "Backend Development",
      icon: Server,
      technologies: [
        "Node.js",
        "Express.js",
        "API Integration",
        "Webhooks",
        "WebSocket",
        "JWT",
      ],
    },
    {
      category: "Databases",
      icon: Database,
      technologies: ["MongoDB", "PostgreSQL", "Redis"],
    },
    {
      category: "GenAI",
      icon: Code,
      technologies: ["LangChain.js", "Vector Databases", "RAG Pipelines"],
    },
    {
      category: "Tools & Services",
      icon: Globe,
      technologies: [
        "Git",
        "Postman",
        "Docker",
        "GitHub",
        "GitHub Actions",
        "Browser APIs",
        "Digital Ocean",
      ],
    },
  ];

  return (
    <motion.section
      id="techstack"
      className="py-20 relative z-0"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6">
              Technologies I <span className="text-primary">work with</span>
            </h2>
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className={`border-border/50 backdrop-blur-md hover:border-primary/50 transition-all duration-300  group w-full ${
                  index === 4 ? "lg:col-start-2" : ""
                }`}
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="inline-flex p-2 md:p-3 rounded-full bg-primary mb-3 md:mb-4  transition-transform">
                    <skill.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-3">
                    {skill.category}
                  </h4>
                  <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                    {skill.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs flex items-center"
                      >
                        {techIcons[tech]}
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;
