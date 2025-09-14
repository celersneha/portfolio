"use client";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const AboutPage = () => {
  const [tab, setTab] = useState<"intro" | "resume">("intro");
  const [prevTab, setPrevTab] = useState<"intro" | "resume">("intro");

  // Helper to determine direction for animation
  const getDirection = (from: string, to: string) => {
    if (from === to) return 0;
    return from === "intro" && to === "resume" ? 1 : -1;
  };

  const handleTabChange = (nextTab: "intro" | "resume") => {
    setPrevTab(tab);
    setTab(nextTab);
  };

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative z-0 py-8"
    >
      <div className="about-page max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12 space-y-12 sm:space-y-16 relative z-10">
        {/* Responsive: window style on md+, flex-col on mobile */}
        <div className="md:bg-background md:border md:border-border md:rounded-xl md:shadow-lg md:overflow-hidden flex flex-col">
          {/* Window top bar only on md+ */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/60">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <div className="flex-1" />
            {/* Tabs */}
            <div className="flex flex-row gap-2">
              <button
                className={`px-4 py-2 rounded-l-md font-semibold transition-colors ${
                  tab === "intro"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-primary-foreground"
                }`}
                onClick={() => handleTabChange("intro")}
                type="button"
              >
                Intro
              </button>
              <button
                className={`px-4 py-2 rounded-r-md font-semibold transition-colors ${
                  tab === "resume"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-primary-foreground"
                }`}
                onClick={() => handleTabChange("resume")}
                type="button"
              >
                Resume
              </button>
            </div>
          </div>
          {/* Tabs for mobile (flex-col) */}
          <div className="flex md:hidden flex-col gap-2 mb-4">
            <button
              className={`px-4 py-2 rounded-t-md font-semibold transition-colors ${
                tab === "intro"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
              onClick={() => handleTabChange("intro")}
              type="button"
            >
              Intro
            </button>
            <button
              className={`px-4 py-2 rounded-b-md font-semibold transition-colors ${
                tab === "resume"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
              onClick={() => handleTabChange("resume")}
              type="button"
            >
              Resume
            </button>
          </div>
          {/* Tab Content */}
          <section className="space-y-4 text-left md:text-left px-6 py-8 relative min-h-[350px]">
            <AnimatePresence mode="wait" initial={false}>
              {tab === "intro" && (
                <motion.div
                  key="intro"
                  initial={{
                    opacity: 0,
                    x: getDirection(prevTab, tab) > 0 ? 60 : -60, // intro->resume: 60 (from right), resume->intro: -60 (from left)
                    position: "absolute",
                    width: "100%",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    position: "relative",
                    width: "100%",
                  }}
                  exit={{
                    opacity: 0,
                    x: getDirection(prevTab, tab) > 0 ? -60 : 60, // intro->resume: -60 (to left), resume->intro: 60 (to right)
                    position: "absolute",
                    width: "100%",
                  }}
                  transition={{ duration: 0.32, ease: "easeInOut" }}
                >
                  <Badge
                    variant="secondary"
                    className="text-sm mx-auto md:mx-0"
                  >
                    👋 Available for new opportunities
                  </Badge>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                    Hi, I'm <span className="text-primary">Sneha</span>
                  </h1>
                  <h2 className="text-lg sm:text-xl mt-3 text-muted-foreground font-medium">
                    Full Stack Developer
                  </h2>
                  <div className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 space-y-6 mt-3">
                    <p>Hello! Welcome to my personal portfolio.</p>
                    <p>
                      I’m Sneha, a passionate full-stack web developer with
                      hands-on experience building dynamic and user-friendly
                      websites and applications. I enjoy working on both the
                      visible parts of the web (frontend) and the
                      behind-the-scenes magic (backend). I’m also familiar with
                      project management methodologies like Agile, which help me
                      deliver work efficiently and effectively.
                    </p>
                    <p>
                      My favorite tools are JavaScript, TypeScript, React,
                      Next.js, Node.js, and Tailwind CSS. I love learning new
                      technologies and discovering better ways to create
                      seamless digital experiences using this modern tech stack.
                    </p>
                    <p>
                      Throughout my journey, I’ve contributed to projects
                      ranging from small startups to larger-scale applications.
                      I value clear communication, teamwork, and solving
                      challenges creatively.
                    </p>
                    <p>
                      I’m always excited about collaborating with others to
                      build meaningful, functional, and visually appealing
                      digital products. Let’s create something amazing together!
                    </p>
                    <p>
                      Best regards,
                      <br />
                      Sneha
                    </p>
                  </div>
                </motion.div>
              )}
              {tab === "resume" && (
                <motion.div
                  key="resume"
                  initial={{
                    opacity: 0,
                    x: getDirection(prevTab, tab) > 0 ? 60 : -60,
                    position: "absolute",
                    width: "100%",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    position: "relative",
                    width: "100%",
                  }}
                  exit={{
                    opacity: 0,
                    x: getDirection(prevTab, tab) > 0 ? -60 : 60,
                    position: "absolute",
                    width: "100%",
                  }}
                  transition={{ duration: 0.32, ease: "easeInOut" }}
                >
                  <div className="flex flex-col items-start w-full">
                    <Link
                      href="https://drive.google.com/file/d/1VL1N0OO1w9xiiY8jMasHOG4wbnHNEnlA/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block md:ml-0 w-[max-content] sm:w-auto"
                    >
                      <Button
                        size="lg"
                        className="font-bold w-[max-content] sm:w-auto"
                        variant="secondary"
                      >
                        View Resume
                      </Button>
                    </Link>
                    <p className="mt-6 text-muted-foreground">
                      You can view or download my latest resume using the button
                      above.
                    </p>
                    {/* Resume Preview */}
                    <div className="w-full mt-8 rounded-lg overflow-hidden border border-border ">
                      <iframe
                        src="https://drive.google.com/file/d/1VL1N0OO1w9xiiY8jMasHOG4wbnHNEnlA/preview"
                        title="Sneha Resume Preview"
                        width="100%"
                        height="500"
                        allow="autoplay"
                        className=" min-h-[400px] rounded-lg"
                        style={{ border: "none" }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
