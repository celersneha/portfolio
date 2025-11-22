"use client";

import { useState, useEffect } from "react";
import { BsTwitterX } from "react-icons/bs";
import { LuLayoutDashboard, LuFolderGit2 } from "react-icons/lu";
import {
  FiHome,
  FiBookOpen,
  FiUser,
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home", icon: FiHome },
  { href: "/dashboard", label: "Dashboard", icon: LuLayoutDashboard },
  { href: "/projects", label: "Projects", icon: LuFolderGit2 },
  { href: "/tech-stack", label: "Tech", icon: FiBookOpen },
  { href: "/about", label: "About", icon: FiUser },
  { href: "/contact", label: "Contact", icon: FiMail },
];

const socialLinks = [
  {
    href: "https://github.com/celersneha",
    icon: FiGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/celersneha",
    icon: FiLinkedin,
    label: "LinkedIn",
  },
  { href: "mailto:celersneha@gmail.com", icon: FiMail, label: "Email" },
  {
    href: "https://x.com/celersneha",
    icon: BsTwitterX,
    label: "Twitter",
  },
];

const Header = () => {
  const [expandMenu, setExpandMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (expandMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [expandMenu]);

  const closeMenu = () => setExpandMenu(false);
  const toggleMenu = () => setExpandMenu(!expandMenu);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left: Profile Section */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="rounded-full overflow-hidden w-10 h-10 lg:w-12 lg:h-12 bg-primary flex-shrink-0">
              <Image
                src="/profile.jpg"
                alt="Sneha Sharma"
                className="w-full h-full object-cover"
                width={40}
                height={40}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Hamburger for mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center h-8 w-8 cursor-pointer"
              aria-label={expandMenu ? "Close menu" : "Open menu"}
            >
              {expandMenu ? (
                <IoClose className="w-7 h-7 text-foreground transition-all duration-300" />
              ) : (
                <span className="flex flex-col justify-between h-5 w-6">
                  <span className="w-full h-0.5 bg-foreground rounded-full" />
                  <span className="w-full h-0.5 bg-foreground rounded-full" />
                  <span className="w-full h-0.5 bg-foreground rounded-full" />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {expandMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-background z-40 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-2 px-6 py-6 flex-1 overflow-y-auto">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 text-left text-base ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    }`}
                    onClick={closeMenu}
                  >
                    <item.icon
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive ? "animate-pulse" : "group-hover:-rotate-12"
                      }`}
                    />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
            {/* Pink gradient line above social links */}
            <div className="px-6 pt-2">
              <div
                className="mb-4 h-1 w-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #F43F5E 0%, rgba(244,63,94,0.1) 100%)",
                }}
              />
            </div>
            <div className="flex items-center justify-start gap-4 px-6 pb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-primary/10"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;
