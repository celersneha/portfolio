"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/SnehaSharma245",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/ss0807",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "mailto:snehav2109@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                S
              </span>
            </div>
            <span className="font-bold text-xl">Sneha</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Social Links & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Social Links - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="w-9 h-9 p-0"
                >
                  <a href={link.href} aria-label={link.label}>
                    <link.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden w-9 h-9 p-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 text-left"
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                {socialLinks.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="w-9 h-9 p-0"
                  >
                    <a href={link.href} aria-label={link.label}>
                      <link.icon className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
