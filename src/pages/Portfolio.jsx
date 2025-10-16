import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import caseStudies from '../data/caseStudies.js';

// PUBLIC_INTERFACE
export default function Portfolio() {
  /** Portfolio grid with filter by tag/category and links to detail pages. */
  const [activeTag, setActiveTag] = useState('All');

  useEffect(() => {
    document.title = 'Portfolio — CompanyName';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Featured IT projects across web, mobile, cloud, security, and data.');
  }, []);

  const tags = useMemo(() => {
    const t = new Set(['All']);
    caseStudies.forEach(cs => (cs.tags || []).forEach(tag => t.add(tag)));
    return Array.from(t);
  }, []);

  const filtered = useMemo(() => {
    if (activeTag === 'All') return caseStudies;
    return caseStudies.filter(cs => (cs.tags || []).includes(activeTag));
  }, [activeTag]);

  return (
    <section className="portfolio">
      <div className="container">
        <h1 className="section-title">Our Work</h1>
        <p className="section-subtitle">Showcasing our latest projects and success stories.</p>

        <div className="filters" role="toolbar" aria-label="Portfolio filters" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1rem' }}>
          {tags.map(tag => (
            <button
              key={tag}
              className={`filter-btn ${activeTag === tag ? 'active' : ''}`}
              onClick={() => setActiveTag(tag)}
              aria-pressed={activeTag === tag}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="portfolio-grid" role="list">
          {filtered.map((p) => (
            <article key={p.slug} className="portfolio-card" role="listitem">
              <div className="portfolio-image" role="img" aria-label={p.title}>
                <span aria-hidden="true">{p.image}</span>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">{p.category}</span>
                <h2 style={{ margin: '.4rem 0' }}>{p.title}</h2>
                <p>{p.summary}</p>
                <div style={{ marginTop: '.6rem' }}>
                  <Link to={`/portfolio/${p.slug}`} className="cta-inline">Read the Case Study →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
