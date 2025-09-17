import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#d3e4ff] to-[#e8f2ff] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1a365d] mb-6">
            About Us
          </h1>
          <p className="text-xl text-[#2d4a6f] max-w-3xl mx-auto">
            Learn more about Moksh Recruit Tech and our mission to connect talent with opportunities.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1a365d] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-[#4a5568] mb-6 leading-relaxed">
                Founded with a vision to revolutionize the recruitment industry, Moksh Recruit Tech has been 
                connecting exceptional talent with leading organizations for over a decade.
              </p>
              <p className="text-lg text-[#4a5568] mb-6 leading-relaxed">
                We believe that the right match between candidate and company creates lasting success for both 
                parties. Our innovative approach combines cutting-edge technology with human expertise to 
                deliver unparalleled recruitment solutions.
              </p>
            </div>
            <div className="bg-[#f7fafc] p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-[#1a365d] mb-4">Our Mission</h3>
              <p className="text-[#4a5568] leading-relaxed">
                To bridge the gap between talented professionals and innovative companies, 
                creating meaningful career opportunities and driving business growth through 
                strategic talent acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
