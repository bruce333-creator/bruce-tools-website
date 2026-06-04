"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Precise hotspot regions based on 953x1651 aspect ratio
const hotspots = [
  {
    id: "refresh",
    top: "17%", left: "79.5%", width: "15.5%", height: "3.6%",
    title: "Refresh",
    description: "Update the scene shaders list automatically to find existing materials."
  },
  {
    id: "dragdrop",
    top: "29%", left: "3.5%", width: "93%", height: "24.5%",
    title: "Drag & Drop Zone",
    description: "Instantly parse multiple texture files or entire folders. UDIMs and naming conventions are automatically detected."
  },
  {
    id: "viewport",
    top: "54%", left: "3.5%", width: "93%", height: "3.6%",
    title: "Viewport Preview",
    description: "Automatically sets up hardware texturing nodes so your materials look correct directly in the Maya viewport.",
    media: "/videos/viewport-preview.mp4"
  },
  {
    id: "build",
    top: "59%", left: "3.5%", width: "93%", height: "3.6%",
    title: "Build Shader",
    description: "Creates and wires the entire PxrSurface network with proper color spaces in a single click.",
    media: "/videos/build-shader.mp4"
  },
  {
    id: "assign",
    top: "63.8%", left: "3.5%", width: "93%", height: "3.6%",
    title: "Assign To Selection",
    description: "Quickly assign your newly built shader to all currently selected objects in your scene."
  },
  {
    id: "layer",
    top: "71.5%", left: "3.5%", width: "93%", height: "3.6%",
    title: "Layer Surface Section",
    description: "Expand to access advanced tools for building complex PxrLayerSurface materials."
  },
  {
    id: "lighting",
    top: "76.5%", left: "3.5%", width: "45%", height: "3.6%",
    title: "Default Lighting Setup",
    description: "Switches the engine to RenderMan, sets a 4K resolution (3840x2160), activates the XPU engine, and sets Max Samples to 256."
  },
  {
    id: "color",
    top: "76.5%", left: "51.5%", width: "45%", height: "3.6%",
    title: "Color Correction Workspace",
    description: "Forces the OCIO Maya2022-default color configuration and switches the view to Un-tone-mapped for accurate RenderMan LookDev."
  },
  {
    id: "feedback",
    top: "83%", left: "3.5%", width: "93%", height: "9%",
    title: "Output Feedback",
    description: "Real-time log of operations, warnings, and success messages."
  }
];

// Background Node Graph Component
const BackgroundNodeGraph = ({ activeHotspot }: { activeHotspot: string | null }) => {
  const isHovered = activeHotspot !== null;
  const strokeColor = isHovered ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.05)";

  const nodeColor = "rgba(211, 29, 29, 0.5)"; // Transparent red

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden md:block">
      <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="glow" x="-500%" y="-500%" width="1000%" height="1000%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Sub-graph 1: Left Side (Emerging from behind center image, lower down) */}
        <motion.g
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.path 
            d="M 450 500 C 300 500, 150 450, 50 450" 
            fill="none" 
            animate={{ stroke: strokeColor }}
            strokeWidth="2" 
          />
          <motion.path 
            d="M 450 700 C 300 700, 200 800, 100 800" 
            fill="none" 
            animate={{ stroke: strokeColor }}
            strokeWidth="2" 
          />
          <motion.path 
            d="M 100 800 C 50 800, 50 650, 100 600" 
            fill="none" 
            animate={{ stroke: strokeColor }}
            strokeWidth="2" 
          />
          <motion.circle cx="50" cy="450" r="8" fill={nodeColor} filter={isHovered ? "url(#glow)" : ""} />
          <motion.circle cx="100" cy="800" r="10" fill={nodeColor} filter={isHovered ? "url(#glow)" : ""} />
          <motion.circle cx="100" cy="600" r="6" fill={nodeColor} filter={isHovered ? "url(#glow)" : ""} />
        </motion.g>

        {/* Sub-graph 2: Right Side (Emerging from behind center image, lower down) */}
        <motion.g
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <motion.path 
            d="M 550 500 C 700 500, 850 450, 950 450" 
            fill="none" 
            animate={{ stroke: strokeColor }}
            strokeWidth="2" 
          />
          <motion.path 
            d="M 550 700 C 700 700, 800 800, 900 800" 
            fill="none" 
            animate={{ stroke: strokeColor }}
            strokeWidth="2" 
          />
          <motion.path 
            d="M 900 800 C 950 800, 950 650, 900 600" 
            fill="none" 
            animate={{ stroke: strokeColor }}
            strokeWidth="2" 
            strokeDasharray="4 4"
          />
          <motion.circle cx="950" cy="450" r="8" fill={nodeColor} filter={isHovered ? "url(#glow)" : ""} />
          <motion.circle cx="900" cy="800" r="12" fill={nodeColor} filter={isHovered ? "url(#glow)" : ""} />
          <motion.circle cx="900" cy="600" r="8" fill={nodeColor} filter={isHovered ? "url(#glow)" : ""} />
        </motion.g>
      </svg>
    </div>
  );
};

export default function Features() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const activeData = hotspots.find(h => h.id === activeHotspot);

  let cardX = mousePos.x + 20;
  let cardY = mousePos.y + 20;
  const cardWidth = 320;
  const cardHeight = 160;

  if (cardX + cardWidth > windowSize.width) {
    cardX = mousePos.x - cardWidth - 20;
  }
  if (cardY + cardHeight > windowSize.height) {
    cardY = mousePos.y - cardHeight - 20;
  }

  return (
    <section className="py-32 px-6 relative">
      <BackgroundNodeGraph activeHotspot={activeHotspot} />
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Explore the Interface
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Hover over the highlighted areas to discover how RenderMan Node Wrangler automates your workflow.
          </motion.p>
        </div>

        <div 
          className="relative w-full max-w-[500px] aspect-[953/1651] mx-auto rounded-xl overflow-hidden shadow-2xl border border-glassBorder bg-zinc-900/50 backdrop-blur-sm"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setActiveHotspot(null)}
        >
          {/* Main UI Screenshot */}
          <Image 
            src="/images/Renderman_UI_4K_02.png"
            alt="RenderMan Node Wrangler Interface"
            fill
            className="object-cover pointer-events-none"
            priority
          />

          {/* Hotspots */}
          {hotspots.map((hotspot) => (
            <div
              key={hotspot.id}
              className="absolute cursor-pointer transition-all duration-300"
              style={{
                top: hotspot.top,
                left: hotspot.left,
                width: hotspot.width,
                height: hotspot.height,
              }}
              onMouseEnter={() => setActiveHotspot(hotspot.id)}
              onClick={() => setActiveHotspot(hotspot.id)}
            >
              {/* Highlight Overlay */}
              <motion.div 
                className="w-full h-full rounded border-2 border-transparent bg-transparent"
                animate={{
                  backgroundColor: activeHotspot === hotspot.id ? "rgba(0, 13, 255, 0.15)" : "rgba(0, 13, 255, 0)",
                  borderColor: activeHotspot === hotspot.id ? "rgba(0, 13, 255, 0.5)" : "rgba(0, 13, 255, 0)",
                  boxShadow: activeHotspot === hotspot.id ? "0 0 20px rgba(0, 13, 255, 0.2)" : "0 0 0px rgba(0, 13, 255, 0)"
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Glass Card (Desktop only) */}
      <AnimatePresence>
        {activeData && windowSize.width > 768 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed z-50 pointer-events-none w-80 p-5 bg-black/70 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            style={{ 
              left: cardX, 
              top: cardY 
            }}
          >
            <h3 className="text-lg font-semibold text-white mb-2">{activeData.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">{activeData.description}</p>
            
            {activeData.media && (
              <div className="relative w-full h-32 rounded-lg overflow-hidden border border-white/5 bg-white/5">
                {activeData.media.endsWith('.mp4') ? (
                  <video 
                    src={activeData.media} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image 
                    src={activeData.media} 
                    alt={activeData.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Inline Card */}
      <AnimatePresence mode="wait">
        {activeData && windowSize.width <= 768 && (
          <motion.div
            key={activeData.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-[500px] mx-auto mt-6 p-5 bg-glass border border-glassBorder rounded-2xl backdrop-blur-xl relative z-20"
          >
            <h3 className="text-xl font-semibold text-white mb-2 text-electricBlue">{activeData.title}</h3>
            <p className="text-gray-300 mb-4">{activeData.description}</p>
            
            {activeData.media && (
              <div className="relative w-full h-48 rounded-lg overflow-hidden border border-white/5">
                {activeData.media.endsWith('.mp4') ? (
                  <video 
                    src={activeData.media} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image 
                    src={activeData.media} 
                    alt={activeData.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
