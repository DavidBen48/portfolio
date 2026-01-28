import React from 'react';

const TypeTS: React.FC = () => {
  return (
    <>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">1</span>
        <span className="table-cell">
          <span className="text-gray-500">// Definindo a interface do meu perfil</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">2</span>
        <span className="table-cell">
          <span className="text-purple-400">const</span> <span className="text-blue-300">perfil</span><span className="text-gray-400">:</span> <span className="text-yellow-300">Desenvolvedor</span> <span className="text-gray-400">=</span> <span className="text-yellow-400">{'{'}</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">3</span>
        <span className="table-cell pl-4">
          <span className="text-sky-300">nome</span><span className="text-gray-400">:</span> <span className="text-orange-300">"David Ben"</span><span className="text-gray-400">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">4</span>
        <span className="table-cell pl-4">
          <span className="text-sky-300">educacao</span><span className="text-gray-400">:</span> <span className="text-yellow-400">{'{'}</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">5</span>
        <span className="table-cell pl-8">
          <span className="text-sky-300">curso</span><span className="text-gray-400">:</span> <span className="text-orange-300">"Ciência da Computação"</span><span className="text-gray-400">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">6</span>
        <span className="table-cell pl-8">
          <span className="text-sky-300">status</span><span className="text-gray-400">:</span> <span className="text-orange-300">"Em andamento"</span><span className="text-gray-400">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">7</span>
        <span className="table-cell pl-8">
          <span className="text-sky-300">conclusao</span><span className="text-gray-400">:</span> <span className="text-purple-400">2029</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">8</span>
        <span className="table-cell pl-4">
          <span className="text-yellow-400">{'}'}</span><span className="text-gray-400">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">9</span>
        <span className="table-cell pl-4">
          <span className="text-sky-300">foco</span><span className="text-gray-400">:</span> <span className="text-orange-300">"Engenharia Backend"</span><span className="text-gray-400">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">10</span>
        <span className="table-cell pl-4">
          <span className="text-sky-300">especialidade</span><span className="text-gray-400">:</span> <span className="text-orange-300">"Backend & Data Analytics"</span><span className="text-gray-400">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">11</span>
        <span className="table-cell pl-4">
          <span className="text-sky-300">hobbies</span><span className="text-gray-400">:</span> <span className="text-yellow-400">[</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">12</span>
        <span className="table-cell pl-8">
          <span className="text-orange-300">"Música"</span><span className="text-gray-400">,</span> <span className="text-orange-300">"Código"</span><span className="text-gray-400">,</span> <span className="text-orange-300">"Atletismo"</span><span className="text-gray-400">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">13</span>
        <span className="table-cell pl-8">
          <span className="text-orange-300">"Futebol"</span><span className="text-gray-400">,</span> <span className="text-orange-300">"Livros Científicos"</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">14</span>
        <span className="table-cell pl-4">
          <span className="text-yellow-400">]</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">15</span>
        <span className="table-cell">
          <span className="text-yellow-400">{'}'}</span><span className="text-gray-400">;</span>
        </span>
      </div>
    </>
  );
};

export default TypeTS;