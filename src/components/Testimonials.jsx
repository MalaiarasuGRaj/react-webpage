import React from 'react';

const testimonials = [
  { name: 'Sarah Johnson', role: 'CEO, TechStart Inc.', content: 'Transformed our digital presence. Expertise and dedication exceeded expectations.', rating: 5 },
  { name: 'Michael Chen', role: 'CTO, Innovation Labs', content: 'Outstanding skills and delivery. Complex platform ahead of schedule.', rating: 5 },
  { name: 'Emma Rodriguez', role: 'Founder, GreenEarth', content: 'Attention to detail and creative solutions were exceptional.', rating: 5 }
];

// PUBLIC_INTERFACE
export default function Testimonials() {
  /** Testimonials cards with star ratings. */
  return (
    <div className="testimonials">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">What our clients say about working with us.</p>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-rating" aria-label={`${t.rating} star rating`}>
                {Array.from({ length: t.rating }).map((_, j) => <span key={j}>⭐</span>)}
              </div>
              <p className="testimonial-content">"{t.content}"</p>
              <div className="testimonial-author">
                <div className="author-avatar" aria-hidden="true">{t.name.charAt(0)}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
