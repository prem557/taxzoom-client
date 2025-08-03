import {
  FaHome,
  FaCoins,
  FaLandmark,
  FaCar,
  FaUniversity,
  FaUser,
  FaBriefcase,
  FaFileInvoice,
  FaLock,
  FaUnlock,
} from 'react-icons/fa';

export default function Loans() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-800">Loan Services We Support</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          From secured loans backed by assets to quick unsecured funding — we help you apply with the right documents and lenders.
        </p>
      </div>

      {/* Secured Loans */}
      <section className="space-y-10">
        <div className="flex items-center space-x-3">
          <FaLock className="text-blue-700 text-2xl" />
          <h2 className="text-2xl font-semibold text-blue-800">1. Secured Loans</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <LoanCard icon={<FaHome />} title="Home Loans" desc="For purchasing, constructing, or renovating a residential property." />
          <LoanCard icon={<FaCoins />} title="Gold Loans" desc="Loans against gold ornaments, coins, or bullion." />
          <LoanCard icon={<FaLandmark />} title="Loans Against Property (LAP)" desc="Loans against commercial or residential property." />
          <LoanCard icon={<FaCar />} title="Vehicle Loans" desc="For purchasing new or used cars or two-wheelers." />
          <LoanCard icon={<FaFileInvoice />} title="Loans Against Fixed Deposits" desc="Borrowing against the value of a fixed deposit." />
          <LoanCard icon={<FaBriefcase />} title="Loans Against Securities" desc="Loans against shares, mutual funds, or insurance policies." />
        </div>
      </section>

      {/* Unsecured Loans */}
      <section className="space-y-10">
        <div className="flex items-center space-x-3">
          <FaUnlock className="text-orange-600 text-2xl" />
          <h2 className="text-2xl font-semibold text-orange-700">2. Unsecured Loans</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <LoanCard icon={<FaUser />} title="Personal Loans" desc="For expenses like travel, medical bills, or debt consolidation." />
          <LoanCard icon={<FaUniversity />} title="Education Loans" desc="For financing higher education." />
          <LoanCard icon={<FaBriefcase />} title="Short-term Business Loans" desc="For working capital or business expansion." />
        </div>
      </section>

      {/* Info Strip */}
      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl text-sm text-green-800 shadow text-center">
        We help you collect documents, choose the right type of loan, and file your application properly with banks/NBFCs.
      </div>
    </div>
  );
}

// ✅ LoanCard Component
function LoanCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border border-gray-100 text-center space-y-4">
      <div className="text-3xl text-blue-700 flex justify-center">{icon}</div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
