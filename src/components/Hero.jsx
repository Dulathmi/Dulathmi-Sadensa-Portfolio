import React from 'react';
import { motion } from 'framer-motion';
import { Github, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid" style={{ alignItems: 'center' }}>
        
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-col"
        >
          <div className="internship-badge">
            <div className="internship-dot"></div>
            AVAILABLE FOR INTERNSHIPS
          </div>
          <h1 className="hero-title" style={{ fontSize: '5rem', textTransform: 'uppercase', lineHeight: '1' }}>
            DULATHMI<br/>
            <span className="text-yellow text-glow">SADESNA</span>
          </h1>
          <p className="hero-text" style={{ fontSize: '1.25rem', marginTop: '1.5rem', color: '#e0e0e0', marginBottom: '0.5rem' }}>
            Full Stack Developer Intern <br/>
            specializing in <span style={{ fontWeight: '600', color: '#fff' }}>Backend Architecture & RESTful APIs.</span>
          </p>
          <div style={{ color: 'var(--accent-yellow)', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '600' }}>
            CS Undergraduate @ University of Westminster • IIT
          </div>

          <div className="hero-actions" style={{ marginTop: '2.5rem' }}>
            <a href="/Dulathmi_Cv_final.pdf" target="_blank" rel="noreferrer" className="btn-primary box-glow">
              <Download size={20} /> Download CV
            </a>
            <a href="https://github.com/Dulathmi" target="_blank" rel="noreferrer" className="btn-secondary">
              <Github size={20} /> View GitHub
            </a>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-image-col"
        >
          <motion.div 
            className="hero-image-wrapper" 
            whileHover={{ scale: 1.03, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ 
              width: '400px', 
              height: '400px', 
              position: 'relative',
              borderRadius: '50%',
              border: '1px solid var(--accent-yellow)',
              boxShadow: '0 0 60px rgba(229, 255, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <img 
              src="/images/profile.png" 
              alt="Dulathmi Sadesna" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                objectPosition: 'center center'
              }} 
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
