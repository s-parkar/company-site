import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/3d-effects.css';
import { heroVideos, getVideoUrl } from '../config/cloudinary';

const Hero = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const loadVideo = async (index) => {
        try {
          setIsVideoLoaded(false);
          setHasError(false);
          const videoUrl = getVideoUrl(heroVideos[index]);
          videoElement.src = videoUrl;
          videoElement.autoplay = true;
          videoElement.loop = false;
          videoElement.muted = true;
          videoElement.playsInline = true;
          await videoElement.load();
        } catch (error) {
          console.error('Video loading error:', error);
          setHasError(true);
        }
      };

      const handleLoadedData = () => {
        setIsVideoLoaded(true);
        videoElement.classList.add('active');
        videoElement.play().catch(error => {
          console.error('Video autoplay failed:', error);
          setHasError(true);
        });
      };

      const handleError = (error) => {
        console.error('Video loading error:', error);
        setHasError(true);
        // Try loading the next video if current one fails
        const nextIndex = (currentVideoIndex + 1) % heroVideos.length;
        setCurrentVideoIndex(nextIndex);
      };

      const handleVideoEnd = () => {
        videoElement.classList.remove('active');
        setTimeout(() => {
          const nextIndex = (currentVideoIndex + 1) % heroVideos.length;
          setCurrentVideoIndex(nextIndex);
        }, 1000); // Wait for fade out transition
      };

      videoElement.addEventListener('loadeddata', handleLoadedData);
      videoElement.addEventListener('error', handleError);
      videoElement.addEventListener('ended', handleVideoEnd);
      
      loadVideo(currentVideoIndex);

      const videoTimer = setInterval(() => {
        handleVideoEnd();
      }, 12000);

      return () => {
        videoElement.removeEventListener('loadeddata', handleLoadedData);
        videoElement.removeEventListener('error', handleError);
        videoElement.removeEventListener('ended', handleVideoEnd);
        clearInterval(videoTimer);
      };
    }
  }, [currentVideoIndex]);

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="video-container">
          <video
            ref={videoRef}
            className={`hero-video ${isVideoLoaded ? 'active' : ''}`}
            playsInline
          />
          {!isVideoLoaded && !hasError && (
            <div className="loading-overlay">
              <div className="loading-spinner"></div>
            </div>
          )}
          {hasError && (
            <div className="error-overlay">
              <p>Failed to load video</p>
            </div>
          )}
        </div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="text-3d">S . M . NAIK & ASSOCIATES</h1>
          <h2>Accuracy. Integrity. Excellence.</h2>
          <p>
            Professional land surveying services with over 25 years of industry experience
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn primary-btn">Our Services</Link>
            <Link to="/contact" className="btn secondary-btn">Get a Quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
