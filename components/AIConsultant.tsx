
import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Send, Loader2, Bot, User, BrainCircuit, Activity, Crosshair, Fingerprint, Waves } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSkincareAdvice } from '../services/geminiService';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

interface AIConsultantProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIConsultant: React.FC<AIConsultantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: "NEURAL CORE INITIALIZED. I am Aura-Prime. Sequence check complete. I am currently monitoring your biological luminosity markers. How can I architect your aesthetic evolution today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getSkincareAdvice(userMsg);
      setMessages(prev => [...prev, { role: 'ai', content: response || "RE-CALIBRATING... Neural link unstable. Please re-sync your intent." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: "CORE OVERHEAT. Molecular logic cooling. Please wait 10 seconds." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/98 backdrop-blur-3xl p-4 sm:p-10"
        >
          {/* Dermal Scanning Grid Overlay */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
             <motion.div 
               animate={{ y: ['-100%', '200%'] }}
               transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
               className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-rose-500 to-transparent shadow-[0_0_40px_rgba(225,29,72,1)]"
             />
             <div className="absolute top-10 right-10 flex flex-col items-end space-y-4 font-mono text-[9px] text-rose-500 uppercase tracking-widest">
                <span>AURA-ID: EA-992-B</span>
                <span className="animate-pulse">Tracking Luminosity Gradient...</span>
             </div>
          </div>

          <motion.div 
            initial={{ scale: 0.95, y: 100, rotateX: 20 }}
            animate={{ scale: 1, y: 0, rotateX: 0 }}
            exit={{ scale: 0.95, y: 100, rotateX: 20 }}
            className="w-full max-w-7xl h-[88vh] bg-[#050505]/60 border border-white/10 rounded-[5rem] overflow-hidden flex flex-col relative shadow-[0_0_120px_rgba(225,29,72,0.15)] perspective-container"
          >
            {/* Holographic Lab Header */}
            <div className="p-14 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-rose-950/20 via-transparent to-transparent">
              <div className="flex items-center space-x-12">
                <div className="relative group">
                  <div className="w-28 h-28 bg-rose-600/5 rounded-[2.5rem] flex items-center justify-center text-rose-500 border border-rose-500/20 group-hover:border-rose-500/60 transition-all duration-700">
                    <BrainCircuit size={54} className="animate-pulse" />
                  </div>
                  <motion.div 
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full border-[6px] border-black" 
                  />
                </div>
                <div>
                  <h2 className="font-display text-7xl font-black text-white tracking-tighter uppercase leading-none">Aura <span className="text-rose-600">Prime</span></h2>
                  <div className="flex items-center space-x-10 mt-6">
                    <div className="flex items-center space-x-4 text-rose-500/60 font-mono text-[10px] uppercase tracking-[0.6em]">
                       <Activity size={16} />
                       <span>Neural Sync: 99.8%</span>
                    </div>
                    <div className="h-1 w-32 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                         animate={{ width: ['40%', '98%', '60%'] }}
                         transition={{ repeat: Infinity, duration: 4 }}
                         className="h-full bg-rose-600"
                       />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden xl:flex items-center space-x-16 mr-16 text-white/20 font-mono text-[11px] tracking-[0.6em] uppercase">
                <div className="flex items-center space-x-4">
                   <Fingerprint size={20} className="text-rose-500/40" />
                   <span>Biometry Active</span>
                </div>
                <div className="flex items-center space-x-4 text-rose-500">
                   <Waves size={20} className="animate-pulse" />
                   <span className="animate-pulse">Spectral Feedback</span>
                </div>
              </div>

              <button onClick={onClose} className="w-20 h-20 bg-white/5 hover:bg-rose-600 rounded-full text-white/40 hover:text-white transition-all flex items-center justify-center border border-white/5 shadow-2xl">
                <X size={44} />
              </button>
            </div>

            {/* Neural Chat Matrix */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-20 space-y-20 no-scrollbar"
            >
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.role === 'user' ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-12 max-w-[75%] ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-16 h-16 rounded-3xl flex items-center justify-center border-2 ${msg.role === 'user' ? 'bg-white text-black border-white' : 'bg-rose-500/10 text-rose-500 border-rose-500/20'}`}>
                      {msg.role === 'user' ? <User size={32} /> : <Bot size={32} />}
                    </div>
                    <div className={`p-12 rounded-[3rem] text-2xl leading-relaxed font-light tracking-wide shadow-2xl ${msg.role === 'user' ? 'bg-white/[0.04] text-white border border-white/10 rounded-tr-none' : 'bg-rose-500/[0.04] text-gray-300 border border-rose-500/10 rounded-tl-none'}`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-10 bg-white/5 p-12 rounded-[3rem] border border-white/10">
                    <div className="relative">
                      <Loader2 size={40} className="animate-spin text-rose-500" />
                    </div>
                    <div>
                      <span className="text-[11px] text-rose-500 font-mono tracking-[0.6em] uppercase block mb-4 animate-pulse">Sequencing Molecular Compatibility...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-20 border-t border-white/5 bg-black/90 backdrop-blur-3xl">
              <form onSubmit={handleSubmit} className="relative max-w-6xl mx-auto group">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="TRANSMIT NEURAL FREQUENCY..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[3rem] px-16 py-12 pr-48 focus:outline-none focus:border-rose-500/50 transition-all text-white font-mono text-2xl tracking-wider placeholder:text-gray-800"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-6 top-6 bottom-6 bg-rose-600 text-white px-16 rounded-[2rem] hover:bg-rose-500 font-black tracking-[0.5em] text-[13px] shadow-[0_0_50px_rgba(225,29,72,0.5)] flex items-center space-x-4"
                >
                  <Sparkles size={18} />
                  <span>EXECUTE</span>
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIConsultant;
