import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  navItems: { name: string; href: string }[];
  selectedProject: any;
  setSelectedProject: (project: any) => void;
  scrollToSection: (href: string) => void;
  backToProjects: () => void;
  
}

const Header: React.FC<HeaderProps> = ({
  navItems,
  selectedProject,
  scrollToSection,
  backToProjects,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Scroll hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  return (
    <header
      style={{ '--header-height': '4rem' } as React.CSSProperties }
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/95 backdrop-blur-md border-b border-neon-teal/20' : 'bg-transparent'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => {
              backToProjects(); // if you want clicking logo always goes home/projects
              scrollToSection('#hero');
            }}
            className="flex items-center space-x-2 group"
          >
          
            
            <img
              src="/assets/logos/sb.png"
              alt="Logo"
              className="w-[80px]  object-contain rounded-lg shadow-lg"
              style={{ minWidth: '2rem', minHeight: '2rem' }}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {selectedProject ? (
              <button
                onClick={() => {
              backToProjects(); // if you want clicking logo always goes home/projects
              scrollToSection('#projects');
            }}
                className="flex items-center space-x-2 text-neon-teal hover:text-white transition-colors duration-200 mb-0 group text-sm lg:text-base"
              >
                <div className="w-6 h-6 bg-dark-700 rounded-full flex items-center justify-center group-hover:bg-neon-teal transition-colors duration-200 border border-neon-teal/30">
                  <ArrowLeft className="w-3 h-3" />
                </div>
                <span className="font-medium">Back to Home</span>
              </button>
            ) : (
              navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-neon-teal transition-colors duration-200 relative group text-sm lg:text-base"
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-teal to-neon-purple group-hover:w-full transition-all duration-300"></div>
                </button>
              ))
            )}

            {/* Resume button */}
            {!selectedProject && (
              <a
                href="https://drive.google.com/uc?export=download&id=1G3zdadzH-W5QHgzXGUuBOR-ho8mKWgBz"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-neon-teal to-neon-purple text-white px-3 lg:px-4 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 neon-glow energy-ripple text-sm"
                download
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center text-gray-300 hover:text-neon-teal transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="py-4 space-y-4 bg-dark-800/95 backdrop-blur-md rounded-lg mt-2 border border-neon-teal/20 mx-4">
            {selectedProject ? (
              <button
                onClick={backToProjects}
                className="flex items-center space-x-2 text-neon-teal hover:text-white transition-colors duration-200 mb-0 group text-sm"
              >
                <div className="w-6 h-6 bg-dark-700 rounded-full flex items-center justify-center group-hover:bg-neon-teal transition-colors duration-200 border border-neon-teal/30">
                  <ArrowLeft className="w-3 h-3" />
                </div>
                <span className="font-medium">Back to Home</span>
              </button>
            ) : (
              <>
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.href);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left text-gray-300 hover:text-neon-teal transition-colors duration-200 py-2 px-4"
                  >
                    {item.name}
                  </button>
                ))}

                {/* <a
                  href="https://drive.google.com/uc?export=download&id=1ODuPBq0MfwIxYde5Gj_1XdKOaKke-iXj"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-neon-teal to-neon-purple text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 neon-glow text-sm"
                  download
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </a> */}
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
