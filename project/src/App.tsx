import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Download, Menu, X } from 'lucide-react';
import dynamic from 'next/dynamic';
import pianoImage from './assets/piano.jpg';
import './App.css';

// Import Globe component with loading fallback
const GlobeComponent = dynamic(() => import('./components/Globe'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center bg-[#1c1f26] rounded-xl">
      <div className="text-[#56CCF2]">Loading Globe...</div>
    </div>
  )
});

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const projects = [
    {
      title: "Track My Monarch",
      description: "A web application for Methodist University students to track their spending, allowing students to order easier on campus, view their spending history, and share monarch dollars with friends.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Leaflet Maps"],
      github: "https://github.com/username/track-my-monarch",
      live: "https://trackmymonarch.live",
      image: "https://images.pexels.com/photos/672142/pexels-photo-672142.jpeg"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment processing.",
      tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe API"],
      github: "https://github.com/username/ecommerce-platform",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations using weather API data.",
      tech: ["JavaScript", "HTML", "CSS", "OpenWeather API", "Chart.js"],
      github: "https://github.com/username/weather-dashboard",
      live: "https://weather-dashboard-demo.netlify.app",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
    }
  ];

  const skills = [
    {
      category: "Coding Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java", "C#", "SQL", "HTML", "CSS"]
    },
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "Docker", "AWS", "CI/CD", "REST APIs", "GraphQL", "React Native", "Flutter", "Firebase", "MySQL", "SQLite"]
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Team Leadership", "Agile/Scrum", "Communication"]
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
        <div className="text-[#56CCF2] text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Scroll Progress Bar */}
      <div 
        style={{ width: `${scrollProgress}%` }}
        className="fixed top-0 left-0 h-1 bg-[#56CCF2] z-50 transition-all duration-300"
      />

      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-40 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link 
              to="home" 
              smooth={true} 
              className="text-xl font-bold cursor-pointer hover:text-blue-600 transition-colors"
            >
              Mark Leslie Plowright
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'projects', 'travel', 'skills', 'contact'].map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth={true}
                  spy={true}
                  offset={-64}
                  className={`text-gray-600 hover:text-blue-600 cursor-pointer capitalize transition-colors relative group ${
                    activeSection === item ? 'text-blue-600' : ''
                  }`}
                  activeClass="text-blue-600"
                  onSetActive={() => setActiveSection(item)}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-t"
            >
              {['home', 'projects', 'travel', 'skills', 'contact'].map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth={true}
                  spy={true}
                  offset={-64}
                  className={`block py-3 px-4 text-gray-600 hover:text-blue-600 capitalize transition-colors ${
                    activeSection === item ? 'text-blue-600 bg-blue-50' : ''
                  }`}
                  activeClass="text-blue-600"
                  onClick={() => {
                    toggleMenu();
                    setActiveSection(item);
                  }}
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section with About Me */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-[#0d1117]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#56CCF2]">Hi, I'm Mark Plowright</h1>
              <div className="text-2xl md:text-3xl text-gray-300 mb-8">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'Cybersecurity Specialist',
                    2000,
                    'Problem Solver',
                    2000,
                    'Musician',
                    2000,
                    'Chess Player',
                    2000,
                    'Educator',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <div className="flex justify-center lg:justify-start space-x-4 mb-4">
                <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#56CCF2]">
                  <Github size={24} />
                </a>
                <a href="http://www.linkedin.com/in/mark-plowright-a667a1167" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#56CCF2]">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:mlpplowright@gmail.com" className="text-white hover:text-[#56CCF2]">
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#1c1f26] rounded-xl p-8 shadow-lg border border-[#2c2f36]"
            >
              <h2 className="text-3xl font-bold mb-6 text-[#56CCF2]">About Me</h2>
              <div className="flex flex-col items-center">
                <img 
                  src={pianoImage} 
                  alt="Mark Plowright" 
                  className="w-64 h-64 object-cover rounded-full mb-6 mx-auto shadow-xl border-4 border-[#0d1117] hover:scale-105 transition-transform duration-300"
                />
                <p className="text-gray-300 mb-4 text-center">
                  "Learn a little about a lot". I am a well rounded Cybersecurity Specialist, Full Stack Developer, and Educator.
                </p>
                <p className="text-gray-300 text-center">
                  When I'm not coding, you can find me on the court, writing, playing chess, or composing music. I am a lifelong learner with a passion for education and helping others.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#0d1117]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4 text-center text-[#56CCF2]">Featured Projects</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience in web development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#1c1f26] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-[#2c2f36]"
                >
                  <div className="relative h-48">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[#2c2f36] text-[#56CCF2] rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-[#56CCF2] transition-colors"
                      >
                        <Github size={20} className="mr-1" />
                        Code
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-300 hover:text-[#56CCF2] transition-colors"
                        >
                          <ExternalLink size={20} className="mr-1" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Travel Globe Section */}
      <section id="travel" className="py-20 bg-[#111318]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-[#56CCF2]">My Travel Journey</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Explore my journey around the world.
            </p>
            <div className="bg-[#1c1f26] rounded-xl shadow-lg p-4">
              <Suspense fallback={
                <div className="w-full h-[500px] flex items-center justify-center">
                  <div className="text-[#56CCF2]">Loading Globe...</div>
                </div>
              }>
                <GlobeComponent />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#0d1117]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4 text-center text-[#56CCF2]">Skills & Expertise</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and professional capabilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#1c1f26] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#2c2f36]"
                >
                  <h3 className="text-xl font-bold mb-4 text-[#56CCF2]">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-[#2c2f36] text-[#56CCF2] rounded-full text-sm hover:bg-[#363a44] transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0d1117]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4 text-center text-[#56CCF2]">Get In Touch</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#1c1f26] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#2c2f36]"
              >
                <h3 className="text-2xl font-bold mb-6 text-[#56CCF2]">Contact Information</h3>
                <div className="space-y-6">
                  <a
                    href="mailto:mlpplowright@gmail.com"
                    className="flex items-center text-gray-300 hover:text-[#56CCF2] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#2c2f36] flex items-center justify-center mr-4 group-hover:bg-[#363a44] transition-colors">
                      <Mail className="text-[#56CCF2]" size={24} />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-gray-400">mlpplowright@gmail.com</p>
                    </div>
                  </a>
                  <a
                    href="http://www.linkedin.com/in/mark-plowright-a667a1167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-[#56CCF2] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#2c2f36] flex items-center justify-center mr-4 group-hover:bg-[#363a44] transition-colors">
                      <Linkedin className="text-[#56CCF2]" size={24} />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-gray-400">Connect with me</p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-[#56CCF2] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#2c2f36] flex items-center justify-center mr-4 group-hover:bg-[#363a44] transition-colors">
                      <Github className="text-[#56CCF2]" size={24} />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-gray-400">Check out my work</p>
                    </div>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#1c1f26] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#2c2f36]"
              >
                <h3 className="text-2xl font-bold mb-6 text-[#56CCF2]">Send a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-[#2c2f36] border border-[#363a44] rounded-lg focus:ring-2 focus:ring-[#56CCF2] focus:border-transparent transition-all duration-300 text-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-[#2c2f36] border border-[#363a44] rounded-lg focus:ring-2 focus:ring-[#56CCF2] focus:border-transparent transition-all duration-300 text-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-[#2c2f36] border border-[#363a44] rounded-lg focus:ring-2 focus:ring-[#56CCF2] focus:border-transparent transition-all duration-300 text-gray-300"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#56CCF2] text-white px-6 py-3 rounded-lg hover:bg-[#4db8d9] transition-colors duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1117] text-white py-8 border-t border-[#2c2f36]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Mark Plowright</h2>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:mlpplowright@gmail.com" className="text-gray-400 hover:text-white" title="Email Me">
                <Mail size={20} />
              </a>
              <a
                href="http://www.linkedin.com/in/mark-plowright-a667a1167"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                title="GitHub Profile"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Mark Plowright. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;