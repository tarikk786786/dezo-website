import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { GrowthLabPage } from './pages/GrowthLabPage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { PromisePage } from './pages/PromisePage';
import { StartAProjectPage } from './pages/StartAProjectPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage, TermsPage, DisclaimerPage } from './pages/LegalPages';

export function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F3EE] text-[#0B0B0A] font-sans antialiased">
      <Navbar />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/growth-lab" element={<GrowthLabPage />} />
          <Route path="/tools" element={<GrowthLabPage />} />
          <Route path="/lab" element={<GrowthLabPage />} />
          <Route path="/tools/:toolKey" element={<GrowthLabPage />} />
          
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServicesPage />} />
          
          <Route path="/work" element={<WorkPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/promise" element={<PromisePage />} />
          <Route path="/start-a-project" element={<StartAProjectPage />} />
          <Route path="/book-strategy-call" element={<StartAProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />

          {/* 404 Fallback */}
          <Route path="*" element={
            <div className="py-32 text-center max-w-md mx-auto px-4">
              <span className="text-[11px] font-mono uppercase text-[#B08D57] font-bold">404 ERROR</span>
              <h1 className="font-display text-4xl text-[#0B0B0A] mt-2 mb-4">Page Not Found</h1>
              <p className="text-sm text-[#555451] mb-6">The page or resource you requested could not be located on the DEZO network.</p>
              <Link to="/" className="px-6 py-3 bg-[#0B0B0A] text-white text-xs font-semibold uppercase tracking-wider rounded-sm">
                Return to DEZO Homepage
              </Link>
            </div>
          } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
