import React from 'react';
import { Server, Code, Figma, Cloud, Database, Cpu, ArrowRight, Smartphone } from 'lucide-react';

const servicesData = [
  {
    title: 'Backend Development',
    description: 'Building scalable Java & Python systems with a focus on logic.',
    icon: <Server size={32} />,
    targets: ['drishti', 'smart-campus', 'expense-tracker', 'tailor-ai']
  },
  {
    title: 'API Architecture',
    description: 'Designing RESTful endpoints using Flask and JAX-RS.',
    icon: <Code size={32} />,
    targets: ['drishti', 'smart-campus', 'tailor-ai']
  },
  {
    title: 'Mobile App Development',
    description: 'Crafting cross-platform experiences with Flutter, optimized for real-time data.',
    icon: <Smartphone size={32} />,
    targets: ['drishti']
  },
  {
    title: 'Cloud & DevOps',
    description: 'Containerization with Docker and CI/CD pipelines.',
    icon: <Cloud size={32} />,
    targets: ['tailor-ai']
  },
  {
    title: 'Database Management',
    description: 'Integrating SQL and NoSQL (Firestore) systems based on project requirements.',
    icon: <Database size={32} />,
    targets: ['drishti', 'smart-campus', 'expense-tracker', 'tailor-ai']
  },
  {
    title: 'System Logic',
    description: 'Applying OOP principles and data structures for efficiency.',
    icon: <Cpu size={32} />,
    targets: ['drishti', 'expense-tracker']
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
              <a 
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();

                  window.activeTourId = (window.activeTourId || 0) + 1;
                  const currentTourId = window.activeTourId;

                  const abortTour = () => { window.activeTourId++; };
                  
                  const cleanupListeners = () => {
                    window.removeEventListener('wheel', abortTour);
                    window.removeEventListener('touchmove', abortTour);
                    window.removeEventListener('keydown', abortTour);
                  };

                  window.addEventListener('wheel', abortTour, { passive: true });
                  window.addEventListener('touchmove', abortTour, { passive: true });
                  window.addEventListener('keydown', abortTour, { passive: true });

                  document.querySelectorAll('.project-highlight-pink').forEach(el => {
                    el.classList.remove('project-highlight-pink');
                  });

                  const targetElements = service.targets.map(id => document.getElementById(id)).filter(Boolean);
                  if (targetElements.length === 0) return;

                  targetElements.forEach(el => el.classList.add('project-highlight-pink'));

                  const delay = (ms) => new Promise(res => setTimeout(res, ms));

                  const runTour = async () => {
                    for (let i = 0; i < targetElements.length; i++) {
                      if (window.activeTourId !== currentTourId) break;
                      targetElements[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                      for (let wait = 0; wait < 15; wait++) {
                        if (window.activeTourId !== currentTourId) break;
                        await delay(100);
                      }
                    }

                    if (window.activeTourId === currentTourId) {
                      for (let wait = 0; wait < 30; wait++) {
                        if (window.activeTourId !== currentTourId) break;
                        await delay(100);
                      }
                    }

                    if (window.activeTourId === currentTourId) {
                      targetElements.forEach(el => el.classList.remove('project-highlight-pink'));
                    }

                    cleanupListeners();
                  };

                  runTour();
                }}
                style={{ cursor: 'pointer' }}
              >
                <ArrowRight className="service-arrow" size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
