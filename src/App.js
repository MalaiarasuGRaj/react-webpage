import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices for optimal performance.'
    },
    {
      icon: '📱',
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile apps that deliver seamless user experiences across all devices.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that captivate users and drive engagement with your brand.'
    },
    {
      icon: '☁️',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions to keep your business running smoothly.'
    },
    {
      icon: '🔒',
      title: 'Security',
      description: 'Comprehensive security audits and implementation to protect your digital assets.'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics solutions.'
    }
  ];

  const portfolio = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: '🛍️',
      description: 'A modern shopping experience with real-time inventory'
    },
    {
      title: 'Finance App',
      category: 'Mobile Development',
      image: '💰',
      description: 'Secure banking solution for iOS and Android'
    },
    {
      title: 'Healthcare Portal',
      category: 'Web Development',
      image: '🏥',
      description: 'Patient management system with telemedicine'
    },
    {
      title: 'Fitness Tracker',
      category: 'Mobile Development',
      image: '💪',
      description: 'AI-powered workout and nutrition planner'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Working with this team transformed our digital presence. Their expertise and dedication exceeded all expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO, Innovation Labs',
      content: 'Outstanding technical skills and project management. They delivered our complex platform ahead of schedule.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Founder, GreenEarth',
      content: 'The attention to detail and creative solutions they provided were exceptional. Highly recommend their services.',
      rating: 5
    }
  ];

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Building Digital Excellence
          </h1>
          <p className="hero-subtitle">
            We craft innovative solutions that transform businesses and create lasting impact
          </p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-animation">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Innovating Since 2015</h3>
              <p>
                We are a team of passionate developers, designers, and strategists dedicated to creating exceptional digital experiences. With over 8 years of industry experience, we've helped hundreds of businesses achieve their goals through cutting-edge technology solutions.
              </p>
              <p>
                Our approach combines technical expertise with creative thinking, ensuring every project we undertake not only meets but exceeds expectations. We believe in building long-term partnerships with our clients, growing together as technology evolves.
              </p>
              <div className="stats">
                <div className="stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Team Members</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">🚀</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions tailored to your business needs
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <div className="container">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Showcasing our latest projects and success stories
          </p>
          <div className="portfolio-grid">
            {portfolio.map((project, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-image">{project.image}</div>
                <div className="portfolio-content">
                  <span className="portfolio-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            What our clients say about working with us
          </p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start your next project? Let's talk!
          </p>
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
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}