import Link from "next/link";
import { products } from "@/config/products";
import { BookOpen, ChevronRight } from "lucide-react";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen pt-24 bg-[#0a0a0a] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0 py-12 md:sticky top-24 h-fit border-b md:border-b-0 md:border-r border-glassBorder/30 pr-0 md:pr-8">
          <div className="flex items-center gap-3 mb-8 text-white font-semibold text-xl">
            <BookOpen className="text-gray-400" size={24} />
            Documentation
          </div>
          
          <nav className="flex flex-col gap-2">
            {products.map((product) => (
              <Link 
                key={product.id}
                href={`/docs/${product.id}`}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors text-sm font-medium text-gray-400 hover:text-white"
              >
                {product.name}
                <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-gray-500" />
              </Link>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 py-12 pb-32 min-h-[50vh]">
          {children}
        </main>
        
      </div>
    </div>
  );
}
