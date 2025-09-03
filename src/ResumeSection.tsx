import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Calendar, MapPin, Building, Award, BookOpen, Code, Shield, Users } from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  relevantCourses: string[];
}



interface Volunteering {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string[];
  impact: string[];
}

const ResumeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'volunteering'>('experience');

  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Technical Trainer/Computational Chemistry Machine Learning',
      company: 'University of Richmond',
      location: 'Richmond, VA',
      period: 'Jan 2025 - Present',
      description: [
        'Increased computational efficiency by 60% accuracy by training a LLM random forest model to predict the dipole moment',
        'Spearheaded a low-cost alternative to DFT methods, reducing computational costs by 80% for geometry optimization in molecules',
        'Modernized a geometry optimizer molecular mechanics program Fortran 77 to Python, abstracting subroutines into OOP classes to enhance modularity, testability, and reusability for future computational chemistry research and machine learning model training'
      ],
      technologies: ['Python', 'Machine Learning', 'LLM', 'Random Forest', 'Fortran 77', 'OOP', 'Computational Chemistry']
    },
    {
      id: '2',
      title: 'Project Manager/Technical Trainer',
      company: 'Stealth AI Startup',
      location: 'Richmond, VA',
      period: 'May 2024 - Present',
      description: [
        'Led the end-to-end project lifecycle for a stealth AI-driven health technology platform, from requirements gathering and roadmap planning to delivery of working prototypes',
        'Oversaw integration planning with third-party APIs, healthcare data systems, and cloud infrastructure, ensuring security, scalability, and compliance (HIPAA/FTC)',
        'Built internal documentation and reporting systems to track KPIs, risks, and deliverables, improving transparency across stakeholders',
        'Applied Agile and Scrum practices, driving sprint planning, standups, and backlog management that improved delivery efficiency by 30%'
      ],
      technologies: ['Project Management', 'Agile/Scrum', 'API Integration', 'HIPAA Compliance', 'Healthcare Technology', 'KPI Tracking']
    },
    {
      id: '3',
      title: 'Cyber Security/Computer Science Teaching Assistant',
      company: 'Methodist University',
      location: 'Fayetteville, NC',
      period: 'Jan 2024 - Nov 2024',
      description: [
        'Assisted teaching across 3 courses for 40 students per semester, covering concepts including SQLi, XSS, Wireshark, SIEM tools, CLI scripting, network analysis, event viewer, and WSL (windows subsystem for Linux) Ubuntu setup',
        'Led student tryhackme scores and hacker rank scores to a 55% increase after tutoring sessions',
        'Conducted weekly tutoring sessions both in person and online, contributing to a 45% improvement in quizzes and exam scores',
        'Mentored students in introductory topics such as linear regression and random forest to apply AI in cybersecurity'
      ],
      technologies: ['SQLi', 'XSS', 'Wireshark', 'SIEM', 'CLI Scripting', 'Network Analysis', 'WSL', 'Ubuntu', 'AI', 'Machine Learning']
    },
    {
      id: '4',
      title: 'Lead Audio Visual Coordinator/Information Technology Coordinator',
      company: 'The Exploration School',
      location: 'Bronxville, NY',
      period: 'Jun 2022 - Aug 2024',
      description: [
        'Delivered Tier 2/3 technical support using task manager and CLI scripts, reducing network troubleshooting time by 40 minutes per issue to 22 minutes on average after creating SOPs (45% improvement)',
        'Configured and secured connectivity for iPads, Printers, 100+ mobile phones, laptops, and VOIP handsets',
        'Managed touch panels, Audio distributions, projectors, lighting, and control systems operations for day-to-day events',
        'Performed automated OS imaging and provisioning for staff and student devices using tools like PXE boost and MDT, leading to 65% reduction in manual setup time',
        'Served as the only system admin for 120 staff members and 400 students, managing IT inventory with 25% fewer audit errors'
      ],
      technologies: ['CLI Scripts', 'Network Troubleshooting', 'VOIP', 'Audio Visual Systems', 'PXE Boot', 'MDT', 'System Administration', 'IT Inventory Management']
    },
    {
      id: '5',
      title: 'Summer Intern',
      company: 'Ogier Law Firm',
      location: 'Cayman Islands',
      period: 'May 2017 - Jun 2020',
      description: [
        'Maintained and troubleshot audio-visual equipment with Webex and other video conferencing platform support for internal and client meetings, across multiple meeting rooms, including video conferencing systems, microphones, displays, and control panels',
        'Configured and operated touch panel interfaces for meeting room AV setups, ensuring smooth presentations and seamless transitions',
        'Supported Cisco scheduling systems and integrated database applications for conference room bookings',
        'Delivered persuasive product demos and technical presentations, translating API/SDK capabilities into business outcomes',
        'Provided application support for Windows and Microsoft, diagnosing and resolving technical issues across departments',
        'Collaborated with IT and facilities teams to support AV systems and address issues before they affected business operations'
      ],
      technologies: ['Webex', 'Video Conferencing', 'Cisco Systems', 'Database Applications', 'API/SDK', 'Windows Support', 'Microsoft Applications']
    }
  ];

  const education: Education[] = [
    {
      id: '1',
      degree: 'B.S Computer Information Technology, Cyber Security Information Assurance',
      institution: 'Methodist University',
      location: 'Fayetteville, NC',
      period: 'December 2024',
      relevantCourses: [
        'OPP',
        'Malware Analysis',
        'Python/Java/C++',
        'Hacking',
        'Network Security',
        'SIEM',
        'Data Analytics/SQL',
        'Database Management',
        'Operating Systems',
        'Networking',
        'Unix/Linux',
        'Cloud Computing',
        'Cybersecurity',
        'Data Science',
        'Data Analytics',
        'Data Visualization',
        'Data Engineering',
        'Data Warehousing',
        'Data Modeling',
        'Data Integration',
        'Data Governance',
        'Data Security',
        'Data Privacy',
        'Linux CLI',
        'TypeScript',
        'React Native'
      ]
    }
  ];



  const volunteering: Volunteering[] = [
    {
      id: '1',
      title: 'Young Musician Scholarship',
      organization: 'Cayman Islands',
      period: '2017 - 2020',
      description: [
        'Received scholarship for musical excellence and contribution to music programs and winning performances',
        'Participated in various musical performances and events',
        'Demonstrated commitment to artistic and academic excellence'
      ],
      impact: [
        'Enhanced music program diversity',
        'Served as role model for aspiring musicians'
      ]
    },
    {
      id: '2',
      title: 'ColorStack Member',
      organization: 'ColorStack',
      period: '2023 - 2024',
      description: [
        'Active member of organization supporting underrepresented minorities in tech',
        'Participated in networking events and professional development workshops',
        'Collaborated on initiatives to increase diversity in technology fields'
      ],
      impact: [
        'Contributed to diversity and inclusion efforts in tech',
        'Built professional network with industry leaders'
      ]
    },
    {
      id: '3',
      title: 'Key Club Member',
      organization: 'Key Club International',
      period: '2022 - 2024',
      description: [
        'Participated in community service projects and volunteer activities',
        'Developed leadership skills through service-oriented initiatives',
        'Collaborated with peers to organize fundraising events'
      ],
      impact: [
        'Completed over 100 hours of community service',
        'Helped raise funds for local charities and organizations'
      ]
    },
    {
      id: '4',
      title: 'Resident Assistant',
      organization: 'Methodist University Housing',
      period: '2023 - 2024',
      description: [
        'Provided support and guidance to residential students',
        'Organized community-building activities and events',
        'Assisted with conflict resolution and student concerns',
        'Maintained safety and security in residential areas'
      ],
      impact: [
        'Improved student satisfaction scores by 25%',
        'Reduced incident reports by 30% through proactive engagement'
      ]
    },
    {
      id: '5',
      title: 'Student Government Association (SGA)',
      organization: 'Methodist University SGA',
      period: '2023 - 2024',
      description: [
        'Represented student body interests to university administration',
        'Participated in policy discussions and decision-making processes',
        'Organized student events and initiatives',
        'Advocated for student needs and concerns'
      ],
      impact: [
        'Successfully lobbied for improved campus facilities',
        'Increased student participation in university governance'
      ]
    },
    {
      id: '6',
      title: 'Founder - Chess Club',
      organization: 'Methodist University Chess Club',
      period: '2022 - 2024',
      description: [
        'Established and organized university chess club from inception',
        'Recruited members and organized regular meetings and tournaments',
        'Taught chess strategies and techniques to beginners',
        'Coordinated with other university clubs for collaborative events'
      ],
      impact: [
        'Grew club membership to 45+ active members',
        'Organized 12+ tournaments with 100+ participants'
      ]
    },
    {
      id: '7',
      title: 'Founder - Writers Ink',
      organization: 'Methodist University Writers Ink',
      period: '2022 - 2024',
      description: [
        'Created creative writing club to foster literary expression',
        'Organized writing workshops and critique sessions',
        'Published student literary works and organized readings',
        'Mentored aspiring writers and provided constructive feedback'
      ],
      impact: [
        'Published 3 student anthologies with 50+ contributors',
        'Increased creative writing participation by 200%'
      ]
    },
    {
      id: '8',
      title: 'Journal Editor',
      organization: 'Methodist University Academic Journal',
      period: '2023 - 2024',
      description: [
        'Reviewed and edited academic papers and research articles',
        'Ensured quality and consistency in published content',
        'Collaborated with faculty advisors and student contributors',
        'Maintained editorial standards and publication timeline'
      ],
      impact: [
        'Improved journal quality and readership engagement',
        'Mentored 15+ student authors in academic writing'
      ]
    }
  ];

  const handleDownload = (type: string) => {
    const link = document.createElement('a');
    link.href = `/resume/31-resume-mark-leslie-plowright-cli.pdf`;
    link.download = `Mark-Leslie-Plowright-Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const tabs = [
    { id: 'experience', label: 'Experience', icon: Building },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'volunteering', label: 'Volunteering', icon: Users }
  ];

  return (
    <section id="resume" className="py-20 bg-[#111318]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-center text-[#56CCF2]">Resume & Experience</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Download my resume in different formats and explore my professional journey.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => handleDownload('Resume')}
              className="flex items-center px-6 py-3 bg-[#56CCF2] text-black rounded-lg hover:bg-[#4db8d9] transition-colors duration-300 font-medium"
            >
              <Download size={20} className="mr-2" />
              Download Resume (PDF)
            </button>
            <button
              onClick={() => handleDownload('Detailed')}
              className="flex items-center px-6 py-3 bg-[#2c2f36] text-[#56CCF2] rounded-lg hover:bg-[#363a44] transition-colors duration-300 font-medium"
            >
              <FileText size={20} className="mr-2" />
              Detailed Version
            </button>
            <button
              onClick={() => handleDownload('OnePage')}
              className="flex items-center px-6 py-3 bg-[#2c2f36] text-[#56CCF2] rounded-lg hover:bg-[#363a44] transition-colors duration-300 font-medium"
            >
              <Calendar size={20} className="mr-2" />
              One-Page Summary
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                    activeTab === tab.id
                      ? 'bg-[#56CCF2] text-black'
                      : 'bg-[#1c1f26] text-[#56CCF2] hover:bg-[#2c2f36] border border-[#2c2f36]'
                  }`}
                >
                  <IconComponent size={18} className="mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-[#1c1f26] rounded-xl p-8 border border-[#2c2f36]">
            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-4 border-[#56CCF2] pl-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-[#56CCF2]">{exp.title}</h3>
                      <div className="flex items-center text-gray-400 text-sm mt-2 md:mt-0">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-300 mb-3">
                      <Building size={16} className="mr-2" />
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <MapPin size={16} className="mr-1" />
                      <span>{exp.location}</span>
                    </div>
                    <ul className="text-gray-300 mb-4 space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#56CCF2] mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-[#2c2f36] text-[#56CCF2] rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-4 border-[#56CCF2] pl-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-[#56CCF2]">{edu.degree}</h3>
                      <div className="flex items-center text-gray-400 text-sm mt-2 md:mt-0">
                        <Calendar size={16} className="mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-300 mb-3">
                      <Building size={16} className="mr-2" />
                      <span className="font-medium">{edu.institution}</span>
                      <span className="mx-2">•</span>
                      <MapPin size={16} className="mr-1" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.gpa && (
                      <div className="text-gray-300 mb-4">
                        <span className="font-medium">GPA: </span>
                        <span className="text-[#56CCF2]">{edu.gpa}</span>
                      </div>
                    )}
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-[#56CCF2] mb-3">Relevant Courses:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.relevantCourses.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#2c2f36] text-gray-300 rounded-lg text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}



            {/* Volunteering Tab */}
            {activeTab === 'volunteering' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {volunteering.map((vol, index) => (
                  <motion.div
                    key={vol.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-4 border-[#56CCF2] pl-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-[#56CCF2]">{vol.title}</h3>
                      <div className="flex items-center text-gray-400 text-sm mt-2 md:mt-0">
                        <Calendar size={16} className="mr-1" />
                        {vol.period}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-300 mb-3">
                      <Building size={16} className="mr-2" />
                      <span className="font-medium">{vol.organization}</span>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-[#56CCF2] mb-3">Description:</h4>
                      <ul className="text-gray-300 mb-4 space-y-2">
                        {vol.description.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#56CCF2] mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <h4 className="text-lg font-semibold text-[#56CCF2] mb-3">Impact:</h4>
                      <ul className="text-gray-300 space-y-2">
                        {vol.impact.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#56CCF2] mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-[#1c1f26] rounded-xl p-8 border border-[#2c2f36] max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-[#56CCF2]">Key Skills & Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Code className="w-12 h-12 text-[#56CCF2] mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">Development</h4>
                  <p className="text-gray-300 text-sm">Full-stack web development with modern technologies</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-[#56CCF2] mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">Cybersecurity</h4>
                  <p className="text-gray-300 text-sm">Security assessment, penetration testing, and threat analysis</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-[#56CCF2] mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">Leadership</h4>
                  <p className="text-gray-300 text-sm">Team collaboration, project management, and mentoring</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
