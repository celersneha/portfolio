"use client";

import { useState } from "react";
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
  <div className="flex flex-col h-full justify-between">
    <div>
      {/* Profile Section */}
      <div className="flex flex-col items-center px-6 pt-8 pb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <span className="font-semibold text-lg">Sneha Sharma</span>
        </div>
        <span className="text-muted-foreground text-sm">@celersneha</span>
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
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const openMenu = () => {
    setIsOpening(true);
    setMobileOpen(true);
    setTimeout(() => {
      setIsOpening(false);
    }, 50);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="relative h-full w-72 bg-background/90 z-40 flex-col justify-between shadow-xl backdrop-blur-xl overflow-y-auto hidden md:flex">
        {/* Background gradient and floating elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10" />
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float -z-10" />
        <div
          className="absolute bottom-32 right-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float -z-10"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/15 rounded-full blur-lg animate-float -z-10"
          style={{ animationDelay: "2s" }}
        />
        <SidebarContent active={active} setActive={setActive} />
      </aside>

      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 w-full h-14 backdrop-blur-xl z-40 flex items-center justify-between px-4 md:hidden border-b border-border">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
        </div>
        {/* Hamburger */}
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 p-0 rounded-full"
          onClick={openMenu}
          aria-label="Open sidebar"
        >
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Mobile Sidebar Modal (Header style) */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0  backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
              isClosing || isOpening ? "opacity-0" : "opacity-100"
            }`}
            onClick={closeMenu}
          />

          {/* Modal */}
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
                  aria-label="Close sidebar"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Navigation */}
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-3 px-4 text-left rounded-lg hover:bg-muted/50 font-medium"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
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

      {/* Mobile sidebar slide-in animation (not used for modal) */}
      <style jsx global>{`
        @keyframes slide-in-left {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
};

export default Sidebar;
