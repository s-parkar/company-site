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
              <div className="section-header">
                <h2>Contact Us</h2>
                <p>Get in touch with our team for any inquiries</p>
              </div>
              <div className="contact-content">
                <div className="contact-info">
                  <div className="office-location">
                    <h3>Head Office</h3>
                    <p>16-A/602, Majaswadi,Prathamesh Co-op. Hsg. Society Ltd.</p>
                    <p>New Mhada Colony,Mahakali Caves Cross Road, Poonam Nagar</p>
                    <p>Andheri(E), Mumbai, Maharashtra 400093</p>
                    <p>Email: smnaik45@gmail.com</p>
                    <p>Phone: 9820730619</p>
                  </div>
                  <div className="office-location">
                    <h3>Branch Office</h3>
                    <p>Subhadra Bhawan , Bhawani Shankar Road</p>
                    <p>Dadar (W), Mumbai, Maharashtra 400028</p>
                    <p>Email: smnaik45@gmail.com</p>
                    <p>Phone: 9820730619</p>
                  </div>
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