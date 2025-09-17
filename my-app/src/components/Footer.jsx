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
    <footer className="bg-[#184974] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
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
              <a href="#" className="bg-blue-600 hover:bg-blue-500 p-2 rounded-full transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-500 p-2 rounded-full transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-500 p-2 rounded-full transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-500 p-2 rounded-full transition-colors duration-300">
                <Instagram size={18} />
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
                  className="w-48 px-3 py-2 rounded-lg text-sm border-0 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700 placeholder-gray-400 bg-white"
                />
                <button className="bg-[#39608f] hover:bg-[#2d4a6f] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 whitespace-nowrap">
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
    </footer>
  );
};

export default Footer;