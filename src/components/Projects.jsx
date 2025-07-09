import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AssessAI',
    logo: 'src/assets/projects/assessai.png',
    description: [
      'AssessAI addresses the growing burden on teachers in educational institutions who struggle to offer personalized feedback due to large class sizes. The platform automates grading through an AI engine that evaluates both MCQs and subjective answers.',
      'It offers distinct dashboards for teachers and students to track performance, attendance, and assignment data. A built-in AI chatbot supports one-on-one interaction, and learning is assessed across audio, visual, and handwriting formats.',
      'Built with SpringBoot, ReactJS, and MongoDB, this platform aligns with UN SDG 4: Quality Education, ensuring inclusive, personalized learning at scale.',
    ],
    tech: ['SpringBoot', 'ReactJS', 'MongoDB'],
    link: 'http://tmp-assessai.vercel.app/',
  },
  {
    title: 'CineSlate',
    logo: 'src/assets/projects/cineslate.png',
    description: [
      'CineSlate is a movie review and recommendation platform that unifies public and personal movie discovery. Users can browse, review, and rate movies while managing personalized watchlists.',
      'Built with SpringBoot and Thymeleaf, it provides secure login, seamless record keeping, and advanced search/filter mechanisms. It is optimized for both desktop and mobile use.',
      'Personalized suggestions are generated based on reviews and interests, and user authentication is handled via secure session control.',
    ],
    tech: ['SpringBoot', 'Thymeleaf', 'MySQL', 'HTML/CSS/JS'],
    link: '',
  },
  {
    title: 'SecureNotes',
    logo: 'src/assets/projects/securenotes.png',
    description: [
      'SecureNotes is a secure note management system supporting multiple users with role-based permissions. Built using Spring Security, it offers JWT-based authentication and integrates with Google OAuth for social login.',
      'Security features include encrypted storage, Two-Factor Authentication (2FA), and protected route access. Notes can only be accessed after strict verification, making it suitable for sensitive information.',
      'Frontend is built in ReactJS with a sleek, responsive UI that emphasizes data safety and user-friendly interactions.',
    ],
    tech: ['SpringBoot', 'ReactJS', 'Spring Security', 'MySQL'],
    link: '',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-[#1a1a1a] text-white py-24 px-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="ml-18 text-3xl font-bold text-center mb-20 border-b border-red-500 inline-block"
      >
        My Projects
      </motion.h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col md:flex-row gap-8 items-start bg-[#2a2a2a]/90 rounded-xl border border-[#333] hover:border-red-500 shadow-md hover:shadow-red-500/20 p-6 transition-all"
          >
            {/* Logo */}
            <img
              src={project.logo}
              alt={project.title}
              className="w-20 h-20 object-contain"
            />

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-red-500 mb-4">
                {project.title}
              </h3>

              <div className="space-y-3 text-sm text-gray-300 mb-4">
                {project.description.map((point, i) => (
                  <p key={i}>{point}</p>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#3a3a3a] px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-red-500 text-sm font-medium underline hover:text-red-400"
                >
                  View Live ↗
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
