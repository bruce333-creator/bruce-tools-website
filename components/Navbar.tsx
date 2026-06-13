"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Box, Image as ImageIcon, Briefcase, Wrench } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/40 backdrop-blur-md border-b border-glassBorder py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white z-50 flex items-center gap-3">
          <img src="/images/logo.png" alt="EF Tools Logo" className="w-8 h-8 object-contain" />
          EF Tools
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors py-2">
              Products <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-black/80 backdrop-blur-xl border border-glassBorder rounded-2xl shadow-2xl p-2 overflow-hidden"
                >
                  <Link href="/products/renderman-node-wrangler" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <div className="bg-electricBlue/10 p-2 rounded-lg text-electricBlue group-hover:scale-110 transition-transform">
                      <Box size={18} />
                    </div>
                    <div>
                      <div className="text-white font-medium mb-1">RenderMan Wrangler</div>
                      <div className="text-xs text-gray-400">Automated shader networks</div>
                    </div>
                  </Link>
                  <Link href="/products/ultimate-ref-tool" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <div className="bg-purple-500/10 p-2 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                      <ImageIcon size={18} />
                    </div>
                    <div>
                      <div className="text-white font-medium mb-1">Ultimate Ref Tool</div>
                      <div className="text-xs text-gray-400">Smart reference management</div>
                    </div>
                  </Link>
                  <Link href="/store" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">
                      <Wrench size={18} />
                    </div>
                    <div>
                      <div className="text-white font-medium mb-1">Arnold & Maya Tools</div>
                      <div className="text-xs text-gray-400">More productivity tools</div>
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors py-2">
            Portfolio
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors py-2">
            About
          </Link>
          <Link href="/help" className="text-gray-300 hover:text-white transition-colors py-2">
            Help
          </Link>
        </div>

        <div className="hidden md:flex">
          <Link href="/store" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors backdrop-blur-md">
            Store
          </Link>
        </div>
      </div>
    </nav>
  );
}
