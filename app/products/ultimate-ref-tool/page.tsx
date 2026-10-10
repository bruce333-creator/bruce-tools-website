import { notFound } from "next/navigation";
import { getProductById } from "@/config/products";
import ProductDetailView from "@/components/ProductDetailView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ultimate Ref Tool | EF Tools",
  description: "Fast reference image plane importer with automatic camera axis detection, alpha adjustment, and locked display layer hierarchy.",
};

export default function UltimateRefToolPage() {
  const product = getProductById("ultimate-ref-tool");
  if (!product) return notFound();

  return <ProductDetailView product={product} />;
}
