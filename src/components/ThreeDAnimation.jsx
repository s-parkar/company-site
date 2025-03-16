import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// This component creates a 3D animation effect using CSS transforms
// No external 3D library needed, just using CSS 3D transforms
const ThreeDAnimation = ({ children, className }) => {
  const containerRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [perspective, setPerspective] = useState(1000);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      // Calculate rotation based on mouse position
      // Limit rotation to a small range for subtle effect
      const rotX = ((y - height / 2) / height) * 10; // -5 to 5 degrees
      const rotY = ((x - width / 2) / width) * 10; // -5 to 5 degrees
      
      setRotateX(-rotX); // Invert for natural movement
      setRotateY(rotY);
    };

    const handleMouseLeave = () => {
      // Reset to flat position when mouse leaves
      setRotateX(0);
      setRotateY(0);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={`three-d-container ${className || ''}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out',
      }}
    >
      <motion.div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ThreeDAnimation;