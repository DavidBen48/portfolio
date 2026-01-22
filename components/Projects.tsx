import React from 'react';
import { ExternalLink, Github, Database, Layers, Lock, Terminal } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="parallax-bg absolute inset-0 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-16">
          <span className="text-accent text-sm tracking-widest mb-2 font-mono">PORTFOLIO</span>
          <h2 className="text-4xl font-bold text-white tracking-tight">Meus Projetos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => {
            const isCompleted = project.status === 'COMPLETED';
            const isInProgress = project.status === 'IN_PROGRESS';
            
            return (
              <div 
                key={project.id}
                className={`
                  group relative border bg-black p-8 transition-all duration-500 ease-out
                  hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/5 hover:z-10
                  ${isCompleted ? 'border-gray-800 hover:border-accent' : ''}
                  ${isInProgress ? 'border-gray-800 border-dashed' : ''}
                  ${project.status === 'STRUCTURING' ? 'border-gray-900 opacity-70 hover:opacity-100' : ''}
                `}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`
                    text-[10px] px-2 py-1 uppercase tracking-widest font-bold border
                    ${isCompleted ? 'text-accent border-accent bg-accent/10' : ''}
                    ${isInProgress ? 'text-yellow-500 border-yellow-500 bg-yellow-500/10' : ''}
                    ${project.status === 'STRUCTURING' ? 'text-gray-500 border-gray-500' : ''}
                  `}>
                    {project.status === 'IN_PROGRESS' ? 'Em Andamento' : 
                     project.status === 'STRUCTURING' ? 'Estruturação' : 'Concluído'}
                  </span>
                </div>

                {/* Icon based on project type (approximated) */}
                <div className="mb-6 text-gray-400 group-hover:text-white transition-colors">
                  {project.title.includes('API') ? <Database size={32} /> : 
                   project.title.includes('CLI') ? <Terminal size={32} /> : 
                   project.title.includes('Pedidos') ? <Layers size={32} /> : 
                   <Lock size={32} />}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-6 leading-relaxed h-20 overflow-hidden">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs text-gray-500 font-mono">
                      #{tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto">
                  {isCompleted && project.repoUrl ? (
                    <a 
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white border-b border-accent pb-1 hover:text-accent transition-colors"
                    >
                      <Github size={14} /> [Code]
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-sm text-gray-600 cursor-not-allowed">
                      <Github size={14} /> [Private/WIP]
                    </span>
                  )}
                  
                  {isCompleted && project.deployUrl && (
                    <a 
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white border-b border-accent pb-1 hover:text-accent transition-colors"
                    >
                      <ExternalLink size={14} /> [Deploy]
                    </a>
                  )}
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