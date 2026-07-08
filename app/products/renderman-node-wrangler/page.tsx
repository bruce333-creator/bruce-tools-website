"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { CheckCircle, Sliders, Box, Download, ArrowRight, MousePointerClick, Activity, Zap } from "lucide-react";
import LazyVideo from "@/components/LazyVideo";

const features = [
  { title: "Drag-and-Drop Installation", desc: "No complex setup. Just drop the script into Maya and it's ready to use.", icon: <MousePointerClick size={24} /> },
  { title: "Smart Texture Recognition", desc: "Automatically parses diffuse, specular, roughness, and normal maps from standard names.", icon: <Box size={24} /> },
  { title: "Interactive Viewport Previews", desc: "Instantly updates Viewport 2.0 representations to accurately reflect your RenderMan materials.", icon: <Activity size={24} /> },
  { title: "Conditional Displacement", desc: "Automatically detects height maps and sets up PxrDisplace nodes without manual wiring.", icon: <Sliders size={24} /> }
];

export default function RenderManWranglerPage() {
  const [dragPhase, setDragPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDragPhase((p) => (p + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-background overflow-hidden pb-32">
      
      {/* ----------------------------- */}
      {/* 1. HERO SECTION */}
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
            Seamless RenderMan Integration
          </div>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight mb-6 text-foreground">
            RenderMan Wrangler
          </h1>
          <p className="text-2xl md:text-3xl font-light text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Automate repetitive PxrSurface creation and shading workflows directly inside Maya.
          </p>
          
          <a 
            href="https://eftools.gumroad.com/l/xgvck" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-blue-700 transition-all shadow-md"
          >
            Buy Now — 9.99€
            <ArrowRight size={20} />
          </a>
        </motion.div>

        {/* Video Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border border-border shadow-lg aspect-video bg-surface-secondary relative z-10"
        >
          <LazyVideo src="/videos/home/renderman-demo.mp4" />
        </motion.div>
      </section>

      {/* ----------------------------- */}
      {/* 2. INTERACTIVE DEMO */}
      {/* ----------------------------- */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4">
            Faster Shading. <br/> Zero clicks.
          </h2>
          <p className="text-text-secondary text-xl font-light">
            Like Vanta Node, but specifically engineered for Pixar's RenderMan architecture.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden h-[400px] flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {dragPhase === 0 && (
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

            {dragPhase >= 1 && (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-5"
              >
                {['PxrSurface Generated', 'PxrTexture Connected', 'PxrDisplace Configured'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: dragPhase > index ? 1 : 0, x: dragPhase > index ? 0 : -20 }}
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
      {/* 3. FEATURES GRID */}
      {/* ----------------------------- */}
      <section className="py-32 px-6 bg-surface border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Key Features</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-3xl p-10 hover:shadow-md transition-shadow"
              >
                <div className="bg-surface-secondary border border-border w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-foreground">
                  {feat.icon}
                </div>
                <h3 className="text-2xl font-medium mb-4 text-foreground">{feat.title}</h3>
                <p className="text-text-secondary text-lg leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- */}
      {/* 4. FINAL CTA */}
      {/* ----------------------------- */}
      <section className="py-40 px-6 text-center relative border-t border-border bg-surface-secondary">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
            Accelerate your <br />
            <span className="text-text-secondary">RenderMan workflow.</span>
          </h2>
          
          <div className="mt-16 mb-10">
             <div className="text-2xl font-medium tracking-widest text-foreground uppercase mb-4">Node Wrangler</div>
             <div className="text-text-secondary text-xl font-light">Available now. 9.99€</div>
          </div>

          <a 
            href="https://eftools.gumroad.com/l/xgvck" 
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
