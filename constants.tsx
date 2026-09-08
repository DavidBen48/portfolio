
import { Project, Skill, SkillGroup } from './types';

export const PROJECTS: Project[] = [
  // --- Python ---
  {
    id: 1,
    title: "Monitor de Saúde de Servidores",
    description: "Monitor de telemetria e métricas de servidores locais e remotos, coletando uso de CPU, memória, disco e rede com persistência em JSON e logs estruturados.",
    stack: ["Python", "psutil", "JSON", "argparse", "logging"],
    status: "COMPLETED",
    category: "Python"
  },

  // --- Golang ---
  {
    id: 2,
    title: "API de Monitoramento de Infraestrutura",
    description: "API RESTful resiliente para coleta e consulta de telemetria de nós e serviços, com middlewares de autenticação, logging estruturado e suporte a contêineres.",
    stack: ["Go", "Gin", "REST API", "JSON", "PostgreSQL/MySQL", "Docker", "Docker Compose", "logging", "middleware"],
    status: "COMPLETED",
    category: "Golang"
  },
  {
    id: 3,
    title: "Log Analyzer em Go",
    description: "Ferramenta CLI de alta velocidade para parsing concorrente de arquivos massivos de logs (syslog, web servers e firewalls) com identificação de anomalias.",
    stack: ["Go", "Concurrency", "Regex", "CLI", "Log Parsing"],
    status: "IN_PROGRESS",
    category: "Golang"
  },

  // --- MySQL && JSON ---
  {
    id: 4,
    title: "Sistema de Inventário de Datacenter",
    description: "Banco relacional modelado para catalogação física e lógica de ativos críticos de datacenter: servidores, blades, enclosures, storages e switches.",
    stack: ["MySQL", "Modelagem", "Relacionamentos", "JOINs", "Índices", "Constraints", "Views", "Procedures"],
    status: "COMPLETED",
    category: "MySQL && JSON"
  },
  {
    id: 5,
    title: "Configuration Manager",
    description: "Gerenciador e orquestrador de arquivos de configuração para servidores e equipamentos de rede, com validação de schemas JSON e automação operacional.",
    stack: ["Python", "JSON", "Automation", "SysAdmin"],
    status: "IN_PROGRESS",
    category: "MySQL && JSON"
  },
  {
    id: 6,
    title: "API JSON Data Processor",
    description: "Serviço de ingestão, sanitização e processamento em lote de payloads JSON de telemetria de rede e infraestrutura para inserção em bancos relacionais.",
    stack: ["JSON", "MySQL", "REST API", "Data Processing", "ETL"],
    status: "IN_PROGRESS",
    category: "MySQL && JSON"
  },

  // --- Network ---
  {
    id: 7,
    title: "Rede Empresarial Segmentada",
    description: "Arquitetura e simulação de topologia corporativa com divisão por VLANs, roteamento inter-VLAN, listas de controle de acesso (ACLs) e isolamento de tráfego sensível.",
    stack: ["Cisco Packet Tracer", "VLANs", "ACLs", "Inter-VLAN", "Switching", "Security"],
    status: "COMPLETED",
    category: "Network"
  },
  {
    id: 8,
    title: "Rede Corporativa Multi-Site",
    description: "Interligação de redes distribuídas (matriz e filiais) através de túneis VPN IPSec, roteamento dinâmico redundante (OSPF/BGP) e políticas de firewall de borda.",
    stack: ["Networking", "VPN IPSec", "Routing (OSPF/BGP)", "Firewall", "High Availability"],
    status: "IN_PROGRESS",
    category: "Network"
  },

  // --- Backend Developer ---
  {
    id: 9,
    title: "IT Asset Management API",
    description: "API de ciclo de vida completo para gestão de ativos de TI: histórico de intervenções on-site, chamados críticos, substituição de peças e monitoramento de garantia.",
    stack: ["Backend", "REST API", "Python / Go", "MySQL", "Hardware Lifecycle"],
    status: "IN_PROGRESS",
    category: "Backend Developer"
  },

  // --- Freelancer (fullstack ai-powered) ---
  {
    id: 10,
    title: "Frei APP - Controle de Membros",
    description: "Controle e gestão de membros de uma instituição religiosa com autenticação restrita, relatórios em PDF, integração ViaCEP, Recharts e banco em nuvem.",
    stack: [
      "React 19",
      "TypeScript",
      "Vite 6",
      "Tailwind CSS v4",
      "Recharts",
      "Node.js",
      "Express 4.x",
      "Proxy Reverso Vite",
      "Cloud Database",
      "jsPDF",
      "ViaCEP API"
    ],
    status: "COMPLETED",
    repoUrl: "https://github.com/DavidBen48/adepa-freifabiano",
    deployUrl: "https://adepa-freifabiano.vercel.app/",
    category: "Freelancer (fullstack ai-powered)"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend Ecosystem AI",
    skills: [
      { name: "React", score: 5 },
      { name: "TailwindCSS", score: 4 },
    ]
  },
  {
    title: "Backend Engineering",
    skills: [
      { name: "Python", score: 5 },
      { name: "Golang", score: 3 },
      { name: "NestJS + Types", score: 3 },
      { name: "NodeJS", score: 3 },
      { name: "Docker", score: 4 },
      { name: "Bruno & Insomnia", score: 4 },
    ]
  },
  {
    title: "Networking",
    skills: [
      { name: "Linux", score: 3 },
      { name: "Cisco Packet Tracer", score: 4 },
      { name: "IP, Gateway & DNS", score: 3 },
    ]
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MySQL", score: 5 },
      { name: "PostgreSQL", score: 4 },
      { name: "Firebase", score: 3 },
      { name: "MongoDB", score: 3 },
      { name: "Google Cloud", score: 4 },
    ]
  },
  {
    title: "AI Workflow",
    skills: [
      { name: "AI Studio", score: 5 },
      { name: "Google Antigravity", score: 4 },
      { name: "Cursor", score: 4 },
    ]
  }
];

// Mantido para retrocompatibilidade se algum componente importar diretamente SKILLS
export const SKILLS: Skill[] = SKILL_GROUPS.flatMap(group => group.skills);

