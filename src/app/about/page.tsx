import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutPage = () => (
  <div className="relative z-0 py-8">
    {/* Main content */}
    <div className="about-page max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12 space-y-12 sm:space-y-16 relative z-10">
      {/* Intro Section */}
      <section className="space-y-4 text-center md:text-left">
        <Badge variant="secondary" className="text-sm mx-auto md:mx-0">
          👋 Available for new opportunities
        </Badge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Sneha
          </span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
          Full Stack Developer
        </h2>
        <div className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 space-y-4">
          <p>Hello! Welcome to my personal portfolio.</p>
          <p>
            I’m Sneha, a passionate full-stack web developer with hands-on
            experience building dynamic and user-friendly websites and
            applications. I enjoy working on both the visible parts of the web
            (frontend) and the behind-the-scenes magic (backend). I’m also
            familiar with project management methodologies like Agile, which
            help me deliver work efficiently and effectively.
          </p>
          <p>
            My favorite tools are JavaScript, TypeScript, React, Next.js,
            Node.js, and Tailwind CSS. I love learning new technologies and
            discovering better ways to create seamless digital experiences using
            this modern tech stack.
          </p>
          <p>
            Throughout my journey, I’ve contributed to projects ranging from
            small startups to larger-scale applications. I value clear
            communication, teamwork, and solving challenges creatively.
          </p>
          <p>
            I’m always excited about collaborating with others to build
            meaningful, functional, and visually appealing digital products.
            Let’s create something amazing together!
          </p>
          <p>
            Best regards,
            <br />
            Sneha
          </p>
        </div>
        <Link
          href="https://drive.google.com/file/d/1VL1N0OO1w9xiiY8jMasHOG4wbnHNEnlA/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 md:ml-0 w-full sm:w-auto"
        >
          <Button size="lg" className="font-bold w-full sm:w-auto">
            Show Resume
          </Button>
        </Link>
      </section>
    </div>
  </div>
);

export default AboutPage;
