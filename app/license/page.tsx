export default function License() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 max-w-3xl mx-auto text-gray-300">
      <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight">Software License</h1>
      
      <div className="space-y-8 leading-relaxed font-light">
        <section>
          <h2 className="text-xl font-medium text-white mb-4 text-emerald-400">Users MAY:</h2>
          <ul className="list-disc pl-6 space-y-2 text-emerald-200">
            <li>Install the software on their personal machines.</li>
            <li>Use the software for commercial projects.</li>
            <li>Create and publish commercial work utilizing the software.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-white mb-4 text-red-400">Users MAY NOT:</h2>
          <ul className="list-disc pl-6 space-y-2 text-red-200">
            <li>Redistribute the software to third parties.</li>
            <li>Resell the software.</li>
            <li>Upload the software to file-sharing networks or repositories.</li>
            <li>Remove or alter any copyright notices.</li>
            <li>Claim authorship of the software.</li>
            <li>Modify and redistribute the software without explicit permission.</li>
          </ul>
        </section>

        <section className="pt-8 border-t border-glassBorder mt-12">
          <p className="text-sm">Autodesk Maya and RenderMan are trademarks of their respective owners. EF Tools is an independent project and is not affiliated with Autodesk, Pixar, or any other company.</p>
        </section>
      </div>
    </main>
  );
}
