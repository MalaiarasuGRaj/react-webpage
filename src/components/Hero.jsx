import React from 'react';

// PUBLIC_INTERFACE
export default function Hero() {
  /** Hero with animated decorative circles and CTA button. */
  return (
    <div className="hero">
      <div className="hero-content container">
        <h1 className="hero-title">Building Digital Excellence</h1>
        <p className="hero-subtitle">
          We craft innovative solutions that transform businesses and create lasting impact.
        </p>
        <a className="cta-button" href="#contact">Get Started</a>
      </div>
      <div className="hero-animation" aria-hidden="true">
        <span className="floating-element"></span>
        <span className="floating-element"></span>
        <span className="floating-element"></span>
      </div>
    </div>
  );
}
