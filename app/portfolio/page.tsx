import fs from "fs";
import path from "path";
import PortfolioClient, { PortfolioItem } from "./PortfolioClient";

export default function PortfolioPage() {
  const imagesDir = path.join(process.cwd(), "public", "images", "portfolio");
  let portfolioItems: PortfolioItem[] = [];

  try {
    const files = fs.readdirSync(imagesDir);
    
    // Filter out wireframes and get base images
    const allImages = files.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));
    const wireframes = allImages.filter(file => file.includes("-W."));
    const baseImages = allImages.filter(file => !file.includes("-W."));

    portfolioItems = baseImages.map((file, index) => {
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      
      // Look for a corresponding wireframe (e.g. image-W.jpg)
      const wireframeName = `${baseName}-W${ext}`;
      const hasWireframe = wireframes.includes(wireframeName);
      
      // Format the title (e.g., "props-01" -> "Props 01")
      const title = baseName
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());

      return {
        id: index + 1,
        title: title,
        image: `/images/portfolio/${file}`,
        wireframe: hasWireframe ? `/images/portfolio/${wireframeName}` : undefined,
      };
    });

  } catch (error) {
    console.error("Error reading portfolio directory:", error);
  }

  return <PortfolioClient portfolioItems={portfolioItems} />;
}
