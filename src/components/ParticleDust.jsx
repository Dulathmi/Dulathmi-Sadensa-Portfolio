import React, { useEffect, useRef } from 'react';

const ParticleDust = () => {
  const canvasRef = useRef(null);
  const scrollSpeedRef = useRef(0);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Track scroll velocity
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      scrollSpeedRef.current = Math.abs(currentScroll - lastScrollRef.current) * 0.3;
      lastScrollRef.current = currentScroll;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    class Dust {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.6
          ? `rgba(255, 0, 127, ${this.opacity})`
          : Math.random() > 0.3
            ? `rgba(0, 210, 255, ${this.opacity})`
            : `rgba(255, 255, 255, ${this.opacity})`;
      }
      update() {
        // Normal drift
        this.x += this.speedX;
        this.y += this.speedY;

        // Scroll-driven upward acceleration (anti-gravity)
        const scrollBoost = scrollSpeedRef.current;
        if (scrollBoost > 0.5) {
          this.y -= scrollBoost * 0.5;
          this.opacity = Math.min(0.8, this.opacity + 0.01);
        }

        // Dampen scroll speed
        scrollSpeedRef.current *= 0.95;

        // Wrap around
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < -10) this.y = canvas.height + 10;
        if (this.y > canvas.height + 10) this.y = -10;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Spawn particles
    const count = Math.floor((canvas.width * canvas.height) / 8000);
    for (let i = 0; i < count; i++) {
      particles.push(new Dust());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
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
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleDust;
