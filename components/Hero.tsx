
import React from 'react';
import { Sparkles, MoveRight, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-[110vh] flex items-center overflow-hidden bg-cream dark:bg-black select-none transition-colors duration-500">
      {/* Cinematic Depth Layer */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cream/60 dark:from-black/60 via-transparent to-cream dark:to-black"></div>
        <img 
          src="https://images.unsplash.com/photo-1617897903246-7392ce73ec7c?auto=format&fit=crop&q=100&w=2400" 
          alt="Luxury Abstract"
          className="w-full h-full object-cover scale-110 blur-[2px] opacity-40 dark:opacity-100"
        />
      </motion.div>

      <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-20 relative z-10 w-full pt-20">
        <div className="max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center space-x-6 mb-16"
          >
            <div className="w-20 h-[1px] bg-rose-600"></div>
            <span className="text-rose-600 dark:text-rose-500 text-[11px] font-black uppercase tracking-[0.8em] flex items-center">
              <Sparkles size={16} className="mr-3 animate-pulse" />
              Neural Aesthetic Lab
            </span>
          </motion.div>
          
          <div className="relative">
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[12vw] md:text-[14vw] font-black text-obsidian dark:text-white leading-[0.75] mb-20 tracking-tighter mix-blend-multiply dark:mix-blend-difference"
            >
              ALCHEMIC <br /> 
              <span className="italic font-serif text-rose-600/30 dark:text-rose-200/50 font-light ml-[10vw]">GENESIS</span>
            </motion.h1>
            
            <motion.div 
              style={{ opacity }}
              className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mt-12"
            >
              <div className="max-w-md border-l-2 border-rose-900/40 pl-10">
                <p className="text-2xl text-obsidian/40 dark:text-white/40 font-light leading-relaxed">
                  Redefining the molecular standard. The first skincare line built on neural-network architecture and wild botanical rare-elements.
                </p>
              </div>

              <div className="flex items-center space-x-12">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: '#E11D48', color: '#fff' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-obsidian text-white dark:bg-white dark:text-obsidian px-16 py-8 rounded-full font-black uppercase tracking-[0.4em] text-[11px] transition-all duration-500 shadow-2xl flex items-center space-x-4"
                >
                  <span>Enter The Atelier</span>
                  <MoveRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Side Brand Marks */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col items-end space-y-20 opacity-20 hidden lg:flex">
         <span className="font-mono text-[10px] tracking-[1em] [writing-mode:vertical-rl] uppercase text-obsidian dark:text-white">Paris / 12th Arr.</span>
         <span className="font-mono text-[10px] tracking-[1em] [writing-mode:vertical-rl] uppercase text-obsidian dark:text-white">Algorithm v4.2</span>
      </div>

      {/* Ambient Bottom Bar */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-12 right-12 flex justify-between items-center"
      >
        <div className="flex items-center space-x-4">
           <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
           <span className="text-[10px] font-mono text-obsidian/30 dark:text-white/30 uppercase tracking-[0.4em]">Laboratory System: Nominal</span>
        </div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] font-black text-obsidian/40 dark:text-white/40 uppercase tracking-[0.4em] mb-4">Scroll To Discover</span>
          <ChevronDown size={20} className="text-rose-600" />
        </motion.div>
        <div className="text-[10px] font-mono text-obsidian/30 dark:text-white/30 uppercase tracking-[0.4em]">
          Est. MMXXIV
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
