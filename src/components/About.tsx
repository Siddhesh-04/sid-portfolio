import React, { useState } from 'react';
import { Heart, Coffee, Gamepad2, Music, Book, Star, Cpu, Zap } from 'lucide-react';

const About = () => {

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Story Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 doodle-font">
                About{' '}
                <span className="bg-gradient-to-r from-neon-teal to-neon-purple bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-neon-teal to-neon-purple rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                I am a final-year Robotics and Automation Engineering student, passionate about exploring the crossroads of Robotics, AI, and real-world automation. My journey began with a Diploma in Computer Engineering, which built my technical foundation and inspired me to pursue projects in robotics and Intelligent Systems.
              </p>
              <p>
                I enjoy designing and optimizing intelligent systems that bridge the digital and physical worlds. Beyond academics, I believe in constant learning — not only from books but also through hands-on projects, meaningful conversations, and travel that broadens my perspective.
              </p>
            </div>

        
          </div>

          {/* Right: Doodle Artwork */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-gradient-to-br from-dark-800 to-dark-700 rounded-3xl p-8 shadow-lg ">
              {/* Person image with static and animated circuit border, plus floating neon elements */}
              <div className="relative z-10 flex items-center justify-center min-h-[220px] sm:min-h-[260px]">
                <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-dark-800 to-dark-700 flex items-center justify-center">
                  
                  <img
                    src="./src/assets/sid-img1.png"
                    alt="Sid"
                    className="relative z-20 h-full max-h-full w-auto drop-shadow-lg ml-0 "
                    style={{ background: 'linear-gradient(100deg, #18181b 80%, #8b5cf6 100%)', display: 'block', marginTop: '42px' ,borderRadius: '12px'}}
                    // style={{ background: 'linear-gradient(135deg, #18181b 80%, #8b5cf6 100%)', display: 'block', marginTop: '32px' }}
                  />
                  
                </div>
              </div>
              
              {/* {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-neon-teal to-neon-purple rounded-full animate-pulse neon-glow"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-neon-coral to-neon-yellow rounded-full animate-pulse neon-glow-coral" style={{ animationDelay: '3s' }}></div>
              
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;