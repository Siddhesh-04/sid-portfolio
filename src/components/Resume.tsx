import { useState } from 'react';
import { Download, Eye, FileText, Award, Briefcase, GraduationCap, Zap } from 'lucide-react';

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);

  const resumeData = {
    education: [
      {
        degree: 'B.E. Robotics & Automation',
        school: 'Government Engineering College, Gandhinagar (GTU)',
        year: '2023-2026',
        relevant: ['Industrial Robotics', 'Automation', 'Control Systems', 'Design Thinking']
      },
      {
        degree: 'Diploma in Computer Engineering',
        school: 'Sankalchand Patel University, Visnagar',
        year: '2020-2023',
        relevant: ['Programming', 'Data Structures', 'Computer Networks', 'Operating Systems']
      }
    ],
    experience: [
      {
  title: 'Robotics & Controls Job Simulation',
  link: 'https://www.theforage.com/completion-certificates/3w79S9RRBtn9noDWZ/q8m3gpN4ETXnjapPq_3w79S9RRBtn9noDWZ_GD3ebotvHcZongCWt_1755622658435_completion_certificate.pdf',
  company: 'Johnson & Johnson (Forage)',
  period: 'August 2025',
  achievements: [
    "Optimized surgical robotic arm performance through control system diagnostics and Python-based analysis",
    "Proposed and validated design improvements to enhance precision, responsiveness, and durability"
  ]
      },
      {
  title: "AI for Manufacturing ",
  link: 'https://drive.google.com/file/d/1MEDjc815Vm37ovFIAVfmSKJtcR7fL69E/view?usp=sharing',
  company: "Intel® India (GTU)",
  period: "Mar–June 2025",
  achievements: [
    "Completed industry-aligned training on AI adoption in manufacturing, predictive maintenance, and robotic process automation",
    "Worked on AI projects focused on data modeling, computer vision, and Quality Control while applying ethical AI practices",
  ]
},
      
      {
        title: 'Data Analytics Summer Internship',
        link: 'https://drive.google.com/file/d/1BKLmcyxdDSbo3gowFosrShYB8nulQN6g/view?usp=sharing',
  company: 'CSRBOX, Ahmedabad (GTU)',
        period: 'July 2025',
        achievements: [
          'Completed 2-week internship in data processing and visualization',
          'Built Tableau dashboards for healthcare and Education datasets to derive insights'
        ]
      },
      
    ],
    skills: {
  'Programming & Web': ['Python', 'C/C++', 'PHP','SQL', 'HTML/CSS', 'JavaScript', 'React'],
  'Robotics & Hardware': [
    'Arduino',
    'Raspberry Pi',
    'Motor Control',
    'Sensor Integration',
    'Embedded Systems'
  ],
  'Tools & Platforms': [
    'VS Code',
    'Jupyter Notebook',
    'Git/GitHub',
    'Microsoft Office',
    'Google Workspace',
    'Generative AI Tools'
  ],
  'Soft Skills': [
    'Problem-Solving',
    'Communication',
    'Team Collaboration',
    'Time Management',
    'Adaptability'
  ]
},
    achievements: [
      'CNC Plotter Machine – Built a low cost 2-axis pen plotter for drawing.',
      'Gesture-Controlled UR5e Robot – achieved smoother control using Hand gesture recognition',
      'Transistor Defect Inspector – Anomaly detection and classification for quality control',
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
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-teal to-neon-purple rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-1 ">
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
                <a href="https://drive.google.com/uc?export=download&id=1G3zdadzH-W5QHgzXGUuBOR-ho8mKWgBz" rel="noopener noreferrer" className="bg-dark-700 hover:bg-dark-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center justify-center space-x-2 border border-neon-purple/30 energy-ripple text-sm sm:text-base">
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
                  <p className="text-base sm:text-lg text-neon-teal mb-2">Engineering Student</p>
                  <p className="text-sm sm:text-base text-gray-300">contact.siddhesh04@gmail.com | Gandhinagar, GJ</p>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center doodle-font">
                    <GraduationCap className="w-5 h-5 mr-2 text-neon-teal" />
                    Education
                  </h2>
                  <div className="space-y-4">
                    {resumeData.education.map((edu, idx) => (
                      <div key={idx} className="mb-2">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                          <div className="mb-1 sm:mb-0">
                            <h3 className="font-semibold text-white">{edu.degree}</h3>
                            <p className="text-neon-teal">{edu.school}</p>
                          </div>
                          <div className="text-left sm:text-right">
                            <p className="text-gray-300">{edu.year}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.relevant.map((course) => (
                            <span key={course} className="text-xs bg-dark-700 text-gray-300 px-2 py-1 rounded border border-gray-600">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center doodle-font">
                    <Briefcase className="w-5 h-5 mr-2 text-neon-purple" />
                    Experience & Certifications
                  </h2>
                  <div className="space-y-6">
                    {resumeData.experience.map((exp, idx) => (
                      <div key={idx} className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                          <div className="mb-2 sm:mb-0">
                            {exp.link ? (
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-white hover: cursor-pointer"
                                title="Click to view certificate"

                              >
                                {exp.title}
                                {/* <span className="ml-2 text-xs text-gray-300  opacity-80 align-middle hover:underline ">(Click to view certificate)</span> */}
                              </a>
                            ) : (
                              <span className="font-semibold text-white">{exp.title}</span>
                            )}
                            <p className="text-neon-teal">{exp.company}</p>
                          </div>
                          <p className="text-gray-300">{exp.period}</p>
                        </div>
                        {exp.achievements && (
                          <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {exp.achievements.map((ach, i) => (
                              <li key={i} className="text-sm">{ach}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center doodle-font">
                    <Zap className="w-5 h-5 mr-2 text-neon-coral" />
                    Technical Skills
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {Object.entries(resumeData.skills).map(([category, skills]) => (
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
                    {resumeData.achievements.map((achievement, index) => (
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
                    <div className="text-gray-400 text-xs sm:text-sm">B.E, GTU</div>
                  </div>
                  <div className="bg-dark-700 rounded-lg p-4 border border-neon-purple/20">
                    <div className="text-neon-purple font-semibold mb-1">Experience</div>
                    <div className="text-gray-400 text-xs sm:text-sm">Virtual Programs + Projects</div>
                  </div>
                  <div className="bg-dark-700 rounded-lg p-4 border border-neon-coral/20">
                    <div className="text-neon-coral font-semibold mb-1">Skills</div>
                    <div className="text-gray-400 text-xs sm:text-sm">5+ Technologies</div>
                  </div>
                  <div className="bg-dark-700 rounded-lg p-4 border border-neon-yellow/20">
                    <div className="text-neon-yellow font-semibold mb-1">Projects</div>
                    <div className="text-gray-400 text-xs sm:text-sm">3+ Key Projects</div>
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