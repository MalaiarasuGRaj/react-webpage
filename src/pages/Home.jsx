import React, { useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import ServicesSection from '../components/Services.jsx';
import PortfolioSection from '../components/Portfolio.jsx';
import TestimonialsSection from '../components/Testimonials.jsx';

// PUBLIC_INTERFACE
export default function Home() {
  /** Home page using existing sections with H1 in Hero; sets basic meta. */
  useEffect(() => {
    document.title = 'Home — CompanyName';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Modern IT solutions: web, cloud, security, data, and mobile.');
  }, []);

  return (
    <>
      <section id="hero"><Hero /></section>
      <section aria-labelledby="home-services">
        <h2 id="home-services" className="section-title" style={{ display: 'none' }}>Services Overview</h2>
        <ServicesSection />
      </section>
      <section aria-labelledby="home-portfolio">
        <h2 id="home-portfolio" className="section-title" style={{ display: 'none' }}>Portfolio Highlights</h2>
        <PortfolioSection />
      </section>
      <section aria-labelledby="home-testimonials">
        <h2 id="home-testimonials" className="section-title" style={{ display: 'none' }}>Testimonials</h2>
        <TestimonialsSection />
      </section>
    </>
  );
}
