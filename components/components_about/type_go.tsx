import React from 'react';

const TypeGo: React.FC = () => {
  return (
    <>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">1</span>
        <span className="table-cell">
          <span className="text-gray-500">// Telemetria e automação concorrente em Golang</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">2</span>
        <span className="table-cell">
          <span className="text-cyan-400">package</span> <span className="text-white">main</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">3</span>
        <span className="table-cell"></span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">4</span>
        <span className="table-cell">
          <span className="text-cyan-400">type</span> <span className="text-yellow-300">DatacenterEngineer</span> <span className="text-cyan-400">struct</span> <span className="text-white">{'{'}</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">5</span>
        <span className="table-cell pl-4">
           <span className="text-white">Nome, Cargo, Empresa</span> <span className="text-green-400">string</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">6</span>
        <span className="table-cell pl-4">
           <span className="text-white">Graduacao</span> <span className="text-green-400">string</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">7</span>
        <span className="table-cell pl-4">
           <span className="text-white">FocoCarreira</span> <span className="text-green-400">string</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">8</span>
        <span className="table-cell pl-4">
           <span className="text-white">AtivosMonitorados</span> <span className="text-green-400">[]string</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">9</span>
        <span className="table-cell">
          <span className="text-white">{'}'}</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">10</span>
        <span className="table-cell"></span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">11</span>
        <span className="table-cell">
          <span className="text-cyan-400">func</span> <span className="text-yellow-300">main</span><span className="text-white">() {'{'}</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">12</span>
        <span className="table-cell pl-4">
          <span className="text-white">david := </span><span className="text-yellow-300">DatacenterEngineer</span><span className="text-white">{'{'}</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">13</span>
        <span className="table-cell pl-8">
          <span className="text-white">Nome:</span> <span className="text-orange-300">"David Ben"</span><span className="text-white">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">14</span>
        <span className="table-cell pl-8">
          <span className="text-white">Cargo:</span> <span className="text-orange-300">"Analista de TI & Datacenter N1 | DevSecOps"</span><span className="text-white">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">15</span>
        <span className="table-cell pl-8">
          <span className="text-white">Empresa:</span> <span className="text-orange-300">"OTG Datacenter"</span><span className="text-white">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">16</span>
        <span className="table-cell pl-8">
          <span className="text-white">Graduacao:</span> <span className="text-orange-300">"Segurança Cibernética - IPOG"</span><span className="text-white">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">17</span>
        <span className="table-cell pl-8">
          <span className="text-white">FocoCarreira:</span> <span className="text-orange-300">"DevSecOps / Infraestrutura"</span><span className="text-white">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">18</span>
        <span className="table-cell pl-8">
          <span className="text-white">AtivosMonitorados:</span> <span className="text-green-400">[]string</span><span className="text-white">{'{'}</span><span className="text-orange-300">"Servidores"</span><span className="text-white">, </span><span className="text-orange-300">"Switches"</span><span className="text-white">, </span><span className="text-orange-300">"Storages"</span><span className="text-white">, </span><span className="text-orange-300">"Blades"</span><span className="text-white">{'}'},</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">19</span>
        <span className="table-cell pl-4">
          <span className="text-white">{'}'}</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">20</span>
        <span className="table-cell pl-4">
          <span className="text-white">log.Printf(</span><span className="text-orange-300">"[NODE-OK] %+v"</span><span className="text-white">, david)</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">21</span>
        <span className="table-cell">
          <span className="text-white">{'}'}</span>
        </span>
      </div>
    </>
  );
};

export default TypeGo;