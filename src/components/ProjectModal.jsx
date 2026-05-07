import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Eye, Wallet, Code2, Rocket } from 'lucide-react';
import TiltCard from './TiltCard';

// ──── Text Scramble Effect ────
const ScrambleText = ({ text }) => {
  const chars = "!@#$%^&*()_+{}|<>?1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text.split("").map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span className="cyber-glitch">{displayText}</span>;
};

const projects = [
  {
    title: 'DRISHTI',
    subText: 'SMART GLASSES',
    description: 'AI-powered assistive device for visually impaired navigation. Monorepo architecture with real-time object detection.',
    tech: 'FULL-STACK, MONOREPO',
    github: 'https://github.com/Dulathmi',
    icon: <Eye className="pulse-eye" size={48} />,
    color: 'var(--accent-pink)',
  },
  {
    title: 'EXPENSE',
    subText: 'TRACKER PRO',
    description: 'Application for personal finance management using Core Java and OOP principles with CSV persistence.',
    tech: 'JAVA SE, CSV STORAGE',
    github: 'https://github.com/Dulathmi',
    icon: <Wallet size={48} />,
    color: 'var(--accent-yellow)',
  },
  {
    title: 'POACHER',
    subText: 'GUARDIAN',
    description: 'Wildlife protection system with real-time object detection and SOS emergency alerts.',
    tech: 'PYTHON, REST API',
    github: 'https://github.com/Dulathmi',
    icon: <Rocket size={48} />,
    color: 'var(--accent-pink)',
  },
  {
    title: 'SYSTEM',
    subText: 'LOGIC ENGINE',
    description: 'Optimized backend processing engine for high-concurrency data systems.',
    tech: 'SPRING BOOT, DOCKER',
    github: 'https://github.com/Dulathmi',
    icon: <Code2 size={48} />,
    color: 'var(--accent-yellow)',
  },
];

const ProjectModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
        >
          <div onClick={onClose} style={{ position: 'absolute', inset: 0, cursor: 'pointer' }} />

          <motion.div
            initial={{ scale: 0.85, y: 80, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.85, y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 22, stiffness: 120 }}
            className="modal-container"
          >
            <div className="modal-header">
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', letterSpacing: '0.15em' }}>
                PROJECT <span style={{ color: 'var(--accent-pink)' }}>GALLERY</span>
              </h2>
              <button onClick={onClose} className="modal-close">
                <X size={22} />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-grid">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.12, type: 'spring', damping: 18 }}
                  >
                    <TiltCard className="project-card">
                      {/* Icon Area */}
                      <div className="project-icon-area">
                        <div
                          className="project-icon-glow"
                          style={{ background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)` }}
                        />
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          style={{ color: project.color, zIndex: 1, position: 'relative' }}
                        >
                          {project.icon}
                        </motion.div>
                      </div>

                      {/* Title with Scramble */}
                      <div className="project-title">
                        <ScrambleText text={project.title} />
                        <br />
                        <span style={{ color: project.color, fontSize: '1.2rem' }}>{project.subText}</span>
                      </div>

                      <div className="project-tech">{project.tech}</div>
                      <p className="project-desc">{project.description}</p>

                      <div className="project-actions">
                        <button className="project-btn">LEARN MORE</button>
                        <a href={project.github} target="_blank" rel="noreferrer" className="project-github">
                          <Github size={18} />
                        </a>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
