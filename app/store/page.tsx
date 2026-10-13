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
    <main className="min-h-screen bg-transparent text-[#EDEDEC] pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Back Link */}
        <div>
          <Link 
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-foreground active:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </Link>
        </div>

        {/* Header */}
        <section className="space-y-2 max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">
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
              className="rounded-2xl border border-[#232530] bg-[#121318] p-5 flex flex-col justify-between space-y-4 hover:border-[#333644] transition-colors shadow-md"
            >
              <div className="space-y-3">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#232530] bg-[#090A0D]">
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

                <h2 className="text-xl font-medium text-foreground tracking-tight">
                  <Link href={product.detailsPath} className="hover:text-accent transition-colors">
                    {product.name}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-[#232530] flex items-center justify-between gap-3 text-xs">
                {product.isDownloadReady ? (
                  <a
                    href={product.downloadUrl}
                    download
                    className="px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover active:bg-white active:text-black active:border-white font-medium transition-all inline-flex items-center gap-1.5"
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
                  className="px-3.5 py-2 rounded-lg border border-[#2A2C38] bg-[#161822] text-[#D4D4D2] hover:bg-[#222432] hover:border-[#383C4E] hover:text-white active:bg-white active:text-black active:border-white transition-all inline-flex items-center gap-1.5"
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
