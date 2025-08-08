"use client";

import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-gray-900">
              SNEHA SHARMA
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              CONTACT
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium w-full text-left"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium w-full text-left"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium w-full text-left"
              >
                PROJECTS
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium w-full text-left"
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
