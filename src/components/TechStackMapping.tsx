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
  SiPython,
  SiGraphql,
  SiPrisma,
  SiSocketdotio,
  SiAmazon,
  SiVercel,
  SiFigma,
  SiCanva,
  SiNotion,
  SiNginx,
  SiOpenai,
  SiCloudinary,
  SiDrizzle,
  SiMongoose,
  SiZod,
  SiReacthookform,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { FaBrain, FaDigitalOcean } from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoIosCode } from "react-icons/io";
import { CiServer } from "react-icons/ci";
import { GoDatabase } from "react-icons/go";
import { FiGlobe, FiMail } from "react-icons/fi";
import Image from "next/image";

export const techIcons: Record<string, JSX.Element> = {
  "Next.js": <SiNextdotjs className="mr-1 w-4 h-4" color="#2D2D2D" />,
  "React.js": <SiReact className="mr-1 w-4 h-4" color="#61DAFB" />,
  TypeScript: <SiTypescript className="mr-1 w-4 h-4" color="#3178C6" />,
  JavaScript: <SiJavascript className="mr-1 w-4 h-4" color="#F7DF1E" />,
  Python: <SiPython className="mr-1 w-4 h-4" color="#3776AB" />,
  "Tailwind CSS": <SiTailwindcss className="mr-1 w-4 h-4" color="#38B2AC" />,
  HTML5: <SiHtml5 className="mr-1 w-4 h-4" color="#E34F26" />,
  CSS3: <SiCss3 className="mr-1 w-4 h-4" color="#1572B6" />,
  "Node.js": <SiNodedotjs className="mr-1 w-4 h-4" color="#339933" />,
  "Express.js": <SiExpress className="mr-1 w-4 h-4" color="#2D2D2D" />,
  "API Integration": <FiGlobe className="mr-1 w-4 h-4" />,
  "REST API": <FiGlobe className="mr-1 w-4 h-4" color="#2D2D2D" />,
  GraphQL: <SiGraphql className="mr-1 w-4 h-4" color="#E10098" />,
  Webhooks: <BiGitBranch className="mr-1 w-4 h-4" color="#a855f7" />,
  WebSocket: <TbDatabase className="mr-1 w-4 h-4" color="#f59e42" />,
  MongoDB: <SiMongodb className="mr-1 w-4 h-4" color="#47A248" />,
  PostgreSQL: <SiPostgresql className="mr-1 w-4 h-4" color="#336791" />,
  Redis: <SiRedis className="mr-1 w-4 h-4" color="#DC382D" />,
  Prisma: <SiPrisma className="mr-1 w-4 h-4" color="#2D3748" />,
  "Socket.io": <SiSocketdotio className="mr-1 w-4 h-4" color="#010101" />,
  "LangChain.js": <FaBrain className="mr-1 w-4 h-4" color="#a855f7" />,
  "Vector Databases": <TbDatabase className="mr-1 w-4 h-4" color="#10b981" />,
  "RAG Pipelines": <FaBrain className="mr-1 w-4 h-4" color="#f59e42" />,
  Git: <SiGit className="mr-1 w-4 h-4" color="#F05032" />,
  Postman: <SiPostman className="mr-1 w-4 h-4" color="#FF6C37" />,
  Docker: <SiDocker className="mr-1 w-4 h-4" color="#2496ED" />,
  GitHub: <SiGithub className="mr-1 w-4 h-4" color="#2D2D2D" />,
  "GitHub Actions": (
    <SiGithubactions className="mr-1 w-4 h-4" color="#2088FF" />
  ),
  "Browser APIs": <SiGooglechrome className="mr-1 w-4 h-4" color="#4285F4" />,
  "Chrome Extension": (
    <SiGooglechrome className="mr-1 w-4 h-4" color="#4285F4" />
  ),
  Shadcn: <SiShadcnui className="mr-1 w-4 h-4" color="#2D2D2D" />,
  "Framer Motion": <FiGlobe className="mr-1 w-4 h-4" color="#FF006B" />,
  "Digital Ocean": <FaDigitalOcean className="mr-1 w-4 h-4" color="#2496ED" />,
  AWS: <SiAmazon className="mr-1 w-4 h-4" color="#FF9900" />,
  Vercel: <SiVercel className="mr-1 w-4 h-4" color="#2D2D2D" />,
  FastAPI: <SiFastapi className="mr-1 w-4 h-4" color="#009688" />,
  Livekit: (
    <Image
      src="/tech-images/livekit.svg"
      alt="LiveKit"
      width={16}
      height={16}
      className="mr-1 w-4 h-4 inline-block align-text-bottom"
      style={{ display: "inline" }}
    />
  ),
  Figma: <SiFigma className="mr-1 w-4 h-4" color="#F24E1E" />,
  Canva: <SiCanva className="mr-1 w-4 h-4" color="#00C4CC" />,
  Notion: <SiNotion className="mr-1 w-4 h-4" color="#000000" />,
  Nginx: <SiNginx className="mr-1 w-4 h-4" color="#009639" />,
  "JWT Auth": <SiGithubactions className="mr-1 w-4 h-4" color="#2088FF" />,
  "Cron Jobs": <BiGitBranch className="mr-1 w-4 h-4" color="#a855f7" />,
  "CI/CD": <SiGithubactions className="mr-1 w-4 h-4" color="#2088FF" />,
  Embeddings: <SiOpenai className="mr-1 w-4 h-4" color="#10b981" />,
  "Prompt Engineering": <SiOpenai className="mr-1 w-4 h-4" color="#a855f7" />,
  "OpenAI / Gemini APIs": <SiOpenai className="w-4 h-4" color="#10b981" />,
  Cloudinary: <SiCloudinary className="mr-1 w-4 h-4" color="#3448C5" />,
  "Drizzle ORM": <SiDrizzle className="mr-1 w-4 h-4" color="#C5B358" />,
  Mongoose: <SiMongoose className="mr-1 w-4 h-4" color="#880000" />,
  Valkey: <BiGitBranch className="mr-1 w-4 h-4" color="#FF0000" />,
  BullMQ: <TbDatabase className="mr-1 w-4 h-4" color="#FF6B35" />,
  Bun: <BiGitBranch className="mr-1 w-4 h-4" color="#F471B5" />,
  Qdrant: <FaBrain className="mr-1 w-4 h-4" color="#38A2D0" />,
  Clerk: <BiGitBranch className="mr-1 w-4 h-4" color="#6B5B95" />,
  Streamdown: <FiGlobe className="mr-1 w-4 h-4" color="#00D9FF" />,
  "TanStack React Query v5": (
    <FaBrain className="mr-1 w-4 h-4" color="#FF4154" />
  ),
  Axios: <BiGitBranch className="mr-1 w-4 h-4" color="#5A2D82" />,
  Vite: <BiGitBranch className="mr-1 w-4 h-4" color="#646CFF" />,
  "Styled Components": <BiGitBranch className="mr-1 w-4 h-4" color="#DB7093" />,
  "Apollo Client": <FaBrain className="mr-1 w-4 h-4" color="#311C87" />,
  "Apollo Server": <FaBrain className="mr-1 w-4 h-4" color="#311C87" />,
  "React Router": <SiReact className="mr-1 w-4 h-4" color="#61DAFB" />,
  Nodemailer: <FiMail className="mr-1 w-4 h-4" color="#0077B5" />,
  "Feather Icons": <FiGlobe className="mr-1 w-4 h-4" color="#000000" />,
  Razorpay: <TbDatabase className="mr-1 w-4 h-4" color="#02042B" />,
  "pdf-lib": <BiGitBranch className="mr-1 w-4 h-4" color="#FF5733" />,
  Recharts: <FaBrain className="mr-1 w-4 h-4" color="#8884D8" />,
  "Gemini 2.0 Flash API": <SiOpenai className="mr-1 w-4 h-4" color="#4285F4" />,
  MistralAI: <SiOpenai className="mr-1 w-4 h-4" color="#FF6B35" />,
  "Google Gemini": <SiOpenai className="mr-1 w-4 h-4" color="#4285F4" />,
  "CRON Jobs": <SiGithubactions className="mr-1 w-4 h-4" color="#2088FF" />,
  Bcrypt: <BiGitBranch className="mr-1 w-4 h-4" color="#228AE6" />,
  "Manifest V3": <SiGooglechrome className="mr-1 w-4 h-4" color="#4285F4" />,
  "pdf-parse": <BiGitBranch className="mr-1 w-4 h-4" color="#FF5733" />,
  Multer: <TbDatabase className="mr-1 w-4 h-4" color="#FFA500" />,
  LangGraph: <FaBrain className="mr-1 w-4 h-4" color="#00D9FF" />,
  "NextAuth.js": <BiGitBranch className="mr-1 w-4 h-4" color="#0055CC" />,
  "React Hook Form": (
    <SiReacthookform className="mr-1 w-4 h-4" color="#EC5990" />
  ),
  Zod: <SiZod className="mr-1 w-4 h-4" color="#3E67AC" />,
  "OMDB API": <FiGlobe className="mr-1 w-4 h-4" color="#FFB800" />,
  "Lucide React": <FiGlobe className="mr-1 w-4 h-4" color="#F97316" />,
  "PDF Processing": <BiGitBranch className="mr-1 w-4 h-4" color="#FF5733" />,
  "Docker Compose": <SiDocker className="mr-1 w-4 h-4" color="#2496ED" />,
  Adminer: <GoDatabase className="mr-1 w-4 h-4" color="#4CAF50" />,
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
