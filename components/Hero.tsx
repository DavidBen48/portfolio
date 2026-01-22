import React from 'react';
import { Terminal } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Matrix/CMD Effect - Static CSS grid defined in index.html serves as parallax base */}
      <div className="parallax-bg absolute inset-0 z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center md:text-left w-full">
        <div className="animate-fade-in space-y-6">
          <p className="text-accent text-sm md:text-base tracking-widest mb-4">
            hello world, i am
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-tight">
            <span className="text-accent">{'{D}'}</span>AVID <span className="text-accent">{'{B}'}</span>EN
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-400 font-light mt-2">
            Computer Science - Backend Engineer
          </h2>

          <p className="max-w-2xl text-gray-500 mt-6 leading-relaxed border-l-2 border-accent/50 pl-4 md:ml-0 mx-auto text-left">
            "Architecting scalable systems and efficient software solutions through code and logic."
          </p>

          <div className="flex flex-col md:flex-row gap-6 mt-12 items-start md:items-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold flex items-center gap-2 group"
            >
              <Terminal size={16} className="group-hover:animate-pulse" />
              [VER PROJETOS]
            </button>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 border border-transparent text-gray-400 hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-semibold hover:border-gray-700"
            >
              [SOBRE MIM]
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="text-accent text-xs tracking-[0.3em] uppercase">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
