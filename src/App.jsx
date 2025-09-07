import { Outlet, Link } from 'react-router-dom';
import './App.css';
import FloatingContact from './components/FloatingContact'; 
function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="TaxZoom Logo" 
              className="h-16 sm:h-20 w-auto object-contain" 
            />
            <span className="text-3xl sm:text-4xl font-bold text-orange-600">TaxZoom</span>
          </Link>

          {/* Nav */}
          <nav className="space-x-6 hidden md:flex">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/services/itr-filing" className="text-gray-700 hover:text-blue-600 font-medium">ITR Filing</Link>
            <Link to="/services/gst-filing" className="text-gray-700 hover:text-blue-600 font-medium">GST Filing & New Registration</Link>
            <Link to="/otherservices" className="text-gray-700 hover:text-blue-600 font-medium">Other Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="px-4 py-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500 border-t">
        🧾 TaxZoom is ALIVE with Tailwind + Vite!
        <br />
        Welcome to your modern taxation website
      </footer>
       <FloatingContact /> 
    </div>
  );
}

export default App;
