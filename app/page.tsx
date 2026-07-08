"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Workflow, Box, Zap } from "lucide-react";
import { products } from "@/config/products";
import Image from "next/image";
import LazyVideo from "@/components/LazyVideo";
import WordRotator from "@/components/ui/word-rotator";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden selection:bg-accent selection:text-background pb-32">
      
      {/* =========================================
          SECTION 1: HERO
          ========================================= */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-40 pb-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.1] mb-8 flex flex-col items-center gap-2 md:gap-4">
            <span>Tools that remove the</span>
            <WordRotator words={["repetitive", "tedious", "boring", "manual", "slow"]} className="font-bold" />
            <span>parts of Maya.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-text-secondary max-w-2xl font-light leading-relaxed mb-12"
        >
          Professional workflows for modeling, reference management, and automated look development. Built for modern artists.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="/store" className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            Explore the tools
          </Link>
          <Link href="/portfolio" className="text-foreground px-8 py-4 rounded-full font-medium text-lg hover:bg-surface-secondary transition-colors flex items-center gap-2">
            View portfolio <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>


      {/* =========================================
          SECTION 2: PRODUCT SHOWCASES
          ========================================= */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-24 flex flex-col gap-32">
        {products.map((product, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-24`}
            >
              {/* Text Side */}
              <div className="flex-1 space-y-8">
                <div>
                  <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 text-foreground">
                    {product.name}
                  </h2>
                  <p className="text-2xl text-text-secondary font-light leading-snug">
                    {product.shortDescription}
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {product.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary text-lg">
                      <Check size={20} className="text-foreground mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link href={product.detailsPath} className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                    Learn more
                  </Link>
                  <a href={product.gumroadUrl} target="_blank" rel="noopener noreferrer" className="bg-surface-secondary text-foreground px-6 py-3 rounded-full font-medium hover:bg-border transition-colors">
                    {product.price === "FREE" ? "Get for free" : `Buy ${product.price}`}
                  </a>
                </div>
              </div>

              {/* Media Side */}
              <div className="flex-1 w-full bg-surface-secondary rounded-3xl overflow-hidden aspect-[4/3] border border-border shadow-sm relative">
                {product.embeddedVideo ? (
                  <div className="w-full h-full object-cover">
                     <LazyVideo src={product.embeddedVideo} />
                  </div>
                ) : (
                  <Image 
                    src={product.heroImage || product.carouselImages[0]} 
                    alt={product.name} 
                    fill 
                    className="object-cover"
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </section>


      {/* =========================================
          SECTION 3: INTERACTIVE PROBLEM / SOLUTION
          ========================================= */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">From chaos to order.</h2>
          <p className="text-xl text-text-secondary font-light max-w-2xl mx-auto">
            Stop manually connecting shader networks. Our tools automatically detect textures, build standard surface nodes, and map everything correctly in seconds.
          </p>
        </div>

        <div className="w-full bg-surface rounded-3xl border border-border shadow-sm p-8 md:p-16 flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden">
          {/* Chaos Side */}
          <div className="relative w-64 h-64 flex-shrink-0">
             {/* Mock chaotic nodes */}
             {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`chaos-${i}`}
                  animate={{ 
                    x: [Math.random() * 20 - 10, Math.random() * 40 - 20, Math.random() * 20 - 10],
                    y: [Math.random() * 20 - 10, Math.random() * 40 - 20, Math.random() * 20 - 10],
                  }}
                  transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bg-surface border border-border rounded-lg shadow-sm p-3 w-24 text-[10px] text-text-secondary font-mono flex items-center justify-center"
                  style={{
                    left: `${Math.random() * 70}%`,
                    top: `${Math.random() * 70}%`,
                    zIndex: Math.floor(Math.random() * 10)
                  }}
                >
                  node_{i}.out
                </motion.div>
             ))}
             {/* Mock messy connection lines (SVG) */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-border stroke-1" fill="none">
                <path d="M 50 50 Q 150 20 200 150 T 50 200" />
                <path d="M 100 100 Q 50 150 180 80" />
             </svg>
          </div>

          {/* Arrow */}
          <div className="text-border">
            <ArrowRight size={40} className="rotate-90 md:rotate-0" />
          </div>

          {/* Order Side */}
          <div className="relative w-80 h-64 flex-shrink-0 flex items-center justify-center">
            {/* Structured Nodes */}
            <div className="flex gap-8 items-center">
              <div className="flex flex-col gap-4">
                <div className="bg-surface border border-border rounded-lg shadow-sm p-3 w-24 text-[10px] text-foreground font-mono font-medium text-center">base_color</div>
                <div className="bg-surface border border-border rounded-lg shadow-sm p-3 w-24 text-[10px] text-foreground font-mono font-medium text-center">normal_map</div>
                <div className="bg-surface border border-border rounded-lg shadow-sm p-3 w-24 text-[10px] text-foreground font-mono font-medium text-center">roughness</div>
              </div>
              <div className="w-16 border-t-2 border-accent"></div>
              <div className="bg-foreground text-background border border-foreground rounded-lg shadow-md p-4 w-32 text-xs font-mono font-medium text-center">
                aiStandardSurface
              </div>
            </div>
            {/* Straight lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-accent stroke-[2]" fill="none">
              <path d="M 96 60 L 128 60 L 128 128 L 192 128" />
              <path d="M 96 128 L 192 128" />
              <path d="M 96 196 L 128 196 L 128 128 L 192 128" />
            </svg>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: SIMPLE WORKFLOW
          ========================================= */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-32 border-t border-border/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col gap-6">
            <div className="text-sm font-bold text-text-secondary tracking-widest uppercase">Step 1</div>
            <h3 className="text-4xl font-medium tracking-tight">Drop.</h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              Drag and drop your texture sets or references directly into the Maya viewport. No manual importing or file browsing.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-sm font-bold text-text-secondary tracking-widest uppercase">Step 2</div>
            <h3 className="text-4xl font-medium tracking-tight">Build.</h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              The tool instantly analyzes naming conventions, creates the correct nodes, and connects everything automatically.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-sm font-bold text-text-secondary tracking-widest uppercase">Step 3</div>
            <h3 className="text-4xl font-medium tracking-tight">Create.</h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              Your setup is production-ready immediately. Spend your time actually making art, not configuring parameters.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: COMPARISON
          ========================================= */}
      <section className="relative w-full bg-surface py-32 border-t border-b border-border/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-20 text-center">A better way to work.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            <div className="flex flex-col gap-8">
              <h3 className="text-xl font-medium text-text-secondary border-b border-border pb-4">Manual Workflow</h3>
              <ul className="space-y-6 text-text-secondary text-lg">
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-border"></div> Repetitive node creation</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-border"></div> Manual texture configuration</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-border"></div> Constant color space fixing</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-border"></div> Messy reference organization</li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h3 className="text-xl font-medium text-foreground border-b border-accent pb-4">EF Tools Workflow</h3>
              <ul className="space-y-6 text-foreground text-lg font-medium">
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Instant node network generation</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Automatic texture detection</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Perfect color space management</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> One-click reference layout</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: STORE PREVIEW
          ========================================= */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-32">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">The toolset.</h2>
          <Link href="/store" className="hidden md:flex items-center gap-2 text-foreground font-medium hover:text-text-secondary transition-colors">
            View all products <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={product.detailsPath} className="group flex flex-col gap-4">
              <div className="relative aspect-[4/3] bg-surface-secondary rounded-2xl overflow-hidden border border-border">
                <Image 
                  src={product.heroImage} 
                  alt={product.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-foreground">{product.name}</h3>
                  <span className="text-sm font-medium text-text-secondary">{product.price}</span>
                </div>
                <p className="text-sm text-text-secondary line-clamp-1">{product.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <Link href="/store" className="inline-flex items-center gap-2 text-foreground font-medium hover:text-text-secondary transition-colors">
            View all products <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}
