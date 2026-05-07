import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles = [];
    const particleCount = Math.min(width > 768 ? 150 : 80, 200);
    const connectionRadius = 120; // Distance to connect particles
    const mouseAttractRadius = 250; // Radius for mouse attraction

    // User's mouse position
    let mouse = {
      x: null,
      y: null
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    window.addEventListener('resize', handleResize);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Energetic speed
        this.vx = (Math.random() - 0.5) * 2.5;
        this.vy = (Math.random() - 0.5) * 2.5;
        this.radius = Math.random() * 2 + 1;
        
        // Neon yellow mix
        const colors = ['#E5FF00', '#FFEA00', '#FFFFFF', '#FFFF66'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.6 + 0.3;
      }

      update() {
        // Move particle
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Mouse attraction
        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseAttractRadius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouseAttractRadius - distance) / mouseAttractRadius;
            
            this.vx += forceDirectionX * force * 0.2;
            this.vy += forceDirectionY * force * 0.2;
            
            const maxSpeed = 5;
            const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if(currentSpeed > maxSpeed) {
              this.vx = (this.vx / currentSpeed) * maxSpeed;
              this.vy = (this.vy / currentSpeed) * maxSpeed;
            }
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        
        // Dynamic opacity based on speed, max 0.15 overall opacity
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const dynamicAlpha = Math.min(this.alpha + (speed * 0.1), 1);
        
        ctx.globalAlpha = dynamicAlpha * 0.15;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw all particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionRadius) {
            ctx.beginPath();
            const opacity = 1 - distance / connectionRadius;
            
            ctx.strokeStyle = `rgba(229, 255, 0, ${opacity * 0.15})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', background: 'radial-gradient(ellipse at bottom, #05120a 0%, #080808 100%)' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
};

export default AnimatedBackground;
