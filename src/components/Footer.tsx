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

  return (
    <footer className="bg-background/95 backdrop-blur border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center">
                <Code2 className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold">Sneha Sharma</h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 max-w-full md:max-w-md text-sm md:text-base">
              Passionate about creating innovative web solutions that combine
              beautiful design with powerful functionality. Let's build
              something amazing together.
            </p>

            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
              <MapPin className="w-3 h-3 md:w-4 md:h-4" />
              <span>Available for remote opportunities worldwide</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="order-3 md:order-2">
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="order-2 md:order-3">
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">
              Let's Connect
            </h4>
            <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 p-2 md:p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group ${social.color}`}
                  >
                    <IconComponent className="w-3 h-3 md:w-4 md:h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="my-6 md:my-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground text-center md:text-left">
            <span>© {currentYear} Sneha Sharma. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
