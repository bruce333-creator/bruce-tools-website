import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | EF Tools",
};

export default function Refund() {
  return (
    <main className="min-h-screen bg-transparent text-[#EDEDEC] pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <Link 
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-foreground transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </Link>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-normal text-foreground tracking-tight mb-2">Refund Policy</h1>
          <p className="text-xs text-text-muted">Effective Date: 2026</p>
        </div>
        
        <div className="space-y-8 text-sm text-text-secondary leading-relaxed pt-4">
          <section className="p-4 rounded-xl border border-border bg-surface text-foreground">
            <p className="font-medium text-sm">All EF Tools plugins are completely free of charge.</p>
          </section>

          <section className="space-y-2">
            <p>Because our Maya plugins (Rman Node, Ultimate Ref Tool, and ArNode) are distributed as free, open downloads without financial transactions, payment details, or subscriptions, no refund requests are applicable.</p>
            <p>If you encounter technical issues or bugs in any script, please submit an issue on the relevant GitHub repository or reach out via our contact page.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
