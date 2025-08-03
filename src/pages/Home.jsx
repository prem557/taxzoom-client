import { Link } from 'react-router-dom';
import {
  FaFileInvoiceDollar,
  FaBusinessTime,
  FaUserShield,
  FaBuilding,
  FaCertificate,
  FaBriefcase,
  FaRupeeSign,
  FaShieldAlt,
} from 'react-icons/fa';

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-28">
      {/* ✅ Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-900">
          Smart Tax & Compliance Solutions for <span className="text-orange-600">Individuals</span> & <span className="text-green-600">Businesses</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          End-to-end support for all your tax, legal, and registration needs — trusted by thousands across India.
        </p>
        <Link to="/services">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition">
             Explore Our Services
          </button>
        </Link>
      </div>

      {/* ✅ Our Core Services */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold text-center text-blue-800">Core Service Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard icon={<FaFileInvoiceDollar />} title="ITR Filing" description="Fast, secure, and affordable income tax return filing for all types of taxpayers." to="/services/itr-filing" />
          <ServiceCard icon={<FaUserShield />} title="TDS Return Filing" description="Accurate TDS filing services for businesses, contractors, and freelancers." to="/services/tds-return" />
          <ServiceCard icon={<FaBriefcase />} title="GST Services" description="Hassle-free GST registration, return filing, and compliance handled by experts." to="/services/gst-filing" />
          <ServiceCard icon={<FaBuilding />} title="MSME/Udyam Registration" description="Get official recognition and benefits for your business under MSME." to="/services/msme-udyam-registration" />
          <ServiceCard icon={<FaCertificate />} title="FSSAI Certification" description="Apply for new FSSAI food license or renew it effortlessly." to="/services/fssai" />
          <ServiceCard icon={<FaUserShield />} title="PF & ESI Registration" description="Secure employee welfare compliance with PF and ESI registration." to="/services/pf-registration" />
          <ServiceCard icon={<FaRupeeSign />} title="Loan Services" description="Get support for Home, Business, Education, and Personal loans." to="/services/loans" />
          <ServiceCard icon={<FaShieldAlt />} title="Insurance" description="Buy or renew Car, Bike, Health, or Travel insurance with guidance." to="/services/insurance" />
        </div>
      </section>

      {/* ✅ Other Key Services */}
      <section className="bg-gray-100 py-12 px-6 rounded-xl shadow-md">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-blue-800">Explore Other Key Services</h2>
          <p className="text-gray-600">Important compliance & registration services for your growing business.</p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <OtherService title="MSME / Udyam Registration" to="/otherservices/msme-registration" desc="Government recognition for your business with added benefits." />
            <OtherService title="FSSAI Registration" to="/otherservices/fssai-registration" desc="Essential food license compliance for your business." />
            <OtherService title="PF Registration" to="/otherservices/pf-registration" desc="Ensure employee retirement benefits and legal coverage." />
            <OtherService title="ESI Registration" to="/otherservices/esi-registration" desc="Provide employee health and medical security." />
          </div>
        </div>
      </section>

      {/* ✅ Trust Message */}
      <div className="text-center text-sm text-gray-500">
        Trusted by <strong>10,000+ clients</strong> across India 🇮🇳 | Accuracy. Transparency. Reliability.
      </div>
    </section>
  );
}

// ✅ Reusable Card Components

function ServiceCard({ icon, title, description, to }) {
  return (
    <Link to={to} className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition block text-center border border-gray-100">
      <div className="text-4xl text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </Link>
  );
}

function OtherService({ title, desc, to }) {
  return (
    <Link to={to} className="block p-6 bg-white rounded-xl shadow hover:shadow-lg border transition">
      <h3 className="text-lg font-semibold text-orange-700 mb-1">{title}</h3>
      <p className="text-gray-700 text-sm">{desc}</p>
    </Link>
  );
}
