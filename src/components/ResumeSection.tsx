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
      period: 'Jun 2023 - Aug 2023',
      description: [
        'Assisted with legal research and document preparation for corporate and financial services matters',
        'Supported attorneys in due diligence processes and regulatory compliance reviews',
        'Gained exposure to international business law and offshore financial services'
      ],
      technologies: ['Legal Research', 'Document Preparation', 'Due Diligence', 'Regulatory Compliance']
    }
  ];

  const education: Education[] = [
    {
      id: '1',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Methodist University',
      location: 'Fayetteville, NC',
      period: 'Aug 2021 - May 2025',
      gpa: '3.8/4.0',
      relevantCourses: [
        'Data Structures & Algorithms',
        'Computer Networks & Security',
        'Database Systems',
        'Software Engineering',
        'Machine Learning',
        'Cybersecurity Fundamentals',
        'Operating Systems',
        'Web Development'
      ]
    }
  ];

  const volunteering: Volunteering[] = [
    {
      id: '1',
      title: 'Cybersecurity Club President',
      organization: 'Methodist University',
      period: 'Sep 2023 - Present',
      description: [
        'Lead weekly meetings and workshops on cybersecurity topics',
        'Organize capture-the-flag competitions and security challenges',
        'Mentor new members in cybersecurity fundamentals'
      ],
      impact: [
        'Increased club membership by 40%',
        'Hosted 3 successful cybersecurity workshops',
        'Led team to 2nd place in regional CTF competition'
      ]
    },
    {
      id: '2',
      title: 'Community Tech Support Volunteer',
      organization: 'Local Community Center',
      period: 'Jan 2023 - Present',
      description: [
        'Provide free technical support to community members',
        'Teach basic computer skills to seniors',
        'Help with device setup and troubleshooting'
      ],
      impact: [
        'Assisted 50+ community members',
        'Conducted 12 computer literacy workshops',
        'Reduced tech support wait times by 60%'
      ]
    }
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/31-resume-mark-leslie-plowright-cli.pdf';
    link.download = 'mark-leslie-plowright-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#56CCF2]">Resume & Experience</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Download my detailed resume and explore my professional journey, education, and community involvement.
            </p>
            
            <button
              onClick={handleDownload}
              className="mt-6 flex items-center gap-2 px-6 py-3 bg-[#56CCF2] text-white rounded-lg hover:bg-[#56CCF2]/80 transition-colors duration-300 mx-auto"
            >
              <Download size={20} />
              Download Full Resume
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#1c1f26] rounded-lg p-1 flex">
              {[
                { key: 'experience', label: 'Experience', icon: Building },
                { key: 'education', label: 'Education', icon: BookOpen },
                { key: 'volunteering', label: 'Volunteering', icon: Users }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-[#56CCF2] text-white'
                      : 'text-gray-400 hover:text-white hover:bg-[#2c2f36]'
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1c1f26] rounded-lg p-8 border border-[#2c2f36]"
          >
            {activeTab === 'experience' && (
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border-l-4 border-[#56CCF2] pl-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-1">
                            <Building size={16} />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="text-gray-300 mb-4 space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#56CCF2] mt-2">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#2c2f36] text-[#56CCF2] text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border-l-4 border-[#56CCF2] pl-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-1">
                            <Building size={16} />
                            {edu.institution}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {edu.period}
                          </div>
                        </div>
                        {edu.gpa && (
                          <div className="flex items-center gap-1 text-[#56CCF2] mt-2">
                            <Award size={16} />
                            GPA: {edu.gpa}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-medium text-white mb-3">Relevant Courses</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {edu.relevantCourses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-[#2c2f36] text-gray-300 text-sm rounded text-center"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'volunteering' && (
              <div className="space-y-8">
                {volunteering.map((vol, index) => (
                  <motion.div
                    key={vol.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border-l-4 border-[#56CCF2] pl-6"
                  >
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold text-white mb-1">{vol.title}</h3>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Building size={16} />
                          {vol.organization}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {vol.period}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-medium text-white mb-3">Description</h4>
                      <ul className="text-gray-300 space-y-2">
                        {vol.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#56CCF2] mt-2">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">Impact</h4>
                      <ul className="text-gray-300 space-y-2">
                        {vol.impact.map((imp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#56CCF2] mt-2">•</span>
                            <span>{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;



