
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

export type ProjectCategory = 
  | 'Python'
  | 'Golang'
  | 'MySQL && JSON'
  | 'Network'
  | 'Backend Developer'
  | 'Freelancer (fullstack ai-powered)';

export interface Skill {
  name: string;
  score: number; // 1 a 5
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export type CodeTab = 'Python' | 'Golang' | 'SQL' | 'JSON' | 'Linux';

