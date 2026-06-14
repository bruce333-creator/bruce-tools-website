"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { RefreshCcw } from "lucide-react";

type Phase = "idle" | "chaos" | "freeze" | "transform" | "perfect" | "oneclick";

export default function ChaosAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [phase, setPhase] = useState<Phase>("idle");

  const startSequence = () => {
    setPhase("chaos");
    setTimeout(() => setPhase("freeze"), 2000);
    setTimeout(() => setPhase("transform"), 2500);
    setTimeout(() => setPhase("perfect"), 3500);
    setTimeout(() => setPhase("oneclick"), 4000);
  };

  useEffect(() => {
    if (isInView && phase === "idle") {
      startSequence();
    }
  }, [isInView, phase]);

  // Coordinate system: 1000 x 600
  // Helper to convert to % for HTML nodes
  const toPctX = (x: number) => `${(x / 1000) * 100}%`;
  const toPctY = (y: number) => `${(y / 600) * 100}%`;

  const nodes = [
    // Surviving Nodes
    { id: 'baseColor', label: 'Base Color', cx: 150, cy: 100, px: 150, py: 150, survives: true },
    { id: 'ao', label: 'Ambient Occlusion', cx: 200, cy: 450, px: 150, py: 250, survives: true },
    { id: 'roughness', label: 'Roughness', cx: 100, cy: 300, px: 150, py: 350, survives: true },
    { id: 'normal', label: 'Normal', cx: 350, cy: 500, px: 150, py: 450, survives: true },
    { id: 'multiply', label: 'Multiply', cx: 650, cy: 200, px: 450, py: 200, survives: true },
    { id: 'aiStandard', label: 'aiStandardSurface', cx: 800, cy: 400, px: 750, py: 300, survives: true, isTarget: true },

    // Discarded Nodes (Utilities)
    { id: 'u1', label: 'aiRange', cx: 350, cy: 150, px: 350, cy2: 150, survives: false },
    { id: 'u2', label: 'aiClamp', cx: 450, cy: 400, px: 450, cy2: 400, survives: false },
    { id: 'u3', label: 'aiColorCorrect', cx: 500, cy: 100, px: 500, cy2: 100, survives: false },
    { id: 'u4', label: 'aiComposite', cx: 700, cy: 500, px: 700, cy2: 500, survives: false },
    { id: 'u5', label: 'Metalness', cx: 300, cy: 250, px: 300, cy2: 250, survives: false },
    { id: 'u6', label: 'Displacement', cx: 550, cy: 300, px: 550, cy2: 300, survives: false },
    { id: 'u7', label: 'displacementShader', cx: 850, cy: 150, px: 850, cy2: 150, survives: false },
    { id: 'u8', label: 'aiMath', cx: 250, cy: 350, px: 250, cy2: 350, survives: false },
  ];

  // Random messy lines for Chaos state
  const chaosLines = [
    "M 150 100 Q 250 120 350 150",
    "M 350 150 T 500 100",
    "M 500 100 Q 600 150 650 200",
    "M 200 450 Q 300 400 450 400",
    "M 450 400 T 700 500",
    "M 100 300 Q 200 250 300 250",
    "M 300 250 T 550 300",
    "M 550 300 Q 650 350 800 400",
    "M 350 500 Q 500 450 700 500",
    "M 650 200 Q 750 250 800 400",
    "M 250 350 Q 400 350 550 300",
    "M 850 150 Q 800 250 800 400",
    "M 150 100 Q 300 300 450 400",
    "M 200 450 Q 400 200 500 100"
  ];

  // Clean lines for Perfect state
  // BaseColor & AO -> Multiply
  // Roughness & Normal & Multiply -> aiStandard
  const perfectLines = [
    "M 150 150 C 300 150, 300 200, 450 200", // Base Color -> Multiply
    "M 150 250 C 300 250, 300 200, 450 200", // AO -> Multiply
    "M 450 200 C 600 200, 600 300, 750 300", // Multiply -> aiStandard
    "M 150 350 C 450 350, 450 300, 750 300", // Roughness -> aiStandard
    "M 150 450 C 450 450, 450 300, 750 300"  // Normal -> aiStandard
  ];

  const isChaosOrFreeze = phase === "chaos" || phase === "freeze" || phase === "idle";

  return (
    <div 
      ref={containerRef} 
      className="relative w-full max-w-6xl mx-auto h-[600px] md:h-[700px] bg-[#080808] border border-white/5 rounded-3xl overflow-hidden cursor-crosshair group shadow-2xl"
      onMouseEnter={() => {
        if (phase === "oneclick") startSequence();
      }}
    >
      {/* Replay Button */}
      <button 
        onClick={startSequence}
        className={`absolute top-6 right-6 z-50 p-3 rounded-full bg-white/5 text-gray-500 hover:text-white hover:bg-white/10 transition-all ${phase === 'oneclick' ? 'opacity-100' : 'opacity-0'}`}
        title="Replay Animation"
      >
        <RefreshCcw size={18} />
      </button>

      {/* ----------------------------- */}
      {/* BACKGROUND SVG (Connections) */}
      {/* ----------------------------- */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="red-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="blue-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Chaos Lines */}
        <AnimatePresence>
          {isChaosOrFreeze && chaosLines.map((d, i) => (
            <motion.path
              key={`chaos-${i}`}
              d={d}
              fill="none"
              stroke="#ef4444"
              strokeWidth="1.5"
              filter="url(#red-glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: phase === "chaos" ? [0, 1, 1, 0] : 1, 
                opacity: phase === "freeze" ? 1 : [0, 0.8, 0],
                strokeDashoffset: phase === "chaos" ? [1000, 0] : 0
              }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              transition={{ 
                duration: 2, 
                repeat: phase === "chaos" ? Infinity : 0, 
                delay: i * 0.1, 
                ease: "linear" 
              }}
              style={{ strokeDasharray: "10 20" }}
            />
          ))}
        </AnimatePresence>

        {/* Perfect Lines */}
        <AnimatePresence>
          {!isChaosOrFreeze && perfectLines.map((d, i) => (
            <motion.path
              key={`perfect-${i}`}
              d={d}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              filter="url(#blue-glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1, ease: "easeInOut", delay: i * 0.1 }}
            />
          ))}
        </AnimatePresence>
      </svg>

      {/* ----------------------------- */}
      {/* HTML NODES */}
      {/* ----------------------------- */}
      {nodes.map((node) => {
        // Position targets
        const x = isChaosOrFreeze ? node.cx : node.px;
        const y = isChaosOrFreeze ? node.cy : (node.py || node.cy);
        const opacity = (!node.survives && !isChaosOrFreeze) ? 0 : 1;

        return (
          <motion.div
            key={node.id}
            initial={{ left: toPctX(node.cx), top: toPctY(node.cy), opacity: 1 }}
            animate={{ 
              left: toPctX(x), 
              top: toPctY(y), 
              opacity: opacity,
              scale: isChaosOrFreeze ? 0.9 : 1,
              borderColor: isChaosOrFreeze ? "rgba(239, 68, 68, 0.3)" : (node.isTarget ? "rgba(99, 102, 241, 0.8)" : "rgba(59, 130, 246, 0.4)"),
              backgroundColor: isChaosOrFreeze ? "rgba(20, 0, 0, 0.8)" : "rgba(10, 15, 30, 0.9)",
              boxShadow: isChaosOrFreeze ? "none" : "0 0 20px rgba(59, 130, 246, 0.15)"
            }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 border py-2 px-4 rounded-xl font-mono text-xs md:text-sm whitespace-nowrap backdrop-blur-md z-10 transition-colors duration-1000 ${node.isTarget ? 'border-2 text-white px-6 py-3 font-semibold' : 'text-gray-300'}`}
          >
            {node.label}
          </motion.div>
        );
      })}

      {/* ----------------------------- */}
      {/* UI OVERLAYS */}
      {/* ----------------------------- */}
      
      {/* Chaos Text */}
      <AnimatePresence>
        {isChaosOrFreeze && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute top-12 left-0 right-0 flex flex-col items-center pointer-events-none z-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Building Arnold materials...</h3>
            <p className="text-gray-500 text-lg">shouldn't look like this.</p>
            
            <div className="mt-8 flex items-center gap-6 text-red-500 font-mono text-sm bg-red-500/10 border border-red-500/20 px-6 py-2 rounded-full">
              <span>42 nodes</span>
              <span className="w-1 h-1 bg-red-500 rounded-full" />
              <span>127 connections</span>
              <span className="w-1 h-1 bg-red-500 rounded-full" />
              <span>5 minutes</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vanta Node Logo Appearance */}
      <AnimatePresence>
        {(phase === "transform" || phase === "perfect" || phase === "oneclick") && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 0.2, scale: 1, filter: "blur(0px)" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
          >
            <img src="/images/logo_arnold.png" alt="Vanta Logo Background" className="w-64 h-64 md:w-96 md:h-96 object-contain opacity-50 drop-shadow-[0_0_50px_rgba(59,130,246,0.8)] mix-blend-screen" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* One Click Typography */}
      <AnimatePresence>
        {phase === "oneclick" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-12 left-0 right-0 flex justify-center pointer-events-none z-30"
          >
            <div className="bg-[#050505]/80 backdrop-blur-2xl border border-white/10 px-10 py-6 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter flex gap-4">
                <span className="text-white">ONE</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-gradient bg-300%">
                  CLICK
                </span>
              </h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Gradient Animation Class for ONE CLICK */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .bg-300\\% {
          background-size: 300% 300%;
        }
      `}} />
    </div>
  );
}
