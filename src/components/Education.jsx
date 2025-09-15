import { motion } from 'framer-motion';

const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Acropolis Institute of Technology and Research",
    location: "Indore",
    period: "2022 – 2026",
    gpa: "CGPA: 7.36",
    description: "Pursuing undergraduate degree in Computer Science and Engineering with focus on software development, programming, and engineering principles. Gaining hands-on experience in various technologies and development practices.",
    achievements: [
      "Active participant in technical workshops and seminars",
      "Working on various programming projects",
      "Building strong foundation in computer science fundamentals",
      "Developing problem-solving and analytical skills"
    ],
    relevantCourses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Programming Languages",
      "Computer Networks",
      "Object Oriented Programming"
    ]
  },
  {
    id: 2,
    degree: "12th standard from CBSE Board",
    institution: "Holy Family Convent Sr. Sec. School Khurai",
    location: "Sagar",
    period: "2021 – 2022",
    gpa: "Percentage: 88.6",
    description: "Completed 12th standard education with CBSE Board, focusing on Physics, Chemistry, and Mathematics. Built strong foundation for engineering studies.",
    achievements: [
      "Scored 88.6% in 12th CBSE Board examinations",
      "Strong performance in Science and Mathematics",
      "Active participation in school activities",
      "Developed analytical and problem-solving skills"
    ],
    relevantCourses: [
      "Physics",
      "Chemistry", 
      "Mathematics",
      "Computer Science",
      "English",
      "Physical Education"
    ]
  }
];

const EducationCard = ({ education, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-transparent rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative bg-[#2a2a2a] p-8 rounded-2xl border border-[#333] hover:border-red-500/50 transition-all duration-300">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div className="flex-1">
            <motion.h3 
              whileHover={{ scale: 1.02 }}
              className="text-2xl font-bold text-white mb-2"
            >
              {education.degree}
            </motion.h3>
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="text-red-500 font-semibold text-lg">{education.institution}</p>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">{education.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">{education.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium text-yellow-500">{education.gpa}</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed">{education.description}</p>
        
        {/* Achievements */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Key Achievements
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {education.achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-[#1a1a1a] p-3 rounded-lg border border-[#333] hover:border-red-500/30 transition-colors"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 text-sm">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Relevant Courses */}
        <div>
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Relevant Subjects
          </h4>
          <div className="flex flex-wrap gap-2">
            {education.relevantCourses.map((course, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * idx }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-400 rounded-lg text-sm border border-red-500/30 backdrop-blur-sm"
              >
                {course}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Education() {
  return (
    <section
      id="education"
      className="text-white py-16 px-4 md:px-20 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-500 rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Education Background
          </span>
        </motion.h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} education={edu} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
