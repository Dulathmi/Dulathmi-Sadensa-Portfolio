import React, { useEffect, useRef } from 'react';

const CosmicBackground = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const scrollY = useRef(0);
  const animIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ── Particle class ──
    class Particle {
      constructor() {
        this.reset(true);
      }
      reset(init = false) {
        this.baseX = Math.random() * canvas.width;
        this.baseY = init
          ? Math.random() * canvas.height
          : (Math.random() < 0.5 ? -10 : canvas.height + 10);
        this.x = this.baseX;
        this.y = this.baseY;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.speedY = (Math.random() - 0.5) * 0.25;
        this.parallaxFactor = Math.random() * 0.3 + 0.05; // 0.05–0.35 (slower = deeper)
        const roll = Math.random();
        this.color = roll < 0.4
          ? `rgba(255, 0, 127, ${Math.random() * 0.5 + 0.2})`
          : roll < 0.7
            ? `rgba(0, 210, 255, ${Math.random() * 0.5 + 0.2})`
            : `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`;
        this.glow = roll < 0.4 ? '#FF007F' : roll < 0.7 ? '#00D2FF' : '#ffffff';
      }

      update() {
        // Natural drift
        this.baseX += this.speedX;
        this.baseY += this.speedY;

        // Parallax from scroll (background layers move less)
        const parallaxY = scrollY.current * this.parallaxFactor;

        // Mouse attraction — nearest particles follow like a magnetic field
        const dx = mouse.current.x - this.baseX;
        const dy = mouse.current.y - (this.baseY - parallaxY);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const attractRadius = 200;
        if (dist < attractRadius && dist > 0) {
          const force = ((attractRadius - dist) / attractRadius) * 0.4;
          this.baseX += (dx / dist) * force;
          this.baseY += (dy / dist) * force;
        }

        // Apply parallax position
        this.x = this.baseX;
        this.y = this.baseY - parallaxY;

        // Wrap around edges
        if (this.baseX < -10) this.baseX = canvas.width + 10;
        if (this.baseX > canvas.width + 10) this.baseX = -10;
        if (this.baseY < -100) this.baseY = canvas.height + 100;
        if (this.baseY > canvas.height + 100) this.baseY = -100;
      }

      draw() {
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.glow;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Spawn particles
    const PARTICLE_COUNT = 130;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

    const MAX_CONNECTION_DIST = 100;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & draw particles
      for (const p of particles) {
        p.update();
        p.draw();
      }

      // Draw constellation lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_CONNECTION_DIST) {
            const alpha = (1 - dist / MAX_CONNECTION_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 210, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animIdRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default CosmicBackground;
