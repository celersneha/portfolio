import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "motion/react";

const experiences = [
  {
    company: "The Algorithm",
    logo: "/Experience/algorithm.jpeg",
    duration: "Sep 2025 – Present",
    role: "Full Stack Developer Intern",
    tech: ["FastAPI", "Node.js", "React", "PostgreSQL", "Livekit"],
    points: [],
  },
];

export default function ExperienceSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {experiences.map((exp, idx) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="border border-border rounded-xl p-4 bg-background shadow-sm relative"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <div className="flex items-center gap-3">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-10 h-10 rounded-md object-contain bg-white"
              />
              <span className="font-bold text-lg">{exp.company}</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-muted-foreground font-medium">
                {exp.duration}
              </span>
              <FaChevronDown
                className={`w-3 h-3 transition-transform ${
                  openIdx === idx ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
          <div className="mt-2 ml-14 text-base font-semibold text-muted-foreground">
            {exp.role}
          </div>
          {openIdx === idx && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-4 ml-14"
            >
              <div className="flex flex-wrap gap-2 mb-2">
                {exp.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <ul className="list-disc ml-6 text-base space-y-1">
                {exp.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
