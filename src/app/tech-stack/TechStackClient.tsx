"use client";

import React from "react";
import type { JSX } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { techIcons, categoryIcons } from "@/components/TechStackMapping";

type Skill = {
  icon: keyof typeof categoryIcons;
  category: string;
  technologies: string[];
};

interface TechStackClientProps {
  skills: Skill[];
}

export default function TechStackClient({ skills }: TechStackClientProps) {
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
            {skills.map((skill, index) => {
              const Icon = categoryIcons[skill.icon];
              return (
                <Card
                  key={index}
                  className={`border-border/50 backdrop-blur-md hover:border-primary/50 transition-all duration-300  group w-full ${
                    index === 4 ? "lg:col-start-2" : ""
                  }`}
                >
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="inline-flex p-2 md:p-3 rounded-full bg-primary mb-3 md:mb-4  transition-transform">
                      {Icon}
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
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
