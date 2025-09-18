import React, { useState } from 'react';
import { Heart, Coffee, Gamepad2, Music, Book, Star, Cpu, Zap } from 'lucide-react';

const About = () => {
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);

  const tooltips = [
    {
      id: 'location',
      icon: <Star className="w-5 h-5" />,
      label: 'Home Base',
      content: 'Gandhinagar, Gujarat 🇮🇳',
      color: 'from-neon-yellow to-neon-coral'
    },
    {
      id: 'fuel',
      icon: <Coffee className="w-5 h-5" />,
      label: 'Coding Fuel',
      content: 'Chai & late night coding',
      color: 'from-neon-teal to-green-400'
    },
    {
      id: 'passion',
      icon: <Cpu className="w-5 h-5" />,
      label: 'Current Focus',
      content: 'AI for Manufacturing',
      color: 'from-neon-purple to-pink-500'
    },
    {
      id: 'robotics',
      icon: <Zap className="w-5 h-5" />,
      label: 'Robot Dreams',
      content: 'Gesture-controlled systems',
      color: 'from-blue-400 to-neon-teal'
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Story Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 doodle-font">
                My Robotic{' '}
                <span className="bg-gradient-to-r from-neon-teal to-neon-purple bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-neon-teal to-neon-purple rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Hey there! I'm a BTech student from Gandhinagar, Gujarat, with a passion for AI and robotics. 
                My journey began with curiosity about how machines can think and move, and now I'm building 
                intelligent systems that solve real-world problems.
              </p>
              
              <p>
                From creating AI-powered defect detection systems to controlling robots with hand gestures, 
                I love exploring the intersection of artificial intelligence and robotics. When I'm not coding, 
                you'll find me working on Arduino projects or analyzing data to uncover insights.
              </p>
              
              <p>
                Currently pursuing my BTech while gaining hands-on experience through virtual programs 
                and real projects. My goal is to develop AI systems that make manufacturing smarter 
                and robotics more accessible to everyone.
              </p>
            </div>

            {/* Personality Tooltips */}
            {/* <div className="pt-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 text-neon-teal mr-2" />
                Fun facts about me ✨
              </h3>
              <div className="flex flex-wrap gap-3">
                {tooltips.map((tooltip) => (
                  <div
                    key={tooltip.id}
                    className="relative"
                    onMouseEnter={() => setHoveredTooltip(tooltip.id)}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    <button className={`flex items-center space-x-2 bg-gradient-to-r ${tooltip.color} text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 energy-ripple`}>
                      {tooltip.icon}
                      <span className="text-sm">{tooltip.label}</span>
                    </button>
                    
                    {hoveredTooltip === tooltip.id && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-dark-800 text-white text-sm rounded-lg whitespace-nowrap animate-fade-in border border-neon-teal/30">
                        {tooltip.content}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-dark-800"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Right: Doodle Artwork */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-gradient-to-br from-dark-800 to-dark-700 rounded-3xl p-8 shadow-lg border border-neon-teal/20">
              {/* Frame effect */}
              <div className="absolute inset-4 border-2 border-dashed border-neon-purple/30 rounded-2xl"></div>
              
              {/* Artwork placeholder */}
              <div className="relative z-10 space-y-6">
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 doodle-font">My Doodle Lab</h3>
                  
                  {/* Doodle grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-dark-900 rounded-xl p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow duration-200 border border-neon-teal/20 robot-card">
                      <div className="text-4xl mb-2">🤖</div>
                      <p className="text-sm text-gray-300">Robot Design</p>
                    </div>
                    <div className="bg-dark-900 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200 border border-neon-purple/20 robot-card">
                      <div className="text-4xl mb-2">⚡</div>
                      <p className="text-sm text-gray-300">AI Magic</p>
                    </div>
                    <div className="bg-dark-900 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200 border border-neon-coral/20 robot-card">
                      <div className="text-4xl mb-2">🚀</div>
                      <p className="text-sm text-gray-300">Future Tech</p>
                    </div>
                    <div className="bg-dark-900 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200 border border-neon-yellow/20 robot-card">
                      <div className="text-4xl mb-2">✨</div>
                      <p className="text-sm text-gray-300">Creative Code</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-neon-teal to-neon-purple rounded-full animate-pulse neon-glow"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-neon-coral to-neon-yellow rounded-full animate-pulse neon-glow-coral" style={{ animationDelay: '1s' }}></div>
              
              {/* Circuit decoration */}
              <svg className="absolute top-0 right-0 w-16 h-16 text-neon-purple/20" viewBox="0 0 64 64">
                <path
                  d="M8,8 L56,8 L56,32 L32,32 L32,56 L8,56 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="3,3"
                  className="animate-circuit-flow"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;