import React, { useEffect, useState } from 'react';
import { Terminal, ChevronDown, Server, Database, Settings, Cpu, Globe, Share2 } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark">
      {/* Backend Themed Parallax Background - Intensified */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-30">
        
        {/* Gear / Settings (Spinning Faster) */}
        <div 
          className="absolute top-[10%] right-[10%] text-gray-800"
          style={{ transform: `translateY(${offset * 0.5}px) rotate(${offset * 0.4}deg)` }}
        >
          <Settings size={200} strokeWidth={0.5} />
        </div>

        {/* Database Stack (Moving Faster Up) */}
        <div 
          className="absolute bottom-[15%] left-[5%] text-gray-800"
          style={{ transform: `translateY(${-offset * 0.4}px)` }}
        >
          <Database size={150} strokeWidth={0.5} />
        </div>

        {/* Server Icon (Moving Down Fast) */}
        <div 
          className="absolute top-[20%] left-[15%] text-gray-800"
          style={{ transform: `translateY(${offset * 0.6}px)` }}
        >
          <Server size={100} strokeWidth={0.8} />
        </div>

        {/* CPU Chip (Moving Up) */}
        <div 
          className="absolute bottom-[20%] right-[20%] text-gray-800"
          style={{ transform: `translateY(${-offset * 0.5}px)` }}
        >
          <Cpu size={120} strokeWidth={0.5} />
        </div>

        {/* Network / Nodes */}
        <div 
          className="absolute top-[40%] right-[5%] text-gray-800/50"
          style={{ transform: `translateY(${offset * 0.3}px)` }}
        >
          <Share2 size={80} strokeWidth={1} />
        </div>

        <div 
          className="absolute top-[60%] left-[10%] text-gray-800/50"
          style={{ transform: `translateY(${-offset * 0.2}px)` }}
        >
          <Globe size={90} strokeWidth={0.5} />
        </div>

        {/* Abstract Lines/Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center md:text-left w-full">
        <div className="animate-fade-in space-y-6">
          <p className="text-accent text-sm md:text-base tracking-widest mb-4">
            hello world, i am
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-tight">
            <span className="text-accent">
            {'{'}</span>D<span className="text-accent">{'}'}</span>AVID 
            <span className="text-accent">{'{'}</span>B<span className="text-accent">{'}'}</span>EN
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-400 font-light mt-2">
            Ciência da Computação - Engenheiro Backend
          </h2>

          <p className="max-w-2xl text-gray-500 mt-6 leading-relaxed border-l-2 border-accent/50 pl-4 md:ml-0 mx-auto text-left">
            "Arquitetando sistemas escaláveis e soluções de software eficientes através de código e lógica."
          </p>

          <div className="flex flex-col md:flex-row gap-6 mt-12 items-start md:items-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold flex items-center gap-2 group"
            >
              <Terminal size={16} className="group-hover:animate-pulse" />
              VER PROJETOS
            </button>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 border border-transparent text-gray-400 hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-semibold hover:border-gray-700"
            >
              SOBRE MIM
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer text-accent hover:text-white transition-colors"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;