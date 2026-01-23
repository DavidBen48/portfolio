import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Database, Layers, Lock, Terminal, Box, Grid, MousePointerClick } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to translate status
  const getDisplayStatus = (status: string) => {
    switch (status) {
      case 'COMPLETED': return 'COMPLETO';
      case 'IN_PROGRESS': return 'EM_PROCESSO';
      case 'STRUCTURING': return 'ESTRUTURAÇÃO';
      default: return status;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Custom Parallax Background: Containers & Blocks Theme */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        {/* Floating Boxes representing Containers/Microservices */}
        <div 
          className="absolute top-10 right-20 text-gray-600"
          style={{ transform: `translateY(${offset * 0.1}px) rotate(15deg)` }}
        >
          <Box size={100} strokeWidth={0.5} />
        </div>
        
        <div 
          className="absolute top-1/3 left-10 text-gray-600"
          style={{ transform: `translateY(${-offset * 0.15}px) rotate(-10deg)` }}
        >
          <Box size={140} strokeWidth={0.5} />
        </div>

        <div 
          className="absolute bottom-20 right-1/4 text-gray-600"
          style={{ transform: `translateY(${offset * 0.2}px) rotate(45deg)` }}
        >
          <Box size={80} strokeWidth={1} />
        </div>

        {/* Abstract Grid Elements */}
        <div 
          className="absolute top-1/2 right-0 text-accent/20"
          style={{ transform: `translateY(${-offset * 0.05}px)` }}
        >
          <Grid size={200} strokeWidth={0.5} />
        </div>

        <div 
          className="absolute bottom-0 left-20 text-accent/20"
          style={{ transform: `translateY(${offset * 0.08}px)` }}
        >
          <Layers size={180} strokeWidth={0.5} />
        </div>
        
        {/* Dashed Lines decorative */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="10,10" className="text-gray-700" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="10,10" className="text-gray-700" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-16">
          <span className="text-accent text-sm tracking-widest mb-2 font-mono">PORTFOLIO</span>
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-accent"></span>
            <h2 className="text-4xl font-bold text-white tracking-tight">Meus Projetos</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => {
            return (
              <div 
                key={project.id}
                className="group relative border border-gray-800 bg-black/90 p-6 rounded-sm font-mono text-xs md:text-sm shadow-2xl hover:border-accent/40 hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-1 leading-relaxed break-words">
                  <span className="text-yellow-500">{'{'}</span>
                  
                  {/* ID */}
                  <div className="pl-4">
                    <span className="text-sky-400">"id"</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-purple-400">{project.id}</span>
                    <span className="text-gray-400">,</span>
                  </div>

                  {/* Title */}
                  <div className="pl-4">
                    <span className="text-sky-400">"project"</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-green-400 font-bold">"{project.title}"</span>
                    <span className="text-gray-400">,</span>
                  </div>

                  {/* Status */}
                  <div className="pl-4">
                    <span className="text-sky-400">"status"</span>
                    <span className="text-gray-400">: </span>
                    <span className={`
                      ${project.status === 'COMPLETED' ? 'text-accent' : 
                        project.status === 'IN_PROGRESS' ? 'text-yellow-400' : 'text-gray-500'}
                    `}>
                      "{getDisplayStatus(project.status)}"
                    </span>
                    <span className="text-gray-400">,</span>
                  </div>

                  {/* Stack */}
                  <div className="pl-4">
                    <span className="text-sky-400">"stack"</span>
                    <span className="text-gray-400">: [</span>
                    <div className="pl-4 flex flex-wrap gap-x-1">
                      {project.stack.map((tech, i) => (
                         <span key={i} className="whitespace-nowrap">
                            <span className="text-orange-300">"{tech}"</span>
                            {i < project.stack.length - 1 && <span className="text-gray-400">,</span>}
                         </span>
                      ))}
                    </div>
                    <span className="text-gray-400">],</span>
                  </div>

                  {/* Description */}
                  <div className="pl-4">
                    <span className="text-sky-400">"description"</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-white block pl-2 border-l border-gray-800 my-1">
                      "{project.description}"
                    </span>
                  </div>

                  {/* Links */}
                  <div className="pl-4">
                    <span className="text-sky-400">"links"</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-yellow-500">{'{'}</span>
                    
                    <div className="pl-4 flex flex-col">
                        <div className="flex items-center">
                            <span className="text-sky-400">"repo"</span>
                            <span className="text-gray-400">: </span>
                            {project.repoUrl ? (
                                <a 
                                  href={project.repoUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="group/link flex items-center gap-1 ml-1 text-blue-400 hover:text-accent font-bold cursor-pointer transition-colors border-b border-blue-400 hover:border-accent hover:bg-white/5 px-1 rounded-sm"
                                >
                                  "clique_para_ver_codigo"
                                  <ExternalLink size={10} className="inline-block group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                                </a>
                            ) : (
                                <span className="text-gray-600 ml-1">null</span>
                            )}
                            <span className="text-gray-400">,</span>
                        </div>

                        <div className="flex items-center">
                            <span className="text-sky-400">"live"</span>
                            <span className="text-gray-400">: </span>
                            {project.deployUrl ? (
                                <a 
                                  href={project.deployUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="group/link flex items-center gap-1 ml-1 text-blue-400 hover:text-accent font-bold cursor-pointer transition-colors border-b border-blue-400 hover:border-accent hover:bg-white/5 px-1 rounded-sm"
                                >
                                  "acessar_deploy"
                                  <ExternalLink size={10} className="inline-block group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                                </a>
                            ) : (
                                <span className="text-gray-600 ml-1">null</span>
                            )}
                        </div>
                    </div>

                    <span className="text-yellow-500">{'}'}</span>
                  </div>

                  <span className="text-yellow-500">{'}'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;