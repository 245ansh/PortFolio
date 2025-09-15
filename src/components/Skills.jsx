import { motion } from 'framer-motion';

const skillCategories = {
  Languages: ['Java', 'C++', 'SQL','Python','HTML', 'CSS', 'JavaScript'],
  Frameworks: ['SpringBoot', 'SpringMVC', 'Hibernate', 'ReactJS', 'TailwindCSS', 'Thymleaf'],
  Tools: ['Git', 'GitHub', 'Postman', 'Intelli', 'VS', 'Linux', 'AWS', "Jenkins",'Maven',],
  Databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
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
  Intelli: '/logos/Intelli.svg',
  Linux: '/logos/Linux.svg',
  AWS: '/logos/AWS.png',
  MySQL: '/logos/MySQL.svg',
  PostgreSQL: '/logos/PostgreSQL.svg',
  MongoDB: '/logos/MongoDB.svg',
  Maven: '/logos/Maven.png',
  Jenkins: '/logos/Jenkins.png',
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

export default function Skills() {
  return (
    <section
      id="skills"
      className=" text-white py-16 px-4 md:px-20"
    >
      <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-4xl md:text-5xl font-bold mb-10"
        >
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </motion.h2>

      <div className="flex flex-col gap-16">
        {Object.entries(skillCategories).map(([category, skills], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1d1d1d] rounded-xl shadow-md shadow-red-500/10 p-5 md:p-6"
          >
            {/* Heading with animated border pulse */}
            <motion.h3
              initial={{ borderLeftWidth: '0px' }}
              whileInView={{ borderLeftWidth: '8px' }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-red-500 font-semibold mb-6 capitalize border-l-4 border-red-500 pl-3"
            >
              {category}
            </motion.h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 items-center justify-items-center">
              {skills.map((skill, i) => {
                const icon = logoMap[skill];
                return (
                  <motion.div
                    key={skill}
                    custom={i}
                    variants={cardVariant}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="group flex flex-col items-center gap-2 text-xs bg-[#2f2f2f] p-3 rounded-md shadow hover:shadow-red-500/20 transition-all duration-300 hover:scale-[1.05]"
                    whileHover={{ rotate: 1.5 }}
                  >
                    <img
                      src={icon}
                      alt={skill}
                      className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-gray-300 text-center">{skill}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
