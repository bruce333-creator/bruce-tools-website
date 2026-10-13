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
    shortDescription: "Coming soon",
    compatibility: "Maya 2022+ (Arnold / MtoA)",
    platforms: "Windows & macOS",
    downloadUrl: "", // Pending release
    isDownloadReady: false,
    heroImage: "",
    uiScreenshot: "",
    detailsPath: "/products/arnold-node-wrangler",
    docsPath: "/docs/arnold-node-wrangler",
    features: [],
    technicalDetails: [
      "Autodesk Maya 2022 or higher",
      "Arnold for Maya (MtoA plugin installed)",
      "Python 3 runtime",
      "PySide/Qt modern interface"
    ]
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
