import { Link } from 'react-router-dom';
import {
  FaFileInvoiceDollar,
  FaUserShield,
  FaBriefcase,
  FaRupeeSign,
  FaShieldAlt,
} from 'react-icons/fa';

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-28">
      {/* ✅ Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
          Smart Tax & Compliance Solutions for{' '}
          <span className="text-orange-600">Individuals</span> &{' '}
          <span className="text-green-600">Businesses</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          End-to-end support for all your tax, legal, and registration needs — trusted by thousands across India.
        </p>
        <Link to="/services/itr-filing">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition">
            Get Started with ITR Filing
          </button>
        </Link>
      </div>

      {/* ✅ Block 1: Vision & Mission */}
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg space-y-4 text-lg leading-relaxed text-gray-800">
        <p>
          We provide a curated set of quality services at an affordable price.
          <span className="font-semibold text-blue-700"> Making Entrepreneurship Affordable!</span>
        </p>
        <p>
          We are on a mission to make entrepreneurship easier and affordable to millions.
          <span className="font-semibold text-blue-700"> TaxZoomIndia</span> provides a simple and intuitive platform
          for setting up a business and managing compliance.
        </p>
        <p>
          We started our journey in 2022 and bootstrapped the business till 2025, serving over a thousand businesses.
          In 2024, we raised funding from institutional investors to further our mission.
        </p>
      </div>

      {/* ✅ Block 2: About TaxZoom */}
      <div className="bg-blue-50 border-l-4 border-blue-500 px-6 py-5 rounded-xl shadow-sm text-gray-800">
        <p className="text-base md:text-lg">
          <strong>TaxZoomIndia</strong> is a portal that provides tax-related services to individuals and businesses.
          Our services include tax planning, filing tax returns, and assisting with tax-related issues. This Portal is
          part of <strong className="text-blue-900">TOTAL TASK SOLUTIONS</strong>.
        </p>
      </div>

      {/* ✅ Block 3: Ribbon Footer Strip */}
      <div className="text-sm font-semibold text-center rounded-xl overflow-hidden shadow">
        <div className="bg-green-100 text-green-800 py-2 px-4">
          TaxZoomIndia is a part of <span className="text-green-900">TOTAL TASK SOLUTIONS</span>
        </div>
        <div className="bg-yellow-100 text-yellow-800 py-2 px-4 border-t border-yellow-300">
          We Support Local for Vocal 🇮🇳
        </div>
      </div>

      {/* ✅ 1. Income Tax Filing */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold text-center text-blue-800">Income Tax Filing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<FaFileInvoiceDollar />}
            title="ITR Filing"
            description="Fast, secure, and affordable income tax return filing for all types of taxpayers."
            to="/services/itr-filing"
          />
          <ServiceCard
            icon={<FaUserShield />}
            title="TDS Return Filing"
            description="Accurate TDS filing services for businesses, contractors, and freelancers."
            to="/services/tds-return"
          />
        </div>
      </section>

      {/* ✅ 2. GST Filing & Registration */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold text-center text-blue-800">GST Filing & New Registration</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<FaBriefcase />}
            title="GST Services"
            description="Hassle-free GST registration, return filing, and compliance handled by experts."
            to="/services/gst-filing"
          />
        </div>
      </section>

      {/* ✅ 3. Other Services */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold text-center text-blue-800">Other Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<FaRupeeSign />}
            title="Loan Services"
            description="Get support for Home, Business, Education, and Personal loans."
            to="/services/loans"
          />
          <ServiceCard
            icon={<FaShieldAlt />}
            title="Insurance"
            description="Buy or renew Car, Bike, Health, or Travel insurance with guidance."
            to="/services/insurance"
          />
        </div>
      </section>

      {/* ✅ 4. About & Contact */}
      <section className="bg-gray-100 py-12 px-6 rounded-xl shadow-md">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-blue-800">Know More About Us</h2>
          <p className="text-gray-600">Learn more about our mission, vision, and how to reach us.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-left">
            <OtherService
              title="About Us"
              to="/about"
              desc="Get to know our values, journey, and the team behind TaxZoomIndia."
            />
            <OtherService
              title="Contact"
              to="/contact"
              desc="We are just a message away. Reach out to us for any queries or support."
            />
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <div className="text-center text-sm text-gray-500">
        Trusted by <strong>10,000+ clients</strong> across India 🇮🇳 | Accuracy. Transparency. Reliability.
      </div>
    </section>
  );
}

// ✅ Reusable Components
function ServiceCard({ icon, title, description, to }) {
  return (
    <Link
      to={to}
      className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition block text-center border border-gray-100"
    >
      <div className="text-4xl text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </Link>
  );
}

function OtherService({ title, desc, to }) {
  return (
    <Link
      to={to}
      className="block p-6 bg-white rounded-xl shadow hover:shadow-lg border transition"
    >
      <h3 className="text-lg font-semibold text-orange-700 mb-1">{title}</h3>
      <p className="text-gray-700 text-sm">{desc}</p>
    </Link>
  );
}
