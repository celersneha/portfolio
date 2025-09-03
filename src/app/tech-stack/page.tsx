"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Database, Globe } from "lucide-react";

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
        "Component Libraries",
      ],
      color: "from-blue-500 to-purple-500",
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
      color: "from-green-500 to-teal-500",
    },
    {
      category: "Databases",
      icon: Database,
      technologies: ["MongoDB", "PostgreSQL", "Redis"],
      color: "from-orange-500 to-red-500",
    },
    {
      category: "GenAI",
      icon: Code,
      technologies: ["LangChain.js", "Vector Databases", "RAG Pipelines"],
      color: "from-purple-500 to-pink-500",
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
      ],
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section id="techstack" className="py-12 md:py-20 relative z-0">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-4">
              Tech Stack
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6">
              🛠️ Technologies I{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                work with
              </span>
            </h2>
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className={`border-border/50 backdrop-blur-md hover:border-primary/50 transition-all duration-300 hover:scale-105 group w-full ${
                  index === 4 ? "lg:col-start-2" : ""
                }`}
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div
                    className={`inline-flex p-2 md:p-3 rounded-full bg-gradient-to-r ${skill.color} mb-3 md:mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <skill.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-3">
                    {skill.category}
                  </h4>
                  <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                    {skill.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
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
    </section>
  );
};

export default TechStack;
