"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ThumbsUp, ThumbsDown, Layers, MoveHorizontal } from "lucide-react";

export interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  wireframe?: string;
}

export default function PortfolioClient({ portfolioItems }: { portfolioItems: PortfolioItem[] }) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [reactions, setReactions] = useState<Record<number, 'like' | 'dislike' | null>>({});
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  };

  const handleReaction = (id: number, type: 'like' | 'dislike', e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setReactions(prev => ({
      ...prev,
      [id]: prev[id] === type ? null : type
    }));
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    setSliderPosition(50);
  };

  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto selection:bg-electricBlue/30 selection:text-white">
      
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6"
        >
          Selected <span className="text-electricBlue">Works</span>
        </motion.h1>
      </div>

      {/* Masonry Grid (simulated with CSS columns) */}
      <motion.div 
        layout
        className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        <AnimatePresence>
          {portfolioItems.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              key={item.id}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-black/50 border border-glassBorder cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-auto object-cover" 
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
                <Maximize2 size={32} className="text-white mb-4 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                
                {item.wireframe && (
                  <div className="absolute top-4 right-4 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-2 text-xs font-medium text-gray-300 border border-white/10">
                    <Layers size={14} /> Wireframe Included
                  </div>
                )}
                
                {/* Quick Reactions on Hover */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button 
                    onClick={(e) => handleReaction(item.id, 'like', e)}
                    className={`p-2 rounded-full backdrop-blur-md transition-all ${reactions[item.id] === 'like' ? 'bg-white text-black' : 'bg-black/50 text-white hover:bg-white/20'}`}
                  >
                    <ThumbsUp size={16} />
                  </button>
                  <button 
                    onClick={(e) => handleReaction(item.id, 'dislike', e)}
                    className={`p-2 rounded-full backdrop-blur-md transition-all ${reactions[item.id] === 'dislike' ? 'bg-white text-black' : 'bg-black/50 text-white hover:bg-white/20'}`}
                  >
                    <ThumbsDown size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
            onClick={closeLightbox}
          >
            {/* Top Bar Controls */}
            <div className="absolute top-6 right-6 flex items-center gap-4 z-50" onClick={(e) => e.stopPropagation()}>
              <button 
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                onClick={closeLightbox}
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Main Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-7xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
               
               {selectedItem.wireframe ? (
                 /* Comparison Slider */
                 <div 
                   ref={sliderRef}
                   className="relative w-full h-full max-h-[85vh] cursor-ew-resize select-none overflow-hidden"
                   onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
                   onTouchMove={(e) => handleMove(e.touches[0].clientX)}
                   onMouseDown={(e) => handleMove(e.clientX)}
                 >
                   {/* Background (Wireframe) */}
                   <img 
                     src={selectedItem.wireframe} 
                     alt={selectedItem.title + " Wireframe"} 
                     className="absolute inset-0 w-full h-full object-contain pointer-events-none" 
                     draggable={false}
                     onContextMenu={(e) => e.preventDefault()}
                   />
                   
                   {/* Foreground (Render) */}
                   <img 
                     src={selectedItem.image} 
                     alt={selectedItem.title} 
                     className="absolute inset-0 w-full h-full object-contain pointer-events-none" 
                     draggable={false}
                     onContextMenu={(e) => e.preventDefault()}
                     style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                   />

                   {/* Slider Handle */}
                   <div 
                     className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-10"
                     style={{ left: `${sliderPosition}%` }}
                   >
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                       <MoveHorizontal size={24} className="text-black" />
                     </div>
                   </div>
                   
                   {/* Labels */}
                   <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-medium border border-white/10 pointer-events-none z-20">
                     Render
                   </div>
                   <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-medium border border-white/10 pointer-events-none z-20">
                     Wireframe
                   </div>
                 </div>
               ) : (
                 /* Standard Image */
                 <img 
                   src={selectedItem.image} 
                   alt={selectedItem.title} 
                   className="max-w-full max-h-[85vh] object-contain rounded-lg pointer-events-none" 
                   onContextMenu={(e) => e.preventDefault()}
                   draggable={false}
                 />
               )}
               
               {/* Bottom Bar Controls */}
               <div className="absolute bottom-6 left-0 right-0 px-6 flex justify-between items-center w-full">
                  <h2 className="text-2xl font-medium text-white drop-shadow-md">
                    {selectedItem.title}
                  </h2>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleReaction(selectedItem.id, 'like')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md transition-all ${reactions[selectedItem.id] === 'like' ? 'bg-white text-black' : 'bg-black/50 border border-white/10 text-white hover:bg-white/20'}`}
                    >
                      <ThumbsUp size={18} />
                    </button>
                    <button 
                      onClick={() => handleReaction(selectedItem.id, 'dislike')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md transition-all ${reactions[selectedItem.id] === 'dislike' ? 'bg-white text-black' : 'bg-black/50 border border-white/10 text-white hover:bg-white/20'}`}
                    >
                      <ThumbsDown size={18} />
                    </button>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
