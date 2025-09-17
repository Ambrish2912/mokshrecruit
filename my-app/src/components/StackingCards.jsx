import React, { useEffect, useRef } from "react";

const cardsData = [
  {
    title: "Find the Right People for Your Team",
    text: "We help businesses scale fast with highly-skilled professionals — vetted, verified, and ready to work. From tech and design to operations and marketing, we bring the talent you need to win.",
    gradient: "from-[#39608f] to-[#2d4a6f]",
    buttonColor: "bg-[#39608f] hover:bg-[#2d4a6f]"
  },
  {
    title: "Launch Your Career with the Right Opportunity", 
    text: "Looking for the perfect role? Our recruiters will guide you to jobs that align with your skills, goals, and lifestyle — whether full-time, remote, or freelance.",
    gradient: "from-[#4299e1] to-[#3182ce]",
    buttonColor: "bg-[#4299e1] hover:bg-[#3182ce]"
  },
  {
    title: "Your Success, Our Priority",
    text: "From the first conversation to final delivery, we stay by your side. With dedicated support and tailored solutions, we make sure you achieve your goals — faster and smarter.",
    gradient: "from-[#d3e4ff] to-[#e8f2ff]",
    buttonColor: "bg-[#39608f] hover:bg-[#2d4a6f]",
    textColor: "text-[#1a365d]"
  },
];

const StackingCards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".stack-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target;
          if (entry.isIntersecting) {
            card.classList.add("active");
          } else {
            card.classList.remove("active");
          }
        });
      },
      { threshold: 0.5 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto py-32">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1a365d] mb-6">
            Why Choose <span className="text-[#39608f]">Moksh Recruit</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Scroll down to see our key advantages.
          </p>
          <div className="flex justify-center">
            <div className="scroll-indicator animate-bounce">
              <svg className="w-8 h-8 text-[#39608f] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        <div ref={containerRef} className="relative space-y-32">
          {cardsData.map((card, idx) => (
            <div
              key={idx}
              className={`stack-card sticky top-24 transform transition-all duration-700 ease-out will-change-transform bg-gradient-to-br ${card.gradient} rounded-3xl overflow-hidden shadow-2xl`}
              style={{ zIndex: idx + 1 }}
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 min-h-[500px] ${idx === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                {/* Content side */}
                <div className={`p-8 md:p-12 flex flex-col justify-center ${idx === 1 ? 'md:order-2' : ''}`}>
                  <h2 className={`text-3xl md:text-4xl font-bold mb-6 leading-tight ${card.textColor || 'text-white'}`}>
                    {card.title}
                  </h2>
                  <p className={`text-lg mb-8 leading-relaxed ${card.textColor ? 'text-gray-600' : 'text-white'}`}>
                    {card.text}
                  </p>
                  <button
                    className={`${card.buttonColor} ${card.textColor ? 'text-white' : 'bg-white text-gray-800 hover:bg-gray-100'} px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 inline-block w-fit`}
                  >
                    Learn More
                  </button>
                </div>
                
                {/* Image/Icon side */}
                <div className={`relative ${idx === 1 ? 'md:order-1' : ''}`}>
                  <div className="h-full flex items-center justify-center p-8 md:p-12">
                    {idx === 0 ? (
                      <div className="w-full h-80 rounded-2xl relative overflow-hidden find-people-animation">
                        <img 
                          src="/Find.jpg" 
                          alt="Find the Right People for Your Team" 
                          className="w-full h-full object-cover rounded-2xl"
                          onError={(e) => {
                            e.target.style.backgroundColor = '#f3f4f6';
                            e.target.style.display = 'flex';
                            e.target.style.alignItems = 'center';
                            e.target.style.justifyContent = 'center';
                            e.target.innerHTML = '<div style="color: #6b7280; font-size: 14px;">Image not found</div>';
                          }}
                        />
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="scanning-line absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                        </div>
                      </div>
                    ) : idx === 1 ? (
                      <div className="w-full h-80 rounded-2xl overflow-hidden relative launch-career-animation">
                        <img 
                          src="/Launch.jpg" 
                          alt="Launch Your Career with the Right Opportunity" 
                          className="w-full h-full object-cover rounded-2xl"
                          onError={(e) => {
                            e.target.style.backgroundColor = '#f3f4f6';
                            e.target.style.display = 'flex';
                            e.target.style.alignItems = 'center';
                            e.target.style.justifyContent = 'center';
                            e.target.innerHTML = '<div style="color: #6b7280; font-size: 14px;">Launch.jpg not found</div>';
                          }}
                        />
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="rocket-trail absolute bottom-4 left-4 w-1 h-12 bg-gradient-to-t from-orange-400 via-yellow-400 to-transparent opacity-80"></div>
                          <div className="rocket absolute bottom-16 left-3 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          </div>
                          <div className="career-path absolute top-4 right-4 w-16 h-16 border-2 border-dashed border-green-400 rounded-full opacity-60"></div>
                          <div className="career-path absolute top-8 right-8 w-8 h-8 border-2 border-dashed border-blue-400 rounded-full opacity-80"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-80 rounded-2xl overflow-hidden relative success-priority-animation">
                        <img 
                          src="/Your.png" 
                          alt="Your Success, Our Priority" 
                          className="w-full h-full object-cover rounded-2xl"
                          onError={(e) => {
                            e.target.style.backgroundColor = '#f3f4f6';
                            e.target.style.display = 'flex';
                            e.target.style.alignItems = 'center';
                            e.target.style.justifyContent = 'center';
                            e.target.innerHTML = '<div style="color: #6b7280; font-size: 14px;">Your.png not found</div>';
                          }}
                        />
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="success-star absolute top-6 right-6 w-6 h-6 text-yellow-400">
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          </div>
                          <div className="priority-badge absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            #1 Priority
                          </div>
                          <div className="success-checkmark absolute bottom-6 right-6 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                          <div className="progress-bar absolute bottom-4 left-4 right-4 h-2 bg-white/30 rounded-full overflow-hidden">
                            <div className="progress-fill h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .stack-card {
          transform: translateY(0px);
          opacity: 1;
        }
        .stack-card.active {
          transform: translateY(0px);
          opacity: 1;
        }
        
        @keyframes scanning {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(320px);
            opacity: 0;
          }
        }
        
        @keyframes rocket-launch {
          0% {
            transform: translateY(20px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(20px);
          }
        }
        
        @keyframes trail-flicker {
          0% {
            opacity: 0.6;
            height: 3rem;
          }
          50% {
            opacity: 1;
            height: 4rem;
          }
          100% {
            opacity: 0.6;
            height: 3rem;
          }
        }
        
        @keyframes career-pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }
        
        .scanning-line {
          animation: scanning 4s linear infinite;
        }
        
        .rocket {
          animation: rocket-launch 3s ease-in-out infinite;
        }
        
        .rocket-trail {
          animation: trail-flicker 2s ease-in-out infinite;
        }
        
        .career-path {
          animation: career-pulse 2.5s ease-in-out infinite;
        }
        
        .career-path:nth-child(4) {
          animation-delay: 0.5s;
        }
        
        @keyframes star-twinkle {
          0% {
            transform: scale(1) rotate(0deg);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(360deg);
            opacity: 0.8;
          }
        }
        
        @keyframes badge-pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }
        
        @keyframes checkmark-bounce {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes progress-fill {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        
        .success-star {
          animation: star-twinkle 3s ease-in-out infinite;
        }
        
        .priority-badge {
          animation: badge-pulse 2s ease-in-out infinite;
        }
        
        .success-checkmark {
          animation: checkmark-bounce 2.5s ease-in-out infinite;
        }
        
        .progress-fill {
          animation: progress-fill 4s ease-out infinite;
        }
        
        @keyframes scroll-bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        .scroll-indicator {
          animation: scroll-bounce 12s infinite;
        }
        
        .scroll-indicator svg {
          filter: drop-shadow(0 2px 4px rgba(57, 96, 143, 0.3));
        }
      `}</style>
    </div>
  );
};

export default StackingCards;
