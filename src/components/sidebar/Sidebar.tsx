"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Home,
  LayoutDashboard,
  FolderGit2,
  BookOpen,
  User,
  Mail as MailIcon,
  Menu,
  X,
} from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/tech-stack", label: "Tech Stack", icon: BookOpen },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: MailIcon },
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

const SidebarContent = ({ active, setActive, onNavigate }: any) => (
  <div className="flex flex-col h-full gap-y-6 sticky top-0">
    <div>
      {/* Profile Section */}
      <div className="flex flex-col items-start px-6 pt-8 pb-4">
        <div className="flex flex-col items-start gap-2">
          <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-primary">
            <img
              src="/profile.jpg"
              alt="Sneha Sharma"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-semibold text-lg">Sneha Sharma</span>
          <span className="text-muted-foreground text-sm">@celersneha</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 px-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium transition-colors duration-200 text-left
              ${
                active === item.href.replace("/", "")
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            onClick={() => {
              setActive(item.href.replace("/", ""));
              if (onNavigate) onNavigate();
            }}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
    {/* Social Links */}
    <div className="px-6 pb-8">
      <div className="border-t border-border pt-6 flex items-center justify-center space-x-4">
        {socialLinks.map((link) => (
          <Button
            key={link.href}
            variant="ghost"
            size="sm"
            asChild
            className="w-10 h-10 p-0 rounded-full hover:bg-primary/10"
          >
            <a
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon className="w-5 h-5" />
            </a>
          </Button>
        ))}
      </div>
    </div>
  </div>
);

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);
  const openMenu = () => setMobileOpen(true);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="fixed top-0 left-0 h-screen w-72 z-40 flex flex-col md:flex "
        style={{
          maxHeight: "100vh",
        }}
      >
        {/* SidebarContent is now sticky */}
        <SidebarContent active={active} setActive={setActive} />
      </aside>

      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 w-full h-14 z-50 flex items-center justify-between px-4 md:hidden border-b border-border backdrop-blur-xl ">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-primary">
            <img
              src="/profile.jpg"
              alt="Sneha Sharma"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-semibold text-base hidden xs:inline-block">
            Sneha Sharma
          </span>
          <span className="text-muted-foreground text-xs hidden xs:inline-block">
            @celersneha
          </span>
        </div>
        {/* Hamburger */}
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 p-0 rounded-full cursor-pointer"
          onClick={openMenu}
          aria-label="Open sidebar"
        >
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Mobile Fullscreen Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-sidebar"
            initial={{ opacity: 0, y: -32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -32 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col md:hidden overflow-y-auto"
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <Button
                variant="ghost"
                size="sm"
                className="w-8 h-8 p-0 rounded-full"
                onClick={closeMenu}
                aria-label="Close sidebar"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            {/* Profile Section */}
            <div className="flex flex-col items-start px-6 pt-2 pb-4">
              <div className="flex flex-col items-start gap-2">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-primary">
                  <img
                    src="/profile.jpg"
                    alt="Sneha Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-semibold text-lg">Sneha Sharma</span>
                <span className="text-muted-foreground text-sm">
                  @celersneha
                </span>
              </div>
            </div>
            {/* Navigation */}
            <nav className="flex flex-col gap-1 px-6 mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium transition-colors duration-200 text-left
                    ${
                      active === item.href.replace("/", "")
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    }`}
                  onClick={() => {
                    setActive(item.href.replace("/", ""));
                    closeMenu();
                  }}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
            {/* Social Links */}
            <div className="flex items-center justify-center space-x-4 pt-8 pb-8">
              {/* Changed mt-auto mb-8 to only pb-8 so links are always visible */}
              {socialLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="w-10 h-10 p-0 rounded-full hover:bg-primary/10"
                >
                  <a
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
