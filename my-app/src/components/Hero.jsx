import React from "react";
import { ArrowRight, Users, Briefcase } from 'lucide-react';
import "./orbit.css";

const Hero = ({ imageUrl = "/MokshRecruitTech.svg" }) => {
  return (
    <section className="bg-gradient-to-br from-[#d3e4ff] to-[#e8f2ff] py-12 md:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#39608f] to-[#4299e1]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a365d] leading-tight">
              Your Way to Become a
              <span className="text-[#39608f]"> Top Professional</span>
              <br /> in the Tech Industry.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#2d4a6f] max-w-xl leading-relaxed">
              Connect with leading companies and discover opportunities that match your skills, goals, and ambitions. Whether you're hiring or job hunting.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="group px-8 py-4 rounded-full bg-[#39608f] hover:bg-[#2d4a6f] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
                <Briefcase className="mr-2" size={20} />
                Find Opportunities
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </button>
              <button className="group px-8 py-4 rounded-full border-2 border-[#39608f] text-[#39608f] hover:bg-[#39608f] hover:text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center">
                <Users className="mr-2" size={20} />
                Career Guide
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </button>
            </div>

            {/* Statistics */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#39608f]">500+</div>
                <div className="text-sm text-[#2d4a6f]">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#39608f]">10K+</div>
                <div className="text-sm text-[#2d4a6f]">Placements</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#39608f]">98%</div>
                <div className="text-sm text-[#2d4a6f]">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right: Orbit Effect */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center animate-float">
              {/* Center Logo/Image */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-2xl animate-pulse-glow border-4 border-[#39608f]">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Moksh Recruit Tech"
                    className="object-contain w-24 h-24 md:w-32 md:h-32"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' fill='%2339608f' rx='64'/%3E%3Ctext x='64' y='64' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='48' font-weight='bold'%3EM%3C/text%3E%3C/svg%3E";
                    }}
                  />
                ) : (
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-[#39608f] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl md:text-4xl font-bold">M</span>
                  </div>
                )}
              </div>

              {/* Orbit 1 - Inner orbit */}
              <div className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-[#39608f]/30 animate-spin-slow">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden bg-white shadow-lg border-2 border-[#4299e1]">
                  <img 
                    src="/Find.jpg" 
                    alt="Find Talent" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%234299e1' rx='24'/%3E%3Ctext x='24' y='24' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='16' font-weight='bold'%3EF%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden bg-white shadow-lg border-2 border-[#3182ce]">
                  <img 
                    src="/Launch.jpg" 
                    alt="Launch Career" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%233182ce' rx='24'/%3E%3Ctext x='24' y='24' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='16' font-weight='bold'%3EL%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>

              {/* Orbit 2 - Outer orbit (reverse) */}
              <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-[#4299e1]/40 animate-spin-slow-reverse">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full overflow-hidden bg-white shadow-lg border-2 border-[#39608f]">
                  <img 
                    src="/Your.png" 
                    alt="Your Success" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%2339608f' rx='24'/%3E%3Ctext x='24' y='24' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='16' font-weight='bold'%3EY%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full overflow-hidden bg-white shadow-lg border-2 border-[#2d4a6f]">
                  <div className="w-full h-full bg-gradient-to-br from-[#39608f] to-[#4299e1] rounded-full flex items-center justify-center">
                    <Briefcase className="text-white" size={24} />
                  </div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#4299e1] rounded-full animate-ping"></div>
              <div className="absolute bottom-8 left-8 w-3 h-3 bg-[#39608f] rounded-full animate-pulse"></div>
              <div className="absolute top-16 left-4 w-1 h-1 bg-[#3182ce] rounded-full animate-bounce"></div>
            </div>
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

