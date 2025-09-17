import React from 'react';
import Hero from '../components/Hero';
import StackingCards from '../components/StackingCards';

const Home = () => {
  return (
    <>
      <Hero />
      <StackingCards />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
              Our Smart Sourcing Advantage
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-[#f7fafc] hover:bg-[#edf2f7] transition-colors duration-200">
              <div className="w-16 h-16 bg-[#39608f] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a365d] mb-2">AI-powered job matching</h3>
              <p className="text-[#4a5568]">Intelligent algorithms match candidates to jobs with precision and speed.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-[#f7fafc] hover:bg-[#edf2f7] transition-colors duration-200">
              <div className="w-16 h-16 bg-[#38a169] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a365d] mb-2">Fast turnarounds with quality hires</h3>
              <p className="text-[#4a5568]">Reduce hiring time and find top talent effortlessly.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-[#f7fafc] hover:bg-[#edf2f7] transition-colors duration-200">
              <div className="w-16 h-16 bg-[#39608f] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a365d] mb-2">Pre-vetted global talent pool</h3>
              <p className="text-[#4a5568]">Hire faster with thoroughly screened talent from around the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#39608f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-[#d3e4ff] mb-8 max-w-2xl mx-auto">
            Let's clear things up—talk to us today.
          </p>
          <button className="bg-white hover:bg-gray-100 text-[#39608f] px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
            Contact
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
