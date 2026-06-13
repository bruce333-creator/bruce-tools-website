export default function Refund() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 max-w-3xl mx-auto text-gray-300">
      <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight">Refund Policy</h1>
      
      <div className="space-y-8 leading-relaxed font-light">
        <section className="bg-red-500/10 border border-red-500/20 p-6 rounded-xl text-red-200">
          <p className="font-medium text-lg">Due to the digital nature of the products, all sales are final.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-white mb-4">Strict Policy</h2>
          <p>Because software files cannot be "returned" once downloaded, we operate a strict no-refund policy. Please ensure that your system meets the technical requirements before making a purchase.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-white mb-4">Exceptions</h2>
          <p>Refunds may only be considered if the software is proven to be completely unusable on officially supported software versions. If you encounter a critical bug, please contact support with detailed reproduction steps.</p>
        </section>
      </div>
    </main>
  );
}
