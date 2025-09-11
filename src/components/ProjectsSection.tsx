import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  pdfUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  imageUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Track My Monarch',
      description: 'A web application for Methodist University students to track their spending, allowing students to order easier on campus, view their spending history, and share monarch dollars with friends.',
      category: 'Web Application',
      pdfUrl: '/projects/track-my-monarch.pdf',
      githubUrl: 'https://github.com/username/track-my-monarch',
      liveUrl: 'https://trackmymonarch.live',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Leaflet Maps'],
      imageUrl: 'https://images.pexels.com/photos/672142/pexels-photo-672142.jpeg'
    },
    {
      id: '2',
      title: 'Methodist University AI Technical Research Publication',
      description: 'AI Technical Research Publication in Higher Education - Research on computational chemistry and machine learning applications.',
      category: 'Research',
      pdfUrl: 'https://www.methodist.edu/wp-content/uploads/2024/04/Booklet_CRC-Symposium_2024-1.pdf',
      technologies: ['AI', 'Machine Learning', 'Computational Chemistry', 'Research', 'Higher Education'],
      imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
    },
    {
      id: '3',
      title: 'Network Traffic Analysis using Machine Learning Random Forest',
      description: 'Developed a ML model using RF in Scikit-learn to analyze network traffic and identify anomalies associated with potential security breaches. Used Wireshark for packet capture and Net Scrapper to automate feature extraction and test multiple attack scenarios. Investigated SSH and FTP Patator attacks by extracting and analyzing key traffic features such as Init Win Bytes, Fwd PSH Flags, SYN flag Count and Fwd Packets.',
      category: 'Cybersecurity',
      pdfUrl: '/projects/csc-4111-project.pdf',
      technologies: ['Python', 'Machine Learning', 'Random Forest', 'Scikit-learn', 'Wireshark', 'Net Scrapper', 'Network Security', 'SSH', 'FTP', 'Traffic Analysis'],
      imageUrl: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg'
    },
    {
      id: '4',
      title: 'Navigating Network Security Through Network Protocols, Ports, NetStat, and Simulation of SQL Injection',
      description: 'Comprehensive research project exploring network security fundamentals including network protocols, port analysis, NetStat utilization, and practical SQL injection simulation. This research provides deep insights into cybersecurity practices and network defense mechanisms.',
      category: 'Research',
      pdfUrl: '/projects/navigating-network-security-research.pdf',
      technologies: ['Network Security', 'Network Protocols', 'Port Analysis', 'NetStat', 'SQL Injection', 'Cybersecurity Research', 'Network Defense', 'Security Analysis'],
      imageUrl: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg'
    }
  ];

  const handleDownload = (pdfUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title.toLowerCase().replace(/\s+/g, '-')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const categories = [...new Set(projects.map(project => project.category))];

  return (
    <section id="projects" className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-center text-[#56CCF2]">My Projects</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Explore my portfolio of projects with detailed documentation available for download.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-[#1c1f26] text-[#56CCF2] rounded-full border border-[#2c2f36] hover:bg-[#2c2f36] transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1c1f26] rounded-lg overflow-hidden border border-[#2c2f36] hover:border-[#56CCF2] transition-all duration-300 hover:shadow-lg hover:shadow-[#56CCF2]/20"
              >
                {project.imageUrl && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-[#56CCF2]/20 text-[#56CCF2] text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#2c2f36] text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDownload(project.pdfUrl, project.title)}
                      className="flex items-center gap-2 px-4 py-2 bg-[#56CCF2] text-white rounded-lg hover:bg-[#56CCF2]/80 transition-colors duration-300"
                    >
                      <Download size={16} />
                      Download PDF
                    </button>
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#2c2f36] text-white rounded-lg hover:bg-[#2c2f36]/80 transition-colors duration-300"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                    
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#2c2f36] text-white rounded-lg hover:bg-[#2c2f36]/80 transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
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
  );
};

export default ProjectsSection;



