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
    <div className={`space-y-3 w-full ${className}`}>
      <div className="flex flex-wrap items-center gap-3">
        {isDownloadReady ? (
          <a
            href={downloadUrl}
            download
            onClick={() => setDownloadTriggered(true)}
            className={`${buttonSizeClass} rounded-lg bg-accent text-white hover:bg-accent-hover transition-all inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.25)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]`}
          >
            <Download size={size === "lg" ? 15 : 13} />
            Download
          </a>
        ) : (
          <span className={`${buttonSizeClass} rounded-lg border border-white/10 bg-white/[0.03] text-text-muted cursor-not-allowed inline-flex items-center justify-center gap-2 backdrop-blur-sm`}>
            <Download size={size === "lg" ? 15 : 13} className="opacity-40" />
            Coming soon
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
            className="text-foreground hover:text-white underline decoration-border hover:decoration-foreground transition-colors inline-flex items-center gap-0.5 whitespace-nowrap font-medium"
          >
            <span>Support EF Tools</span>
            <ArrowUpRight size={11} className="text-text-muted" />
          </a>
        </div>
      )}

      {/* Post-download message (after user clicks Download) */}
      {downloadTriggered && (
        <div className="p-3.5 rounded-xl border border-white/10 bg-[#161822]/80 backdrop-blur-md text-xs text-text-secondary flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.3)] animate-fadeIn">
          <div className="flex items-start sm:items-center gap-2.5 text-foreground/90">
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
              className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] hover:border-white/20 text-foreground hover:text-white transition-all inline-flex items-center gap-1 font-medium whitespace-nowrap backdrop-blur-sm"
            >
              <span>Support EF Tools</span>
              <ArrowUpRight size={11} className="text-text-muted" />
            </a>
            <button
              type="button"
              onClick={() => setDownloadTriggered(false)}
              className="p-1 rounded text-text-muted hover:text-foreground transition-colors"
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
