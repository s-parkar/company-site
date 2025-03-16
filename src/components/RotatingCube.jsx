import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/3d-effects.css';

const RotatingCube = ({ faces }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentFace, setCurrentFace] = useState(0);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleClick = () => {
    setCurrentFace((prev) => (prev + 1) % faces.length);
  };

  const containerVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const cubeVariants = {
    rotate: (face) => ({
      rotateY: face * 90,
      transition: { duration: 0.6, ease: 'easeInOut' }
    })
  };

  return (
    <motion.div
      className="cube-container"
      variants={containerVariants}
      whileHover="hover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <motion.div
        className="cube"
        animate="rotate"
        variants={cubeVariants}
        custom={currentFace}
      >
        {faces.map((face, index) => (
          <div
            key={index}
            className={`cube-face cube-face-${index + 1}`}
            style={{
              transform: `rotateY(${index * 90}deg) translateZ(150px)`,
              opacity: isHovered ? 0.9 : 1
            }}
          >
            {face}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default RotatingCube;