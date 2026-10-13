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
}

export default function DownloadWithSupport({
  downloadUrl,
  isDownloadReady,
  size = "md",
  showPreSupportNote = false,
  className = "",
}: DownloadWithSupportProps) {
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  const buttonSizeClass =
    size === "lg"
      ? "px-5 py-2.5 text-sm"
      : size === "sm"
      ? "px-3.5 py-1.5 text-xs"
      : "px-4 py-2 text-xs font-medium";

  return (
    <div className={`space-y-2.5 ${className}`}>
      <div className="flex flex-wrap items-center gap-3">
        {isDownloadReady ? (
          <a
            href={downloadUrl}
            download
            onClick={() => setDownloadTriggered(true)}
            className={`${buttonSizeClass} rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors font-medium inline-flex items-center gap-2`}
          >
            <Download size={size === "lg" ? 15 : 14} />
            Download
          </a>
        ) : (
          <span className="px-4 py-2 rounded-lg border border-border bg-surface-secondary/40 text-text-muted cursor-not-allowed inline-flex items-center gap-2 text-xs">
            <Download size={14} className="opacity-40" />
            Coming soon
          </span>
        )}
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
        <div className="p-3 rounded-xl border border-border bg-[#181817] text-xs text-text-secondary flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
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
              className="px-3 py-1.5 rounded-lg border border-[#333331] bg-[#222221] hover:bg-[#2C2C2B] hover:border-[#424240] text-foreground hover:text-white transition-colors inline-flex items-center gap-1 font-medium whitespace-nowrap"
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
