import React, { useEffect } from 'react';

// PUBLIC_INTERFACE
export default function TermsOfService() {
  /** Static terms of service placeholder content. */
  useEffect(() => {
    document.title = 'Terms of Service — CompanyName';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Terms of Service for the CompanyName website.');
  }, []);

  return (
    <section className="container" style={{ padding: '64px 0' }}>
      <h1 className="section-title" style={{ textAlign: 'left' }}>Terms of Service</h1>
      <p className="section-subtitle" style={{ textAlign: 'left' }}>Last updated: Jan 1, 2025</p>
      <p>
        These terms govern your use of this demo website. The content is provided “as is” without warranty.
        No services are sold via this demo and no agreements are formed.
      </p>
      <h2>Use of Site</h2>
      <p>Use for evaluation purposes only. Do not attempt to submit sensitive information.</p>
      <h2>Limitation of Liability</h2>
      <p>We are not liable for any damages arising from use of this demo.</p>
    </section>
  );
}
