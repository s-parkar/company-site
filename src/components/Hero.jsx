import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/3d-effects.css';
import ThreeDAnimation from './ThreeDAnimation';

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    '/assets/vid/survey_video1.mp4',
    '/assets/vid/survey_video2.mp4',
    '/assets/vid/survey_video3.mp4'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="video-container">
          {videos.map((video, index) => (
            <motion.video
              key={index}
              src={video}
              className={`hero-video ${currentVideo === index ? 'active' : ''}`}
              autoPlay
              muted
              loop
              playsInline
              initial={{ opacity: 0 }}
              animate={{ opacity: currentVideo === index ? 1 : 0 }}
              transition={{ duration: 1.5 }}
            >
              Your browser does not support the video tag.
            </motion.video>
          ))}
        </div>
      </div>
      <div className="container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="text-3d">
            S . M . NAIK & ASSOCIATES
          </motion.h1>
          <motion.h2 variants={itemVariants}>
            Accuracy. Integrity. Excellence.
          </motion.h2>
          <motion.p variants={itemVariants}>
            Professional land surveying services with over 25 years of industry experience
          </motion.p>
          <motion.div className="hero-buttons" variants={itemVariants}>
            <Link to="/services" className="btn primary-btn">
              Our Services
            </Link>
            <Link to="/contact" className="btn secondary-btn">
              Get a Quote
            </Link>
          </motion.div>
          <motion.div variants={itemVariants} className="hero-showcase">
            {/* <RotatingCube
              faces={[
                <div className="showcase-content">
                  <h3>Land Development</h3>
                  <p>Expert surveying for real estate projects</p>
                </div>,
                <div className="showcase-content">
                  <h3>Topographic Surveys</h3>
                  <p>Detailed terrain mapping and analysis</p>
                </div>,
                <div className="showcase-content">
                  <h3>Property Surveys</h3>
                  <p>Accurate boundary determination</p>
                </div>,
                <div className="showcase-content">
                  <h3>Construction Surveys</h3>
                  <p>Precise layout and monitoring</p>
                </div>
              ]}
            /> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;