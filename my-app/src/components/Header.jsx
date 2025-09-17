import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#d3e4ff] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a to="/" className="block">
              <img 
                src="/MokshRecruitTech.svg" 
                alt="Moksh Recruit" 
                className="h-16 w-auto hover:opacity-80 transition-opacity duration-200"
              />
            </a>
          </div>

          {/* Desktop Navigation and CTA */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="relative text-gray-700 hover:text-[#39608f] px-3 py-2 text-base font-medium transition-colors duration-300 group inline-block overflow-hidden"
              >
                Home
                <span className="absolute bottom-1 left-3 h-0.5 bg-[#39608f] w-0 transition-all duration-500 ease-out group-hover:w-full origin-left"></span>
              </Link>
              <Link 
                to="/about" 
                className="relative text-gray-700 hover:text-[#39608f] px-3 py-2 text-base font-medium transition-colors duration-300 group inline-block overflow-hidden"
              >
                About us
                <span className="absolute bottom-1 left-3 h-0.5 bg-[#39608f] w-0 transition-all duration-500 ease-out group-hover:w-full origin-left"></span>
              </Link>
              <Link 
                to="/who-we-serve" 
                className="relative text-gray-700 hover:text-[#39608f] px-3 py-2 text-base font-medium transition-colors duration-300 group inline-block overflow-hidden"
              >
                Who we Serve
                <span className="absolute bottom-1 left-3 h-0.5 bg-[#39608f] w-0 transition-all duration-500 ease-out group-hover:w-full origin-left"></span>
              </Link>
            </nav>
            <Link to="/contact" className="bg-[#39608f] hover:bg-[#2d4a6f] text-white px-6 py-2 rounded-md text-base font-medium transition-colors duration-200">
              Contact us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#39608f] focus:outline-none focus:text-[#39608f]"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#d3e4ff] border-t border-gray-200">
              <a 
                to="/" 
                className="relative text-gray-700 hover:text-[#39608f] block px-3 py-2 text-base font-medium transition-colors duration-300 group inline-block overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
                <span className="absolute bottom-1 left-3 h-0.5 bg-[#39608f] w-0 transition-all duration-500 ease-out group-hover:w-full origin-left"></span>
              </a>
              <a 
                to="/about" 
                className="relative text-gray-700 hover:text-[#39608f] block px-3 py-2 text-base font-medium transition-colors duration-300 group inline-block overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
                <span className="absolute bottom-1 left-3 h-0.5 bg-[#39608f] w-0 transition-all duration-500 ease-out group-hover:w-full origin-left"></span>
              </a>
              <a 
                to="/who-we-serve" 
                className="relative text-gray-700 hover:text-[#39608f] block px-3 py-2 text-base font-medium transition-colors duration-300 group inline-block overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                Who we Serve
                <span className="absolute bottom-1 left-3 h-0.5 bg-[#39608f] w-0 transition-all duration-500 ease-out group-hover:w-full origin-left"></span>
              </a>
              <div className="pt-4">
                <button 
                  className="bg-[#39608f] hover:bg-[#2d4a6f] text-white px-6 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
