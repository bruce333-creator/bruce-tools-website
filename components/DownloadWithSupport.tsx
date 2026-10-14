"use client";

import { useState } from "react";
import { Download, ArrowUpRight, X, Heart } from "lucide-react";
import { KOFI_URL } from "@/config/products";

interface DownloadWithSupportProps {
  downloadUrl: string;
  isDownloadReady: boolean;
  size?: "sm" | "md" | "lg";
  showPreSupportNote?: boolean;
  className?: string;
  secondaryAction?: React.ReactNode;
}

export default function DownloadWithSupport({
  downloadUrl,
  isDownloadReady,
  size = "md",
  showPreSupportNote = false,
  className = "",
  secondaryAction,
}: DownloadWithSupportProps) {
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  const buttonSizeClass =
    size === "lg"
      ? "px-5 py-2.5 text-sm font-medium"
      : size === "sm"
      ? "px-3.5 py-1.5 text-xs font-medium"
      : "px-4 py-2 text-xs font-medium";

  return (
    <div className={`space-y-2.5 w-full ${className}`}>
      <div className="flex flex-wrap items-center gap-2.5">
        {isDownloadReady ? (
          <a
            href={downloadUrl}
            download
            onClick={() => setDownloadTriggered(true)}
            className={`${buttonSizeClass} rounded-md bg-[#EDEDEC] text-[#151515] hover:bg-white hover:text-black active:scale-[0.99] transition-all inline-flex items-center justify-center gap-1.5 font-medium shadow-sm`}
          >
            <span>Download</span>
            <ArrowUpRight size={size === "lg" ? 15 : 13} />
          </a>
        ) : (
          <span className={`${buttonSizeClass} rounded-md border border-white/[0.08] bg-white/[0.03] text-text-muted cursor-not-allowed inline-flex items-center justify-center gap-1.5 font-medium`}>
            <span>Coming soon</span>
          </span>
        )}

        {secondaryAction}
      </div>

      {/* Pre-download support note */}
      {showPreSupportNote && !downloadTriggered && isDownloadReady && (
        <div className="flex flex-wrap items-center gap-2 text-xs text-text-secondary pt-0.5">
          <span>Enjoying this tool? Support future updates with a small donation.</span>
          <a
            href={KOFI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-white underline decoration-border hover:decoration-foreground active:text-white transition-colors inline-flex items-center gap-0.5 whitespace-nowrap font-medium"
          >
            <span>SUPPORT</span>
            <ArrowUpRight size={11} className="opacity-70" />
          </a>
        </div>
      )}

      {/* Post-download message (after user clicks Download) */}
      {downloadTriggered && (
        <div className="p-3 rounded-xl border border-white/[0.08] bg-[#1B1B1B] text-xs text-text-secondary flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-start sm:items-center gap-2 text-foreground/90">
            <Heart size={14} className="text-[#3B82F6] shrink-0 mt-0.5 sm:mt-0" />
            <span>
              Download started! If EF Tools saves you time, consider supporting its development. Every contribution helps.
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={KOFI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md border border-white/[0.12] bg-transparent hover:bg-white/[0.04] hover:border-white/30 text-white transition-all inline-flex items-center gap-1 font-medium whitespace-nowrap"
            >
              <span>SUPPORT</span>
              <ArrowUpRight size={11} className="opacity-70" />
            </a>
            <button
              type="button"
              onClick={() => setDownloadTriggered(false)}
              className="p-1 rounded text-text-muted hover:text-foreground active:text-white transition-colors"
              aria-label="Close notification"
            >
              <X size={13} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
