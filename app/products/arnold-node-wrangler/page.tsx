import { notFound } from "next/navigation";
import { getProductById } from "@/config/products";
import ProductDetailView from "@/components/ProductDetailView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArNode | EF Tools",
  description: "ArNode - Arnold Node Wrangler for Autodesk Maya. Automates PBR shader networks, texture drag & drop, and lookdev.",
};

export default function ArnoldNodeWranglerPage() {
  const product = getProductById("arnold-node-wrangler");
  if (!product) return notFound();

  return <ProductDetailView product={product} />;
}
