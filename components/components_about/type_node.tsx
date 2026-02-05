
import React from 'react';

const TypeNode: React.FC = () => {
  return (
    <>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">1</span>
        <span className="table-cell">
          <span className="text-gray-500">// Inicializando servidor de Perfil</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">2</span>
        <span className="table-cell">
          <span className="text-purple-400">const</span> <span className="text-sky-300">express</span> <span className="text-white">=</span> <span className="text-yellow-300">require</span><span className="text-white">(</span><span className="text-orange-300">'express'</span><span className="text-white">);</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">3</span>
        <span className="table-cell">
          <span className="text-purple-400">const</span> <span className="text-sky-300">app</span> <span className="text-white">=</span> <span className="text-yellow-300">express</span><span className="text-white">();</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">4</span>
        <span className="table-cell"></span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">5</span>
        <span className="table-cell">
          <span className="text-purple-400">const</span> <span className="text-sky-300">dev</span> <span className="text-white">=</span> <span className="text-yellow-400">{'{'}</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">6</span>
        <span className="table-cell pl-4">
           <span className="text-sky-300">nome</span><span className="text-white">:</span> <span className="text-orange-300">"David Ben"</span><span className="text-white">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">7</span>
        <span className="table-cell pl-4">
           <span className="text-sky-300">stack</span><span className="text-white">:</span> <span className="text-yellow-400">[</span><span className="text-orange-300">"NodeJS"</span><span className="text-white">, </span><span className="text-orange-300">"Express"</span><span className="text-white">, </span><span className="text-orange-300">"Jest"</span><span className="text-yellow-400">]</span><span className="text-white">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">8</span>
        <span className="table-cell pl-4">
           <span className="text-sky-300">status</span><span className="text-white">:</span> <span className="text-orange-300">"Online"</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">9</span>
        <span className="table-cell">
          <span className="text-yellow-400">{'}'}</span><span className="text-white">;</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">10</span>
        <span className="table-cell"></span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">11</span>
        <span className="table-cell">
          <span className="text-sky-300">app</span><span className="text-white">.</span><span className="text-yellow-300">get</span><span className="text-white">(</span><span className="text-orange-300">'/sobre'</span><span className="text-white">, (</span><span className="text-sky-300">req</span><span className="text-white">, </span><span className="text-sky-300">res</span><span className="text-white">) </span><span className="text-purple-400">=&gt;</span> <span className="text-yellow-400">{'{'}</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">12</span>
        <span className="table-cell pl-4">
          <span className="text-gray-500">// Retornando dados em JSON</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">13</span>
        <span className="table-cell pl-4">
          <span className="text-sky-300">res</span><span className="text-white">.</span><span className="text-yellow-300">status</span><span className="text-white">(</span><span className="text-purple-400">200</span><span className="text-white">).</span><span className="text-yellow-300">json</span><span className="text-white">(</span><span className="text-sky-300">dev</span><span className="text-white">);</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">14</span>
        <span className="table-cell">
          <span className="text-yellow-400">{'}'}</span><span className="text-white">);</span>
        </span>
      </div>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">15</span>
        <span className="table-cell"></span>
      </div>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">16</span>
        <span className="table-cell">
          <span className="text-sky-300">app</span><span className="text-white">.</span><span className="text-yellow-300">listen</span><span className="text-white">(</span><span className="text-purple-400">3000</span><span className="text-white">, () </span><span className="text-purple-400">=&gt;</span> <span className="text-yellow-400">{'{'}</span>
        </span>
      </div>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">17</span>
        <span className="table-cell pl-4">
          <span className="text-sky-300">console</span><span className="text-white">.</span><span className="text-yellow-300">log</span><span className="text-white">(</span><span className="text-orange-300">"Server running on port 3000 🚀"</span><span className="text-white">);</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">18</span>
        <span className="table-cell">
          <span className="text-yellow-400">{'}'}</span><span className="text-white">);</span>
        </span>
      </div>
    </>
  );
};

export default TypeNode;
