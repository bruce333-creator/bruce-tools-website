import Link from "next/link";
import Image from "next/image";
import { Download, ArrowRight, ArrowLeft } from "lucide-react";
import { products } from "@/config/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tools | EF Tools",
  description: "Browse free tools for Autodesk Maya.",
};

export default function StorePage() {
  return (
    <main className="min-h-screen bg-transparent text-[#EDEDEC] pt-28 pb-32 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Back Link */}
        <div>
          <Link 
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-foreground transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </Link>
        </div>

        {/* Header */}
        <section className="space-y-3 max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">
            All Tools
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            Free tools developed for Autodesk Maya. Download directly from GitHub Releases.
          </p>
        </section>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {products.map((product) => (
            <article 
              key={product.id}
              className="rounded-2xl border border-white/10 bg-[#14151f]/50 backdrop-blur-md p-6 flex flex-col justify-between space-y-5 hover:border-white/20 hover:bg-[#181926]/60 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <div className="space-y-3.5">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-border bg-surface-secondary">
                  <Image 
                    src={product.uiScreenshot || product.heroImage} 
                    alt={product.name} 
                    fill
                    className="object-cover" 
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>

                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="text-accent font-medium">{product.version}</span>
                  <span className="text-text-muted">{product.compatibility}</span>
                </div>

                <h2 className="text-2xl font-medium text-foreground tracking-tight">
                  <Link href={product.detailsPath} className="hover:text-accent transition-colors">
                    {product.name}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-3 text-xs">
                {product.isDownloadReady ? (
                  <a
                    href={product.downloadUrl}
                    download
                    className="px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover font-medium transition-colors inline-flex items-center gap-1.5"
                  >
                    <Download size={13} />
                    Download
                  </a>
                ) : (
                  <span className="text-xs text-text-muted">
                    Release coming soon
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
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}
