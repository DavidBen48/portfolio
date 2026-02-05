
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  // --- TypeScript & NestJS ---
  {
    id: 1,
    title: "Sistema de Boletim API",
    description: "Sistema CRUD com HTTP Request para análise de desempenho de alunos e gestão de notas por matéria.",
    stack: ["TypeScript", "NestJS", "Express", "MongoDB", "Swagger"],
    status: "COMPLETED",
    repoUrl: "https://github.com/DavidBen48/Boletim-Escolar-API-basico",
    category: "TypeScript & NestJS"
  },
  {
    id: 2,
    title: "API de Clima",
    description: "Sistema que indica o clima em um lugar especificado pelo usuário.",
    stack: ["TypeScript", "NestJS", "Docker", "Axios", "ConfigModule"],
    status: "STRUCTURING",
    category: "TypeScript & NestJS"
  },
  {
    id: 3,
    title: "AuthGuard Microservice",
    description: "Sistema robusto de autenticação e autorização (RBAC) com validação de tokens e guards personalizados.",
    stack: ["TypeScript", "NestJS", "Passport", "JWT", "Bcrypt", "PostgreSQL"],
    status: "IN_PROGRESS",
    category: "TypeScript & NestJS"
  },

  // --- NodeJS (Replacement for Golang) ---
  {
    id: 4,
    title: "Task List API (Simple)",
    description: "API RESTful leve para gerenciamento de tarefas, focado em manipulação de rotas e persistência básica.",
    stack: ["NodeJS", "Express", "FileSystem", "JSON"],
    status: "IN_PROGRESS",
    category: "NodeJS"
  },
  {
    id: 5,
    title: "Blog Content API (Medium)",
    description: "API para gerenciamento de postagens e comentários, incluindo upload de imagens e filtragem de conteúdo.",
    stack: ["NodeJS", "Express", "MongoDB", "Mongoose", "Multer"],
    status: "IN_PROGRESS",
    category: "NodeJS"
  },
  {
    id: 6,
    title: "Secure Auth System (Hard)",
    description: "Sistema complexo de autenticação: Registro, Login, Refresh Token, Rate Limiting e cobertura de testes automatizados.",
    stack: ["NodeJS", "Express", "Jest", "Supertest", "PostgreSQL", "Sequelize", "JWT"],
    status: "IN_PROGRESS",
    category: "NodeJS"
  },

  // --- FullStack ---
  {
    id: 7,
    title: "Loja de Roupa Connect",
    description: "Um serviço freelance que fiz sob encomenda para um evento em específico, utilizando IA.",
    stack: ["React", "NextJS", "Framer Motion", "Radix UI", "TailwindCSS", "API Whatsapp"],
    status: "COMPLETED",
    repoUrl: "https://github.com/DavidBen48/connect-sao-bento",
    deployUrl: "https://connect-saobento.vercel.app/",
    category: "FullStack (AI-Powered)"
  },
  {
    id: 8,
    title: "Members.AI",
    description: "Serviço freelancer de sistema CRUD, restrito, de membros ativos de uma instituição religiosa.",
    stack: ["React", "NextJS", "TypeScript", "TailwindCSS", "Framer Motion", "Radix UI", "Auth", "Supabase", "Google Maps API", "OpenStreetMap API"],
    status: "COMPLETED",
    repoUrl: "https://github.com/DavidBen48/adepa-freifabiano",
    deployUrl: "https://adepa-freifabiano.vercel.app/",
    category: "FullStack (AI-Powered)"
  }
];

// Ordem: Backend, Infra, Data, AI, Frontend
export const SKILLS: Skill[] = [
  // Backend Engineering (5 itens)
  { name: "NodeJS", level: "Intermediate", score: 4 },
  { name: "TypeScript", level: "Intermediate", score: 4 },
  { name: "NestJS", level: "Intermediate", score: 3 },
  { name: "Express", level: "Intermediate", score: 4 },
  { name: "Jest/Testing", level: "Intermediate", score: 3 },
  
  // Infrastructure & DB (4 itens)
  { name: "PostgreSQL", level: "Basic", score: 4 },
  { name: "Supabase", level: "Basic", score: 3 },
  { name: "MongoDB", level: "Basic", score: 3 },
  { name: "Docker", level: "Basic", score: 2 },

  // Data Engineering & Analytics (6 itens)
  { name: "Python & Pandas", level: "Intermediate", score: 4 },
  { name: "NumPy & PySpark", level: "Intermediate", score: 3 },
  { name: "ETL Processes", level: "Basic", score: 2 },
  { name: "Data Lake/Warehouse", level: "Basic", score: 3 },
  { name: "PowerBI", level: "Basic", score: 3 },
  { name: "Google Cloud", level: "Basic", score: 2 },

  // AI Workflow (4 itens)
  { name: "AI Studio", level: "Intermediate", score: 5 },
  { name: "Lovable", level: "Intermediate", score: 4 },
  { name: "Cursor", level: "Intermediate", score: 3 },
  { name: "Windsurf", level: "Basic", score: 2 },

  // Frontend Ecosystem (4 itens)
  { name: "Javascript", level: "Intermediate", score: 4 },
  { name: "Tailwind", level: "Intermediate", score: 3 },
  { name: "React", level: "Basic", score: 3 },
  { name: "NextJS", level: "Basic", score: 3 },
];
