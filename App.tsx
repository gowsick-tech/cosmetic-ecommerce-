
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import AIConsultant from './components/AIConsultant';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import { PRODUCTS, CATEGORIES } from './constants';
import { Product, CartItem } from './types';
import { Sparkles, BrainCircuit, Activity, ChevronRight, Zap, Sun, Moon, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-cream dark:bg-obsidian transition-colors duration-500">
      <Navbar 
        cartCount={cartItems.reduce((acc, curr) => acc + curr.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAI={() => setIsAIOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      
      <Hero />

      {/* AMBIANCE MONOLITH - Unavoidable Theme Switcher */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={toggleTheme}
        className="fixed left-8 bottom-32 z-[60] group cursor-none"
      >
        <div className="relative">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute inset-0 bg-obsidian dark:bg-white rounded-[2rem] blur-2xl"
          />
          <div className="relative bg-white/60 dark:bg-black/40 backdrop-blur-3xl border border-obsidian/20 dark:border-white/10 p-6 rounded-[2rem] flex flex-col items-center space-y-4 hover:border-rose-500/50 transition-all shadow-2xl">
            <div className="flex flex-col items-center">
              {theme === 'dark' ? <Sun size={24} className="text-rose-500" /> : <Moon size={24} className="text-obsidian" />}
              <span className="font-mono text-[8px] uppercase tracking-[0.4em] mt-3 text-obsidian dark:text-white">Shift Ambiance</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Neural Pulse - Unavoidable AI Entry */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => setIsAIOpen(true)}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-[60] group cursor-none"
      >
        <div className="relative">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute inset-0 bg-rose-600 rounded-full blur-2xl"
          />
          <div className="relative bg-white/40 dark:bg-black/40 backdrop-blur-3xl border border-obsidian/10 dark:border-white/10 p-6 rounded-full flex flex-col items-center space-y-4 hover:border-rose-500/50 transition-all shadow-2xl">
            <BrainCircuit size={28} className="text-rose-600 dark:text-rose-500 animate-pulse" />
            <div className="h-20 w-[1px] bg-gradient-to-b from-rose-600 to-transparent"></div>
            <span className="font-mono text-[9px] [writing-mode:vertical-rl] uppercase tracking-[0.5em] text-obsidian/40 dark:text-white/40">Neural Active</span>
          </div>
        </div>
      </motion.div>

      {/* Marquee Label */}
      <div className="bg-obsidian py-8 flex overflow-hidden whitespace-nowrap border-y border-white/5">
        <div className="flex animate-marquee space-x-24">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-white text-[11px] font-black uppercase tracking-[0.8em] opacity-30 hover:opacity-100 transition-opacity cursor-default flex items-center">
              <Zap size={14} className="mr-6 text-rose-600" />
              ENVISION AURA • NEURAL SKINCARE • BIOMETRIC ARTISTRY • PARIS • TOKYO • NEW YORK
            </span>
          ))}
        </div>
      </div>

      {/* Product Section */}
      <section className="py-60 px-6 sm:px-12 lg:px-24 max-w-[1800px] mx-auto">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-40 gap-12">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-rose-600 font-black text-[11px] uppercase tracking-[1em] mb-10 block"
            >
              The 2024 Collection
            </motion.span>
            <h2 className="font-display text-8xl md:text-[12rem] font-black text-obsidian dark:text-white leading-[0.75] -ml-2 tracking-tighter transition-colors">
              BEYOND <br /> <span className="text-obsidian/20 dark:text-white/20 italic font-serif pr-4">VISIBLE</span> SKIN
            </h2>
          </div>
          <div className="flex flex-wrap gap-6 bg-obsidian/5 dark:bg-white/5 p-4 rounded-[2.5rem] border border-obsidian/5 dark:border-white/5 backdrop-blur-xl">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-14 py-6 rounded-[1.8rem] text-[10px] font-black tracking-[0.4em] transition-all duration-500 ${
                  selectedCategory === cat 
                  ? 'bg-rose-600 text-white shadow-[0_20px_40px_rgba(225,29,72,0.3)] scale-105' 
                  : 'text-obsidian/40 dark:text-white/40 hover:text-obsidian dark:hover:text-white hover:bg-obsidian/5 dark:hover:bg-white/5'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-40">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart}
              onQuickView={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      </section>

      {/* The "Unavoidable" Cinematic Neural Lab Section */}
      <section className="relative py-80 bg-cream dark:bg-black overflow-hidden border-y border-obsidian/5 dark:border-white/5 transition-colors duration-500">
        <div className="absolute inset-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=100&w=2400" 
             className="w-full h-full object-cover mix-blend-overlay opacity-30 dark:opacity-40"
             alt="Tech background"
           />
        </div>
        
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-40 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-rose-600/20 rounded-full blur-[120px] animate-pulse"></div>
              <div className="relative z-10 w-full h-full rounded-[4rem] overflow-hidden border border-obsidian/10 dark:border-white/10 group bg-cream dark:bg-obsidian">
                <img 
                  src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&q=100&w=1200" 
                  alt="AI Laboratory"
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60 dark:opacity-80"></div>
                <div className="absolute bottom-12 left-12 right-12">
                   <div className="flex items-center space-x-6 text-rose-500 mb-4">
                     <Activity size={24} className="animate-bounce" />
                     <span className="font-mono text-[10px] uppercase tracking-[0.5em]">System Status: Analyzing</span>
                   </div>
                   <div className="w-full h-1 bg-obsidian/20 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ['0%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="h-full bg-rose-600"
                      />
                   </div>
                </div>
              </div>
            </motion.div>

            <div className="text-left">
              <span className="text-rose-600 dark:text-rose-500 font-black text-[12px] uppercase tracking-[0.8em] mb-12 block">Proprietary Technology</span>
              <h2 className="font-display text-8xl md:text-9xl font-black text-obsidian dark:text-white leading-none mb-14 tracking-tighter transition-colors">
                ARCHITECT <br /> YOUR <span className="text-rose-600 pr-2">DNA</span> <br /> GLOW
              </h2>
              <p className="text-2xl text-obsidian/60 dark:text-gray-500 mb-20 leading-relaxed font-light max-w-xl italic transition-colors">
                Our Aura Prime engine translates your biological markers into a precise molecular aesthetic. Stop guessing. Start sequencing.
              </p>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsAIOpen(true)}
                className="w-full sm:w-auto bg-obsidian text-white dark:bg-white dark:text-obsidian px-24 py-12 rounded-[3rem] font-black uppercase tracking-[0.5em] hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 dark:hover:text-white transition-all duration-500 flex items-center justify-center space-x-10 group shadow-2xl"
              >
                <span>INITIATE BIO-SCAN</span>
                <BrainCircuit size={28} className="group-hover:rotate-12 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onAddToCart={handleAddToCart}
        theme={theme}
      />
      <AIConsultant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        theme={theme}
      />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
