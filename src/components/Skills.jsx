import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const skillCategories = {
  Languages: [
    { name: 'Java', level: 90, description: 'Enterprise development, Spring ecosystem' },
    { name: 'C++', level: 75, description: 'System programming, algorithms' },
    { name: 'SQL', level: 85, description: 'Database queries, optimization' },
    { name: 'Python', level: 80, description: 'Data analysis, automation, scripting' },
    { name: 'HTML', level: 95, description: 'Semantic markup, accessibility' },
    { name: 'CSS', level: 90, description: 'Responsive design, animations' },
    { name: 'JavaScript', level: 88, description: 'ES6+, async programming, DOM manipulation' }
  ],
  Frameworks: [
    { name: 'SpringBoot', level: 85, description: 'REST APIs, microservices' },
    { name: 'SpringMVC', level: 80, description: 'Web applications, MVC pattern' },
    { name: 'Hibernate', level: 75, description: 'ORM, database abstraction' },
    { name: 'ReactJS', level: 92, description: 'Hooks, Context, component architecture' },
    { name: 'TailwindCSS', level: 88, description: 'Utility-first CSS, responsive design' },
    { name: 'Thymleaf', level: 70, description: 'Server-side templating' }
  ],
  Tools: [
    { name: 'Git', level: 90, description: 'Version control, branching strategies' },
    { name: 'GitHub', level: 88, description: 'Collaboration, CI/CD workflows' },
    { name: 'Postman', level: 85, description: 'API testing, documentation' },
    { name: 'IntelliJ', level: 82, description: 'Java development, debugging' },
    { name: 'VS', level: 87, description: 'Web development, extensions' },
    { name: 'Linux', level: 78, description: 'Command line, system administration' },
    { name: 'AWS', level: 72, description: 'Cloud services, deployment' },
    { name: 'Jenkins', level: 68, description: 'CI/CD pipelines, automation' },
    { name: 'Maven', level: 80, description: 'Build management, dependencies' },
    { name: 'Docker', level: 65, description: 'Containerization, orchestration' },
    { name: 'Kubernetes', level: 60, description: 'Container orchestration, automation' },
    {name:'Ansible', level: 60, description: 'Configuration management, automation'}
  ],
  Databases: [
    { name: 'MySQL', level: 85, description: 'Relational databases, indexing' },
    { name: 'PostgreSQL', level: 82, description: 'Advanced features, performance' },
    { name: 'MongoDB', level: 75, description: 'NoSQL, document storage' }
  ],
};

const logoMap = {
  'C++': '/logos/C++.svg',
  SQL:'/logos/SQL.svg',
  Python:'/logos/Python.svg',
  Java: '/logos/Java.svg',
  JavaScript: '/logos/JavaScript.svg',
  HTML: '/logos/HTML.svg',
  CSS: '/logos/CSS.svg',
  SpringBoot: '/logos/SpringBoot.svg',
  SpringMVC: '/logos/SpringMVC.svg',
  Hibernate: '/logos/Hibernate.png',
  ReactJS: '/logos/ReactJS.svg',
  TailwindCSS: '/logos/TailwindCSS.svg',
  Thymleaf: '/logos/Thymeleaf.svg',
  Git: '/logos/Git.svg',
  GitHub: '/logos/Github.png',
  Postman: '/logos/Postman.svg',
  VS: '/logos/VS.svg',
  IntelliJ: '/logos/IntelliJ.svg',
  Linux: '/logos/Linux.svg',
  AWS: '/logos/AWS.png',
  MySQL: '/logos/MySQL.svg',
  PostgreSQL: '/logos/PostgreSQL.svg',
  MongoDB: '/logos/MongoDB.svg',
  Maven: '/logos/Maven.png',
  Jenkins: '/logos/Jenkins.png',
  Ansible:'/logos/Ansible.svg',
  Docker:'/logos/Docker.png',
  Kubernetes:'/logos/Kubernetes.svg',
};

// Card Animation Variant
const cardVariant = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      type: 'spring',
      stiffness: 100,
    },
  }),
};

// Progress Bar Animation Variant
const progressVariant = {
  hidden: { width: '0%' },
  show: (level) => ({
    width: `${level}%`,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
      delay: 0.3
    }
  })
};

// Skill Card Component
const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const icon = logoMap[skill.name];
  
  const getProficiencyColor = (level) => {
    if (level >= 90) return 'from-green-400 to-green-600';
    if (level >= 80) return 'from-blue-400 to-blue-600';
    if (level >= 70) return 'from-yellow-400 to-yellow-600';
    return 'from-red-400 to-red-600';
  };
  
  const getProficiencyLabel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <motion.div
      key={skill.name}
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="bg-[#2f2f2f] p-4 rounded-lg shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:scale-[1.05] border border-gray-700 hover:border-red-500/50">
        {/* Skill Icon and Name */}
        <div className="flex flex-col items-center mb-3">
          <img
            src={icon}
            alt={skill.name}
            className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 mb-2"
          />
          <span className="text-gray-300 text-sm font-medium text-center">{skill.name}</span>
          
        </div>
        
        {/* Progress Bar
        <div className="w-full bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
          <motion.div
            custom={skill.level}
            variants={progressVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`h-full bg-gradient-to-r ${getProficiencyColor(skill.level)} rounded-full`}
          />
        </div>
        
        {/* Percentage */}
        {/* <div className="text-center">
          <span className="text-xs text-gray-400">{skill.level}%</span>
        </div> */}
      </div> 
      
      {/* Hover Tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-xl border border-gray-700 whitespace-nowrap max-w-xs"
        >
          <div className="font-semibold mb-1">{skill.name}</div>
          <div className="text-gray-300">{skill.description}</div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = ['All', ...Object.keys(skillCategories)];
  
  const getFilteredSkills = () => {
    let filtered = [];
    
    if (activeCategory === 'All') {
      Object.values(skillCategories).forEach(categorySkills => {
        filtered = [...filtered, ...categorySkills];
      });
    } else {
      filtered = skillCategories[activeCategory] || [];
    }
    
    if (searchTerm) {
      filtered = filtered.filter(skill => 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };
  
  const filteredSkills = getFilteredSkills();
  
  return (
    <section
      id="skills"
      className="text-white py-16 px-4 md:px-20 relative overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-4xl md:text-5xl font-bold mb-10 text-center"
        >
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </motion.h2>
        
        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 max-w-2xl mx-auto"
        >
          {/* Search Input */}
          {/* <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-[#2f2f2f] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
            />
            <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div> */}
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                    : 'bg-[#2f2f2f] text-gray-300 hover:bg-[#3f3f3f] border border-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          >
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8"
          >
            <p className="text-gray-400 text-lg">No skills found matching your search.</p>
          </motion.div>
        )}
        
        {/* Skills Summary */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-[#2f2f2f] px-6 py-3 rounded-lg border border-gray-600">
            <span className="text-gray-300">Total Skills:</span>
            <span className="text-red-400 font-bold text-lg">
              {Object.values(skillCategories).flat().length}
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">Categories:</span>
            <span className="text-red-400 font-bold text-lg">
              {Object.keys(skillCategories).length}
            </span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
