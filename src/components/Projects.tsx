import React, { useState } from 'react';
import { ExternalLink, Github,Code ,Cpu, Zap, Gamepad2} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  overview: string;
  image: string;
  category: string;
  tags: string[];
  demo?: string;
  github?: string;
  featured?: boolean;
  details?: {
    role: string;
    contributors:string[];
    timeline: string;
    challenges: string[];
    gallery: string[];
  };
}

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}
const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [showAll, setShowAll] = useState<boolean>(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Ensure categories match project.category values
  const categories = ['All', 'AI & Computer Vision', 'Hardware & Simulation', 'Web & Applications'];

  const projects: Project[] = [
    {
  id: 1,
  title: 'CNC Plotter Machine',
  description: 'DIY CNC plotter with GRBL firmware showcasing motion control, embedded systems, and mechanical design.',
  overview: 'A low-cost, compact CNC plotter built using Arduino and GRBL firmware, showcasing skills in motion control, embedded systems, and mechanical design. The project adapted GRBL to work with 28BYJ-48 stepper motors for precise X–Y axis movement and integrated a servo motor for pen lift functionality.\n Capable of executing G-code commands, the plotter produces intricate designs on paper, demonstrating the practical application of automation and control principles.',

  image: '/assets/projects/cnc-plotter/gallary-1.jpg',
  category: 'Hardware & Simulation',
  tags: ['Arduino', 'GRBL', 'Stepper Motors', 'Embedded Systems', 'Mechanical Design'],
  demo: '',
  github: 'https://github.com/Siddhesh-04/cnc-plotter',
  featured: true,
  details: {
    role: 'System Integrator',
    contributors: ["Shubham Rakholiya", "Dev Bhavsar"],
    timeline: '3 weeks',
    challenges: [
      'Adapting GRBL for 28BYJ-48 stepper motors',
      'Designing low-cost but precise motion control system',
      'Integrating servo for pen lift with stepper-driven axes'
    ],
    gallery: [
      '/assets/projects/cnc-plotter/gallary-1.jpg',
      '/assets/projects/cnc-plotter/gallary-3.jpg',
      '/assets/projects/cnc-plotter/gallary-2.jpg']
  }
},
{
  id: 2,
      title: 'Gesture-Controlled UR5e Robot',
      description: 'Hand gesture recognition system controlling industrial robot in Webots simulator using Mediapipe.',
      overview:"A gesture-controlled robotic system developed in the Webots simulator, enabling real-time control of a UR5e industrial robot through hand gestures. The system integrates Mediapipe for gesture recognition, OpenCV for image processing, and a Python interface to map recognized gestures into robot commands.\n This project demonstrates expertise in computer vision, human–robot interaction, and robotic simulation environments. Key contributions include configuring gesture classification, establishing a control pipeline between Mediapipe and Webots, and ensuring smooth robotic arm motion in response to user inputs.",
      image: '/assets/projects/ur5e-gesture-control/thumbnail-gallary-1.png',
      category: 'Hardware & Simulation',
      tags: ['OpenCV', 'Mediapipe', 'Webots','UR5e'],
      demo: '',
  github: 'https://github.com/Siddhesh-04/Robotic-Arm-with-Gesture-Control',
      featured: true,
      details: {
        role: 'Vision & Control Engineer',
        contributors: [],
        timeline: '2 Weeks',
        challenges: ['Real-time gesture recognition', 'Robot control integration', 'Simulation accuracy'],
        gallery: [
          '/assets/projects/ur5e-gesture-control/thumbnail-gallary-1.png',
          '/assets/projects/ur5e-gesture-control/gallary-2.png',
          '/assets/projects/ur5e-gesture-control/gallary-3.png',
          '/assets/projects/ur5e-gesture-control/gallary-4.png'
        ]
      }
    },
  {
    id: 3,
    title: 'Transistor Defect Inspector',
    description: 'AI-powered quality control system for transistor defect detection with instant classification, and PDF reporting.',
    overview: 'An AI-powered quality control system designed for real-time defect detection in transistors using a lightweight Google Teachable Machines TensorFlow Lite model. \nThe system captures images of transistors via a webcam, processes them through an optimized TFLite model to classify defects, and generates detailed PDF reports summarizing inspection results.\n This project, developed as part of the Intel AI for Manufacturing Internship Capstone, highlights skills in machine learning model optimization, computer vision, and user-friendly application development.',
    image: '/assets/projects/transistor-defect-inspector/thumbnail-gallary-1.png',
    category: 'AI & Computer Vision',
    tags: ['Python', 'Streamlit', 'TensorFlow Lite', 'OpenCV'],
    demo: '#',
github: 'https://github.com/Siddhesh-04/visual-inspection-qc',
    featured: true,
    details: {
      role: 'AI Intern',
      contributors: ["Shubham Rakholiya", "Harsh Pandya"],
      timeline: '1-2 weeks',
      challenges: ['Model optimization for edge deployment', 'User-friendly interface design'],
      gallery: [
        '/assets/projects/transistor-defect-inspector/thumbnail-gallary-1.png',
        '/assets/projects/transistor-defect-inspector/gallary-2.png',
        '/assets/projects/transistor-defect-inspector/gallary-3.png',
      ]
    }

  },
{
  id: 4,
  title: 'Casting Anomaly Detection',
  description: 'AI-powered defect detection system for submersible pump impellers using a lightweight TensorFlow Lite model deployed via Streamlit.',
  overview:"An AI-driven quality control system Developed as part of the Intel AI for Manufacturing Internship assignment, this project focuses on applying machine learning for industrial quality control. The system leverages Google Teachable Machine to train a TensorFlow Lite model optimized for lightweight deployment. It detects anomalies in impeller castings with real-time image classification, integrated into a Streamlit-based interface for seamless inspection workflow. This assignment strengthened skills in AI model optimization, computer vision, and deployment of user-centric applications for manufacturing use cases.",
  image: '/assets/projects/casting-anomaly-classification/thumbnail-gallary-1.png',
  category: 'AI & Computer Vision',
  tags: ['Python', 'Streamlit', 'TensorFlow Lite', 'OpenCV'],
  demo: '#',
  github: 'https://github.com/Siddhesh-04/Anomaly-Detection-for-Impeller-Casting-Defect',
  featured: false,
  details: {
    role: 'AI Intern',
    contributors: [],
    timeline: '1 week',
    challenges: [
      'Handling imbalance between normal and defective samples',
      'Training and exporting a TFLite model with limited dataset',
      'Building an intuitive web app for defect classification',
      'Optimizing inference speed for real-time usage'
    ],
    gallery: [
      '/assets/projects/casting-anomaly-classification/thumbnail-gallary-1.png',
      '/assets/projects/casting-anomaly-classification/gallary-2.png',
      '/assets/projects/casting-anomaly-classification/gallary-3.png',
      '/assets/projects/casting-anomaly-classification/gallary-4.png'
    ]
  }
},
{
  id: 5,
  title: "Facial Recognition System",
  description: "A real-time face recognition system for identification and verification with image-based and live camera recognition.",
  overview: "Built a simple Face Recognition System that can identify and verify people using images or live camera feed. It includes a basic face lock system and allows adding new faces dynamically. This project helped me learn computer vision basics, Python programming, and working with real-time data.",
  image: "/assets/projects/face-recognition/thumbnail-gallary-1.png",
  category: "AI & Computer Vision",
  tags: ["Python", "OpenCV", "face_recognition", "NumPy", "Matplotlib"],
  demo: "",
  github: "https://github.com/Siddhesh-04/Face-Recognition-Python",
  featured: false,
  details: {
    role: "Python Developer",
    contributors:[],
    timeline: "",
    challenges: [
      "Real-time face detection and recognition optimization",
      "Dynamic registration of new faces",
      "Implementing face lock system and liveness detection"
    ],
    gallery: [
      "/assets/projects/face-recognition/thumbnail-gallary-1.png",
      "/assets/projects/face-recognition/gallary-2.jpeg",
      

    ]
  }
},
{
  id: 6,
  title: "AI-Enhanced Portfolio Website",
  description: "A personal portfolio web app, live deployed, built with AI-assisted template generation and custom modifications for project showcasing.",
  overview: 
    "This portfolio website is a live project I developed using an AI-generated template, customized to showcase my other projects. Built with React, Vite, and deployed on Vercel.\n Integrated JSON-based dynamic project rendering with filtering and featured logic. "
  ,
  image: "/assets/projects/ai-enhanced-portfolio/thumbnail.png",
  category: "Web & Applications",
  tags: ["React", "Vite", "Bolt", "Vercel"],
  demo: "https://siddhesh-04.vercel.app/",
  github: "https://github.com/Siddhesh-04/AI-Enhanced-Portfolio",
  featured: false,
  details: {
    role: "Web Developer",
    contributors:[],
    timeline: 'Oct 2025',
    challenges: [
      "Adapting a GenAI template to real-world needs",
      "Implementing dynamic project rendering with filtering",
      "Live deployment and optimization for responsiveness"
    ],
    gallery: [
      "/assets/projects/ai-enhanced-portfolio/thumbnail.png",
          ]
  }
},{
  id: 7,
  title: 'Property Management System',
  description: 'A web-based platform for managing real estate properties, tenant searches, and inquiries from a unified dashboard.',
  overview:"A web-based platform for managing real estate properties, tenants, and inquiries from a unified dashboard. The application supports dynamic page content rendering, including property listings, tenant details, and admin dashboard updates.",
  image: '/assets/projects/property-management-system/thumbnail-gallary-1.png',
  category: 'Web & Applications',
  tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  demo: '',
  github: 'https://github.com/Siddhesh-04/realestate-ui',
  featured: false,
  details: {
    role: 'Web Developer',
    contributors:['Vinay Patel','Viral Patil','Afnan Shaikh'],
    timeline: "",
    challenges: [
      'Designing and implementing CRUD operations for properties',
      'Building dynamic search and filter functionality',
      'Creating an admin dashboard for property tracking and visits',
      'Handling tenant inquiries efficiently in backend'
    ],
    gallery: [
      '/assets/projects/property-management-system/thumbnail-gallary-1.png',
      '/assets/projects/property-management-system/gallary-2.png',
      '/assets/projects/property-management-system/gallary-3.png',
      '/assets/projects/property-management-system/gallary-4.png'
    ]
  }
},
{
    id: 8,
    title: "Education Program Performance Monitor",
    description: "Comprehensive Tableau dashboard analyzing education program performance across multiple dimensions including enrollment trends, profit margins, course categories, and regional distribution with interactive filtering capabilities.",
    overview: "Developed as part of a summer internship in Data Analytics, this interactive Tableau dashboard tracks education program performance across multiple dimensions such as enrollment trends, course profits, and regional distribution. \n It features dynamic filters and drill-down capabilities, demonstrating skills in data visualization, analytics, and KPI monitoring.",
    image: "/assets/projects/education-program-performance-monitor/thumbnail-gallary-1.png",
    category: "Web & Applications",
    tags: ["Tableau Desktop", "Data Modeling", "Data Analytics"],
    demo: "https://public.tableau.com/views/EducationProgramPerformanceMonitor/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    github: "",
    details: {
      role: "Data Analytics Intern",
      contributors:[],
      timeline: '',
      challenges: [
        "Multi-dimensional data filtering and interactivity",
        "Cross-categorical performance comparison",
      ],
      gallery: [
        "/assets/projects/education-program-performance-monitor/thumbnail-gallary-1.png"
      ]
    }
  },

  ];

  let filteredProjects: Project[] = [];
  if (activeFilter === 'All') {
    filteredProjects = showAll
      ? projects // show all projects from all categories
      : projects.filter(p => p.featured); // only featured
  } else {
    filteredProjects = projects.filter(project => project.category === activeFilter);
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Computer Vision': return < Cpu className="w-4 h-4" />;
      case 'Hardware & Simulation': return <Gamepad2 className="w-4 h-4" />;
      case 'Web & Applications': return <Code className="w-4 h-4" />;
      default: return null;
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
            A collection of Engineering Experiments at the Intersection of Robotics,<br /> AI, and Web Technologies</p>
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
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
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
                      className="w-9 h-9 bg-black/70 border border-white/30 text-neon-teal rounded-full flex items-center justify-center hover:bg-black/80 hover:text-white transition-all duration-200 shadow-lg shadow-black/60 backdrop-blur-sm"
                      aria-label="View demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 bg-black/70 border border-white/30 text-neon-purple rounded-full flex items-center justify-center hover:bg-black/80 hover:text-white transition-all duration-200 shadow-lg shadow-black/60 backdrop-blur-sm"
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
                    <div
                      className="bg-black/70 border border-white/30 text-neon-teal rounded-full px-3 py-1 text-xs shadow-lg shadow-black/60 backdrop-blur-sm cursor-pointer hover:bg-black/80 hover:text-white transition-all duration-200"
                    >
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
        {activeFilter === 'All' && projects.length > 3 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-neon-teal to-neon-purple text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 neon-glow energy-ripple"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </button>
        </div>)}
      </div>
    </section>
  );
};

export default Projects;