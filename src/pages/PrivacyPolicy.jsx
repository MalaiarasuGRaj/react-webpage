import React, { useEffect } from 'react';

// PUBLIC_INTERFACE
export default function PrivacyPolicy() {
  /** Static privacy policy placeholder content. */
  useEffect(() => {
    document.title = 'Privacy Policy — CompanyName';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Privacy policy for the CompanyName website.');
  }, []);

  return (
    <section className="container" style={{ padding: '64px 0' }}>
      <h1 className="section-title" style={{ textAlign: 'left' }}>Privacy Policy</h1>
      <p className="section-subtitle" style={{ textAlign: 'left' }}>Last updated: Jan 1, 2025</p>
      <p>
        This is a sample privacy policy. We do not collect or store personal data on this prototype.
        Any information entered into forms remains on your device and is not transmitted to external services.
      </p>
      <h2>Information We Collect</h2>
      <p>None in this demo. In a real deployment, this section would detail data collection practices.</p>
      <h2>Contact</h2>
      <p>If you have questions, contact us at privacy@example.com.</p>
    </section>
  );
}
