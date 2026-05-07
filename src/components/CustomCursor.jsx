import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, .interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mousePosition.x - 16, springConfig);
  const cursorY = useSpring(mousePosition.y - 16, springConfig);

  return (
    <>
      {/* Main Glow Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          background: isHovering 
            ? 'radial-gradient(circle, #00D2FF 0%, transparent 70%)' 
            : 'radial-gradient(circle, #FF007F 0%, transparent 70%)',
          scale: isHovering ? 2.5 : 1,
          opacity: 0.8,
          boxShadow: isHovering 
            ? '0 0 20px #00D2FF, 0 0 40px #00D2FF' 
            : '0 0 15px #FF007F, 0 0 30px #FF007F',
        }}
        transition={{ scale: { type: 'spring', ...springConfig } }}
      />
      {/* Subtle Trail */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9998] opacity-30"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          backgroundColor: '#00D2FF',
          filter: 'blur(4px)',
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 150 }}
      />
    </>
  );
};

export default CustomCursor;
