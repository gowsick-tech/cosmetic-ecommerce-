
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, ArrowUpRight, Zap, Globe, Shield, Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-white pt-80 pb-20 relative overflow-hidden border-t border-white/5">
      {/* The Monolith Title */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 pointer-events-none w-full select-none">
        <h2 className="font-display text-[28vw] font-black leading-none text-white/[0.015] tracking-tighter text-center whitespace-nowrap uppercase">
          ENVISION AURA
        </h2>
      </div>

      <div className="max-w-[1800px] mx-auto px-10 sm:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 mb-60">
          
          {/* Manifesto Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-6 mb-12">
               <div className="w-14 h-14 bg-rose-600/10 rounded-2xl flex items-center justify-center border border-rose-600/30">
                 <Zap size={24} className="text-rose-600" />
               </div>
               <h3 className="font-display text-6xl font-black tracking-tighter">THE <span className="text-rose-600">MANIFESTO</span></h3>
            </div>
            <p className="text-2xl text-gray-500 font-light leading-relaxed max-w-lg mb-16 italic font-serif">
              "We believe that beauty is an algorithmic expression of biological harmony. Envision Aura exists to architect the bridge between neural intelligence and aesthetic grace."
            </p>
            
            <div className="bg-white/[0.03] border border-white/10 p-10 rounded-[3rem] backdrop-blur-3xl group">
               <h4 className="text-[10px] font-black tracking-[0.6em] uppercase mb-6 text-rose-500">Neural Feed</h4>
               <p className="text-sm text-gray-400 mb-8 leading-relaxed">Join 40,000+ pioneers receiving our monthly bio-alchemic research.</p>
               <div className="relative">
                 <input 
                   type="text" 
                   placeholder="Enter Access Key..." 
                   className="w-full bg-black border border-white/5 rounded-2xl px-8 py-6 text-sm font-mono focus:outline-none focus:border-rose-500 transition-all"
                 />
                 <button className="absolute right-2 top-2 bottom-2 bg-rose-600 px-8 rounded-xl text-[10px] font-black tracking-widest hover:bg-rose-500 transition-all">
                   SUBSCRIBE
                 </button>
               </div>
            </div>
          </div>

          {/* Site Map Column */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-20">
            <div>
              <h4 className="flex items-center text-[11px] font-black tracking-[0.5em] uppercase mb-12 text-rose-500">
                <Globe size={14} className="mr-3" /> Navigation
              </h4>
              <ul className="space-y-8 font-light text-gray-400">
                {['The Atelier', 'Lab Archive', 'Neural Maps', 'Dermal Core', 'Press Room'].map(l => (
                  <li key={l}>
                    <a href="#" className="hover:text-white transition-all flex items-center group text-lg tracking-tight">
                      <span>{l}</span>
                      <ArrowUpRight size={14} className="ml-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="flex items-center text-[11px] font-black tracking-[0.5em] uppercase mb-12 text-rose-500">
                <Shield size={14} className="mr-3" /> Compliance
              </h4>
              <ul className="space-y-8 font-light text-gray-400">
                {['Bio-Ethics', 'Dermal Safety', 'Sourcing Protocol', 'Neural Privacy', 'Supply Chain'].map(l => (
                  <li key={l}>
                    <a href="#" className="hover:text-white transition-all text-lg tracking-tight">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="flex items-center text-[11px] font-black tracking-[0.5em] uppercase mb-12 text-rose-500">
                <Terminal size={14} className="mr-3" /> Interface
              </h4>
              <div className="space-y-10">
                <div className="flex space-x-8">
                  <Instagram size={24} className="text-gray-600 hover:text-white transition-colors cursor-pointer" />
                  <Twitter size={24} className="text-gray-600 hover:text-white transition-colors cursor-pointer" />
                  <Youtube size={24} className="text-gray-600 hover:text-white transition-colors cursor-pointer" />
                </div>
                <p className="text-sm font-light text-gray-500 leading-loose border-l border-rose-900/40 pl-6">
                  Atelier 12th Arr. <br />
                  75012 Paris, France <br />
                  <span className="text-rose-500 font-mono text-xs mt-4 block">core@envisionaura.ai</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col xl:flex-row justify-between items-center gap-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
             <div className="flex items-center space-x-6 bg-white/[0.02] px-8 py-4 rounded-full border border-white/5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Aura Sync: Active</span>
             </div>
          </div>
          <p className="text-[10px] font-mono text-gray-700 tracking-[0.5em] uppercase text-center">
            © MMXXIV ENVISION AURA LABORATORIES. ALL NEURAL PATENTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
