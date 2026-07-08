"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="relative min-h-screen pt-40 pb-24 px-6 max-w-4xl mx-auto flex flex-col justify-center">
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-10 text-foreground">
            EF Tools
          </h1>
          
          {/* Logo */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-surface border border-border flex items-center justify-center overflow-hidden mb-10 shadow-sm relative">
            <img src="/images/logo.png" alt="EF Tools Logo" className="w-full h-full object-cover absolute inset-0 z-20" />
          </div>

          <p className="text-xl text-text-secondary font-light tracking-wide">
            Created by <span className="text-foreground">Enzo Freminet</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8 text-xl md:text-2xl text-text-secondary font-light leading-relaxed max-w-3xl flex flex-col items-center"
        >
          <p>
            EF Tools is an independent project focused on building practical and elegant tools for Autodesk Maya artists.
          </p>
          <p>
            The goal is to simplify repetitive workflows and create production-ready solutions for modeling, look development, and rendering. By automating the tedious aspects of the pipeline, artists can focus entirely on what matters: the art.
          </p>
          <p className="text-text-secondary text-lg pt-8 border-t border-border w-32 text-center">
            Lyon, France
          </p>
        </motion.div>
      </div>
    </main>
  );
}
