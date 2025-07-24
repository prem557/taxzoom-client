import { Link, Outlet, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import ITRFiling from './pages/ITRFiling';
import GSTFiling from './pages/GSTFiling';
import StartupRegistration from './pages/StartupRegistration';
import DataSecurity from './pages/DataSecurity';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-900">
              <span className="text-orange-600">📄</span> Tax<span className="text-orange-600">Zoom</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="space-x-6 hidden md:flex">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
            <Link to="/otherservices" className="text-gray-700 hover:text-blue-600 font-medium">Other Services</Link>
          </nav>
        </div>
      </header>

      {/* Routing Pages */}
      <main className="px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/itr-filing" element={<ITRFiling />} />
          <Route path="/services/gst-filing" element={<GSTFiling />} />
          <Route path="/services/startup-registration" element={<StartupRegistration />} />
          <Route path="/services/data-security" element={<DataSecurity />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500 border-t">
        🧾 TaxZoom is ALIVE with Tailwind + Vite!<br />
        Welcome to your modern taxation website 🚀
      </footer>
    </div>
  );
}

export default App;