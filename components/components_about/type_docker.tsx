import React from 'react';

const TypeDocker: React.FC = () => {
  return (
    <>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">1</span>
        <span className="table-cell">
          <span className="text-gray-500"># Construindo a imagem do perfil</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">2</span>
        <span className="table-cell">
          <span className="text-purple-400">FROM</span> <span className="text-white">dev-base:latest</span>
        </span>
      </div>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">3</span>
        <span className="table-cell">
          <span className="text-purple-400">ENV</span> <span className="text-yellow-300">NOME</span><span className="text-white">=</span><span className="text-orange-300">"David Ben"</span>
        </span>
      </div>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">4</span>
        <span className="table-cell">
          <span className="text-purple-400">ENV</span> <span className="text-yellow-300">FOCO</span><span className="text-white">=</span><span className="text-orange-300">"Backend Engineering"</span>
        </span>
      </div>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">5</span>
        <span className="table-cell">
          <span className="text-purple-400">ENV</span> <span className="text-yellow-300">SPEC</span><span className="text-white">=</span><span className="text-orange-300">"IA & Prompts"</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">6</span>
        <span className="table-cell"></span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">7</span>
        <span className="table-cell">
          <span className="text-gray-500"># Metadados de Educação</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">8</span>
        <span className="table-cell">
          <span className="text-purple-400">LABEL</span> <span className="text-sky-300">curso</span><span className="text-white">=</span><span className="text-orange-300">"Ciência da Computação"</span> \
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">9</span>
        <span className="table-cell pl-12">
           <span className="text-sky-300">status</span><span className="text-white">=</span><span className="text-orange-300">"Em andamento"</span> \
        </span>
      </div>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">10</span>
        <span className="table-cell pl-12">
           <span className="text-sky-300">conclusao</span><span className="text-white">=</span><span className="text-orange-300">"2029"</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">11</span>
        <span className="table-cell"></span>
      </div>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">12</span>
        <span className="table-cell">
          <span className="text-purple-400">RUN</span> <span className="text-white">apk add --no-cache \</span>
        </span>
      </div>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">13</span>
        <span className="table-cell pl-8">
          <span className="text-white">musica codigo atletismo \</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">14</span>
        <span className="table-cell pl-8">
          <span className="text-white">futebol livros-cientificos</span>
        </span>
      </div>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">15</span>
        <span className="table-cell"></span>
      </div>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">16</span>
        <span className="table-cell">
          <span className="text-purple-400">CMD</span> <span className="text-white">["./david-ben", "--start-coding"]</span>
        </span>
      </div>
    </>
  );
};

export default TypeDocker;
