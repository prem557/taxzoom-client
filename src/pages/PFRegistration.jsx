export default function PFRegistration() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">PF Registration</h1>

      <p className="text-gray-700 text-lg mb-4">
        Provident Fund (PF) Registration is mandatory for companies with 20 or more employees. It offers retirement and social security benefits to workers, and compliance helps avoid legal penalties.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Why PF Registration?</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Legal compliance with EPFO norms</li>
        <li>Employee welfare and trust</li>
        <li>Simplified retirement benefit management</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">What's Included?</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>PF Establishment Code Registration</li>
        <li>UAN generation & linking</li>
        <li>Expert guidance and documentation support</li>
      </ul>

      <div className="mt-10">
        <a href="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl shadow-md">
            Register for PF Now
          </button>
        </a>
      </div>
    </section>
  );
}
