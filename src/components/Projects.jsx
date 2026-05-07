import React from 'react';
import { ExternalLink } from 'lucide-react';

const stats = [
  { value: '4+', label: 'HACKATHONS' },
  { value: '5+', label: 'MAJOR PROJECTS' },
  { value: '500+', label: 'GITHUB COMMITS' },
  { value: '2000+', label: 'HOURS CODING' },
];

const projects = [
  {
    number: '01',
    title: 'Drishti — AI Smart Glasses',
    description: 'Wearable assistive tech using computer vision to aid the visually impaired.',
    badge: 'AI / IoT',
    link: 'https://github.com/DulathmiH',
  },
  {
    number: '02',
    title: 'Smart Campus API',
    description: 'RESTful backend with JAX-RS managing students, courses, and resources.',
    badge: 'Java / REST',
    link: 'https://github.com/DulathmiH',
  },
  {
    number: '03',
    title: 'Java Expense Tracker',
    description: 'OOP-driven personal finance tracker with persistent storage.',
    badge: 'Java / OOP',
    link: 'https://github.com/DulathmiH',
  },
  {
    number: '04',
    title: 'Tailor AI — Resume Analysis Tool',
    description: 'A full-stack application built to compare resumes against job descriptions. Implemented PDF text extraction and integrated Google Gemini API for semantic analysis.',
    badge: 'Next.js / Supabase',
    link: 'https://github.com/DulathmiH',
  }
];

const Projects = () => {
  return (
    <section className="section-container bg-darker" id="portfolio">
      
      <div className="stats-container reveal">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number text-yellow text-glow">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="section-header reveal" style={{ textAlign: 'left', marginBottom: '3rem' }}>
        <div className="hero-subtitle text-yellow">■ SELECTED WORK</div>
        <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>Project showcase</h2>
      </div>

      <div className="project-list-container reveal">
        {projects.map((project, index) => (
          <div key={index} className="project-list-card">
            <div className="project-number">{project.number}</div>
            
            <div className="project-content">
              <h3 className="project-list-title">{project.title}</h3>
              <p className="project-list-desc">{project.description}</p>
            </div>
            
            <div className="project-meta">
              <div className="project-badge">{project.badge}</div>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                <ExternalLink size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
