"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, PlayCircle, Download } from "lucide-react";
import Image from "next/image";
import { Product } from "@/config/products";
import { useEffect, useState } from "react";

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

  const hasMedia = product.embeddedVideo || product.carouselImages.length > 0;
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
          className="absolute inset-0 bg-black/60 backdrop-blur-xl"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl max-h-[90vh] md:h-[640px] bg-[#111] border border-glassBorder rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-20 bg-black/50 hover:bg-black p-2 rounded-full text-gray-400 hover:text-white transition-colors backdrop-blur-md"
          >
            <X size={24} />
          </button>

          {/* Media Section */}
          <div className="w-full md:w-1/2 bg-black relative min-h-[300px] md:min-h-full">
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
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 backdrop-blur-md p-2 rounded-full">
                    {mediaItems.map((_, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setActiveImage(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${activeImage === idx ? "bg-white w-4" : "bg-white/40 hover:bg-white/80"}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-600 bg-gray-900">
                Media Placeholder
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">{product.name}</h2>
            <p className="text-xl font-medium text-electricBlue mb-6">{product.price}</p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              {product.shortDescription}
            </p>

            <div className="mb-8">
              <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                <PlayCircle size={18} className="text-electricBlue" /> Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-electricBlue mt-1.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                Technical Details
              </h3>
              <ul className="space-y-3">
                {product.technicalDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-500">
                    <div className="w-1 h-1 rounded-full bg-gray-600 mt-2 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sticky bottom-0 pt-4 bg-gradient-to-t from-[#111] via-[#111] to-transparent mt-auto">
              <a 
                href={product.gumroadUrl}
                className="gumroad-button w-full flex items-center justify-center gap-2 bg-electricBlue text-black px-6 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-black transition-all shadow-lg"
              >
                <Download size={20} />
                Get {product.name}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
