// src/pages/ITRStart.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ITRStart() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // form state
  const [taxpayerType, setTaxpayerType] = useState("salaried");
  const [pkg, setPkg] = useState("standard");
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [files, setFiles] = useState([]);

  const packages = {
    basic: { price: 499, desc: "Basic ITR filing (simple salaried)" },
    standard: { price: 999, desc: "Standard filing + basic support" },
    premium: { price: 1999, desc: "Priority support, notices & review" },
  };

  function handleFiles(e) {
    setFiles(Array.from(e.target.files));
  }

  function next() {
    if (step === 3) {
      // basic validation for contact
      if (!contact.name.trim() || !contact.email.trim() || !contact.phone.trim()) {
        alert("Please enter name, email and phone before continuing.");
        return;
      }
    }
    setStep((s) => Math.min(4, s + 1));
  }
  function back() {
    setStep((s) => Math.max(1, s - 1));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // simulate submission -> generate reference id
    const ref = `TZ-${Date.now().toString().slice(-6)}`;
    const summary = {
      ref,
      taxpayerType,
      package: pkg,
      price: packages[pkg].price,
      contact,
      files: files.map((f) => ({ name: f.name, size: f.size })),
      timestamp: new Date().toISOString(),
    };

    // navigate to success page passing summary in state
    navigate("/services/itr-filing/success", { state: { summary } });
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Start ITR Filing</h1>
      <p className="text-gray-600 mb-6">
        Quick, secure, step-by-step process. No account needed — we’ll contact you to finalize.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow">
        {/* Stepper */}
        <div className="flex gap-3 mb-2 text-sm text-gray-600">
          <div className={`px-3 py-1 rounded-full ${step===1 ? "bg-blue-100 text-blue-800" : "bg-gray-100"}`}>1. Type</div>
          <div className={`px-3 py-1 rounded-full ${step===2 ? "bg-blue-100 text-blue-800" : "bg-gray-100"}`}>2. Package</div>
          <div className={`px-3 py-1 rounded-full ${step===3 ? "bg-blue-100 text-blue-800" : "bg-gray-100"}`}>3. Contact</div>
          <div className={`px-3 py-1 rounded-full ${step===4 ? "bg-blue-100 text-blue-800" : "bg-gray-100"}`}>4. Review</div>
        </div>

        {/* Step 1 - Taxpayer Type */}
        {step === 1 && (
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Choose taxpayer type</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="p-4 border rounded-lg hover:shadow cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="salaried"
                  checked={taxpayerType === "salaried"}
                  onChange={() => setTaxpayerType("salaried")}
                  className="mr-2"
                />
                <span className="font-semibold">Salaried Individuals</span>
                <div className="text-sm text-gray-600">Form 16, HRA, investments</div>
              </label>

              <label className="p-4 border rounded-lg hover:shadow cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="self"
                  checked={taxpayerType === "self"}
                  onChange={() => setTaxpayerType("self")}
                  className="mr-2"
                />
                <span className="font-semibold">Self-employed / Professional</span>
                <div className="text-sm text-gray-600">Freelancers, consultants, professionals</div>
              </label>

              <label className="p-4 border rounded-lg hover:shadow cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="business"
                  checked={taxpayerType === "business"}
                  onChange={() => setTaxpayerType("business")}
                  className="mr-2"
                />
                <span className="font-semibold">Business Owner (SME/MSME)</span>
                <div className="text-sm text-gray-600">Proprietorship, partnership, company</div>
              </label>

              <label className="p-4 border rounded-lg hover:shadow cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="investor"
                  checked={taxpayerType === "investor"}
                  onChange={() => setTaxpayerType("investor")}
                  className="mr-2"
                />
                <span className="font-semibold">Investor / Trader</span>
                <div className="text-sm text-gray-600">Stocks, mutual funds, crypto, capital gains</div>
              </label>
            </div>
          </div>
        )}

        {/* Step 2 - Package */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-3">Choose a package</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {Object.entries(packages).map(([key, info]) => (
                <label key={key} className={`p-4 border rounded-lg cursor-pointer hover:shadow ${pkg===key ? "border-blue-600 shadow-md" : ""}`}>
                  <input
                    type="radio"
                    name="pkg"
                    value={key}
                    checked={pkg === key}
                    onChange={() => setPkg(key)}
                    className="mr-2"
                  />
                  <div className="font-semibold text-gray-800 capitalize">{key} — ₹{info.price}</div>
                  <div className="text-sm text-gray-600">{info.desc}</div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 - Contact & Files */}
        {step === 3 && (
          <div className="grid gap-4">
            <h2 className="text-xl font-semibold">Your contact details</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Full name"
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
                className="border p-3 rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                className="border p-3 rounded-lg"
                required
              />
              <input
                type="tel"
                placeholder="Phone (10 digits)"
                value={contact.phone}
                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                className="border p-3 rounded-lg"
                required
              />
              <select
                value={contact.prefer}
                onChange={(e) => setContact({ ...contact, prefer: e.target.value })}
                className="border p-3 rounded-lg"
              >
                <option value="">Preferred contact</option>
                <option value="call">Call</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="email">Email</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Upload basic documents (optional)</label>
              <input type="file" multiple onChange={handleFiles} className="block" />
              {files.length > 0 && (
                <ul className="text-sm mt-2 text-gray-700">
                  {files.map((f, i) => (
                    <li key={i}>{f.name} — {(f.size/1024|0)} KB</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* Step 4 - Review */}
        {step === 4 && (
          <div>
            <h2 className="text-xl font-semibold mb-3">Review & submit</h2>
            <div className="bg-gray-50 p-4 rounded-lg border">
              <div className="text-sm text-gray-700"><strong>Type:</strong> {taxpayerType}</div>
              <div className="text-sm text-gray-700"><strong>Package:</strong> {pkg} — ₹{packages[pkg].price}</div>
              <div className="text-sm text-gray-700"><strong>Name:</strong> {contact.name}</div>
              <div className="text-sm text-gray-700"><strong>Email:</strong> {contact.email}</div>
              <div className="text-sm text-gray-700"><strong>Phone:</strong> {contact.phone}</div>
              <div className="text-sm text-gray-700"><strong>Files:</strong> {files.length} uploaded</div>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between items-center">
          <div>
            {step > 1 && (
              <button type="button" onClick={back} className="px-4 py-2 rounded-lg border hover:bg-gray-50">
                ← Back
              </button>
            )}
          </div>

          <div className="flex gap-3">
            {step < 4 ? (
              <button type="button" onClick={next} className="bg-blue-700 text-white px-4 py-2 rounded-lg">
                Continue →
              </button>
            ) : (
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg">
                Submit & Get Started
              </button>
            )}
          </div>
        </div>
      </form>

      <p className="text-xs text-gray-500 mt-3">
        Note: This is a frontend demo flow. For production you'll need secure file upload, authentication and payment integration.
      </p>
    </div>
  );
}
