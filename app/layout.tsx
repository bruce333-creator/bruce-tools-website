import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EF Tools | Free Maya Plugins",
  description: "Free tools for Autodesk Maya artists: Rman Node, Ultimate Ref Tool, and ArNode.",
  icons: {
    icon: [
      { url: "/images/logo.png?v=2", type: "image/png" },
    ],
    shortcut: "/images/logo.png?v=2",
    apple: "/images/logo.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col selection:bg-white/20 selection:text-foreground`}>
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
