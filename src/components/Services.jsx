import React from 'react';

const services = [
  { icon: '💻', title: 'Web Development', description: 'Modern, performant web apps.' },
  { icon: '📱', title: 'Mobile Solutions', description: 'iOS/Android apps and PWAs.' },
  { icon: '🎨', title: 'UI/UX Design', description: 'Human-centered product design.' },
  { icon: '☁️', title: 'Cloud Services', description: 'Scalable infra and DevOps.' },
  { icon: '🔒', title: 'Security', description: 'Audits and secure by design.' },
  { icon: '📊', title: 'Data Analytics', description: 'Insightful dashboards and AI.' }
];

// PUBLIC_INTERFACE
export default function Services() {
  /** Services grid cards with hover effect. */
  return (
    <div className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive solutions tailored to your business needs.
        </p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card" aria-label={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
