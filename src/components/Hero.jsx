import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <video
            ref={videoRef}
            className={`h-full w-full object-cover ${isVideoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
            playsInline
          />
          {!isVideoLoaded && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent"></div>
            </div>
          )}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-black text-yellow-500">
              <p>Failed to load video</p>
            </div>
          )}
        </div>
      </div>
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold uppercase tracking-wider text-yellow-500 md:text-7xl">
            S . M . NAIK & ASSOCIATES
          </h1>
          <h2 className="mb-4 text-2xl font-medium text-white md:text-3xl">
            Accuracy. Integrity. Excellence.
          </h2>
          <p className="mb-8 text-lg text-gray-300 md:text-xl">
            Professional land surveying services with over 25 years of industry experience
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="rounded-md bg-yellow-500 px-6 py-3 font-medium text-black transition-colors hover:bg-yellow-600"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="rounded-md border-2 border-yellow-500 px-6 py-3 font-medium text-yellow-500 transition-colors hover:bg-yellow-500 hover:text-black"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
