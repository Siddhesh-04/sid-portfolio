import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Code, Palette, Cpu, Zap } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  demo?: string;
  github?: string;
  featured?: boolean;
  details?: {
    role: string;
    challenges: string[];
    gallery: string[];
  };
}

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = ['All', 'Web Apps', 'Robotics Sims', 'UI Design'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Transistor Defect Inspector',
      description: 'AI-powered quality control system with real-time defect detection and PDF reporting capabilities.',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Apps',
      tags: ['Python', 'Streamlit', 'TensorFlow Lite', 'OpenCV'],
      demo: '#',
      github: '#',
      featured: true,
      details: {
        role: 'AI Developer & System Designer',
        challenges: ['Real-time defect detection', 'Model optimization for edge deployment', 'User-friendly interface design'],
        gallery: [
          'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800'
        ]
      }
    },
    {
      id: 2,
      title: 'Gesture-Controlled UR5e Robot',
      description: 'Hand gesture recognition system controlling industrial robot in Webots simulator using Mediapipe.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Robotics Sims',
      tags: ['Python', 'Mediapipe', 'Webots', 'Computer Vision'],
      demo: '#',
      github: '#',
      featured: true,
      details: {
        role: 'Robotics Developer',
        challenges: ['Real-time gesture recognition', 'Robot control integration', 'Simulation accuracy'],
        gallery: [
          'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800'
        ]
      }
    },
    {
      id: 3,
      title: 'Healthcare Analytics Dashboard',
      description: 'Interactive Tableau dashboard analyzing healthcare KPIs including patient metrics, revenue, and departmental performance.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Apps',
      tags: ['Tableau', 'Data Analytics', 'Healthcare', 'KPI Visualization'],
      demo: '#',
      github: '#',
      details: {
        role: 'Data Analyst',
        challenges: ['Complex data relationships', 'Interactive dashboard design', 'Performance optimization'],
        gallery: [
          'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
        ]
      }
    },
    {
      id: 4,
      title: 'Mini Robotic Arm with ML Control',
      description: 'Arduino-based robotic arm with gesture and voice control integration using machine learning algorithms.',
      image: 'https://images.pexels.com/photos/7130544/pexels-photo-7130544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Robotics Sims',
      tags: ['Arduino', 'Machine Learning', 'Voice Control', 'Servo Motors'],
      demo: '#',
      github: '#',
      details: {
        role: 'Embedded Systems Developer',
        challenges: ['ML model deployment on Arduino', 'Real-time control systems', 'Multi-modal input processing'],
        gallery: [
          'https://images.pexels.com/photos/7130544/pexels-photo-7130544.jpeg?auto=compress&cs=tinysrgb&w=800'
        ]
      }
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Apps': return <Code className="w-4 h-4" />;
      case 'UI Design': return <Palette className="w-4 h-4" />;
      case 'Robotics Sims': return <Cpu className="w-4 h-4" />;
      default: return <Filter className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 doodle-font">
            Featured{' '}
            <span className="bg-gradient-to-r from-neon-teal to-neon-purple bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            A collection of robotics simulations, AI experiments, and futuristic interfaces 
            that showcase the intersection of technology and creativity.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-teal to-neon-purple rounded-full mx-auto mt-6"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 energy-ripple ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-neon-teal to-neon-purple text-white shadow-lg neon-glow'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-neon-teal border border-neon-teal/20'
              } text-sm sm:text-base`}
            >
              {getCategoryIcon(category)}
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-0">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-dark-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-neon-teal/20 robot-card cursor-pointer ${
                project.featured ? 'ring-2 ring-neon-teal/30' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => onProjectClick(project)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-neon-teal to-neon-purple text-white px-3 py-1 rounded-full text-xs font-semibold z-10 neon-glow">
                  Featured ⭐
                </div>
              )}
              
              {/* Project Image */}
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-60'
                }`}></div>
                
                {/* Hover Actions */}
                <div className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
                  hoveredProject === project.id ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                }`}>
                  {project.demo && (
                    <a
                      href={project.demo}
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 bg-dark-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-neon-teal transition-colors duration-200 border border-neon-teal/30"
                      aria-label="View demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 bg-dark-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-neon-purple transition-colors duration-200 border border-neon-purple/30"
                      aria-label="View code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
                
                {/* Click indicator */}
                <div className={`absolute bottom-4 right-4 transition-all duration-300 ${
                  hoveredProject === project.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <div className="bg-neon-teal/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-neon-teal border border-neon-teal/30">
                    Click to explore
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-neon-teal font-semibold bg-neon-teal/10 px-2 py-1 rounded-full border border-neon-teal/30">
                    {project.category}
                  </span>
                  <Zap className="w-4 h-4 text-neon-yellow" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-neon-teal transition-colors duration-200 doodle-font">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-dark-800 text-gray-400 px-2 py-1 rounded-md border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-neon-teal to-neon-purple text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 neon-glow energy-ripple">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;