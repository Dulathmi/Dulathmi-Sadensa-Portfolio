import React from 'react';
import { Award, Trophy, Star, Medal } from 'lucide-react';

const achievementsData = [
  {
    title: 'IEEExtreme 19.0',
    description: 'Participated in the global 24-hour programming competition, solving complex algorithmic challenges.',
    highlight: 'Impact: Collaborated with team Nexora2025 to solve high-concurrency algorithmic problems in a global 24-hour marathon.',
    icon: <Trophy size={32} />
  },
  {
    title: 'IEEE Global Hackathon',
    description: 'Collaborated with international teams to build innovative technical solutions within a tight deadline.',
    icon: <Award size={32} />
  },
  {
    title: 'Academic Merit Award — IIT',
    description: 'Awarded for outstanding academic performance and achieving Merit standing during the University Foundation Programme at the Informatics Institute of Technology.',
    highlight: 'Recognized for maintaining excellence across core computing and mathematics modules.',
    icon: <Medal size={32} />
  },
  {
    title: 'Vertex 2025',
    description: 'Competed in advanced technical challenges showcasing problem-solving and software development skills.',
    icon: <Star size={32} />
  }
];

const Achievements = () => {
  return (
    <section className="section-container bg-darker" id="achievements">
      <div className="section-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
        <div className="hero-subtitle text-yellow">■ RECOGNITION</div>
        <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>Achievements</h2>
        <p className="hero-text" style={{ marginTop: '1rem', maxWidth: '600px' }}>
          Milestones and competitions that have shaped my technical journey.
        </p>
      </div>

      <div className="portfolio-grid reveal">
        {achievementsData.map((achievement, index) => (
          <div key={index} className="service-card box-glow">
            <div className="service-icon">
              {achievement.icon}
            </div>
            <h3 className="service-title">{achievement.title}</h3>
            <p className="service-desc">{achievement.description}</p>
            {achievement.highlight && (
              <p className="service-desc" style={{ color: 'var(--accent-yellow)', marginTop: '0.5rem', fontWeight: 600 }}>
                {achievement.highlight}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
