"use client"; 

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Box, Image as ImageIcon, Wrench } from "lucide-react";

export default function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative mx-auto hidden md:block w-fit" onMouseLeave={() => setDropdownOpen(false)}>
      <ul
        className="relative flex w-fit rounded-full border border-border bg-white p-1 shadow-sm"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        <Tab setPosition={setPosition} href="/store" onMouseEnter={() => setDropdownOpen(true)}>Products</Tab>
        <Tab setPosition={setPosition} href="/portfolio" onMouseEnter={() => setDropdownOpen(false)}>Portfolio</Tab>
        <Tab setPosition={setPosition} href="/about" onMouseEnter={() => setDropdownOpen(false)}>About</Tab>
        <Tab setPosition={setPosition} href="/contact" onMouseEnter={() => setDropdownOpen(false)}>Contact</Tab>

        <Cursor position={position} />
      </ul>

      <AnimatePresence>
        {dropdownOpen && (
          <div className="absolute top-full left-0 pt-4 z-50">
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-72 bg-white border border-border rounded-2xl shadow-xl p-2 overflow-hidden text-left"
            >
            <Link href="/products/vanta-node" className="flex items-start gap-3 p-3 rounded-xl hover:bg-foreground transition-colors group" onClick={() => setDropdownOpen(false)}>
              <div className="bg-accent/5 p-2 rounded-lg text-accent group-hover:scale-110 group-hover:bg-white/20 group-hover:text-white transition-all">
                <Box size={18} />
              </div>
              <div>
                <div className="text-foreground group-hover:text-background font-medium mb-1 text-sm transition-colors">Vanta Node</div>
                <div className="text-xs text-text-secondary group-hover:text-white/70 transition-colors">Automated Arnold shaders</div>
              </div>
            </Link>
            <Link href="/products/renderman-node-wrangler" className="flex items-start gap-3 p-3 rounded-xl hover:bg-foreground transition-colors group" onClick={() => setDropdownOpen(false)}>
              <div className="bg-accent/5 p-2 rounded-lg text-accent group-hover:scale-110 group-hover:bg-white/20 group-hover:text-white transition-all">
                <span className="font-bold text-lg leading-none w-[18px] h-[18px] flex items-center justify-center">R</span>
              </div>
              <div>
                <div className="text-foreground group-hover:text-background font-medium mb-1 text-sm transition-colors">RenderMan Wrangler</div>
                <div className="text-xs text-text-secondary group-hover:text-white/70 transition-colors">Automated RenderMan networks</div>
              </div>
            </Link>
            <Link href="/products/ultimate-ref-tool" className="flex items-start gap-3 p-3 rounded-xl hover:bg-foreground transition-colors group" onClick={() => setDropdownOpen(false)}>
              <div className="bg-accent/5 p-2 rounded-lg text-accent group-hover:scale-110 group-hover:bg-white/20 group-hover:text-white transition-all">
                <ImageIcon size={18} />
              </div>
              <div>
                <div className="text-foreground group-hover:text-background font-medium mb-1 text-sm transition-colors">Ultimate Ref Tool</div>
                <div className="text-xs text-text-secondary group-hover:text-white/70 transition-colors">Smart reference management</div>
              </div>
            </Link>
            <Link href="/store" className="flex items-start gap-3 p-3 rounded-xl hover:bg-foreground transition-colors group" onClick={() => setDropdownOpen(false)}>
              <div className="bg-accent/5 p-2 rounded-lg text-accent group-hover:scale-110 group-hover:bg-white/20 group-hover:text-white transition-all">
                <Wrench size={18} />
              </div>
              <div>
                <div className="text-foreground group-hover:text-background font-medium mb-1 text-sm transition-colors">Arnold & Maya Tools</div>
                <div className="text-xs text-text-secondary group-hover:text-white/70 transition-colors">More productivity tools</div>
              </div>
            </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

const Tab = ({
  children,
  setPosition,
  href,
  onMouseEnter
}: {
  children: React.ReactNode;
  setPosition: any;
  href: string;
  onMouseEnter?: () => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (onMouseEnter) onMouseEnter();
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-2 md:text-sm font-medium"
    >
      <Link href={href} className="w-full h-full block">{children}</Link>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-foreground md:h-9"
    />
  );
};
