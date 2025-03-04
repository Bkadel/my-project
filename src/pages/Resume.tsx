import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Briefcase, BookOpen, Award, Code } from 'lucide-react';

const Resume: React.FC = () => {
  const skills = {
    technical: [
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 90 },
      { name: 'Python', level: 98 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'SQL/NoSQL Databases', level: 85 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'Power Bi ', level: 89 }
      ,
    ],
    soft: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Communication', level: 90 },
      { name: 'Teamwork', level: 90 },
      { name: 'Time Management', level: 95 },
      { name: 'Adaptability', level: 85 },
    ]
  };

  const experiences = [
    {
      title: 'Data Analyst Intern',
      company: 'Caldwell University',
      period: '2025-Present',
      responsibilities: [
        'Analyze institutional data to generate insights that support university departments and stakeholders.',
        'Clean, validate, and process large datasets to ensure high data quality for decision-making',
        'Develop interactive dashboards and reports using Power BI and Excel to present findings.',
        'Apply statistical techniques and data visualization best practices to communicate insights.',
        'Contribute to projects focused on improving university services and student outcomes through data-driven solutions.'
        
      ]
    },
    {
      title: 'IT Support Specialist',
      company: 'Caldwell University',
      period: '2022-Present',
      responsibilities: [
        'Expertly diagnoses and resolves 500+ technical issues, encompassing hardware upgrades, network troubleshooting, and software-related challenges, resulting in a 99% issue resolution rate and a marked improvement in computer efficiency for faculty and students.',
        'Demonstrates exceptional problem-solving acumen, addressing diverse issues, from complex RAM and hard disk upgrades to intricate printer and network problems, ensuring seamless computer operation and reducing downtime by 30%.',
        'Provides invaluable support to professors, swiftly resolving technical obstacles during teaching sessions, enhancing their pedagogical experience, and contributing to 100% class continuity, even in the face of technical disruptions.',
        'Streamlines and optimizes computer systems, proactively managing maintenance and upgrades for 100+ computers,70 projectors, and classroom equipment, ensuring top-notch functionality and minimizing interruptions to academic activities, resulting in a 25% improved equipment performance and a boost in overall productivity.', 
      ]
    }
    
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Caldwell University',
      year: '2022- Present',
      details: 'Graduating with a degree in Computer Science from Caldwell University, I have gained a strong foundation in programming, software development, and technical problem-solving, contributing to my current roles and enhancing my analytical skills. GPA: 3.8/4.0'
    }
  ];

  const certifications = [
    {
      name: 'Data Analyst in Power BI',
      issuer: 'Data Camp',
      date: 'Nov 23, 2024',
      credentialId: '#550,203'
    },
    {
      name: 'Intermediate SQL',
      issuer: 'Data Camp',
      date: 'Sep 30, 2024',
      credentialId: '#36,396,868'
    }
  ];

  const handleDownloadResume = () => {
    // In a real application, this would trigger a request to the backend
    // to download the resume file
    fetch('http://localhost:3001/api/resume/download')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'Bivek_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error downloading resume:', error));
  };

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">My Resume</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A summary of my experience, skills, and qualifications
          </p>
        </div>
        <button
          onClick={handleDownloadResume}
          className="mt-4 md:mt-0 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Resume
        </button>
      </motion.div>

      {/* Skills Section */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Code className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Technical Skills</h3>
            <div className="space-y-6">
              {skills.technical.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="bg-indigo-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Soft Skills</h3>
            <div className="space-y-6">
              {skills.soft.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="bg-indigo-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Briefcase className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400">{exp.company}</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <BookOpen className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400">{edu.institution}</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{edu.year}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <div className="flex items-center mb-8">
          <Award className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start">
                <FileText className="w-10 h-10 mr-4 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Issued: {cert.date}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Credential ID: {cert.credentialId}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;