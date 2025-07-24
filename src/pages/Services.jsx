import { FaFileAlt, FaRegBuilding, FaShieldAlt } from 'react-icons/fa';

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">Our Services</h2>
      <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12">
        We provide fast, reliable, and expert tax services for individuals, startups, and businesses across India.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* ITR Filing */}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center">
          <FaFileAlt className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast ITR Filing</h3>
          <p className="text-gray-600 mb-4">
            Get your Income Tax Returns filed with expert review, refund maximization, and full compliance.
          </p>
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
            Get Started
          </button>
        </div>

        {/* Startup Registration */}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center">
          <FaRegBuilding className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Startup Registration</h3>
          <p className="text-gray-600 mb-4">
            Private Limited, LLP or MSME — we’ll register your startup with complete legal assistance.
          </p>
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
            Register Now
          </button>
        </div>

        {/* Data Security */}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center">
          <FaShieldAlt className="text-4xl text-yellow-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">100% Data Security</h3>
          <p className="text-gray-600 mb-4">
            All your documents are encrypted, protected, and stored securely with bank-grade protection.
          </p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
