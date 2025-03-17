import React, { useState } from 'react';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import { motion } from 'framer-motion';


const WebView = ({ url, title }) => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const renderContent = () => {
    switch (url) {
      case '/about':
        return <About />;
      case '/services':
        return <Services />;
      case '/projects':
        return <Projects />;
      case '/contact':
        return (
          <section id="contact" className="contact-section">
            <div className="container">
              <motion.div 
                className="section-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2>Get in Touch</h2>
                <p>Let's discuss your project requirements</p>
              </motion.div>
              <div className="contact-content">
                <div className="contact-info">
                  <motion.div 
                    className="office-location"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="location-icon">
                      <i className="fas fa-building"></i>
                    </div>
                    <h3>Head Office</h3>
                    <p>1/9,NAIK CHAWL, MEGHWADI </p>
                    <p>JOGESHWARI(E), Mumbai, Maharashtra 400060</p>
                    <div className="contact-details">
                      <p><i className="fas fa-envelope"></i> smnaik45@gmail.com</p>
                      <p><i className="fas fa-phone"></i> 9820730619</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="office-location"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="location-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h3>Branch Office</h3>
                    <p>Subhadra Bhawan , Bhawani Shankar Road</p>
                    <p>Dadar (W), Mumbai, Maharashtra 400028</p>
                    <div className="contact-details">
                      <p><i className="fas fa-envelope"></i> smnaik45@gmail.com</p>
                      <p><i className="fas fa-phone"></i> 9820730619</p>
                    </div>
                  </motion.div>
                </div>
                
                <form
                  className="contact-form"
                  action="https://formspree.io/f/myzezjdy"
                  method="POST"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target;
                    const submitButton = form.querySelector('button[type="submit"]');
                    submitButton.disabled = true;
                    submitButton.textContent = 'Sending...';

                    const formData = {
                      name: form.querySelector('input[name="name"]').value,
                      email: form.querySelector('input[name="email"]').value,
                      phone: form.querySelector('input[name="phone"]').value,
                      message: form.querySelector('textarea[name="message"]').value
                    };

                    fetch(form.action, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(formData)
                    })
                    .then(response => {
                      if (response.ok) {
                        submitButton.textContent = 'Message Sent!';
                        form.reset();
                      } else {
                        throw new Error('Failed to send message');
                      }
                    })
                    .catch(error => {
                      submitButton.textContent = 'Error Sending';
                      console.error('Error:', error);
                    })
                    .finally(() => {
                      setTimeout(() => {
                        submitButton.disabled = false;
                        submitButton.textContent = 'Send Message';
                      }, 3000);
                    });
                  }}
                >
                  <input type="text" name="name" placeholder="Your Name" required />
                  <input type="email" name="email" placeholder="Your Email" required />
                  <input type="tel" name="phone" placeholder="Your Phone" />
                  <textarea name="message" placeholder="Your Message" required></textarea>
                  <button type="submit" className="btn primary-btn">Send Message</button>
                </form>
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="webview-container"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="webview-content">
        {renderContent()}
      </div>
    </motion.div>
  );
};

export default WebView;