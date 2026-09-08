import React from 'react';

const TypeSQL: React.FC = () => {
  return (
    <>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">1</span>
        <span className="table-cell">
          <span className="text-gray-500">-- Schema MySQL: Inventário de Datacenter & Gestão N1 (OTG)</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">2</span>
        <span className="table-cell">
          <span className="text-purple-400">CREATE TABLE</span> <span className="text-yellow-300">ativos_datacenter</span> <span className="text-white">(</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">3</span>
        <span className="table-cell pl-4">
           <span className="text-sky-300">id</span> <span className="text-cyan-400">INT AUTO_INCREMENT PRIMARY KEY</span><span className="text-white">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">4</span>
        <span className="table-cell pl-4">
           <span className="text-sky-300">equipamento</span> <span className="text-cyan-400">ENUM</span><span className="text-white">(</span><span className="text-orange-300">'Servidor'</span><span className="text-white">, </span><span className="text-orange-300">'Switch'</span><span className="text-white">, </span><span className="text-orange-300">'Storage'</span><span className="text-white">, </span><span className="text-orange-300">'Blade'</span><span className="text-white">, </span><span className="text-orange-300">'Enclosure'</span><span className="text-white">),</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">5</span>
        <span className="table-cell pl-4">
           <span className="text-sky-300">status</span> <span className="text-cyan-400">ENUM</span><span className="text-white">(</span><span className="text-orange-300">'Operacional'</span><span className="text-white">, </span><span className="text-orange-300">'Hot-Swap'</span><span className="text-white">, </span><span className="text-orange-300">'Escalonado_N2'</span><span className="text-white">),</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">6</span>
        <span className="table-cell pl-4">
           <span className="text-sky-300">analista_n1</span> <span className="text-cyan-400">VARCHAR</span><span className="text-white">(100) </span><span className="text-purple-400">DEFAULT</span> <span className="text-orange-300">'David Ben'</span><span className="text-white">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">7</span>
        <span className="table-cell pl-4">
           <span className="text-sky-300">firmware_ver</span> <span className="text-cyan-400">VARCHAR</span><span className="text-white">(50) </span><span className="text-purple-400">NOT NULL</span><span className="text-white">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">8</span>
        <span className="table-cell pl-4">
           <span className="text-sky-300">inspecao_em</span> <span className="text-cyan-400">TIMESTAMP DEFAULT CURRENT_TIMESTAMP</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">9</span>
        <span className="table-cell">
           <span className="text-white">);</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">10</span>
        <span className="table-cell"></span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">11</span>
        <span className="table-cell">
           <span className="text-purple-400">INSERT INTO</span> <span className="text-yellow-300">ativos_datacenter</span> <span className="text-white">(equipamento, status, firmware_ver)</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">12</span>
        <span className="table-cell pl-4">
           <span className="text-purple-400">VALUES</span> <span className="text-white">(</span><span className="text-orange-300">'Blade Enclosure'</span><span className="text-white">, </span><span className="text-orange-300">'Operacional'</span><span className="text-white">, </span><span className="text-orange-300">'v3.21.0-hardened'</span><span className="text-white">);</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">13</span>
        <span className="table-cell"></span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">14</span>
        <span className="table-cell">
           <span className="text-gray-500">-- Query executada: 1 row affected (0.002 sec)</span>
        </span>
      </div>
    </>
  );
};

export default TypeSQL;