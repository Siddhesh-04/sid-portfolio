
import React, { useState } from 'react';
import { useEffect } from 'react';
import { ExternalLink, Github, User, Users, Zap, Target, Calendar } from 'lucide-react';

interface ProjectDetailsProps {
  project: any;
  onBack: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  useEffect(() => {
    // Scroll to top when ProjectDetails mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project]);
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Back Button */}
        {/* <button
          onClick={onBack}
          className="flex items-center space-x-2 text-neon-teal hover:text-white transition-colors duration-200 mb-8 group"
        >
          <div className="w-8 h-8 bg-dark-700 rounded-full flex items-center justify-center group-hover:bg-neon-teal transition-colors duration-200 border border-neon-teal/30">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="font-medium">Back to Projects</span>
        </button> */}

        {/* Project Hero */}
        <div className="bg-dark-800 rounded-3xl overflow-hidden border border-neon-teal/20 mb-8 sm:mb-12 p-4 sm:p-6 lg:p-8">
          <div className="flex items-center flex-wrap gap-2 mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-neon-teal to-neon-purple text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-semibold neon-glow">
              {project.category}
            </span>
            {project.featured && (
              <span className="bg-gradient-to-r from-neon-purple to-neon-teal text-dark-900 px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-semibold">
                Featured ⭐
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 doodle-font leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
            {project.description}
          </p>
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
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {project.overview}
              </p>
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
                <h2 className="text-2xl font-bold text-white mb-6 doodle-font">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.details.gallery.map((image: string, index: number) => (
                    <div
                      key={index}
                      className="relative group cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
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

            {/* Image Popup */}
            {selectedImage && (
              <div
                className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                onClick={() => setSelectedImage(null)}
              >
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-5 right-5 text-white text-3xl font-bold"
                >
                  &times;
                </button>
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
                {project.details?.contributors?.length > 0 && (
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-neon-teal mt-1" />
                    <div>
                      <p className="text-sm text-gray-400">Contributors</p>
                      <ul className="text-white font-medium space-y-1">
                        {project.details.contributors.map((name: string, idx: number) => (
                          <li key={idx}>{name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {project.details?.timeline && project.details.timeline.trim() !== '' && (
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-neon-purple mt-1" />
                  <div>
                    <p className="text-sm text-gray-400">Timeline</p>
                    <p className="text-white font-medium">{project.details.timeline}</p>
                  </div>
                </div>
              )}
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Live Demo</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  className="w-full bg-dark-700 hover:bg-dark-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center justify-center space-x-2 border border-neon-purple/30 energy-ripple"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  <span>View Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
