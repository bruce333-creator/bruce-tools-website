import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | EF Tools",
};

export default function Terms() {
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
          <h1 className="font-heading text-3xl sm:text-4xl font-medium text-white tracking-tight mb-2">Terms of Service</h1>
          <p className="text-xs text-text-muted">Effective Date: 2026</p>
        </div>
        
        <div className="space-y-8 text-sm text-text-secondary leading-relaxed pt-4">
          <section className="space-y-2">
            <h2 className="font-heading text-lg font-medium text-white">1. Non-Exclusive License</h2>
            <p>By downloading tools from EF Tools, you are granted a non-exclusive, non-transferable license to use the scripts for personal and commercial projects in Autodesk Maya.</p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-medium text-white">2. Usage Restrictions</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-text-secondary">
              <li>No commercial redistribution or resale of the script files.</li>
              <li>No unauthorized claiming of authorship of the source scripts.</li>
              <li>Personal modifications for pipeline integration are permitted.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-medium text-white">3. Disclaimer of Warranty</h2>
            <p>The software is provided &quot;as is&quot;, without warranty of any kind. EF Tools and its author (Enzo Freminet) shall not be held liable for any claim, damages, scene corruption or downtime arising out of the use of these tools.</p>
            <p className="text-xs text-text-muted pt-2">Autodesk Maya and RenderMan are trademarks of their respective owners. EF Tools is an independent project and is not affiliated with Autodesk, Pixar, or NVIDIA.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
