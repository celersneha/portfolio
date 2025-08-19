"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      setIsOpening(true);
      setIsMenuOpen(true);
      setTimeout(() => {
        setIsOpening(false);
      }, 50);
    }
  };

  const navItems = [
    { href: "home", label: "Home" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/celersneha",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/celersneha",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "mailto:celersneha@gmail.com", icon: Mail, label: "Email" },
    {
      href: "https://x.com/celersneha",
      icon: BsTwitterX,
      label: "Twitter",
    },
  ];

  return (
    <>
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
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Moved outside header */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
              isClosing || isOpening ? "opacity-0" : "opacity-100"
            }`}
            onClick={closeMenu}
          />

          {/* Mobile Menu */}
          <div className="fixed inset-0 z-50 md:hidden flex items-center justify-center p-4">
            <div
              className={`bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-6 w-full max-w-[280px] transition-all duration-300 ease-in-out ${
                isClosing
                  ? "opacity-0 scale-95 translate-y-2"
                  : isOpening
                  ? "opacity-0 scale-95 translate-y-2"
                  : "opacity-100 scale-100 translate-y-0"
              }`}
            >
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-8 h-8 p-0 rounded-full"
                  onClick={closeMenu}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-3 px-4 text-left rounded-lg hover:bg-muted/50 font-medium"
                  >
                    {item.label}
                  </button>
                ))}

                {/* Mobile Social Links */}
                <div className="flex items-center justify-center space-x-4 pt-6 border-t border-border">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.href}
                      variant="ghost"
                      size="sm"
                      asChild
                      className="w-10 h-10 p-0 rounded-full hover:bg-primary/10"
                    >
                      <a href={link.href} aria-label={link.label}>
                        <link.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
