import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products, KOFI_URL } from "@/config/products";
import LazyVideo from "@/components/LazyVideo";
import DownloadWithSupport from "@/components/DownloadWithSupport";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-foreground pt-20 pb-14 px-6">
      <div className="max-w-5xl mx-auto space-y-9">

        {/* --------------------------------------------------
            HERO SECTION
            -------------------------------------------------- */}
        <section className="pt-2 sm:pt-6 pb-1 flex flex-col items-center text-center max-w-xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-foreground leading-tight mb-2.5">
            Free Maya tools for 3D artists
          </h1>

          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4 max-w-md">
            Lightweight Python utilities designed to streamline shading workflows and scene setup in Autodesk Maya.
          </p>

          <div className="flex items-center justify-center gap-2.5 text-xs">
            <a 
              href="#products"
              className="px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover active:bg-white active:text-black active:border-white transition-all font-medium inline-flex items-center gap-2"
            >
              Browse tools
              <ArrowRight size={13} />
            </a>
            <Link 
              href="/docs/renderman-node-wrangler"
              className="px-4 py-2 rounded-lg border border-white/[0.06] bg-white/[0.03] text-[#D4D4D2] hover:bg-white/[0.07] hover:border-white/[0.12] hover:text-white active:bg-white active:text-black active:border-white transition-all font-medium inline-flex items-center"
            >
              Documentation
            </Link>
          </div>

          {/* Support notice - subtle, no heavy box border */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-xs text-text-muted">
            <span className="text-[11px] sm:text-xs">All tools are free. Donations support development.</span>
            <a
              href={KOFI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-0.5 rounded text-foreground hover:text-white border border-white/[0.06] hover:border-white/[0.15] bg-white/[0.03] hover:bg-white/[0.07] active:bg-white active:text-black transition-all inline-flex items-center gap-1 font-medium text-[11px] animate-gentle-pulse"
            >
              <span>SUPPORT</span>
              <ArrowUpRight size={11} className="opacity-70" />
            </a>
          </div>
        </section>

        {/* --------------------------------------------------
            PRODUCTS SECTION
            -------------------------------------------------- */}
        <section id="products" className="space-y-4 scroll-mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-medium tracking-tight text-foreground">
              Tools
            </h2>
            <span className="text-xs text-text-muted">
              Free &amp; open downloads
            </span>
          </div>

          <div className="space-y-4">
            {products.map((product) => {
              const isArNode = product.id === "arnold-node-wrangler";
              const displayFeatures = product.features.slice(0, 2);

              return (
                <article 
                  key={product.id}
                  className="rounded-xl bg-[#101116] border border-white/[0.03] hover:border-white/[0.06] p-5 flex flex-col lg:flex-row gap-5 lg:gap-6 transition-colors"
                >
                  {/* Left Column: Details */}
                  <div className="flex-1 flex flex-col justify-between space-y-3.5">
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-medium text-foreground tracking-tight">
                        <Link href={product.detailsPath} className="hover:text-accent transition-colors">
                          {product.name}
                        </Link>
                      </h3>

                      {isArNode ? (
                        <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                          Shader automation tool for Arnold in Autodesk Maya. Coming soon.
                        </p>
                      ) : (
                        <>
                          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                            {product.shortDescription}
                          </p>

                          {displayFeatures.length > 0 && (
                            <ul className="space-y-1 pt-0.5 text-xs text-text-secondary">
                              {displayFeatures.map((feat, i) => (
                                <li key={i} className="flex items-start gap-2 leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </div>

                    {/* Actions: Download + Details */}
                    <div className="pt-1">
                      <DownloadWithSupport
                        downloadUrl={product.downloadUrl}
                        isDownloadReady={product.isDownloadReady}
                        secondaryAction={
                          <Link
                            href={product.detailsPath}
                            className="px-3.5 py-2 rounded-lg border border-white/[0.06] bg-white/[0.03] text-[#EDEDEC] hover:bg-white/[0.07] hover:border-white/[0.12] hover:text-white active:bg-white active:text-black active:border-white transition-all inline-flex items-center gap-1.5 font-medium text-xs"
                          >
                            Details
                            <ArrowRight size={12} />
                          </Link>
                        }
                      />
                    </div>
                  </div>

                  {/* Right Column: Video Preview without harsh border */}
                  {product.embeddedVideo && (
                    <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0 flex flex-col justify-center">
                      <div className="relative rounded-lg overflow-hidden bg-black/50 aspect-video">
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
        <section className="pt-2 space-y-3">
          <h2 className="text-lg sm:text-xl font-medium tracking-tight text-foreground">
            How to install
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="rounded-lg bg-[#101116] border border-white/[0.03] p-3.5 space-y-1">
              <div className="text-[11px] font-mono text-accent">01. Download</div>
              <h3 className="font-medium text-foreground text-xs sm:text-sm">Get the file</h3>
              <p className="text-text-muted leading-relaxed">
                Download the release zip and extract the Python script.
              </p>
            </div>

            <div className="rounded-lg bg-[#101116] border border-white/[0.03] p-3.5 space-y-1">
              <div className="text-[11px] font-mono text-accent">02. Drag & Drop</div>
              <h3 className="font-medium text-foreground text-xs sm:text-sm">Drop into Maya</h3>
              <p className="text-text-muted leading-relaxed">
                Drag the <code className="bg-white/[0.05] px-1 py-0.5 rounded text-foreground text-[10px]">.py</code> file into the Maya 3D viewport.
              </p>
            </div>

            <div className="rounded-lg bg-[#101116] border border-white/[0.03] p-3.5 space-y-1">
              <div className="text-[11px] font-mono text-accent">03. Ready</div>
              <h3 className="font-medium text-foreground text-xs sm:text-sm">Use the shelf icon</h3>
              <p className="text-text-muted leading-relaxed">
                Click the newly created shelf button to launch the tool.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
