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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1c1f26] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-[#2c2f36] group"
              >
                {/* Project Image */}
                <div className="relative h-48">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#56CCF2] text-black text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{project.title}</h3>
                </div>

                                 {/* Project Content */}
                 <div className="p-6">
                   <div className="max-h-24 overflow-y-auto mb-4 pr-2">
                     <p className="text-gray-300 leading-relaxed">{project.description}</p>
                   </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#2c2f36] text-[#56CCF2] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                                         {/* Download PDF Button */}
                     <button
                       onClick={() => handleDownload(project.pdfUrl, project.title)}
                       className="flex items-center px-4 py-2 bg-[#56CCF2] text-black rounded-lg hover:bg-[#4db8d9] transition-colors duration-300 font-medium"
                     >
                       <Download size={16} className="mr-2" />
                       Download PDF
                     </button>

                     {/* Direct Link Button for External URLs */}
                     {project.pdfUrl.startsWith('http') && (
                       <a
                         href={project.pdfUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center px-4 py-2 bg-[#2c2f36] text-[#56CCF2] rounded-lg hover:bg-[#363a44] transition-colors duration-300"
                       >
                         <ExternalLink size={16} className="mr-2" />
                         Visit Link
                       </a>
                     )}

                    {/* GitHub Link */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-[#2c2f36] text-[#56CCF2] rounded-lg hover:bg-[#363a44] transition-colors duration-300"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    )}

                    {/* Live Demo Link */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-[#2c2f36] text-[#56CCF2] rounded-lg hover:bg-[#363a44] transition-colors duration-300"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-[#1c1f26] rounded-xl p-8 border border-[#2c2f36] max-w-2xl mx-auto">
              <FileText className="w-16 h-16 text-[#56CCF2] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-[#56CCF2]">Need More Details?</h3>
              <p className="text-gray-300 mb-6">
                Download the full project documentation to see detailed specifications, architecture diagrams, and implementation details.
              </p>
              <button
                onClick={() => handleDownload('/projects/portfolio-overview.pdf', 'Portfolio Overview')}
                className="px-8 py-3 bg-[#56CCF2] text-black rounded-lg hover:bg-[#4db8d9] transition-colors duration-300 font-medium"
              >
                <Download className="inline mr-2" size={20} />
                Download Portfolio Overview
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
