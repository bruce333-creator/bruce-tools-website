"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Box, Image as ImageIcon, Briefcase, Wrench, Menu, X } from "lucide-react";
import NavHeader from "@/components/ui/nav-header";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-glassBorder py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="z-50 flex items-center hover:opacity-80 transition-opacity">
          <img src="/images/logo_transparent.png" alt="EF Tools Logo" className="h-10 w-auto object-contain" />
        </Link>

        <NavHeader />

        <div className="hidden md:flex">
          <Link href="/store" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors backdrop-blur-md">
            Store
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(true)} className="text-text-secondary hover:text-foreground p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm md:hidden flex justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-3/4 max-w-sm h-full bg-surface border-l border-glassBorder shadow-2xl p-6 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-semibold text-foreground">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-text-secondary hover:text-foreground p-2 bg-surface-secondary rounded-full">
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex flex-col gap-6 text-lg font-medium text-text-secondary overflow-y-auto">
                <Link href="/store" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">Store</Link>
                
                <div className="flex flex-col gap-3">
                  <span className="text-sm text-text-secondary/60 uppercase tracking-wider font-bold">Products</span>
                  <Link href="/products/vanta-node" onClick={() => setMobileMenuOpen(false)} className="pl-4 hover:text-accent transition-colors">Vanta Node</Link>
                  <Link href="/products/renderman-node-wrangler" onClick={() => setMobileMenuOpen(false)} className="pl-4 hover:text-accent transition-colors">RenderMan Wrangler</Link>
                  <Link href="/products/ultimate-ref-tool" onClick={() => setMobileMenuOpen(false)} className="pl-4 hover:text-accent transition-colors">Ultimate Ref Tool</Link>
                </div>
                
                <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">Portfolio</Link>
                <Link href="/docs/vanta-node" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">Documentation</Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">About</Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">Contact</Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
