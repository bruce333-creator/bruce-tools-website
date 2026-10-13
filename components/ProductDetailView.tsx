import Link from "next/link";
import Image from "next/image";
import { Download, ArrowLeft, BookOpen, Check, Terminal } from "lucide-react";
import { Product } from "@/config/products";
import LazyVideo from "@/components/LazyVideo";
import DownloadWithSupport from "@/components/DownloadWithSupport";

export default function ProductDetailView({ product }: { product: Product }) {
  return (
    <main className="min-h-screen bg-transparent text-[#EDEDEC] pt-28 pb-32 px-6">
      <div className="max-w-5xl mx-auto space-y-14">

        {/* Breadcrumb */}
        <div>
          <Link 
            href="/#products"
            className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-foreground transition-colors"
          >
            <ArrowLeft size={13} />
            <span>All plugins</span>
          </Link>
        </div>

        {/* --------------------------------------------------
            HERO: Title, Metadata, Direct Download
            -------------------------------------------------- */}
        <section className="space-y-5">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-accent font-medium backdrop-blur-sm">
              {product.version}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-text-secondary backdrop-blur-sm">
              {product.compatibility}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-text-muted backdrop-blur-sm">
              {product.platforms}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-foreground leading-[1.15]">
            {product.name}
          </h1>

          <p className="text-base sm:text-lg text-text-secondary max-w-3xl leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Download & Documentation Harmonized Group */}
          <div className="pt-2">
            <DownloadWithSupport
              downloadUrl={product.downloadUrl}
              isDownloadReady={product.isDownloadReady}
              size="lg"
              showPreSupportNote={true}
              secondaryAction={
                <Link
                  href={product.docsPath}
                  className="px-5 py-2.5 rounded-lg border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] hover:border-white/20 hover:text-white text-sm font-medium text-foreground transition-all inline-flex items-center justify-center gap-2 backdrop-blur-md"
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
          <section className="rounded-2xl border border-white/10 bg-[#14151f]/50 backdrop-blur-md overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.36)]">
            {product.embeddedVideo ? (
              <div className="w-full aspect-video bg-[#0d0e14] relative">
                <LazyVideo src={product.embeddedVideo} />
              </div>
            ) : (
              <div className="w-full aspect-[16/10] bg-[#0d0e14] relative">
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
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Features */}
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-foreground tracking-tight">
                What it does
              </h2>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Requirements */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-foreground tracking-tight">
                Requirements
              </h2>
              <ul className="space-y-2.5">
                {product.technicalDetails.map((req, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                    <Check size={14} className="text-accent mt-0.5 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              {/* Quick Install */}
              <div className="rounded-xl border border-white/10 bg-[#161822]/60 backdrop-blur-md p-4 space-y-1.5 mt-5 shadow-sm">
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
          <section className="rounded-2xl border border-white/10 bg-[#161822]/60 backdrop-blur-md p-12 text-center space-y-2 shadow-sm">
            <h2 className="text-xl font-medium text-foreground">Coming Soon</h2>
            <p className="text-sm text-text-secondary">ArNode for Autodesk Maya is currently in development.</p>
          </section>
        )}

        {/* --------------------------------------------------
            FOOTER CTA (No gray divider line, harmonized buttons)
            -------------------------------------------------- */}
        <section className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg text-foreground">
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
                  className="px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] hover:border-white/20 hover:text-white text-xs font-medium text-foreground transition-all inline-flex items-center justify-center gap-1.5 backdrop-blur-md"
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
