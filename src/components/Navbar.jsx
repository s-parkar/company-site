import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/hamburger.css';
import '../styles/navbar.css';

const Navbar = ({ onQuoteClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const menuVariants = {
    open: { opacity: 1, x: 0, transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { opacity: 0, x: "-100%" }
  };

  const menuItemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 }
  };

  return (
    <nav id="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <motion.div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <motion.img
              src="/assets/img/logo.svg"
              alt="S . M . NAIK & ASSOCIATES Logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <motion.h1 className="company-name">
              S.M. NAIK & ASSOCIATES
            </motion.h1>
          </motion.div>
        </Link>

        <motion.div
          className={`nav-links ${isMenuOpen ? 'active' : ''}`}
          initial={{opacity: 1, x: 0}}
          animate={window.innerWidth <= 768 ? (isMenuOpen ? "open" : "closed") : {opacity: 1, x: 0}}
          variants={menuVariants}
        >
          <ul>
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About Us' },
              { path: '/services', label: 'Services' },
              { path: '/projects', label: 'Projects' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <motion.li key={item.path} variants={menuItemVariants}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
            <motion.li variants={menuItemVariants}>
              <Link to="/contact" className="quote-btn">
                Get a Quote
              </Link>
            </motion.li>
          </ul>
        </motion.div>

        <motion.button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;