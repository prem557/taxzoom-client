export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
        Contact Us
      </h1>

      <form className="bg-white shadow-md rounded-xl p-8 space-y-6">
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
          className="bg-blue-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </form>

      <div className="text-center mt-8 space-y-2">
  <p className="text-lg text-gray-700">
    📞 Call us directly at <a href="tel:+918210097911" className="text-blue-600 hover:underline">8210097911</a>
  </p>
  <p className="text-lg text-gray-700">
    📧 Email us at <a href="mailto:support@taxzoom.in" className="text-blue-600 hover:underline">support@taxzoom.in</a>
  </p>
  <p className="text-lg text-gray-700">
    📍 Visit us at: <br />
    New Colony, Near Prakash Eye Care, Po Rehla, Dist- Palamu, Jharkhand PIN- 822124
  </p>
</div>
    </section>
  );
}
