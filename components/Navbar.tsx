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
          ? "bg-[#090A0F]/80 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
          : "bg-transparent border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left: Transparent logo inverted to pure white, NO text */}
        <div className="flex items-center min-w-[120px]">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/images/logo_transparent.png" 
              alt="EF Tools Logo" 
              className="h-8 w-auto object-contain brightness-0 invert" 
            />
          </Link>
        </div>

        {/* Center: Motion Navigation Menu */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <MotionNavigationMenu
            viewport={true}
            viewportClassName="bg-[#14151f]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_16px_36px_rgba(0,0,0,0.4)]"
          >
            <MotionNavigationMenuList highlightClassName="bg-white/[0.08] rounded-lg">
              {/* Products Dropdown */}
              <MotionNavigationMenuItem value="products">
                <MotionNavigationMenuTrigger className="uppercase text-xs tracking-wider font-medium text-[#D4D4D2] hover:text-white px-3.5 py-1.5 h-auto rounded-lg">
                  PRODUCTS
                </MotionNavigationMenuTrigger>
                <MotionNavigationMenuContent highlightClassName="bg-white/[0.08] rounded-lg">
                  <div className="w-[240px] p-1.5 space-y-0.5">
                    {products.map((product) => (
                      <MotionNavigationMenuLink
                        key={product.id}
                        href={product.detailsPath}
                        className="px-3 py-2 rounded-lg text-xs font-medium text-[#EDEDEC] hover:text-white flex items-center"
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
                  className="flex items-center px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium text-[#D4D4D2] hover:text-white rounded-lg"
                >
                  ABOUT
                </MotionNavigationMenuLink>
              </MotionNavigationMenuItem>

              {/* Documentation Link */}
              <MotionNavigationMenuItem>
                <MotionNavigationMenuLink
                  href="/docs/renderman-node-wrangler"
                  className="flex items-center px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium text-[#D4D4D2] hover:text-white rounded-lg"
                >
                  DOCUMENTATION
                </MotionNavigationMenuLink>
              </MotionNavigationMenuItem>

              {/* Contact Link */}
              <MotionNavigationMenuItem>
                <MotionNavigationMenuLink
                  href="/contact"
                  className="flex items-center px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium text-[#D4D4D2] hover:text-white rounded-lg"
                >
                  CONTACT
                </MotionNavigationMenuLink>
              </MotionNavigationMenuItem>
            </MotionNavigationMenuList>
          </MotionNavigationMenu>
        </div>

        {/* Right: Support & GitHub */}
        <div className="hidden md:flex items-center justify-end gap-2 min-w-[200px]">
          <a
            href={KOFI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.05] text-xs font-medium text-[#EDEDEC] hover:bg-white/[0.1] hover:border-white/20 hover:text-white transition-all inline-flex items-center gap-1.5 backdrop-blur-sm"
          >
            <span>Support EF Tools</span>
            <ArrowUpRight size={12} className="text-text-muted" />
          </a>
          <a
            href="https://github.com/bruce333-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.05] text-xs uppercase tracking-wider text-[#D4D4D2] hover:bg-white/[0.1] hover:border-white/20 hover:text-white transition-all inline-flex items-center gap-1.5 backdrop-blur-sm"
          >
            <span>GITHUB</span>
            <ArrowUpRight size={12} className="text-text-muted" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.05] text-[#EDEDEC] hover:bg-white/[0.1] transition-all backdrop-blur-sm"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#090A0F]/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-2">
          <Link
            href="/#products"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg border border-[#333331] bg-[#222221] text-xs tracking-wider text-[#EDEDEC] hover:bg-[#2C2C2B] transition-colors uppercase"
          >
            PRODUCTS
          </Link>
          <div className="pl-3 flex flex-col gap-1 my-1 border-l border-border">
            {products.map((p) => (
              <Link
                key={p.id}
                href={p.detailsPath}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 px-2 text-xs text-text-secondary hover:text-foreground"
              >
                {p.name}
              </Link>
            ))}
          </div>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg border border-[#333331] bg-[#222221] text-xs tracking-wider text-[#EDEDEC] hover:bg-[#2C2C2B] transition-colors uppercase"
          >
            ABOUT
          </Link>
          <Link
            href="/docs/renderman-node-wrangler"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg border border-[#333331] bg-[#222221] text-xs tracking-wider text-[#EDEDEC] hover:bg-[#2C2C2B] transition-colors uppercase"
          >
            DOCUMENTATION
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg border border-[#333331] bg-[#222221] text-xs tracking-wider text-[#EDEDEC] hover:bg-[#2C2C2B] transition-colors uppercase"
          >
            CONTACT
          </Link>
          <a
            href={KOFI_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg border border-[#333331] bg-[#1E1E1D] text-xs tracking-wider text-[#EDEDEC] hover:bg-[#282827] transition-colors uppercase inline-flex items-center justify-between"
          >
            <span>SUPPORT EF TOOLS</span>
            <ArrowUpRight size={13} className="text-text-muted" />
          </a>
          <a
            href="https://github.com/bruce333-creator"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 px-3 rounded-lg border border-[#333331] bg-[#222221] text-xs tracking-wider text-[#EDEDEC] hover:bg-[#2C2C2B] transition-colors uppercase inline-flex items-center justify-between"
          >
            <span>GITHUB</span>
            <ArrowUpRight size={13} className="text-text-muted" />
          </a>
        </div>
      )}
    </header>
  );
}
