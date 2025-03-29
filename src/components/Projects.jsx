import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  
  const projects = [
    {
      title: 'Mumbai – Ahmedabad High Speed Rail Project Maharashtra',
      description: 'Cadastral Survey, DGPS survey and other detailed survey in vasai taiuka of palghar District.',
      image: 'src/assets/p1.jpg',
      tags: ['Boundary Survey', 'Topographic Survey','Cadastral Survey']
    },
    {
      title: 'Samruddhi Mahamarg project',
      description: 'Demarcation of ROW of Proposed Road Alignment from Igatpure (Talegaon) To  Kopargaon Dhotre Village.',
      image: 'src/assets/p2.jpg',
      tags: ['Topographic Survey', 'Travese Survey', 'DGPS Survey','Right-of-Way']
    },
    {
      title: 'Mithi River Project',
      description: 'Topography Survey of Mithi River, along with its Surrounding area.',
      image: 'src/assets/p3.jpg',
      tags: ['Topographic Survey', 'DGPS Survey','Inventory Survey']
    },
    {
      title: 'Mumbai University Area',
      description: 'Detailed topographic and boundary survey for Mumbai University area.',
      image: 'src/assets/p4.jpg',
      tags: ['Boundary Survey', 'Topographic Survey','Contour Survey']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="projects" ref={ref} className="py-24 bg-gradient-to-b from-black via-black to-gray-900 overflow-hidden">
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
            Our Projects
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-2xl text-yellow-100/90 font-light max-w-3xl mx-auto"
          >
            Excellence in Land Surveying Projects
          </motion.p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-lg rounded-3xl overflow-hidden shadow-[0_10px_50px_rgba(234,179,8,0.15)] border border-yellow-500/20 hover:border-yellow-400/40 transform transition-all duration-500 hover:translate-y-[-8px] group"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden h-[280px]">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 mix-blend-overlay group-hover:opacity-70 transition-opacity duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 bg-yellow-500/90 text-black font-semibold px-4 py-1 rounded-full text-sm z-20">
                  Featured
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500 mb-4">{project.title}</h3>
                <p className="text-yellow-100/80 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-sm border border-yellow-500/20 hover:bg-yellow-400/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-yellow-500/10">
                  <button className="text-yellow-400 hover:text-yellow-300 font-medium flex items-center transition-colors duration-300">
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-16 text-center">
          <motion.button 
            variants={itemVariants}
            className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-medium rounded-full hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;