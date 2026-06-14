"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export default function LazyVideo({ src, className, ...props }: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "300px" });
  
  return (
    <div ref={containerRef} className={`relative w-full h-full bg-black/40 ${className || ''}`}>
      {isInView && (
        <video 
          src={src} 
          className="w-full h-full object-cover absolute inset-0" 
          autoPlay 
          loop 
          muted 
          playsInline 
          {...props}
        />
      )}
    </div>
  );
}
