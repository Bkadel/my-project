import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const skills = [
    'React', 'Javascript', 'Node.js', 'Express', 'MongoDB', 
    'SQL', 'Tailwind CSS', 'Python', 'Next.js', 'NoSQL',
    'HTML/CSS', 'Pandas', 'Git', 'Numpy', 'PoweBi', 'Figma','EDRplus'
  ];

  const experiences = [
    {
      title: 'Data Analyst Intern ',
      company: 'caldwell University',
      period: '2025 - Present',
      description: 'Leading the Data Analyst team, analyzing institutional data, cleaning and processing large datasets, and creating interactive dashboards to provide data-driven insights that support university departments and improve student outcomes.'
    },
    {
      title: 'IT Support Specialist ',
      company: 'Caldwell University',
      period: '2022-Present',
      description: 'As an IT Support Specialist at Caldwell University, I diagnose and resolve over 500 technical issues, ranging from hardware upgrades to network troubleshooting, ensuring optimal system performance, minimizing downtime, and supporting faculty with seamless technology use during teaching sessions.'
    },
  ];

  const education = [

    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Caldwell University',
      year: '2022 - Present',
      description: 'Graduating with a degree in Computer Science from Caldwell University, I have gained a strong foundation in programming, software development, and technical problem-solving, contributing to my current roles and enhancing my analytical skills.'
    }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* About Me Section */}
      <section className="flex flex-col md:flex-row gap-12 items-center">
        <motion.div 
          className="md:w-1/3"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-64 h-64 md:w-full md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/about.jpeg" 
              alt="About Me" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-2/3"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h1>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
            Hello! I'm Bivek Kadel, a dedicated Computer Science major with a minor in Business Analytics, currently in my senior year at Caldwell University. With a strong passion for data analytics, data science, and data engineering, I am committed to uncovering meaningful insights from data and building data-driven solutions.
            </p>
            <p>
            I am currently gaining hands-on experience as a Student Tech Support Specialist, where I troubleshoot hardware and networking issues, and as a Data Analyst Intern, where I work with real-world datasets to extract valuable insights. My journey into data began during my university years, where I developed a keen interest in analyzing, cleaning, and visualizing data to solve complex problems.
            </p>
            <p>
            I believe in writing efficient, well-structured code and continuously expanding my knowledge of data technologies. My approach to analytics and engineering focuses on delivering accurate, actionable insights that drive decision-making. As I progress in my career, I strive to deepen my expertise in data-driven problem-solving and innovative analytics.
            </p>
            <p>
            When I am not working with data, you can find me exploring new technologies, refining my web development skills, or analyzing trends in the tech world. I'm always eager to take on new challenges and grow in my field.
             </p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">Skills & Technologies</h2>
        <motion.div 
          className="flex flex-wrap gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.span 
              key={index}
              className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
              variants={itemVariants}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section>
        <div className="flex items-center mb-8">
          <Briefcase className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
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
                <div className="flex items-center mt-2 md:mt-0">
                  <Calendar className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <div className="flex items-center mb-8">
          <BookOpen className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
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
                <div className="flex items-center mt-2 md:mt-0">
                  <Calendar className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <div className="flex items-center mb-8">
          <Award className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Certifications</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Data Analyst in Tableau</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Datacamp</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Issued: Nov 20, 2024</p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Applying SQL to Real-World Problems</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Datacamp</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Issued: Nov 08, 2024</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;