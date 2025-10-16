import React from 'react';

const items = [
  { title: 'E‑Commerce Platform', category: 'Web Development', image: '🛍️', description: 'Modern shopping experience with real-time inventory.' },
  { title: 'Finance App', category: 'Mobile', image: '💰', description: 'Secure banking on iOS and Android.' },
  { title: 'Healthcare Portal', category: 'Web', image: '🏥', description: 'Telemedicine and patient management.' },
  { title: 'Fitness Tracker', category: 'Mobile', image: '💪', description: 'AI-powered workouts and nutrition.' }
];

// PUBLIC_INTERFACE
export default function Portfolio() {
  /** Portfolio cards displayed in a responsive grid. */
  return (
    <div className="portfolio">
      <div className="container">
        <h2 className="section-title">Our Work</h2>
        <p className="section-subtitle">
          Showcasing our latest projects and success stories.
        </p>
        <div className="portfolio-grid">
          {items.map((p, i) => (
            <article key={i} className="portfolio-card">
              <div className="portfolio-image" role="img" aria-label={p.title}>{p.image}</div>
              <div className="portfolio-content">
                <span className="portfolio-category">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
