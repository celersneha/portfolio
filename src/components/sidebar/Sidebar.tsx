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
import { Button } from "@/components/ui/button";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home", icon: FiHome },
  { href: "/dashboard", label: "Dashboard", icon: LuLayoutDashboard },
  { href: "/projects", label: "Projects", icon: LuFolderGit2 },
  { href: "/tech-stack", label: "Tech Stack", icon: FiBookOpen },
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

interface SidebarContentProps {
  pathname: string;
  onNavigate?: () => void;
  isScrolled?: boolean;
}

const SidebarContent = ({
  pathname,
  onNavigate,
  isScrolled = false,
}: SidebarContentProps) => {
  const getImageSize = () => {
    return isScrolled ? 60 : 80;
  };

  return (
    <div className="flex flex-col space-y-8 lg:space-y-10">
      {/* Profile Section removed to avoid duplicate */}

      {/* Navigation */}
      <nav className="flex flex-col gap-2 lg:gap-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 w-full px-4 py-3 lg:py-3.5 rounded-lg font-medium transition-all duration-200 text-left group text-sm lg:text-base
                ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              onClick={() => {
                if (onNavigate) onNavigate();
              }}
            >
              <item.icon
                className={`w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 ${
                  isActive ? "animate-pulse" : "group-hover:-rotate-12"
                }`}
              />
              <span className="lg:text-base">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Social Links */}
      <div className="pt-6 lg:pt-8 border-t border-border">
        <div className="flex items-center justify-start space-x-3 lg:space-x-4">
          {socialLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              size="sm"
              asChild
              className="w-9 h-9 p-0 rounded-full hover:bg-primary/10"
            >
              <Link
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="w-4 h-4" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [expandMenu, setExpandMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100);
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
    <>
      {/* Desktop & Mobile Header */}
      <header className="lg:w-auto lg:sticky lg:top-0 lg:self-start lg:min-w-64">
        <div
          className={`fixed z-20 w-full bg-background/95 backdrop-blur-sm p-5 shadow-sm border-b border-border lg:relative lg:border-none lg:!bg-transparent lg:p-0 lg:shadow-none lg:px-2 transition-all duration-300 ${
            expandMenu ? "pb-0" : ""
          }`}
        >
          <div className="flex items-start justify-between lg:flex-col lg:space-y-6">
            {/* Profile Header - Visible on both mobile and desktop */}
            <div className="flex w-full items-center gap-4 lg:flex-col lg:items-start lg:gap-1">
              <div
                className="rounded-full overflow-hidden flex items-center justify-center bg-primary transition-all duration-300"
                style={{
                  width: expandMenu ? "80px" : isScrolled ? "0px" : "40px",
                  height: expandMenu ? "80px" : isScrolled ? "0px" : "40px",
                }}
              >
                {/* Only render image if visible */}
                {(expandMenu || !isScrolled) && (
                  <Image
                    src="/profile.jpg"
                    alt="Sneha Sharma"
                    className="w-full h-full object-cover"
                    width={expandMenu ? 80 : 40}
                    height={expandMenu ? 80 : 40}
                    priority
                  />
                )}
              </div>
              <div className="lg:mt-6">
                <Link href="/" passHref>
                  <h2 className="text-lg font-semibold lg:text-2xl hover:text-primary transition-colors">
                    Sneha Sharma
                  </h2>
                </Link>
                <span className="text-muted-foreground text-sm lg:text-base lg:block hidden">
                  @celersneha
                </span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden mt-2 flex items-center gap-5">
              <button
                onClick={toggleMenu}
                className="flex flex-col justify-between h-5 w-6 cursor-pointer"
                aria-label="Toggle menu"
              >
                <span
                  className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                    expandMenu ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                    expandMenu ? "w-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                    expandMenu ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <AnimatePresence>
            {expandMenu && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="pt-6 space-y-5 lg:hidden"
              >
                <SidebarContent pathname={pathname} onNavigate={closeMenu} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Sidebar Content */}
        <div className="hidden lg:block lg:py-8">
          <SidebarContent pathname={pathname} isScrolled={isScrolled} />
        </div>
      </header>
    </>
  );
};

export default Sidebar;
