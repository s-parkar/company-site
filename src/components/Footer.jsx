import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-8 border-t border-yellow-500/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-yellow-100/70 mb-4 md:mb-0">
            © {currentYear} S.M.Naik & ASSOCIATES. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-yellow-100/70 hover:text-yellow-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-yellow-100/70 hover:text-yellow-400 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;