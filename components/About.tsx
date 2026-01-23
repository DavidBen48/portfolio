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
                <span className="text-purple-400">const</span> <span className="text-blue-300">perfil</span><span className="text-gray-400">:</span> <span className="text-yellow-300">Desenvolvedor</span> <span className="text-gray-400">=</span> <span className="text-yellow-400">{'{'}</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">2</span>
              <span className="table-cell pl-4">
                <span className="text-sky-300">nome</span><span className="text-gray-400">:</span> <span className="text-orange-300">"David Ben"</span><span className="text-gray-400">,</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">3</span>
              <span className="table-cell pl-4">
                <span className="text-sky-300">educacao</span><span className="text-gray-400">:</span> <span className="text-yellow-400">{'{'}</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">4</span>
              <span className="table-cell pl-8">
                <span className="text-sky-300">curso</span><span className="text-gray-400">:</span> <span className="text-orange-300">"Ciência da Computação"</span><span className="text-gray-400">,</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">5</span>
              <span className="table-cell pl-8">
                <span className="text-sky-300">status</span><span className="text-gray-400">:</span> <span className="text-orange-300">"Em andamento"</span><span className="text-gray-400">,</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">6</span>
              <span className="table-cell pl-8">
                <span className="text-sky-300">conclusao</span><span className="text-gray-400">:</span> <span className="text-purple-400">2029</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">7</span>
              <span className="table-cell pl-4">
                <span className="text-yellow-400">{'}'}</span><span className="text-gray-400">,</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">8</span>
              <span className="table-cell pl-4">
                <span className="text-sky-300">foco</span><span className="text-gray-400">:</span> <span className="text-orange-300">"Engenharia Backend"</span><span className="text-gray-400">,</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">9</span>
              <span className="table-cell pl-4">
                <span className="text-sky-300">especialidade</span><span className="text-gray-400">:</span> <span className="text-orange-300">"Desenvolvimento Web com IA"</span><span className="text-gray-400">,</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">10</span>
              <span className="table-cell pl-4">
                <span className="text-sky-300">hobbies</span><span className="text-gray-400">:</span> <span className="text-yellow-400">[</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">11</span>
              <span className="table-cell pl-8">
                <span className="text-orange-300">"Música"</span><span className="text-gray-400">,</span> <span className="text-orange-300">"Código"</span><span className="text-gray-400">,</span> <span className="text-orange-300">"Atletismo"</span><span className="text-gray-400">,</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">12</span>
              <span className="table-cell pl-8">
                <span className="text-orange-300">"Futebol"</span><span className="text-gray-400">,</span> <span className="text-orange-300">"Livros Científicos"</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">13</span>
              <span className="table-cell pl-4">
                <span className="text-yellow-400">]</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">14</span>
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
                <span className="text-cyan-400">type</span> <span className="text-yellow-300">Desenvolvedor</span> <span className="text-cyan-400">struct</span> <span className="text-white">{'{'}</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">2</span>
              <span className="table-cell pl-4">
                <span className="text-white">Nome</span> <span className="text-green-400">string</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">3</span>
              <span className="table-cell pl-4">
                <span className="text-white">Foco</span> <span className="text-green-400">string</span>
              </span>
            </div>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">4</span>
              <span className="table-cell pl-4">
                <span className="text-white">Stack</span> <span className="text-green-400">[]string</span>
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
                <span className="text-white">dev</span> <span className="text-white">:=</span> <span className="text-yellow-300">Desenvolvedor</span><span className="text-white">{'{'}</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">9</span>
              <span className="table-cell pl-8">
                <span className="text-white">Nome:</span> <span className="text-green-300">"David Ben"</span><span className="text-white">,</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">10</span>
              <span className="table-cell pl-8">
                <span className="text-white">Foco:</span> <span className="text-green-300">"Backend & IA"</span><span className="text-white">,</span>
              </span>
            </div>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">11</span>
              <span className="table-cell pl-8">
                <span className="text-white">Stack:</span> <span className="text-white">[]</span><span className="text-green-400">string</span><span className="text-white">{'{'}</span><span className="text-green-300">"Go"</span><span className="text-white">, </span><span className="text-green-300">"Node"</span><span className="text-white">, </span><span className="text-green-300">"AI"</span><span className="text-white">{'}'},</span>
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
                <span className="text-blue-400">class</span> <span className="text-yellow-300">Engenheiro</span><span className="text-white">:</span>
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
                 <span className="text-orange-400">self</span><span className="text-white">.nome</span> <span className="text-white">=</span> <span className="text-green-300">"David Ben"</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">4</span>
              <span className="table-cell pl-8">
                 <span className="text-orange-400">self</span><span className="text-white">.paixao</span> <span className="text-white">=</span> <span className="text-green-300">"Prompts & Backend"</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">5</span>
              <span className="table-cell pl-8">
                 <span className="text-orange-400">self</span><span className="text-white">.local</span> <span className="text-white">=</span> <span className="text-green-300">"Rio, Brasil"</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">6</span>
              <span className="table-cell"></span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">7</span>
              <span className="table-cell pl-4">
                 <span className="text-blue-400">def</span> <span className="text-yellow-300">construir</span><span className="text-white">(</span><span className="text-orange-400">self</span><span className="text-white">):</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">8</span>
              <span className="table-cell pl-8">
                 <span className="text-blue-400">return</span> <span className="text-green-300">"Soluções Escaláveis..."</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">9</span>
              <span className="table-cell"></span>
            </div>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">10</span>
              <span className="table-cell">
                 <span className="text-white">eu</span> <span className="text-white">=</span> <span className="text-yellow-300">Engenheiro</span><span className="text-white">()</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">11</span>
              <span className="table-cell">
                 <span className="text-yellow-300">print</span><span className="text-white">(eu.__dict__)</span>
              </span>
            </div>
          </>
        );

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
                <span className="text-green-400">david@ben:~$</span> <span className="text-white">cat carreira.txt</span>
              </span>
            </div>
             <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">5</span>
              <span className="table-cell">
                <span className="text-gray-400">{'>'} Ciência da Computação (2029)</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">6</span>
              <span className="table-cell">
                <span className="text-gray-400">{'>'} Especialista em Backend</span>
              </span>
            </div>
            <div className="table-row">
              <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">7</span>
              <span className="table-cell">
                <span className="text-gray-400">{'>'} Integrador de IA & Prompts</span>
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
                <span className="text-gray-400">  online 24h, 7 dias, focado 100%</span>
              </span>
            </div>
          </>
        );
      
      default:
        return null;
    }
  }

  return (
    <section id="about" className="py-24 bg-dark-lighter relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 font-mono">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-accent"></span>
              <h2 className="text-2xl font-bold uppercase tracking-wider text-white">Sobre Mim</h2>
            </div>
            
            <div className="relative">
              <span className="text-yellow-500 text-3xl font-bold block mb-2">{'{'}</span>
              
              <div className="pl-6 border-l border-gray-800 ml-3 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Curso <span className="text-white font-medium">Ciência da Computação</span> (formação prevista para 2029) com foco absoluto em engenharia backend e arquitetura de software.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Possuo expertise avançada em <span className="text-accent font-medium">Inteligência Artificial Generativa</span> para desenvolvimento web, dominando a criação de prompts complexos para maximizar a produtividade e qualidade do código.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                   Atuo na interseção entre código robusto e automação inteligente.
                </p>
              </div>

              <span className="text-yellow-500 text-3xl font-bold block mt-2">{'}'}</span>
            </div>

            <div className="mt-8 flex gap-3 text-gray-500 text-base leading-relaxed">
              <span className="text-gray-600 font-bold select-none">//</span>
              <p>
                Minha missão é construir sistemas que não apenas funcionem, mas que sejam inteligentes, escaláveis e resilientes.
              </p>
            </div>
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
              <div className="p-6 overflow-x-auto min-h-[350px]">
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