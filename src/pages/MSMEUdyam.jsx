export default function MSMERegistration() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">MSME / Udyam Registration</h1>

      <p className="text-gray-700 text-lg mb-4">
        Micro, Small, and Medium Enterprises (MSME) registration — also known as Udyam Registration — helps your business access government benefits, subsidies, and incentives.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Why MSME Registration?</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Avail loans at lower interest rates</li>
        <li>Get access to subsidies and government schemes</li>
        <li>Receive protection against delayed payments</li>
        <li>Boost credibility with vendors & customers</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">What's Included?</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Consultation & eligibility check</li>
        <li>Document preparation & submission</li>
        <li>Udyam certificate delivery</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Pricing</h2>
      <p className="text-gray-800 font-medium">Starting at ₹999/- only (all inclusive)</p>

      <div className="mt-10">
        <a href="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl shadow-md">
            Register Now
          </button>
        </a>
      </div>
    </section>
  );
}
