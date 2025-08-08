export default function FSSAIRegistration() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-green-800 mb-6">FSSAI Registration</h1>

      <p className="text-gray-700 text-lg mb-4">
        FSSAI Registration is mandatory for all food-related businesses in India. It ensures the safety and hygiene of food products and builds consumer trust.
      </p>

      <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Who Needs It?</h2>
      <ul className="list-circle pl-5 text-gray-700 space-y-1">
        <li>Restaurants, cloud kitchens, and cafes</li>
        <li>Food manufacturers and repackagers</li>
        <li>Food transporters and distributors</li>
        <li>Online food delivery businesses</li>
      </ul>

      <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">What's Included?</h2>
      <ul className="list-circle pl-5 text-gray-700 space-y-1">
        <li>FSSAI Basic / State / Central Registration</li>
        <li>Documentation and expert support</li>
        <li>Timely filing and certificate issuance</li>
      </ul>

      <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Pricing</h2>
      <p className="text-gray-800 font-medium">Starting at ₹1499/- only (all inclusive)</p>

      <div className="mt-10">
        <a href="/contact">
          <button className="bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-3 rounded-xl shadow-md">
            Get FSSAI Now
          </button>
        </a>
      </div>
    </section>
  );
}
