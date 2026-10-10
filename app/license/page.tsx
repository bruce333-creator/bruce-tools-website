import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software License | EF Tools",
};

export default function License() {
  return (
    <main className="min-h-screen bg-[#141413] text-[#EDEDEC] pt-28 pb-32 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <div>
          <Link 
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-foreground transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </Link>
        </div>

        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-foreground tracking-tight mb-2">Software License</h1>
          <p className="text-xs font-mono text-text-muted">Author: Enzo Freminet (Copyright © 2026)</p>
        </div>
        
        <div className="space-y-8 text-sm text-text-secondary leading-relaxed font-sans border-t border-border pt-8">
          <section className="space-y-3">
            <h2 className="font-serif text-lg font-medium text-foreground">Permitted Use (Users MAY):</h2>
            <ul className="list-disc pl-5 space-y-2 text-text-secondary">
              <li>Install and use the tools on personal and studio workstations.</li>
              <li>Use the tools for commercial production work and render output.</li>
              <li>Publish commercial projects created with the assistance of the tools.</li>
              <li>Make personal code adjustments to tailor integration with studio Maya pipelines.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-lg font-medium text-foreground">Restrictions (Users MAY NOT):</h2>
            <ul className="list-disc pl-5 space-y-2 text-text-secondary">
              <li>Redistribute or resell the software files to third parties.</li>
              <li>Upload modified versions as competing standalone packages without consent.</li>
              <li>Remove copyright notices or author headers from the Python source scripts.</li>
            </ul>
          </section>

          <section className="pt-6 border-t border-border text-xs text-text-muted leading-relaxed">
            <p>Autodesk Maya and RenderMan are trademarks of their respective owners. EF Tools is an independent development initiative.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
