import { useEffect, useState } from 'react';
import { ChevronDown, Zap, Code } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
  <section
        id="hero"
  className="min-h-screen flex items-center justify-center relative overflow-hidden "
        style={{ paddingTop: 'calc(var(--header-height, 4rem) + 1.5rem)' }}
      >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circuit patterns */}
        <svg className="absolute top-20 left-10 w-32 h-32 text-neon-teal/20" viewBox="0 0 100 100">
          <path
            d="M10,10 L90,10 L90,50 L50,50 L50,90 L10,90 Z"
            fill="none"
      
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-circuit-flow"
          />
        </svg>
        <svg className="absolute bottom-20 right-10 w-24 h-24 text-neon-purple/20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" className="animate-circuit-flow" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2,2" className="animate-circuit-flow" style={{ animationDelay: '1s' }} />
        </svg>
        {/* Floating tech icons */}
        <div className="absolute top-1/4 left-1/4 text-neon-teal/30 animate-robot-float">
          <Code className="w-8 h-8" />
        </div>
        <div className="absolute top-1/3 right-1/4 text-neon-purple/30 animate-robot-float" style={{ animationDelay: '1s' }}>
          <Zap className="w-6 h-6" />
        </div>
        {/* <div className="absolute bottom-1/3 left-1/3 text-neon-coral/30 animate-robot-float" style={{ animationDelay: '2s' }}>
          <Zap className="w-7 h-7" />
        </div> */}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}> 
            <div className="text-left">
              <div className="mb-4">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300">
                  Hello, I'm
                </span>
              </div>
              <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6  doodle-font">
                <span className="bg-gradient-to-r from-neon-teal to-neon-purple bg-clip-text text-transparent block">
                  Siddhesh Suthar
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6 font-light">
                Robotics Engineer
                <span className="ml-2 text-sm align-top text-base italic font-mono text-neon-teal ">
                  (B.E. Final Year)
                </span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto lg:mx-0">
              Learning and building intelligent systems using AI, Automation, and Machine Vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-neon-teal to-neon-purple text-white px-6 py-2 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 neon-glow energy-ripple"
                >
                  Explore My Work
                </button>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-neon-teal text-neon-teal px-6 py-2 rounded-full font-semibold hover:bg-transperent hover:text-dark-900 transition-all duration-200 energy-ripple"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
          {/* Right: Robot Mascot - Responsive */}
          <div
            className={`flex justify-center items-center w-full h-full transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} lg:static mt-8 lg:mt-0`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative flex justify-center items-center w-full h-full min-h-[200px]">
              <img
                src="/assets/hero/heroMascot.png"
                alt="Robot Mascot"
                className="pointer-events-none transition-transform duration-500 ease-in-out hover:scale-105 animate-robot-float
                  w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-[300px] xl:h-[300px] object-contain"
                style={{
                  filter: "drop-shadow(0 0 6px #403d46ff)",
                  maxWidth: '100%',
                  height: 'auto',
                  position: 'static',
                  left: undefined,
                  top: undefined,
                  transform: undefined,
                }}
              />
            </div>
          </div>

        </div>
      </div>
      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="hidden sm:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-neon-teal transition-colors duration-200 animate-bounce"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </button>
      
    </section>
  );
};

export default Hero;