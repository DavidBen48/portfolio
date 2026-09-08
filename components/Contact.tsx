import React, { useState } from 'react';
import { Send, CheckCircle2, AlertTriangle, Loader2, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [lastSent, setLastSent] = useState<{ subject: string; email: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check all fields
    if (!formState.name.trim() || !formState.email.trim() || !formState.subject.trim() || !formState.message.trim()) {
      setStatus('error');
      setErrorMessage('Todos os parâmetros (NOME, EMAIL, ASSUNTO, MENSAGEM) são obrigatórios.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/davidpessoal3008@hotmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name.trim(),
          email: formState.email.trim(),
          _subject: formState.subject.trim(),
          subject: formState.subject.trim(),
          message: formState.message.trim(),
          _replyto: formState.email.trim(),
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (response.ok) {
        setLastSent({
          subject: formState.subject.trim(),
          email: formState.email.trim()
        });
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Falha no gateway de transmissão.');
      }
    } catch (err) {
      console.error('Erro ao transmitir mensagem:', err);
      setStatus('error');
      setErrorMessage('Não foi possível enviar automaticamente pela rede. Você pode tentar novamente ou acionar o cliente de e-mail.');
    }
  };

  const handleMailtoFallback = () => {
    const subjectEncoded = encodeURIComponent(formState.subject || 'Contato via Portfólio');
    const bodyEncoded = encodeURIComponent(
      `Nome: ${formState.name}\nEmail: ${formState.email}\n\nMensagem:\n${formState.message}`
    );
    window.location.href = `mailto:davidpessoal3008@hotmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Inicializar Protocolo de Contato</h2>
          <p className="text-gray-400 font-mono text-sm">Entre em contato para colaborações, infraestrutura ou DevSecOps.</p>
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
                     href="mailto:davidpessoal3008@hotmail.com" 
                     className="block text-white hover:text-accent transition-colors break-words mt-1 border-l-2 border-gray-700 pl-2 text-xs md:text-sm"
                   >
                     "davidpessoal3008<br/>@hotmail.com"
                   </a>
                </div>

                {/* Status */}
                <div>
                  <span className="text-sky-400">"status"</span><span className="text-gray-400">:</span>
                  <span className="block text-green-400 mt-1 pl-2">
                    "Disponível"
                  </span>
                </div>

                {/* Focus */}
                <div>
                  <span className="text-sky-400">"alvo"</span><span className="text-gray-400">:</span>
                  <span className="block text-accent mt-1 pl-2 text-xs">
                    "DevSecOps / Datacenter"
                  </span>
                </div>

                {/* Quote */}
                <div>
                   <span className="text-sky-400">"message"</span><span className="text-gray-400">:</span>
                   <p className="text-white mt-1 pl-2 italic leading-relaxed text-xs">
                     "Um ótimo código é apenas o pensamento tornado executável."
                   </p>
                </div>
              </div>

              <div className="text-yellow-500">{'}'}</div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-gray-400 mb-2">
                    NOME_INPUT <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-black border border-gray-800 text-white p-3 focus:outline-none focus:border-accent transition-colors font-mono text-sm placeholder-gray-700 disabled:opacity-50"
                    placeholder="Digite seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-gray-400 mb-2">
                    EMAIL_INPUT <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-black border border-gray-800 text-white p-3 focus:outline-none focus:border-accent transition-colors font-mono text-sm placeholder-gray-700 disabled:opacity-50"
                    placeholder="seu_email@empresa.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-gray-400 mb-2">
                    ASSUNTO_BUFFER <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-black border border-gray-800 text-white p-3 focus:outline-none focus:border-accent transition-colors font-mono text-sm placeholder-gray-700 disabled:opacity-50"
                    placeholder="Ex: Proposta DevSecOps / Oportunidade Datacenter"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-gray-400 mb-2">
                    MENSAGEM_BUFFER <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    rows={4}
                    className="w-full bg-black border border-gray-800 text-white p-3 focus:outline-none focus:border-accent transition-colors font-mono text-sm placeholder-gray-700 disabled:opacity-50"
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-accent/10 border border-accent text-accent font-mono text-xs rounded-sm space-y-1 animate-fadeIn">
                    <div className="flex items-center gap-2 font-bold text-green-400">
                      <CheckCircle2 size={16} />
                      <span>[200 OK] Pacote transmitido com sucesso!</span>
                    </div>
                    <p className="text-gray-300 pl-6">
                      A mensagem foi enviada para <span className="text-accent font-semibold">davidpessoal3008@hotmail.com</span>.
                    </p>
                    {lastSent && (
                      <p className="text-gray-400 pl-6 text-[11px]">
                        Assunto registrado: &quot;{lastSent.subject}&quot;
                      </p>
                    )}
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-950/40 border border-red-500/50 text-red-300 font-mono text-xs rounded-sm space-y-2">
                    <div className="flex items-center gap-2 font-bold text-red-400">
                      <AlertTriangle size={16} />
                      <span>[ERRO DE TRANSMISSÃO]</span>
                    </div>
                    <p>{errorMessage}</p>
                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-900/40 hover:bg-red-900/70 border border-red-600 text-white text-xs font-mono uppercase tracking-wider transition-colors mt-2"
                    >
                      <Mail size={14} />
                      <span>Disparar via Cliente de E-mail (Mailto)</span>
                    </button>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full bg-accent/10 border border-accent text-accent py-3 font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>TRANSMITINDO PACOTES...</span>
                    </>
                  ) : (
                    <>
                      <span>TRANSMITIR</span>
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
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