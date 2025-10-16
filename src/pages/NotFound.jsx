import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function NotFound() {
  /**
   * 404 Not Found page to handle unmatched routes gracefully.
   * Provides navigation back to Home and key sections to prevent blank screens on unknown paths.
   */
  useEffect(() => {
    document.title = 'Page Not Found — CompanyName';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'The page you are looking for does not exist.');
  }, []);

  return (
    <section className="container" style={{ padding: '64px 0', textAlign: 'center' }}>
      <h1 className="section-title">Page Not Found</h1>
      <p className="section-subtitle">We couldn’t find the page you were looking for.</p>
      <p>
        <Link to="/" className="cta-inline">Go to Home</Link>
        {' '}•{' '}
        <Link to="/about" className="cta-inline">About</Link>
        {' '}•{' '}
        <Link to="/services" className="cta-inline">Services</Link>
        {' '}•{' '}
        <Link to="/contact" className="cta-inline">Contact</Link>
      </p>
    </section>
  );
}
