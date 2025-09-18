import React, { useEffect, useRef, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { ChevronDown, ChevronUp, Mail } from 'lucide-react';

const About = () => {
  const loadingBarRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    // Simulate page loading
    if (loadingBarRef.current) {
      loadingBarRef.current.continuousStart();
      setTimeout(() => {
        if (loadingBarRef.current) {
          loadingBarRef.current.complete();
        }
      }, 900);
    }
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Moksh Recruiting?",
      answer: "Moksh Recruiting is a talent sourcing and recruitment platform that connects leading companies with global talent. We utilize AI-powered job matching to provide fast, efficient hiring solutions for businesses and job seekers alike."
    },
    {
      question: "How does AI-powered job matching work?",
      answer: "Our AI-powered job matching system uses intelligent algorithms to analyze both candidates' profiles and job requirements to ensure precise and quick matches. This technology significantly reduces hiring time and ensures the right fit for both employers and candidates."
    },
    {
      question: "What types of candidates are in your talent pool?",
      answer: "Our global talent pool consists of highly-skilled professionals who have been thoroughly vetted and verified. We ensure that all candidates are pre-screened for the necessary qualifications and experience, making it easier for businesses to hire with confidence."
    },
    {
      question: "How long does it take to find the right candidate?",
      answer: "Thanks to our smart sourcing and AI-powered job matching, the hiring process is faster than traditional recruitment methods. The exact time frame depends on the role and requirements, but we strive to deliver quality candidates in the shortest time possible."
    },
    {
      question: "Can Moksh Recruiting help with remote hiring?",
      answer: "Absolutely! We specialize in connecting businesses with top talent worldwide, including remote professionals. Whether you're hiring for full-time remote roles or freelance positions, our platform makes it easy to find skilled professionals who can work from anywhere."
    },
    {
      question: "How does Moksh Recruiting ensure the quality of its candidates?",
      answer: "All candidates in our pool undergo a rigorous vetting process to ensure they meet our high standards. We verify their qualifications, experience, and skills through interviews and background checks, ensuring that only top-tier talent is presented to our clients."
    },
    {
      question: "What is the cost of using Moksh Recruiting?",
      answer: "Moksh Recruiting offers transparent pricing and scalable plans tailored to your hiring needs. The cost will vary based on factors such as the type of role and the level of service required. Contact us for a custom quote based on your specific requirements."
    },
    {
      question: "How do I post a job on Moksh Recruiting?",
      answer: "Posting a job on Moksh Recruiting is simple. Just visit our 'Browse Jobs' section and select the 'Post a Job' option. You'll be guided through a quick process to list your vacancy and find the ideal candidate for your team."
    },
    {
      question: "How can I apply for a job through Moksh Recruiting?",
      answer: "To apply for a job, simply browse our listings and click on the job that interests you. You can submit your application directly through the website by uploading your resume and cover letter. Our recruiters will review your application and contact you if you're a match."
    },
    {
      question: "Is Moksh Recruiting available in all countries?",
      answer: "Yes, Moksh Recruiting operates globally, connecting businesses with talent from around the world. Whether you're hiring locally or looking to source talent from other countries, we provide the tools to make global recruitment seamless."
    },
    {
      question: "What types of jobs can I find on Moksh Recruiting?",
      answer: "Moksh Recruiting offers a wide variety of job opportunities, including full-time, part-time, freelance, and remote roles. We cater to multiple industries, with a focus on tech, design, operations, and marketing positions."
    },
    {
      question: "Do you provide recruitment for startups and small businesses?",
      answer: "Yes! We understand the unique needs of startups and small businesses. Moksh Recruiting is designed to help businesses scale fast by providing access to qualified professionals who are ready to contribute to your growth, regardless of company size."
    },
    {
      question: "Can I contact Moksh Recruiting for support?",
      answer: "Absolutely! If you have any questions or need assistance, our support team is available to help. You can reach us via email at info@mokshtech.net or by calling +91 99786 02779. We're here to assist you with any queries you have."
    },
    {
      question: "What makes Moksh Recruiting different from other recruitment platforms?",
      answer: "Moksh Recruiting stands out with its use of AI-powered job matching, fast hiring processes, and a pre-vetted global talent pool. Our platform offers personalized service for both businesses and job seekers, ensuring a precise match every time, with transparent pricing and scalable solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Loading Bar */}
      <LoadingBar
        color="#39608f"
        ref={loadingBarRef}
        height={3}
        shadow={true}
        transitionTime={300}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#d3e4ff] to-[#e8f2ff] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a365d] mb-6 leading-tight">
            Find Exceptional Talent or Your Dream Job — In No Time.
          </h1>
          <p className="text-xl md:text-2xl text-[#2d4a6f] mb-8 max-w-4xl mx-auto leading-relaxed">
            Moksh Recruiting connects leading companies with global talent through smart sourcing and streamlined hiring. 
            Whether you're hiring or job hunting — we'll make the right match happen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-[#39608f] hover:bg-[#2d4a6f] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contact us
            </button>
            <button className="bg-white hover:bg-gray-50 text-[#39608f] border-2 border-[#39608f] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Browse Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Smart Sourcing Partner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6">
              Your Smart Sourcing Partner for Global Talent
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-[#4a5568] mb-6 leading-relaxed">
                At Moksh Recruiting, we help companies build agile, high-performing teams by connecting them with top-tier talent from around the world. We believe great hiring isn't just about resumes — it's about relationships, results, and readiness.
              </p>
              <p className="text-lg text-[#4a5568] leading-relaxed">
                Whether you're a fast-scaling startup or a Fortune 500 enterprise, we're here to make hiring seamless, strategic, and scalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-[#4a5568] max-w-4xl mx-auto leading-relaxed">
              To redefine recruitment by blending smart technology, global sourcing, and human insight — delivering better matches, faster turnarounds, and long-term value for both employers and candidates.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6">
              What Makes Us Different?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-Powered Job Matching */}
            <div className="bg-[#f7fafc] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#39608f] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">AI-Powered Job Matching</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Our intelligent matching system pairs candidates with roles based on skills, experience, and cultural fit — improving quality and speed of hiring.
              </p>
            </div>

            {/* Remote-First Recruitment */}
            <div className="bg-[#f7fafc] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#38a169] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Remote-First Recruitment Expertise</h3>
              <p className="text-[#4a5568] leading-relaxed">
                We've perfected the art of hiring across time zones, making global team-building seamless for U.S. companies.
              </p>
            </div>

            {/* Fast Turnarounds */}
            <div className="bg-[#f7fafc] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#4299e1] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Fast Turnarounds with Quality Hires</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Need to scale quickly? Our streamlined processes ensure you get the right hire in days, not weeks.
              </p>
            </div>

            {/* Transparent Pricing */}
            <div className="bg-[#f7fafc] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#ed8936] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Transparent Pricing and Scalable Plans</h3>
              <p className="text-[#4a5568] leading-relaxed">
                No hidden fees, no surprises — just flexible options designed to grow with your business.
              </p>
            </div>

            {/* Pre-Vetted Talent */}
            <div className="bg-[#f7fafc] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 lg:col-span-2">
              <div className="w-16 h-16 bg-[#9f7aea] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Pre-Vetted Global Talent Pool</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Every candidate we present is screened, skill-tested, and ready to contribute from day one — whether remote or on-site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Submission Section */}
      <section className="py-20 bg-[#39608f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-[#d3e4ff] mb-8 max-w-2xl mx-auto">
            Drop your resume and we'll reach out when something perfect comes up.
          </p>
          <button className="bg-white hover:bg-gray-100 text-[#39608f] px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-flex items-center">
            <Mail className="mr-2" size={20} />
            📨 Submit Resume Form
          </button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-[#4a5568] max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1a365d] mb-3">
                    The Art of Remote Collaboration
                  </h3>
                  <p className="text-[#4a5568] mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className="text-[#39608f] font-semibold hover:text-[#2d4a6f] transition-colors duration-200">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-[#39608f] hover:bg-[#2d4a6f] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              See All
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-200 group"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-[#1a365d] group-hover:text-[#39608f] transition-colors duration-200">{faq.question}</span>
                  <div className={`transform transition-all duration-300 ${openFaq === index ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`}>
                    <ChevronDown className="text-[#39608f] transition-colors duration-200 group-hover:text-[#2d4a6f]" size={20} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFaq === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 py-4 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50">
                    <div className={`transform transition-all duration-500 delay-100 ${
                      openFaq === index 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-4 opacity-0'
                    }`}>
                      <p className="text-[#4a5568] leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
          <p className="text-[#d3e4ff] mt-8">
            We're here to help—reach out anytime for quick answers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
