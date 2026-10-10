import Link from "next/link";
import { products } from "@/config/products";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-[#141413] text-text-secondary pt-14 pb-12 px-6 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="max-w-sm space-y-2">
          <Link href="/" className="text-base font-medium text-foreground tracking-tight">
            EF Tools
          </Link>
          <p className="text-xs text-text-secondary leading-relaxed">
            Free tools developed for Autodesk Maya by Enzo Freminet.
          </p>
          <p className="text-[11px] text-text-muted leading-relaxed pt-2">
            Autodesk Maya and RenderMan are trademarks of their respective owners. EF Tools is an independent project.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
          <div className="flex flex-col gap-2">
            <span className="text-foreground text-[11px] font-medium">Tools</span>
            {products.map((p) => (
              <Link 
                key={p.id} 
                href={p.detailsPath} 
                className="hover:text-foreground transition-colors"
              >
                {p.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-foreground text-[11px] font-medium">Resources</span>
            <Link href="/docs/renderman-node-wrangler" className="hover:text-foreground transition-colors">Documentation</Link>
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            <a 
              href="https://github.com/bruce333-creator" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-foreground text-[11px] font-medium">Legal</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
            <Link href="/license" className="hover:text-foreground transition-colors">License</Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-text-muted gap-4">
        <p>© {new Date().getFullYear()} Enzo Freminet — EF Tools.</p>
        <p>Free for personal and commercial use.</p>
      </div>
    </footer>
  );
}
