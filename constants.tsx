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

export const SKILLS: Skill[] = [
  { name: "Golang", level: "Intermediate" },
  { name: "NodeJS", level: "Intermediate" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "NestJS", level: "Intermediate" },
  { name: "JSON", level: "Intermediate" },
  { name: "Postgres", level: "Basic" },
  { name: "MongoDB", level: "Basic" },
  { name: "Docker", level: "Basic" },
];
