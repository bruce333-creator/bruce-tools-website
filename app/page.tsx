"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/config/products";
import Image from "next/image";

export default function Home() {
  const topProducts = products.slice(0, 2);

  return (
    <main className="relative min-h-screen pt-32 pb-20 overflow-hidden text-white selection:bg-electricBlue/30 selection:text-white">
      {/* Background Effect */}
      <div className="absolute top-1/4 left-1/2 w-[800px] h-[800px] bg-electricBlue/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-semibold tracking-tighter mb-6"
        >
          Tools for <br className="hidden md:block" />
          <span className="text-electricBlue">Modern Maya Artists</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Practical, elegant, and production-ready solutions for modeling, look development, and rendering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link href="/store" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-electricBlue hover:text-white transition-all duration-300">
            Explore the Store <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-12">
          {topProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 bg-white/5 border border-glassBorder rounded-3xl p-8 md:p-12 backdrop-blur-sm`}
            >
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">{product.name}</h2>
                <p className="text-xl text-gray-400 font-light">{product.shortDescription}</p>
                <div className="pt-4 flex gap-4">
                  <Link href={product.detailsPath} className="inline-flex items-center gap-2 bg-electricBlue text-black px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all">
                    Learn More
                  </Link>
                  <Link href="/store" className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all">
                    {product.price === "FREE" ? "Get FREE" : `Buy ${product.price}`}
                  </Link>
                </div>
              </div>
              
              <div className="flex-1 w-full relative aspect-video rounded-xl overflow-hidden bg-black/50 border border-glassBorder">
                {product.embeddedVideo ? (
                  <video src={product.embeddedVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    Image/Video Placeholder
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Link href="/store" className="inline-flex items-center gap-2 text-electricBlue hover:text-white transition-colors text-lg font-medium">
            View all products <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
