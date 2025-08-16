import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { useEffect } from "react";

type Project = {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
};

interface ProjectDetailProps {
  project: Project;
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
}

const ProjectDetail = ({
  project,
  onClose,
  onOpen,
  open,
}: ProjectDetailProps) => {
  useEffect(() => {
    if (open && typeof onOpen === "function") {
      onOpen();
    }
  }, [open, onOpen]);

  return (
    <div className="max-h-[80vh] overflow-y-auto border-blue-300 border rounded-2xl mx-3 backdrop-blur-2xl">
      <div className="p-4">
        <DialogHeader>
          <div className="flex items-start justify-between mt-5">
            <DialogTitle>{project.title} Details</DialogTitle>
            <Badge
              variant="secondary"
              className="relative overflow-hidden text-xs mt-1 ml-4
               bg-[#000103]/40 backdrop-blur-2xl
               border border-gray-400/40 text-white
               shadow-sm rounded-md"
            >
              {/* Gloss overlay */}
              <span className="absolute inset-0 bg-gradient-to-b from-[#659dfb]/40 to-transparent opacity-60 pointer-events-none"></span>

              {project.category}
            </Badge>
          </div>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="mb-4 flex items-center gap-2 flex-wrap mt-4">
          {/* Removed duplicate category badge here */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>2025</span>
          </div>
        </div>
        <p className="text-muted-foreground mb-4">{project.longDescription}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mb-4">
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
        <DialogFooter>
          <Button asChild className="flex-1 group">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Live Demo
            </a>
          </Button>
          <Button variant="outline" asChild className="flex-1 group">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              View Code
            </a>
          </Button>
        </DialogFooter>
      </div>
    </div>
  );
};

export default ProjectDetail;
