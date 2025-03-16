import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants}>About Us</motion.h2>
          <motion.p variants={itemVariants}>Mapping the future with precision since 1995</motion.p>
        </motion.div>
        
        <motion.div 
          className="about-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="about-map-container">
            <motion.div className="map-graphic" variants={itemVariants}>
              <svg width="100%" height="100%" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(44,82,130,0.1)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                
                <path d="M100,100 L300,150 L400,250 L200,300 Z" fill="none" stroke="#4299e1" strokeWidth="2" strokeDasharray="5,5" />
                <circle cx="100" cy="100" r="8" fill="#f6ad55" />
                <circle cx="300" cy="150" r="8" fill="#f6ad55" />
                <circle cx="400" cy="250" r="8" fill="#f6ad55" />
                <circle cx="200" cy="300" r="8" fill="#f6ad55" />
                
                <text x="90" y="85" fill="#2c5282" fontSize="12">Point A</text>
                <text x="310" y="135" fill="#2c5282" fontSize="12">Point B</text>
                <text x="410" y="235" fill="#2c5282" fontSize="12">Point C</text>
                <text x="210" y="285" fill="#2c5282" fontSize="12">Point D</text>
              </svg>
            </motion.div>
          </div>
          
          <div className="about-text">
            <motion.div variants={itemVariants} className="about-card">
              <h3>Company Overview</h3>
              <p>S.M.Naik & ASSOCIATES   is a leading land surveying firm dedicated to providing accurate, reliable, and efficient surveying services to a diverse range of clients. With a team of highly skilled professionals and state-of-the-art technology, we specialize in delivering precise land measurements, boundary determinations, and topographic data essential for construction, development, and land management projects.</p>
            </motion.div>            
            <motion.div variants={itemVariants} className="about-card">
              <h3>Our Coordinates</h3>
              <div className="coordinate-box">
                <div className="coordinate">
                  <span className="coordinate-label">Precision</span>
                  <span className="coordinate-value">19°01'08"N</span>
                </div>
                <div className="coordinate">
                  <span className="coordinate-label">Excellence</span>
                  <span className="coordinate-value">72°50'19"E</span>
                </div>
                <div className="coordinate">
                  <span className="coordinate-label">Innovation</span>
                  <span className="coordinate-value">+26m</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="about-card">
              <h3>Our Equipment</h3>
              <ul className="equipment-list">
                <motion.li variants={itemVariants}>
                  <span className="equipment-icon">📡</span>
                  <span>RTK GPS Systems</span>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <span className="equipment-icon">🔭</span>
                  <span>Robotic Total Stations</span>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <span className="equipment-icon">🛰️</span>
                  <span>Drone Photogrammetry</span>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <span className="equipment-icon">📊</span>
                  <span>3D Laser Scanners</span>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <span className="equipment-icon">💻</span>
                  <span>Advanced GIS Software</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;