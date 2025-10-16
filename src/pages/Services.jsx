import React, { useEffect } from 'react';
import services from '../data/services.js';

// PUBLIC_INTERFACE
export default function Services() {
  /** Services grid with sample IT offerings and basic FAQ accordions. */
  useEffect(() => {
    document.title = 'Services — CompanyName';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Web, Cloud & DevOps, Security, Mobile, and Data & AI services for IT.');
  }, []);

  return (
    <section className="services">
      <div className="container">
        <h1 className="section-title">Our Services</h1>
        <p className="section-subtitle">Comprehensive solutions tailored to your business needs.</p>

        <div className="services-grid" role="list">
          {services.map((s, i) => (
            <article key={i} className="service-card" role="listitem" aria-label={s.title}>
              <div className="service-icon" aria-hidden="true">{s.icon}</div>
              <h2>{s.title}</h2>
              <p>{s.description}</p>
            </article>
          ))}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h2 style={{ textAlign: 'center' }}>FAQs</h2>
          <div className="container" style={{ maxWidth: 800, margin: '1rem auto' }}>
            <details>
              <summary>How do you engage with new IT projects?</summary>
              <p>We start with discovery and a technical deep-dive, then propose a phased plan with clear milestones.</p>
            </details>
            <details>
              <summary>Do you support cloud-native and on-prem deployments?</summary>
              <p>Yes. We routinely deliver cloud-native architectures and can support hybrid or on-prem constraints.</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
