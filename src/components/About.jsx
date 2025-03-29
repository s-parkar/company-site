import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  
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
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" ref={ref} className="py-24 bg-gradient-to-b from-black via-black to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500"
          >
            About Us
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-2xl text-yellow-100/90 font-light max-w-3xl mx-auto"
          >
            Mapping the future with precision since 1995
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col gap-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            variants={imageVariants}
            className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-2xl border border-yellow-500/20 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 mix-blend-overlay group-hover:opacity-70 transition-opacity duration-500"></div>
            <img 
              src="src\assets\n.jpg" 
              alt="Surveying Equipment" 
              className="w-full h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              {/* <h3 className="text-3xl font-bold text-yellow-400 mb-2">Precision Surveying</h3>
              <p className="text-yellow-100/90">State-of-the-art equipment for unmatched accuracy</p> */}
            </div>
          </motion.div>
          
          <div className="space-y-10">
            <motion.div 
              variants={itemVariants} 
              className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-lg rounded-3xl p-10 shadow-[0_10px_50px_rgba(234,179,8,0.15)] border border-yellow-500/20 hover:border-yellow-400/40 transform transition-all duration-500 hover:translate-y-[-8px]"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mr-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500">Company Overview</h3>
              </div>
              <p className="text-yellow-100/80 leading-relaxed text-lg">S.M.Naik & ASSOCIATES is a leading land surveying firm dedicated to providing accurate, reliable, and efficient surveying services to a diverse range of clients. With a team of highly skilled professionals and state-of-the-art technology, we specialize in delivering precise land measurements, boundary determinations, and topographic data essential for construction, development, and land management projects.</p>
            </motion.div>            
            <motion.div 
              variants={itemVariants} 
              className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-lg rounded-3xl p-10 shadow-[0_10px_50px_rgba(234,179,8,0.15)] border border-yellow-500/20 hover:border-yellow-400/40 transform transition-all duration-500 hover:translate-y-[-8px]"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mr-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500">Our Coordinates</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-black/80 to-gray-800/50 p-8 rounded-2xl text-center transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] border border-yellow-500/10 hover:border-yellow-400/30 group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <span className="block text-yellow-100/90 text-lg mb-3 font-medium">Precision</span>
                  <span className="block text-yellow-400 text-2xl font-bold group-hover:text-yellow-300 transition-colors duration-300">19°01'08"N</span>
                </div>
                <div className="bg-gradient-to-br from-black/80 to-gray-800/50 p-8 rounded-2xl text-center transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] border border-yellow-500/10 hover:border-yellow-400/30 group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <span className="block text-yellow-100/90 text-lg mb-3 font-medium">Excellence</span>
                  <span className="block text-yellow-400 text-2xl font-bold group-hover:text-yellow-300 transition-colors duration-300">72°50'19"E</span>
                </div>
                <div className="bg-gradient-to-br from-black/80 to-gray-800/50 p-8 rounded-2xl text-center transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] border border-yellow-500/10 hover:border-yellow-400/30 group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-300">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <span className="block text-yellow-100/90 text-lg mb-3 font-medium">Innovation</span>
                  <span className="block text-yellow-400 text-2xl font-bold group-hover:text-yellow-300 transition-colors duration-300">+26m</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-lg rounded-3xl p-10 shadow-[0_10px_50px_rgba(234,179,8,0.15)] border border-yellow-500/20 hover:border-yellow-400/40 transform transition-all duration-500 hover:translate-y-[-8px]"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mr-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500">Our Equipment</h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.li 
                  variants={itemVariants} 
                  className="flex items-center p-6 rounded-2xl transform transition-all duration-500 hover:scale-105 bg-gradient-to-br from-black/80 to-gray-800/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] border border-yellow-500/10 hover:border-yellow-400/30 group"
                >
                  <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center mr-4 group-hover:bg-yellow-400/20 transition-colors duration-300">
                    <span className="text-3xl">📡</span>
                  </div>
                  <div>
                    <span className="text-yellow-400 text-lg font-medium block group-hover:text-yellow-300 transition-colors duration-300">RTK GPS Systems</span>
                    <span className="text-yellow-100/60 text-sm">Centimeter-level accuracy</span>
                  </div>
                </motion.li>
                <motion.li 
                  variants={itemVariants} 
                  className="flex items-center p-6 rounded-2xl transform transition-all duration-500 hover:scale-105 bg-gradient-to-br from-black/80 to-gray-800/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] border border-yellow-500/10 hover:border-yellow-400/30 group"
                >
                  <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center mr-4 group-hover:bg-yellow-400/20 transition-colors duration-300">
                    <span className="text-3xl">🔭</span>
                  </div>
                  <div>
                    <span className="text-yellow-400 text-lg font-medium block group-hover:text-yellow-300 transition-colors duration-300">Robotic Total Stations</span>
                    <span className="text-yellow-100/60 text-sm">Automated precision measurement</span>
                  </div>
                </motion.li>
                <motion.li 
                  variants={itemVariants} 
                  className="flex items-center p-6 rounded-2xl transform transition-all duration-500 hover:scale-105 bg-gradient-to-br from-black/80 to-gray-800/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] border border-yellow-500/10 hover:border-yellow-400/30 group"
                >
                  <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center mr-4 group-hover:bg-yellow-400/20 transition-colors duration-300">
                    <span className="text-3xl">🛰️</span>
                  </div>
                  <div>
                    <span className="text-yellow-400 text-lg font-medium block group-hover:text-yellow-300 transition-colors duration-300">Drone Photogrammetry</span>
                    <span className="text-yellow-100/60 text-sm">Aerial mapping solutions</span>
                  </div>
                </motion.li>
                <motion.li 
                  variants={itemVariants} 
                  className="flex items-center p-6 rounded-2xl transform transition-all duration-500 hover:scale-105 bg-gradient-to-br from-black/80 to-gray-800/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] border border-yellow-500/10 hover:border-yellow-400/30 group"
                >
                  <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center mr-4 group-hover:bg-yellow-400/20 transition-colors duration-300">
                    <span className="text-3xl">📊</span>
                  </div>
                  <div>
                    <span className="text-yellow-400 text-lg font-medium block group-hover:text-yellow-300 transition-colors duration-300">3D Laser Scanners</span>
                    <span className="text-yellow-100/60 text-sm">High-definition point clouds</span>
                  </div>
                </motion.li>
                <motion.li 
                  variants={itemVariants} 
                  className="flex items-center p-6 rounded-2xl transform transition-all duration-500 hover:scale-105 bg-gradient-to-br from-black/80 to-gray-800/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] border border-yellow-500/10 hover:border-yellow-400/30 group"
                >
                  <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center mr-4 group-hover:bg-yellow-400/20 transition-colors duration-300">
                    <span className="text-3xl">💻</span>
                  </div>
                  <div>
                    <span className="text-yellow-400 text-lg font-medium block group-hover:text-yellow-300 transition-colors duration-300">Advanced GIS Software</span>
                    <span className="text-yellow-100/60 text-sm">Spatial data analysis</span>
                  </div>
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