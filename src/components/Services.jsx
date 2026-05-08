import React from 'react';
import { Server, Code, Figma, Cloud, Database, Cpu, ArrowRight, Smartphone } from 'lucide-react';

const servicesData = [
  {
    title: 'Backend Development',
    description: 'Building scalable Java & Python systems with a focus on logic.',
    icon: <Server size={32} />
  },
  {
    title: 'API Architecture',
    description: 'Designing RESTful endpoints using Flask and JAX-RS.',
    icon: <Code size={32} />
  },
  {
    title: 'Mobile App Development',
    description: 'Crafting cross-platform experiences with Flutter, optimized for real-time data.',
    icon: <Smartphone size={32} />
  },
  {
    title: 'Cloud & DevOps',
    description: 'Containerization with Docker and CI/CD pipelines.',
    icon: <Cloud size={32} />
  },
  {
    title: 'Database Management',
    description: 'Integrating SQL and NoSQL (Firestore) systems based on project requirements.',
    icon: <Database size={32} />
  },
  {
    title: 'System Logic',
    description: 'Applying OOP principles and data structures for efficiency.',
    icon: <Cpu size={32} />
  }
];

const Services = () => {
  return (
    <section className="section-container" id="services">
      <div className="section-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
        <div className="hero-subtitle text-yellow">■ SERVICES & SOLUTIONS</div>
        <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>What I build</h2>
        <p className="hero-text" style={{ marginTop: '1rem', maxWidth: '600px' }}>
          Six technical domains where I deliver measurable, production-quality work.
        </p>
      </div>

      <div className="portfolio-grid reveal">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
            <div style={{ marginTop: '1rem' }}>
              <ArrowRight className="service-arrow" size={24} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
