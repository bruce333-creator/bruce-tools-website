"use client";

import { motion } from "framer-motion";
import { Download, Layers, Eye, Move, Lock, Sliders, ArrowRight, Zap } from "lucide-react";
import LazyVideo from "@/components/LazyVideo";

export default function UltimateRefTool() {
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
            Smart Reference Management
          </div>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight mb-6 text-foreground">
            Ultimate Ref Tool
          </h1>
          <p className="text-2xl md:text-3xl font-light text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Drag and drop references instantly into Maya. Automatic view detection and zero friction.
          </p>
          
          <a 
            href="https://eftools.gumroad.com/l/unypmtq" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-blue-700 transition-all shadow-md"
          >
            <Download size={20} />
            Get for Free
          </a>
        </motion.div>

        {/* Video Showcase inside Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-border shadow-lg aspect-video bg-surface-secondary relative z-10"
        >
          <LazyVideo src="/videos/ref-tool/hero-demo.mp4" />
        </motion.div>
      </section>

      {/* ----------------------------- */}
      {/* 2. FEATURES GRID */}
      {/* ----------------------------- */}
      <section className="py-32 px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">An Organized Workflow</h2>
          <p className="text-text-secondary text-xl font-light">Stop fighting image planes. Let the tool do the work.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {[
            { icon: <Eye size={24} />, title: "Auto View Detection", desc: "Name your file `car_front.jpg` and drop it in. The tool automatically detects the keyword and places it perfectly into your Front camera." },
            { icon: <Layers size={24} />, title: "Reference Layers", desc: "All dropped images are automatically assigned to a locked `References_Layer`. Keep your outliner perfectly clean without manual management." },
            { icon: <Sliders size={24} />, title: "Custom Opacity", desc: "Adjust the alpha gain of all your references globally or individually through a clean, native-feeling Maya UI window." },
            { icon: <Move size={24} />, title: "Auto Scaling", desc: "Images are automatically scaled to a unified 10-unit grid size, meaning your front, top, and side views will always perfectly align." },
            { icon: <Lock size={24} />, title: "Auto Locking", desc: "Once placed, image planes are locked so you don't accidentally select or move them while modeling. Unlock them anytime via the UI." },
            { icon: <Layers size={24} />, title: "Manage References", desc: "Global controls to instantly toggle visibility of all references or securely delete them and clean up their layers with a single click." }
          ].map((feat, i) => (
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
      </section>

      {/* ----------------------------- */}
      {/* 3. FINAL CTA */}
      {/* ----------------------------- */}
      <section className="py-40 px-6 text-center relative border-t border-border bg-surface-secondary">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
            Modeling without <br />
            <span className="text-text-secondary">distractions.</span>
          </h2>
          
          <div className="mt-16 mb-10">
             <div className="text-2xl font-medium tracking-widest text-foreground uppercase mb-4">Ultimate Ref Tool</div>
             <div className="text-text-secondary text-xl font-light">Free Forever.</div>
          </div>

          <a 
            href="https://eftools.gumroad.com/l/unypmtq" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-6 rounded-full text-xl font-medium hover:bg-blue-700 transition-all shadow-md"
          >
            Download Now
            <ArrowRight size={24} />
          </a>
        </div>
      </section>

    </main>
  );
}
