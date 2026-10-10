"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HighlightContextValue {
  hoveredRect: DOMRect | null;
  setHoveredRect: (rect: DOMRect | null) => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const HighlightContext = React.createContext<HighlightContextValue | null>(null);

export interface HighlightProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "parent" | "standalone";
  controlledItems?: boolean;
  hover?: boolean;
  containerClassName?: string;
  highlightClassName?: string;
}

export function Highlight({
  children,
  className,
  containerClassName,
  style,
  ...props
}: HighlightProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [hoveredRect, setHoveredRect] = React.useState<DOMRect | null>(null);

  const contextValue = React.useMemo(
    () => ({
      hoveredRect,
      setHoveredRect,
      containerRef,
    }),
    [hoveredRect]
  );

  const containerRect = containerRef.current?.getBoundingClientRect();

  return (
    <HighlightContext.Provider value={contextValue}>
      <div
        ref={containerRef}
        className={cn("relative", containerClassName)}
        onPointerLeave={() => setHoveredRect(null)}
      >
        {hoveredRect && containerRect && (
          <motion.div
            layoutId="highlight-pill"
            initial={false}
            animate={{
              left: hoveredRect.left - containerRect.left,
              top: hoveredRect.top - containerRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            className={cn("absolute pointer-events-none", className)}
            style={style}
          />
        )}
        {children}
      </div>
    </HighlightContext.Provider>
  );
}

export interface HighlightItemProps {
  asChild?: boolean;
  children: React.ReactElement;
  className?: string;
}

export function HighlightItem({ asChild, children }: HighlightItemProps) {
  const context = React.useContext(HighlightContext);
  const itemRef = React.useRef<HTMLElement | null>(null);

  const handlePointerEnter = (e: React.PointerEvent) => {
    children.props.onPointerEnter?.(e);
    if (itemRef.current && context) {
      context.setHoveredRect(itemRef.current.getBoundingClientRect());
    }
  };

  const handleFocus = (e: React.FocusEvent) => {
    children.props.onFocus?.(e);
    if (itemRef.current && context) {
      context.setHoveredRect(itemRef.current.getBoundingClientRect());
    }
  };

  return React.cloneElement(children, {
    ref: (node: HTMLElement | null) => {
      itemRef.current = node;
      const childRef = (children as any).ref;
      if (typeof childRef === "function") childRef(node);
      else if (childRef) childRef.current = node;
    },
    onPointerEnter: handlePointerEnter,
    onFocus: handleFocus,
  });
}

export default Highlight;
