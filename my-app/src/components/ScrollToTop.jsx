import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Auto scroll to top on route change (instant for better UX)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Instant scroll for page navigation
    });
  }, [location.pathname]);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls past hero section (approximately 600px)
      if (window.pageYOffset > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#39608f] hover:bg-[#2d4a6f] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 group animate-bounce-slow"
          aria-label="Scroll to top"
          title="Go to top"
        >
          <ArrowUp 
            size={28} 
            className="group-hover:-translate-y-1 transition-transform duration-300" 
          />
          
          {/* Pulse ring animation */}
          <span className="absolute inset-0 rounded-full bg-[#39608f] opacity-30 animate-ping"></span>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Back to top
          </div>
        </button>
      )}
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow:hover {
          animation: none;
        }
      `}</style>
    </>
  );
};

export default ScrollToTop;
