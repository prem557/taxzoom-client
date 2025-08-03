// src/pages/TDSReturn.jsx

import React from 'react';

export default function TDSReturn() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        TDS Return Filing Services
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        We offer expert TDS return filing services for a wide range of income categories, ensuring timely compliance and peace of mind.
      </p>

      <div className="space-y-6">
        <ServiceBlock
          title="Salary Income"
          description="File TDS returns for salaried employees as per Section 192. We handle all documentation and e-filing."
        />
        <ServiceBlock
          title="Interest from Securities"
          description="Comply with Section 193 for interest on securities. Accurate calculation and TDS deduction handled end-to-end."
        />
        <ServiceBlock
          title="Lottery, Game, or Puzzle Winnings"
          description="Section 194B mandates TDS on winnings. We ensure correct deduction and timely return submission."
        />
        <ServiceBlock
          title="Winnings from Horse Races"
          description="Manage TDS under Section 194BB for any horse race winnings with expert guidance."
        />
        <ServiceBlock
          title="Payments to Contractors"
          description="Section 194C applies for all contractor payments. Stay compliant and avoid notices."
        />
        <ServiceBlock
          title="Professional or Technical Fees"
          description="TDS under Section 194J for professional services like legal, IT, etc. filed with accuracy."
        />
        <ServiceBlock
          title="Rent Payments"
          description="Section 194I covers rent TDS. We support landlord & tenant-side documentation."
        />
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700 mb-4">
          Ensure your TDS returns are filed correctly & on time.
        </p>
        <a
          href="/contact"
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-md shadow hover:bg-orange-700 transition"
        >
          Contact Us for TDS Filing
        </a>
      </div>
    </div>
  );
}

function ServiceBlock({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow border">
      <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
