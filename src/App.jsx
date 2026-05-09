import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';

import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import CVSection from './components/CVSection';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Intersection Observer for reveal-on-scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Update active tab based on scroll position
            if(entry.target.id) {
               setActiveTab(entry.target.id);
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    // also observe hero
    const hero = document.getElementById('home');
    if (hero) observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ position: 'relative' }}>
      <CustomCursor />
      <AnimatedBackground />

      {/* ════ NAVBAR ════ */}
      <nav className="top-nav">
        <div className="nav-container">
          <a
            href="#home"
            className="brand-logo"
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ backgroundColor: 'var(--accent-yellow)', color: '#000', width: '32px', height: '32px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>D</div>
            Dulathmi.
          </a>

          <ul className="nav-links">
            <li>
              <a href="#about" className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}>About</a>
            </li>
            <li>
              <a href="#skills" className={`nav-link ${activeTab === 'skills' ? 'active' : ''}`}>Skills</a>
            </li>
            <li>
              <a href="#services" className={`nav-link ${activeTab === 'services' ? 'active' : ''}`}>Services</a>
            </li>
            <li>
              <a href="#portfolio" className={`nav-link ${activeTab === 'portfolio' ? 'active' : ''}`}>Projects</a>
            </li>
            <li>
              <a href="#achievements" className={`nav-link ${activeTab === 'achievements' ? 'active' : ''}`}>Achievements</a>
            </li>
            <li>
              <a href="#contact" className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}>Contact</a>
            </li>
            <li>
              <a href="#contact" className="btn-primary box-glow" style={{ padding: '0.4rem 1.2rem', fontSize: '0.9rem' }}>Hire Me</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ════ SECTIONS ════ */}
      <div id="home">
        <Hero />
      </div>

      <div className="reveal" id="about">
        <AboutMe />
      </div>

      <div className="reveal" id="skills">
        <Skills />
      </div>

      <div className="reveal" id="services">
        <Services />
      </div>

      <div className="reveal" id="portfolio">
        <Projects />
      </div>

      <div className="reveal" id="achievements">
        <Achievements />
      </div>

      <div className="reveal" id="resume">
        <CVSection />
      </div>

      <div className="reveal" id="contact">
        <Contact />
      </div>

      {/* ════ FOOTER ════ */}
      <footer className="footer reveal">
        &copy; {new Date().getFullYear()} Dulathmi Sadesna. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
