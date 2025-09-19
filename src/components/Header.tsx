import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Cpu } from 'lucide-react';

interface HeaderProps {
  onNavigate: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      // Hide/show navbar based on scroll direction
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

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/95 backdrop-blur-md border-b border-neon-teal/20' : 'bg-transparent'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => {
              onNavigate();
              scrollToSection('#hero');
            }}
            className="flex items-center space-x-2 group"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-neon-teal to-neon-purple rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-200 neon-glow">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-neon-teal to-neon-purple bg-clip-text text-transparent doodle-font">
              Learn · Built · Automate
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-neon-teal transition-colors duration-200 relative group text-sm lg:text-base"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-teal to-neon-purple group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
            
            <a
              href="https://drive.google.com/uc?export=download&id=1ODuPBq0MfwIxYde5Gj_1XdKOaKke-iXj"
              
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-neon-teal to-neon-purple text-white px-3 lg:px-4 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 neon-glow energy-ripple text-sm"
              download
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
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
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-300 hover:text-neon-teal transition-colors duration-200 py-2 px-4"
              >
                {item.name}
              </button>
            ))}
            <div className="px-4">
              <a
                href="https://drive.google.com/uc?export=download&id=1ODuPBq0MfwIxYde5Gj_1XdKOaKke-iXj"
                
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-neon-teal to-neon-purple text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 neon-glow text-sm"
                download
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;