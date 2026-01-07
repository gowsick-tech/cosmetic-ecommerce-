
import React from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  theme: 'dark' | 'light';
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove, theme }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] overflow-hidden">
      <div className="absolute inset-0 bg-obsidian/40 backdrop-blur-md" onClick={onClose} />
      
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-cream dark:bg-obsidian shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col animate-in slide-in-from-right duration-500">
        <div className="p-10 border-b border-obsidian/5 dark:border-white/5 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <ShoppingBag size={28} className="text-rose-600" />
            <h2 className="font-display text-4xl font-black text-obsidian dark:text-white tracking-tighter uppercase">Cart Archive</h2>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-obsidian/5 dark:hover:bg-white/5 rounded-full text-obsidian dark:text-white transition-all">
            <X size={28} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-10 space-y-10 no-scrollbar">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-obsidian/5 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 text-obsidian/20 dark:text-white/20">
                <ShoppingBag size={40} />
              </div>
              <p className="text-obsidian/60 dark:text-gray-500 font-light italic text-xl">Your bag is as light as digital ether...</p>
              <button 
                onClick={onClose}
                className="mt-12 text-[10px] font-black border-b-2 border-rose-600 pb-2 uppercase tracking-[0.5em] text-obsidian dark:text-white hover:text-rose-600 transition-colors"
              >
                Enter The Atelier
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex space-x-6 group">
                <div className="w-28 h-28 rounded-2xl overflow-hidden bg-obsidian/5 dark:bg-white/5 flex-shrink-0 border border-obsidian/5 dark:border-white/5">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-2xl font-black text-obsidian dark:text-white leading-none tracking-tight">{item.name}</h3>
                      <button onClick={() => onRemove(item.id)} className="text-obsidian/20 dark:text-white/20 hover:text-rose-600 transition-all">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="text-[9px] text-rose-600 font-black mt-2 uppercase tracking-widest">{item.category}</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center space-x-4 bg-obsidian/5 dark:bg-white/5 rounded-xl p-1.5 border border-obsidian/5 dark:border-white/5">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 hover:bg-cream dark:hover:bg-obsidian rounded-lg transition-colors text-obsidian dark:text-white"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-xs font-black w-6 text-center text-obsidian dark:text-white">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 hover:bg-cream dark:hover:bg-obsidian rounded-lg transition-colors text-obsidian dark:text-white"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <p className="font-serif font-black text-xl text-obsidian dark:text-white">${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-10 border-t border-obsidian/5 dark:border-white/5 bg-obsidian/5 dark:bg-black/50 backdrop-blur-3xl">
            <div className="space-y-6 mb-10">
              <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-obsidian/40 dark:text-white/40">
                <span>Core Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[11px] font-black uppercase tracking-[0.5em] text-rose-600">
                <span>Shipping</span>
                <span>COMPLIMENTARY</span>
              </div>
              <div className="flex justify-between text-3xl font-display font-black border-t border-obsidian/10 dark:border-white/10 pt-8 text-obsidian dark:text-white">
                <span>Total Yield</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-obsidian text-white dark:bg-white dark:text-obsidian py-6 rounded-[2rem] font-black uppercase tracking-[0.4em] text-[11px] hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 dark:hover:text-white transition-all duration-500 shadow-2xl flex items-center justify-center space-x-4 group">
              <span>SECURE CHECKOUT</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
