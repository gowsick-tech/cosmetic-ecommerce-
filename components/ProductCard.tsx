
import React from 'react';
import { Product } from '../types';
import { Star, Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onQuickView: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onQuickView }) => {
  return (
    <div className="group relative bg-white dark:bg-obsidian border border-obsidian/5 dark:border-white/5 rounded-3xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2">
      <div className="relative aspect-[4/5] overflow-hidden bg-cream dark:bg-obsidian">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        
        {/* Badges */}
        <div className="absolute top-6 left-6 flex flex-col space-y-3">
          {product.isNew && (
            <span className="bg-obsidian text-white dark:bg-white dark:text-obsidian text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">NEW EDITION</span>
          )}
          {product.isBestseller && (
            <span className="bg-rose-600 text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">CORE SELECT</span>
          )}
        </div>

        {/* Quick Actions overlay */}
        <div className="absolute inset-0 bg-obsidian/10 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 space-y-4">
          <button 
            onClick={() => onQuickView(product)}
            className="w-full bg-white dark:bg-obsidian text-obsidian dark:text-white py-4 rounded-full text-[10px] font-black shadow-2xl hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 transition-all uppercase tracking-[0.4em]"
          >
            BIO-INSPECT
          </button>
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-[10px] text-rose-600 font-black uppercase tracking-[0.4em] mb-2">{product.category}</p>
            <h3 className="font-display text-3xl font-black text-obsidian dark:text-white leading-tight group-hover:text-rose-600 transition-colors uppercase tracking-tight">{product.name}</h3>
          </div>
          <div className="flex items-center space-x-1.5 text-xs text-amber-500 font-black">
            <Star size={14} fill="currentColor" />
            <span>{product.rating}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-8">
          <p className="font-serif text-2xl font-black text-obsidian dark:text-white">${product.price}</p>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-obsidian text-white dark:bg-white dark:text-obsidian p-4 rounded-full hover:bg-rose-600 dark:hover:bg-rose-600 dark:hover:text-white transition-all shadow-xl group-hover:scale-110 active:scale-90"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
