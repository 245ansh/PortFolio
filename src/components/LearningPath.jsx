import { motion } from 'framer-motion';

const learningPath = [
  { name: 'C / C++', level: 75, note: 'Base for Programming Fundamentals' },
  { name: 'Java', level: 90, note: 'Primary Language for Advanced Programming with Data Structures and Algorithms Learning' },
  { name: 'HTML / CSS / JS', level: 70, note: 'Frontend Foundations' },
  { name: 'ReactJS', level: 70, note: 'UI Development' },
  { name: 'SQL / MySQL', level: 85, note: 'Database Management  ' },
  { name: 'Spring Boot', level: 85, note: 'Backend Development with RESTful APIs' },
  { name: 'DevOps', level: 55, note: 'Delving into the world of Deployment' },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? 50 : -50,
  }),
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
};

export default function LearningPathTree() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className=" text-white py-24 px-4 sm:px-8 md:px-24"
    >
      {/* Heading */}
      <motion.div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            The Learning Path
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          A journey through technologies, from fundamentals to advanced expertise
        </motion.p>
      </motion.div>

      {/* Timeline Container */}
      <motion.div
        className="relative flex flex-col items-center"
        variants={containerVariants}
      >
        {/* Center Stem Line (Animated height with gradient) */}
        <motion.div
          className="hidden md:block absolute top-0 w-2 bg-gradient-to-b from-red-400 via-red-500 to-red-600 z-0 rounded-full shadow-lg shadow-red-500/20"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />
        <motion.div
          className="block md:hidden absolute top-[1.5rem] bottom-[1.5rem] w-2 bg-gradient-to-b from-red-400 via-red-500 to-red-600 z-0 rounded-full shadow-lg shadow-red-500/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* Top Node with Pulse and enhanced styling */}
        <motion.div
          className="w-4 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full mb-10 z-10 shadow-lg shadow-red-500/40 animate-ping-slow ring-2 ring-red-400/30"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        />

        {/* Skill Cards */}
        {learningPath.map((item, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={itemVariants}
            className={`relative mb-12 w-full max-w-sm px-4 py-3 rounded-xl border border-[#333] shadow-md bg-[#2a2a2a]/80 backdrop-blur-md z-10 text-sm
              ${
                idx % 2 === 0
                  ? 'md:ml-[calc(50%+0.75rem)]'
                  : 'md:mr-[calc(50%+0.75rem)]'
              }
              hover:scale-[1.03] transition-transform hover:shadow-red-500/20 shadow-lg duration-300`}
          >
            {/* Enhanced Connector */}
            <div
              className={`hidden md:block absolute top-1/2 w-58 h-1.5 bg-gradient-to-r ${
                idx % 2 === 0 
                  ? 'from-red-500 to-transparent right-full' 
                  : 'from-transparent to-red-500 left-full'
              } z-10 shadow-md shadow-red-500/20`}
            ></div>

            <h3 className="text-lg font-bold text-red-400">{item.name}</h3>
            <p className="text-sm italic text-gray-400 mb-2">{item.note}</p>
            <div className="w-full h-2 bg-[#444] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
                viewport={{ once: true }}
                className="h-full bg-red-500 rounded-full"
              ></motion.div>
            </div>
            <p className="text-right text-sm text-gray-500 mt-1">
              {item.level}%
            </p>
          </motion.div>
        ))}

        {/* Bottom Node with Pulse and enhanced styling */}
        <motion.div
          className="w-4 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full mt-10 z-10 shadow-lg shadow-red-500/40 animate-ping-slow ring-2 ring-red-400/30"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Footer Heading */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pt-5 text-3xl font-bold text-center mb-20 w-full"
      >
        <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Until the Infinity...
          </span>
      </motion.h2>
    </motion.section>
  );
}
