import React from 'react';

const WhoWeServe = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#d3e4ff] to-[#e8f2ff] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1a365d] mb-6">
            Who We Serve
          </h1>
          <p className="text-xl text-[#2d4a6f] max-w-3xl mx-auto">
            Discover how we help companies and professionals achieve their goals through strategic partnerships.
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* For Companies */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#39608f] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h4M9 7h6m-6 4h6m-6 4h6" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#1a365d] mb-6">For Companies</h2>
              <div className="space-y-4 text-left">
                <div className="bg-[#f7fafc] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#1a365d] mb-3">Startups & Scale-ups</h3>
                  <p className="text-[#4a5568]">
                    Build your dream team with top-tier talent that grows with your vision.
                  </p>
                </div>
                <div className="bg-[#f7fafc] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#1a365d] mb-3">Enterprise Companies</h3>
                  <p className="text-[#4a5568]">
                    Strategic talent acquisition for large-scale operations and specialized roles.
                  </p>
                </div>
                <div className="bg-[#f7fafc] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#1a365d] mb-3">Technology Companies</h3>
                  <p className="text-[#4a5568]">
                    Find skilled developers, engineers, and tech professionals for your projects.
                  </p>
                </div>
              </div>
            </div>

            {/* For Professionals */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#38a169] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#1a365d] mb-6">For Professionals</h2>
              <div className="space-y-4 text-left">
                <div className="bg-[#f7fafc] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#1a365d] mb-3">Recent Graduates</h3>
                  <p className="text-[#4a5568]">
                    Launch your career with entry-level opportunities at innovative companies.
                  </p>
                </div>
                <div className="bg-[#f7fafc] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#1a365d] mb-3">Experienced Professionals</h3>
                  <p className="text-[#4a5568]">
                    Take the next step in your career with senior and leadership positions.
                  </p>
                </div>
                <div className="bg-[#f7fafc] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#1a365d] mb-3">Career Changers</h3>
                  <p className="text-[#4a5568]">
                    Transition to new industries with our guidance and extensive network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeServe;
