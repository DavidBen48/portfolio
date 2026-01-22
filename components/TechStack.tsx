import React from 'react';
import { SKILLS } from '../constants';

const TechStack: React.FC = () => {
  const intermediateSkills = SKILLS.filter(s => s.level === 'Intermediate');
  const basicSkills = SKILLS.filter(s => s.level === 'Basic');

  return (
    <section id="stack" className="py-24 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Tech Stack</h2>
          <span className="hidden md:block h-px flex-1 bg-gray-800 ml-8"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Intermediate Column */}
          <div>
            <h3 className="text-accent font-mono text-sm tracking-widest mb-6 uppercase border-b border-accent/20 pb-2 inline-block">
              // Intermediate Level
            </h3>
            <div className="space-y-4">
              {intermediateSkills.map((skill) => (
                <div key={skill.name} className="group flex items-center justify-between p-4 bg-black border border-gray-800 hover:border-accent/50 transition-all duration-300">
                  <span className="text-gray-300 font-mono group-hover:text-white">{skill.name}</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-1.5 h-4 bg-accent/80"></div>
                    ))}
                    <div className="w-1.5 h-4 bg-gray-800"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Basic Column */}
          <div>
            <h3 className="text-gray-500 font-mono text-sm tracking-widest mb-6 uppercase border-b border-gray-700 pb-2 inline-block">
              // Basic Level
            </h3>
            <div className="space-y-4">
              {basicSkills.map((skill) => (
                <div key={skill.name} className="group flex items-center justify-between p-4 bg-black border border-gray-900 hover:border-gray-700 transition-all duration-300">
                  <span className="text-gray-400 font-mono group-hover:text-gray-300">{skill.name}</span>
                  <div className="flex gap-1">
                    {[1, 2].map((i) => (
                      <div key={i} className="w-1.5 h-4 bg-gray-600"></div>
                    ))}
                    <div className="w-1.5 h-4 bg-gray-800"></div>
                    <div className="w-1.5 h-4 bg-gray-800"></div>
                    <div className="w-1.5 h-4 bg-gray-800"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
