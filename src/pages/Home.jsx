import { Link } from 'react-router-dom';
import { FaFileInvoiceDollar, FaBusinessTime, FaUserShield } from 'react-icons/fa';

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-4">
        Smart Tax Solutions for <span className="text-orange-600">Individuals</span> & <span className="text-green-600">Businesses</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        File your ITR, register your business, manage GST, and stay compliant — all under one expert-powered platform.
      </p>

      {/* Working Get Started Button */}
      <Link to="/services">
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition">
          Get Started
        </button>
      </Link>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  <Link to="/services/itr-filing" className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-left block">
    <FaFileInvoiceDollar className="text-4xl text-blue-600 mb-4" />
    <h3 className="text-xl font-bold text-gray-800 mb-2">Fast ITR Filing</h3>
    <p className="text-gray-600">Expert-reviewed filings to maximize refunds and ensure compliance.</p>
  </Link>

  <Link to="/services/gst-filing" className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-left block">
    <FaFileInvoiceDollar className="text-4xl text-purple-600 mb-4" />
    <h3 className="text-xl font-bold text-gray-800 mb-2">GST Filing</h3>
    <p className="text-gray-600">Timely GST return filing with accuracy and expert guidance.</p>
  </Link>

  <Link to="/services/startup-registration" className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-left block">
    <FaBusinessTime className="text-4xl text-green-600 mb-4" />
    <h3 className="text-xl font-bold text-gray-800 mb-2">Startup Registration</h3>
    <p className="text-gray-600">Register your company, LLP or MSME with full legal support.</p>
  </Link>

  <Link to="/services/data-security" className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-left block">
    <FaUserShield className="text-4xl text-orange-500 mb-4" />
    <h3 className="text-xl font-bold text-gray-800 mb-2">Data Security</h3>
    <p className="text-gray-600">We encrypt and secure every client file like a fortress.</p>
  </Link>
</div>

      {/* Trust Badge */}
      <p className="mt-12 text-sm text-gray-500">
        Trusted by <strong>10,000+ clients</strong> across India 🇮🇳
      </p>
    </section>
  );
}
