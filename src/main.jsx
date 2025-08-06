import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import OtherServices from './pages/OtherServices.jsx';
import Loans from './pages/Loans.jsx';
import Insurance from './pages/Insurance.jsx';
import ITRFiling from './pages/ITRFiling.jsx';
import GSTFiling from './pages/GSTFiling.jsx';
import StartupRegistration from './pages/StartupRegistration.jsx';
import DataSecurity from './pages/DataSecurity.jsx';
import TDSReturn from './pages/TDSReturn.jsx';
import MSMEUdyamRegistration from './pages/MSMEUdyam.jsx';
import FSSAI from './pages/FSSAI.jsx';
import PFRegistration from './pages/PFRegistration.jsx';
import ESIRegistration from './pages/ESIRegistration.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />

      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/itr-filing" element={<ITRFiling />} />
          <Route path="services/gst-filing" element={<GSTFiling />} />
          <Route path="services/startup-registration" element={<StartupRegistration />} />
          <Route path="services/data-security" element={<DataSecurity />} />
          <Route path="services/tds-return" element={<TDSReturn />} />
          <Route path="services/msme-udyam-registration" element={<MSMEUdyamRegistration />} />
          <Route path="services/fssai" element={<FSSAI />} />
          <Route path="services/pf-registration" element={<PFRegistration />} />
          <Route path="services/esi-registration" element={<ESIRegistration />} />
          <Route path="services/loans" element={<Loans />} />
          <Route path="services/insurance" element={<Insurance />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="otherservices" element={<OtherServices />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
