"use client";
import React from "react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "InvisiFeed",
      description:
        "Anonymous Feedback, Powerful Insights. Developed with Next.js and NextAuth, implementing stateful authentication for 1,000+ active users. Integrated Gemini API for AI-driven feedback, generating 500+ insights weekly, boosting engagement by 40%. Automated smart invoice generation with pdf-lib and react-pdf, processing 300+ invoices monthly.",
      image: "/project1.jpg",
      technologies: [
        "Next.js",
        "NextAuth",
        "Gemini API",
        "pdf-lib",
        "react-pdf",
        "Razorpay",
        "Shadcn",
        "Framer Motion",
        "Recharts",
        "Zod",
        "Nodemailer",
      ],
      githubUrl: "",
      liveUrl: "https://invisifeed.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "InactiTab",
      description:
        "Advanced Tab Activity Manager. Built a Chrome extension using React and Chrome APIs for tab inactivity detection, auto-close, and custom timers — handles 20+ tabs efficiently. Improved browser performance by 30% using media detection, whitelisting, and real-time tab tracking. Enhanced UX with intuitive controls and persistent settings.",
      image: "/project2.jpg",
      technologies: ["React", "Chrome APIs", "JavaScript", "CSS3"],
      githubUrl: "",
      liveUrl: "https://inactitab.vercel.app",
      featured: true,
    },
    {
      id: 3,
      title: "QuickBites",
      description:
        "Seamless and Scalable Online Food Delivery Platform. Increases efficiency by 30% with a MERN-based architecture, RESTful APIs, and a user-friendly interface. Improves performance by 40% using scalable design, JWT authentication, and an admin panel for better management. Achieves 98% seamless and secure payment with Stripe integration.",
      image: "/project3.jpg",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "JWT",
        "Stripe",
        "RESTful APIs",
      ],
      githubUrl: "https://github.com/SnehaSharma245/Food-Delivery",
      liveUrl: "",
      featured: true,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS showcasing various projects and skills. Features SEO optimization, structured data, and performance optimization.",
      image: "/project4.jpg",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "SEO"],
      githubUrl: "https://github.com/SnehaSharma245/portfolio",
      liveUrl: "https://sneha-sharma-portfolio.vercel.app",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative group">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* Laptop mockup */}
                    <div className="bg-gray-800 rounded-t-lg h-6 flex items-center px-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    {/* Project preview */}
                    <div className="bg-blue-100 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                          <span className="text-white text-2xl">🌐</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-2">
                          Live Preview
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 text-center"
                    >
                      LIVE DEMO
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all text-center"
                    >
                      CODE
                    </a>
                  </div>

                  {project.featured && (
                    <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-medium text-sm">
                      CASE STUDY
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Want to see more projects? Check out my GitHub for additional work
            and contributions.
          </p>
          <a
            href="https://github.com/SnehaSharma245"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
