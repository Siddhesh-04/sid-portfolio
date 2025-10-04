import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import Seo from './components/Seo';

function App() {
  // Scroll top button
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Selected project state
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Open project details
  const openProjectDetails = (project: any) => setSelectedProject(project);

  // Back to projects
  const backToProjects = () => {
    setSelectedProject(null);
    scrollToSection('#projects');
  };

  // Nav items
  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-dark-900 holographic-grid">
      <Seo
        title="Portfolio | Siddhesh Suthar"
        description="Portfolio of Siddhesh Suthar – A final-year Robotics & Automation Engineering Student, Gujarat, India"
        keywords="Siddhesh Suthar,Siddhesh Portfolio,,Siddhesh-04, siddhesh-suthar, Robotics Portfolio, AI Portfolio, Automation, Machine Vision, Embedded Systems, Gujarat, India, Student, Engineer, Projects, Resume, Portfolio, SiddheshResume, Government Engineering College Gandhinagar, GEC Gandhinagar, Siddhesh Gec"
        image="/assets/og-image.png"
        twitterImage="/assets/twitter-card.png"
      />
      {/* Header */}
      <Header
        navItems={navItems}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        scrollToSection={scrollToSection}
        backToProjects={backToProjects}
      />

      {/* Main content */}
      {selectedProject ? (
        <ProjectDetails project={selectedProject} onBack={backToProjects} />
      ) : (
        <main>
          <Hero />
          <About />
          <div id="projects">
            <Projects onProjectClick={openProjectDetails} />
          </div>
          <Skills />
          <Resume />
          <Contact />
        </main>
      )}

      <Footer minimal={!!selectedProject} />

      {/* Scroll-to-top button */}
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
