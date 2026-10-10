import { notFound } from "next/navigation";
import { getProductById } from "@/config/products";
import ProductDetailView from "@/components/ProductDetailView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArNode | EF Tools",
  description: "ArNode - Arnold shader utility for Autodesk Maya. Coming soon.",
};

export default function VantaNodeAliasPage() {
  const product = getProductById("arnold-node-wrangler");
  if (!product) return notFound();

  return <ProductDetailView product={product} />;
}
