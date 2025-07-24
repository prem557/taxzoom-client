export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">About TaxZoom</h1>

      <p className="text-lg text-gray-700 mb-6">
        TaxZoom is your trusted partner in modern taxation. We help individuals,
        freelancers, and businesses manage their tax filings, registrations,
        and compliance with ease and confidence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-10">
        <div className="bg-white shadow rounded-lg p-6 border-l-4 border-blue-600">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">🎯 Our Mission</h3>
          <p className="text-gray-600">
            To simplify taxation in India using technology and expert support — accessible for all.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 border-l-4 border-orange-600">
          <h3 className="text-xl font-semibold text-orange-700 mb-2">💡 Our Vision</h3>
          <p className="text-gray-600">
            To become India’s most trusted platform for personal and business tax solutions.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 border-l-4 border-green-600">
          <h3 className="text-xl font-semibold text-green-700 mb-2">🛡️ Our Promise</h3>
          <p className="text-gray-600">
            100% secure, transparent, and hassle-free taxation services with expert help.
          </p>
        </div>
      </div>
    </section>
  );
}
