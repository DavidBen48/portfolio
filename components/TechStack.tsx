import React, { useEffect, useState } from 'react';
import { SKILL_GROUPS } from '../constants';
import { Shield, Server } from 'lucide-react';

const TechStack: React.FC = () => {
  const [offset, setOffset] = useState(0);

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

  return (
    <section id="stack" className="py-24 bg-dark-lighter relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 select-none overflow-hidden font-mono">
        <div 
          className="absolute top-0 right-[5%] text-accent text-6xl font-bold opacity-20"
          style={{ transform: `translateY(${offset * 0.2}px)` }}
        >
          01101
        </div>
        <div 
          className="absolute top-[40%] left-[2%] text-white text-4xl opacity-10"
          style={{ transform: `translateY(${-offset * 0.1}px)` }}
        >
          10110
        </div>
        <div 
          className="absolute top-[20%] left-[15%] text-gray-600"
          style={{ transform: `translateY(${offset * 0.15}px) rotate(-15deg)` }}
        >
          <Server size={120} />
        </div>
        <div 
          className="absolute bottom-[10%] right-[15%] text-gray-600"
          style={{ transform: `translateY(${-offset * 0.2}px) rotate(20deg)` }}
        >
          <Shield size={110} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-accent"></span>
            <h2 className="text-4xl font-bold text-white tracking-tight">Tech Stack & Infra</h2>
          </div>
          <span className="hidden md:block h-px flex-1 bg-gray-800 ml-8"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="space-y-4">
              <div className="mb-4 border-b border-gray-800 pb-2 flex items-center justify-between">
                <span className="text-accent text-sm font-mono tracking-widest uppercase flex items-center gap-2 font-bold">
                  <span className="text-gray-600">//</span> {group.title}
                </span>
                <span className="text-[11px] font-mono text-gray-500">
                  {group.skills.length} competências
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {group.skills.map((skill) => (
                  <div 
                    key={`${group.title}-${skill.name}`} 
                    className="flex items-center justify-between p-3.5 bg-black/60 border border-gray-900 hover:border-accent/40 transition-all duration-300 group shadow-lg"
                  >
                    <span className="text-gray-300 font-mono text-xs md:text-sm font-medium group-hover:text-white tracking-tight">
                      {skill.name}
                    </span>
                    {renderSkillBar(skill.score)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;