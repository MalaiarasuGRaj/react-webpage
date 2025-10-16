import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import Layout from './layouts/Layout.jsx';

// Lazy-load pages for route-based code splitting
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail.jsx'));
const Testimonials = lazy(() => import('./pages/Testimonials.jsx'));
const Careers = lazy(() => import('./pages/Careers.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const TermsOfService = lazy(() => import('./pages/TermsOfService.jsx'));

// PUBLIC_INTERFACE
function bootstrap() {
  /** Bootstraps the React Router application into #root with a shared layout. */
  const rootEl = document.getElementById('root');
  const root = createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<div className="container" style={{ padding: '2rem' }}>Loading...</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:slug" element={<CaseStudyDetail />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:id" element={<Careers />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
}

bootstrap();
