import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#184974] text-white relative overflow-hidden">
      {/* Custom Aurora Background Effect with Theme Colors */}
      <div className="absolute inset-0 aurora-container">
        <div className="aurora-layer aurora-layer-1"></div>
        <div className="aurora-layer aurora-layer-2"></div>
        <div className="aurora-layer aurora-layer-3"></div>
        <div className="aurora-layer aurora-layer-4"></div>
      </div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {/* Company Info */}
           <div className="space-y-6">
             <div>
               <div className="mb-6">
                 <img 
                   src="/MokshRecruitTech.svg" 
                   alt="Moksh Recruit Tech" 
                   className="h-12 w-auto"
                 />
               </div>
               <p className="text-blue-100 leading-relaxed text-sm">
                 Your trusted partner in finding the right talent and career opportunities. 
                 We connect exceptional professionals with leading organizations.
               </p>
             </div>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/20 hover:bg-[#39608f] backdrop-blur-sm border border-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/50">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" className="bg-white/20 hover:bg-[#39608f] backdrop-blur-sm border border-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/50">
                <Twitter size={18} className="text-white" />
              </a>
              <a href="#" className="bg-white/20 hover:bg-[#39608f] backdrop-blur-sm border border-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/50">
                <Linkedin size={18} className="text-white" />
              </a>
              <a href="#" className="bg-white/20 hover:bg-[#39608f] backdrop-blur-sm border border-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/50">
                <Instagram size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-blue-100 hover:text-white flex items-center group transition-colors duration-300"
                >
                  <ArrowRight size={14} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-blue-100 hover:text-white flex items-center group transition-colors duration-300"
                >
                  <ArrowRight size={14} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/who-we-serve" 
                  className="text-blue-100 hover:text-white flex items-center group transition-colors duration-300"
                >
                  <ArrowRight size={14} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-blue-100 hover:text-white flex items-center group transition-colors duration-300"
                >
                  <ArrowRight size={14} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 leading-relaxed text-sm">
                  6725 Reserve Road, West Bloomfield, MI,48322.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-300 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 text-sm">tel: +1-301-252-2673</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-300 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 text-sm">info@mokshtech.net</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          
          {/* Newsletter Section - Inside the box */}
          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="flex items-center justify-between gap-6">
              <div className="flex-shrink-0">
                <h4 className="text-lg font-semibold text-white whitespace-nowrap">Stay Updated</h4>
              </div>
              <div className="flex-1 text-center">
                <p className="text-blue-100 text-sm">Get latest opportunities in your inbox</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-48 px-3 py-2 rounded-lg text-sm border border-white/30 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700 placeholder-gray-400 bg-white/90 backdrop-blur-sm focus:bg-white transition-all duration-300"
                />
                <button className="bg-[#39608f]/90 hover:bg-[#2d4a6f] backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap hover:scale-105 hover:shadow-lg hover:shadow-blue-400/50">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0a2d47] border-t border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-blue-100 text-sm">
            Copyright © 2022 ASK Project
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Aurora Animation CSS */}
      <style>{`
        .aurora-container {
          background: linear-gradient(45deg, #184974, #2d4a6f, #39608f);
          animation: aurora-base 20s ease-in-out infinite;
        }
        
        .aurora-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          mix-blend-mode: screen;
        }
        
        .aurora-layer-1 {
          background: radial-gradient(ellipse 80% 50% at 20% 30%, rgba(57, 96, 143, 0.6) 0%, transparent 70%);
          animation: aurora-flow-1 25s ease-in-out infinite;
        }
        
        .aurora-layer-2 {
          background: radial-gradient(ellipse 60% 40% at 80% 70%, rgba(45, 74, 111, 0.5) 0%, transparent 60%);
          animation: aurora-flow-2 30s ease-in-out infinite reverse;
        }
        
        .aurora-layer-3 {
          background: radial-gradient(ellipse 70% 30% at 50% 20%, rgba(66, 153, 225, 0.4) 0%, transparent 50%);
          animation: aurora-flow-3 35s ease-in-out infinite;
        }
        
        .aurora-layer-4 {
          background: radial-gradient(ellipse 50% 60% at 70% 80%, rgba(24, 73, 116, 0.3) 0%, transparent 40%);
          animation: aurora-flow-4 40s ease-in-out infinite reverse;
        }
        
        @keyframes aurora-base {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes aurora-flow-1 {
          0%, 100% {
            transform: translateX(0%) translateY(0%) scale(1) rotate(0deg);
            opacity: 0.6;
          }
          25% {
            transform: translateX(-30%) translateY(-20%) scale(1.2) rotate(5deg);
            opacity: 0.8;
          }
          50% {
            transform: translateX(20%) translateY(-10%) scale(0.9) rotate(-3deg);
            opacity: 0.4;
          }
          75% {
            transform: translateX(-10%) translateY(15%) scale(1.1) rotate(2deg);
            opacity: 0.7;
          }
        }
        
        @keyframes aurora-flow-2 {
          0%, 100% {
            transform: translateX(0%) translateY(0%) scale(1) rotate(0deg);
            opacity: 0.5;
          }
          33% {
            transform: translateX(25%) translateY(-25%) scale(1.3) rotate(-4deg);
            opacity: 0.7;
          }
          66% {
            transform: translateX(-35%) translateY(10%) scale(0.8) rotate(6deg);
            opacity: 0.3;
          }
        }
        
        @keyframes aurora-flow-3 {
          0%, 100% {
            transform: translateX(0%) translateY(0%) scale(1) rotate(0deg);
            opacity: 0.4;
          }
          40% {
            transform: translateX(40%) translateY(-30%) scale(1.4) rotate(8deg);
            opacity: 0.6;
          }
          80% {
            transform: translateX(-20%) translateY(20%) scale(0.7) rotate(-5deg);
            opacity: 0.2;
          }
        }
        
        @keyframes aurora-flow-4 {
          0%, 100% {
            transform: translateX(0%) translateY(0%) scale(1) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateX(-15%) translateY(-15%) scale(1.2) rotate(3deg);
            opacity: 0.5;
          }
        }
        
        /* Enhanced glass effects for Aurora background */
        .bg-white\\/10 {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
        
        /* Social icon glow effects */
        .bg-white\\/20:hover {
          background: rgba(57, 96, 143, 0.8);
          box-shadow: 0 0 25px rgba(66, 153, 225, 0.6);
          transform: scale(1.1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;