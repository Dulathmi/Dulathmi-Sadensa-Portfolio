import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const FluidMeshBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const blobs = [
    { color: '#FF007F', size: 500, x: '20%', y: '25%', duration: 18, delay: 0 },
    { color: '#00D2FF', size: 450, x: '75%', y: '65%', duration: 22, delay: 2 },
    { color: '#FF007F', size: 380, x: '60%', y: '20%', duration: 25, delay: 4 },
    { color: '#00D2FF', size: 420, x: '30%', y: '75%', duration: 20, delay: 1 },
  ];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: -2,
      overflow: 'hidden',
      pointerEvents: 'none',
    }}>
      {blobs.map((blob, i) => {
        // Calculate repulsion from mouse
        const blobCenterX = (parseFloat(blob.x) / 100) * (typeof window !== 'undefined' ? window.innerWidth : 1920);
        const blobCenterY = (parseFloat(blob.y) / 100) * (typeof window !== 'undefined' ? window.innerHeight : 1080);
        const dx = blobCenterX - mousePos.x;
        const dy = blobCenterY - mousePos.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxRepulse = 80;
        const repulseStrength = dist < 400 ? ((400 - dist) / 400) * maxRepulse : 0;
        const angle = Math.atan2(dy, dx);
        const repulseX = Math.cos(angle) * repulseStrength;
        const repulseY = Math.sin(angle) * repulseStrength;

        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, scale: 1 }}
            animate={{
              x: [repulseX, repulseX + 30, repulseX - 20, repulseX],
              y: [repulseY, repulseY - 25, repulseY + 35, repulseY],
              scale: [1, 1.15, 0.9, 1.05, 1],
            }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: blob.delay,
            }}
            style={{
              position: 'absolute',
              left: blob.x,
              top: blob.y,
              width: blob.size,
              height: blob.size,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${blob.color}26 0%, transparent 70%)`,
              filter: 'blur(80px)',
              transform: 'translate(-50%, -50%)',
            }}
          />
        );
      })}
    </div>
  );
};

export default FluidMeshBackground;
