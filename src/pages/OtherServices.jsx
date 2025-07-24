import { FaIndustry, FaUtensils, FaIdBadge } from 'react-icons/fa';

export default function OtherServices() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Other Professional Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* MSME */}
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <FaIndustry className="text-5xl text-green-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">MSME Udyam Registration</h3>
          <p className="text-gray-600 mb-4">Register your small business under Udyam and avail government benefits.</p>
          <div className="text-blue-700 font-bold text-lg">₹799 only</div>
        </div>

        {/* FSSAI */}
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <FaUtensils className="text-5xl text-yellow-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">FSSAI Certification</h3>
          <p className="text-gray-600 mb-4">Get your food business legally certified with quick FSSAI registration.</p>
          <div className="text-blue-700 font-bold text-lg">₹999 only</div>
        </div>

        {/* PF & ESI */}
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <FaIdBadge className="text-5xl text-purple-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">PF & ESI Registration</h3>
          <p className="text-gray-600 mb-4">Stay compliant with employee welfare laws by registering for PF & ESI.</p>
          <div className="text-blue-700 font-bold text-lg">₹1499 only</div>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-12">
        Get all 3 services together for just <span className="font-bold text-orange-600">₹2999</span> – Save More!
      </p>
    </section>
  );
}
