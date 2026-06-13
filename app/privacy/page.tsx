export default function Privacy() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 max-w-3xl mx-auto text-gray-300">
      <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight">Privacy Policy</h1>
      
      <div className="space-y-8 leading-relaxed font-light">
        <section>
          <h2 className="text-xl font-medium text-white mb-4">1. Data Collection</h2>
          <p>We do not sell, rent, or lease any of your personal data to third parties. Any information collected is strictly for the purpose of fulfilling your order and improving our tools.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-white mb-4">2. Payment Processing</h2>
          <p>All payments are securely processed and handled by Gumroad. EF Tools does not have direct access to your credit card information or payment details.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-white mb-4">3. Analytics and Cookies</h2>
          <p>We may use basic analytics and cookies to understand website traffic and improve user experience. This data is anonymized and not linked to your personal identity.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-white mb-4">4. Contact Us</h2>
          <p>If you have any questions or concerns regarding your privacy, please contact EF Tools directly through our support channels.</p>
        </section>
      </div>
    </main>
  );
}
