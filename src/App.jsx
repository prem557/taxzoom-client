import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="TaxZoom Logo"
    className="h-10 w-auto object-contain"
  />
  <span className="text-2xl sm:text-3xl font-bold text-orange-600">TaxZoom</span>
</Link>

          <nav className="space-x-6 hidden md:flex">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/services/itr-filing" className="text-gray-700 hover:text-blue-600 font-medium">ITRFiling</Link>
            <Link to="/services/gst-filing" className="text-gray-700 hover:text-blue-600 font-medium">GST Filing</Link>
            <Link to="/otherservices" className="text-gray-700 hover:text-blue-600 font-medium">Other Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="px-4 py-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500 border-t">
        🧾 TaxZoom is ALIVE with Tailwind + Vite!<br />
        Welcome to your modern taxation website 
      </footer>
    </div>
  );
}

export default App;
