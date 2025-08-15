// src/App.jsx
import { Outlet, Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import './App.css';

function App() {
  const { t } = useTranslation();
  
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-sans">
      
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="TaxZoom Logo" className="h-10 w-auto object-contain" />
            <span className="text-2xl sm:text-3xl font-bold text-orange-600">
              TaxZoom
            </span>
          </Link>

          {/* Nav */}
          <nav className="space-x-6 hidden md:flex items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">{t('nav.home')}</Link>
            <Link to="/services/itr-filing" className="text-gray-700 hover:text-blue-600 font-medium">{t('nav.itr')}</Link>
            <Link to="/services/gst-filing" className="text-gray-700 hover:text-blue-600 font-medium">{t('nav.gst')}</Link>
            <Link to="/otherservices" className="text-gray-700 hover:text-blue-600 font-medium">{t('nav.otherServices')}</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">{t('nav.contact')}</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">{t('nav.about')}</Link>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="px-4 py-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500 border-t">
        🧾 {t('footer.tagline1')}<br />
        {t('footer.tagline2')}
      </footer>
    </div>
  );
}

export default App;
