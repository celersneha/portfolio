"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import { techIcons } from "@/components/TechStackMapping";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";

interface Skill {
  name: string;
}

interface HomeClientProps {
  skills: Skill[];
}

const HomeClient = ({ skills }: HomeClientProps) => {
  return (
    <motion.section
      id="home"
      className="flex items-center justify-center min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)]"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="w-full h-full flex items-center justify-center px-2 py-6 sm:px-4 sm:py-8">
        {/* Content */}
        <div className="space-y-8 sm:space-y-10 md:space-y-2 animate-fade-in-up text-left max-w-4xl w-full">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="flex flex-wrap gap-2 justify-start">
              <Badge
                variant="outline"
                className="text-rose-500 border-rose-100 bg-white shadow-sm px-3 py-1 rounded-lg text-xs sm:text-sm lg:text-base xl:text-lg font-semibold"
              >
                <span className="text-lg">👋</span>
                Available for new opportunities
              </Badge>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Hi, I'm <span className="text-primary">Sneha</span>
            </h1>

            <h2 className="text-sm xs:text-base sm:text-xl text-muted-foreground">
              Driven by <span className="text-primary font-bold">purpose</span>,
              powered by <span className="text-primary  font-bold">code</span>
            </h2>

            <p className="text-xs xs:text-sm sm:text-base md:text-xl xl:text-2xl text-muted-foreground max-w-4xl leading-relaxed text-left">
              Building exceptional digital experiences with modern technologies,
              specializing in scalable web applications.
            </p>
          </div>

          {/* Skills - Infinite Auto Scroll Animation */}
          <div className="py-6 mt-4 w-full overflow-hidden">
            <style>{`
              @keyframes infiniteScroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-50%)); }
              }
              
              .skills-infinite-scroll {
                display: flex;
                gap: 1rem;
                animation: infiniteScroll 45s linear infinite;
                width: fit-content;
              }

              .skills-wave:hover{
                animation-play-state: paused;
                }
              
              .skill-item {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.75rem 1rem;
                border-radius: 0.75rem;
                border: 1.5px solid #E5E7EB;
                background: #FFFFFF;
                font-size: 0.875rem;
                font-weight: 500;
                color: #2D2D2D;
                white-space: nowrap;
                flex-shrink: 0;
                transition: all 0.2s ease;
              }
              
              .skill-item:hover {
                border-color: #F43F5E;
                background: #FAF9F6;
                box-shadow: 0 4px 12px rgba(244, 63, 94, 0.1);
              }
              
              .skill-icon {
                font-size: 1.25rem;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            `}</style>
            <div className="relative w-full overflow-hidden">
              <div className="skills-infinite-scroll">
                {/* Duplicate skills for seamless infinite loop */}
                {[...skills, ...skills].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card text-xs xs:text-sm sm:text-base lg:text-[1rem] xl:text-[1.05rem] font-medium text-foreground whitespace-nowrap flex-shrink-0 transition-all duration-200 hover:border-primary hover:bg-background hover:shadow-md"
                  >
                    <span className="text-base xs:text-lg sm:text-xl flex items-center justify-center">
                      {techIcons[skill.name]}
                    </span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start pt-2 sm:pt-6 md:pt-0 mt-4">
            <Link
              href="/projects"
              className="group w-full sm:w-auto text-base"
              passHref
            >
              <Button
                size="lg"
                variant="secondary"
                className="w-[max-content] sm:w-auto text-base"
                asChild
              >
                <span>
                  See My Work
                  <FiExternalLink className="ml-2 w-3 h-3 " />
                </span>
              </Button>
            </Link>
          </div>

          {/* Connection Icons (Desktop & Mobile) */}
          <div className="flex flex-col gap-6 mt-4">
            <div>
              {/* Pink gradient line with fading opacity left to right */}
              <div
                className="my-6 max-w-xs h-1 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #F43F5E 0%, rgba(244,63,94,0.2) 100%)",
                }}
              />
              <div className="flex flex-col gap-2">
                <span className="text-sm text-muted-foreground font-medium mb-2">
                  Connect with me
                </span>
                <div className="flex gap-5">
                  <Link
                    href="https://github.com/celersneha"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-primary transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/celersneha"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-primary transition-colors"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://x.com/celersneha"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="hover:text-primary transition-colors"
                  >
                    <BsTwitterX className="w-6 h-6" />
                  </Link>
                  <Link
                    href="mailto:celersneha@gmail.com"
                    passHref
                    aria-label="Email"
                    className="hover:text-primary transition-colors"
                  >
                    <FaEnvelope className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeClient;
