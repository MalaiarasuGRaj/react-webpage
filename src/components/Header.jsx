import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Header() {
  /** Responsive, accessible site header with hamburger menu for mobile. */
  const [open, setOpen] = useState(false);

  // Close the menu with Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Close menu on route change by clicking on a link
  const onLinkClick = () => setOpen(false);

  const linkClass = ({ isActive }) =>
    'nav-link' + (isActive ? ' nav-link-active' : '');

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand" aria-label="Go to homepage">
          CompanyName
        </NavLink>

        <button
          type="button"
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">☰</span>
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav ${open ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <NavLink to="/" className={linkClass} onClick={onLinkClick} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={onLinkClick}>
            About
          </NavLink>
          <NavLink to="/services" className={linkClass} onClick={onLinkClick}>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={linkClass} onClick={onLinkClick}>
            Portfolio
          </NavLink>
          <NavLink to="/testimonials" className={linkClass} onClick={onLinkClick}>
            Testimonials
          </NavLink>
          <NavLink to="/careers" className={linkClass} onClick={onLinkClick}>
            Careers
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={onLinkClick}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
