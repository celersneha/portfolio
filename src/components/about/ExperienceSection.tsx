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
    <div className="space-y-4 sm:space-y-6">
      {experiences.map((exp, idx) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="border border-border rounded-lg sm:rounded-xl p-3 sm:p-4 bg-background shadow-sm relative"
        >
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 cursor-pointer"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-md object-contain bg-white"
              />
              <span className="font-bold text-sm sm:text-lg">
                {exp.company}
              </span>
            </div>
            <div className="flex items-center justify-between sm:gap-6">
              <span className="text-muted-foreground font-medium text-xs sm:text-base">
                {exp.duration}
              </span>
              <FaChevronDown
                className={`w-3 h-3 transition-transform ml-2 sm:ml-0 ${
                  openIdx === idx ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-sm sm:text-base font-semibold text-muted-foreground">
              {exp.role}
            </span>
          </div>
          {openIdx === idx && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-3 sm:mt-4  "
            >
              <div className="flex flex-wrap gap-2 mb-2">
                {exp.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs sm:text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <ul className="list-disc ml-4 sm:ml-6 text-sm sm:text-base space-y-1">
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
