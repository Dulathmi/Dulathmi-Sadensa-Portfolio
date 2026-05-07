import React, { useEffect, useState } from 'react';

const coreSkills = [
  { name: 'Java (OOP)', level: 90 },
  { name: 'Full-Stack Development (React/Next.js)', level: 85 },
  { name: 'Database Management (SQL/Supabase)', level: 88 },
  { name: 'UI/UX (Figma)', level: 80 },
];

const categorySkills = [
  { category: 'Frontend', skills: ['React', 'Next.js 14'] },
  { category: 'Backend', skills: ['Java', 'Supabase', 'PostgreSQL'] },
  { category: 'Design', skills: ['Figma'] },
];

const CircularProgress = ({ value, label }) => {
  const [offset, setOffset] = useState(100);
  const radius = 16;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const timer = setTimeout(() => {
      const progressOffset = ((100 - value) / 100) * circumference;
      setOffset(progressOffset);
    }, 500);
    return () => clearTimeout(timer);
  }, [value, circumference]);

  return (
    <div className="circular-progress-item">
      <div style={{ position: 'relative', width: '150px', height: '150px', borderRadius: '50%' }} className="box-glow">
        <svg viewBox="0 0 36 36" className="circular-chart" style={{ width: '100%', height: '100%' }}>
          <path className="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path className="circle"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset}
            stroke="var(--accent-yellow)"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="circular-text" textAnchor="middle">{value}%</text>
        </svg>
      </div>
      <div className="circular-label">{label}</div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="section-container" id="skills">
      <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="hero-subtitle text-yellow">■ TECHNICAL METRICS</div>
        <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>My core skills</h2>
      </div>

      <div className="circular-progress-container reveal" style={{ justifyContent: 'center' }}>
        {coreSkills.map((skill, index) => (
          <CircularProgress key={index} value={skill.level} label={skill.name} />
        ))}
      </div>

      <div className="reveal" style={{ marginTop: '5rem', maxWidth: '800px', margin: '5rem auto 0' }}>
        <div className="hero-subtitle text-yellow" style={{ marginBottom: '2rem', textAlign: 'center' }}>■ TECH STACK</div>
        <div className="hero-grid" style={{ gap: '2rem', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {categorySkills.map((cat, index) => (
            <div key={index} className="service-card" style={{ padding: '2rem' }}>
              <h3 className="service-title" style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#fff' }}>{cat.category}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                {cat.skills.map((skill, i) => (
                  <div key={i} style={{ color: 'var(--text-dim)', fontWeight: '500' }}>{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
