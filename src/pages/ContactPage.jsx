import React, { useEffect } from 'react';
import Contact from '../components/Contact.jsx';

// PUBLIC_INTERFACE
export default function ContactPage() {
  /** Contact page shell that renders the existing Contact component. */
  useEffect(() => {
    document.title = 'Contact — CompanyName';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Get in touch about your next IT project.');
  }, []);

  return (
    <section className="contact">
      <Contact />
    </section>
  );
}
