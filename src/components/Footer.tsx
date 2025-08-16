"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUp,
  Heart,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Code2,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/celersneha",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      href: "https://github.com/celersneha",
      icon: Github,
      color: "hover:text-gray-300",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/celersneha",
      icon: Twitter,
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      href: "mailto:celersneha@gmail.com",
      icon: Mail,
      color: "hover:text-green-400",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume.pdf" },
  ];

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
  ];

  return (
    <footer className="bg-background/95 backdrop-blur border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sneha Sharma</h3>
                <p className="text-muted-foreground text-sm">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Passionate about creating innovative web solutions that combine
              beautiful design with powerful functionality. Let's build
              something amazing together.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <MapPin className="w-4 h-4" />
              <span>Available for remote opportunities worldwide</span>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Let's Connect</h4>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group ${social.color}`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-xs font-medium">{social.name}</span>
                  </a>
                );
              })}
            </div>

            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="w-full group"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Sneha Sharma. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </a>
            <a
              href="/sitemap.xml"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Credits */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using Next.js, shadcn/ui, and Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
