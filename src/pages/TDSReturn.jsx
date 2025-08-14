// src/pages/TDSReturn.jsx

import React from 'react';

export default function TDSReturn() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        TDS Return Filing
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        We provide professional TDS return filing services for the following categories:
      </p>

      <div className="space-y-6">
        <ServiceBlock
          title="Salary income"
          description="File TDS returns for salaried individuals as per applicable income tax provisions."
        />
        <ServiceBlock
          title="Income on securities"
          description="Accurate TDS filing for income earned on various securities."
        />
        <ServiceBlock
          title="Insurance commissions"
          description="Manage TDS filing for commissions received from insurance activities."
        />
        <ServiceBlock
          title="Payouts towards NSC"
          description="Handle TDS requirements for payouts related to National Savings Certificates."
        />
        <ServiceBlock
          title="Earnings from winning horse races, lotteries, puzzles, and similar sources"
          description="Ensure compliance for TDS deductions on winnings from these sources."
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
