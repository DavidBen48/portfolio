import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Sistema de Boletim API",
    description: "Sistema CRUD com HTTP Request para análise de desempenho de alunos e gestão de notas por matéria.",
    stack: ["TypeScript", "NestJS", "Express", "MongoDB", "Swagger"],
    status: "COMPLETED",
    repoUrl: "https://github.com/DavidBen48/Boletim-Escolar-API-basico"
  },
  {
    id: 2,
    title: "CLI de Gerenciamento de Tarefas",
    description: "Ferramenta de linha de comando para gerenciar tarefas em alta performance.",
    stack: ["Golang", "Cobra CLI", "JSON", "OS", "Testing"],
    status: "IN_PROGRESS"
  },
  {
    id: 3,
    title: "Sistema de Gerenciamento de Pedidos",
    description: "Focado em regras de negócio complexas e arquitetura modular, simulando um e-commerce real.",
    stack: ["Node.js", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
    status: "STRUCTURING"
  },
  {
    id: 4,
    title: "API de Autenticação",
    description: "Sistema de login seguro, registro de usuários e controle de acesso a recursos protegidos.",
    stack: ["Golang", "Net/Http", "Gin", "MongoDB", "Swagger"],
    status: "STRUCTURING"
  }
];

// Ordem: Backend, Infra, AI, Frontend
export const SKILLS: Skill[] = [
  // Backend Engineering (5 itens) - Indices 0-4
  { name: "TypeScript", level: "Intermediate", score: 4 },
  { name: "NestJS", level: "Intermediate", score: 3 },
  { name: "NodeJS", level: "Intermediate", score: 2 },
  { name: "Golang", level: "Intermediate", score: 3 },
  { name: "JSON", level: "Intermediate", score: 3 },
  
  // Infrastructure & DB (4 itens) - Indices 5-8
  { name: "PostgreSQL", level: "Basic", score: 4 },
  { name: "Supabase", level: "Basic", score: 3 },
  { name: "MongoDB", level: "Basic", score: 3 },
  { name: "Docker", level: "Basic", score: 2 },

  // AI Workflow (4 itens) - Indices 9-12
  { name: "AI Studio", level: "Intermediate", score: 5 },
  { name: "Lovable", level: "Intermediate", score: 4 },
  { name: "Cursor", level: "Intermediate", score: 3 },
  { name: "Windsurf", level: "Basic", score: 2 },

  // Frontend Ecosystem (4 itens) - Indices 13-16
  { name: "Javascript", level: "Intermediate", score: 4 },
  { name: "Tailwind", level: "Intermediate", score: 3 },
  { name: "Bootstrap", level: "Intermediate", score: 3 },
  { name: "React", level: "Basic", score: 2 },
];