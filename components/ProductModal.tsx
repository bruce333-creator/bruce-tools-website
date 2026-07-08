"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, PlayCircle, Download } from "lucide-react";
import { Product } from "@/config/products";
import { useEffect, useState } from "react";
import LazyVideo from "./LazyVideo";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [activeImage, setActiveImage] = useState(0);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  if (!product) return null;

  const mediaItems = [];
  if (product.embeddedVideo) mediaItems.push({ type: "video", src: product.embeddedVideo });
  product.carouselImages.forEach(img => mediaItems.push({ type: "image", src: img }));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl max-h-[90vh] md:h-[640px] bg-surface border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-20 bg-surface/80 hover:bg-surface-secondary p-2 rounded-full text-text-secondary hover:text-foreground transition-colors backdrop-blur-md border border-border shadow-sm"
          >
            <X size={20} />
          </button>

          {/* Media Section */}
          <div className="w-full md:w-1/2 bg-surface-secondary relative min-h-[300px] md:min-h-full border-b md:border-b-0 md:border-r border-border">
            {mediaItems.length > 0 ? (
              <div className="w-full h-full relative">
                {mediaItems[activeImage].type === "video" ? (
                  <video src={mediaItems[activeImage].src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full relative">
                    <img src={mediaItems[activeImage].src} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                )}
                
                {/* Carousel Navigation */}
                {mediaItems.length > 1 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-surface/80 backdrop-blur-md p-2 rounded-full border border-border shadow-sm">
                    {mediaItems.map((_, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setActiveImage(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${activeImage === idx ? "bg-accent w-4" : "bg-text-secondary/40 hover:bg-text-secondary"}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-text-secondary">
                Media Placeholder
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 px-8 pt-8 pb-0 md:px-12 md:pt-12 md:pb-0 overflow-y-auto custom-scrollbar flex flex-col relative">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2 text-foreground">{product.name}</h2>
            <div className="mb-6">
              <span className="bg-surface-secondary border border-border text-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                {product.price}
              </span>
            </div>
            
            <p className="text-text-secondary mb-8 leading-relaxed text-lg">
              {product.shortDescription}
            </p>

            <div className="mb-8">
              <h3 className="text-foreground font-medium mb-4 flex items-center gap-2">
                 Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="text-foreground font-medium mb-4 flex items-center gap-2">
                Technical Details
              </h3>
              <ul className="space-y-3">
                {product.technicalDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-border mt-1.5 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sticky bottom-0 pt-6 pb-8 md:pb-12 bg-gradient-to-t from-surface via-surface to-transparent mt-auto z-20 -mx-8 px-8 md:-mx-12 md:px-12 flex flex-col gap-3">
              <a 
                href={`/docs/${product.id}`}
                className="w-full flex items-center justify-center gap-2 bg-surface border border-border text-foreground px-6 py-3 rounded-xl font-medium hover:bg-surface-secondary transition-colors"
              >
                View Documentation
              </a>
              <a 
                href={product.gumroadUrl}
                target="_blank" rel="noopener noreferrer"
                className="gumroad-button w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-xl font-medium text-lg hover:bg-blue-700 transition-all shadow-md"
              >
                <Download size={20} />
                {product.price === "FREE" ? "Download Free" : "Buy Now"}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
