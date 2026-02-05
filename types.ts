
export interface Project {
  id: number; // Internal ID
  title: string;
  description: string;
  stack: string[];
  status: 'COMPLETED' | 'IN_PROGRESS' | 'STRUCTURING';
  repoUrl?: string;
  deployUrl?: string;
  category: ProjectCategory;
}

export type ProjectCategory = 'TypeScript & NestJS' | 'NodeJS' | 'FullStack (AI-Powered)';

export interface Skill {
  name: string;
  level: 'Intermediate' | 'Basic'; // Mantido para compatibilidade, mas usaremos score visualmente
  score: number; // 1 a 4
}

export type CodeTab = 'TypeScript' | 'NodeJS' | 'Git' | 'SQL' | 'Docker';
