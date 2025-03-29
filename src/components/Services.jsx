import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const services = [
    {
      title: 'Land Surveying',
      description: 'Comprehensive land surveying services for residential and commercial properties',
      icon: '🗺️',
      bgColor: 'from-amber-600/10 to-yellow-500/10',
      iconBg: 'bg-amber-500/20'
    },
    {
      title: 'Boundary Surveys',
      description: 'Accurate determination of property boundaries and corner locations',
      icon: '📍',
      bgColor: 'from-yellow-600/10 to-amber-500/10',
      iconBg: 'bg-yellow-500/20'
    },
    {
      title: 'Topographic Surveys',
      description: 'Detailed mapping of land features, elevations, and contours',
      icon: '⛰️',
      bgColor: 'from-amber-600/10 to-yellow-500/10',
      iconBg: 'bg-amber-500/20'
    },
    {
      title: 'Construction Surveys',
      description: 'Precise layout and staking for construction projects',
      icon: '🏗️',
      bgColor: 'from-yellow-600/10 to-amber-500/10',
      iconBg: 'bg-yellow-500/20'
    },
    {
      title: 'Subdivision Surveys',
      description: 'Dividing land into smaller parcels for development',
      icon: '📐',
      bgColor: 'from-amber-600/10 to-yellow-500/10',
      iconBg: 'bg-amber-500/20'
    },
    {
      title: 'Utility Surveys',
      description: 'Locating and mapping underground utilities',
      icon: '🔌',
      bgColor: 'from-yellow-600/10 to-amber-500/10',
      iconBg: 'bg-yellow-500/20'
    },
    {
      title: 'GIS Mapping',
      description: 'Geographic Information Systems for spatial data management and analysis',
      icon: '🌐',
      bgColor: 'from-amber-600/10 to-yellow-500/10',
      iconBg: 'bg-amber-500/20'
    },
    {
      title: 'Geotechnical Surveys',
      description: 'Detailed examination of ground physical properties and behavior',
      icon: '🧪',
      bgColor: 'from-yellow-600/10 to-amber-500/10',
      iconBg: 'bg-yellow-500/20'
    } 
  ];

  return (
    <section ref={ref} id="services" className="py-24 bg-gradient-to-b from-black via-gray-900/90 to-black overflow-hidden">
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
            Our Services
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-2xl text-yellow-100/90 font-light max-w-3xl mx-auto"
          >
            We provide comprehensive land surveying solutions tailored to your needs
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-gradient-to-br ${service.bgColor} backdrop-blur-xl rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-yellow-500/10 hover:border-yellow-400/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(234,179,8,0.2)] group overflow-hidden relative`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/5 to-amber-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className={`w-16 h-16 ${service.iconBg} rounded-2xl mb-6 flex items-center justify-center text-4xl group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 mb-4 group-hover:from-yellow-200 group-hover:to-amber-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-yellow-100/80 leading-relaxed">{service.description}</p>
              <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;