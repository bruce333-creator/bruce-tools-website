export type Product = {
  id: string;
  name: string;
  alternateName?: string;
  version: string;
  shortDescription: string;
  compatibility: string;
  platforms: string;
  downloadUrl: string; // Direct file URL on GitHub Releases
  isDownloadReady: boolean;
  logoImage: string;
  heroImage: string;
  uiScreenshot: string;
  detailsPath: string;
  docsPath: string;
  features: string[];
  technicalDetails: string[];
  embeddedVideo?: string;
};

export const KOFI_URL = "https://ko-fi.com/bruce33";

export const products: Product[] = [
  {
    id: "renderman-node-wrangler",
    name: "Rman Node",
    alternateName: "RenderMan Node Wrangler",
    version: "v2.0",
    shortDescription: "Automates PBR shader creation, displacement chains, and HUD inspection for RenderMan in Maya.",
    compatibility: "Maya 2022+ · RenderMan 24/25/26+ · Python 3",
    platforms: "Windows & macOS",
    downloadUrl: "https://github.com/bruce333-creator/Rman_Node/releases/download/maj/RMNW.zip",
    isDownloadReady: true,
    logoImage: "/images/logo_rman_node.png",
    heroImage: "/images/store/renderman-wrangler-logo.jpg",
    uiScreenshot: "/images/store/renderman-ui.jpg",
    detailsPath: "/products/renderman-node-wrangler",
    docsPath: "/docs/renderman-node-wrangler",
    features: [
      "One-click PBR material and nodal network creation from texture sets",
      "Automated displacement setup and live texture HUD preview (Shift+V)",
      "15 calibrated PBR presets: Metal, Glass, Skin, Car Paint, and more",
      "Snug Texture HUD with live PxrRemap bounds feedback",
      "Neutral Lambert viewport fallback without shading artifacts",
      "Standalone drag-and-drop installer for Maya shelf"
    ],
    technicalDetails: [
      "Autodesk Maya 2022, 2023, 2024, 2025, 2026+",
      "Pixar's RenderMan 24+, 25+, 26+",
      "Python 3 (PySide2 & PySide6)",
      "Formats: .tx, .png, .jpg, .exr, .tif, .tiff, .hdr"
    ],
    embeddedVideo: "/videos/build-shader.mp4"
  },
  {
    id: "ultimate-ref-tool",
    name: "Ultimate Ref Tool",
    version: "v2.1",
    shortDescription: "Imports and sets up reference image planes with automatic camera axis detection and locked display layers.",
    compatibility: "Maya 2022+ (incl. 2025+)",
    platforms: "Windows & macOS",
    downloadUrl: "https://github.com/bruce333-creator/Ultimate_Ref_Tool/releases/download/maj/ultimate_ref_tool_v21.py",
    isDownloadReady: true,
    logoImage: "/images/logo_ultimate_ref.png",
    heroImage: "/images/store/ultimate-ref-logo.jpg",
    uiScreenshot: "/images/store/ultimate-ref-ui.jpg",
    detailsPath: "/products/ultimate-ref-tool",
    docsPath: "/docs/ultimate-ref-tool",
    features: [
      "Automatic Front, Side, and Top axis detection on drag-and-drop",
      "Clean scene hierarchy with locked display layer and 0.5 alpha gain",
      "Manual axis override buttons for atypical image names",
      "One-click visibility toggle and complete reference scene purge",
      "Adaptive PySide2 and PySide6 support across Maya 2022 to 2026"
    ],
    technicalDetails: [
      "Autodesk Maya 2022, 2023, 2024, 2025+",
      "Adaptive PySide2 (Maya ≤2024) and PySide6 (Maya ≥2025) compatibility",
      "Supported formats: .png, .jpg, .jpeg, .tga, .tif, .tiff, .bmp",
      "No external dependencies required"
    ],
    embeddedVideo: "/videos/home/ultimate-ref-demo.mp4"
  },
  {
    id: "arnold-node-wrangler",
    name: "ArNode",
    alternateName: "Arnold Node Wrangler",
    version: "v1.0",
    shortDescription: "Automates PBR shader creation, intelligent texture drag & drop, and production setups for Arnold in Autodesk Maya.",
    compatibility: "Maya 2022+ · Arnold (MtoA) · Python 3",
    platforms: "Windows & macOS",
    downloadUrl: "https://github.com/bruce333-creator/ArNode/releases/download/maj/ArNode.zip",
    isDownloadReady: true,
    logoImage: "/images/logo_arnode.png",
    heroImage: "/images/arnold-ui.png",
    uiScreenshot: "/images/arnold-ui.png",
    detailsPath: "/products/arnold-node-wrangler",
    docsPath: "/docs/arnold-node-wrangler",
    features: [
      "Intelligent Drag & Drop for texture sets or folders directly into the viewport",
      "Automatic PBR channel detection (Base Color, Roughness, Metalness, Normal, Bump, Disp, AO, SSS, Sheen, Coat)",
      "Automated Ambient Occlusion network with multiplyDivide blending into Base Color",
      "Strict color space handling: sRGB for color maps, Raw for physics & data maps",
      "Arnold aiNormalMap & aiBump2d connection with DirectX green channel flip detection",
      "15 Calibrated Arnold physical presets: Metal, Glass, Skin, Car Paint, Rubber, Wood, Plastic, and more",
      "Non-destructive updates on existing aiStandardSurface materials",
      "Built-in production tools: 4K Render Setup (3840x2160, AA=5), Batch .tx conversion, and sourceimages copier",
      "1-Click autonomous drag-and-drop installer for Maya shelf"
    ],
    technicalDetails: [
      "Autodesk Maya 2022, 2023, 2024, 2025, 2026+",
      "Arnold for Maya (MtoA plugin installed)",
      "Python 3 runtime (adaptive PySide2 & PySide6)",
      "Supported formats: .tx, .png, .jpg, .jpeg, .exr, .tif, .tiff, .hdr",
      "Zero external dependencies required"
    ],
    embeddedVideo: "/videos/arnode.mp4"
  }
];

export function getProductById(id: string): Product | undefined {
  if (id === "vanta-node" || id === "arnode" || id === "ar-node") {
    return products.find(p => p.id === "arnold-node-wrangler");
  }
  if (id === "rman-node") {
    return products.find(p => p.id === "renderman-node-wrangler");
  }
  return products.find(p => p.id === id);
}
