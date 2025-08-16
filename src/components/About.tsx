"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Palette,
  Server,
  Database,
  Smartphone,
  Globe,
} from "lucide-react";

const About = () => {
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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Passionate about creating{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                digital experiences
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a Full Stack Developer with experience in building modern web
              applications. Currently pursuing B.Tech in Computer Science at
              Acropolis Institute, Indore.
            </p>
          </div>

          {/* About Content Grid */}
          <div className="grid  gap-12 mb-16">
            {/* Personal Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My passion for technology started during my early college
                  years when I discovered the power of code to solve real-world
                  problems. What began as curiosity quickly evolved into a
                  career focused on creating impactful digital solutions.
                </p>
                <p>
                  I specialize in the MERN stack and have extensive experience
                  with Next.js, building everything from simple websites to
                  complex full-stack applications. I believe in writing clean,
                  maintainable code and creating user experiences that truly
                  matter.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              🛠️ Crafting with These
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex p-3 rounded-full bg-gradient-to-r ${skill.color} mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg mb-3">
                      {skill.category}
                    </h4>
                    <div className="space-y-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs mx-1"
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

          {/* Education & Location */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-lg">Education</h4>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">
                    B.Tech in Computer Science Engineering
                  </div>
                  <div className="text-muted-foreground">
                    Acropolis Institute, Indore
                  </div>
                  <div className="text-sm text-muted-foreground">
                    2022 - 2026 (Expected)
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-lg">Contact</h4>
                </div>
                <div className="space-y-2">
                  <div className="text-muted-foreground">
                    📍 Indore, Madhya Pradesh, India
                  </div>
                  <div className="text-muted-foreground">
                    📞 +91 87705 79552
                  </div>
                  <div className="text-muted-foreground">
                    ✉️ celersneha@gmail.com
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
