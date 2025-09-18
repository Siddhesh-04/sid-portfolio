import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import RoboticsLab from './components/RoboticsLab';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openProjectDetails = (project: any) => {
    setSelectedProject(project);
    setCurrentPage('project-details');
  };

  const goHome = () => {
    setCurrentPage('home');
    setSelectedProject(null);
  };

  if (currentPage === 'project-details' && selectedProject) {
    return (
      <div className="min-h-screen bg-dark-900 holographic-grid">
        <Header onNavigate={goHome} />
        <ProjectDetails project={selectedProject} onBack={goHome} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 holographic-grid">
      <Header onNavigate={goHome} />
      <main>
        <Hero />
        <About />
        <Projects onProjectClick={openProjectDetails} />
        {/* <RoboticsLab /> */}
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-neon-teal to-neon-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 neon-glow energy-ripple ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 mx-auto" />
      </button>
    </div>
  );
}

export default App;