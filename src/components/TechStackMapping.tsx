import type { JSX } from "react";
import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiLangchain,
  SiGithub,
  SiDocker,
  SiGit,
  SiPostman,
  SiGithubactions,
  SiShadcnui,
  SiGooglechrome,
  SiFastapi,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { FaBrain, FaDigitalOcean } from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoIosCode } from "react-icons/io";
import { CiServer } from "react-icons/ci";
import { GoDatabase } from "react-icons/go";
import { FiGlobe } from "react-icons/fi";
import Image from "next/image";

export const techIcons: Record<string, JSX.Element> = {
  "Next.js": <SiNextdotjs className="mr-1 w-4 h-4" color="#fff" />,
  "React.js": <SiReact className="mr-1 w-4 h-4" color="#61DAFB" />,
  TypeScript: <SiTypescript className="mr-1 w-4 h-4" color="#3178C6" />,
  JavaScript: <SiJavascript className="mr-1 w-4 h-4" color="#F7DF1E" />,
  "Tailwind CSS": <SiTailwindcss className="mr-1 w-4 h-4" color="#38B2AC" />,
  HTML5: <SiHtml5 className="mr-1 w-4 h-4" color="#E34F26" />,
  CSS3: <SiCss3 className="mr-1 w-4 h-4" color="#1572B6" />,
  "Node.js": <SiNodedotjs className="mr-1 w-4 h-4" color="#339933" />,
  "Express.js": <SiExpress className="mr-1 w-4 h-4" color="#fff" />,
  "API Integration": <FiGlobe className="mr-1 w-4 h-4" />,
  Webhooks: <BiGitBranch className="mr-1 w-4 h-4" color="#a855f7" />,
  WebSocket: <TbDatabase className="mr-1 w-4 h-4" color="#f59e42" />,
  MongoDB: <SiMongodb className="mr-1 w-4 h-4" color="#47A248" />,
  PostgreSQL: <SiPostgresql className="mr-1 w-4 h-4" color="#336791" />,
  Redis: <SiRedis className="mr-1 w-4 h-4" color="#DC382D" />,
  "LangChain.js": <FaBrain className="mr-1 w-4 h-4" color="#a855f7" />,
  "Vector Databases": <TbDatabase className="mr-1 w-4 h-4" color="#10b981" />,
  "RAG Pipelines": <FaBrain className="mr-1 w-4 h-4" color="#f59e42" />,
  Git: <SiGit className="mr-1 w-4 h-4" color="#F05032" />,
  Postman: <SiPostman className="mr-1 w-4 h-4" color="#FF6C37" />,
  Docker: <SiDocker className="mr-1 w-4 h-4" color="#2496ED" />,
  GitHub: <SiGithub className="mr-1 w-4 h-4" color="#fff" />,
  "GitHub Actions": (
    <SiGithubactions className="mr-1 w-4 h-4" color="#2088FF" />
  ),
  "Browser APIs": <SiGooglechrome className="mr-1 w-4 h-4" color="#4285F4" />,
  Shadcn: <SiShadcnui className="mr-1 w-4 h-4" />,
  "Digital Ocean": <FaDigitalOcean className="mr-1 w-4 h-4" color="#2496ED" />,
  FastAPI: <SiFastapi className="mr-1 w-4 h-4" color="#009688" />,
  LiveKit: (
    <Image
      src="/tech-images/livekit.svg"
      alt="LiveKit"
      width={16}
      height={16}
      className="mr-1 w-4 h-4 inline-block align-text-bottom"
      style={{ display: "inline" }}
    />
  ),
};

export const categoryIcons: Record<string, JSX.Element> = {
  Palette: (
    <IoColorPaletteOutline className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
  ),
  Server: (
    <CiServer className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
  ),
  Database: (
    <GoDatabase className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
  ),
  Code: <IoIosCode className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />,
  Globe: <FiGlobe className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />,
};
