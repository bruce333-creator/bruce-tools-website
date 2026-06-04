"use client";

import { motion } from "framer-motion";
import { Download, PlayCircle } from "lucide-react";
import FloatingNodes from "./FloatingNodes";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-6">
      {/* Dynamic Hero Background */}
      <FloatingNodes />
      
      {/* Animated Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-electricBlue/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none z-0 animate-blob mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/3 pointer-events-none z-0 animate-blob mix-blend-screen animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 animate-blob mix-blend-screen animation-delay-4000" />
      
      {/* Fade out gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-6"
        >
          Build RenderMan Shaders <br className="hidden md:block" />
          <span className="text-electricBlue">Faster Than Ever</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Automate repetitive shader creation, texture assignment, displacement setup, viewport previews and layer workflows directly inside Maya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="https://brucetools.gumroad.com/l/xgvck"
            className="gumroad-button flex items-center gap-2 bg-electricBlue text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            <Download size={20} />
            Get RenderMan Node Wrangler
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="relative z-20 w-full max-w-5xl mx-auto mt-20"
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-glassBorder bg-glass backdrop-blur-xl shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
          </div>
          <video src="/videos/hero-demo.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </section>
  );
}
