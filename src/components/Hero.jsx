import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/3d-effects.css';

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  // ✅ Use Streamable Embed URLs
  const videos = [
    'https://streamable.com/e/n3mkm3',
    'https://streamable.com/e/bdh3ju',
    'https://streamable.com/e/YOUR_VIDEO_ID'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="video-container">
          {videos.map((video, index) => (
            <motion.iframe
              key={index}
              src={`${video}?autoplay=1`} // Adding autoplay query parameter
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className={`hero-video ${currentVideo === index ? 'active' : ''}`}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
                overflow: 'hidden',
                opacity: currentVideo === index ? 1 : 0,
                transition: 'opacity 1.5s'
              }}
            />
          ))}
        </div>
      </div>
      <div className="container">
        <motion.div className="hero-content">
          <motion.h1 className="text-3d">S . M . NAIK & ASSOCIATES</motion.h1>
          <motion.h2>Accuracy. Integrity. Excellence.</motion.h2>
          <motion.p>
            Professional land surveying services with over 25 years of industry experience
          </motion.p>
          <motion.div className="hero-buttons">
            <Link to="/services" className="btn primary-btn">Our Services</Link>
            <Link to="/contact" className="btn secondary-btn">Get a Quote</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
