"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { products, KOFI_URL } from "@/config/products";
import {
  MotionNavigationMenu,
  MotionNavigationMenuContent,
  MotionNavigationMenuItem,
  MotionNavigationMenuLink,
  MotionNavigationMenuList,
  MotionNavigationMenuTrigger,
} from "@/components/ui/motion-navigation-menu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled 
          ? "bg-[#090A0D]/95 border-b border-[#232530] py-2.5 shadow-lg" 
          : "bg-transparent border-b border-transparent py-3"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left: Transparent logo inverted to pure white, NO text */}
        <div className="flex items-center min-w-[120px]">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/images/logo_transparent.png" 
              alt="EF Tools Logo" 
              className="h-7 w-auto object-contain brightness-0 invert" 
            />
          </Link>
        </div>

        {/* Center: Motion Navigation Menu */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <MotionNavigationMenu
            viewport={true}
            viewportClassName="bg-[#121318] border border-[#232530] rounded-xl shadow-2xl"
          >
            <MotionNavigationMenuList highlightClassName="bg-[#1D1F2B] rounded-lg">
              {/* Products Dropdown */}
              <MotionNavigationMenuItem value="products">
                <MotionNavigationMenuTrigger className="uppercase text-xs tracking-wider font-medium text-[#D4D4D2] hover:text-white active:bg-white active:text-black px-3.5 py-1.5 h-auto rounded-lg transition-all">
                  PRODUCTS
                </MotionNavigationMenuTrigger>
                <MotionNavigationMenuContent highlightClassName="bg-[#1D1F2B] rounded-lg">
                  <div className="w-[240px] p-1.5 space-y-0.5">
                    {products.map((product) => (
                      <MotionNavigationMenuLink
                        key={product.id}
                        href={product.detailsPath}
                        className="px-3 py-2 rounded-lg text-xs font-medium text-[#EDEDEC] hover:text-white active:bg-white active:text-black flex items-center transition-all"
                      >
                        <span>{product.name}</span>
                      </MotionNavigationMenuLink>
                    ))}
                  </div>
                </MotionNavigationMenuContent>
              </MotionNavigationMenuItem>

              {/* About Link */}
              <MotionNavigationMenuItem>
                <MotionNavigationMenuLink
                  href="/about"
                  className="flex items-center px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium text-[#D4D4D2] hover:text-white active:bg-white active:text-black rounded-lg transition-all"
                >
                  ABOUT
                </MotionNavigationMenuLink>
              </MotionNavigationMenuItem>

              {/* Documentation Link */}
              <MotionNavigationMenuItem>
                <MotionNavigationMenuLink
                  href="/docs/renderman-node-wrangler"
                  className="flex items-center px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium text-[#D4D4D2] hover:text-white active:bg-white active:text-black rounded-lg transition-all"
                >
                  DOCUMENTATION
                </MotionNavigationMenuLink>
              </MotionNavigationMenuItem>

              {/* Contact Link */}
              <MotionNavigationMenuItem>
                <MotionNavigationMenuLink
                  href="/contact"
                  className="flex items-center px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium text-[#D4D4D2] hover:text-white active:bg-white active:text-black rounded-lg transition-all"
                >
                  CONTACT
                </MotionNavigationMenuLink>
              </MotionNavigationMenuItem>
            </MotionNavigationMenuList>
          </MotionNavigationMenu>
        </div>

        {/* Right: SUPPORT & GITHUB in full uppercase harmony */}
        <div className="hidden md:flex items-center justify-end gap-2 min-w-[200px]">
          <a
            href={KOFI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-[#2A2C38] bg-[#161822] text-xs uppercase tracking-wider font-medium text-[#EDEDEC] hover:bg-[#222432] hover:border-[#383C4E] hover:text-white active:bg-white active:text-black active:border-white transition-all inline-flex items-center gap-1.5"
          >
            <span>SUPPORT</span>
            <ArrowUpRight size={12} className="opacity-70" />
          </a>
          <a
            href="https://github.com/bruce333-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-[#2A2C38] bg-[#161822] text-xs uppercase tracking-wider font-medium text-[#D4D4D2] hover:bg-[#222432] hover:border-[#383C4E] hover:text-white active:bg-white active:text-black active:border-white transition-all inline-flex items-center gap-1.5"
          >
            <span>GITHUB</span>
            <ArrowUpRight size={12} className="opacity-70" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden px-2.5 py-1.5 rounded-lg border border-[#2A2C38] bg-[#161822] text-[#EDEDEC] hover:bg-[#222432] active:bg-white active:text-black transition-all"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#232530] bg-[#090A0D] px-6 py-4 flex flex-col gap-2">
          <Link
            href="/#products"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg border border-[#2A2C38] bg-[#161822] text-xs tracking-wider text-[#EDEDEC] hover:bg-[#222432] active:bg-white active:text-black transition-all uppercase"
          >
            PRODUCTS
          </Link>
          <div className="pl-3 flex flex-col gap-1 my-1 border-l border-[#232530]">
            {products.map((p) => (
              <Link
                key={p.id}
                href={p.detailsPath}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 px-2 text-xs text-text-secondary hover:text-foreground active:text-white"
              >
                {p.name}
              </Link>
            ))}
          </div>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg border border-[#2A2C38] bg-[#161822] text-xs tracking-wider text-[#EDEDEC] hover:bg-[#222432] active:bg-white active:text-black transition-all uppercase"
          >
            ABOUT
          </Link>
          <Link
            href="/docs/renderman-node-wrangler"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg border border-[#2A2C38] bg-[#161822] text-xs tracking-wider text-[#EDEDEC] hover:bg-[#222432] active:bg-white active:text-black transition-all uppercase"
          >
            DOCUMENTATION
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg border border-[#2A2C38] bg-[#161822] text-xs tracking-wider text-[#EDEDEC] hover:bg-[#222432] active:bg-white active:text-black transition-all uppercase"
          >
            CONTACT
          </Link>
          <a
            href={KOFI_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg border border-[#2A2C38] bg-[#161822] text-xs tracking-wider text-[#EDEDEC] hover:bg-[#222432] active:bg-white active:text-black active:border-white transition-all uppercase inline-flex items-center justify-between"
          >
            <span>SUPPORT</span>
            <ArrowUpRight size={13} className="opacity-70" />
          </a>
          <a
            href="https://github.com/bruce333-creator"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg border border-[#2A2C38] bg-[#161822] text-xs tracking-wider text-[#EDEDEC] hover:bg-[#222432] active:bg-white active:text-black active:border-white transition-all uppercase inline-flex items-center justify-between"
          >
            <span>GITHUB</span>
            <ArrowUpRight size={13} className="opacity-70" />
          </a>
        </div>
      )}
    </header>
  );
}
