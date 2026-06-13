"use client";

import { motion } from "framer-motion";
import { Download, Layers, Eye, Move, Lock, Sliders } from "lucide-react";
import Link from "next/link";

export default function UltimateRefTool() {
  return (
    <main className="relative min-h-screen text-white selection:bg-electricBlue/30 selection:text-white overflow-hidden pt-32 pb-24">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Hero Section */}
        <section className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-purple-500/10 border border-purple-500/20 text-purple-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          >
            New Release
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-semibold tracking-tighter mb-6"
          >
            Ultimate <span className="text-purple-400">Ref Tool</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light"
          >
            Drag and drop references instantly into Maya. Automatic view detection, organized layer management, and zero friction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="https://eftools.gumroad.com/l/unypmtq" className="gumroad-button flex items-center gap-2 bg-white text-black px-10 py-5 rounded-full font-semibold text-xl hover:bg-purple-400 hover:text-black hover:scale-105 transition-all shadow-[0_0_30px_rgba(192,132,252,0.4)]">
              <Download size={24} />
              Get for <span className="font-bold text-purple-600 bg-purple-100 px-2 py-0.5 rounded uppercase ml-1 animate-pulse">Free</span>
            </a>
          </motion.div>

          {/* Hero Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20 relative aspect-video rounded-2xl overflow-hidden border border-glassBorder bg-black shadow-2xl max-w-5xl mx-auto"
          >
            <video src="/videos/ref-tool/hero-demo.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">An Organized Workflow</h2>
            <p className="text-gray-400 mt-4 text-lg">Stop fighting image planes. Let the tool do the work.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <div className="bg-white/5 border border-glassBorder rounded-3xl p-8 hover:bg-white/10 transition-colors">
              <div className="bg-purple-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-purple-400 mb-6">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Auto View Detection</h3>
              <p className="text-gray-400 leading-relaxed">
                Name your file `car_front.jpg` and drop it in. The tool automatically detects the keyword and places it perfectly into your Front camera.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 border border-glassBorder rounded-3xl p-8 hover:bg-white/10 transition-colors">
              <div className="bg-emerald-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Reference Layers</h3>
              <p className="text-gray-400 leading-relaxed">
                All dropped images are automatically assigned to a locked `References_Layer`. Keep your outliner perfectly clean without manual management.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 border border-glassBorder rounded-3xl p-8 hover:bg-white/10 transition-colors">
              <div className="bg-electricBlue/20 w-12 h-12 rounded-xl flex items-center justify-center text-electricBlue mb-6">
                <Sliders size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Custom Opacity</h3>
              <p className="text-gray-400 leading-relaxed">
                Adjust the alpha gain of all your references globally or individually through a clean, native-feeling Maya UI window.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/5 border border-glassBorder rounded-3xl p-8 hover:bg-white/10 transition-colors">
              <div className="bg-pink-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-pink-400 mb-6">
                <Move size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Auto Scaling</h3>
              <p className="text-gray-400 leading-relaxed">
                Images are automatically scaled to a unified 10-unit grid size, meaning your front, top, and side views will always perfectly align.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/5 border border-glassBorder rounded-3xl p-8 hover:bg-white/10 transition-colors">
              <div className="bg-yellow-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-yellow-400 mb-6">
                <Lock size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Auto Locking</h3>
              <p className="text-gray-400 leading-relaxed">
                Once placed, image planes are locked so you don't accidentally select or move them while modeling. Unlock them anytime via the UI.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/5 border border-glassBorder rounded-3xl p-8 hover:bg-white/10 transition-colors">
              <div className="bg-red-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-red-400 mb-6">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Manage References</h3>
              <p className="text-gray-400 leading-relaxed">
                Global controls to instantly toggle visibility of all references or securely delete them and clean up their layers with a single click.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
