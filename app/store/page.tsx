"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products, Product } from "@/config/products";
import ProductModal from "@/components/ProductModal";

export default function StorePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto selection:bg-indigo-500/30 selection:text-white">
      
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6"
        >
          The <span className="text-indigo-500">Store</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 font-light"
        >
          Professional tools designed for Maya artists.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-white/5 border border-glassBorder rounded-3xl overflow-hidden hover:bg-white/10 transition-colors flex flex-col p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
              {/* Logo on the left */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-2xl bg-black/50 border border-glassBorder overflow-hidden relative">
                {product.heroImage ? (
                  <img src={product.heroImage} alt={product.name} className="w-full h-full object-cover z-20 relative" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-600 p-2 text-center z-10">
                    Logo
                  </div>
                )}
              </div>
              
              {/* Title on the right */}
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">{product.name}</h2>
            </div>

            <div className="flex flex-col flex-1">
              <p className="text-gray-400 mb-8 flex-1 leading-relaxed">{product.shortDescription}</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-between mt-auto gap-4 sm:gap-0">
                <span className={`text-2xl font-medium ${product.price === "FREE" ? "text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.8)] animate-pulse font-bold" : "text-white"}`}>
                  {product.price}
                </span>
                
                <div className="flex gap-3 w-full sm:w-auto">
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
                  >
                    Details
                  </button>
                  <a 
                    href={product.gumroadUrl}
                    className="gumroad-button flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-indigo-500 text-black font-medium hover:bg-white transition-colors text-center"
                  >
                    {product.price === "FREE" ? "Download" : "Buy Now"}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </main>
  );
}
