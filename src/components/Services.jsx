import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Land Surveying',
      description: 'Comprehensive land surveying services for residential and commercial properties',
      icon: '🗺️'
    },
    {
      title: 'Boundary Surveys',
      description: 'Accurate determination of property boundaries and corner locations',
      icon: '📍'
    },
    {
      title: 'Topographic Surveys',
      description: 'Detailed mapping of land features, elevations, and contours',
      icon: '⛰️'
    },
    {
      title: 'Construction Surveys',
      description: 'Precise layout and staking for construction projects',
      icon: '🏗️'
    }
    ,
    {
      title: 'Subdivision Surveys',
      description: 'Dividing land into smaller parcels for development',
      icon: '🗺️'
    }
    ,
    {
      title: 'Utility Surveys',
      description: 'Locating and mapping underground utilities',
      icon: ''
    }
    ,
    {
      title: 'GIS Mapping',
      description: 'Geographic Information Systems for spatial data management and analysis',
      icon: '🗺️'
    }   ,
    {
      title: 'Geotechnical Surveys',
      description: 'Detailed Examination of Grounds physical properties and behavior',
      icon: '🗺️'
    } 
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>We provide comprehensive land surveying solutions tailored to your needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;