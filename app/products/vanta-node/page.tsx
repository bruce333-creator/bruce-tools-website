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
    <main className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-background overflow-hidden pb-32">
      
      {/* ----------------------------- */}
      {/* 1. HERO SECTION (Centered with Video) */}
      {/* ----------------------------- */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-40 pb-20 px-6 overflow-hidden">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center relative z-10 w-full max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-800 text-sm font-medium border border-green-200 mb-8">
            <Zap size={14} className="text-green-600" />
            Arnold Node Wrangler is now Vanta Node
          </div>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight mb-6 text-foreground">
            Vanta Node
          </h1>
          <p className="text-2xl md:text-3xl font-light text-text-secondary mb-12">
            Build complete Arnold shaders in seconds.
          </p>
          
          <a 
            href="https://eftools.gumroad.com/l/wjbxbt" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-blue-700 transition-all shadow-md"
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
          className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border border-border shadow-lg aspect-video bg-surface-secondary relative z-10"
        >
          <LazyVideo src="/videos/vanta-node-promo.mp4" />
        </motion.div>
      </section>

      {/* ----------------------------- */}
      {/* 3. THE SOLUTION (Drag. Drop. Done.) */}
      {/* ----------------------------- */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-4">
            Drag. Drop. Done.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden h-[400px] flex items-center justify-center">
          
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
                <div className="flex items-center gap-3 text-text-secondary bg-surface-secondary px-6 py-3 rounded-xl border border-border">
                  <FolderOpen size={20} className="text-foreground" />
                  <span className="font-mono text-sm">wood_color.jpg</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary bg-surface-secondary px-6 py-3 rounded-xl border border-border">
                  <FolderOpen size={20} className="text-foreground" />
                  <span className="font-mono text-sm">wood_roughness.jpg</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary bg-surface-secondary px-6 py-3 rounded-xl border border-border">
                  <FolderOpen size={20} className="text-foreground" />
                  <span className="font-mono text-sm">wood_normal.jpg</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary bg-surface-secondary px-6 py-3 rounded-xl border border-border">
                  <FolderOpen size={20} className="text-foreground" />
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
                className="w-full h-full border-2 border-dashed border-border rounded-2xl flex items-center justify-center bg-surface-secondary"
              >
                <div className="text-2xl font-medium text-text-secondary">Drop textures here</div>
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
                    className="flex items-center gap-4 text-xl font-medium text-foreground"
                  >
                    <CheckCircle className="text-foreground" size={28} />
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ----------------------------- */}
      {/* 4. SMART AO SETUP DIAGRAM */}
      {/* ----------------------------- */}
      <section className="py-32 px-6 bg-surface relative overflow-hidden border-t border-border">
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-center">Smart AO Integration</h2>
            <p className="text-text-secondary text-xl max-w-2xl font-light mx-auto text-center">
              Ambient Occlusion is automatically multiplied with Base Color. No manual setup required.
            </p>
          </div>

          <div className="w-full border border-border rounded-3xl bg-surface-secondary p-12 md:p-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 shadow-sm">
            
            {/* Left Column (Inputs) */}
            <div className="flex flex-col gap-12 relative w-full md:w-auto">
               <div className="hidden md:block absolute right-0 top-1/2 w-8 h-20 border-t-2 border-b-2 border-r-2 border-border -translate-y-1/2 translate-x-full rounded-r-xl" />
               
               <div className="bg-surface border border-border px-8 py-5 rounded-2xl font-mono text-sm relative z-10 shadow-sm text-center text-foreground">Base Color</div>
               <div className="bg-surface border border-border px-8 py-5 rounded-2xl font-mono text-sm relative z-10 shadow-sm text-center text-foreground">Ambient Occlusion</div>
            </div>

            {/* Mobile connecting line */}
            <div className="md:hidden w-1 h-8 bg-border" />

            {/* Center (Multiply) */}
            <div className="relative w-full md:w-auto text-center md:text-left">
               <div className="hidden md:block absolute right-0 top-1/2 w-8 h-0 border-t-2 border-border -translate-y-1/2 translate-x-full" />
               
               <div className="bg-surface border border-border px-8 py-5 rounded-2xl font-mono text-sm text-foreground shadow-sm relative z-10 inline-block font-medium">
                 Multiply
               </div>
            </div>

            {/* Mobile connecting line */}
            <div className="md:hidden w-1 h-8 bg-border" />

            {/* Right Column (Output) */}
            <div className="relative z-10 w-full md:w-auto text-center md:text-left">
              <div className="bg-foreground text-background border border-foreground px-10 py-6 rounded-2xl font-mono shadow-sm inline-block font-medium">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface border border-border rounded-3xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="bg-surface-secondary border border-border w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-foreground">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-foreground">{feat.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- */}
      {/* 7. FINAL CTA */}
      {/* ----------------------------- */}
      <section className="py-40 px-6 text-center relative border-t border-border bg-surface-secondary">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-8xl font-medium tracking-tight mb-8">
            Stop building materials.<br />
            <span className="text-text-secondary">Start creating.</span>
          </h2>
          
          <div className="mt-20 mb-12">
             <div className="text-2xl font-medium tracking-widest text-foreground uppercase mb-4">Vanta Node</div>
             <div className="text-text-secondary text-xl font-light">Available now. 9.99€</div>
          </div>

          <a 
            href="https://eftools.gumroad.com/l/wjbxbt" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-6 rounded-full text-xl font-medium hover:bg-blue-700 transition-all shadow-md"
          >
            Buy Now
            <ArrowRight size={24} />
          </a>
        </div>
      </section>

    </main>
  );
}
