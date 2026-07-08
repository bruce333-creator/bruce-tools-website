"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface WordRotatorProps {
  words: string[];
  className?: string;
  interval?: number;
}

export default function WordRotator({ words, className = "", interval = 3000 }: WordRotatorProps) {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words, interval]);

  return (
    <span className={`relative inline-block whitespace-nowrap text-foreground ${className}`}>
      {/* Invisible word reserves exact space of current word */}
      <span className="invisible">{words[index]}</span>
      
      <AnimatePresence mode="popLayout">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -30, filter: "blur(4px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 w-full text-center"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
