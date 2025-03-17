import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Mumbai – Ahmedabad High Speed Rail Project Maharashtra',
      description: 'Cadastral Survey, DGPS survey and other detailed survey in vasai taiuka of palghar District.',
      image: '/assets/img/project1.svg',
      tags: ['Boundary Survey', 'Topographic Survey','Cadastral Survey']
    },
    {
      title: 'Samruddhi Mahamarg project',
      description: 'Demarcation of ROW of Proposed Road Alignment from Igatpure (Talegaon) To  Kopargaon Dhotre Village.',
      image: '/assets/img/p2.jpg',
      tags: ['Topographic Survey', 'Travese Survey', 'DGPS Survey','Right-of-Way']
    },
    {
      title: 'Mithi River Project',
      description: 'Topography Survey of Mithi River, along with its Surrounding area.',
      image: '/assets/img/project4.svg',
      tags: ['Topographic Survey', 'DGPS Survey','Inventory Survey']
    },
    {
      title: 'Mumbai University Area',
      description: 'Detailed topographic and boundary survey for Mumbai University area.',
      image: '/assets/img/project2.svg',
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
    <section className="projects-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Our Projects
        </motion.h2>
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style jsx>{`
        .projects-section {
          padding: 4rem 0;
          background-color: #f8f9fa;
        }
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
          color: #333;
          font-size: 2.5rem;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 0 1rem;
        }
        .project-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
        }
        .project-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .project-content {
          padding: 1.5rem;
        }
        .project-content h3 {
          margin: 0 0 1rem;
          color: #333;
          font-size: 1.25rem;
        }
        .project-content p {
          margin: 0 0 1rem;
          color: #666;
          line-height: 1.6;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tag {
          background: #e9ecef;
          color: #495057;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.875rem;
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;