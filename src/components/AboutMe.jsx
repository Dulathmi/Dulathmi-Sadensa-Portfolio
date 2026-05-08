import React from 'react';

const AboutMe = () => {
  const tags = ['Java', 'React', 'Next.js', 'Supabase', 'PostgreSQL', 'Docker', 'Figma', 'REST'];

  return (
    <section className="section-container bg-darker" id="about">
      <div className="hero-grid reveal" style={{ gap: '6rem', alignItems: 'flex-start' }}>
        
        {/* Left Column */}
        <div>
          <div className="hero-subtitle text-yellow">■ WHY HIRE ME</div>
          <h2 style={{ fontSize: '4rem', fontWeight: '800', lineHeight: '1.1', marginTop: '1rem', letterSpacing: '-1px' }}>
            Bridging <br/>
            <span className="text-yellow text-glow">backend<br/>logic</span> with <br/>
            intuitive <br/>
            design.
          </h2>
        </div>

        {/* Right Column */}
        <div style={{ paddingTop: '2rem' }}>
          <p className="hero-text" style={{ fontSize: '1.1rem', color: '#e0e0e0', marginBottom: '2rem' }}>
            I architect robust backend systems and intuitive frontends, specializing in transforming complex logic into scalable, production-ready code.
          </p>
          <p className="hero-text" style={{ fontSize: '1.1rem', color: '#a3a3a3' }}>
            From optimizing RESTful APIs to deploying AI-driven IoT solutions like Drishti, I build with a focus on performance, security, and user experience.
          </p>

          <div className="pill-tags">
            {tags.map((tag, index) => (
              <span key={index} className="pill-tag">{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
