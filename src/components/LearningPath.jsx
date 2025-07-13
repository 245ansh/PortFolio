import { motion } from 'framer-motion';

const learningPath = [
  { name: 'C / C++', level: 75, note: 'Problem-solving base' },
  { name: 'Java', level: 90, note: 'OOP & backend fundamentals' },
  { name: 'HTML / CSS / JS', level: 70, note: 'Frontend foundation' },
  { name: 'ReactJS', level: 70, note: 'UI development' },
  { name: 'SQL / MySQL', level: 85, note: 'Database basics' },
  { name: 'Spring Boot', level: 85, note: 'RESTful APIs' },
  { name: 'AWS', level: 60, note: 'Cloud & deployment' },
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
      className="bg-[#1a1a1a] text-white py-24 px-4 sm:px-8 md:px-24"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-bold text-center mx-auto mb-20 border-b border-red-500 pb-2 w-fit"
      >
        My Learning Path
      </motion.h2>

      {/* Timeline Container */}
      <motion.div
        className="relative flex flex-col items-center"
        variants={containerVariants}
      >
        {/* Center Stem Line (Animated height) */}
        <motion.div
          className="hidden md:block absolute top-0 w-1 bg-red-500 z-0 rounded"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <motion.div
          className="block md:hidden absolute top-[1.5rem] bottom-[1.5rem] w-1 bg-red-500 z-0 rounded"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />

        {/* Top Node with Pulse */}
        <motion.div
          className="w-3 h-3 bg-red-500 rounded-full mb-10 z-10 shadow animate-ping-slow"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
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
            {/* Connector */}
            <div
              className={`hidden md:block absolute top-1/2 w-58 h-1 bg-red-500 z-10 ${
                idx % 2 === 0 ? 'right-full' : 'left-full'
              }`}
            ></div>

            <h3 className="text-md font-bold text-red-400">{item.name}</h3>
            <p className="text-xs italic text-gray-400 mb-2">{item.note}</p>
            <div className="w-full h-2 bg-[#444] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
                className="h-full bg-red-500 rounded-full"
              ></motion.div>
            </div>
            <p className="text-right text-xs text-gray-500 mt-1">
              {item.level}%
            </p>
          </motion.div>
        ))}

        {/* Bottom Node with Pulse */}
        <motion.div
          className="w-3 h-3 bg-red-500 rounded-full mt-10 z-10 shadow animate-ping-slow"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        />
      </motion.div>

      {/* Footer Heading */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-5 text-3xl font-bold text-center mb-20 w-full"
      >
        Until the Infinity...
      </motion.h2>
    </motion.section>
  );
}
