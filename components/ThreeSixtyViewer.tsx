
import React, { useState, useRef } from 'react';
import { Rotate3d, Maximize2 } from 'lucide-react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface ThreeSixtyViewerProps {
  image: string;
  name: string;
}

const ThreeSixtyViewer: React.FC<ThreeSixtyViewerProps> = ({ image, name }) => {
  const [isDragging, setIsDragging] = useState(false);
  const rotationX = useSpring(0, { stiffness: 100, damping: 30 });
  const rotationY = useSpring(0, { stiffness: 100, damping: 30 });
  
  // Simulated Refractive Light
  const lightX = useTransform(rotationY, [-360, 360], [-100, 100]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    rotationY.set(rotationY.get() + e.movementX * 0.5);
    rotationX.set(rotationX.get() - e.movementY * 0.2);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    // Simplified touch for demo
    rotationY.set(rotationY.get() + 2);
  };

  return (
    <div 
      className="relative w-full aspect-square bg-[#eceae5] rounded-[3rem] overflow-hidden cursor-grab active:cursor-grabbing perspective-container group"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* Dynamic Background Aura */}
      <motion.div 
        className="absolute inset-0 opacity-40 blur-[80px]"
        style={{
          background: `radial-gradient(circle at center, rgba(212, 175, 55, 0.2) 0%, transparent 70%)`,
          x: lightX
        }}
      />

      <motion.div 
        className="w-full h-full flex items-center justify-center p-12"
        style={{
          rotateY: rotationY,
          rotateX: rotationX,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-auto max-h-[80%] object-contain drop-shadow-[0_50px_50px_rgba(0,0,0,0.15)] pointer-events-none"
          />
          {/* Reflective Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 mix-blend-overlay"
            style={{ x: lightX }}
          />
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white/20 backdrop-blur-xl border border-white/30 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl group-hover:scale-105 transition-transform">
        <Rotate3d size={14} className="text-obsidian" />
        <span>Rotate Object</span>
      </div>

      <button className="absolute top-8 right-8 p-4 bg-white/40 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <Maximize2 size={18} />
      </button>
    </div>
  );
};

export default ThreeSixtyViewer;
