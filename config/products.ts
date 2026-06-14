export type Product = {
  id: string;
  name: string;
  shortDescription: string;
  price: string;
  gumroadUrl: string;
  heroImage: string;
  detailsPath: string; // The path to the detailed page if it exists (e.g. /products/renderman-node-wrangler)
  features: string[];
  technicalDetails: string[];
  carouselImages: string[];
  embeddedVideo: string;
};

export const products: Product[] = [
  {
    id: "vanta-node",
    name: "Vanta Node",
    shortDescription: "Accelerate your Arnold shading workflows with automated node networks.",
    price: "9.99€",
    gumroadUrl: "https://eftools.gumroad.com/l/wjbxbt",
    heroImage: "/images/store/arnold-wrangler-logo.jpg",
    detailsPath: "/products/vanta-node",
    features: [
      "Arnold Standard Surface Automation",
      "Color Space Management",
      "Texture Auto-Link"
    ],
    technicalDetails: [
      "Requires Maya 2022 or higher",
      "Arnold for Maya (MtoA)"
    ],
    carouselImages: [
      "/images/store/arnold-ui.jpg"
    ],
    embeddedVideo: "/videos/vanta-node-promo.mp4"
  },
  {
    id: "ultimate-ref-tool",
    name: "Ultimate Ref Tool",
    shortDescription: "Drag and drop references with automatic view detection and layer management.",
    price: "FREE",
    gumroadUrl: "https://eftools.gumroad.com/l/unypmtq",
    heroImage: "/images/store/ultimate-ref-logo.jpg",
    detailsPath: "/products/ultimate-ref-tool",
    features: [
      "Mode Détection Automatique : Drag & drop avec détection des axes (Front, Side, Top)",
      "Mode Assignation Forcée : Importation manuelle via boutons Add Front / Side / Top",
      "Automatisation : Alpha à 0.5, Echelle x100 (si mètres), et attributs verrouillés",
      "Organisation : Rangement dans le groupe REF_IMAGES et le calque REF_LAYER (non-sélectionnable)",
      "Gestion Globale : Boutons pour masquer/afficher ou supprimer toutes les références d'un coup"
    ],
    technicalDetails: [
      "Requires Maya 2022 or higher (including 2025+)",
      "Formats: .png, .jpg, .jpeg, .tga, .tif, .bmp",
      "Compatible PySide2 & PySide6"
    ],
    carouselImages: [
      "/images/store/ultimate-ref-ui.jpg"
    ],
    embeddedVideo: "/videos/home/ultimate-ref-demo.mp4"
  },
  {
    id: "renderman-node-wrangler",
    name: "RenderMan Node Wrangler",
    shortDescription: "Automate repetitive shader creation and workflows directly inside Maya.",
    price: "9.99€",
    gumroadUrl: "https://eftools.gumroad.com/l/xgvck",
    heroImage: "/images/store/renderman-wrangler-logo.jpg",
    detailsPath: "/products/renderman-node-wrangler",
    features: [
      "Drag-and-Drop Installation",
      "Smart Texture Recognition",
      "Interactive Viewport 2.0 Previews",
      "Automatic Node Networks",
      "Conditional Displacement Setup"
    ],
    technicalDetails: [
      "Requires Maya 2022 or higher",
      "Requires RenderMan 24+",
      "Python 3.0+"
    ],
    carouselImages: [
      "/images/store/renderman-ui.jpg"
    ],
    embeddedVideo: "/videos/home/renderman-demo.mp4"
  },
  {
    id: "maya-model-toolkit",
    name: "Maya Model Toolkit",
    shortDescription: "A comprehensive suite of modeling utilities for faster hard-surface iteration.",
    price: "FREE",
    gumroadUrl: "https://eftools.gumroad.com/l/ogfbum",
    heroImage: "/images/store/maya-toolkit-logo.jpg",
    detailsPath: "#",
    features: [
      "Drop to Ground (Y = 0): Calcule la bounding box et pose l'objet sur la grille",
      "Center to World (0, 0, 0): Déplace instantanément l'objet au centre",
      "Freeze + Center Pivot + Delete History: Le combo classique en un clic",
      "Extreme Cleaner History: Purge les erreurs invisibles via reconstruction du shape",
      "Pivot → Vertex / Edge Center / Face Center: Snapping de pivot avancé sans raccourcis",
      "Quad Cap Cylinder: Cylindre 100% Quads optimisé pour la subdivision",
      "Support Loop Option: Génération automatique d'arêtes de soutien sur les caps"
    ],
    technicalDetails: [
      "Requires Maya 2022 or higher",
      "Interface divisée en sections rétractables"
    ],
    carouselImages: [
      "/images/store/maya-toolkit-ui.jpg"
    ],
    embeddedVideo: ""
  }
];
