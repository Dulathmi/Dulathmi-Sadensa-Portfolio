import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    // Using mailto to send email without a backend
    const subject = encodeURIComponent("Portfolio Contact - Let's Connect");
    const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
    window.location.href = `mailto:sadesnadulathmii@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section-container" id="contact">
      <div className="contact-wrapper reveal">
        <h2 className="contact-title text-yellow text-glow" style={{ fontSize: '3rem', textTransform: 'uppercase', lineHeight: '1', fontWeight: 800, textAlign: 'center' }}>
          Connect with me
        </h2>
        
        <form onSubmit={handleSubmit} className="contact-form" style={{ marginTop: '3rem' }}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              placeholder="Message"
              className="form-input form-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          
          <div className="form-submit-wrapper" style={{ marginTop: '1rem', justifyContent: 'center' }}>
            <button type="submit" className="btn-primary box-glow" style={{ width: '100%' }}>
              Get in Touch
            </button>
          </div>
        </form>

        <div style={{ 
          margin: '4rem 0', 
          padding: '3rem 0', 
          borderTop: '1px solid rgba(255,255,255,0.08)', 
          borderBottom: '1px solid rgba(255,255,255,0.08)', 
          textAlign: 'center' 
        }}>
          <p style={{ 
            fontSize: '1.35rem', 
            fontStyle: 'italic', 
            color: '#e0e0e0', 
            lineHeight: '1.8', 
            fontWeight: 300,
            maxWidth: '95%',
            margin: '0 auto'
          }}>
            "I believe that technology should be accessible and <span style={{ color: 'var(--accent-yellow)', fontWeight: 600 }}>impactful</span>. My goal is to build software that doesn't just work, but actually improves lives."
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#e0e0e0', marginBottom: '3rem', fontSize: '1rem', fontWeight: 500 }}>
            sadesnadulathmii@gmail.com
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.5rem' }}>
            Find me on
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="https://linkedin.com/in/Dulathmi-Hettige" target="_blank" rel="noreferrer" className="social-circle linkedin-circle" title="Connect on LinkedIn">
              <Linkedin size={24} fill="currentColor" />
            </a>
            <a href="https://github.com/Dulathmi" target="_blank" rel="noreferrer" className="social-circle" title="View my Code">
              <Github size={24} fill="currentColor" />
            </a>
            <a href="mailto:sadesnadulathmii@gmail.com" className="social-circle" title="Send an Email">
              <Mail size={24} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
