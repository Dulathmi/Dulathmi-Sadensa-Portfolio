import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to Dulathmi OS v1.0.0' },
    { type: 'output', content: "Type 'help' to see available commands." },
  ]);
  const terminalRef = useRef(null);

  const commands = {
    help: 'Available commands: about, skills, projects, contact, clear',
    about: 'Dulathmi Sadesna — CS Undergraduate @ IIT/Westminster. Full-stack dev specializing in Java, Python, and React.',
    skills: 'Technical: Java (OOP), Python, SQL, Spring Boot, React, Docker, Figma.',
    projects: 'Featured: Drishti (AI Smart Glasses), Poacher Guard, Expense Tracker.',
    contact: 'Email: sadesnadulathmii@gmail.com | LinkedIn: linkedin.com/in/Dulathmi-Hettige | GitHub: github.com/Dulathmi',
    clear: 'clear',
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.toLowerCase().trim();
      const newHistory = [...history, { type: 'input', content: input }];

      if (cmd === 'clear') {
        setHistory([]);
      } else if (commands[cmd]) {
        newHistory.push({ type: 'output', content: commands[cmd] });
        setHistory(newHistory);
      } else if (cmd !== '') {
        newHistory.push({ type: 'output', content: `Command not found: ${cmd}. Type 'help' for options.` });
        setHistory(newHistory);
      } else {
        setHistory(newHistory);
      }
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section className="terminal-section" id="terminal">
      <div style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>ADVANCED INTERFACE</h2>
        <p style={{ color: 'var(--text-dim)', marginTop: '0.5rem', fontWeight: 300 }}>Interact with the core system below.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card terminal-wrapper"
      >
        {/* Header */}
        <div className="terminal-header">
          <div className="terminal-dot" style={{ background: '#ff5f56' }} />
          <div className="terminal-dot" style={{ background: '#ffbd2e' }} />
          <div className="terminal-dot" style={{ background: '#27c93f' }} />
          <span style={{ 
            margin: '0 auto', 
            fontSize: '0.65rem', 
            color: 'var(--text-dim)', 
            fontFamily: 'var(--font-heading)',
            letterSpacing: '0.1em'
          }}>
            dulathmi@portfolio: ~
          </span>
        </div>

        {/* Body */}
        <div ref={terminalRef} className="terminal-body">
          {history.map((entry, i) => (
            <div key={i} style={{ marginBottom: '0.5rem' }}>
              {entry.type === 'input' ? (
                <span style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-pink)' }}>➜</span>
                  <span style={{ color: 'white' }}>~ {entry.content}</span>
                </span>
              ) : (
                <div style={{ opacity: 0.8, lineHeight: 1.6, wordBreak: 'break-word' }}>{entry.content}</div>
              )}
            </div>
          ))}

          <div className="terminal-input-line">
            <span style={{ color: 'var(--accent-pink)' }}>➜</span>
            <span style={{ color: 'white' }}>~</span>
            <input
              type="text"
              autoFocus
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              placeholder="type a command..."
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Terminal;
