import React, { useState } from 'react';
import { Mail, Send, ChevronRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission - In a real app, this would call an API
    alert('Message sent! (Simulation)');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Inicializar Protocolo de Contato</h2>
          <p className="text-gray-500 font-mono text-sm">Entre em contato para colaborações ou freelance.</p>
        </div>

        <div className="bg-dark-lighter border border-gray-800 p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            
            {/* Direct Info */}
            <div className="md:col-span-2 space-y-8 border-b md:border-b-0 md:border-r border-gray-800 pb-8 md:pb-0 md:pr-8">
              <div>
                <span className="text-xs font-mono text-gray-500 uppercase block mb-2">Email</span>
                <a 
                  href="mailto:davidbensaxofonista@gmail.com" 
                  className="flex items-center gap-2 text-white hover:text-accent transition-colors text-sm break-all"
                >
                  <Mail size={16} />
                  davidbensaxofonista
                  <br className="hidden md:block"/>@gmail.com
                </a>
              </div>
              
              <div>
                 <span className="text-xs font-mono text-gray-500 uppercase block mb-2">Status</span>
                 <div className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                   <span className="text-sm text-gray-300">Open to Work</span>
                 </div>
              </div>

              <div className="pt-4">
                 <p className="text-xs text-gray-600 font-mono leading-relaxed">
                   "Great code is just thought made executable."
                 </p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-gray-500 mb-2">NAME_INPUT</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-800 text-white p-3 focus:outline-none focus:border-accent transition-colors font-mono text-sm placeholder-gray-700"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-gray-500 mb-2">EMAIL_INPUT</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-800 text-white p-3 focus:outline-none focus:border-accent transition-colors font-mono text-sm placeholder-gray-700"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-gray-500 mb-2">MESSAGE_BUFFER</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-black border border-gray-800 text-white p-3 focus:outline-none focus:border-accent transition-colors font-mono text-sm placeholder-gray-700"
                    placeholder="Write your message..."
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
