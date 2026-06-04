"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Problem() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold mb-6"
          >
            Stop wasting time on <span className="text-gray-500">manual setups</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Traditional Workflow */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl border border-glassBorder bg-glass backdrop-blur-md"
          >
            <h3 className="text-2xl font-medium mb-6 text-gray-400">Traditional Workflow</h3>
            <ul className="space-y-4 text-lg text-gray-500">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                Create PxrSurface
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                Create PxrTextures
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                Create PxrManifold
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                Connect everything manually
              </li>
            </ul>
          </motion.div>

          {/* Node Wrangler Workflow */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-3xl border border-electricBlue/30 bg-electricBlue/5 backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ArrowRight size={100} />
            </div>
            <h3 className="text-2xl font-medium mb-6 text-electricBlue">Node Wrangler</h3>
            <div className="flex items-center h-32">
              <p className="text-4xl font-semibold text-white">One click.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
