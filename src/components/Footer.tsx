import React from 'react';
import { Heart, Code, Camera, Bot, Zap, Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-white py-12 border-t border-neon-teal/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-teal to-neon-purple rounded-lg flex items-center justify-center neon-glow">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-neon-teal to-neon-purple bg-clip-text text-transparent doodle-font">
                Learn · Built · Automate
              </span>
            </div>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Learning & Experimenting with Robotics, Machine Vision & Artificial Intelligence
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="text-xs sm:text-sm">Currently working on:</span>
              <span className="text-sm bg-dark-800 px-2 py-1 rounded-full border border-neon-teal/30">Computer Vision in Robotics 🏭</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 doodle-font">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Robotics Lab', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.querySelector(`#${item.toLowerCase().replace(' ', '')}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-neon-teal transition-colors duration-200 flex items-center space-x-2"
                  >
                    <div className="w-1 h-1 bg-neon-teal rounded-full flex-shrink-0"></div>
                    <span>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Focus */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 doodle-font">Tech Focus</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Bot className="w-4 h-4 text-neon-teal" />
                <span className="text-sm">AI & Machine Learning</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Cpu className="w-4 h-4 text-neon-purple" />
                <span className="text-sm">Robotics</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Camera className="w-4 h-4 text-neon-coral" />
                <span className="text-sm">Machine Vision</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Code className="w-4 h-4 text-neon-yellow" />
                <span className="text-sm">Python Development</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center">
            © 2025 Siddhesh Suthar. Made with{' '}
            <Heart className="w-4 h-4 inline text-neon-coral mx-1" />{' '}
            and lots of Tea.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span className="hidden sm:inline">Powered by:</span>
              <span className="bg-dark-800 px-2 py-1 rounded text-xs border border-neon-teal/30">React</span>
              <span className="bg-dark-800 px-2 py-1 rounded text-xs border border-neon-purple/30">Bolt</span>
              <span className="bg-dark-800 px-2 py-1 rounded text-xs border border-neon-coral/30">Netlify</span>
            </div>
          </div>
        </div>

        {/* Robot Mascot Wave */}
        <div className="text-center mt-8">
          <div className="inline-block animate-robot-float">
            <Bot className="w-4 h-4 inline text-neon-teal animate-pulse" />
            {/* <span className="text-3xl sm:text-4xl">🤖</span> */}
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Thanks for visiting!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;