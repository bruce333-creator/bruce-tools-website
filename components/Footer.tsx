import Link from "next/link";
import { products, KOFI_URL } from "@/config/products";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.05] bg-[#121212] text-text-secondary pt-10 pb-8 px-6 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div className="max-w-sm space-y-1.5">
          <Link href="/" className="font-heading text-base font-medium text-foreground tracking-tight hover:text-white transition-colors">
            EF Tools
          </Link>
          <p className="text-xs text-text-secondary leading-relaxed">
            Free tools developed for Autodesk Maya by Enzo Freminet.
          </p>
          <p className="text-[11px] text-text-muted leading-relaxed pt-1">
            Autodesk Maya and RenderMan are trademarks of their respective owners. EF Tools is an independent project.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
          <div className="flex flex-col gap-1.5">
            <span className="text-foreground text-[11px] font-medium uppercase tracking-wider">Tools</span>
            {products.map((p) => (
              <Link 
                key={p.id} 
                href={p.detailsPath} 
                className="hover:text-foreground active:text-white transition-colors"
              >
                {p.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-foreground text-[11px] font-medium uppercase tracking-wider">Resources</span>
            <Link href="/docs/renderman-node-wrangler" className="hover:text-foreground active:text-white transition-colors">Documentation</Link>
            <Link href="/about" className="hover:text-foreground active:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-foreground active:text-white transition-colors">Contact</Link>
            <a 
              href={KOFI_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-foreground active:text-white transition-colors"
            >
              Support
            </a>
            <a 
              href="https://github.com/bruce333-creator" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-foreground active:text-white transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-foreground text-[11px] font-medium uppercase tracking-wider">Legal</span>
            <Link href="/terms" className="hover:text-foreground active:text-white transition-colors">Terms of Use</Link>
            <Link href="/license" className="hover:text-foreground active:text-white transition-colors">License</Link>
            <Link href="/privacy" className="hover:text-foreground active:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/[0.05] mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-text-muted gap-2">
        <p>© {new Date().getFullYear()} Enzo Freminet — EF Tools.</p>
        <p>Free for personal and commercial use.</p>
      </div>
    </footer>
  );
}
