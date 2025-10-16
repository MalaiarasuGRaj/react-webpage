import React, { useState } from 'react';

// PUBLIC_INTERFACE
export default function Contact() {
  /**
   * Contact form with simple client-side validation.
   * No external APIs; submits locally and shows a success message.
   */
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!data.name.trim()) e.name = 'Name is required';
    if (!data.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Enter a valid email';
    if (!data.message.trim() || data.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (!validate()) return;
    setSent(true);
    setData({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Ready to start your next project? Let's talk!</p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <strong>Email</strong>
                <p>hello@company.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Address</strong>
                <p>123 Innovation Street, Tech City, TC 12345</p>
              </div>
            </div>
            <div className="social-links">
              <button type="button" className="social-link" aria-label="LinkedIn link placeholder">LinkedIn</button>
              <button type="button" className="social-link" aria-label="Twitter link placeholder">Twitter</button>
              <button type="button" className="social-link" aria-label="GitHub link placeholder">GitHub</button>
            </div>
          </div>

          <form className="contact-form-container" noValidate onSubmit={onSubmit}>
            {sent && <div role="status" className="alert-success" style={{marginBottom:'1rem', color:'#2f855a', fontWeight:600}}>Message sent! We'll get back to you soon.</div>}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={data.name} onChange={(e)=>setData({...data, name:e.target.value})} required placeholder="Your name" />
              {errors.name && <small style={{color:'#c53030'}}>{errors.name}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} required placeholder="your.email@example.com" />
              {errors.email && <small style={{color:'#c53030'}}>{errors.email}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={data.message} onChange={(e)=>setData({...data, message:e.target.value})} required placeholder="Tell us about your project..." />
              {errors.message && <small style={{color:'#c53030'}}>{errors.message}</small>}
            </div>
            <button className="submit-button" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
