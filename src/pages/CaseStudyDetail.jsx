import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import caseStudies from '../data/caseStudies.js';

// PUBLIC_INTERFACE
export default function CaseStudyDetail() {
  /** Case study detail with sections: Challenge, Solution, Outcomes, Stack. */
  const { slug } = useParams();
  const study = caseStudies.find(s => s.slug === slug);

  useEffect(() => {
    document.title = study ? `${study.title} — Case Study` : 'Case Study — Not Found';
    const meta = document.querySelector('meta[name="description"]');
    if (meta && study) meta.setAttribute('content', study.summary);
  }, [study]);

  if (!study) {
    return (
      <section className="container" style={{ padding: '64px 0' }}>
        <h1>Case Study Not Found</h1>
        <p>The requested case study does not exist.</p>
        <p><Link to="/portfolio">Back to Portfolio</Link></p>
      </section>
    );
  }

  return (
    <section className="container" style={{ padding: '64px 0' }}>
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <Link to="/portfolio">Portfolio</Link> / <span aria-current="page">{study.title}</span>
      </nav>

      <h1 className="section-title" style={{ textAlign: 'left' }}>{study.title}</h1>
      <p className="section-subtitle" style={{ textAlign: 'left' }}>{study.industry} • {study.category}</p>

      <div className="case-meta u-surface" style={{ padding: '1rem', borderRadius: '12px', margin: '1rem 0' }}>
        <strong>Client:</strong> {study.client || 'Confidential'} • <strong>Duration:</strong> {study.duration || '12 weeks'}
      </div>

      <div className="u-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
        <section>
          <h2>Challenge</h2>
          <ul>
            {study.problems.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </section>
        <section>
          <h2>Solution</h2>
          <ul>
            {study.solutions.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </section>
        <section>
          <h2>Outcomes</h2>
          <ul>
            {study.outcomes.map((o, i) => <li key={i}>{o}</li>)}
          </ul>
        </section>
        <section>
          <h2>Tech Stack</h2>
          <div>{(study.stack || ['React', 'Node.js', 'Cloud']).join(', ')}</div>
        </section>
      </div>
    </section>
  );
}
