import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | EF Tools",
  description: "About EF Tools: free, practical Autodesk Maya utilities created by Enzo Freminet.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-transparent text-[#EDEDEC] pt-24 pb-16 px-6">
      <div className="max-w-2xl mx-auto space-y-6">
        
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
        <section className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-foreground">
            About EF Tools
          </h1>
          <p className="text-sm text-text-muted">
            By Enzo Freminet — Lyon, France
          </p>
        </section>

        {/* Content */}
        <section className="space-y-6 text-sm sm:text-base text-text-secondary leading-relaxed pt-2">
          <p>
            EF Tools is a small collection of Python utilities I created to automate repetitive tasks in Autodesk Maya.
          </p>

          <p>
            When working on 3D projects, setting up identical shader nodes for every material or aligning image planes manually takes a lot of time. I wrote these tools to make those steps faster and simpler.
          </p>

          <p>
            All tools are completely free to download and use in personal or commercial projects. No account or registration is required.
          </p>
        </section>

        {/* Links */}
        <section className="pt-6 flex items-center justify-between text-xs">
          <span className="text-text-muted">
            Autodesk Maya 2020–2025+
          </span>
          <a
            href="https://github.com/bruce333-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg border border-[#333331] bg-[#222221] text-[#D4D4D2] hover:bg-[#2C2C2B] hover:border-[#424240] hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <span>GitHub Releases</span>
            <ArrowUpRight size={13} />
          </a>
        </section>

      </div>
    </main>
  );
}
