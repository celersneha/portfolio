"use client";
import React from "react";

const About = () => {
  const skills = [
    { name: "Next.js", level: 95 },
    { name: "React.js", level: 92 },
    { name: "JavaScript", level: 90 },
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 85 },
    { name: "MongoDB", level: 82 },
    { name: "PostgreSQL", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "GraphQL", level: 78 },
    { name: "C++", level: 85 },
  ];

  const experiences = [
    {
      title: "Full Stack Developer (MERN)",
      company: "Freelance Projects",
      period: "2023 - Present",
      description:
        "Developing scalable web applications using MERN stack, Next.js, and RESTful APIs. Built InvisiFeed with 1,000+ active users and integrated AI-driven feedback systems.",
    },
    {
      title: "Web Developer",
      company: "Personal Projects",
      period: "2022 - 2023",
      description:
        "Created InactiTab Chrome extension improving browser performance by 30%, and QuickBites food delivery platform with 98% secure payment integration.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ABOUT ME
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Get to know me */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get to know me!
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                To leverage my expertise in{" "}
                <strong>MERN stack, Next.js, and RESTful APIs</strong> to build
                scalable, high-performance applications. Passionate about
                driving innovation, contributing to impactful projects, and
                continuously enhancing my skills.
              </p>
              <p>
                I&apos;m a <strong>Full Stack Web Developer</strong>{" "}
                specializing in modern web technologies including
                <strong>
                  {" "}
                  React.js, Next.js, Node.js, Express.js, MongoDB, and
                  PostgreSQL
                </strong>
                . My projects have served thousands of users and improved
                performance metrics significantly.
              </p>
              <p>
                Currently pursuing{" "}
                <strong>B.Tech in Computer Science Engineering</strong> at
                Acropolis Institute of Technology and Research, Indore, with a
                CGPA of 8.0. I&apos;ve also earned certifications in React and
                C++ programming.
              </p>
              <p>
                I&apos;m open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don&apos;t hesitate to
                <strong> contact</strong> me.
              </p>
            </div>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              CONTACT
            </button>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {exp.title}
                    </h4>
                    <p className="text-purple-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Education
          </h3>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    B.Tech, Computer Science Engineering
                  </h4>
                  <p className="text-purple-600 font-medium">
                    Acropolis Institute of Technology and Research, Indore
                  </p>
                </div>
                <span className="text-gray-500 font-medium mt-2 md:mt-0">
                  2022 - 2026 | CGPA: 8.0
                </span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    CBSE XII (Senior Secondary)
                  </h4>
                  <p className="text-purple-600 font-medium">
                    S.I.C.A. Senior Secondary School, Indore
                  </p>
                </div>
                <span className="text-gray-500 font-medium mt-2 md:mt-0">
                  2021-22 | 92.7%
                </span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    CBSE X (Secondary)
                  </h4>
                  <p className="text-purple-600 font-medium">
                    S.I.C.A. Senior Secondary School, Indore
                  </p>
                </div>
                <span className="text-gray-500 font-medium mt-2 md:mt-0">
                  2019-20 | 97.4%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Achievements Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Certifications
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• React Mastery Certification [CodProg]</li>
                <li>• NPTEL Certification in C++</li>
                <li>• NPTEL Certification in C</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Achievements
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 1st Runner-up in Learn and Win 2022 (IIST)</li>
                <li>• 1,000+ active users on InvisiFeed platform</li>
                <li>• 30% browser performance improvement with InactiTab</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Hobbies & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium">
              Sketching
            </span>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium">
              Painting
            </span>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium">
              Playing Flute
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
