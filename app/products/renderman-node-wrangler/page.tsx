import { notFound } from "next/navigation";
import { getProductById } from "@/config/products";
import ProductDetailView from "@/components/ProductDetailView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RenderMan Node Wrangler | EF Tools",
  description: "Automate PBR shader construction, linear color management, and interactive Viewport 2.0 previews for Pixar's RenderMan in Autodesk Maya.",
};

export default function RenderManWranglerPage() {
  const product = getProductById("renderman-node-wrangler");
  if (!product) return notFound();

  return <ProductDetailView product={product} />;
}
