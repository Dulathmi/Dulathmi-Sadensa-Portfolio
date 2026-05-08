import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Cpu, Smartphone, Boxes } from 'lucide-react';

const ProjectShowcase = () => {
  return (
    <section className="py-24 px-6 bg-[#080808]/50" id="projects">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Project Screenshot in Terminal */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative group"
        >
          {/* Mac-style Terminal Container */}
          <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-accent-pink/30 bg-black/80 backdrop-blur-xl group-hover:shadow-[0_0_40px_rgba(255,0,127,0.3)] transition-all duration-500">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="mx-auto text-[10px] text-text-dim/50 font-mono tracking-widest uppercase">
                drishti-monorepo — zsh
              </div>
            </div>
            
            {/* Project Image */}
            <div className="relative group overflow-hidden bg-center bg-cover min-h-[300px] flex items-center justify-center">
              <img 
                src="/images/Drishti project ss.png" 
                alt="Drishti Project" 
                className="w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-accent-pink/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 lg:-right-10 glass-card px-6 py-4 border-accent-yellow/50 flex items-center gap-4 bg-black animate-bounce shadow-lg">
             <div className="p-2 bg-accent-yellow/20 rounded-lg text-accent-yellow">
                <Boxes size={24} />
             </div>
             <div>
                <p className="text-[10px] text-accent-yellow uppercase font-bold tracking-widest">In Development</p>
                <p className="text-sm font-heading">v1.2.0-Alpha</p>
             </div>
          </div>
        </motion.div>

        {/* Right: Project Features */}
        <div className="w-full lg:w-1/2 text-left">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent-pink font-heading text-sm sm:text-lg mb-2"
          >
            Featured Project
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-heading mb-8"
          >
            Drishti <span className="text-white">Smart Glasses</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-dim text-lg mb-8 leading-relaxed max-w-xl"
          >
            An AI-powered assistive navigation system designed for the visually impaired. Built with a robust monorepo architecture, integrating real-time object recognition and server-side processing.
          </motion.p>

          <div className="space-y-6 mb-12">
            {[
              { icon: <Smartphone />, text: 'Flutter Mobile App for User Interface' },
              { icon: <Cpu />, text: 'Python/Flask Backend with REST API' },
              { icon: <Boxes />, text: 'Dockerized CI/CD for seamless deployment' },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="text-accent-yellow group-hover:scale-125 transition-transform">
                  {feature.icon}
                </div>
                <span className="text-white group-hover:text-accent-yellow transition-colors">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="https://github.com/BigH3ro6/drishti-final" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-3 glass-card border-accent-yellow bg-accent-yellow/10 text-accent-yellow font-heading text-sm hover:bg-accent-yellow hover:text-white transition-all duration-300"
            >
              <Github size={18} /> View Source
            </a>
            <button className="flex items-center gap-2 px-8 py-3 glass-card border-white/20 text-white font-heading text-sm hover:border-accent-pink hover:text-accent-pink transition-all duration-300">
              <ExternalLink size={18} /> Live Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
