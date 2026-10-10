import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { products } from "@/config/products";
import LazyVideo from "@/components/LazyVideo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141413] text-[#EDEDEC] pt-28 pb-32 px-6">
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
        </section>

        {/* --------------------------------------------------
            PRODUCTS SECTION (Video Previews as requested)
            -------------------------------------------------- */}
        <section id="products" className="space-y-12 scroll-mt-24">
          <div className="border-b border-border pb-4">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
              Available Tools
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              Free to download and use in personal or commercial work. No account or email needed.
            </p>
          </div>

          <div className="space-y-12">
            {products.map((product) => {
              const isArNode = product.id === "arnold-node-wrangler";
              return (
                <article 
                  key={product.id}
                  className="rounded-2xl border border-border bg-surface p-6 sm:p-8 flex flex-col lg:flex-row gap-8 lg:gap-10 transition-colors hover:border-border-hover"
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
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </div>

                    {/* Actions - No border-t line, No Docs link */}
                    <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
                      {product.isDownloadReady ? (
                        <a
                          href={product.downloadUrl}
                          download
                          className="px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors font-medium flex items-center gap-2"
                        >
                          <Download size={14} />
                          Download
                        </a>
                      ) : (
                        <span className="px-4 py-2 rounded-lg border border-border bg-surface-secondary/40 text-text-muted cursor-not-allowed inline-flex items-center gap-2">
                          <Download size={14} className="opacity-40" />
                          Coming soon
                        </span>
                      )}

                      <Link
                        href={product.detailsPath}
                        className="px-3.5 py-2 rounded-lg border border-[#333331] bg-[#222221] text-[#D4D4D2] hover:bg-[#2C2C2B] hover:border-[#424240] hover:text-white transition-colors inline-flex items-center gap-1.5"
                      >
                        Details
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: VIDEO PREVIEW (only when product has a video) */}
                  {product.embeddedVideo && (
                    <div className="lg:w-[460px] shrink-0 flex flex-col justify-center">
                      <div className="relative rounded-xl overflow-hidden border border-border bg-surface-secondary aspect-[16/10] shadow-sm">
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
            INSTALLATION SECTION
            -------------------------------------------------- */}
        <section className="border-t border-border pt-16 space-y-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-medium tracking-tight text-foreground mb-2">
              How to install
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              All tools install the same way in Autodesk Maya:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="rounded-xl border border-border bg-surface p-5 space-y-2">
              <div className="text-xs font-mono text-accent">1. Download</div>
              <h3 className="font-medium text-foreground">Get the file</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Download the zip file from GitHub Releases and extract the Python script.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5 space-y-2">
              <div className="text-xs font-mono text-accent">2. Drag & Drop</div>
              <h3 className="font-medium text-foreground">Drop into Maya</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Drag the <code className="text-[11px] bg-surface-secondary px-1 py-0.5 rounded text-foreground">.py</code> file from your file explorer into the Maya 3D viewport.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5 space-y-2">
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
