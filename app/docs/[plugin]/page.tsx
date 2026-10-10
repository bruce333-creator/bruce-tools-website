import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { products, getProductById } from "@/config/products";
import { notFound } from "next/navigation";
import { Download } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const ids = products.map((product) => ({
    plugin: product.id,
  }));
  ids.push({ plugin: "vanta-node" });
  return ids;
}

export async function generateMetadata({ params }: { params: Promise<{ plugin: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.plugin);
  return {
    title: product ? `${product.name} Documentation | EF Tools` : "Documentation | EF Tools",
  };
}

export default async function DocPage({ params }: { params: Promise<{ plugin: string }> }) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.plugin);
  
  if (!product) {
    notFound();
  }

  // Map product to actual filename in public/info
  let filename = `README_${product.id.replace(/-/g, '_')}.md`;
  if (product.id === "arnold-node-wrangler" || resolvedParams.plugin === "vanta-node") {
    filename = "README_vanta_node.md";
  }

  const filePath = path.join(process.cwd(), "public", "info", filename);
  
  let markdownContent = "";
  if (product.id === "arnold-node-wrangler") {
    markdownContent = `# ArNode\n\nComing soon.`;
  } else {
    try {
      markdownContent = fs.readFileSync(filePath, "utf-8");
    } catch (e) {
      markdownContent = `# Documentation\n\nNo documentation file found for \`${product.name}\`.`;
    }
  }

  return (
    <div className="space-y-6">
      {/* Doc Header */}
      <div className="border-b border-border pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-accent mb-1">
            <span>{product.version}</span>
            <span>•</span>
            <span className="text-text-muted">{product.compatibility}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
            {product.name}
          </h1>
        </div>

        {product.isDownloadReady && (
          <a
            href={product.downloadUrl}
            download
            className="px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover text-xs font-medium transition-colors inline-flex items-center gap-2 self-start sm:self-auto"
          >
            <Download size={13} />
            Download
          </a>
        )}
      </div>

      {/* Markdown rendered body */}
      <article className="prose prose-invert max-w-none text-text-secondary text-sm leading-relaxed prose-headings:text-foreground prose-headings:font-normal prose-h1:text-xl prose-h2:text-lg prose-h2:border-b prose-h2:border-border prose-h2:pb-1.5 prose-h2:mt-8 prose-h3:text-base prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:text-[#ECECEB] prose-code:bg-surface-secondary prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-pre:bg-surface prose-pre:border prose-pre:border-border prose-pre:rounded-xl prose-table:border-border prose-th:text-foreground prose-th:border-border prose-td:border-border">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
          {markdownContent}
        </ReactMarkdown>
      </article>
    </div>
  );
}
