"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { products, KOFI_URL } from "@/config/products";

interface NavItem {
  id: string;
  name: string;
  href: string;
  icon: string;
  isDropdown?: boolean;
}

const navItems: NavItem[] = [
  {
    id: "products",
    name: "Products",
    href: "/#products",
    icon: "/images/nav/nav_products.png",
    isDropdown: true,
  },
  {
    id: "docs",
    name: "Documentation",
    href: "/docs/renderman-node-wrangler",
    icon: "/images/nav/nav_docs.png",
  },
  {
    id: "about",
    name: "About",
    href: "/about",
    icon: "/images/nav/nav_about.png",
  },
  {
    id: "contact",
    name: "Contact",
    href: "/contact",
    icon: "/images/nav/nav_contact.png",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine which nav item is naturally active based on current URL
  const getActiveNavId = () => {
    if (pathname.startsWith("/docs")) return "docs";
    if (pathname === "/about") return "about";
    if (pathname === "/contact") return "contact";
    return null;
  };

  const activeNavId = hoveredNav || getActiveNavId();

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled 
          ? "bg-[#151515]/95 border-b border-white/[0.05] py-2.5 shadow-lg backdrop-blur-md" 
          : "bg-transparent border-b border-transparent py-3.5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left: Transparent logo inverted to pure white, matching category icon size */}
        <div className="flex items-center min-w-[140px]">
          <Link href="/" className="flex items-center hover:opacity-85 transition-opacity">
            <img 
              src="/images/logo_transparent.png" 
              alt="EF Tools Logo" 
              className="h-8 sm:h-9 w-auto object-contain brightness-0 invert" 
            />
          </Link>
        </div>

        {/* Center: Navigation with Airbnb-style 3D icons & independent thick rounded underline */}
        <nav 
          className="hidden md:flex items-center gap-2 lg:gap-4 relative"
          onMouseLeave={() => {
            setHoveredNav(null);
            setProductsOpen(false);
          }}
        >
          {navItems.map((item) => {
            const isSelected = activeNavId === item.id;

            if (item.isDropdown) {
              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredNav(item.id);
                    setProductsOpen(true);
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setProductsOpen((prev) => !prev)}
                    className="flex items-center gap-2 px-3 py-2 font-heading text-sm font-medium text-text-secondary hover:text-white transition-colors relative"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-full h-full object-contain drop-shadow-sm"
                      />
                    </div>
                    <span className="leading-none">{item.name}</span>

                    {/* Thick stylized rounded bar - Only under this specific item */}
                    {isSelected && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-2 right-2 h-[3px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}
                  </button>

                  {/* PRODUCTS DROPDOWN: Logo on LEFT (unframed, large), Name on RIGHT in large, NO version/compat */}
                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.16 }}
                        className="absolute top-full left-0 mt-2 w-[280px] p-2 bg-[#1C1C1C] border border-white/[0.08] rounded-xl shadow-2xl space-y-1 z-50"
                      >
                        {products.map((product) => (
                          <Link
                            key={product.id}
                            href={product.detailsPath}
                            onClick={() => setProductsOpen(false)}
                            className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/[0.06] transition-colors group"
                          >
                            {/* Logo on the left: Large, unbordered, no frame */}
                            <img
                              src={product.logoImage}
                              alt={product.name}
                              className="w-9 h-9 object-contain shrink-0 group-hover:scale-105 transition-transform"
                            />
                            {/* Name on the right in large Manrope font */}
                            <span className="font-heading text-base font-medium text-white tracking-tight group-hover:text-accent transition-colors">
                              {product.name}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => {
                  setHoveredNav(item.id);
                  setProductsOpen(false);
                }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 font-heading text-sm font-medium text-text-secondary hover:text-white transition-colors relative"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full object-contain drop-shadow-sm"
                    />
                  </div>
                  <span className="leading-none">{item.name}</span>

                  {/* Thick stylized rounded bar - Only under this specific item */}
                  {isSelected && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-[3px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Right: Secondary outline buttons for SUPPORT & GITHUB */}
        <div className="hidden md:flex items-center justify-end gap-2.5 min-w-[200px]">
          <a
            href={KOFI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-md border border-white/[0.12] hover:border-white/30 bg-transparent hover:bg-white/[0.04] text-xs uppercase tracking-wider font-medium text-text-secondary hover:text-white transition-all inline-flex items-center gap-1.5"
          >
            <span>SUPPORT</span>
            <ArrowUpRight size={12} className="opacity-70" />
          </a>
          <a
            href="https://github.com/bruce333-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-md border border-white/[0.12] hover:border-white/30 bg-transparent hover:bg-white/[0.04] text-xs uppercase tracking-wider font-medium text-text-secondary hover:text-white transition-all inline-flex items-center gap-1.5"
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
          className="md:hidden px-2.5 py-1.5 rounded-md border border-white/[0.1] bg-white/[0.03] text-[#EDEDEC] hover:bg-white/[0.07] active:bg-white active:text-black transition-all"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.06] bg-[#151515] px-6 py-4 flex flex-col gap-2.5">
          <Link
            href="/#products"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 text-sm font-heading font-medium text-white flex items-center gap-3"
          >
            <div className="w-7 h-7 shrink-0 flex items-center justify-center">
              <img src="/images/nav/nav_products.png" alt="Products" className="w-full h-full object-contain" />
            </div>
            <span>Products</span>
          </Link>
          <div className="pl-3 flex flex-col gap-2 my-1 border-l border-white/[0.08]">
            {products.map((p) => (
              <Link
                key={p.id}
                href={p.detailsPath}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-xs text-text-secondary hover:text-white py-1"
              >
                <img src={p.logoImage} alt={p.name} className="w-5 h-5 object-contain" />
                <span className="font-heading font-medium text-white">{p.name}</span>
              </Link>
            ))}
          </div>
          <Link
            href="/docs/renderman-node-wrangler"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 text-sm font-heading font-medium text-text-secondary hover:text-white flex items-center gap-3"
          >
            <div className="w-7 h-7 shrink-0 flex items-center justify-center">
              <img src="/images/nav/nav_docs.png" alt="Documentation" className="w-full h-full object-contain" />
            </div>
            <span>Documentation</span>
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 text-sm font-heading font-medium text-text-secondary hover:text-white flex items-center gap-3"
          >
            <div className="w-7 h-7 shrink-0 flex items-center justify-center">
              <img src="/images/nav/nav_about.png" alt="About" className="w-full h-full object-contain" />
            </div>
            <span>About</span>
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 text-sm font-heading font-medium text-text-secondary hover:text-white flex items-center gap-3"
          >
            <div className="w-7 h-7 shrink-0 flex items-center justify-center">
              <img src="/images/nav/nav_contact.png" alt="Contact" className="w-full h-full object-contain" />
            </div>
            <span>Contact</span>
          </Link>
          <div className="pt-2 flex items-center gap-2">
            <a
              href={KOFI_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-1.5 px-3 rounded-md border border-white/[0.12] text-xs tracking-wider text-text-secondary hover:text-white uppercase inline-flex items-center justify-between"
            >
              <span>SUPPORT</span>
              <ArrowUpRight size={12} className="opacity-70" />
            </a>
            <a
              href="https://github.com/bruce333-creator"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-1.5 px-3 rounded-md border border-white/[0.12] text-xs tracking-wider text-text-secondary hover:text-white uppercase inline-flex items-center justify-between"
            >
              <span>GITHUB</span>
              <ArrowUpRight size={12} className="opacity-70" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
