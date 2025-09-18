import React from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Zap, Target } from 'lucide-react';

interface ProjectDetailsProps {
  project: any;
  onBack: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onBack }) => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-neon-teal hover:text-white transition-colors duration-200 mb-8 group"
        >
          <div className="w-8 h-8 bg-dark-700 rounded-full flex items-center justify-center group-hover:bg-neon-teal transition-colors duration-200 border border-neon-teal/30">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="font-medium">Back to Projects</span>
        </button>

        {/* Project Hero */}
        <div className="bg-dark-800 rounded-3xl overflow-hidden border border-neon-teal/20 mb-12">
          <div className="relative h-96">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
            
            {/* Project Title Overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-gradient-to-r from-neon-teal to-neon-purple text-white px-3 py-1 rounded-full text-sm font-semibold neon-glow">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="bg-neon-yellow text-dark-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured ⭐
                  </span>
                )}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 doodle-font">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <div className="bg-dark-800 rounded-2xl p-8 border border-neon-teal/20">
              <h2 className="text-2xl font-bold text-white mb-6 doodle-font flex items-center">
                <Target className="w-6 h-6 mr-3 text-neon-teal" />
                Project Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  This project represents a significant milestone in my journey as a robotics enthusiast and creative developer. 
                  It showcases the intersection of cutting-edge technology, innovative algorithms, and user-centered design.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Through this work, I explored advanced concepts in artificial intelligence, real-time simulation, 
                  and interactive visualization, pushing the boundaries of what's possible in web-based robotics applications.
                </p>
              </div>
            </div>

            {/* Challenges & Solutions */}
            {project.details?.challenges && (
              <div className="bg-dark-800 rounded-2xl p-8 border border-neon-purple/20">
                <h2 className="text-2xl font-bold text-white mb-6 doodle-font flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-neon-purple" />
                  Challenges & Solutions
                </h2>
                <div className="space-y-4">
                  {project.details.challenges.map((challenge: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-neon-purple to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-300">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {project.details?.gallery && (
              <div className="bg-dark-800 rounded-2xl p-8 border border-neon-coral/20">
                <h2 className="text-2xl font-bold text-white mb-6 doodle-font">
                  Project Gallery
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.details.gallery.map((image: string, index: number) => (
                    <div key={index} className="relative group">
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <div className="bg-dark-800 rounded-2xl p-6 border border-neon-teal/20">
              <h3 className="text-lg font-bold text-white mb-4 doodle-font">Project Info</h3>
              <div className="space-y-4">
                {project.details?.role && (
                  <div className="flex items-start space-x-3">
                    <User className="w-5 h-5 text-neon-teal mt-1" />
                    <div>
                      <p className="text-sm text-gray-400">Role</p>
                      <p className="text-white font-medium">{project.details.role}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-neon-purple mt-1" />
                  <div>
                    <p className="text-sm text-gray-400">Timeline</p>
                    <p className="text-white font-medium">3-4 weeks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-dark-800 rounded-2xl p-6 border border-neon-purple/20">
              <h3 className="text-lg font-bold text-white mb-4 doodle-font">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-dark-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {project.demo && (
                <a
                  href={project.demo}
                  className="w-full bg-gradient-to-r from-neon-teal to-neon-purple text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 neon-glow energy-ripple flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Live Demo</span>
                </a>
              )}
              
              {project.github && (
                <a
                  href={project.github}
                  className="w-full bg-dark-700 hover:bg-dark-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center justify-center space-x-2 border border-neon-purple/30 energy-ripple"
                >
                  <Github className="w-5 h-5" />
                  <span>View Source Code</span>
                </a>
              )}
            </div>

            {/* Robot Mascot */}
            <div className="bg-dark-800 rounded-2xl p-6 border border-neon-coral/20 text-center">
              <div className="text-4xl mb-3 animate-robot-float">🤖</div>
              <p className="text-gray-300 text-sm">
                "This project showcases the perfect blend of creativity and technical expertise!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;