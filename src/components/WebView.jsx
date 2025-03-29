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
          <section id="contact" className="py-20 bg-black">
            <div className="container mx-auto px-6 max-w-7xl">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-yellow-400 mb-4">Get in Touch</h2>
                <p className="text-xl text-yellow-100/90 font-light">Let's discuss your project requirements</p>
              </motion.div>
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-1/2 space-y-6">
                  <motion.div 
                    className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-4 mb-6 text-yellow-400">
                      <i className="fas fa-building text-2xl"></i>
                      <h3 className="text-2xl font-semibold">Head Office</h3>
                    </div>
                    <div className="space-y-4 text-yellow-100/80">
                      <p>1/9,NAIK CHAWL, MEGHWADI</p>
                      <p>JOGESHWARI(E), Mumbai, Maharashtra 400060</p>
                      <div className="space-y-2 mt-6">
                        <p className="flex items-center gap-3"><i className="fas fa-envelope"></i> smnaik45@gmail.com</p>
                        <p className="flex items-center gap-3"><i className="fas fa-phone"></i> 9820730619</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-4 mb-6 text-yellow-400">
                      <i className="fas fa-map-marker-alt text-2xl"></i>
                      <h3 className="text-2xl font-semibold">Branch Office</h3>
                    </div>
                    <div className="space-y-4 text-yellow-100/80">
                      <p>Subhadra Bhawan , Bhawani Shankar Road</p>
                      <p>Dadar (W), Mumbai, Maharashtra 400028</p>
                      <div className="space-y-2 mt-6">
                        <p className="flex items-center gap-3"><i className="fas fa-envelope"></i> smnaik45@gmail.com</p>
                        <p className="flex items-center gap-3"><i className="fas fa-phone"></i> 9820730619</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <form
                  className="w-full lg:w-1/2 bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300 space-y-6"
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
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-black/50 border border-yellow-500/20 rounded-lg text-yellow-100 placeholder-yellow-500/70 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" 
                    required 
                  />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-black/50 border border-yellow-500/20 rounded-lg text-yellow-100 placeholder-yellow-500/70 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" 
                    required 
                  />
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Your Phone" 
                    className="w-full px-4 py-3 bg-black/50 border border-yellow-500/20 rounded-lg text-yellow-100 placeholder-yellow-500/70 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" 
                  />
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    className="w-full px-4 py-3 bg-black/50 border border-yellow-500/20 rounded-lg text-yellow-100 placeholder-yellow-500/70 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 min-h-[120px]" 
                    required
                  ></textarea>
                  <button 
                    type="submit" 
                    className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors duration-300"
                  >
                    Send Message
                  </button>
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