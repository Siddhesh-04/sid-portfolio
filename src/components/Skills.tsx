import React, { useState } from 'react';
import { BrainCircuit , Code ,Rocket, Cpu, Globe, Zap} from 'lucide-react';

interface Skill {
  id: number;
  name: string;
  icon: React.ReactNode;
  category: string;
  level: number;
  color: string;
  description: string;
  projects: string[];
}

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const skills: Skill[] = [
  
  {
    id: 1,
    name: 'Python Programming',
    icon: < Code className="w-6 h-6" />,
    category: 'Development',
    level: 85,
    color: 'from-blue-400 to-neon-teal',
    description: 'Proficient in Python for prototyping, automation, and data handling. Experienced with libraries like OpenCV, Pandas, NumPy, Streamlit, Matplotlib, and related frameworks for real-world projects.',
    projects: ['Transistor Defect Inspector', 'Image Processing with OpenCV', 'Python Voice Assistant']
  },
  {
    id: 2,
    name: 'AI & Computer Vision',
    icon: <BrainCircuit className="w-6 h-6" />,
    category: 'AI/ML',
    level: 80,
    color: 'from-neon-teal to-green-400',
    description: 'Hands-on experience in the end-to-end workflow of AI models, including data preparation, training, evaluation, and basic deployment. Familiar with tools like Google Teachable Machine, TensorFlow lite, OpenCV, and MediaPipe to experiment with image classification, gesture detection, and anomaly detection projects.',
    projects: ['Timelytics: Order-to-Delivery Time Prediction', 'Impeller Casting Defect Detection', 'Transistor Defect Classification', 'Facial Recognition System', 'Personality Prediction using CV']
  },
  {
    id: 3,
    name: 'Robotics & Embedded Systems',
    icon: <Cpu className="w-6 h-6" />,
    category: 'Robotics',
    level: 70,
    color: 'from-neon-coral to-red-400',
    description: 'Experienced with Arduino, Raspberry Pi, and embedded platforms for robotics. Skilled in integrating motors and sensors to design and implement functional robotic systems.',
    projects: ['CNC Plotter Machine', 'Gesture-Controlled UR5e Robot']
  },
  {
    id: 4,
    name: 'Web Development',
    icon: <Globe className="w-6 h-6" />,
    category: 'Web',
    level: 70,
    color: 'from-neon-yellow to-orange-400',
    description: 'Developed responsive web applications using HTML, CSS, JavaScript, React, and Streamlit. Built databases and dynamic features with PHP, SQL, and MongoDB, while integrating web-based UI components into various projects.',
    projects: ['Property Management System', 'AI-Enhanced Portfolio Website']
  },
  {
    id: 5,
    name: 'Version Control & Productivity Tools',
    icon: <Rocket className="w-6 h-6" />,
    category: 'Tools',
    level: 75,
    color: 'from-purple-400 to-neon-purple',
    description: 'Skilled in version control and collaboration using Git/GitHub, VS Code, and Jupyter Notebook. Experienced in leveraging productivity platforms such as Google Workspace, MS Office, and GenAI tools to streamline workflows for both individual and team projects.',
    projects: [
    'Team Collaboration using GitHub',
    'Construction Billing Support',
    'Project Documentation and Reports',
    'Code Prototyping & Experiments'
  ]
  }
];



  return (
    <section id="skills" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 doodle-font">
            Skills{' '}
            <span className="bg-gradient-to-r from-neon-teal to-neon-purple bg-clip-text text-transparent">
              Constellation
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Click on any skill node to explore my expertise and discover the projects where I've applied these technologies.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-teal to-neon-purple rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Skills Constellation */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-dark-900 to-dark-700 rounded-3xl p-4 sm:p-8 min-h-[400px] sm:min-h-[600px] border border-neon-teal/20">
              {/* Central hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-neon-teal to-neon-purple rounded-full flex items-center justify-center shadow-lg neon-glow animate-pulse-neon">
                <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>

              {/* Skills orbiting around center */}
              {skills.map((skill, index) => {
                const totalSkills = skills.length;
                const isOdd = totalSkills % 2 === 1;
                const offsetAngle = isOdd ? -90 : -90 + (180 / totalSkills);
                
                const angle = (index * 360) / totalSkills + offsetAngle;
                const radius = window.innerWidth < 640 ? 120 : 200;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
  
                return (
                  <div
                    key={skill.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                    }}
                    onClick={() => setSelectedSkill(skill)}
                  >
                    {/* {/* Connection line */}
                    <div
                      className="absolute w-px bg-gradient-to-r from-neon-teal/30 to-neon-purple/30 group-hover:from-neon-teal/60 group-hover:to-neon-purple/60 transition-all duration-300"
                      style={{
                        height: `${radius}px`,
                        left: '50%',
                        top: '50%',
                        transformOrigin: 'bottom',
                        transform: `translate(-50%, -100%) rotate(${angle + 180}deg)`,
                      }}
                    ></div> 

                    {/* Skill node */}
                    <div className={`w-14 sm:w-20 h-14 sm:h-20 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 relative border-2 border-white/20 energy-ripple`}>
                      {skill.icon}
                      
                      {/* Skill name tooltip */}
                      <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-dark-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-neon-teal/30 z-10">
                        {skill.name}
                      </div>
                    </div>

                    {/* Animated orbit ring */}
                    <div className="absolute inset-0 animate-spin opacity-30" style={{ animationDuration: '20s' }}>
                      <div className="w-2 h-2 bg-white rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  </div>
                );
              })}

              {/* Background circuit pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 600 600">
                <defs>
                  <pattern id="circuit" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M10,10 L40,10 L40,25 L25,25 L25,40 L10,40 Z" fill="none" stroke="#14b8a6" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit)" />
              </svg>
            </div>
          </div>

          {/* Skill Details Panel */}
          <div className="space-y-6 order-1 lg:order-2">
            {selectedSkill ? (
              <div className="bg-dark-700 rounded-2xl p-8 shadow-lg border border-neon-teal/20 animate-fade-in">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedSkill.color} rounded-xl flex items-center justify-center text-white neon-glow`}>
                    {selectedSkill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white doodle-font">{selectedSkill.name}</h3>
                    <span className="text-sm text-gray-400 bg-dark-800 px-2 py-1 rounded-full border border-neon-teal/30">
                      {selectedSkill.category}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-300 mb-6">{selectedSkill.description}</p>

                {/* Skill Level removed for fresher presentation */}

                {/* Related Projects */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 doodle-font">Related Projects</h4>
                  <div className="space-y-2">
                    {selectedSkill.projects.map((project) => (
                      <div key={project} className="flex items-center space-x-2 text-sm sm:text-base text-gray-300">
                        <div className="w-2 h-2 bg-neon-teal rounded-full animate-pulse"></div>
                        <span>{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-dark-700 rounded-2xl p-8 text-center border border-neon-teal/20">
                <div className="w-20 h-20 bg-gradient-to-r from-neon-teal/20 to-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 doodle-font">
                  Explore My Skills
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Click on any skill node in the constellation to learn more about my expertise and see related projects.
                </p>
              </div>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="bg-gradient-to-r from-neon-teal/10 to-neon-teal/20 rounded-xl p-4 text-center border border-neon-teal/30">
                <div className="text-xl sm:text-2xl font-bold text-neon-teal">5+</div>
                <div className="text-xs sm:text-sm text-neon-teal">Core Skills</div>
              </div>
              <div className="bg-gradient-to-r from-neon-purple/10 to-neon-purple/20 rounded-xl p-4 text-center border border-neon-purple/30">
                <div className="text-xl sm:text-2xl font-bold text-neon-purple">8+</div>
                <div className="text-xs sm:text-sm text-neon-purple">Projects</div>
              </div>
              <div className="bg-gradient-to-r from-neon-coral/10 to-neon-coral/20 rounded-xl p-4 text-center border border-neon-coral/30">
                <div className="text-xl sm:text-2xl font-bold text-neon-coral" >2+</div>
                <div className="text-xs sm:text-sm text-neon-coral">Years Learning</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;