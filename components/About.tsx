import React, { useState } from 'react';
import { CodeTab } from '../types';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CodeTab>('TypeScript');

  const renderCodeContent = () => {
    switch (activeTab) {
      case 'TypeScript':
        return (
          <>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">1</span>
              <span className="table-cell">
                <span className="text-purple-400">const</span> <span className="text-blue-300">profile</span><span className="text-gray-400">:</span> <span className="text-yellow-300">Developer</span> <span className="text-gray-400">=</span> <span className="text-yellow-400">{'{'}</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">2</span>
              <span className="table-cell pl-4">
                <span className="text-sky-300">name</span><span className="text-gray-400">:</span> <span className="text-orange-300">"David Ben"</span><span className="text-gray-400">,</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">3</span>
              <span className="table-cell pl-4">
                <span className="text-sky-300">education</span><span className="text-gray-400">:</span> <span className="text-orange-300">"Computer Science"</span><span className="text-gray-400">,</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">4</span>
              <span className="table-cell pl-4">
                <span className="text-sky-300">focus</span><span className="text-gray-400">:</span> <span className="text-orange-300">"Backend Engineering"</span><span className="text-gray-400">,</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">5</span>
              <span className="table-cell pl-4">
                <span className="text-sky-300">location</span><span className="text-gray-400">:</span> <span className="text-orange-300">"Rio de Janeiro - Brazil"</span><span className="text-gray-400">,</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">6</span>
              <span className="table-cell pl-4">
                <span className="text-sky-300">hobbies</span><span className="text-gray-400">:</span> <span className="text-yellow-400">[</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">7</span>
              <span className="table-cell pl-8">
                <span className="text-orange-300">"Coding"</span><span className="text-gray-400">,</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">8</span>
              <span className="table-cell pl-8">
                <span className="text-orange-300">"AI Research"</span><span className="text-gray-400">,</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">9</span>
              <span className="table-cell pl-8">
                <span className="text-orange-300">"Coffee"</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">10</span>
              <span className="table-cell pl-4">
                <span className="text-yellow-400">]</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">11</span>
              <span className="table-cell">
                <span className="text-yellow-400">{'}'}</span><span className="text-gray-400">;</span>
              </span>
            </div>
          </>
        );

      case 'Golang':
        return (
          <>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">1</span>
              <span className="table-cell">
                <span className="text-cyan-400">type</span> <span className="text-yellow-300">Developer</span> <span className="text-cyan-400">struct</span> <span className="text-white">{'{'}</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">2</span>
              <span className="table-cell pl-4">
                <span className="text-white">Name</span> <span className="text-green-400">string</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">3</span>
              <span className="table-cell pl-4">
                <span className="text-white">Focus</span> <span className="text-green-400">string</span>
              </span>
            </div>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">4</span>
              <span className="table-cell pl-4">
                <span className="text-white">Location</span> <span className="text-green-400">string</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">5</span>
              <span className="table-cell">
                <span className="text-white">{'}'}</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">6</span>
              <span className="table-cell"></span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">7</span>
              <span className="table-cell">
                <span className="text-cyan-400">func</span> <span className="text-yellow-300">main</span><span className="text-white">()</span> <span className="text-white">{'{'}</span>
              </span>
            </div>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">8</span>
              <span className="table-cell pl-4">
                <span className="text-white">dev</span> <span className="text-white">:=</span> <span className="text-yellow-300">Developer</span><span className="text-white">{'{'}</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">9</span>
              <span className="table-cell pl-8">
                <span className="text-white">Name:</span> <span className="text-green-300">"David Ben"</span><span className="text-white">,</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">10</span>
              <span className="table-cell pl-8">
                <span className="text-white">Focus:</span> <span className="text-green-300">"Backend Eng"</span><span className="text-white">,</span>
              </span>
            </div>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">11</span>
              <span className="table-cell pl-8">
                <span className="text-white">Location:</span> <span className="text-green-300">"RJ - Brazil"</span><span className="text-white">,</span>
              </span>
            </div>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">12</span>
              <span className="table-cell pl-4">
                <span className="text-white">{'}'}</span>
              </span>
            </div>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">13</span>
              <span className="table-cell pl-4">
                <span className="text-white">fmt.Printf(</span><span className="text-green-300">"%+v"</span><span className="text-white">, dev)</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">14</span>
              <span className="table-cell">
                <span className="text-white">{'}'}</span>
              </span>
            </div>
          </>
        );
      
      case 'Python':
        return (
          <>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">1</span>
              <span className="table-cell">
                <span className="text-blue-400">class</span> <span className="text-yellow-300">Developer</span><span className="text-white">:</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">2</span>
              <span className="table-cell pl-4">
                 <span className="text-blue-400">def</span> <span className="text-yellow-300">__init__</span><span className="text-white">(</span><span className="text-orange-400">self</span><span className="text-white">):</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">3</span>
              <span className="table-cell pl-8">
                 <span className="text-orange-400">self</span><span className="text-white">.name</span> <span className="text-white">=</span> <span className="text-green-300">"David Ben"</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">4</span>
              <span className="table-cell pl-8">
                 <span className="text-orange-400">self</span><span className="text-white">.focus</span> <span className="text-white">=</span> <span className="text-green-300">"Backend"</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">5</span>
              <span className="table-cell pl-8">
                 <span className="text-orange-400">self</span><span className="text-white">.loc</span> <span className="text-white">=</span> <span className="text-green-300">"Rio, Brazil"</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">6</span>
              <span className="table-cell"></span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">7</span>
              <span className="table-cell pl-4">
                 <span className="text-blue-400">def</span> <span className="text-yellow-300">code</span><span className="text-white">(</span><span className="text-orange-400">self</span><span className="text-white">):</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">8</span>
              <span className="table-cell pl-8">
                 <span className="text-blue-400">return</span> <span className="text-green-300">"Building..."</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">9</span>
              <span className="table-cell"></span>
            </div>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">10</span>
              <span className="table-cell">
                 <span className="text-white">me</span> <span className="text-white">=</span> <span className="text-yellow-300">Developer</span><span className="text-white">()</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">11</span>
              <span className="table-cell">
                 <span className="text-yellow-300">print</span><span className="text-white">(me.__dict__)</span>
              </span>
            </div>
          </>
        )

      case 'Linux':
        return (
          <>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">1</span>
              <span className="table-cell">
                <span className="text-green-400">david@ben:~$</span> <span className="text-white">whoami</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">2</span>
              <span className="table-cell">
                <span className="text-gray-400">david_ben</span>
              </span>
            </div>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">3</span>
              <span className="table-cell"></span>
            </div>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">4</span>
              <span className="table-cell">
                <span className="text-green-400">david@ben:~$</span> <span className="text-white">cat career.txt</span>
              </span>
            </div>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">5</span>
              <span className="table-cell">
                <span className="text-gray-400">{'>'} Computer Science Student</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">6</span>
              <span className="table-cell">
                <span className="text-gray-400">{'>'} Backend Enthusiast</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">7</span>
              <span className="table-cell">
                <span className="text-gray-400">{'>'} Freelance AI Integrator</span>
              </span>
            </div>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">8</span>
              <span className="table-cell"></span>
            </div>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">9</span>
              <span className="table-cell">
                <span className="text-green-400">david@ben:~$</span> <span className="text-white">uptime</span>
              </span>
            </div>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">10</span>
              <span className="table-cell">
                <span className="text-gray-400">  up 24 hours, 7 days, 365 years</span>
              </span>
            </div>
          </>
        )
      
      default:
        return null;
    }
  }

  return (
    <section id="about" className="py-24 bg-dark-lighter relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-accent"></span>
              <h2 className="text-2xl font-bold uppercase tracking-wider text-white">Sobre Mim</h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              Faço <span className="text-white font-medium">Ciência da Computação</span> focado em desenvolvimento backend. 
              Tenho forte noção de frontend e análise de dados, atuando em projetos freelance que integram 
              IA através de engenharia de prompt avançada.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Minha paixão é construir sistemas resilientes e escaláveis, sempre buscando a melhor arquitetura para resolver problemas complexos.
            </p>
          </div>

          {/* Interactive Terminal */}
          <div className="order-1 lg:order-2">
            <div className="bg-black rounded-lg border border-gray-800 shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a] border-b border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono">david-portfolio-env</div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-800 bg-[#111]">
                {(['TypeScript', 'Golang', 'Python', 'Linux'] as CodeTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-xs font-mono transition-colors ${
                      activeTab === tab 
                        ? 'bg-black text-accent border-t-2 border-accent' 
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Code Area */}
              <div className="p-6 overflow-x-auto min-h-[300px]">
                <pre className="font-mono text-sm leading-6">
                  <code className="block w-full">
                    {renderCodeContent()}
                  </code>
                </pre>
              </div>
            </div>
            <div className="mt-2 text-right">
              <span className="text-xs text-gray-600 font-mono">Click tabs to switch context</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;