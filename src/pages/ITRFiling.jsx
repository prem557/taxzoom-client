import React from "react";
import { Link } from "react-router-dom";

const ITRFiling = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Income Tax Return Filing</h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl">
          Hassle-free, accurate & professional ITR filing for individuals, businesses, and professionals.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          File Your ITR Now
        </Link>
      </section>

      {/* Who Can File Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Who Needs to File ITR?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Salaried Individuals</h3>
            <p className="text-gray-600">File your returns easily with Form 16, HRA, deductions, and allowances.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Self-Employed Professionals</h3>
            <p className="text-gray-600">Consultants, freelancers, and doctors filing under presumptive taxation or normal.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Business Owners</h3>
            <p className="text-gray-600">SMEs, MSMEs, startups & corporates can file tax returns with accuracy.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Investors & Traders</h3>
            <p className="text-gray-600">File taxes on income from stocks, mutual funds, F&O, and crypto assets.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Revised ITR Filing</h3>
            <p className="text-gray-600">Made a mistake? Revise your ITR before the deadline with ease.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Belated ITR Filing</h3>
            <p className="text-gray-600">Missed the due date? File your ITR late with applicable penalties.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Expert Help With Your ITR?</h2>
        <p className="mb-6 text-lg">Our tax experts ensure 100% compliance and maximum refunds.</p>
        <Link
          to="/contact"
          className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Talk to Our Experts
        </Link>
      </section>
    </div>
  );
};

export default ITRFiling;
