import React from 'react';

const TypeGo: React.FC = () => {
  return (
    <>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">1</span>
        <span className="table-cell">
          <span className="text-gray-500">// Structs para tipagem forte</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">2</span>
        <span className="table-cell">
          <span className="text-cyan-400">type</span> <span className="text-yellow-300">Educacao</span> <span className="text-cyan-400">struct</span> <span className="text-white">{'{'}</span> <span className="text-white">Curso, Status</span> <span className="text-green-400">string</span><span className="text-white">; Ano</span> <span className="text-green-400">int</span> <span className="text-white">{'}'}</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">3</span>
        <span className="table-cell">
          <span className="text-cyan-400">type</span> <span className="text-yellow-300">Dev</span> <span className="text-cyan-400">struct</span> <span className="text-white">{'{'}</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">4</span>
        <span className="table-cell pl-4">
           <span className="text-white">Nome, Foco, Spec</span> <span className="text-green-400">string</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">5</span>
        <span className="table-cell pl-4">
           <span className="text-white">Formacao</span> <span className="text-yellow-300">Educacao</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">6</span>
        <span className="table-cell pl-4">
           <span className="text-white">Hobbies</span> <span className="text-green-400">[]string</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">7</span>
        <span className="table-cell">
          <span className="text-white">{'}'}</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">8</span>
        <span className="table-cell"></span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">9</span>
        <span className="table-cell">
          <span className="text-cyan-400">func</span> <span className="text-yellow-300">main</span><span className="text-white">() {'{'}</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">10</span>
        <span className="table-cell pl-4">
          <span className="text-white">eu := </span><span className="text-yellow-300">Dev</span><span className="text-white">{'{'}</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">11</span>
        <span className="table-cell pl-8">
          <span className="text-white">Nome:</span> <span className="text-orange-300">"David Ben"</span><span className="text-white">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">12</span>
        <span className="table-cell pl-8">
          <span className="text-white">Foco:</span> <span className="text-orange-300">"Engenharia Backend"</span><span className="text-white">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">13</span>
        <span className="table-cell pl-8">
          <span className="text-white">Spec:</span> <span className="text-orange-300">"Backend & Data"</span><span className="text-white">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">14</span>
        <span className="table-cell pl-8">
          <span className="text-white">Formacao:</span> <span className="text-yellow-300">Educacao</span><span className="text-white">{'{'}</span><span className="text-orange-300">"CompSci"</span><span className="text-white">, </span><span className="text-orange-300">"Em curso"</span><span className="text-white">, </span><span className="text-purple-400">2029</span><span className="text-white">{'}'},</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">15</span>
        <span className="table-cell pl-8">
          <span className="text-white">Hobbies:</span> <span className="text-green-400">[]string</span><span className="text-white">{'{'}</span><span className="text-orange-300">"Música"</span><span className="text-white">, </span><span className="text-orange-300">"Código"</span><span className="text-white">, </span><span className="text-orange-300">"..."</span><span className="text-white">{'}'},</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">16</span>
        <span className="table-cell pl-4">
          <span className="text-white">{'}'}</span>
        </span>
      </div>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">17</span>
        <span className="table-cell pl-4">
          <span className="text-white">fmt.Printf(</span><span className="text-orange-300">"%+v"</span><span className="text-white">, eu)</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">18</span>
        <span className="table-cell">
          <span className="text-white">{'}'}</span>
        </span>
      </div>
    </>
  );
};

export default TypeGo;