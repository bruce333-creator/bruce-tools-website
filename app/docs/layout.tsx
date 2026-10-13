import Link from "next/link";
import { products } from "@/config/products";
import { ArrowLeft } from "lucide-react";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-transparent text-[#EDEDEC]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top bar / Back */}
        <div className="mb-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-foreground active:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-6 pt-2">
          {/* Docs Sidebar */}
          <aside className="w-full md:w-60 shrink-0 md:sticky top-28 h-fit space-y-4">
            <h2 className="text-foreground text-base font-medium">
              Documentation
            </h2>
            
            <nav className="flex flex-col gap-1 text-xs">
              {products.map((product) => (
                <Link 
                  key={product.id}
                  href={`/docs/${product.id}`}
                  className="px-3 py-2 rounded-lg border border-transparent transition-colors text-text-secondary hover:text-foreground hover:bg-surface flex items-center justify-between"
                >
                  <span className="truncate">{product.name}</span>
                  <span className="text-[11px] text-text-muted">
                    {product.version}
                  </span>
                </Link>
              ))}
            </nav>
          </aside>

          {/* Markdown Content Area */}
          <main className="flex-1 min-w-0 max-w-3xl">
            {children}
          </main>
        </div>

      </div>
    </div>
  );
}
