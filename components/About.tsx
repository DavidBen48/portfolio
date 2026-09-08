
import React, { useState } from 'react';
import { CodeTab } from '../types';
import TypePython from './components_about/type_python';
import TypeGo from './components_about/type_go';
import TypeSQL from './components_about/type_sql';
import TypeJSON from './components_about/type_json';
import TypeLinux from './components_about/type_linux';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CodeTab>('Python');

  const renderCodeContent = () => {
    switch (activeTab) {
      case 'Python':
        return <TypePython />;
      case 'Golang':
        return <TypeGo />;
      case 'SQL':
        return <TypeSQL />;
      case 'JSON':
        return <TypeJSON />;
      case 'Linux':
        return <TypeLinux />;
      default:
        return null;
    }
  };

  const tabs: CodeTab[] = ['Python', 'Golang', 'SQL', 'JSON', 'Linux'];

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
              
              <div className="pl-6 border-l border-gray-800 ml-3 space-y-5">
                <p className="text-gray-300 leading-relaxed text-base">
                  Estudo <span className="text-white font-medium">Segurança Cibernética na IPOG</span> (previsão 06/26 – 12/28), aprofundando práticas defensivas, gestão de vulnerabilidades e conformidade de ambientes críticos.
                </p>
                <p className="text-gray-300 leading-relaxed text-base">
                  Atualmente atuo como <span className="text-accent font-medium">Analista de TI e N1 </span> em Datacenter na empresa <span className="text-accent font-medium">OTG</span>. Opero diretamente no coração da infraestrutura com equipamentos de <span className="text-white">servidores, switches, storages, blade e enclosure</span>.
                </p>
                <p className="text-gray-400 leading-relaxed text-sm bg-black/40 border border-gray-800/80 p-3.5 rounded-sm">
                  <span className="text-accent font-bold">// Escopo Operacional OTG:</span> Executo desde rotinas operacionais como substituição de fontes e discos em <span className="text-gray-200">hot-swap</span>, até análises técnicas on-site, atualizações de firmware, troca de <span className="text-gray-200">systemboard</span> e resolução de incidentes críticos em alinhamento direto com o time N2.
                </p>
                <p className="text-gray-300 leading-relaxed text-base">
                  Estou estudando e me preparando para atuar como <span className="text-accent font-medium">DevSecOps</span>, <span className="text-accent font-medium">Red/Blue Team</span>, ou áreas relacionadas, unindo cultura de segurança, infraestrutura como código e automação com foco em <span className="text-white">Python, Golang, MySQL, JSON e Linux</span>.
                </p>
              </div>

              <span className="text-yellow-500 text-3xl font-bold block mt-2">{'}'}</span>
            </div>

            <div className="mt-8 flex gap-3 text-gray-500 text-base leading-relaxed">
              <span className="text-accent font-bold select-none">//</span>
              <p className="text-gray-400 text-sm">
                Conectando a robustez do hardware de datacenter com o rigor da segurança cibernética e a agilidade da automação.
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
                <div className="text-xs text-gray-500 font-mono">david-datacenter-node</div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-800 bg-[#111] overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-xs font-mono transition-colors whitespace-nowrap ${
                      activeTab === tab 
                        ? 'bg-black text-accent border-t-2 border-accent font-bold' 
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Code Area */}
              <div className="p-6 overflow-x-auto min-h-[360px]">
                <pre className="font-mono text-xs md:text-sm leading-6">
                  <code className="block w-full">
                    {renderCodeContent()}
                  </code>
                </pre>
              </div>
            </div>
            <div className="mt-2 text-right">
              <span className="text-xs text-gray-600 font-mono">Clique nas abas para inspecionar os perfis</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
