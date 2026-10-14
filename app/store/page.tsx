import Link from "next/link";
import Image from "next/image";
import { Download, ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { products } from "@/config/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tools | EF Tools",
  description: "Browse free tools for Autodesk Maya.",
};

export default function StorePage() {
  return (
    <main className="min-h-screen bg-[#151515] text-[#EDEDEC] pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Back Link */}
        <div>
          <Link 
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </Link>
        </div>

        {/* Header */}
        <section className="space-y-2 max-w-xl">
          <h1 className="font-heading text-3xl sm:text-4xl font-medium tracking-tight text-white">
            All Tools
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            Free tools developed for Autodesk Maya. Download directly from GitHub Releases.
          </p>
        </section>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {products.map((product) => (
            <article 
              key={product.id}
              className="rounded-xl border border-white/[0.05] bg-[#1B1B1B] p-5 flex flex-col justify-between space-y-4 hover:border-white/[0.12] transition-colors"
            >
              <div className="space-y-3">
                <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/[0.05] bg-[#121212]">
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

                <h2 className="font-heading text-xl font-medium text-foreground tracking-tight">
                  <Link href={product.detailsPath} className="hover:text-white transition-colors">
                    {product.name}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between gap-3 text-xs">
                {product.isDownloadReady ? (
                  <a
                    href={product.downloadUrl}
                    download
                    className="px-4 py-2 rounded-md bg-[#EDEDEC] text-[#151515] hover:bg-white hover:text-black font-medium transition-all inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Download</span>
                    <ArrowUpRight size={13} />
                  </a>
                ) : (
                  <span className="text-xs text-text-muted">
                    Release coming soon
                  </span>
                )}

                <Link
                  href={product.detailsPath}
                  className="text-xs text-text-secondary hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/80 transition-colors inline-flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}
