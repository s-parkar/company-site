import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/5 backdrop-blur-lg border-b border-yellow-500/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="relative group">
          <motion.div className="flex items-center gap-4">
            <motion.img
              src="/assets/img/logo.svg"
              alt="S . M . NAIK & ASSOCIATES Logo"
              className="h-12 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <motion.h1 className={`text-lg md:text-xl font-extrabold tracking-wider uppercase ${location.pathname === '/' ? 'bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent' : 'text-white'}`}>
              S.M. NAIK & ASSOCIATES
            </motion.h1>
          </motion.div>
        </Link>

        <motion.div
          className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} fixed md:relative top-[72px] md:top-0 left-0 w-full md:w-auto h-[calc(100vh-72px)] md:h-auto bg-black/80 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none md:translate-x-0 transition-transform duration-300 ease-in-out md:transition-none`}
          initial={{opacity: 1}}
          animate={window.innerWidth <= 768 ? (isMenuOpen ? "open" : "closed") : {opacity: 1}}
          variants={menuVariants}
        >
          <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-6 p-8 md:p-0">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About Us' },
              { path: '/services', label: 'Services' },
              { path: '/projects', label: 'Projects' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <motion.li key={item.path} variants={menuItemVariants} className="w-full md:w-auto">
                <Link
                  to={item.path}
                  className={`block py-2 px-4 text-base font-medium transition-all duration-200 rounded-lg ${location.pathname === item.path ? 'bg-yellow-400/10 text-yellow-400' : 'text-white hover:text-yellow-400 hover:bg-yellow-400/5'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
            <motion.li variants={menuItemVariants} className="w-full md:w-auto">
              <Link
                to="/contact"
                className="block text-center py-2.5 px-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-yellow-500/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                Get a Quote
              </Link>
            </motion.li>
          </ul>
        </motion.div>

        <motion.button
          className={`md:hidden relative z-50 w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400/10 backdrop-blur-lg border border-yellow-400/20 transition-all duration-200 ${isMenuOpen ? 'bg-yellow-400/20' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-6 h-5">
            <span className={`absolute left-0 w-full h-0.5 bg-yellow-400 transform transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
            <span className={`absolute left-0 top-2 w-full h-0.5 bg-yellow-400 transition-all duration-200 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute left-0 w-full h-0.5 bg-yellow-400 transform transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
          </div>
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;