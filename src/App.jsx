import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-800">TaxZoom</h1>
          <nav className="space-x-6 hidden md:flex">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          </nav>
        </div>
      </header>

      {/* Dynamic Page Content */}
      <main className="px-4 py-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500">
        🧾 TaxZoom is ALIVE with Tailwind + Vite!<br />
        Welcome to your modern taxation website 
      </footer>
    </div>
  );
}

export default App;
