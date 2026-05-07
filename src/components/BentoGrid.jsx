import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layers, AppWindow, Figma, Rocket } from 'lucide-react';
import TiltCard from './TiltCard';

const skills = [
  { name: 'Java', icon: <Code2 size={32} />, color: '#f89820', span: '', tooltip: 'Focused on backend logic, OOP, and data structures.' },
  { name: 'SQL', icon: <Database size={32} />, color: '#00758f', span: '', tooltip: 'Designing complex queries & optimized database schemas.' },
  { name: 'Spring Boot', icon: <Rocket size={32} />, color: '#6db33f', span: 'col-span-2', tooltip: 'Building scalable, enterprise-grade REST APIs.' },
  { name: 'React', icon: <AppWindow size={32} />, color: '#61dbfb', span: '', tooltip: 'Crafting high-performance, modern SPAs and UI systems.' },
  { name: 'Figma', icon: <Figma size={32} />, color: '#a259ff', span: '', tooltip: 'Prototyping premium, user-centric interfaces.' },
  { name: 'Docker', icon: <Layers size={32} />, color: '#2496ed', span: '', tooltip: 'Handled CI/CD & Containerization for Drishti Monorepo.' },
];

const BentoGrid = () => {
  return (
    <section className="bento-section" id="skills">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '1.75rem', marginBottom: '3rem', color: 'var(--accent-yellow)' }}
      >
        CORE <span style={{ color: 'white' }}>COMPETENCIES</span>
      </motion.h2>

      <div className="bento-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <TiltCard
              className={`glass-card bento-card tooltip-wrapper ${skill.span}`}
              style={{ height: '150px' }}
            >
              <div className="tooltip">{skill.tooltip}</div>
              <div className="bento-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <span className="bento-label">{skill.name}</span>
              <div
                className="bento-glow"
                style={{ background: `linear-gradient(to top, ${skill.color}, transparent)` }}
              />
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
