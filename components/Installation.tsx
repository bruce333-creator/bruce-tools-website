"use client";

import { motion } from "framer-motion";
import { DownloadCloud, MousePointer2, CheckCircle2 } from "lucide-react";
import LazyVideo from "@/components/LazyVideo";

export default function Installation() {
  const steps = [
    { icon: <DownloadCloud size={32} className="text-electricBlue" />, title: "Download", text: "Get the latest release." },
    { icon: <MousePointer2 size={32} className="text-electricBlue" />, title: "Drag & Drop", text: "Drag the installer into the Maya viewport." },
    { icon: <CheckCircle2 size={32} className="text-electricBlue" />, title: "Ready", text: "Automatic shelf installation completes instantly." }
  ];

  return (
    <section className="py-32 px-6 border-t border-glassBorder">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold mb-16"
        >
          Installed in Seconds
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-8 rounded-3xl border border-glassBorder bg-glass flex flex-col items-center"
            >
              <div className="mb-6 p-4 rounded-full bg-white/5">
                {step.icon}
              </div>
              <h3 className="text-2xl font-medium mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl mx-auto aspect-video rounded-3xl border border-glassBorder bg-glass backdrop-blur-xl flex items-center justify-center overflow-hidden"
        >
           <LazyVideo src="/videos/installation-video.mp4" />
        </motion.div>
      </div>
    </section>
  );
}
