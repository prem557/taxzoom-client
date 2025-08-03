export default function ESIRegistration() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">ESI Registration</h1>

      <p className="text-gray-700 text-lg mb-4">
        Employee State Insurance (ESI) Registration is mandatory for organizations with 10 or more employees earning up to ₹21,000 per month. It ensures medical and financial support to employees during health-related issues.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Why ESI Registration?</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Mandatory under ESI Act for eligible businesses</li>
        <li>Provides medical and maternity benefits to employees</li>
        <li>Strengthens employee welfare and compliance</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">What's Included?</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Registration under ESIC Portal</li>
        <li>Employee Code generation</li>
        <li>Consultation and documentation support</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Pricing</h2>
      <p className="text-gray-800 font-medium">Flat ₹1799/- (all inclusive)</p>

      <div className="mt-10">
        <a href="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl shadow-md">
            Register for ESI Now
          </button>
        </a>
      </div>
    </section>
  );
}
