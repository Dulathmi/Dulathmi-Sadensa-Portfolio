import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TiltCard = ({ children, className = '', style = {} }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTilt({ rotateX, rotateY });
    setSpotlight({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.12,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setSpotlight({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={className}
      style={{
        ...style,
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        scale: tilt.rotateX !== 0 || tilt.rotateY !== 0 ? 1.05 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          zIndex: 2,
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,${spotlight.opacity}), transparent 60%)`,
          transition: 'opacity 0.3s ease',
        }}
      />
      {children}
    </motion.div>
  );
};

export default TiltCard;
