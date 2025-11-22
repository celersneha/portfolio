"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiGithub, FiExternalLink, FiCalendar } from "react-icons/fi";
import Image from "next/image";
import { CiImageOn as ImageIcon } from "react-icons/ci";
import { motion } from "framer-motion";
import Link from "next/link";
import { techIcons } from "@/components/TechStackMapping";

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  img?: string;
  category: string;
  year: string | number;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl: string;
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <motion.section
      className="py-8 sm:py-12 min-h-screen bg-background px-4 sm:px-8"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-3xl px-4">
        {/* Project Image */}
        {project.img ? (
          <Image
            src={project.img}
            alt={project.title}
            className="object-contain w-full h-full rounded-md"
            loading="lazy"
            draggable={false}
            width={500}
            height={300}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <ImageIcon className="w-12 h-12 mr-2" />
            No Image Available
          </div>
        )}
      </div>

      {/* Title & Category */}
      <div className="flex items-center justify-between mt-5 mb-2">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <Badge variant="secondary" className="text-xs">
          {project.category}
        </Badge>
      </div>
      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
        <FiCalendar className="w-4 h-4" />
        <span>{project.year}</span>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-4">{project.description}</p>
      {project.longDescription && (
        <p className="mb-6">{project.longDescription}</p>
      )}

      {/* Technologies */}
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Technologies Used</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <Badge
              key={i}
              variant="outline"
              className="text-xs flex items-center gap-1 px-3 py-2"
            >
              <span className="text-sm">{techIcons[tech]}</span>
              <span>{tech}</span>
            </Badge>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-8">
        <h4 className="font-semibold mb-2">Key Features</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        {project.liveUrl && (
          <Button asChild className="group w-max" variant="secondary">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="mr-2 w-4 h-4" />
              Live Demo
            </Link>
          </Button>
        )}
        <Button variant="outline" asChild className="group w-max">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub className="mr-2 w-4 h-4" />
            View Code
          </Link>
        </Button>
      </div>
    </motion.section>
  );
}
