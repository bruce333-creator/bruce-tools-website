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

export const products: Product[] = [
  {
    id: "renderman-node-wrangler",
    name: "Rman Node",
    alternateName: "RenderMan Node Wrangler",
    version: "v2.0",
    shortDescription: "Automate PBR shader creation, 15 calibrated physical presets, texture HUD inspection, and 100% automated displacement for Pixar's RenderMan in Maya.",
    compatibility: "Maya 2022+ · RenderMan 24/25/26+ · Python 3",
    platforms: "Windows & macOS",
    downloadUrl: "https://github.com/bruce333-creator/Rman_Node/releases/download/maj/RMNW.zip",
    isDownloadReady: true,
    heroImage: "/images/store/renderman-wrangler-logo.jpg",
    uiScreenshot: "/images/store/renderman-ui.jpg",
    detailsPath: "/products/renderman-node-wrangler",
    docsPath: "/docs/renderman-node-wrangler",
    features: [
      "No prior PxrSurface needed: drop textures and click Build Material to create shader, shading group, and clean nodal network",
      "Ambient Occlusion auto-wiring: PxrBlend Multiply integration with Base Color",
      "100% automated displacement chain: PxrTexture -> PxrDispTransform (Centered) -> PxrDisplace (calibrated dispAmount 0.1)",
      "15 calibrated PBR presets: Metal, Plastic, Glass, Skin, Fabric, Rubber, Wood, Stone, Leaves, Car Paint, etc.",
      "Snug Texture HUD (Shift+V / MMB): instant texture preview, live PxrRemap bounds feedback, and pin mode",
      "Viewport 2.0 clean preview: neutral Lambert viewport fallback without green/black shading bugs",
      "Standalone installer: Drag-and-drop Installer_Rman_Node.py creates shelf button with official icon"
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
    shortDescription: "Fast reference image plane importer with automatic camera axis detection, alpha adjustment, and locked display layer hierarchy.",
    compatibility: "Maya 2022+ (incl. 2025+)",
    platforms: "Windows & macOS",
    downloadUrl: "https://github.com/bruce333-creator/Ultimate_Ref_Tool/releases/download/maj/ultimate_ref_tool_v21.py",
    isDownloadReady: true,
    heroImage: "/images/store/ultimate-ref-logo.jpg",
    uiScreenshot: "/images/store/ultimate-ref-ui.jpg",
    detailsPath: "/products/ultimate-ref-tool",
    docsPath: "/docs/ultimate-ref-tool",
    features: [
      "Automatic Axis Detection: Drag & drop images with auto-detection of Front, Side, and Top views",
      "Manual View Force: Dedicated Add Front / Side / Top buttons for atypical file names",
      "Automated Setup: 0.5 Alpha Gain, x100 scale compensation for scenes in meters, and locked transforms",
      "Clean Scene Hierarchy: Grouped in REF_IMAGES and locked on a non-selectable REF_LAYER",
      "Global Reference Controls: Instant toggle visibility and one-click clean scene purge"
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
