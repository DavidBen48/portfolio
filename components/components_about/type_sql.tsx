import React from 'react';

const TypeSQL: React.FC = () => {
  return (
    <>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">1</span>
        <span className="table-cell">
          <span className="text-gray-500">-- Inserindo perfil com JSONB (Postgres)</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">2</span>
        <span className="table-cell">
          <span className="text-purple-400">INSERT INTO</span> <span className="text-yellow-300">desenvolvedores</span> <span className="text-white">(</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">3</span>
        <span className="table-cell pl-4">
           <span className="text-white">nome, foco, especialidade, dados_extras</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">4</span>
        <span className="table-cell">
           <span className="text-white">) </span><span className="text-purple-400">VALUES</span> <span className="text-white">(</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">5</span>
        <span className="table-cell pl-4">
          <span className="text-orange-300">'David Ben'</span><span className="text-white">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">6</span>
        <span className="table-cell pl-4">
          <span className="text-orange-300">'Engenharia Backend'</span><span className="text-white">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">7</span>
        <span className="table-cell pl-4">
          <span className="text-orange-300">'Desenvolvimento Web com IA'</span><span className="text-white">,</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">8</span>
        <span className="table-cell pl-4">
           <span className="text-orange-300">'{'{'}</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">9</span>
        <span className="table-cell pl-8">
           <span className="text-orange-300">"educacao": {'{'} "curso": "Ciência da Computação", "fim": 2029 {'}'},</span>
        </span>
      </div>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">10</span>
        <span className="table-cell pl-8">
           <span className="text-orange-300">"hobbies": ["Música", "Código", "Futebol", "Ciência"]</span>
        </span>
      </div>
      <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">11</span>
        <span className="table-cell pl-4">
           <span className="text-orange-300">{'}'}'::jsonb</span>
        </span>
      </div>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">12</span>
        <span className="table-cell">
           <span className="text-white">);</span>
        </span>
      </div>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">13</span>
        <span className="table-cell"></span>
      </div>
       <div className="table-row">
        <span className="table-cell select-none text-gray-700 w-8 text-right pr-4">14</span>
        <span className="table-cell">
           <span className="text-gray-500">-- 1 linha afetada (sucesso)</span>
        </span>
      </div>
    </>
  );
};

export default TypeSQL;
