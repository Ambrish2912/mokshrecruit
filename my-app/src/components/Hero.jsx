import React from 'react';
import { ArrowRight, Users, Briefcase } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#d3e4ff] to-[#e8f2ff] py-20 relative overflow-hidden">
   

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a365d] mb-6 leading-tight">
            Find Top Talent or Your Next{' '}
            <span className="text-[#39608f] relative">
              Career Move
          
            </span>
            {' '}– Fast.
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#2d4a6f] mb-8 max-w-4xl mx-auto leading-relaxed">
            Moksh Recruiting connects leading companies with global talent through smart sourcing and streamlined hiring. 
            Whether you're hiring or job hunting — we'll make the right match happen.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group bg-[#39608f] hover:bg-[#2d4a6f] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
              <Briefcase className="mr-2" size={20} />
              For Employers
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            <button className="group bg-white hover:bg-gray-50 text-[#39608f] border-2 border-[#39608f] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
              <Users className="mr-2" size={20} />
              For Job Seekers
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </div>

       
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#39608f] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#39608f] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

