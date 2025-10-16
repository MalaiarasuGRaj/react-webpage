import React, { useEffect } from 'react';
import testimonials from '../data/testimonials.js';

// PUBLIC_INTERFACE
export default function Testimonials() {
  /** Testimonials list with accessible star ratings. */
  useEffect(() => {
    document.title = 'Testimonials — CompanyName';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'What our clients say about partnering with us.');
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        <h1 className="section-title">Client Testimonials</h1>
        <p className="section-subtitle">Trusted by teams across industries.</p>
        <div className="testimonials-grid" role="list">
          {testimonials.map((t, i) => (
            <article key={i} className="testimonial-card" role="listitem">
              <div className="testimonial-rating" aria-label={`${t.rating} star rating`} role="img">
                {Array.from({ length: t.rating }).map((_, j) => <span key={j}>⭐</span>)}
              </div>
              <blockquote className="testimonial-content">“{t.content}”</blockquote>
              <div className="testimonial-author">
                <div className="author-avatar" aria-hidden="true">{t.name.charAt(0)}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
