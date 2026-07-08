"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products, Product } from "@/config/products";
import ProductModal from "@/components/ProductModal";
import Image from "next/image";

export default function StorePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <main className="relative min-h-screen pt-32 pb-32 px-6 max-w-7xl mx-auto selection:bg-accent selection:text-background text-foreground">
      
      <div className="mb-24 md:mb-32">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-medium tracking-tight mb-6"
        >
          Tools Catalog
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-text-secondary font-light max-w-2xl"
        >
          Professional plugins and scripts designed to accelerate your workflow in Autodesk Maya.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
            className="group flex flex-col"
          >
            {/* Visual Header */}
            <div 
              className="relative aspect-[4/3] w-full bg-surface-secondary border border-border rounded-3xl overflow-hidden mb-8 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {product.heroImage ? (
                <Image 
                  src={product.heroImage} 
                  alt={product.name} 
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out" 
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-text-secondary">
                  Product Preview
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className="flex flex-col flex-1 px-2">
              <div className="flex justify-between items-start gap-4 mb-4">
                <h2 className="text-3xl font-medium tracking-tight">{product.name}</h2>
                <span className="bg-surface-secondary border border-border px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap mt-1">
                  {product.price}
                </span>
              </div>

              <p className="text-lg text-text-secondary mb-8 leading-relaxed flex-1">
                {product.shortDescription}
              </p>
              
              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <button 
                  onClick={() => setSelectedProduct(product)}
                  className="px-6 py-3 rounded-full bg-surface border border-border text-foreground font-medium hover:bg-surface-secondary transition-colors"
                >
                  View Details
                </button>
                <a 
                  href={product.gumroadUrl}
                  target="_blank" rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  {product.price === "FREE" ? "Get for free" : "Buy Now"}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </main>
  );
}
