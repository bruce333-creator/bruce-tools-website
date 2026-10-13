import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products, KOFI_URL } from "@/config/products";
import LazyVideo from "@/components/LazyVideo";
import DownloadWithSupport from "@/components/DownloadWithSupport";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-[#EDEDEC] pt-28 pb-32 px-6">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* --------------------------------------------------
            HERO SECTION
            -------------------------------------------------- */}
        <section className="pt-10 sm:pt-16 pb-4 flex flex-col items-center text-center max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#EDEDEC] leading-[1.15] mb-5">
            Free Maya tools for 3D artists.
          </h1>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8">
            A small collection of Python utilities made to speed up common tasks in Autodesk Maya — automatic shader networks and reference image placement.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <a 
              href="#products"
              className="px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors font-medium flex items-center gap-2"
            >
              Browse tools
              <ArrowRight size={13} />
            </a>
            <Link 
              href="/docs/renderman-node-wrangler"
              className="px-4 py-2 rounded-lg border border-[#333331] bg-[#222221] text-[#D4D4D2] hover:bg-[#2C2C2B] hover:border-[#424240] hover:text-white transition-colors"
            >
              Documentation
            </Link>
          </div>

          {/* Support callout banner */}
          <div className="mt-8 p-3.5 sm:p-4 rounded-xl border border-white/10 bg-[#14151f]/60 backdrop-blur-md max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-secondary text-center sm:text-left shadow-sm">
            <span>All EF Tools plugins are free. If you find them useful, consider supporting their development.</span>
            <a
              href={KOFI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] hover:border-white/20 text-foreground hover:text-white transition-all inline-flex items-center gap-1.5 font-medium whitespace-nowrap backdrop-blur-sm"
            >
              <span>Support EF Tools</span>
              <ArrowUpRight size={12} className="text-text-muted" />
            </a>
          </div>
        </section>

        {/* --------------------------------------------------
            PRODUCTS SECTION (Video Previews as requested)
            -------------------------------------------------- */}
        <section id="products" className="space-y-10 scroll-mt-24">
          <div className="pb-2">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
              Available Tools
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              Free to download and use in personal or commercial work. No account or email needed.
            </p>
          </div>

          <div className="space-y-10">
            {products.map((product) => {
              const isArNode = product.id === "arnold-node-wrangler";
              return (
                <article 
                  key={product.id}
                  className="rounded-2xl border border-white/10 bg-[#14151f]/50 backdrop-blur-md p-6 sm:p-8 flex flex-col lg:flex-row gap-8 lg:gap-10 transition-all hover:border-white/20 hover:bg-[#181926]/60 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                >
                  {/* Left Column: Details */}
                  <div className="flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3.5">
                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                        <Link href={product.detailsPath} className="hover:text-accent transition-colors">
                          {product.name}
                        </Link>
                      </h3>

                      {/* Description or Coming soon */}
                      {isArNode ? (
                        <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                          Coming soon
                        </p>
                      ) : (
                        <>
                          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                            {product.shortDescription}
                          </p>

                          {/* Key features */}
                          {product.features.length > 0 && (
                            <ul className="space-y-2 pt-1 text-xs sm:text-sm text-text-secondary">
                              {product.features.slice(0, 3).map((feat, i) => (
                                <li key={i} className="flex items-start gap-2.5 leading-snug">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </div>

                    {/* Actions - No border-t line, No Docs link */}
                    <div className="pt-2">
                      <DownloadWithSupport
                        downloadUrl={product.downloadUrl}
                        isDownloadReady={product.isDownloadReady}
                        secondaryAction={
                          <Link
                            href={product.detailsPath}
                            className="px-3.5 py-2 rounded-lg border border-white/10 bg-white/[0.05] text-[#EDEDEC] hover:bg-white/[0.1] hover:border-white/20 hover:text-white transition-all inline-flex items-center gap-1.5 font-medium text-xs backdrop-blur-sm"
                          >
                            Details
                            <ArrowRight size={13} />
                          </Link>
                        }
                      />
                    </div>
                  </div>

                  {/* Right Column: VIDEO PREVIEW (only when product has a video) */}
                  {product.embeddedVideo && (
                    <div className="lg:w-[460px] shrink-0 flex flex-col justify-center">
                      <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0d0e14] aspect-[16/10] shadow-sm">
                        <LazyVideo src={product.embeddedVideo} />
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* --------------------------------------------------
            INSTALLATION SECTION (No gray divider line)
            -------------------------------------------------- */}
        <section className="pt-16 space-y-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-medium tracking-tight text-foreground mb-2">
              How to install
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              All tools install the same way in Autodesk Maya:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="rounded-xl border border-white/10 bg-[#14151f]/50 backdrop-blur-md p-5 space-y-2 shadow-sm">
              <div className="text-xs font-mono text-accent">1. Download</div>
              <h3 className="font-medium text-foreground">Get the file</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Download the zip file from GitHub Releases and extract the Python script.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#14151f]/50 backdrop-blur-md p-5 space-y-2 shadow-sm">
              <div className="text-xs font-mono text-accent">2. Drag & Drop</div>
              <h3 className="font-medium text-foreground">Drop into Maya</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Drag the <code className="text-[11px] bg-white/[0.06] border border-white/10 px-1 py-0.5 rounded text-foreground">.py</code> file from your file explorer into the Maya 3D viewport.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#14151f]/50 backdrop-blur-md p-5 space-y-2 shadow-sm">
              <div className="text-xs font-mono text-accent">3. Ready</div>
              <h3 className="font-medium text-foreground">Use the shelf icon</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                A button is automatically created on your active shelf. Click it to open the tool.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
