
import React, { useEffect, useState } from 'react';
import { ChevronDown, Zap, Code, Bot } from 'lucide-react';

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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circuit patterns */}
        <svg className="absolute top-20 left-10 w-32 h-32 text-neon-teal/20" viewBox="0 0 100 100">
          <path
            d="M10,10 L90,10 L90,50 L50,50 L50,90 L10,90 Z"
            fill="none"
            stroke="currentColor"
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
          <Bot className="w-6 h-6" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-neon-coral/30 animate-robot-float" style={{ animationDelay: '2s' }}>
          <Zap className="w-7 h-7" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="mb-6">
              {/* <span className="inline-block bg-gradient-to-r from-neon-teal to-neon-purple text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse-neon">
                🤖 Building the Future
              </span> */}
            </div>
            <div className="text-left">
              <div className="mb-4">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300">
                  Hello, I'm
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight doodle-font">
                <span className="bg-gradient-to-r from-neon-teal to-neon-purple bg-clip-text text-transparent block">
                  John Doe
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6 font-light">
                AI + Robotics | Python Developer
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto lg:mx-0">
                Building intelligent systems with AI, robotics, and data analytics. From gesture-controlled robots to defect detection systems ⚡
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-neon-teal to-neon-purple text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 neon-glow energy-ripple"
                >
                  Explore My Work
                </button>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-neon-teal text-neon-teal px-8 py-3 rounded-full font-semibold hover:bg-neon-teal hover:text-dark-900 transition-all duration-200 energy-ripple"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
          {/* Right: Robot Mascot */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative animate-robot-float">
                {/* Background stock photo */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-20">
                  <img
                    src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Robotics background"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Robot body */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-700 to-dark-800 rounded-3xl transform rotate-6 border-2 border-neon-teal/30"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-dark-600 to-dark-700 rounded-2xl flex flex-col items-center justify-center border border-neon-purple/30">
                  {/* Robot face */}
                  <div className="mb-4">
                    <div className="flex space-x-4 mb-2">
                      <div className="w-4 h-4 bg-neon-teal rounded-full animate-pulse"></div>
                      <div className="w-4 h-4 bg-neon-coral rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    <div className="w-8 h-2 bg-neon-purple rounded-full"></div>
                  </div>
                  {/* Robot chest display */}
                  <div className="w-16 h-12 bg-dark-900 rounded-lg border border-neon-teal/50 flex items-center justify-center mb-4">
                    <div className="text-neon-teal text-xs font-mono">{'</>'}  </div>
                  </div>
                  {/* Robot arms */}
                  <div className="flex justify-between w-full px-2">
                    <div className="w-2 h-8 bg-gradient-to-b from-neon-teal to-transparent rounded-full"></div>
                    <div className="w-2 h-8 bg-gradient-to-b from-neon-purple to-transparent rounded-full"></div>
                  </div>
                </div>
                {/* Floating elements around robot */}
                <div className="absolute -top-4 -right-4 bg-neon-yellow w-12 h-12 rounded-full flex items-center justify-center animate-bounce neon-glow">
                  <span className="text-xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-neon-coral w-12 h-12 rounded-full flex items-center justify-center animate-bounce neon-glow-coral" style={{ animationDelay: '0.5s' }}>
                  <span className="text-xl">🤖</span>
                </div>
                {/* Circuit connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 320">
                  <path
                    d="M50,50 Q160,20 270,50 Q290,160 270,270 Q160,300 50,270 Q30,160 50,50"
                    fill="none"
                    stroke="url(#circuitGradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-circuit-flow"
                  />
                  <defs>
                    <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-neon-teal transition-colors duration-200 animate-bounce"
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