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
            <Link to="/otherservices" className="text-gray-700 hover:text-blue-600">Other Services</Link>
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
      <footer className="text-center text-sm py-6 text-gray-500">
        🧾 TaxZoom is ALIVE with Tailwind + Vite!<br />
        Welcome to your modern taxation website
      </footer>
    </div>
  );
}

export default App;
