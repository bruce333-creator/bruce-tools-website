import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-glassBorder bg-black/50 backdrop-blur-md pt-16 pb-8 px-6 text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-4 max-w-sm">
          <h3 className="text-2xl font-semibold text-white tracking-tight">EF Tools</h3>
          <p className="text-sm">
            Created by Enzo Freminet
          </p>
          <p className="text-sm mt-4 leading-relaxed">
            Autodesk Maya and RenderMan are trademarks of their respective owners.<br />
            EF Tools is an independent project and is not affiliated with Autodesk or Pixar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto text-sm">
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-medium mb-2">Navigation</h4>
            <Link href="/products/renderman-node-wrangler" className="hover:text-electricBlue transition-colors">Products</Link>
            <Link href="/store" className="hover:text-electricBlue transition-colors">Store</Link>
            <Link href="/docs/vanta-node" className="hover:text-electricBlue transition-colors">Documentation</Link>
            <Link href="/portfolio" className="hover:text-electricBlue transition-colors">Portfolio</Link>
            <Link href="/about" className="hover:text-electricBlue transition-colors">About</Link>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-medium mb-2">Legal</h4>
            <Link href="/terms" className="hover:text-electricBlue transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-electricBlue transition-colors">Privacy Policy</Link>
            <Link href="/refund" className="hover:text-electricBlue transition-colors">Refund Policy</Link>
            <Link href="/license" className="hover:text-electricBlue transition-colors">License</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto border-t border-glassBorder mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs">
        <p>© {new Date().getFullYear()} EF Tools. All rights reserved.</p>
      </div>
    </footer>
  );
}
