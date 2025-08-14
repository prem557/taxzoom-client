import React from "react";

const ITRFiling = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">ITR Filing</h1>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Salaried Individuals</li>
        <li>Self-Employed Professionals</li>
        <li>Business Owners (SMEs, MSMEs, ERP Users)</li>
        <li>Stocks, Crypto & Investment Income</li>
        <li>Revised ITR Filing</li>
        <li>Belated ITR Filing</li>
      </ul>

      <p className="mt-6 text-gray-700">
        Explain types of ITR with the help of the given below URL:
      </p>
      <a
        href="https://www.taxbuddy.com/income-tax-efiling"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        https://www.taxbuddy.com/income-tax-efiling
      </a>
    </div>
  );
};

export default ITRFiling;
