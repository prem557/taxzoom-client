export default function Footer() {
  return (
    <footer className="bg-white shadow mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} TaxZoom. All rights reserved.</p>
        <p className="mt-2">
          Made in India | <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}
