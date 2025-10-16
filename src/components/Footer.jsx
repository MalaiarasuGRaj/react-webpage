import React from 'react';
import { NavLink } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Footer() {
  /** Shared footer with quick links, socials placeholders, and legal links. */
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand" aria-label="Company brand">CompanyName</div>
          <p className="footer-text">
            Building reliable, scalable software for the modern enterprise.
          </p>
          <div className="footer-socials" aria-label="Social links">
            <a href="#" aria-label="LinkedIn placeholder">LinkedIn</a>
            <a href="#" aria-label="Twitter placeholder">Twitter</a>
            <a href="#" aria-label="GitHub placeholder">GitHub</a>
          </div>
        </div>
        <div>
          <h3 className="footer-heading">Explore</h3>
          <nav className="footer-links" aria-label="Footer - Explore">
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/testimonials">Testimonials</NavLink>
            <NavLink to="/careers">Careers</NavLink>
          </nav>
        </div>
        <div>
          <h3 className="footer-heading">Company</h3>
          <nav className="footer-links" aria-label="Footer - Company">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/privacy">Privacy Policy</NavLink>
            <NavLink to="/terms">Terms of Service</NavLink>
          </nav>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2025 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
