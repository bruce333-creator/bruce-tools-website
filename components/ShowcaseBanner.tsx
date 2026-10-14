"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ShowcaseItem {
  id: string;
  name: string;
  videoSrc: string;
  detailsPath: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: "rman-node",
    name: "Rman Node",
    videoSrc: "/videos/build-shader.mp4",
    detailsPath: "/products/renderman-node-wrangler",
  },
  {
    id: "ultimate-ref-tool",
    name: "Ultimate Ref Tool",
    videoSrc: "/videos/home/ultimate-ref-demo.mp4",
    detailsPath: "/products/ultimate-ref-tool",
  },
];

export default function ShowcaseBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = [useRef<HTMLVideoElement | null>(null), useRef<HTMLVideoElement | null>(null)];

  // Switch video when current video ends or after safety timer
  useEffect(() => {
    const nextVideo = videoRefs[activeIndex].current;
    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.play().catch(() => {});
    }

    // Safety timeout in case video does not fire onEnded (e.g. 10s cycle)
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseItems.length);
    }, 10000);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleVideoEnded = () => {
    setActiveIndex((prev) => (prev + 1) % showcaseItems.length);
  };

  const current = showcaseItems[activeIndex];

  return (
    <section id="showcase" className="w-full scroll-mt-24">
      <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#121212] aspect-video w-full group">
        
        {/* Banner Clickable Link to Active Product Details */}
        <Link 
          href={current.detailsPath}
          className="absolute inset-0 z-10 block"
          aria-label={`View ${current.name} details`}
        >
          {/* Layered Videos with smooth 1-second crossfade (fondu enchaîné) */}
          {showcaseItems.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <video
                key={item.id}
                ref={(el) => {
                  videoRefs[idx].current = el;
                }}
                src={item.videoSrc}
                muted
                playsInline
                onEnded={handleVideoEnded}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              />
            );
          })}

          {/* Dark gradient for legibility */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

          {/* Bottom Left: Plugin Name and subtle arrow - NO BUTTONS ON BOTTOM RIGHT */}
          <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 z-30 flex items-center gap-2 pointer-events-none">
            <span className="font-heading text-xl sm:text-2xl md:text-3xl font-medium text-white tracking-tight transition-all duration-500">
              {current.name}
            </span>
            <ArrowUpRight size={18} className="text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
        </Link>

      </div>
    </section>
  );
}
