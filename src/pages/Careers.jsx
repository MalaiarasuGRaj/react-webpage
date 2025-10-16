import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import jobs from '../data/jobs.js';

// PUBLIC_INTERFACE
export default function Careers() {
  /**
   * Careers page:
   * - Without :id param shows a list of open roles.
   * - With :id param shows the job detail template with responsibilities and requirements.
   */
  const { id } = useParams();

  useEffect(() => {
    document.title = id ? 'Job Detail — Careers' : 'Careers — CompanyName';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', id ? 'Role details and responsibilities.' : 'Explore open roles and join our team.');
  }, [id]);

  if (id) {
    const job = jobs.find(j => j.id === id);
    if (!job) {
      return (
        <section className="container" style={{ padding: '64px 0' }}>
          <h1>Job Not Found</h1>
          <p>We couldn’t find that role. It may have been filled or removed.</p>
          <p><Link to="/careers">Back to all roles</Link></p>
        </section>
      );
    }
    return (
      <section className="container" style={{ padding: '64px 0', maxWidth: 900 }}>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link to="/careers">Careers</Link> / <span aria-current="page">{job.title}</span>
        </nav>
        <h1 className="section-title" style={{ textAlign: 'left' }}>{job.title}</h1>
        <p className="section-subtitle" style={{ textAlign: 'left' }}>{job.type} • {job.location}</p>

        <section>
          <h2>About the Role</h2>
          <p>{job.summary}</p>
        </section>

        <section>
          <h2>Responsibilities</h2>
          <ul>
            {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </section>

        <section>
          <h2>Requirements</h2>
          <ul>
            {job.requirements.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </section>

        <div style={{ marginTop: '1rem' }}>
          <button type="button" className="submit-button" aria-label="Apply now (placeholder)">Apply Now</button>
        </div>
      </section>
    );
  }

  return (
    <section className="container" style={{ padding: '64px 0' }}>
      <h1 className="section-title">Careers</h1>
      <p className="section-subtitle">Build the future with us.</p>

      <div className="services-grid" role="list">
        {jobs.map((j) => (
          <article key={j.id} className="service-card" role="listitem" aria-label={j.title}>
            <h2 style={{ marginBottom: '.4rem' }}>{j.title}</h2>
            <div style={{ color: '#718096', marginBottom: '.6rem' }}>{j.type} • {j.location}</div>
            <p>{j.summary}</p>
            <div style={{ marginTop: '.8rem' }}>
              <Link to={`/careers/${j.id}`} className="cta-inline">View details →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
