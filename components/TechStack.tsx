import React, { useEffect, useState } from 'react';
import { SKILLS } from '../constants';
import { Code, Cpu } from 'lucide-react';

const TechStack: React.FC = () => {
  const [offset, setOffset] = useState(0);

  // Adjusted Slicing including Data Skills
  const backendSkills = SKILLS.slice(0, 5);
  const infraSkills = SKILLS.slice(5, 9);
  const dataSkills = SKILLS.slice(9, 15);
  const aiSkills = SKILLS.slice(15, 19);
  const frontendSkills = SKILLS.slice(19, 23);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderSkillBar = (score: number) => {
    return (
      <div className="flex gap-1.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i} 
            className={`
              w-1.5 h-3 transition-all duration-500 rounded-sm
              ${i <= score 
                ? 'bg-accent shadow-[0_0_5px_rgba(34,197,94,0.5)]' 
                : 'bg-gray-800/30'}
            `}
          ></div>
        ))}
      </div>
    );
  };

  const renderSkillGroup = (title: string, skills: typeof SKILLS) => (
    <div className="space-y-4">
      <div className="mb-4 border-b border-gray-800 pb-2">
        <span className="text-accent text-sm font-mono tracking-widest uppercase flex items-center gap-2 font-bold">
           <span className="text-gray-600">//</span> {title}
        </span>
      </div>
      {/* Grid 2x2 for items inside the group */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center justify-between p-4 bg-black/60 border border-gray-900 hover:border-accent/40 transition-all duration-300 group shadow-lg">
            <span className="text-gray-300 font-mono text-sm font-medium group-hover:text-white tracking-tight">{skill.name}</span>
            {renderSkillBar(skill.score)}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="stack" className="py-24 bg-dark-lighter relative overflow-hidden">
      {/* Binary & Code Parallax Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 select-none overflow-hidden font-mono">
        <div 
          className="absolute top-0 right-[5%] text-accent text-6xl font-bold opacity-20"
          style={{ transform: `translateY(${offset * 0.2}px)` }}
        >
          10110
        </div>
        <div 
          className="absolute top-[40%] left-[2%] text-white text-4xl opacity-10"
          style={{ transform: `translateY(${-offset * 0.1}px)` }}
        >
          01001
        </div>
        <div 
          className="absolute top-[20%] left-[20%] text-gray-600"
          style={{ transform: `translateY(${offset * 0.15}px) rotate(-15deg)` }}
        >
          <Code size={120} />
        </div>
        <div 
          className="absolute bottom-[10%] right-[15%] text-gray-600"
          style={{ transform: `translateY(${-offset * 0.2}px) rotate(20deg)` }}
        >
          <Cpu size={100} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-accent"></span>
            <h2 className="text-4xl font-bold text-white tracking-tight">Tech Stack</h2>
          </div>
          <span className="hidden md:block h-px flex-1 bg-gray-800 ml-8"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
          {renderSkillGroup("Backend Engineering", backendSkills)}
          {renderSkillGroup("Infrastructure & Database", infraSkills)}
          {renderSkillGroup("Data Engineering & Analytics", dataSkills)}
          {renderSkillGroup("AI Workflow & Tools", aiSkills)}
          {renderSkillGroup("Frontend Ecosystem", frontendSkills)}
        </div>
      </div>
    </section>
  );
};

export default TechStack;