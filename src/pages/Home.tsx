import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
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

  const services = [
    {
      icon: <Code className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
      title: 'Web Development',
      description: 'Creating responsive and performant web applications using modern technologies.'
    },
    {
      icon: <Palette className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces with a focus on user experience.'
    },
    {
      icon: <Globe className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
      title: 'Digital Solutions',
      description: 'Providing end-to-end digital solutions for businesses and individuals.'
    }
  ];

  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Bivek Kadel</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          A dedicated Data Analyst and IT Support Specialist with expertise in data cleaning, analysis, and creating insightful dashboards, alongside a strong technical background in diagnosing and resolving complex system issues.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/about" className="px-6 py-3 bg-transparent border border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 font-medium rounded-lg transition-colors duration-300">
              Learn More
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400 shadow-xl">
            <img 
              src="/profile.jpeg"
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">What I Do</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
           I analyze data, create insightful dashboards, and provide expert IT support to optimize systems and enhance productivity.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 dark:bg-indigo-700 text-white rounded-2xl p-10 md:p-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to work on any project?</h2>
            <p className="text-indigo-100 text-lg">
            Let's work together to turn data into actionable insights and optimize systems with innovative solutions.
            </p>
          </div>
          <Link 
            to="/contact"
            className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors duration-300 whitespace-nowrap"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;