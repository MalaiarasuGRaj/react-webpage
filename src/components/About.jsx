import React from 'react';

// PUBLIC_INTERFACE
export default function About() {
  /** About section with brief description and stats grid. */
  return (
    <div className="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          A team of engineers, designers, and strategists delivering quality since 2015.
        </p>
        <div className="about-content">
          <div className="about-text">
            <h3>Innovating Since 2015</h3>
            <p>
              We build exceptional digital products and experiences for companies of all sizes,
              combining technical craftsmanship with thoughtful design.
            </p>
            <p>
              Our mission is to help organizations grow with scalable, secure, and user-centered solutions.
            </p>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">200+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Team Members</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder" role="img" aria-label="Rocket illustration">🚀</div>
          </div>
        </div>
      </div>
    </div>
  );
}
