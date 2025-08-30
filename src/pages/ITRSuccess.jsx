// src/pages/ITRSuccess.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function ITRSuccess() {
  const location = useLocation();
  const summary = location.state?.summary;

  if (!summary) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Submission not found</h1>
        <p className="text-gray-600 mt-4">It looks like you visited this page directly. Go back to start filing.</p>
        <Link to="/services/itr-filing" className="mt-4 inline-block bg-blue-700 text-white px-4 py-2 rounded-lg">Go to ITR Page</Link>
      </div>
    );
  }

  const downloadSummary = () => {
    const blob = new Blob([JSON.stringify(summary, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${summary.ref}-taxzoom-submission.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white p-8 rounded-xl shadow text-center">
        <h1 className="text-3xl font-bold text-blue-800">Thank you — Submission Received</h1>
        <p className="text-gray-700 mt-3">Reference ID: <strong>{summary.ref}</strong></p>
        <p className="mt-4 text-gray-600">Our team will contact you on <strong>{summary.contact?.phone}</strong> / <strong>{summary.contact?.email}</strong> to complete the filing.</p>

        <div className="mt-6 flex justify-center gap-3">
          <button onClick={downloadSummary} className="bg-blue-700 text-white px-4 py-2 rounded-lg">Download Summary</button>
          <Link to="/services/itr-filing" className="px-4 py-2 rounded-lg border">Back to ITR Page</Link>
          <Link to="/" className="px-4 py-2 rounded-lg border">Home</Link>
        </div>
      </div>
    </div>
  );
}
