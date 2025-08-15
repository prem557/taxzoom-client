import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
        Contact Us
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        We’re here to help! Contact us directly via phone, WhatsApp, or email — and we’ll get back to you promptly.
      </p>

      {/* Contact Form */}
      <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6 border border-gray-100">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            required
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            required
            rows="4"
            placeholder="How can we help you?"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition shadow"
        >
          Send Message
        </button>
      </form>

      {/* Contact Information */}
      <div className="mt-12 text-center space-y-6">
        
        {/* Visible Phone Number */}
        <p className="text-lg font-semibold text-gray-800">
          📞 <span className="text-blue-700">+91 82100 97911</span>
        </p>

        {/* Call & WhatsApp Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+918210097911"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-700 transition text-lg"
          >
            <FaPhoneAlt /> Call Us
          </a>
          <a
            href="https://wa.me/918210097911"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-600 transition text-lg"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        {/* Email */}
        <p className="text-lg text-gray-700 flex items-center justify-center gap-2">
          <FaEnvelope className="text-blue-600" />
          <span>Email:</span>
          <a
            href="mailto:taxzoomconsulting@gmail.com"
            className="text-blue-600 hover:underline font-medium"
          >
            taxzoomconsulting@gmail.com
          </a>
        </p>

        {/* Location */}
        <p className="text-lg text-gray-700 flex items-center justify-center gap-2 max-w-2xl mx-auto text-center">
          <FaMapMarkerAlt className="text-red-500" size={20} />
          <span>
            New Colony, Near Prakash Eye Care, Po Rehla, Dist- Palamu, Jharkhand PIN- 822124
          </span>
        </p>
      </div>
    </section>
  );
}
