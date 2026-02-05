
import React, { useState } from 'react';
import { CodeTab } from '../types';
import TypeTS from './components_about/type_ts';
import TypeNode from './components_about/type_node';
import TypeGit from './components_about/type_git';
import TypeSQL from './components_about/type_sql';
import TypeDocker from './components_about/type_docker';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CodeTab>('TypeScript');

  const renderCodeContent = () => {
    switch (activeTab) {
      case 'TypeScript':
        return <TypeTS />;
      case 'NodeJS':
        return <TypeNode />;
      case 'Git':
        return <TypeGit />;
      case 'SQL':
        return <TypeSQL />;
      case 'Docker':
        return <TypeDocker />;
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
                  Curso <span className="text-white font-medium">Ciência da Computação</span> (formação prevista para 2029), consolidando a base algorítmica necessária para resolver problemas complexos de software.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Minha atuação central é como <span className="text-accent font-medium">Backend Developer</span>. Desenvolvo APIs robustas, gerencio bancos de dados relacionais e não-relacionais, e orquestro microsserviços para garantir que a infraestrutura suporte escalabilidade e segurança.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                   Tenho forte expertise em <span className="text-accent font-medium">Análise de Dados e Dashboards</span>. Utilizo Python, SQL e ferramentas de BI para construir pipelines de ETL e visualizações estratégicas, transformando dados brutos em métricas claras para tomada de decisão.
                </p>
              </div>

              <span className="text-yellow-500 text-3xl font-bold block mt-2">{'}'}</span>
            </div>

            <div className="mt-8 flex gap-3 text-gray-500 text-base leading-relaxed">
              <span className="text-gray-600 font-bold select-none">//</span>
              <p>
                Construo a lógica do sistema e traduzo dados em estratégia. Onde há código e dados, há soluções.
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
                {(['TypeScript', 'NodeJS', 'Git', 'SQL', 'Docker'] as CodeTab[]).map((tab) => (
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
