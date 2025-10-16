import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';

// PUBLIC_INTERFACE
export default function App() {
  /** Root SPA that renders all landing sections. */
  return (
    <div className="app">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">CompanyName</div>
          <nav className="nav">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2025 Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
