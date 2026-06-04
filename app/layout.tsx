import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Using a fallback approach for system fonts since we don't have local SF Pro files.
// Next.js allows mapping this to standard sans-serif which tailwind will handle.
export const metadata: Metadata = {
  title: "RenderMan Node Wrangler | Bruce Tools",
  description: "Build complete RenderMan shader networks in seconds. Automate repetitive shader creation and workflows directly inside Maya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-white min-h-screen`}>
        {children}
        <Script src="https://gumroad.com/js/gumroad.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
