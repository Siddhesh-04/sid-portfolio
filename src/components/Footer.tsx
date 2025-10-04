import React from 'react';
import { Heart, Bot, Cpu, Code, Aperture } from 'lucide-react'; 

interface FooterProps {
  minimal?: boolean; 
}

const Footer: React.FC<FooterProps> = ({ minimal }) => {
  return (
    <footer
  className={`bg-dark-900 text-white ${minimal ? 'py-5' : 'py-12'} ${
    minimal ? '' : 'border-t border-neon-teal/20'
  }`}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!minimal && (
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                {/* <Cog className="w-4 h-4 text-neon-yellow" /> */}
                <img src="/assets/logos/logo-1.png" alt="Logo" className="8-full h-8 object-contain" />
                <span className="text-xl font-bold bg-gradient-to-r from-neon-teal to-neon-purple bg-clip-text text-transparent doodle-font">
                  Learn · Build · Automate
                </span>
              </div>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                Learning & Experimenting with Artificial Intelligence, Machine Vision & Robotics.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-xs sm:text-sm">Currently working on:</span>
                <span className="text-sm bg-dark-800 px-2 py-1 rounded-full border border-neon-teal/30">
                  Path Planning Algorithms
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 doodle-font">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Projects', 'Skills', 'Resume', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() =>
                        document
                          .querySelector(`#${item.toLowerCase().replace(' ', '')}`)
                          ?.scrollIntoView({ behavior: 'smooth' })
                      }
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
                  <Aperture className="w-4 h-4 text-neon-coral" />
                  <span className="text-sm">Computer Vision</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Code className="w-4 h-4 text-neon-yellow" />
                  <span className="text-sm">Python Development</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Bar (Always Show) */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center">
            © 2025 Siddhesh Suthar. Made with{' '}
            <Heart className="w-4 h-4 inline text-neon-coral mx-1" /> and lots of Tea.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span className="hidden sm:inline">Powered by:</span>
              <span className="bg-dark-800 px-2 py-1 rounded text-xs border border-neon-teal/30 hover:border-neon-teal/80"><a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a></span>
              <span className="bg-dark-800 px-2 py-1 rounded text-xs border border-neon-purple/30 hover:border-neon-purple/80"><a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a></span>
              <span className="bg-dark-800 px-2 py-1 rounded text-xs border border-neon-coral/30 hover:border-neon-coral/80">
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a>
              </span>
            </div>
          </div>
        </div>

        {/* Robot Mascot Wave */}
        <div className="text-center mt-8">
          <div className="inline-block animate-robot-float">
            <Bot className="w-4 h-4 inline text-neon-teal animate-pulse" />
          </div>
          <p className="text-gray-400 text-sm mt-2">Thanks for visiting!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
