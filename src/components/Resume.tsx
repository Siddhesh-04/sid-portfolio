import React, { useState } from 'react';
import { Download, Eye, FileText, Award, Briefcase, GraduationCap, Zap } from 'lucide-react';

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);

  const resumeData = {
    education: [
      {
        degree: 'Bachelor of Computer Science',
        school: 'Tech University',
        year: '2022-2026',
        gpa: '3.8/4.0',
        relevant: ['Artificial Intelligence', 'Robotics', 'Machine Learning', 'Computer Vision']
      }
    ],
    experience: [
      {
        title: 'Robotics Research Intern',
        company: 'Future Labs',
        period: 'Summer 2024',
        achievements: [
          'Developed swarm robotics algorithms for autonomous navigation',
          'Implemented machine learning models for robot behavior prediction',
          'Created interactive visualizations for research presentations'
        ]
      },
      {
        title: 'Frontend Developer',
        company: 'Freelance',
        period: '2023-Present',
        achievements: [
          'Built 15+ responsive web applications with modern frameworks',
          'Specialized in cyberpunk and futuristic UI designs',
          'Integrated 3D graphics and interactive animations'
        ]
      }
    ],
    skills: {
      'Programming': ['JavaScript', 'TypeScript', 'Python', 'C++', 'Java'],
      'Robotics': ['ROS', 'Arduino', 'Raspberry Pi', 'Computer Vision', 'Path Planning'],
      'Web Technologies': ['React', 'Three.js', 'WebGL', 'Node.js', 'TensorFlow.js'],
      'Design': ['Figma', 'Blender', 'Adobe Creative Suite', 'UI/UX Design']
    },
    achievements: [
      'Winner - University Robotics Competition 2024',
      'Published research paper on swarm intelligence',
      'Dean\'s List - 4 consecutive semesters',
      'Open source contributor - 500+ GitHub stars'
    ]
  };

  return (
    <section id="resume" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 doodle-font">
            My{' '}
            <span className="bg-gradient-to-r from-neon-teal to-neon-purple bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            A comprehensive overview of my journey in robotics, AI, and creative development. 
            Ready to build the future together!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-teal to-neon-purple rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {/* Resume Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="bg-dark-800 rounded-2xl p-6 border border-neon-teal/20">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 doodle-font flex items-center justify-center">
                <FileText className="w-5 h-5 mr-2 text-neon-teal" />
                Quick Actions
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="bg-gradient-to-r from-neon-teal to-neon-purple text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 neon-glow energy-ripple flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Eye className="w-5 h-5" />
                  <span>{showPreview ? 'Hide Preview' : 'Preview Resume'}</span>
                </button>
                <a href="https://drive.google.com/uc?export=download&id=1ODuPBq0MfwIxYde5Gj_1XdKOaKke-iXj" rel="noopener noreferrer" className="bg-dark-700 hover:bg-dark-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center justify-center space-x-2 border border-neon-purple/30 energy-ripple text-sm sm:text-base">
                  <Download className="w-5 h-5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

          </div>

          {/* Resume Content */}
          <div className="w-full">
            {showPreview ? (
              <div className="bg-dark-800 rounded-2xl p-4 sm:p-8 border border-neon-teal/20 space-y-6 sm:space-y-8">
                {/* Header */}
                <div className="text-center border-b border-gray-600 pb-6">
                  <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 doodle-font">Siddhesh Suthar</h1>
                  <p className="text-base sm:text-lg text-neon-teal mb-2">AI + Robotics | Python Developer</p>
                  <p className="text-sm sm:text-base text-gray-300">siddhesh.suthar@example.com | Gandhinagar, Gujarat, India</p>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center doodle-font">
                    <GraduationCap className="w-5 h-5 mr-2 text-neon-teal" />
                    Education
                  </h2>
                  <div className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div className="mb-2 sm:mb-0">
                        <h3 className="font-semibold text-white">Bachelor of Technology</h3>
                        <p className="text-neon-teal">Gujarat Technological University</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-gray-300">2022-2026</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Artificial Intelligence', 'Robotics', 'Machine Learning', 'Data Analytics'].map((course) => (
                        <span key={course} className="text-xs bg-dark-700 text-gray-300 px-2 py-1 rounded border border-gray-600">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center doodle-font">
                    <Briefcase className="w-5 h-5 mr-2 text-neon-purple" />
                    Experience & Certifications
                  </h2>
                  
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div className="mb-2 sm:mb-0">
                        <h3 className="font-semibold text-white">Assistant (Family Business)</h3>
                        <p className="text-neon-teal">Billing & Ledger Management</p>
                      </div>
                      <p className="text-gray-300">Aug 2024 – Oct 2024</p>
                    </div>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li className="text-sm">Managed construction billing & ledger using Excel</li>
                      <li className="text-sm">Prepared final bills, tracked expenses & streamlined reporting</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-white">Virtual Programs & Certifications:</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li className="text-sm"><strong>Data Analytics - GTU:</strong> Preprocessing, visualization & dashboard building</li>
                      <li className="text-sm"><strong>AI for Manufacturing - Intel:</strong> Applied AI for optimization & quality control</li>
                      <li className="text-sm"><strong>TCS iON Career Edge:</strong> Soft skills & corporate readiness</li>
                      <li className="text-sm"><strong>Full Stack Development - Pantech.ai:</strong> HTML, CSS, JavaScript & web tools</li>
                      </ul>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center doodle-font">
                    <Zap className="w-5 h-5 mr-2 text-neon-coral" />
                    Technical Skills
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {Object.entries({
                      'Programming': ['Python', 'C/C++', 'JavaScript', 'PHP', 'HTML/CSS'],
                      'AI/ML & Data': ['Machine Learning', 'OpenCV', 'Mediapipe', 'Streamlit', 'Pandas', 'NumPy'],
                      'Robotics': ['Arduino', 'Raspberry Pi', 'Motor Control', 'Sensor Integration'],
                      'Tools': ['Flask', 'Git/GitHub', 'SQL', 'MongoDB', 'Microsoft Excel']
                    }).map(([category, skills]) => (
                      <div key={category}>
                        <h3 className="font-semibold text-neon-teal mb-2">{category}</h3>
                        <div className="flex flex-wrap gap-1">
                          {skills.map((skill) => (
                            <span key={skill} className="text-xs bg-dark-700 text-gray-300 px-2 py-1 rounded border border-gray-600">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center doodle-font">
                    <Award className="w-5 h-5 mr-2 text-neon-yellow" />
                    Key Projects
                  </h2>
                  <ul className="space-y-2">
                    {['Transistor Defect Inspector - AI-powered quality control system', 'Gesture-Controlled UR5e Robot - Hand gesture recognition with Mediapipe', 'Healthcare Analytics Dashboard - Interactive Tableau dashboard with KPIs', 'Mini Robotic Arm with ML Control - Arduino-based with gesture/voice control'].map((achievement, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-neon-teal rounded-full mr-3 animate-pulse"></div>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-dark-800 rounded-2xl p-8 border border-neon-teal/20 text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-neon-teal/20 to-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 doodle-font">
                  Resume Preview
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-6">
                  Click the preview button to see my complete resume with education, experience, 
                  skills, and achievements. Or download the PDF version directly!
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-sm">
                  <div className="bg-dark-700 rounded-lg p-4 border border-neon-teal/20">
                    <div className="text-neon-teal font-semibold mb-1">Education</div>
                    <div className="text-gray-400 text-xs sm:text-sm">BTech, GTU</div>
                  </div>
                  <div className="bg-dark-700 rounded-lg p-4 border border-neon-purple/20">
                    <div className="text-neon-purple font-semibold mb-1">Experience</div>
                    <div className="text-gray-400 text-xs sm:text-sm">Business + Virtual Programs</div>
                  </div>
                  <div className="bg-dark-700 rounded-lg p-4 border border-neon-coral/20">
                    <div className="text-neon-coral font-semibold mb-1">Skills</div>
                    <div className="text-gray-400 text-xs sm:text-sm">15+ Technologies</div>
                  </div>
                  <div className="bg-dark-700 rounded-lg p-4 border border-neon-yellow/20">
                    <div className="text-neon-yellow font-semibold mb-1">Projects</div>
                    <div className="text-gray-400 text-xs sm:text-sm">4+ Key Projects</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;