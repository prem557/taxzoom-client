import React, { useState } from "react";

const ITRForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    incomeType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ITR Filing Data Submitted:", formData);
    alert("Your ITR Filing request has been submitted successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">File Your ITR</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg rounded-lg p-6">
        <div>
          <label className="block font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Income Type</label>
          <select
            name="incomeType"
            required
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select</option>
            <option value="salaried">Salaried Individual</option>
            <option value="selfEmployed">Self Employed</option>
            <option value="business">Business Owner</option>
            <option value="investments">Stocks / Crypto / Investments</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Submit ITR Filing
        </button>
      </form>
    </div>
  );
};

export default ITRForm;
