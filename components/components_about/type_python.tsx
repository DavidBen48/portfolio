import React from 'react';

const TypePython: React.FC = () => {
  return (
    <>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">1</span>
        <span className="table-cell">
          <span className="text-gray-500"># Automação e Telemetria de Datacenter & CyberSec</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">2</span>
        <span className="table-cell">
          <span className="text-purple-400">from</span> <span className="text-blue-300">dataclasses</span> <span className="text-purple-400">import</span> <span className="text-yellow-300">dataclass</span><span className="text-gray-400">,</span> <span className="text-yellow-300">field</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">3</span>
        <span className="table-cell">
          <span className="text-purple-400">from</span> <span className="text-blue-300">typing</span> <span className="text-purple-400">import</span> <span className="text-yellow-300">List</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">4</span>
        <span className="table-cell"></span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">5</span>
        <span className="table-cell">
          <span className="text-yellow-400">@dataclass</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">6</span>
        <span className="table-cell">
          <span className="text-purple-400">class</span> <span className="text-yellow-300">DevSecOpsProfile</span><span className="text-gray-400">:</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">7</span>
        <span className="table-cell pl-4">
          <span className="text-sky-300">nome</span><span className="text-gray-400">:</span> <span className="text-blue-300">str</span> <span className="text-gray-400">=</span> <span className="text-orange-300">"David Ben"</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">8</span>
        <span className="table-cell pl-4">
          <span className="text-sky-300">cargo_atual</span><span className="text-gray-400">:</span> <span className="text-blue-300">str</span> <span className="text-gray-400">=</span> <span className="text-orange-300">"Analista de TI & Datacenter N1 | DevSecOps"</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">9</span>
        <span className="table-cell pl-4">
          <span className="text-sky-300">formacao</span><span className="text-gray-400">:</span> <span className="text-blue-300">str</span> <span className="text-gray-400">=</span> <span className="text-orange-300">"Segurança Cibernética - IPOG (06/26 - 12/28)"</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">10</span>
        <span className="table-cell pl-4">
          <span className="text-sky-300">especialidade</span><span className="text-gray-400">:</span> <span className="text-blue-300">str</span> <span className="text-gray-400">=</span> <span className="text-orange-300">"DevSecOps / Infraestrutura Crítica"</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">11</span>
        <span className="table-cell pl-4">
          <span className="text-sky-300">equipamentos</span><span className="text-gray-400">:</span> <span className="text-yellow-300">List</span><span className="text-gray-400">[</span><span className="text-blue-300">str</span><span className="text-gray-400">]</span> <span className="text-gray-400">=</span> <span className="text-yellow-400">[</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">12</span>
        <span className="table-cell pl-8">
          <span className="text-orange-300">"Servidores"</span><span className="text-gray-400">,</span> <span className="text-orange-300">"Switches"</span><span className="text-gray-400">,</span> <span className="text-orange-300">"Storages"</span><span className="text-gray-400">,</span> <span className="text-orange-300">"Blades"</span><span className="text-gray-400">,</span> <span className="text-orange-300">"Enclosures"</span>
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
        <span className="table-cell pl-4">
          <span className="text-sky-300">rotinas_on_site</span><span className="text-gray-400">:</span> <span className="text-yellow-300">List</span><span className="text-gray-400">[</span><span className="text-blue-300">str</span><span className="text-gray-400">]</span> <span className="text-gray-400">=</span> <span className="text-yellow-400">[</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">15</span>
        <span className="table-cell pl-8">
          <span className="text-orange-300">"Troca de discos/fontes hot-swap"</span><span className="text-gray-400">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">16</span>
        <span className="table-cell pl-8">
          <span className="text-orange-300">"Atualização de firmware & substituição de systemboard"</span><span className="text-gray-400">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">17</span>
        <span className="table-cell pl-8">
          <span className="text-orange-300">"Resolução com N2 em ambientes críticos"</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">18</span>
        <span className="table-cell pl-4">
          <span className="text-yellow-400">]</span>
        </span>
      </div>
    </>
  );
};

export default TypePython;
