import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { products, KOFI_URL } from "@/config/products";
import ShowcaseBanner from "@/components/ShowcaseBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#151515] text-[#EDEDEC] pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* --------------------------------------------------
            HERO SECTION
            -------------------------------------------------- */}
        <section className="pt-6 sm:pt-14 pb-2 flex flex-col items-center text-center max-w-2xl mx-auto space-y-6">
          {/* Main Title: Strictly "Less setup. More making." with no text below */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.1]">
            Less setup. More making.
          </h1>

          {/* Action button: Discover scrolling down to the banner with discreet animated down arrow */}
          <div className="pt-2 flex flex-col items-center gap-3">
            <a 
              href="#showcase"
              className="px-6 py-3 rounded-md bg-[#EDEDEC] text-[#151515] hover:bg-white hover:text-black font-medium text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-sm group"
            >
              <span>Discover</span>
              <ArrowDown size={14} className="animate-bounce text-[#151515]" />
            </a>

            {/* Secondary discreet Support link under the hero */}
            <a
              href={KOFI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-xs text-text-muted hover:text-white transition-colors inline-flex items-center gap-1 group"
            >
              <span>Support the project</span>
              <ArrowUpRight size={11} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </section>

        {/* --------------------------------------------------
            PRESENTATION BANNER (Interactive demo showcase)
            -------------------------------------------------- */}
        <ShowcaseBanner />

        {/* --------------------------------------------------
            PLUGINS SECTION (Microsoft Store inspired 3-column row)
            -------------------------------------------------- */}
        <section id="products" className="space-y-6 scroll-mt-24">
          <div className="flex items-center justify-between pb-1">
            <h2 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
              Plugins
            </h2>
            <span className="text-xs text-text-muted">
              Autodesk Maya
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {products.map((product) => {
              const isReady = product.isDownloadReady;

              return (
                <div 
                  key={product.id}
                  className="p-6 rounded-2xl bg-[#1B1B1B] border border-white/[0.05] hover:border-white/[0.12] hover:bg-[#202020] transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center gap-4">
                    {/* 2D Original Logo - Unframed, large */}
                    <img 
                      src={product.logoImage} 
                      alt={product.name} 
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain shrink-0 group-hover:scale-105 transition-transform"
                    />
                    
                    {/* Plugin Name in large - No version, No compatibility */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-xl sm:text-2xl font-medium text-white tracking-tight truncate">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  {/* Actions: Download (off-white) & Details (subtle text link) - No separation line */}
                  <div className="mt-8 flex items-center justify-between gap-3">
                    {isReady ? (
                      <a
                        href={product.downloadUrl}
                        download
                        className="px-4 py-2 rounded-md bg-[#EDEDEC] text-[#151515] hover:bg-white hover:text-black font-medium text-xs inline-flex items-center gap-1.5 transition-all shadow-sm"
                      >
                        <span>Download</span>
                        <ArrowUpRight size={13} />
                      </a>
                    ) : (
                      <span className="px-3.5 py-2 rounded-md border border-white/[0.08] bg-white/[0.03] text-text-muted font-medium text-xs cursor-not-allowed inline-flex items-center gap-1.5">
                        <span>Coming soon</span>
                      </span>
                    )}

                    {product.detailsPath && (
                      <Link
                        href={product.detailsPath}
                        className="text-xs text-text-secondary hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/80 transition-colors inline-flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ArrowUpRight size={13} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --------------------------------------------------
            INSTALLATION SECTION
            -------------------------------------------------- */}
        <section className="pt-4 space-y-4">
          <h2 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
            How to install
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
            <div className="rounded-xl bg-[#1B1B1B] border border-white/[0.05] p-4 space-y-1.5">
              <div className="text-[11px] font-mono text-accent">01. Download</div>
              <h3 className="font-heading font-medium text-white text-xs sm:text-sm">Get the file</h3>
              <p className="text-text-muted leading-relaxed">
                Download the release package directly from GitHub Releases.
              </p>
            </div>

            <div className="rounded-xl bg-[#1B1B1B] border border-white/[0.05] p-4 space-y-1.5">
              <div className="text-[11px] font-mono text-accent">02. Drag & Drop</div>
              <h3 className="font-heading font-medium text-white text-xs sm:text-sm">Drop into Maya</h3>
              <p className="text-text-muted leading-relaxed">
                Drag the <code className="bg-white/[0.05] px-1 py-0.5 rounded text-white text-[10px]">.py</code> file straight into the Maya 3D viewport.
              </p>
            </div>

            <div className="rounded-xl bg-[#1B1B1B] border border-white/[0.05] p-4 space-y-1.5">
              <div className="text-[11px] font-mono text-accent">03. Ready</div>
              <h3 className="font-heading font-medium text-white text-xs sm:text-sm">Launch from shelf</h3>
              <p className="text-text-muted leading-relaxed">
                A custom shelf icon is automatically generated. Click to start.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
