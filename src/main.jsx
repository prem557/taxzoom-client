import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';

import ITRFiling from './pages/ITRFiling.jsx';
import GSTFiling from './pages/GSTFiling.jsx';
import StartupRegistration from './pages/StartupRegistration.jsx';
import DataSecurity from './pages/DataSecurity.jsx';

import NotFound from './pages/NotFound.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />

          {/* ✅ Sub-service Routes */}
          <Route path="services/itr-filing" element={<ITRFiling />} />
          <Route path="services/gst-filing" element={<GSTFiling />} />
          <Route path="services/startup-registration" element={<StartupRegistration />} />
          <Route path="services/data-security" element={<DataSecurity />} />

          {/* ❌ 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
