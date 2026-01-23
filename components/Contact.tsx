import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission - In a real app, this would call an API
    alert('Mensagem enviada! (Simulação)');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Inicializar Protocolo de Contato</h2>
          <p className="text-gray-400 font-mono text-sm">Entre em contato para colaborações ou freelance.</p>
        </div>

        <div className="bg-dark-lighter border border-gray-800 p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            
            {/* Direct Info - Styled as JSON */}
            <div className="md:col-span-2 space-y-4 border-b md:border-b-0 md:border-r border-gray-800 pb-8 md:pb-0 md:pr-8 font-mono text-sm">
              <div className="text-yellow-500">{'{'}</div>
              
              <div className="pl-4 space-y-4">
                {/* Email */}
                <div>
                   <span className="text-sky-400">"email"</span><span className="text-gray-400">:</span> 
                   <a 
                     href="mailto:davidbensaxofonista@gmail.com" 
                     className="block text-white hover:text-accent transition-colors break-words mt-1 border-l-2 border-gray-700 pl-2"
                   >
                     "davidbensaxofonista<br/>@gmail.com"
                   </a>
                </div>

                {/* Status */}
                <div>
                  <span className="text-sky-400">"status"</span><span className="text-gray-400">:</span>
                  <span className="block text-green-400 mt-1 pl-2">
                    "Disponível"
                  </span>
                </div>

                {/* Quote */}
                <div>
                   <span className="text-sky-400">"quote"</span><span className="text-gray-400">:</span>
                   <p className="text-white mt-1 pl-2 italic leading-relaxed">
                     "Um ótimo código é apenas o pensamento tornado executável."
                   </p>
                </div>
              </div>

              <div className="text-yellow-500">{'}'}</div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-gray-400 mb-2">NOME_INPUT</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-800 text-white p-3 focus:outline-none focus:border-accent transition-colors font-mono text-sm placeholder-gray-700"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-gray-400 mb-2">EMAIL_INPUT</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-800 text-white p-3 focus:outline-none focus:border-accent transition-colors font-mono text-sm placeholder-gray-700"
                    placeholder="Digite seu email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-gray-400 mb-2">MENSAGEM_BUFFER</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-black border border-gray-800 text-white p-3 focus:outline-none focus:border-accent transition-colors font-mono text-sm placeholder-gray-700"
                    placeholder="Escreva sua mensagem..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-accent/10 border border-accent text-accent py-3 font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Transmitir</span>
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;