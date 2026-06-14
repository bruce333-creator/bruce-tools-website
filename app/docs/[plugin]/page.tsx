import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { products } from "@/config/products";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((product) => ({
    plugin: product.id,
  }));
}

export default function DocPage({ params }: { params: { plugin: string } }) {
  const product = products.find(p => p.id === params.plugin);
  
  if (!product) {
    notFound();
  }

  const filename = `README_${params.plugin.replace(/-/g, '_')}.md`;
  const filePath = path.join(process.cwd(), "public", "info", filename);
  
  let markdownContent = "";
  try {
    markdownContent = fs.readFileSync(filePath, "utf-8");
  } catch (e) {
    markdownContent = `# Documentation not found\n\nWe could not find the documentation file (\`${filename}\`) for this plugin.`;
  }

  return (
    <article className="prose prose-invert prose-gray max-w-none prose-headings:font-semibold prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-pre:bg-[#111] prose-pre:border prose-pre:border-glassBorder/30">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
        {markdownContent}
      </ReactMarkdown>
    </article>
  );
}
