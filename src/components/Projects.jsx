import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AssessAI',
    dashboard: '/projects/dashboard/AssessAI.png',
    logo: '/projects/logos/AssessAI.png',
    description: 'AI-powered assessment platform automating grading and providing personalized feedback for educational institutions.',
    tech: ['SpringBoot', 'ReactJS', 'MySQL', 'Tailwind', "Gemini"],
    liveLink: 'http://tmp-assessai.vercel.app/',
    githubLink: 'https://github.com/ChetanSugandhi/AssessAI',
  },
  
  {
    title: 'Adyanta',
    dashboard: '/projects/dashboard/Adyanta.png',
    logo: '/projects/logos/Adyanta.png',
    description: 'Full-stack training enrollment platform for secure user management and adaptive content delivery.',
    tech: ['ReactJs', 'Spring Boot', 'MySQL', 'Supabase','Jenkins', 'Nginx', 'Maven'],
    liveLink: 'https://training.adyanta.in/',
    githubLink: 'https://github.com/245ansh/adyanta',
  },
  
  {
    title: 'CineSlate',
    dashboard: '/projects/dashboard/CineSlate.png',
    logo: '/projects/logos/CineSlate.png',
    description: 'Movie review and recommendation platform with personalized suggestions and advanced search features.',
    tech: ['SpringBoot', 'Thymeleaf', 'MySQL', 'HTML/CSS/JS'],
    githubLink: 'https://github.com/245ansh/CineSlate',
  },
  {
    title: 'SecureNotes',
    dashboard: '/projects/dashboard/SecureNotes.png',
    logo: '/projects/logos/SecureNotes.png',
    description: 'Secure note management system with JWT authentication, 2FA, and encrypted storage for sensitive information.',
    tech: ['SpringBoot', 'ReactJS', 'Spring Security', 'MySQL'],
    githubLink: 'https://github.com/245ansh/securedspgb',
  },
  {
    title: 'TongueFu',
    dashboard: '/projects/dashboard/TongueFu.png',
    logo: '/projects/logos/TongueFu.png',
    description: 'Digital speech therapy platform designed specifically for individuals who stammer and stutter. Features interactive exercises, progress tracking, personalized therapy sessions, and real-time speech analysis.',
    tech: ['ExpressJs', 'ReactJS', 'MongoDB', 'Tailwind', "NodeJs"],
    liveLink: 'https://tonguefu.netlify.app/',
    githubLink: 'https://github.com/ParthGupta84616/TongueFu',
  },
];

// Animation Variants
const projectVariant = {
  hidden: { opacity: 0, y: 50 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.3 },
  }),
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full  text-white py-24 px-4"
    >
      <div className="flex justify-center mb-10">
      <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>
</div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="show"
              variants={projectVariant}
              viewport={{ once: true }}
              className="bg-[#2a2a2a]/90 rounded-xl border border-[#333] hover:border-red-500 shadow-md hover:shadow-red-500/20 p-6 transition-all flex flex-col h-full"
            >
              {/* Project Images */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                {/* Dashboard Screenshot */}
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  src={project.dashboard}
                  alt={`${project.title} dashboard`}
                  className="w-full h-55 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a]/70 to-transparent"></div>
                
                {/* Project Logo Overlay */}
                <div className="absolute top-3 right-3">
                  <motion.img
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-12 h-12 object-contain bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-red-500 mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#3a3a3a] px-2 py-1 rounded-full hover:bg-red-500/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors text-center"
                    >
                      Live Demo
                    </motion.a>
                  )}
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${project.liveLink ? 'flex-1' : 'w-full'} bg-[#3a3a3a] hover:bg-[#4a4a4a] text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors text-center`}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
