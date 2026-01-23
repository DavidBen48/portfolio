
export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  status: 'COMPLETED' | 'IN_PROGRESS' | 'STRUCTURING';
  repoUrl?: string;
  deployUrl?: string;
}

export interface Skill {
  name: string;
  level: 'Intermediate' | 'Basic'; // Mantido para compatibilidade, mas usaremos score visualmente
  score: number; // 1 a 4
}

export type CodeTab = 'TypeScript' | 'Golang' | 'Git' | 'SQL' | 'Docker';
