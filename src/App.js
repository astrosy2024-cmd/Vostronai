import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from '@/components/ui/Footer';
import Navbar from '@/components/Navbar';
import HomePage from '@/pages/HomePage';
import PricingPage from '@/pages/PricingPage';
import StoragePage from '@/pages/StoragePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0B0F1A] text-white">
        <Navbar />
        
        {/* Main */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/storage" element={<StoragePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

