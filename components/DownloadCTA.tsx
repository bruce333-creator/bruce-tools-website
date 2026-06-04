"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section className="py-40 px-6 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-electricBlue/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-semibold mb-8 tracking-tight"
        >
          Start Saving Hours <br /> Every Week
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a 
            href="https://brucetools.gumroad.com/l/xgvck"
            className="gumroad-button flex items-center gap-3 bg-electricBlue text-black px-10 py-5 rounded-full font-semibold text-xl hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 mx-auto shadow-[0_0_40px_rgba(0,13,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] w-fit"
          >
            <Download size={24} />
            Get RenderMan Node Wrangler
          </a>
        </motion.div>
      </div>
    </section>
  );
}
