import React from 'react';
import { FaHome, FaUniversity, FaCar, FaPiggyBank, FaGem, FaLandmark, FaFileInvoice, FaUserGraduate, FaBriefcase } from 'react-icons/fa';

export default function Loans() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-12">
        🏦 Loan Services
      </h1>

      {/* Secured Loans */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-orange-700 mb-6 border-b pb-2">1. Secured Loans</h2>
        <ul className="space-y-5 text-lg">
          <LoanItem icon={<FaHome />} title="Home Loans" desc="For purchasing, constructing, or renovating a residential property." />
          <LoanItem icon={<FaGem />} title="Gold Loans" desc="Loans against gold ornaments, coins, or bullion." />
          <LoanItem icon={<FaLandmark />} title="Loans Against Property (LAP)" desc="Loans against commercial or residential property." />
          <LoanItem icon={<FaCar />} title="Vehicle Loans" desc="For purchasing new or used cars or two-wheelers." />
          <LoanItem icon={<FaPiggyBank />} title="Loans Against Fixed Deposits" desc="Borrowing against the value of a fixed deposit." />
          <LoanItem icon={<FaUniversity />} title="Loans Against Securities" desc="Loans against shares, mutual funds, or insurance policies." />
        </ul>
      </div>

      {/* Unsecured Loans */}
      <div>
        <h2 className="text-2xl font-semibold text-orange-700 mb-6 border-b pb-2">2. Unsecured Loans</h2>
        <ul className="space-y-5 text-lg">
          <LoanItem icon={<FaFileInvoice />} title="Personal Loans" desc="For various personal expenses like travel, medical bills, or debt consolidation." />
          <LoanItem icon={<FaUserGraduate />} title="Education Loans" desc="For financing higher education." />
          <LoanItem icon={<FaBriefcase />} title="Short-term Business Loans" desc="For working capital or business expansion." />
        </ul>
      </div>
    </section>
  );
}

function LoanItem({ icon, title, desc }) {
  return (
    <li className="flex items-start gap-4">
      <div className="text-2xl text-blue-700 mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </li>
  );
}
