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
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-20">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-4">
          Smart Tax & Compliance Solutions for <span className="text-orange-600">Individuals</span> & <span className="text-green-600">Businesses</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          We provide curated, reliable services and compliance assistance for Individuals, Startups & Small Businesses.
        </p>
        <Link to="/services">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition">
            Explore Our Services
          </button>
        </Link>
      </div>

      {/* Other Services Section */}
      <section className="bg-gray-100 py-12 rounded-xl shadow-sm">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Explore Other Key Services</h2>
          <p className="text-gray-600 mb-10">Business essentials made simple, compliant, and reliable.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <OtherService title="MSME / Udyam Registration" to="/otherservices/msme-registration" desc="Government recognition for your business with added benefits." />
            <OtherService title="FSSAI Registration" to="/otherservices/fssai-registration" desc="Essential food license compliance for your business." />
            <OtherService title="PF Registration" to="/otherservices/pf-registration" desc="Ensure employee retirement benefits and legal coverage." />
            <OtherService title="ESI Registration" to="/otherservices/esi-registration" desc="Provide employee health and medical security." />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section>
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Our Core Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard icon={<FaFileInvoiceDollar />} title="ITR Filing" description="Fast and accurate ITR filing for individuals and businesses." to="/services/itr-filing" />
          <ServiceCard icon={<FaUserShield />} title="TDS Return Filing" description="Timely TDS filings with expert support." to="/services/tds-return" />
          <ServiceCard icon={<FaBriefcase />} title="GST Services" description="New GST registration & returns made simple." to="/services/gst-filing" />
          <ServiceCard icon={<FaBuilding />} title="MSME/Udyam Registration" description="Register your business with ease and speed." to="/services/msme-udyam" />
          <ServiceCard icon={<FaCertificate />} title="FSSAI Certification" description="FSSAI food license compliance made easy." to="/services/fssai" />
          <ServiceCard icon={<FaUserShield />} title="PF & ESI Registration" description="Employee welfare registrations simplified." to="/services/pf-esi" />
          <ServiceCard icon={<FaRupeeSign />} title="Loan Services" description="Get home, personal or business loans assistance." to="/services/loans" />
          <ServiceCard icon={<FaShieldAlt />} title="Insurance" description="Bike, car, health, and travel insurance options." to="/services/insurance" />
        </div>
      </section>

      {/* Trust Message */}
      <div className="text-center pt-6">
        <p className="text-sm text-gray-500">
          Trusted by <strong>10,000+ clients</strong> across India 🇮🇳
        </p>
      </div>
    </section>
  );
}

// Reusable Components
function ServiceCard({ icon, title, description, to }) {
  return (
    <Link to={to} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition block text-center">
      <div className="text-4xl text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}

function OtherService({ title, desc, to }) {
  return (
    <Link to={to} className="block p-6 bg-white rounded-xl shadow hover:shadow-lg border text-left">
      <h3 className="text-xl font-semibold text-orange-700 mb-2">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </Link>
  );
}
