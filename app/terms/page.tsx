export default function Terms() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 max-w-3xl mx-auto text-gray-300">
      <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight">Terms of Service</h1>
      
      <div className="space-y-8 leading-relaxed font-light">
        <section>
          <h2 className="text-xl font-medium text-white mb-4">1. Non-Exclusive License</h2>
          <p>By purchasing and downloading tools from EF Tools, you are granted a non-exclusive, non-transferable license to use the software for personal and commercial projects.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-white mb-4">2. Usage Restrictions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>No redistribution of the software.</li>
            <li>No resale or sublicensing.</li>
            <li>No unauthorized sharing of license keys or files.</li>
            <li>No reverse engineering, decompiling, or disassembling the software.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-white mb-4">3. Disclaimer</h2>
          <p>The software is provided "as is", without warranty of any kind. EF Tools shall not be held liable for any damages arising out of the use or inability to use the software.</p>
          <p className="mt-4">Autodesk Maya and RenderMan are trademarks of their respective owners. EF Tools is an independent project and is not affiliated with Autodesk, Pixar, or any other company.</p>
        </section>
      </div>
    </main>
  );
}
