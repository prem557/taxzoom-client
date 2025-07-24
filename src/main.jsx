import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Layout from './components/Layout.jsx';
import NotFound from './pages/NotFound.jsx';

// 🆕 Import new service pages
import ITRFiling from './pages/ITRFiling.jsx';
import GSTFiling from './pages/GSTFiling.jsx';
import StartupRegistration from './pages/StartupRegistration.jsx';
import DataSecurity from './pages/DataSecurity.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />

          {/* 🆕 Sub-service Routes */}
          <Route path="/services/itr-filing" element={<ITRFiling />} />
          <Route path="/services/gst-filing" element={<GSTFiling />} />
          <Route path="/services/startup-registration" element={<StartupRegistration />} />
          <Route path="/services/data-security" element={<DataSecurity />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
