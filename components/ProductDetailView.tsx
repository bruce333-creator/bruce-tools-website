import Link from "next/link";
import Image from "next/image";
import { Download, ArrowLeft, BookOpen, Check, Terminal } from "lucide-react";
import { Product } from "@/config/products";
import LazyVideo from "@/components/LazyVideo";
import DownloadWithSupport from "@/components/DownloadWithSupport";

export default function ProductDetailView({ product }: { product: Product }) {
  return (
    <main className="min-h-screen bg-[#151515] text-[#EDEDEC] pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Breadcrumb */}
        <div>
          <Link 
            href="/#products"
            className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            <span>All plugins</span>
          </Link>
        </div>

        {/* --------------------------------------------------
            HERO: Title, Metadata, Direct Download
            -------------------------------------------------- */}
        <section className="space-y-3.5">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-0.5 rounded-md bg-[#1B1B1B] border border-white/[0.08] text-white font-medium">
              {product.version}
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-[#1B1B1B] border border-white/[0.08] text-text-secondary">
              {product.compatibility}
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-[#1B1B1B] border border-white/[0.08] text-text-muted">
              {product.platforms}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-medium tracking-tight text-white leading-[1.15]">
            {product.name}
          </h1>

          <p className="text-sm sm:text-base text-text-secondary max-w-3xl leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Download & Documentation Harmonized Group */}
          <div className="pt-1">
            <DownloadWithSupport
              downloadUrl={product.downloadUrl}
              isDownloadReady={product.isDownloadReady}
              size="lg"
              showPreSupportNote={true}
              secondaryAction={
                <Link
                  href={product.docsPath}
                  className="px-5 py-2.5 rounded-md border border-white/[0.12] bg-transparent hover:bg-white/[0.04] hover:border-white/30 text-sm font-medium text-text-secondary hover:text-white transition-all inline-flex items-center justify-center gap-2"
                >
                  <BookOpen size={15} />
                  Documentation
                </Link>
              }
            />
          </div>
        </section>

        {/* --------------------------------------------------
            MEDIA / UI SHOWCASE
            -------------------------------------------------- */}
        {(product.embeddedVideo || product.uiScreenshot || product.heroImage) && (
          <section className="rounded-xl border border-white/[0.06] bg-[#181818] overflow-hidden">
            {product.embeddedVideo ? (
              <div className="w-full aspect-video bg-[#090A0D] relative">
                <LazyVideo src={product.embeddedVideo} />
              </div>
            ) : (
              <div className="w-full aspect-[16/10] bg-[#090A0D] relative">
                <Image
                  src={product.uiScreenshot || product.heroImage}
                  alt={`${product.name} interface`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 960px"
                />
              </div>
            )}
          </section>
        )}

        {/* --------------------------------------------------
            FEATURES & REQUIREMENTS
            -------------------------------------------------- */}
        {product.features.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Features */}
            <div className="md:col-span-2 space-y-3">
              <h2 className="font-heading text-lg sm:text-xl font-medium text-foreground tracking-tight">
                What it does
              </h2>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Requirements */}
            <div className="space-y-3">
              <h2 className="font-heading text-lg sm:text-xl font-medium text-foreground tracking-tight">
                Requirements
              </h2>
              <ul className="space-y-2">
                {product.technicalDetails.map((req, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                    <Check size={14} className="text-accent mt-0.5 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              {/* Quick Install */}
              <div className="rounded-xl border border-white/[0.06] bg-[#1B1B1B] p-3.5 space-y-1 mt-3">
                <div className="flex items-center gap-2 text-xs text-foreground font-medium">
                  <Terminal size={13} className="text-accent" />
                  <span>Installation</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Drag the Python script into any Maya viewport. The tool creates a button on your active shelf automatically.
                </p>
              </div>
            </div>
          </section>
        ) : (
          <section className="rounded-xl border border-white/[0.06] bg-[#1B1B1B] p-8 text-center space-y-2">
            <h2 className="font-heading text-lg font-medium text-foreground">Coming Soon</h2>
            <p className="text-xs sm:text-sm text-text-secondary">ArNode for Autodesk Maya is currently in development.</p>
          </section>
        )}

        {/* --------------------------------------------------
            FOOTER CTA (No gray divider line, harmonized buttons)
            -------------------------------------------------- */}
        <section className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-heading text-base sm:text-lg text-white font-medium">
              {product.name}
            </h3>
            <p className="text-xs text-text-secondary mt-0.5">
              Free download for Autodesk Maya.
            </p>
          </div>

          <div className="w-full sm:w-auto">
            <DownloadWithSupport
              downloadUrl={product.downloadUrl}
              isDownloadReady={product.isDownloadReady}
              size="sm"
              secondaryAction={
                <Link
                  href={product.docsPath}
                  className="px-3.5 py-1.5 rounded-md border border-white/[0.12] bg-transparent hover:bg-white/[0.04] hover:border-white/30 text-xs font-medium text-text-secondary hover:text-white transition-all inline-flex items-center justify-center gap-1.5"
                >
                  <BookOpen size={13} />
                  Documentation
                </Link>
              }
            />
          </div>
        </section>

      </div>
    </main>
  );
}
