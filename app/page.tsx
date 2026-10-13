import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products, KOFI_URL } from "@/config/products";
import LazyVideo from "@/components/LazyVideo";
import DownloadWithSupport from "@/components/DownloadWithSupport";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-[#EDEDEC] pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* --------------------------------------------------
            HERO SECTION
            -------------------------------------------------- */}
        <section className="pt-6 sm:pt-10 pb-2 flex flex-col items-center text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#EDEDEC] leading-[1.15] mb-3">
            Free Maya tools for 3D artists.
          </h1>

          <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-5">
            A small collection of Python utilities made to speed up common tasks in Autodesk Maya — automatic shader networks and reference image placement.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs">
            <a 
              href="#products"
              className="px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover active:bg-white active:text-black active:border-white transition-all font-medium flex items-center gap-2"
            >
              Browse tools
              <ArrowRight size={13} />
            </a>
            <Link 
              href="/docs/renderman-node-wrangler"
              className="px-4 py-2 rounded-lg border border-[#2A2C38] bg-[#161822] text-[#D4D4D2] hover:bg-[#222432] hover:border-[#383C4E] hover:text-white active:bg-white active:text-black active:border-white transition-all"
            >
              Documentation
            </Link>
          </div>

          {/* Support callout banner */}
          <div className="mt-5 p-3 sm:p-3.5 rounded-xl border border-[#232530] bg-[#121318] max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-secondary text-center sm:text-left shadow-sm">
            <span>All EF Tools plugins are free. If you find them useful, consider supporting their development.</span>
            <a
              href={KOFI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-3 py-1.5 rounded-lg border border-[#2A2C38] bg-[#1C1E2B] hover:bg-[#252839] hover:border-[#383C4E] text-foreground hover:text-white active:bg-white active:text-black active:border-white transition-all inline-flex items-center gap-1.5 font-medium whitespace-nowrap"
            >
              <span>SUPPORT</span>
              <ArrowUpRight size={12} className="opacity-70" />
            </a>
          </div>
        </section>

        {/* --------------------------------------------------
            PRODUCTS SECTION (Video Previews as requested)
            -------------------------------------------------- */}
        <section id="products" className="space-y-6 scroll-mt-20">
          <div className="pb-1">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
              Available Tools
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
              Free to download and use in personal or commercial work. No account or email needed.
            </p>
          </div>

          <div className="space-y-6">
            {products.map((product) => {
              const isArNode = product.id === "arnold-node-wrangler";
              return (
                <article 
                  key={product.id}
                  className="rounded-2xl border border-[#232530] bg-[#121318] p-5 sm:p-6 flex flex-col lg:flex-row gap-6 lg:gap-8 transition-colors hover:border-[#333644] shadow-md"
                >
                  {/* Left Column: Details */}
                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
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
                            <ul className="space-y-1.5 pt-1 text-xs sm:text-sm text-text-secondary">
                              {product.features.slice(0, 3).map((feat, i) => (
                                <li key={i} className="flex items-start gap-2.5 leading-snug">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_6px_rgba(37,99,235,0.6)]" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </div>

                    {/* Actions - No border-t line, No Docs link */}
                    <div className="pt-1">
                      <DownloadWithSupport
                        downloadUrl={product.downloadUrl}
                        isDownloadReady={product.isDownloadReady}
                        secondaryAction={
                          <Link
                            href={product.detailsPath}
                            className="px-3.5 py-2 rounded-lg border border-[#2A2C38] bg-[#161822] text-[#EDEDEC] hover:bg-[#222432] hover:border-[#383C4E] hover:text-white active:bg-white active:text-black active:border-white transition-all inline-flex items-center gap-1.5 font-medium text-xs"
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
                      <div className="relative rounded-xl overflow-hidden border border-[#232530] bg-[#090A0D] aspect-[16/10] shadow-sm">
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
        <section className="pt-8 space-y-5">
          <div className="max-w-xl">
            <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground mb-1">
              How to install
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              All tools install the same way in Autodesk Maya:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl border border-[#232530] bg-[#121318] p-4 space-y-1.5 shadow-sm">
              <div className="text-xs font-mono text-accent">1. Download</div>
              <h3 className="font-medium text-foreground text-sm">Get the file</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Download the zip file from GitHub Releases and extract the Python script.
              </p>
            </div>

            <div className="rounded-xl border border-[#232530] bg-[#121318] p-4 space-y-1.5 shadow-sm">
              <div className="text-xs font-mono text-accent">2. Drag & Drop</div>
              <h3 className="font-medium text-foreground text-sm">Drop into Maya</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Drag the <code className="text-[11px] bg-[#181922] border border-[#232530] px-1 py-0.5 rounded text-foreground">.py</code> file from your file explorer into the Maya 3D viewport.
              </p>
            </div>

            <div className="rounded-xl border border-[#232530] bg-[#121318] p-4 space-y-1.5 shadow-sm">
              <div className="text-xs font-mono text-accent">3. Ready</div>
              <h3 className="font-medium text-foreground text-sm">Use the shelf icon</h3>
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
