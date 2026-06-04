"use client";

import { motion } from "framer-motion";

const NodeCard = ({ 
  title, 
  headerColor, 
  top, 
  left, 
  delay, 
  yOffset 
}: { 
  title: string; 
  headerColor: string; 
  top: string; 
  left: string; 
  delay: number; 
  yOffset: number;
}) => (
  <motion.div 
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: [0, yOffset, 0], opacity: 0.6 }}
    transition={{ 
      y: { duration: 12, repeat: Infinity, ease: "easeInOut", delay },
      opacity: { duration: 2, ease: "easeOut" }
    }}
    className={`absolute ${top} ${left} w-56 bg-zinc-900/50 border border-white/10 rounded-xl backdrop-blur-md overflow-hidden shadow-2xl hidden lg:block`}
  >
    {/* Header */}
    <div className={`w-full h-8 ${headerColor} flex items-center px-3 border-b border-white/10`}>
      <span className="text-xs font-semibold text-white/80">{title}</span>
    </div>
    
    {/* Body / Attributes */}
    <div className="p-3 space-y-3">
       {/* Attribute 1 */}
       <div className="flex justify-between items-center">
         <div className="w-2 h-2 rounded-full bg-white/20" />
         <div className="h-2 w-16 bg-white/10 rounded-full" />
         <div className="w-2 h-2 rounded-full bg-electricBlue shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
       </div>
       {/* Attribute 2 */}
       <div className="flex justify-between items-center">
         <div className="w-2 h-2 rounded-full bg-white/20" />
         <div className="h-2 w-20 bg-white/10 rounded-full" />
         <div className="w-2 h-2 rounded-full bg-electricBlue shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
       </div>
       {/* Attribute 3 */}
       <div className="flex justify-between items-center">
         <div className="w-2 h-2 rounded-full bg-white/20" />
         <div className="h-2 w-12 bg-white/10 rounded-full" />
         <div className="w-2 h-2 rounded-full bg-white/20" />
       </div>
    </div>
  </motion.div>
);

export default function FloatingNodes() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Group 1: Left side */}
      <NodeCard 
        title="PxrSurface" 
        headerColor="bg-blue-600/30" 
        top="top-[30%]" 
        left="left-[5%]" 
        delay={0} 
        yOffset={-40} 
      />
      <NodeCard 
        title="PxrTexture" 
        headerColor="bg-green-600/30" 
        top="top-[20%]" 
        left="left-[18%]" 
        delay={2} 
        yOffset={30} 
      />
      <NodeCard 
        title="PxrManifold2D" 
        headerColor="bg-purple-600/30" 
        top="top-[45%]" 
        left="left-[12%]" 
        delay={4} 
        yOffset={-25} 
      />

      {/* Group 2: Right side */}
      <NodeCard 
        title="PxrDisplace" 
        headerColor="bg-orange-600/30" 
        top="top-[25%]" 
        left="right-[15%]" 
        delay={1} 
        yOffset={35} 
      />
      <NodeCard 
        title="PxrBump" 
        headerColor="bg-teal-600/30" 
        top="top-[50%]" 
        left="right-[8%]" 
        delay={3} 
        yOffset={-30} 
      />
      
      {/* SVG Connecting Splines (Simulated connections) */}
      <svg className="absolute inset-0 w-full h-full opacity-30 hidden lg:block" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M 18vw 22vh C 15vw 22vh, 15vw 32vh, 12vw 32vh"
          fill="transparent"
          stroke="#00F0FF"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.path
          d="M 12vw 47vh C 10vw 47vh, 10vw 35vh, 8vw 35vh"
          fill="transparent"
          stroke="#00F0FF"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}
