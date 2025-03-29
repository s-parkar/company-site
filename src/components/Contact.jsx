import React from 'react';
import { useForm } from '@formspree/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  
  const [state, handleSubmit] = useForm("movenndz");
  
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
  
  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-gradient-to-b from-black via-black to-gray-900 overflow-hidden">
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
            Get in Touch
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-2xl text-yellow-100/90 font-light max-w-3xl mx-auto"
          >
            Let's discuss your project requirements
          </motion.p>
        </motion.div>
        <motion.div 
          className="flex flex-col lg:flex-row gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.div 
              className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-lg rounded-3xl p-10 shadow-[0_10px_50px_rgba(234,179,8,0.15)] border border-yellow-500/20 hover:border-yellow-400/40 transform transition-all duration-500 hover:translate-y-[-8px] group"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mr-4 group-hover:bg-yellow-400/30 transition-colors duration-300">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500">Head Office</h3>
              </div>
              <div className="space-y-4 text-yellow-100/80 pl-16">
                <p className="text-lg">1/9, NAIK CHAWL, MEGHWADI</p>
                <p className="text-lg">JOGESHWARI(E), Mumbai, Maharashtra 400060</p>
                <div className="space-y-4 mt-6 border-t border-yellow-500/10 pt-6">
                  <div className="flex items-center gap-3 group/item hover:text-yellow-300 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover/item:bg-yellow-400/20 transition-colors duration-300">
                      <span className="text-xl">✉️</span>
                    </div>
                    <span>smnaik45@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 group/item hover:text-yellow-300 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover/item:bg-yellow-400/20 transition-colors duration-300">
                      <span className="text-xl">📞</span>
                    </div>
                    <span>9820730619</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-lg rounded-3xl p-10 shadow-[0_10px_50px_rgba(234,179,8,0.15)] border border-yellow-500/20 hover:border-yellow-400/40 transform transition-all duration-500 hover:translate-y-[-8px] group"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mr-4 group-hover:bg-yellow-400/30 transition-colors duration-300">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500">Branch Office</h3>
              </div>
              <div className="space-y-4 text-yellow-100/80 pl-16">
                <p className="text-lg">Subhadra Bhawan, Bhawani Shankar Road</p>
                <p className="text-lg">Dadar (W), Mumbai, Maharashtra 400028</p>
                <div className="space-y-4 mt-6 border-t border-yellow-500/10 pt-6">
                  <div className="flex items-center gap-3 group/item hover:text-yellow-300 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover/item:bg-yellow-400/20 transition-colors duration-300">
                      <span className="text-xl">✉️</span>
                    </div>
                    <span>smnaik45@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 group/item hover:text-yellow-300 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover/item:bg-yellow-400/20 transition-colors duration-300">
                      <span className="text-xl">📞</span>
                    </div>
                    <span>8108151837</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            variants={containerVariants}
            className="w-full lg:w-1/2"
          >
            <motion.form
              className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-lg rounded-3xl p-10 shadow-[0_10px_50px_rgba(234,179,8,0.15)] border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500 space-y-6"
              variants={containerVariants}
              onSubmit={handleSubmit}
            >
              {state.succeeded && (
                <div className="p-4 mb-4 text-sm rounded-lg bg-green-500/20 text-green-400">
                  Thank you for your message. We'll get back to you soon!
                </div>
              )}
              {state.errors && state.errors.length > 0 && (
                <div className="p-4 mb-4 text-sm rounded-lg bg-red-500/20 text-red-400">
                  There was an error sending your message. Please try again.
                </div>
              )}
              <motion.div variants={formItemVariants} className="relative group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  className="w-full px-6 py-4 bg-black/50 border border-yellow-500/20 rounded-xl text-yellow-100 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-400/40 transition-all duration-300" 
                  required 
                  id="name"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-6 -top-3 bg-black/80 px-2 text-sm text-yellow-400 transition-all duration-300 pointer-events-none"
                >
                  Your Name
                </label>
              </motion.div>
              
              <motion.div variants={formItemVariants} className="relative group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  className="w-full px-6 py-4 bg-black/50 border border-yellow-500/20 rounded-xl text-yellow-100 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-400/40 transition-all duration-300" 
                  required 
                  id="email"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-6 -top-3 bg-black/80 px-2 text-sm text-yellow-400 transition-all duration-300 pointer-events-none"
                >
                  Your Email
                </label>
              </motion.div>
              
              <motion.div variants={formItemVariants} className="relative group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Your Phone" 
                  className="w-full px-6 py-4 bg-black/50 border border-yellow-500/20 rounded-xl text-yellow-100 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-400/40 transition-all duration-300" 
                  id="phone"
                />
                <label 
                  htmlFor="phone" 
                  className="absolute left-6 -top-3 bg-black/80 px-2 text-sm text-yellow-400 transition-all duration-300 pointer-events-none"
                >
                  Your Phone (Optional)
                </label>
              </motion.div>
              
              <motion.div variants={formItemVariants} className="relative group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  className="w-full px-6 py-4 bg-black/50 border border-yellow-500/20 rounded-xl text-yellow-100 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-400/40 transition-all duration-300 min-h-[150px]" 
                  required
                  id="message"
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-6 -top-3 bg-black/80 px-2 text-sm text-yellow-400 transition-all duration-300 pointer-events-none"
                >
                  Your Message
                </label>
              </motion.div>
              
              <motion.button 
                variants={formItemVariants}
                type="submit" 
                className="w-full py-4 px-6 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-medium rounded-xl hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all duration-300 transform hover:scale-[1.02] mt-4"
              >
                Send Message
              </motion.button>
            </motion.form>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8 bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-lg rounded-3xl p-6 shadow-[0_10px_50px_rgba(234,179,8,0.15)] border border-yellow-500/20 hover:border-yellow-400/40 transform transition-all duration-500 hover:translate-y-[-8px]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center mr-3">
                    <span className="text-xl">⏱️</span>
                  </div>
                  <div>
                    <h4 className="text-yellow-400 font-medium">Business Hours</h4>
                    <p className="text-yellow-100/70 text-sm">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-yellow-100/90">Mon - Fri: 9AM - 6PM</p>
                  <p className="text-yellow-100/70">Sat: 10AM - 2PM</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-20 bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-lg rounded-3xl p-10 shadow-[0_10px_50px_rgba(234,179,8,0.15)] border border-yellow-500/20 overflow-hidden relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full filter blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full filter blur-3xl -ml-32 -mb-32 pointer-events-none"></div>
          
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500 mb-4">Our Location</h3>
            <p className="text-yellow-100/80 max-w-2xl mx-auto">Visit our office or contact us online. We're always ready to help with your land surveying needs.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full h-[400px] rounded-2xl overflow-hidden border border-yellow-500/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8976850000903!2d72.83721027499653!3d19.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61b41dfb131%3A0x312ed45760f95e48!2sSubhadra%20Bhawan%2C%20Bhawani%20Shankar%20Rd%2C%20Dadar%20West%2C%20Mumbai%2C%20Maharashtra%20400028!5e0!3m2!1sen!2sin!4v1710400000000!5m2!1sen!2sin&markers=color:red%7C19.02,72.837" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;