import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | EF Tools",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#151515] text-[#EDEDEC] pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <Link 
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </Link>
        </div>

        <div>
          <h1 className="font-heading text-3xl sm:text-4xl font-medium text-white tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-xs text-text-muted">Effective Date: 2026</p>
        </div>
        
        <div className="space-y-8 text-sm text-text-secondary leading-relaxed pt-4">
          <section className="space-y-2">
            <h2 className="font-heading text-lg font-medium text-white">1. No User Data Collection</h2>
            <p>EF Tools plugins do not contain telemetry, tracking, background networking calls, or account authentication. They execute purely locally inside your local Autodesk Maya Python environment.</p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-medium text-white">2. Direct Downloads</h2>
            <p>All tool files are hosted directly on GitHub Releases. When downloading, GitHub operates according to its own privacy policy.</p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-medium text-white">3. Website Analytics</h2>
            <p>This static website does not use tracking cookies or persistent advertising identifiers.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
