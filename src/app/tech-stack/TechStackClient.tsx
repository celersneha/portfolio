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
      className="relative z-0 py-8 sm:py-12"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6">
              Technologies I <span className="text-primary">work with</span>
            </h2>
          </div>

          {/* Skills Section */}
          {/* Mobile Cards Layout */}
          <div className="md:hidden space-y-4">
            {skills.map((skill, index) => {
              const Icon = categoryIcons[skill.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  className="p-4 border border-border rounded-lg bg-white shadow-sm hover:border-primary/60 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex p-2 rounded-full bg-primary text-primary text-lg">
                      {Icon}
                    </div>
                    <h4 className="font-semibold text-base text-rose-500">
                      {skill.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.12 + techIndex * 0.05,
                        }}
                      >
                        <Badge
                          variant="outline"
                          className="text-xs flex items-center gap-1 px-2 py-1"
                        >
                          <span className="text-xs">{techIcons[tech]}</span>
                          <span>{tech}</span>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Alternating Layout */}
          <div className="hidden md:block space-y-8 lg:space-y-12">
            {skills.map((skill, index) => {
              const Icon = categoryIcons[skill.icon];
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  className={`grid grid-cols-2 gap-6 lg:gap-8 items-start ${
                    isEven ? "" : "grid-flow-col-dense"
                  }`}
                >
                  {/* Left/Right Side - Icon & Category */}
                  <div
                    className={`flex flex-col items-center justify-center p-6 lg:p-8 border border-border rounded-lg bg-white/90 shadow-sm hover:border-primary/60 transition-all duration-300 ${
                      !isEven && "order-2"
                    }`}
                  >
                    <div className="inline-flex p-3 lg:p-4 rounded-full bg-primary text-primary mb-3 lg:mb-4 transition-transform text-2xl lg:text-3xl">
                      {Icon}
                    </div>
                    <h4 className="font-semibold text-lg lg:text-xl text-rose-500 text-center">
                      {skill.category}
                    </h4>
                  </div>

                  {/* Right/Left Side - Badges in Masonry */}
                  <div
                    className={`flex flex-wrap gap-2 content-start ${
                      !isEven && "order-1"
                    }`}
                  >
                    {skill.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.12 + techIndex * 0.05,
                        }}
                      >
                        <Badge
                          variant="outline"
                          className="text-xs flex items-center gap-1 px-3 py-2"
                        >
                          <span className="text-sm">{techIcons[tech]}</span>
                          <span>{tech}</span>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
