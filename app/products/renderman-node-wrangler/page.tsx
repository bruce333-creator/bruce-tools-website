import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Installation from "@/components/Installation";
import FAQ from "@/components/FAQ";
import DownloadCTA from "@/components/DownloadCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white selection:bg-electricBlue/30 selection:text-white overflow-hidden">
      {/* Global Grid Background */}
      <div className="fixed inset-0 z-[-10] bg-grid pointer-events-none opacity-50" />
      
      <Hero />
      <Problem />
      <Features />
      <Installation />
      <FAQ />
      <DownloadCTA />
    </main>
  );
}
