"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  CheckCircle, 
  Zap, 
  Box, 
  Layers, 
  Sliders, 
  Monitor,
  ArrowRight,
  FileImage,
  FolderOpen
} from "lucide-react";
import LazyVideo from "@/components/LazyVideo";

// -----------------------------
// Features Data
// -----------------------------
const features = [
  { title: "Automatic Texture Detection", desc: "Recognizes common naming conventions automatically.", icon: <FileImage size={24} /> },
  { title: "One Click Shader Creation", desc: "Creates complete Arnold materials instantly.", icon: <Zap size={24} /> },
  { title: "Ambient Occlusion Support", desc: "AO is automatically multiplied with Base Color.", icon: <Layers size={24} /> },
  { title: "Displacement Support", desc: "Creates displacement networks automatically.", icon: <Box size={24} /> },
  { title: "Material Presets", desc: "Generic PBR, Metal, Plastic, Glass, Skin, Car Paint.", icon: <Sliders size={24} /> },
  { title: "4K Render Setup", desc: "Automatically switches Arnold to GPU and sets 4K resolution.", icon: <Monitor size={24} /> }
];

export default function VantaNodePage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Drag Drop Animation State
  const [dragPhase, setDragPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDragPhase((p) => (p + 1) % 6);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-violet-500/30 overflow-hidden">
      
      {/* ----------------------------- */}
      {/* 1. HERO SECTION (Centered with Video) */}
      {/* ----------------------------- */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-40 pb-20 px-6 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>
        
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-500/10 rounded-full blur-[150px] pointer-events-none z-0" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center relative z-10 w-full max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-500 text-sm font-medium border border-violet-500/20 mb-8">
            <Zap size={14} />
            Arnold Node Wrangler is now Vanta Node
          </div>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8">
            VANTA <span className="text-violet-500">NODE</span>
          </h1>
          <p className="text-2xl md:text-4xl font-medium text-gray-200 mb-6">
            Build complete Arnold shaders in seconds.
          </p>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Stop building materials manually. Start creating.
          </p>
          
          <a 
            href="https://eftools.gumroad.com/l/wjbxbt" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
          >
            Buy Now — 9.99€
            <ArrowRight size={20} />
          </a>
        </motion.div>

        {/* Video Showcase inside Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border border-glassBorder shadow-[0_0_80px_rgba(0,0,0,0.4)] aspect-video bg-[#0a0a0a] relative z-10"
        >
          <LazyVideo src="/videos/vanta-node-promo.mp4" />
        </motion.div>
      </section>

      {/* ----------------------------- */}
      {/* 3. THE SOLUTION (Drag. Drop. Done.) */}
      {/* ----------------------------- */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Drag. Drop. <span className="text-violet-500">Done.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-[#0a0a0a] border border-glassBorder rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden h-[400px] flex items-center justify-center">
          
          <AnimatePresence mode="popLayout">
            {/* Phase 0: Folder with files */}
            {dragPhase === 0 && (
              <motion.div 
                key="files"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: 100 }}
                className="flex flex-col gap-3"
              >
                <div className="flex items-center gap-3 text-gray-300 bg-white/5 px-6 py-3 rounded-xl border border-glassBorder/50">
                  <FolderOpen size={20} className="text-violet-500" />
                  <span className="font-mono text-sm">wood_color.jpg</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 bg-white/5 px-6 py-3 rounded-xl border border-glassBorder/50">
                  <FolderOpen size={20} className="text-violet-500" />
                  <span className="font-mono text-sm">wood_roughness.jpg</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 bg-white/5 px-6 py-3 rounded-xl border border-glassBorder/50">
                  <FolderOpen size={20} className="text-violet-500" />
                  <span className="font-mono text-sm">wood_normal.jpg</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 bg-white/5 px-6 py-3 rounded-xl border border-glassBorder/50">
                  <FolderOpen size={20} className="text-violet-500" />
                  <span className="font-mono text-sm">wood_ao.jpg</span>
                </div>
              </motion.div>
            )}

            {/* Phase 1: Dropzone */}
            {dragPhase === 1 && (
              <motion.div
                key="dropzone"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="w-full h-full border-2 border-dashed border-violet-500/50 rounded-2xl flex items-center justify-center bg-violet-500/5"
              >
                <div className="text-2xl font-medium text-violet-500">Drop textures here</div>
              </motion.div>
            )}

            {/* Phase 2+: Success Checks */}
            {dragPhase >= 2 && (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-5"
              >
                {['Base Color', 'Roughness', 'Normal', 'Ambient Occlusion'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: dragPhase > index + 1 ? 1 : 0, x: dragPhase > index + 1 ? 0 : -20 }}
                    className="flex items-center gap-4 text-xl font-medium text-gray-200"
                  >
                    <CheckCircle className="text-emerald-500" size={28} />
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ----------------------------- */}
      {/* 4. SMART AO SETUP DIAGRAM (Refactored layout) */}
      {/* ----------------------------- */}
      <section className="py-32 px-6 bg-[#030303] relative overflow-hidden border-t border-glassBorder">
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Smart AO Integration</h2>
            <p className="text-gray-400 text-xl max-w-2xl font-light">
              Ambient Occlusion is automatically multiplied with Base Color. No manual setup required.
            </p>
          </div>

          <div className="w-full border border-glassBorder rounded-3xl bg-black/50 p-12 md:p-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 shadow-2xl">
            
            {/* Left Column (Inputs) */}
            <div className="flex flex-col gap-12 relative w-full md:w-auto">
               {/* Pure CSS connecting lines for desktop */}
               <div className="hidden md:block absolute right-0 top-1/2 w-8 h-20 border-t-2 border-b-2 border-r-2 border-violet-500/40 -translate-y-1/2 translate-x-full rounded-r-xl" />
               
               <div className="bg-[#111] border border-glassBorder px-8 py-5 rounded-2xl font-mono text-sm relative z-10 shadow-lg text-center">Base Color</div>
               <div className="bg-[#111] border border-glassBorder px-8 py-5 rounded-2xl font-mono text-sm relative z-10 shadow-lg text-center">Ambient Occlusion</div>
            </div>

            {/* Mobile connecting line */}
            <div className="md:hidden w-1 h-8 bg-violet-500/40" />

            {/* Center (Multiply) */}
            <div className="relative w-full md:w-auto text-center md:text-left">
               {/* Pure CSS connecting line for desktop */}
               <div className="hidden md:block absolute right-0 top-1/2 w-8 h-0 border-t-2 border-violet-500/40 -translate-y-1/2 translate-x-full" />
               
               <div className="bg-violet-500/10 border border-violet-500/50 px-8 py-5 rounded-2xl font-mono text-sm text-violet-500 shadow-[0_0_30px_rgba(99,102,241,0.2)] relative z-10 inline-block">
                 Multiply
               </div>
            </div>

            {/* Mobile connecting line */}
            <div className="md:hidden w-1 h-8 bg-violet-500/40" />

            {/* Right Column (Output) */}
            <div className="relative z-10 w-full md:w-auto text-center md:text-left">
              <div className="bg-gradient-to-r from-[#111] to-[#222] border border-glassBorder px-10 py-6 rounded-2xl font-mono shadow-xl inline-block">
                aiStandardSurface
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------------------- */}
      {/* 5. FEATURES GRID */}
      {/* ----------------------------- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-glassBorder rounded-3xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-white">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feat.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- */}
      {/* 6. COMPARISON TABLE */}
      {/* ----------------------------- */}
      <section className="py-32 px-6 border-t border-glassBorder bg-black/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">The Difference</h2>
          
          <div className="bg-[#0a0a0a] rounded-3xl border border-glassBorder overflow-hidden shadow-2xl">
            <div className="grid grid-cols-3 border-b border-glassBorder bg-white/5 p-6 md:p-8">
              <div className="font-medium text-gray-400">Task</div>
              <div className="font-medium text-center text-gray-500">Traditional</div>
              <div className="font-semibold text-center text-violet-500">VANTA NODE</div>
            </div>
            
            {[
              { task: "Create aiStandardSurface", old: "Manual", new: "Automatic" },
              { task: "Connect Textures", old: "Manual", new: "Automatic" },
              { task: "AO Setup", old: "Manual", new: "Automatic" },
              { task: "Displacement Setup", old: "Manual", new: "Automatic" },
              { task: "Build Time", old: "Minutes", new: "Seconds" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-glassBorder/50 p-6 md:p-8 last:border-0 hover:bg-white/5 transition-colors">
                <div className="text-gray-300 font-medium">{row.task}</div>
                <div className="text-center text-gray-500 font-mono">{row.old}</div>
                <div className="text-center text-white font-medium flex items-center justify-center gap-2">
                  <CheckCircle size={20} className="text-violet-500" />
                  <span className="hidden md:inline">{row.new}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- */}
      {/* 7. FINAL CTA */}
      {/* ----------------------------- */}
      <section className="py-40 px-6 text-center relative border-t border-glassBorder bg-gradient-to-b from-transparent to-violet-500/5">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
            Stop building materials.<br />
            <span className="text-gray-400">Start creating.</span>
          </h2>
          
          <div className="mt-20 mb-12">
             <div className="text-2xl font-bold tracking-widest text-violet-500 uppercase mb-4">Vanta Node</div>
             <div className="text-gray-400 text-xl font-light">Available now. 9.99€</div>
          </div>

          <a 
            href="https://eftools.gumroad.com/l/wjbxbt" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-12 py-6 rounded-full text-xl font-semibold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            Buy Now
            <ArrowRight size={24} />
          </a>
        </div>
      </section>

    </main>
  );
}
