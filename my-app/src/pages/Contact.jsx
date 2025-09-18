import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Sparkles } from 'lucide-react';
import LoadingBar from 'react-top-loading-bar';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', mobile: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const loadingBarRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Start loading bar
    if (loadingBarRef.current) {
      loadingBarRef.current.continuousStart();
    }
    
    // Simulate form submission
    setTimeout(() => {
      // Complete loading bar
      if (loadingBarRef.current) {
        loadingBarRef.current.complete();
      }
      
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', mobile: '', message: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Page Loading Bar */}
      <LoadingBar
        color="#39608f"
        ref={loadingBarRef}
        height={3}
        shadow={true}
        transitionTime={300}
      />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-circle absolute top-20 left-10 w-20 h-20 bg-[#39608f]/10 rounded-full"></div>
        <div className="floating-circle absolute top-40 right-20 w-16 h-16 bg-[#38a169]/10 rounded-full animation-delay-1000"></div>
        <div className="floating-circle absolute bottom-32 left-1/4 w-12 h-12 bg-[#39608f]/10 rounded-full animation-delay-2000"></div>
        <div className="floating-circle absolute bottom-20 right-1/3 w-24 h-24 bg-[#38a169]/10 rounded-full animation-delay-3000"></div>
        <div className="floating-sparkle absolute top-1/3 left-1/5 text-[#39608f]/20">
          <Sparkles size={20} />
        </div>
        <div className="floating-sparkle absolute top-2/3 right-1/4 text-[#38a169]/20 animation-delay-1500">
          <Sparkles size={16} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#d3e4ff] to-[#e8f2ff] py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#39608f] rounded-full mb-6 animate-pulse">
              <MessageCircle size={32} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#1a365d] mb-6">
              Let's <span className="text-[#39608f] relative">
                Connect
                {/* <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#38a169]" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10c20-4 40-4 60 0s40 4 60 0 40-4 60 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg> */}
              </span>
            </h1>
            <p className="text-xl text-[#2d4a6f] max-w-3xl mx-auto mb-8">
              Ready to transform your hiring journey? We're here to make it happen. 
              Reach out and let's start building something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h2 className="text-4xl font-bold text-[#1a365d] mb-8">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="contact-card group flex items-start space-x-4 p-4 rounded-xl hover:bg-[#f7fafc] transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="contact-icon-wrapper">
                    <MapPin size={24} className="text-[#39608f] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1a365d] mb-1 group-hover:text-[#39608f] transition-colors duration-300">Address</h3>
                    <p className="text-[#4a5568] group-hover:text-[#2d4a6f] transition-colors duration-300">
                      6725 Reserve Road, West Bloomfield, MI, 48322.
                    </p>
                  </div>
                </div>
                
                <div className="contact-card group flex items-start space-x-4 p-4 rounded-xl hover:bg-[#f7fafc] transition-all duration-300 hover:shadow-lg hover:scale-105 animation-delay-200">
                  <div className="contact-icon-wrapper">
                    <Phone size={24} className="text-[#39608f] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1a365d] mb-1 group-hover:text-[#39608f] transition-colors duration-300">Phone</h3>
                    <p className="text-[#4a5568] group-hover:text-[#2d4a6f] transition-colors duration-300">tel: +1-301-252-2673</p>
                  </div>
                </div>
                
                <div className="contact-card group flex items-start space-x-4 p-4 rounded-xl hover:bg-[#f7fafc] transition-all duration-300 hover:shadow-lg hover:scale-105 animation-delay-400">
                  <div className="contact-icon-wrapper">
                    <Mail size={24} className="text-[#39608f] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1a365d] mb-1 group-hover:text-[#39608f] transition-colors duration-300">Email</h3>
                    <p className="text-[#4a5568] group-hover:text-[#2d4a6f] transition-colors duration-300">info@mokshtech.net</p>
                  </div>
                </div>
                
                <div className="contact-card group flex items-start space-x-4 p-4 rounded-xl hover:bg-[#f7fafc] transition-all duration-300 hover:shadow-lg hover:scale-105 animation-delay-600">
                  <div className="contact-icon-wrapper">
                    <Clock size={24} className="text-[#39608f] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1a365d] mb-1 group-hover:text-[#39608f] transition-colors duration-300">Business Hours</h3>
                    <p className="text-[#4a5568] group-hover:text-[#2d4a6f] transition-colors duration-300">07:00 AM - 19:00 PM</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-[#f7fafc] to-[#edf2f7] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#e2e8f0]">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-[#39608f] rounded-full flex items-center justify-center">
                    <Send size={20} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1a365d]">Send us a message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label className="block text-sm font-medium text-[#1a365d] mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39608f] focus:border-transparent transition-all duration-300 hover:border-[#39608f]/50"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="block text-sm font-medium text-[#1a365d] mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39608f] focus:border-transparent transition-all duration-300 hover:border-[#39608f]/50"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label className="block text-sm font-medium text-[#1a365d] mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39608f] focus:border-transparent transition-all duration-300 hover:border-[#39608f]/50"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="block text-sm font-medium text-[#1a365d] mb-2">Mobile Number</label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39608f] focus:border-transparent transition-all duration-300 hover:border-[#39608f]/50"
                        placeholder="+91 98765 43210"
                        pattern="[+]?[0-9]{10,13}"
                        title="Please enter a valid Indian mobile number (10 digits with optional +91)"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="block text-sm font-medium text-[#1a365d] mb-2">Message</label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39608f] focus:border-transparent transition-all duration-300 hover:border-[#39608f]/50 resize-none"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#39608f] hover:bg-[#2d4a6f] text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(57, 96, 143, 0.4);
          }
          50% {
            box-shadow: 0 0 20px 10px rgba(57, 96, 143, 0.1);
          }
        }

        .floating-circle {
          animation: float 6s ease-in-out infinite;
        }

        .floating-sparkle {
          animation: sparkle 4s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .contact-card {
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(57, 96, 143, 0.1), transparent);
          transition: left 0.5s;
        }

        .contact-card:hover::before {
          left: 100%;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(57, 96, 143, 0.15);
        }

        .contact-icon-wrapper {
          position: relative;
        }

        .contact-icon-wrapper::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 40px;
          background: rgba(57, 96, 143, 0.1);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.3s ease;
        }

        .contact-card:hover .contact-icon-wrapper::after {
          transform: translate(-50%, -50%) scale(1);
        }
      `}</style>
    </div>
  );
};

export default Contact;
