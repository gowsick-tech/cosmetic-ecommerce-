
import React from 'react';
import { ShoppingBag, Search, Sparkles, Menu, Moon, Sun, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAI: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenAI, theme, onToggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/60 dark:bg-black/60 backdrop-blur-3xl border-b border-obsidian/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-[1800px] mx-auto px-10 sm:px-14 lg:px-20">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-10">
            <button className="lg:hidden p-3 hover:bg-obsidian/5 dark:hover:bg-white/5 rounded-full transition-colors">
              <Menu size={24} className="text-obsidian dark:text-white" />
            </button>
            <a href="#" className="flex flex-col">
              <span className="font-display text-4xl font-black tracking-tighter text-obsidian dark:text-white leading-none transition-colors">
                ENVISION <span className="text-rose-600">AURA</span>
              </span>
              <span className="font-mono text-[8px] text-obsidian/30 dark:text-white/30 tracking-[1em] uppercase mt-1">Bio-Aesthetic Archive</span>
            </a>
          </div>

          <div className="hidden xl:flex items-center space-x-12">
            {['Skincare', 'Makeup', 'Research', 'Atelier'].map(link => (
              <a 
                key={link} 
                href="#" 
                className="text-[11px] font-black tracking-[0.4em] uppercase text-obsidian dark:text-white hover:text-rose-600 transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-rose-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4 md:space-x-8">
            {/* PROMINENT THEME CONTROLLER */}
            <div className="hidden md:flex items-center bg-obsidian/5 dark:bg-white/5 border border-obsidian/10 dark:border-white/10 rounded-full p-1.5 px-6 space-x-6 hover:border-rose-500/30 transition-all">
              <span className="font-mono text-[9px] uppercase tracking-widest text-obsidian/30 dark:text-white/30">Aesthetic State</span>
              <button 
                onClick={onToggleTheme}
                className="flex items-center space-x-4 group"
              >
                <div className="relative w-14 h-7 bg-obsidian dark:bg-white rounded-full transition-colors overflow-hidden">
                  <motion.div 
                    animate={{ x: theme === 'dark' ? 28 : 2 }}
                    className="absolute top-1 left-0 w-5 h-5 bg-cream dark:bg-black rounded-full shadow-lg flex items-center justify-center"
                  >
                     {theme === 'dark' ? <Moon size={10} className="text-obsidian" /> : <Sun size={10} className="text-cream" />}
                  </motion.div>
                </div>
                <span className="font-black text-[10px] uppercase tracking-widest text-obsidian dark:text-white">
                  {theme.toUpperCase()}
                </span>
              </button>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={onOpenAI}
              className="flex items-center space-x-3 bg-rose-600 text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg hover:bg-rose-500 transition-all"
            >
              <Sparkles size={16} />
              <span className="hidden sm:inline">Neural Consultant</span>
            </motion.button>
            
            <div className="h-8 w-[1px] bg-obsidian/10 dark:bg-white/10 mx-2 hidden md:block"></div>

            <button className="p-3 hover:bg-obsidian/5 dark:hover:bg-white/5 rounded-full text-obsidian/40 dark:text-white/40">
              <Search size={22} />
            </button>
            <button 
              onClick={onOpenCart}
              className="p-3 bg-obsidian/5 dark:bg-white/5 hover:bg-obsidian/10 dark:hover:bg-white/10 rounded-full text-obsidian dark:text-white transition-all relative"
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-black border border-cream dark:border-black">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
