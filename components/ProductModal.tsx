
import React, { useState, useEffect } from 'react';
import { X, Sparkles, ShoppingBag, Star, ChevronRight, ShieldCheck } from 'lucide-react';
import ThreeSixtyViewer from './ThreeSixtyViewer';
import { Product } from '../types';
import { analyzeProductIngredients } from '../services/geminiService';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
  theme: 'dark' | 'light';
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart, theme }) => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product?.ingredients) {
      setLoading(true);
      analyzeProductIngredients(product.name, product.ingredients)
        .then(res => setAnalysis(res))
        .finally(() => setLoading(false));
    } else {
      setAnalysis(null);
    }
  }, [product]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-12">
      <div className="absolute inset-0 bg-obsidian/80 backdrop-blur-xl" onClick={onClose} />
      
      <div className="relative w-full max-w-7xl bg-cream dark:bg-obsidian rounded-[4rem] overflow-hidden flex flex-col lg:flex-row h-full max-h-[85vh] shadow-[0_0_150px_rgba(0,0,0,0.4)] animate-in zoom-in-95 duration-500 border border-obsidian/5 dark:border-white/5">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-20 w-16 h-16 bg-cream/80 dark:bg-obsidian/80 backdrop-blur-2xl rounded-full flex items-center justify-center hover:bg-rose-600 hover:text-white transition-all border border-obsidian/5 dark:border-white/5 text-obsidian dark:text-white"
        >
          <X size={32} />
        </button>

        {/* Left: 360 Viewer */}
        <div className="w-full lg:w-1/2 p-10 lg:p-16 bg-obsidian/[0.02] dark:bg-white/[0.02] flex items-center justify-center relative">
          <ThreeSixtyViewer image={product.image} name={product.name} />
          <div className="absolute bottom-12 left-12 flex space-x-4 opacity-30">
            <div className="w-12 h-1 bg-rose-600 rounded-full" />
            <div className="w-8 h-1 bg-obsidian/10 dark:bg-white/10 rounded-full" />
            <div className="w-8 h-1 bg-obsidian/10 dark:bg-white/10 rounded-full" />
          </div>
        </div>

        {/* Right: Info */}
        <div className="w-full lg:w-1/2 p-12 lg:p-20 overflow-y-auto no-scrollbar">
          <div className="max-w-2xl">
            <span className="text-rose-600 font-black text-[11px] uppercase tracking-[0.5em] mb-6 block">{product.category} Exclusive</span>
            <h2 className="font-display text-7xl md:text-8xl font-black text-obsidian dark:text-white mb-10 leading-[0.85] tracking-tighter uppercase">
              {product.name}
            </h2>
            
            <div className="flex items-center space-x-10 mb-12">
              <div className="flex items-center text-amber-500 bg-obsidian/5 dark:bg-white/5 px-6 py-3 rounded-full border border-obsidian/5 dark:border-white/5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                ))}
                <span className="ml-4 text-sm font-black text-obsidian dark:text-white">{product.rating}</span>
              </div>
              <span className="text-obsidian/10 dark:text-white/10">|</span>
              <span className="text-4xl font-display font-black text-rose-600 tracking-tight">${product.price}</span>
            </div>

            <p className="text-obsidian/60 dark:text-gray-400 leading-relaxed mb-14 text-xl font-light italic font-serif border-l-2 border-rose-600/20 pl-10">
              "{product.description}"
            </p>

            {/* AI Ingredient Analysis */}
            <div className="bg-obsidian/5 dark:bg-white/[0.03] rounded-[3rem] p-10 border border-obsidian/5 dark:border-white/5 mb-14 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-rose-600/5 rounded-full -mr-24 -mt-24 transition-transform group-hover:scale-150 duration-1000" />
              <div className="relative z-10">
                <div className="flex items-center space-x-4 text-rose-600 mb-6">
                  <Sparkles size={24} className="animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em]">Neural Molecular Scan</span>
                </div>
                {loading ? (
                  <div className="flex items-center space-x-6 text-obsidian/40 dark:text-gray-500 animate-pulse">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="text-sm italic font-mono uppercase tracking-widest">Decoding biological markers...</span>
                  </div>
                ) : (
                  <div className="text-lg text-obsidian/70 dark:text-gray-300 space-y-4 font-light leading-relaxed">
                    {analysis || "Our AI is analyzing the bio-compatibility of these ingredients..."}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => onAddToCart(product)}
                className="flex-1 bg-obsidian text-white dark:bg-white dark:text-obsidian py-7 rounded-[2rem] font-black uppercase tracking-[0.4em] text-[11px] hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 dark:hover:text-white transition-all flex items-center justify-center space-x-4 group shadow-2xl shadow-rose-600/10"
              >
                <ShoppingBag size={22} />
                <span>ALLOCATE TO BAG</span>
                <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-12 py-7 rounded-[2rem] border-2 border-obsidian/5 dark:border-white/5 font-black text-[11px] uppercase tracking-[0.4em] text-obsidian dark:text-white hover:bg-obsidian hover:text-white dark:hover:bg-white dark:hover:text-obsidian transition-all">
                ARCHIVE
              </button>
            </div>

            <div className="mt-16 flex flex-wrap gap-10">
              <div className="flex items-center space-x-3 text-[10px] font-black text-obsidian/40 dark:text-white/40 uppercase tracking-[0.3em]">
                <ShieldCheck size={18} className="text-rose-600" />
                <span>LAB-CERTIFIED</span>
              </div>
              <div className="flex items-center space-x-3 text-[10px] font-black text-obsidian/40 dark:text-white/40 uppercase tracking-[0.3em]">
                <ShieldCheck size={18} className="text-rose-600" />
                <span>100% MOLECULAR PURITY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
