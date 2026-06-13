"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="relative min-h-screen pt-40 pb-24 px-6 max-w-4xl mx-auto selection:bg-electricBlue/30 selection:text-white flex flex-col justify-center">
      
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-electricBlue/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-10 text-white">
            EF Tools
          </h1>
          
          {/* Logo */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-black/50 border border-glassBorder flex items-center justify-center overflow-hidden mb-10 shadow-[0_0_50px_rgba(255,255,255,0.05)] relative">
            <img src="/images/logo.png" alt="EF Tools Logo" className="w-full h-full object-cover absolute inset-0 z-20" />
          </div>

          <p className="text-xl text-gray-500 font-light tracking-wide">
            Created by <span className="text-white">Enzo Freminet</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8 text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl flex flex-col items-center"
        >
          <p>
            EF Tools is an independent project focused on building practical and elegant tools for Autodesk Maya artists.
          </p>
          <p>
            The goal is to simplify repetitive workflows and create production-ready solutions for modeling, look development, and rendering. By automating the tedious aspects of the pipeline, artists can focus entirely on what matters: the art.
          </p>
          <p className="text-gray-500 text-lg pt-8 border-t border-glassBorder/50 w-32 text-center">
            Lyon, France
          </p>
        </motion.div>
      </div>
    </main>
  );
}
