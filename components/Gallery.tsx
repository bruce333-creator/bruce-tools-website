"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "gallery_01.jpg",
    "gallery_02.jpg",
    "gallery_03.jpg",
    "gallery_04.jpg"
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold mb-16 text-center"
        >
          See it in Action
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="aspect-video rounded-2xl border border-glassBorder bg-glass flex items-center justify-center overflow-hidden hover:border-electricBlue/50 transition-colors duration-500 cursor-pointer"
            >
              <img src={`/images/${img}`} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover opacity-40 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
